import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { resolve } from 'node:path';
import sharp from 'sharp';

const checked = new Set();

function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)]
    .map(([, key, value]) => [key.toLowerCase(), value]));
}

async function asset(url) {
  assert.ok(url.startsWith('/') && !url.startsWith('//'), `Expected a local image: ${url}`);
  const path = resolve('public', `.${decodeURIComponent(url)}`);
  return { metadata: await sharp(path).metadata(), bytes: (await stat(path)).size };
}

try {
  for (const locale of ['pt', 'en']) {
    const html = await readFile(`.next/server/app/${locale}.html`, 'utf8');
    assert.match(html, /<noscript>[\s\S]*?\[data-reveal\][\s\S]*?<\/noscript>/,
      'Animated content must remain visible without JavaScript');
    for (const [tag] of html.matchAll(/<img\b[^>]*>/g)) {
      const image = attributes(tag);
      assert.ok('alt' in image, `${image.src} must have an alt attribute`);
      assert.ok(Number(image.width) > 0 && Number(image.height) > 0,
        `${image.src} must reserve space before loading`);
      if (checked.has(image.src)) continue;
      const original = await asset(image.src);
      assert.ok(Math.abs(Number(image.width) / Number(image.height)
        - original.metadata.width / original.metadata.height) < 0.001,
      `Incorrect intrinsic image ratio: ${image.src}`);
      assert.ok(original.bytes <= 100 * 1024, `Image exceeds 100 KiB: ${image.src}`);
      assert.ok(image.srcset && image.sizes, `Responsive image candidates required: ${image.src}`);
      for (const candidate of image.srcset.split(',')) {
        const [url, width] = candidate.trim().split(/\s+/);
        const resized = await asset(url);
        assert.equal(resized.metadata.width, Number(width.replace('w', '')),
          `Incorrect srcset width: ${url}`);
      }
      checked.add(image.src);
    }
    for (const [tag] of html.matchAll(/<link\b[^>]*>/g)) {
      const link = attributes(tag);
      if (!['icon', 'apple-touch-icon'].includes(link.rel)) continue;
      const icon = await asset(link.href);
      assert.equal(`${icon.metadata.width}x${icon.metadata.height}`, link.sizes);
      assert.ok(icon.bytes <= 32 * 1024, `Icon exceeds 32 KiB: ${link.href}`);
    }
  }
  console.log(`PASS ${checked.size} images: intrinsic ratios, responsive candidates, alt text and size budgets`);
  console.log('PASS local icons and content fallback without JavaScript');
} catch (error) {
  console.error(`Asset check failed: ${error.message}`);
  process.exitCode = 1;
}
