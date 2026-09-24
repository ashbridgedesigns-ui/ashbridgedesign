// Builds the static site into dist/. Run: node build.mjs
import { mkdirSync, writeFileSync, readFileSync, rmSync, cpSync } from 'node:fs';
import { transformSync } from 'esbuild';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import site from './site.config.mjs';
import { page, pageHero } from './lib/layout.mjs';
import { pages } from './content/pages.mjs';
import { guidePages } from './content/guides.mjs';
import { loadAreas, areaPages } from './content/areas.mjs';

const root = dirname(fileURLToPath(import.meta.url));
const dist = join(root, 'dist');
rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });
cpSync(join(root, 'assets'), join(dist, 'assets'), { recursive: true });

// Minify the published CSS and JS; the readable sources stay in assets/.
for (const [file, loader] of [['main.js', 'js'], ['styles.css', 'css']]) {
  const out = join(dist, 'assets', file);
  const src = readFileSync(out, 'utf8');
  const { code } = transformSync(src, { loader, minify: true, target: loader === 'js' ? 'es2018' : ['chrome90', 'firefox90', 'safari14'] });
  writeFileSync(out, code);
  console.log(`Minified ${file}: ${(src.length / 1024).toFixed(1)}KB -> ${(code.length / 1024).toFixed(1)}KB`);
}

const areas = loadAreas(join(root, 'data', 'areas.csv'));
const all = [...pages, ...guidePages(), ...areaPages(areas)];

const seen = new Set();
for (const p of all) {
  if (seen.has(p.path)) throw new Error('Duplicate path ' + p.path);
  seen.add(p.path);
  const dir = join(dist, p.path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), page(p));
}

writeFileSync(join(dist, '404.html'), page({
  path: '/404.html', title: 'Page not found', description: 'Page not found.', noindex: true,
  body: pageHero({ eyebrow: '404', h1: 'That page isn\'t here', lede: 'It may have moved. Try one of these instead.', ctas: '<a class="btn btn-amber" href="/">Home</a><a class="btn btn-ghost" href="/extension-design/">Extension design</a><a class="btn btn-ghost" href="/new-build-snagging/">New-build snagging</a>' }),
}));

const today = new Date().toISOString().slice(0, 10);
const indexable = all.filter((p) => !p.noindex);
writeFileSync(join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable.map((p) => `  <url><loc>${site.url}${p.path}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`);
writeFileSync(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${site.url}/sitemap.xml\n`);
// IndexNow ownership file: search engines fetch /<key>.txt to confirm the key.
if (site.indexNowKey) writeFileSync(join(dist, `${site.indexNowKey}.txt`), site.indexNowKey);

console.log(`Built ${all.length + 1} pages into dist/ (${indexable.length} in sitemap).`);
