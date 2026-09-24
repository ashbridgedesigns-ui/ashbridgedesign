import { readFileSync } from 'node:fs';
import { gbp, esc, slug, pageHero, ctaBand, faqHtml, faqLd } from '../lib/layout.mjs';
import { site, prices } from '../lib/parts.mjs';

const single = prices.design[0];
const minSnag = prices.snag[0].price;

// Researched local detail. Add an entry here before promoting a place to a live page.
const LOCAL = {
  birmingham: {
    notes: `<p>Birmingham is our home base, so projects across the city are surveyed and inspected in person by our lead engineer.</p>
<ul class="ticks">
<li><strong>Langley, Sutton Coldfield:</strong> one of the largest single housing developments in the UK, planned for around 5,500–6,000 homes near Walmley. It's a key area for pre-completion inspections and snagging.</li>
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
  const live = areas.filter((a) => a.tier === '1' && a.slug !== 'london');
  const liveSet = new Set(live.map((a) => a.slug));
  const link = (a) => liveSet.has(a.slug) ? `<a href="/areas/${a.slug}/">${esc(a.place)}</a>` : esc(a.place);
  const regions = REGION_ORDER.map((r) => ({ name: r, slug: slug(r), places: areas.filter((a) => a.region === r && !a.place.startsWith('London (')) }));
  const out = [];

  // Areas index
  out.push({
    path: '/areas/',
    title: 'Areas We Cover: All of England',
    description: `Extension design and new-build snagging across England. Based in ${site.base}, with in-person surveys across the West Midlands and accredited inspectors nationwide.`,
    trail: [['/areas/', 'Areas']],
    body: `${pageHero({ trail: [['/areas/', 'Areas']], eyebrow: 'Coverage', h1: 'Based in Birmingham. Covering all of England.', lede: `Our lead engineer surveys and inspects in person across ${areas.filter((a) => a.inPerson).length} towns and cities around Birmingham. Everywhere else, accredited Ashbridge inspectors and survey partners work to the same standard, and every report is signed off by the lead engineer.` })}
<section class="section"><div class="wrap stack">
  <div class="grid-2">
    <div class="card"><span class="pill pill-amber">In person</span><h3>Birmingham &amp; surrounding area</h3><p class="small muted">The West Midlands plus Leicester, Derby, Nottingham, Hinckley, Loughborough, Northampton and Banbury.</p></div>
    <div class="card"><span class="pill pill-slate">Inspector network</span><h3>The rest of England</h3><p class="small muted">Accredited inspectors and survey partners, with every report checked by our lead engineer. Design work is done by our engineer wherever you are.</p></div>
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
      title: `Extension Drawings & Snagging Surveys in ${r.name}`,
      description: `Extension design from ${gbp(single.s1)} and new-build snagging surveys from ${gbp(minSnag)} across ${r.name}. Engineer-led, fixed prices.`,
      trail,
      body: `${pageHero({ trail, eyebrow: r.name, h1: `Extension design and snagging surveys across ${r.name}`, lede: inPersonCount ? `${inPersonCount} places in ${r.name} are covered in person by our Birmingham-based lead engineer.` : `Inspections across ${r.name} are carried out by accredited Ashbridge inspectors, with every report checked by our lead engineer. Extension design is handled by our engineer, with measured surveys by local partners or 3D scan.`, ctas: '<a class="btn btn-amber" href="/contact/">Get a price</a><a class="btn btn-ghost" href="/snagging-prices/">Snagging prices</a>' })}
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
      : `Inspections in ${esc(a.place)} are carried out by an accredited Ashbridge inspector to our checklist, and every report is checked by our lead engineer before it reaches you. Design work is done by our engineer, with the measured survey by a local partner or 3D scan.`;
    const nearby = areas.filter((x) => x.region === a.region && x.slug !== a.slug && !x.place.startsWith('London (')).slice(0, 12);
    const faqs = [
      [`How much are extension drawings in ${a.place}?`, `Planning drawings for a single-storey extension start at ${gbp(single.s1)}, both stages at ${gbp(single.both)}, and the Complete package with structural calculations at ${gbp(single.complete)}. Council fees are paid to ${a.planning_authority}.`],
      [`How much is a snagging survey in ${a.place}?`, `From ${gbp(minSnag)} for a flat, ${gbp(prices.snag[2].price)} for a 3-bedroom house and ${gbp(prices.snag[4].price)} for 5 bedrooms.`],
      [`Who inspects homes in ${a.place}?`, a.inPerson ? 'Our lead engineer, in person.' : 'An accredited Ashbridge inspector, with the report checked and signed off by our lead engineer.'],
    ];
    out.push({
      path: `/areas/${a.slug}/`,
      title: `Extension Drawings & Snagging Surveys in ${a.place}`,
      description: `Engineer-led extension drawings from ${gbp(single.s1)} and new-build snagging surveys from ${gbp(minSnag)} in ${a.place}. ${a.inPerson ? 'In-person service from our Birmingham base.' : 'Covering all of England.'}`,
      trail,
      ld: [faqLd(faqs), { '@context': 'https://schema.org', '@type': 'Service', name: `Extension design and snagging surveys in ${a.place}`, provider: { '@id': site.url + '/#business' }, areaServed: { '@type': 'City', name: a.place.replace(/ \(.*\)/, '') } }],
      body: `${pageHero({ trail, eyebrow: `${a.place} · ${a.region}`, h1: `Extension drawings and snagging surveys in ${esc(a.place)}`, lede: `Engineer-led extension design, structural calculations and independent new-build inspections in ${esc(a.place)}. ${a.inPerson ? 'Covered in person from our Birmingham base.' : 'Part of our England-wide service.'}`, ctas: '<a class="btn btn-amber" href="/contact/">Get a price</a><a class="btn btn-slate" href="/snagging-prices/">Instant snagging price</a>' })}
<section class="section"><div class="wrap grid-2">
  <div class="card card-door"><p class="eyebrow">Extensions in ${esc(a.place)}</p><h2>Planning, building regs and structural calcs</h2>
    <p>Householder planning applications in ${esc(a.place)} are decided by <strong>${esc(a.planning_authority)}</strong>. Before we design, we check the council's local design guidance, any conservation area or Article 4 direction affecting your street, and your property's planning history.</p>
    <p class="price-from">Planning drawings from <b>${gbp(single.s1)}</b></p>
    <div class="btn-row"><a class="btn btn-amber" href="/extension-design-prices/">Design prices</a><a class="btn btn-ghost" href="/can-i-extend/">Can I extend?</a></div></div>
  <div class="card card-door"><p class="eyebrow">New builds in ${esc(a.place)}</p><h2>Snagging and pre-completion inspections</h2>
    <p>${who}</p>
    <p>Buying from an NHQB-registered developer? You can request an independent pre-completion inspection. <a href="/pre-completion-inspection/#window">Check your window</a>.</p>
    <p class="price-from">Inspections from <b>${gbp(minSnag)}</b></p>
    <div class="btn-row"><a class="btn btn-amber" href="/snagging-prices/">Instant price</a><a class="btn btn-ghost" href="/sample-snagging-report/">Sample report</a></div></div>
</div></section>
${LOCAL[a.slug] ? `<section class="section section-white"><div class="wrap narrow stack"><p class="eyebrow">Local knowledge</p><h2>Building and buying in ${esc(a.place)}</h2>${LOCAL[a.slug].notes}</div></section>` : ''}
<section class="section"><div class="wrap grid-2">
  <div class="stack"><h2>${esc(a.place)} questions</h2>${faqHtml(faqs)}</div>
  <div class="stack"><h3>Also covering nearby</h3><ul class="area-list" style="columns:2 160px">${nearby.map((x) => `<li>${link(x)}</li>`).join('')}</ul><a class="more" href="/areas/${regionSlug}/">All of ${a.region}</a></div>
</div></section>
${ctaBand()}`,
    });
  }
  return out;
}
