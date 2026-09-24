// One-off data fetch: coordinates, county, postcode districts and wards for every
// place in data/areas.csv, from postcodes.io (open data: OS Open Names, ONS).
// Writes data/geo.json, which the build reads. Re-run after editing areas.csv:
//   node tools/fetch-geo.mjs
import { writeFileSync, readFileSync, existsSync } from 'node:fs';
import { loadAreas } from '../content/areas.mjs';

const areas = loadAreas(new URL('../data/areas.csv', import.meta.url));
const out = existsSync(new URL('../data/geo.json', import.meta.url))
  ? JSON.parse(readFileSync(new URL('../data/geo.json', import.meta.url), 'utf8')) : {};

// Search names for places whose list name isn't a settlement name (London boroughs,
// combined names). Chosen as the borough's main centre.
const QUERY = {
  'london': 'Westminster', 'barking-and-dagenham': 'Barking', brent: 'Wembley', 'hammersmith-and-fulham': 'Hammersmith',
  'kensington-and-chelsea': 'Kensington', 'richmond-upon-thames': 'Richmond', 'tower-hamlets': 'Whitechapel',
  'waltham-forest': 'Walthamstow', havering: 'Romford', hillingdon: 'Uxbridge', redbridge: 'Ilford', bexley: 'Bexleyheath',
  merton: 'Morden', haringey: 'Wood Green', lambeth: 'Brixton', newham: 'East Ham', southwark: 'Peckham', camden: 'Camden Town',
  'chatham-and-gillingham': 'Chatham', 'dartford-and-ebbsfleet': 'Dartford', 'leamington-spa-and-warwick': 'Royal Leamington Spa',
  newport: 'Newport', 'brighton-and-hove': 'Brighton', 'london-hub-page': 'Westminster', hull: 'Kingston upon Hull',
  'newark-on-trent': 'Newark-on-Trent', 'stockton-on-tees': 'Stockton-on-Tees',
};
// Fixed points where the name search picks the wrong place (e.g. Richmond, North Yorkshire).
const COORDS = {
  'richmond-upon-thames': { name_1: 'Richmond', local_type: 'Other Settlement', latitude: 51.4613, longitude: -0.3037, county_unitary: 'Greater London', outcode: 'TW9' },
};
const REGION = (r) => r.toLowerCase().replace(/ the /g, ' the ');
const SETTLEMENT = ['City', 'Town', 'Suburban Area', 'Other Settlement', 'Village', 'Hamlet'];

async function get(url) {
  for (let i = 0; i < 4; i++) {
    const r = await fetch(url);
    if (r.ok) return (await r.json()).result;
    await new Promise((s) => setTimeout(s, 800 * (i + 1)));
  }
  throw new Error('Failed ' + url);
}

async function one(a) {
  const q = QUERY[a.slug] || a.place.replace(/ \(.*\)/, '');
  const fixed = COORDS[a.slug];
  const res = fixed ? [] : (await get(`https://api.postcodes.io/places?q=${encodeURIComponent(q)}&limit=40`)) || [];
  const cands = res.filter((p) => p.country === 'England' && SETTLEMENT.includes(p.local_type));
  const exact = cands.filter((p) => p.name_1.toLowerCase() === q.toLowerCase());
  const pool = exact.length ? exact : cands;
  const inRegion = pool.filter((p) => REGION(p.region || '') === REGION(a.region));
  const iow = a.slug === 'newport' ? pool.filter((p) => /Isle of Wight/i.test(p.county_unitary || '')) : [];
  const rank = (p) => SETTLEMENT.indexOf(p.local_type);
  const place = fixed || (iow[0] ? iow : inRegion.length ? inRegion : pool).sort((x, y) => rank(x) - rank(y))[0];
  if (!place) return { error: 'no match for ' + q };
  if (fixed) place.name_1 = fixed.name_1;
  const radius = a.region === 'London' ? 2500 : 5000;
  const oc = (await get(`https://api.postcodes.io/outcodes?lon=${place.longitude}&lat=${place.latitude}&radius=${radius}&limit=12`)) || [];
  const own = oc.find((o) => o.outcode === place.outcode) || oc[0];
  const district = own ? own.admin_district : [];
  const local = oc.filter((o) => o.admin_district.some((d) => district.includes(d)));
  const wards = [...new Set(local.flatMap((o) => o.admin_ward))].filter((w) => !/unparished|ward$/i.test(w));
  return {
    query: q, name: place.name_1, type: place.local_type,
    lat: +place.latitude.toFixed(5), lon: +place.longitude.toFixed(5),
    county: place.county_unitary || place.district_borough || '', district: district,
    outcode: place.outcode,
    outcodes: [...new Set(local.map((o) => o.outcode))].sort((x, y) => x.localeCompare(y, 'en', { numeric: true })),
    wards: wards.slice(0, 18),
  };
}

let done = 0;
// Optional: node tools/fetch-geo.mjs slug1 slug2 … re-fetches only those places.
const only = process.argv.slice(2);
const queue = only.length ? areas.filter((a) => only.includes(a.slug)) : [...areas];
async function worker() {
  while (queue.length) {
    const a = queue.shift();
    try { out[a.slug] = await one(a); } catch (e) { console.log('  failed', a.slug, String(e.message || e)); if (!out[a.slug]) out[a.slug] = { error: String(e.message || e) }; }
    if (++done % 25 === 0) console.log(done, 'of', queue.length + done);
  }
}
await Promise.all([worker(), worker(), worker()]);
writeFileSync(new URL('../data/geo.json', import.meta.url), JSON.stringify(out, null, 1) + '\n');
const errors = Object.entries(out).filter(([, v]) => v.error);
console.log(`Saved ${Object.keys(out).length} places, ${errors.length} errors`);
errors.forEach(([k, v]) => console.log('  ', k, v.error));
