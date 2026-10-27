# SEO e indexação da orbizy.app

Auditoria e publicação realizadas em 26/10/2026. Código publicado em produção no projeto `vhmarcal-portfolio`, após autorização explícita do usuário. O domínio principal é `https://orbizy.app`, sem www.

## Publicação concluída

- Projeto: `prj_nhwaiML4pmhZYyzpaS7k8HMufIWp`, equipe `vhmarcals-projects`.
- Deployment final: `dpl_GAEzGza5qRJjMCpdrax16bPR7nzb`, estado `READY`.
- URL do deployment: https://vhmarcal-portfolio-b3qex5ntr-vhmarcals-projects.vercel.app
- Inspeção: https://vercel.com/vhmarcals-projects/vhmarcal-portfolio/GAEzGza5qRJjMCpdrax16bPR7nzb
- Origem: arquivos locais enviados pela CLI oficial da Vercel 65.4.0. Esta pasta não contém Git; o deployment não corresponde a um novo commit remoto.
- Build de produção preparado sem atribuir os domínios, conferido e promovido em seguida. A atribuição de `orbizy.app`, `www.orbizy.app` e `vhmarcal-portfolio.vercel.app` foi concluída.
- `orbizy.app`: redirecionamento para www removido, domínio verificado e conectado à produção.
- `www.orbizy.app`: redirecionamento permanente 308 para `orbizy.app`, domínio verificado.
- `/pt`: redirecionamento permanente 308 para `https://orbizy.app/` adicionado a `vercel.json` e conferido no deployment antes da promoção.
- HTML de `/` e `/en`, robots e sitemap conferidos no endereço público com HTTP 200; metadados novos presentes e verificação fictícia ausente. `/en` usa conteúdo e canonical em inglês.
- `https://www.orbizy.app/en` responde 308 para `https://orbizy.app/en`; raiz e sitemap com www também foram conferidos com redirecionamento para o domínio principal.
- URL inexistente conferida com HTTP 404.
- A consulta pública a `/pt` pelo conector terminou no HTML canônico com HTTP 200; essa consulta não confirma o status HTTP intermediário. O 308 foi observado diretamente no deployment antes da promoção, quando o destino era de outro host.
- A consulta de logs de erro/fatal do primeiro deployment publicado não retornou registros. Isso não constitui uma medição de tráfego ou de Core Web Vitals.

A checagem HTTP direta pelo terminal local não conseguiu conectar ao domínio público neste ambiente; a validação publicada foi feita pelo conector autenticado da Vercel. O teste completo local havia passado.

**Persistência no repositório:** as mudanças ainda precisam ser sincronizadas com `vitorhugomarcal/vhmarcal_portfolio` na branch `main`. Um futuro deployment originado do código remoto antigo pode remover estas correções. Não foram alterados o histórico nem os arquivos do repositório remoto.

## Problema confirmado em produção antes da correção

O projeto Vercel `vhmarcal-portfolio` aponta `orbizy.app` para `www.orbizy.app` com HTTP 308. O código em `vercel.json` redireciona o host `www.orbizy.app` de volta para `orbizy.app`.

A inspeção HTTP confirmou o ciclo para os arquivos de descoberta:

- `https://orbizy.app/sitemap.xml` → 308 para `https://www.orbizy.app/sitemap.xml`.
- `https://www.orbizy.app/sitemap.xml` → 308 para `https://orbizy.app/sitemap.xml`.
- `https://www.orbizy.app/robots.txt` → 308 para `https://orbizy.app/robots.txt`.

O canonical no HTML aponta para a versão sem www, que é a versão mantida nesta implementação. A raiz com www respondeu 200 na consulta, mas isso não elimina o bloqueio dos arquivos acima. Não foi possível consultar o relatório privado do Search Console para atribuir um motivo de exclusão específico do Google.

## Correções implementadas no código

- Fonte única de URLs canônicas em `src/lib/seo.ts`.
- `/` em português e `/en` em inglês, com título, descrição e Open Graph próprios.
- Locale determinado pela rota, validado contra os idiomas suportados. O conteúdo não depende mais do cookie `NEXT_LOCALE`.
- Páginas pré-renderizadas como HTML estático.
- Alternativas `pt-BR`, `en` e `x-default` consistentes no HTML e no sitemap; removido o cabeçalho hreflang automático baseado no host da requisição para evitar sinais divergentes.
- Seletor de idioma usa links HTML rastreáveis.
- Dados estruturados Person, WebSite e ProfilePage com referências entre as entidades.
- Removida a verificação fictícia `google-site-verification-id`. Se a propriedade já é verificada por DNS, não é necessário inserir uma meta tag. Se a propriedade usa verificação HTML, preserve o token real ao publicar.
- Removidas datas artificiais de modificação no sitemap. Não foram inventadas datas de atualização do conteúdo.
- Hierarquia de títulos das seções e dos cartões, região principal e descrição da foto de perfil.
- Carregamento adiado das imagens de projetos e certificados; prioridade para a foto principal.
- Dimensões fictícias de Open Graph removidas.

## Validação concluída

- `npm run build`: aprovado, incluindo TypeScript e geração estática de pt/en.
- `npm run seo:check -- http://localhost:3109`: aprovado.
- Testados `/` e `/en` sem cookies, com cookie de idioma oposto e com cookie inválido; conferidos idioma, canonical, hreflang, Open Graph, schema e conteúdo.
- `robots.txt` e `sitemap.xml` locais retornam 200 diretamente.
- `/pt` redireciona para `/`; URLs inexistentes retornam 404.
- Troca de idioma no navegador: aprovada.
- Auditores de SEO e GEO do projeto: aprovados nos dois HTMLs gerados. A análise direta de TSX produz falsos positivos porque os metadados são gerados pela API do Next.js; o HTML final contém as tags verificadas.

Para repetir os testes:

```powershell
npm ci
npm run build
npm run start -- --hostname localhost --port 3109
```

Em outro terminal:

```powershell
npm run seo:check -- http://localhost:3109
```

Use `localhost` no servidor local: esta versão do Next.js apresenta um problema conhecido de reescrita quando iniciada com `--hostname 127.0.0.1`.

## Procedimento utilizado em produção

1. No painel Vercel, abra `vhmarcal-portfolio` → Settings → Domains.
2. Edite `orbizy.app`, remova o redirecionamento para www e selecione a conexão com Production. Salve e valide que a raiz responde 200. Faça isso antes de adicionar qualquer redirecionamento de www para o domínio principal.
3. Mantenha `www.orbizy.app` redirecionando permanentemente para `orbizy.app`. O `vercel.json` existente já declara essa direção; a configuração do painel não pode contradizê-la.
4. Publique o código corrigido no mesmo projeto. Esta cópia local veio de um arquivo extraído e não contém `.git`; o repositório usado pelo deployment atual é `vitorhugomarcal/vhmarcal_portfolio`, branch `main`. Não basta republicar o commit remoto antigo, pois ele não contém estas alterações locais.
5. Execute `npm run seo:check -- https://orbizy.app` após o deployment. Confira também que `https://www.orbizy.app/en` redireciona para `https://orbizy.app/en` sem retornar para www.

O conector da Vercel disponível nesta sessão permite inspecionar o domínio, mas não expõe sua edição. A alteração foi concluída pela API oficial através da CLI, utilizando a sessão local já autenticada. Nenhum token foi impresso ou gravado no projeto. A publicação foi realizada com o projeto e a equipe explicitamente indicados, sem criar outro projeto.

## Search Console após a publicação

1. Abra https://search.google.com/search-console e selecione a propriedade `orbizy.app`.
2. Em **Indexação → Sitemaps**, envie `https://orbizy.app/sitemap.xml`.
3. Em **Inspeção de URL**, consulte `https://orbizy.app/` e `https://orbizy.app/en`. Use **Testar URL publicado** e, se a página estiver acessível e indexável, **Solicitar indexação**.
4. Em **Indexação → Páginas**, abra os motivos em **Por que as páginas não são indexadas** e confira as URLs afetadas. Para um erro corrigido, use **Validar correção** quando a opção estiver disponível.
5. Acompanhe a URL canônica escolhida pelo Google e a leitura do sitemap. Versões com www e `/pt` podem aparecer como páginas com redirecionamento; a prioridade é que as URLs canônicas finais possam ser rastreadas e indexadas.

A implementação melhora os sinais técnicos. A decisão e o prazo de indexação pertencem ao Google.

Referências oficiais:

- https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl?hl=pt-br
- https://support.google.com/webmasters/answer/7440203?hl=pt-BR
- https://github.com/vercel/next.js/issues/91845
