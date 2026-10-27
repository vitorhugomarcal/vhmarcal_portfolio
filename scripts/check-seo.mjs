import assert from 'node:assert/strict';

const baseUrl = new URL(process.argv[2] || 'http://localhost:3000');
const canonicalOrigin = 'https://orbizy.app';
const languageUrls = {
  'pt-BR': canonicalOrigin,
  en: `${canonicalOrigin}/en`,
  'x-default': canonicalOrigin,
};

async function request(path, headers = {}) {
  const response = await fetch(new URL(path, baseUrl), {
    redirect: 'manual',
    headers,
    signal: AbortSignal.timeout(20000),
  });
  return {response, body: await response.text()};
}

function attributes(tag) {
  return Object.fromEntries(
    [...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [key.toLowerCase(), value])
  );
}

function checkPage(body, path, lang) {
  const links = [...body.matchAll(/<link\b[^>]*>/g)].map(([tag]) => attributes(tag));
  const metas = [...body.matchAll(/<meta\b[^>]*>/g)].map(([tag]) => attributes(tag));
  const canonical = `${canonicalOrigin}${path === '/' ? '' : path}`;
  assert.match(body, new RegExp(`<html lang="${lang}"`));
  assert.equal(links.filter((link) => link.rel === 'canonical').length, 1);
  assert.equal(links.find((link) => link.rel === 'canonical')?.href, canonical);
  assert.equal(metas.find((meta) => meta.property === 'og:url')?.content, canonical);
  for (const [language, url] of Object.entries(languageUrls)) {
    assert.equal(links.find((link) => link.hreflang === language)?.href, url);
  }
  assert.equal(metas.find((meta) => meta.name === 'robots')?.content, 'index, follow');
  assert.ok(!body.includes('google-site-verification-id'));
  assert.equal([...body.matchAll(/<h1\b/g)].length, 1);
  assert.match(body, /<main>/);
  assert.match(body, /<section\b[^>]*id="projects"[^>]*aria-labelledby="projects-heading"/);
  assert.match(body, /<h2\b[^>]*id="projects-heading"/);
  assert.match(body, /<h3\b[^>]*>[\s\S]*?Orbizy Sales/);
  const switchLink = [...body.matchAll(/<a\b[^>]*>/g)]
    .map(([tag]) => attributes(tag))
    .find((link) => link.hreflang);
  assert.equal(switchLink?.href, path === '/' ? '/en' : '/');
  const schema = JSON.parse(body.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1] || 'null');
  assert.ok(schema?.['@graph'].some((entity) => entity['@type'] === 'Person'));
  assert.ok(schema?.['@graph'].some((entity) => entity['@type'] === 'WebSite'));
  assert.equal(schema?.['@graph'].find((entity) => entity['@type'] === 'ProfilePage')?.url, canonical);
  assert.match(body, lang === 'pt-BR'
    ? /<title>Vitor Hugo Marçal \| Desenvolvedor Full Stack \| Orbizy<\/title>/
    : /<title>Vitor Hugo Marçal \| Full Stack Developer \| Orbizy<\/title>/);
  assert.match(body, lang === 'pt-BR' ? /Vamos conversar/ : /Let(?:&#x27;|&apos;|')s talk/);
}

try {
  for (const [path, lang, opposite] of [['/', 'pt-BR', 'en'], ['/en', 'en', 'pt']]) {
    for (const headers of [{}, {cookie: `NEXT_LOCALE=${opposite}`, 'accept-language': opposite}, {cookie: 'NEXT_LOCALE=invalid'}]) {
      const {response, body} = await request(path, headers);
      assert.equal(response.status, 200, `${path} must respond directly with 200`);
      assert.ok(!response.headers.get('x-robots-tag')?.includes('noindex'));
      checkPage(body, path, lang);
    }
    console.log(`PASS ${path}: idioma, metadados, links e schema, com e sem cookies`);
  }

  const {response: robots, body: rules} = await request('/robots.txt');
  assert.equal(robots.status, 200, 'robots.txt must respond without redirects');
  assert.match(rules, /User-Agent: \*/i);
  assert.match(rules, /Allow: \/\s/);
  assert.match(rules, /Sitemap: https:\/\/orbizy.app\/sitemap.xml/);
  assert.ok(!/^Disallow: \/\s*$/m.test(rules));

  const {response: sitemap, body: xml} = await request('/sitemap.xml');
  assert.equal(sitemap.status, 200, 'sitemap.xml must respond without redirects');
  assert.match(sitemap.headers.get('content-type') || '', /xml/);
  const locations = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(([, url]) => url).sort();
  assert.deepEqual(locations, [canonicalOrigin, `${canonicalOrigin}/en`]);
  for (const entry of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    for (const [language, url] of Object.entries(languageUrls)) {
      assert.ok(entry[1].includes(`hreflang="${language}" href="${url}"`));
    }
  }
  assert.ok(!xml.includes('<lastmod>'), 'Avoid artificial modification dates');
  console.log('PASS robots.txt e sitemap.xml: acesso direto e URLs canônicas');

  const {response: legacy} = await request('/pt');
  assert.ok([301, 302, 307, 308].includes(legacy.status));
  assert.equal(new URL(legacy.headers.get('location'), baseUrl).pathname, '/');
  for (const path of ['/pagina-inexistente-seo-check', '/en/pagina-inexistente-seo-check', '/fr']) {
    const {response} = await request(path);
    assert.equal(response.status, 404, `${path} must not be a soft 404`);
  }
  console.log('PASS /pt redireciona para / e URLs inexistentes retornam 404');
} catch (error) {
  console.error(`SEO check failed: ${error.message}${error.cause ? ` (${error.cause.message})` : ''}`);
  process.exitCode = 1;
}
