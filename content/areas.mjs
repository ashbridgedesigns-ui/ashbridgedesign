import { readFileSync } from 'node:fs';
import { gbp, esc, slug, pageHero, ctaBand, faqHtml, faqLd } from '../lib/layout.mjs';
import { site, prices } from '../lib/parts.mjs';

const single = prices.design[0];
const minSnag = prices.snag[0].price;

// Location data from postcodes.io (OS Open Names / ONS), fetched by tools/fetch-geo.mjs.
const GEO = JSON.parse(readFileSync(new URL('../data/geo.json', import.meta.url), 'utf8'));
const BASE = { lat: 52.4814, lon: -1.8998 }; // Birmingham city centre
// Non-geographic districts (PO boxes, large users) that shouldn't be listed as areas.
const NON_GEO = new Set(['W1A', 'NW1W', 'N1P', 'EC1P', 'EC2P', 'EC3P', 'EC4P', 'SE1P', 'E98', 'CR9', 'CR44', 'CR90', 'BN50', 'BN51', 'BN52', 'BN88', 'BN91', 'BN95', 'BN99', 'NE82', 'NE83', 'NE85', 'NE88', 'NE92', 'NE98', 'NE99', 'LS88', 'LS98', 'LS99', 'S95', 'S96', 'S97', 'S98', 'S99', 'BD97', 'BD98', 'BD99', 'B99', 'M60', 'M61', 'M99', 'WV98', 'WV99', 'DH98', 'DH99', 'L70', 'L80', 'NG70', 'NG80', 'NG90', 'LE87', 'LE94', 'LE95', 'CV35X', 'PO12X', 'SO97', 'BS80', 'BS98', 'BS99', 'IG6X', 'SM6X', 'NN99', 'MK77', 'SN38', 'SN99', 'OX4X', 'GU95', 'RG94', 'NR99', 'IP98', 'PE99', 'DE99', 'DN55', 'HU20X', 'YO90', 'YO91', 'CA95', 'L67', 'L68', 'L69', 'L71', 'L72', 'L73', 'L74', 'L75', 'M90']);
const RAD = Math.PI / 180;
const miles = (a, b) => { const dLat = (b.lat - a.lat) * RAD, dLon = (b.lon - a.lon) * RAD; const h = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * RAD) * Math.cos(b.lat * RAD) * Math.sin(dLon / 2) ** 2; return 2 * 3958.8 * Math.asin(Math.sqrt(h)); };
const direction = (a, b) => { const y = Math.sin((b.lon - a.lon) * RAD) * Math.cos(b.lat * RAD); const x = Math.cos(a.lat * RAD) * Math.sin(b.lat * RAD) - Math.sin(a.lat * RAD) * Math.cos(b.lat * RAD) * Math.cos((b.lon - a.lon) * RAD); const deg = (Math.atan2(y, x) / RAD + 360) % 360; return ['north', 'north-east', 'east', 'south-east', 'south', 'south-west', 'west', 'north-west'][Math.round(deg / 45) % 8]; };
const listJoin = (arr) => arr.length < 2 ? arr.join('') : arr.slice(0, -1).join(', ') + ' and ' + arr[arr.length - 1];

// Researched local detail. Add an entry here before promoting a place to a live page.
const LOCAL = {
  birmingham: {
    notes: `<ul class="ticks">
<li><strong>Langley, Sutton Coldfield:</strong> about 5,500 new homes approved near Walmley, one of the largest developments in the region. Read our <a href="/guides/langley-sutton-coldfield-new-build-guide/">Langley buyer's guide</a>.</li>
<li><strong>Longbridge:</strong> new homes by several developers on the former car works site.</li>
<li><strong>Extensions:</strong> Birmingham City Council decides householder applications, and parts of the city fall within conservation areas. We check your street before we design.</li>
</ul>`,
  },
};

export function loadAreas(file) {
  const [head, ...lines] = readFileSync(file, 'utf8').trim().split(/\r?\n/);
  const keys = head.split(',');
  return lines.map((l) => {
    const c = l.split(',');
    const o = Object.fromEntries(keys.map((k, i) => [k, c[i]]));
    o.inPerson = o.coverage.startsWith('In person');
    o.slug = o.place.startsWith('London (') ? 'london' : slug(o.place);
    return o;
  });
}

const REGION_ORDER = ['West Midlands', 'East Midlands', 'London', 'South East', 'East of England', 'South West', 'North West', 'Yorkshire and the Humber', 'North East'];

export function areaPages(areas) {
  const live = areas.filter((a) => a.slug !== 'london');
  const liveSet = new Set(live.map((a) => a.slug));
  const link = (a) => liveSet.has(a.slug) ? `<a href="/areas/${a.slug}/">${esc(a.place)}</a>` : esc(a.place);
  const regions = REGION_ORDER.map((r) => ({ name: r, slug: slug(r), places: areas.filter((a) => a.region === r && !a.place.startsWith('London (')) }));
  const out = [];

  // Areas index
  out.push({
    path: '/areas/',
    title: 'Areas We Cover: All of England',
    description: `Extension design and new-build snagging across England. Based in ${site.base}, with in-person surveys across the West Midlands and qualified inspectors nationwide.`,
    trail: [['/areas/', 'Areas']],
    body: `${pageHero({ trail: [['/areas/', 'Areas']], eyebrow: 'Coverage', h1: 'Based in Birmingham. Covering all of England.', lede: `Our lead engineer surveys and inspects in person across ${areas.filter((a) => a.inPerson).length} towns and cities around Birmingham. Everywhere else, qualified inspectors who belong to a recognised professional body for surveying, and our survey partners, work to the same standard, and every report is signed off by the lead engineer.` })}
<section class="section"><div class="wrap stack">
  <div class="grid-2">
    <div class="card"><span class="pill pill-amber">In person</span><h3>Birmingham &amp; surrounding area</h3><p class="small muted">The West Midlands plus Leicester, Derby, Nottingham, Hinckley, Loughborough, Northampton and Banbury.</p></div>
    <div class="card"><span class="pill pill-slate">Inspector network</span><h3>The rest of England</h3><p class="small muted">Qualified inspectors from recognised professional bodies for surveying, and survey partners, with every report checked by our lead engineer. Design work is done by our engineer wherever you are.</p></div>
  </div>
  ${regions.map((r) => `<div class="stack-sm" style="margin-top:22px"><h2 style="font-size:1.5rem"><a href="/areas/${r.slug}/" style="text-decoration:none;color:inherit">${r.name}</a></h2>
  <ul class="area-list">${r.places.map((a) => `<li>${link(a)}<span>${esc(a.planning_authority)}</span></li>`).join('')}</ul></div>`).join('')}
</div></section>
${ctaBand()}`,
  });

  // Region pages
  for (const r of regions) {
    const inPersonCount = r.places.filter((a) => a.inPerson).length;
    const trail = [['/areas/', 'Areas'], [`/areas/${r.slug}/`, r.name]];
    out.push({
      path: `/areas/${r.slug}/`,
      title: `Extension Drawings & Snagging, ${r.name}`,
      description: `Extension design from ${gbp(single.s1)} and new-build snagging surveys from ${gbp(minSnag)} across ${r.name}. Engineer-led, fixed prices.`,
      trail,
      body: `${pageHero({ trail, eyebrow: r.name, h1: `Extension design and snagging surveys across ${r.name}`, lede: inPersonCount ? `${inPersonCount} places in ${r.name} are covered in person by our Birmingham-based lead engineer.` : `Inspections across ${r.name} are carried out by qualified inspectors who belong to a recognised professional body for surveying, with every report checked by our lead engineer. Extension design is handled by our engineer, with measured surveys by local partners or 3D scan.`, ctas: '<a class="btn btn-amber" href="/contact/">Get a price</a><a class="btn btn-ghost" href="/snagging-prices/">Snagging prices</a>' })}
<section class="section"><div class="wrap stack">
  <div class="table-wrap"><table><thead><tr><th>Place</th><th>Planning authority</th><th>Inspections</th></tr></thead><tbody>
  ${r.places.map((a) => `<tr><td>${link(a)}</td><td>${esc(a.planning_authority)}</td><td>${a.inPerson ? '<span class="pill pill-amber">In person</span>' : '<span class="pill pill-slate">Inspector network</span>'}</td></tr>`).join('')}
  </tbody></table></div>
</div></section>
${ctaBand()}`,
    });
  }

  // Town pages (tier 1)
  for (const a of live) {
    const regionSlug = slug(a.region);
    const trail = [['/areas/', 'Areas'], [`/areas/${regionSlug}/`, a.region], [`/areas/${a.slug}/`, a.place]];
    const who = a.inPerson
      ? `Our Birmingham-based lead engineer carries out inspections and measured surveys in ${esc(a.place)} in person.`
      : `Inspections in ${esc(a.place)} are carried out by a qualified inspector who is a member of a recognised professional body for surveying (such as RICS, CIOB or CABE) to our checklist, and every report is checked by our lead engineer before it reaches you. Design work is done by our engineer, with the measured survey by a local partner or 3D scan.`;
    const g = GEO[a.slug];
    const core = a.place.replace(/ \(.*\)/, '');
    // Nearest places we cover, by straight-line distance.
    const nearby = live.filter((x) => x.slug !== a.slug && GEO[x.slug])
      .map((x) => ({ x, d: miles(g, GEO[x.slug]) })).sort((p, q) => p.d - q.d).slice(0, 10);
    const outcodes = g.outcodes.filter((o) => !NON_GEO.has(o));
    const wards = g.wards.slice(0, 12);
    const fromBase = Math.round(miles(BASE, g));
    const county = g.county && !g.county.toLowerCase().includes(core.toLowerCase().split(' ')[0]) ? g.county : '';
    const whereLine = a.slug === 'birmingham'
      ? 'Birmingham is our home base, so projects across the city are surveyed and inspected in person by our lead engineer.'
      : `${esc(core)} is${county ? ` in ${esc(county)},` : ''} about ${fromBase} miles ${direction(BASE, g)} of our Birmingham base as the crow flies. ${a.inPerson ? 'That puts it inside our in-person area: our lead engineer carries out surveys and inspections here in person.' : 'Inspections here are carried out through our England-wide inspector network, and design work is done by our engineer.'}`;
    const sameCouncil = areas.filter((x) => x.planning_authority === a.planning_authority && x.slug !== a.slug);
    const kind = a.type === 'Borough' ? 'London borough' : a.type === 'City' ? 'city' : 'town';
    const planningNote = a.type === 'Borough'
      ? 'Many London boroughs have extensive conservation areas and Article 4 directions that limit permitted development, so we check your street and the borough\'s design guidance before we draw anything.'
      : `We check ${esc(a.planning_authority)}'s local plan and design guidance, any conservation area or Article 4 direction on your street, and your property's planning history before we draw anything.`;
    const faqs = [
      [`How much are extension drawings in ${a.place}?`, `Planning drawings for a single-storey extension start at ${gbp(single.s1)}, both stages at ${gbp(single.both)}, and the Complete package with structural calculations at ${gbp(single.complete)}. Council fees are paid to ${a.planning_authority}.`],
      [`How much is a snagging survey in ${a.place}?`, `From ${gbp(minSnag)} for a flat, ${gbp(prices.snag[2].price)} for a 3-bedroom house and ${gbp(prices.snag[4].price)} for 5 bedrooms.`],
      ...(outcodes.length ? [[`Do you cover all ${core} postcodes?`, `Yes. We cover ${core} and the surrounding area, including the ${listJoin(outcodes)} postcode districts, as part of ${a.inPerson ? 'our in-person service from Birmingham' : 'our England-wide service'}.`]] : []),
      [`Who inspects homes in ${a.place}?`, a.inPerson ? 'Our lead engineer, in person.' : 'A qualified inspector who is a member of a recognised professional body for surveying, with the report checked and signed off by our lead engineer.'],
    ];
    out.push({
      path: `/areas/${a.slug}/`,
      title: `Extension Drawings & Snagging, ${a.place.replace(/ \(.*\)/, '')}`,
      description: `Engineer-led extension drawings from ${gbp(single.s1)} and new-build snagging surveys from ${gbp(minSnag)} in ${a.place}. ${a.inPerson ? 'In-person service from our Birmingham base.' : 'Covering all of England.'}`,
      trail,
      ld: [faqLd(faqs), { '@context': 'https://schema.org', '@type': 'Service', name: `Extension design and snagging surveys in ${a.place}`, provider: { '@id': site.url + '/#business' }, areaServed: { '@type': a.type === 'Borough' ? 'AdministrativeArea' : 'City', name: core, geo: { '@type': 'GeoCoordinates', latitude: g.lat, longitude: g.lon } } }],
      body: `${pageHero({ trail, eyebrow: `${a.place} · ${a.region}`, h1: `Extension drawings and snagging surveys in ${esc(a.place)}`, lede: `Engineer-led extension design, structural calculations and independent new-build inspections in ${esc(a.place)}. ${a.inPerson ? 'Covered in person from our Birmingham base.' : 'Part of our England-wide service.'}`, ctas: '<a class="btn btn-amber" href="/contact/">Get a price</a><a class="btn btn-slate" href="/snagging-prices/">Instant snagging price</a>' })}
<section class="section"><div class="wrap grid-2">
  <div class="card card-door"><p class="eyebrow">Extensions in ${esc(a.place)}</p><h2>Planning, Building Regulations and structural calculations</h2>
    <p>Householder planning applications in the ${kind} of ${esc(a.place)} are decided by <strong>${esc(a.planning_authority)}</strong>. ${planningNote}</p>
    ${sameCouncil.length ? `<p class="small muted">${esc(a.planning_authority)} also handles planning for ${sameCouncil.map((x) => `<a href="/areas/${x.slug}/">${esc(x.place)}</a>`).join(', ')}.</p>` : ''}
    <p class="price-from">Planning drawings from <b>${gbp(single.s1)}</b></p>
    <div class="btn-row"><a class="btn btn-amber" href="/extension-design-prices/">Design prices</a><a class="btn btn-ghost" href="/can-i-extend/">Can I extend?</a></div></div>
  <div class="card card-door"><p class="eyebrow">New builds in ${esc(a.place)}</p><h2>Snagging and pre-completion inspections</h2>
    <p>${who}</p>
    <p>Buying from an NHQB-registered developer? You can request an independent pre-completion inspection. <a href="/pre-completion-inspection/#window">Check your window</a>.</p>
    <p class="price-from">Inspections from <b>${gbp(minSnag)}</b></p>
    <div class="btn-row"><a class="btn btn-amber" href="/snagging-prices/">Instant price</a><a class="btn btn-ghost" href="/sample-snagging-report/">Sample report</a></div></div>
</div></section>
${LOCAL[a.slug] ? `<section class="section section-white"><div class="wrap narrow stack"><p class="eyebrow">Local knowledge</p><h2>Building and buying in ${esc(a.place)}</h2>${LOCAL[a.slug].notes}</div></section>` : ''}
<section class="section section-white"><div class="wrap grid-2">
  <div class="stack">
    <p class="eyebrow">Coverage</p><h2>Where we work in ${esc(core)}</h2>
    <p>${whereLine}</p>
    ${outcodes.length ? `<h3>Postcode districts</h3><p class="postcodes">${outcodes.map((o) => `<span>${o}</span>`).join('')}</p>` : ''}
    ${wards.length ? `<h3>Neighbourhoods in and around ${esc(core)}</h3><p>${esc(listJoin(wards))}.</p>` : ''}
  </div>
  <div class="stack"><h3>Nearest places we cover</h3><ul class="area-list" style="columns:2 180px">${nearby.map(({ x, d }) => `<li>${link(x)}<span>${Math.max(1, Math.round(d))} miles</span></li>`).join('')}</ul><a class="more" href="/areas/${regionSlug}/">All of ${a.region}</a></div>
</div></section>
<section class="section"><div class="wrap narrow stack"><h2>${esc(core)} questions</h2>${faqHtml(faqs)}</div></section>
${ctaBand()}`,
    });
  }
  return out;
}
