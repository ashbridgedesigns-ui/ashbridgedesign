// Tells IndexNow search engines (Bing, Yandex, Seznam, Naver…) about new or changed pages.
// Run after a deploy has gone live:
//   node tools/indexnow.mjs                      submit every URL in the live sitemap
//   node tools/indexnow.mjs /areas/solihull/ …   submit only these paths
// Options: --no-verify skips the live key-file check (e.g. behind a filtering VPN);
//          --from-build reads URLs from the local dist/sitemap.xml instead of the live one.
import { readFileSync } from 'node:fs';
import site from '../site.config.mjs';

if (!site.indexNowKey) throw new Error('Set indexNowKey in site.config.mjs first.');
const host = new URL(site.url).host;
const keyLocation = `${site.url}/${site.indexNowKey}.txt`;

const flags = process.argv.slice(2).filter((a) => a.startsWith('--'));
const args = process.argv.slice(2).filter((a) => !a.startsWith('--'));

// The key file must be live before engines will accept a submission.
if (!flags.includes('--no-verify')) {
  const keyRes = await fetch(keyLocation);
  if (!keyRes.ok || (await keyRes.text()).trim() !== site.indexNowKey) {
    throw new Error(`Key file not live at ${keyLocation}. Deploy first, then run this again.`);
  }
}

let urlList;
if (args.length) {
  urlList = args.map((p) => (p.startsWith('http') ? p : site.url + p));
} else {
  const xml = flags.includes('--from-build')
    ? readFileSync(new URL('../dist/sitemap.xml', import.meta.url), 'utf8')
    : await (await fetch(`${site.url}/sitemap.xml`)).text();
  urlList = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
}

// IndexNow accepts up to 10,000 URLs per request.
const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host, key: site.indexNowKey, keyLocation, urlList }),
});
const meaning = { 200: 'accepted', 202: 'accepted, key validation pending', 400: 'bad request', 403: 'key not valid for this host', 422: 'URLs do not match the host', 429: 'too many requests, try later' };
console.log(`Submitted ${urlList.length} URLs to IndexNow: HTTP ${res.status} (${meaning[res.status] || 'unexpected response'})`);
if (res.status >= 300) process.exitCode = 1;
