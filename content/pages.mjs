import { gbp, esc, pageHero, ctaBand, faqHtml, faqLd, tel } from '../lib/layout.mjs';
import { site, prices, heroArt, inspectArt, snagQuoteTool, designQuoteTool, pciTool, canExtendTool, designPriceTable, snagPriceTable, engineerBand } from '../lib/parts.mjs';

const single = prices.design[0];
const minSnag = prices.snag[0].price;

function servicePage({ path, trail, eyebrow, h1, lede, ctas, intro, includes, excludes, faqs, extra = '', title, description, offer }) {
  const body = `${pageHero({ trail, eyebrow, h1, lede, ctas })}
<section class="section"><div class="wrap grid-2">
  <div class="stack">${intro}</div>
  <div class="card stack"><h3>What's included</h3><ul class="ticks">${includes.map((i) => `<li>${i}</li>`).join('')}</ul>
  ${excludes ? `<h3>Not included</h3><ul class="ticks crosses">${excludes.map((i) => `<li>${i}</li>`).join('')}</ul>` : ''}</div>
</div></section>
${extra}
${faqs ? `<section class="section section-white"><div class="wrap narrow stack"><h2>Questions</h2>${faqHtml(faqs)}</div></section>` : ''}
${ctaBand()}`;
  const ld = [];
  if (faqs) ld.push(faqLd(faqs));
  if (offer) ld.push({ '@context': 'https://schema.org', '@type': 'Service', name: offer.name, provider: { '@id': site.url + '/#business' }, areaServed: { '@type': 'Country', name: 'England' }, offers: { '@type': 'Offer', price: offer.price, priceCurrency: 'GBP' } });
  return { path, title, description, trail, body, ld };
}

const designFaqs = [
  ['How much do extension drawings cost?', `Planning drawings for a single-storey extension start at ${gbp(single.s1)}. Planning and building regs together start at ${gbp(single.both)}, and the Complete package with structural calculations starts at ${gbp(single.complete)}. There's no VAT to add.`],
  ['Do you visit the property?', 'Yes. Every project starts with a measured survey. Around Birmingham and the West Midlands our engineer visits in person. Elsewhere in England, the survey is carried out by a partner surveyor or by 3D scan, depending on the project.'],
  ['What if planning is refused?', 'If you book both stages, a resubmission is included free. We also design to your council\'s own guidance from the start, to give the application the best chance first time.'],
  ['Are you architects?', '<p>No. “Architect” is a protected title in the UK. Ashbridge is an engineer-led design practice run by a civil engineer (MSc) with 15 years\' experience, producing planning drawings, building regulations drawings and structural calculations.</p>'],
  ['Do council fees come on top?', 'Yes. Planning application fees and building control fees are paid directly to the council or building control body. We tell you the exact amounts before anything is submitted.'],
];

const snagFaqs = [
  ['What is a snagging survey?', 'An independent inspection of a new-build home that finds defects: anything unfinished, damaged or not built to standard. You get a report the developer has to respond to.'],
  ['When should I book?', 'Ideally before legal completion, as a pre-completion inspection, while the developer still has every reason to fix things quickly. A post-completion snagging survey is still worthwhile in the first two years.'],
  ['How quickly do I get the report?', 'Within 24 hours of the inspection in most cases, as a PDF with photographs, locations and the relevant standard for each snag.'],
  ['Who carries out the inspection?', 'Around Birmingham, Ashbridge\'s lead engineer inspects in person. Across the rest of England, an accredited Ashbridge inspector attends and every report is checked by the lead engineer before it reaches you.'],
  ['Is there VAT on top?', 'No. Ashbridge isn\'t VAT registered, so the price you see is the price you pay.'],
];

export const pages = [
  // ---------------- HOME ----------------
  {
    path: '/',
    title: 'Ashbridge Design | Extension Drawings & New-Build Snagging Surveys, England',
    description: `Engineer-led extension design, planning and building regs drawings from ${gbp(single.s1)}, structural calculations in-house, and new-build snagging surveys from ${gbp(minSnag)}. Based in Birmingham, covering England.`,
    ld: [faqLd(designFaqs.slice(0, 2).concat(snagFaqs.slice(0, 2)))],
    body: `<section class="hero"><div class="wrap hero-grid">
  <div class="stack">
    <p class="eyebrow">Home design &amp; new-build inspections</p>
    <h1>Design it properly.<br><span class="accent">Inspect it properly.</span></h1>
    <p class="lede">Extension drawings, planning support, structural calculations and independent new-build inspections, all led by a civil engineer. Based in ${site.base}, covering all of England.</p>
    <div class="btn-row"><a class="btn btn-amber" href="/extension-design/">Plan an extension</a><a class="btn btn-slate" href="/snagging-prices/">Book a snagging inspection</a></div>
    <div class="trust"><span>Engineer-led · MSc Civil Engineering</span><span>15 years' experience</span><span>Fixed prices, no VAT to add</span><span>Snag reports in 24 hours</span></div>
  </div>
  <div class="hero-art">${heroArt}</div>
</div></section>

<section class="section"><div class="wrap grid-2">
  <article class="card card-door">
    <p class="eyebrow">Extending or converting?</p>
    <h2>Extension design, from planning to build</h2>
    <p>Planning drawings, building regs drawings and structural calculations from one engineer. Single and double-storey extensions, lofts and garage conversions.</p>
    <p class="price-from">Planning drawings from <b>${gbp(single.s1)}</b></p>
    <div class="btn-row"><a class="btn btn-amber" href="/extension-design-prices/">See design prices</a><a class="btn btn-ghost" href="/can-i-extend/">Can I extend?</a></div>
  </article>
  <article class="card card-door">
    <p class="eyebrow">Buying a new build?</p>
    <h2>Independent snagging and pre-completion inspections</h2>
    <p>Find the defects before you move in, or while the developer still has to fix them. Clear, engineer-checked reports within 24 hours.</p>
    <p class="price-from">Inspections from <b>${gbp(minSnag)}</b></p>
    <div class="btn-row"><a class="btn btn-amber" href="/snagging-prices/">Get an instant price</a><a class="btn btn-ghost" href="/pre-completion-inspection/">Pre-completion inspections</a></div>
  </article>
</div></section>

${engineerBand}

<section class="section"><div class="wrap">
  <div class="section-head"><p class="eyebrow">How it works</p><h2>Two services, one standard</h2></div>
  <div class="grid-2">
    <div class="stack"><h3>Extension design</h3><ol class="steps">
      <li><h4>Free scope review</h4><p class="small">Send photos and your idea. You get a fixed price, usually the same day.</p></li>
      <li><h4>Measured survey</h4><p class="small">We measure the house and check your planning history and council rules.</p></li>
      <li><h4>Design &amp; drawings</h4><p class="small">Options, then planning drawings. We submit and manage the application.</p></li>
      <li><h4>Building regs &amp; calcs</h4><p class="small">Technical drawings and in-house structural calculations, ready for your builder.</p></li>
    </ol></div>
    <div class="stack"><h3>New-build inspection</h3><ol class="steps">
      <li><h4>Instant price</h4><p class="small">Priced by bedrooms. Book online with a ${gbp(prices.deposit)} deposit.</p></li>
      <li><h4>Inspection</h4><p class="small">A room-by-room inspection, plus the loft and outside, against building regs and warranty standards.</p></li>
      <li><h4>Report in 24 hours</h4><p class="small">Photographed, located, graded and ready to send to the developer.</p></li>
      <li><h4>Re-inspection</h4><p class="small">Optional: we come back and check the developer's fixes.</p></li>
    </ol></div>
  </div>
</div></section>

<section class="section section-white"><div class="wrap grid-2" style="align-items:center">
  <div class="stack">
    <p class="eyebrow">Buying from an NHQB-registered developer?</p>
    <h2>You can request an independent pre-completion inspection</h2>
    <p>Under the New Homes Quality Code, registered developers must let your inspector in before completion. For homes reserved from 2 March 2026, the window opens five calendar days after your Notice to Complete is served. Defects found against warranty standards should be put right before completion, or within 30 days.</p>
    <div class="btn-row"><a class="btn btn-amber" href="/pre-completion-inspection/#window">Check my inspection window</a></div>
  </div>
  <div>${inspectArt}</div>
</div></section>

<section class="section"><div class="wrap">
  <div class="section-head"><p class="eyebrow">Clear, fixed prices</p><h2>What it costs</h2><p class="muted">No VAT to add, no hidden extras. Council fees are paid separately.</p></div>
  <div class="grid-4">
    <div class="card"><h3>Planning drawings</h3><p class="price-from">from <b>${gbp(single.s1)}</b></p><a class="more" href="/planning-drawings/">Planning drawings</a></div>
    <div class="card"><h3>Planning + building regs</h3><p class="price-from">from <b>${gbp(single.both)}</b></p><a class="more" href="/extension-design-prices/">Design prices</a></div>
    <div class="card"><h3>Structural calculations</h3><p class="price-from">from <b>${gbp(prices.beamCalc)}</b></p><a class="more" href="/structural-calculations/">Structural calcs</a></div>
    <div class="card"><h3>Snagging survey</h3><p class="price-from">from <b>${gbp(minSnag)}</b></p><a class="more" href="/snagging-prices/">Snagging prices</a></div>
  </div>
</div></section>

<section class="section section-white"><div class="wrap grid-2">
  <div class="stack"><p class="eyebrow">Areas we cover</p><h2>Based in Birmingham, covering all of England</h2>
  <p>Around Birmingham, the West Midlands and nearby towns, our lead engineer inspects and surveys in person. Across the rest of England, accredited Ashbridge inspectors and survey partners work to the same checklist, and every report and drawing set is signed off by the lead engineer.</p>
  <div class="btn-row"><a class="btn btn-ghost" href="/areas/">See all areas</a><a class="btn btn-ghost" href="/areas/birmingham/">Birmingham</a></div></div>
  <div class="stack"><h3>Common questions</h3>${faqHtml(designFaqs.slice(0, 2).concat(snagFaqs.slice(0, 2)))}</div>
</div></section>
${ctaBand()}`,
  },

  // ---------------- EXTENSION DESIGN HUB ----------------
  servicePage({
    path: '/extension-design/',
    title: 'Extension Design, Planning & Building Regs Drawings',
    description: `Engineer-led extension design across England: planning drawings from ${gbp(single.s1)}, building regs drawings, and structural calculations in-house. Fixed prices, no VAT.`,
    trail: [['/extension-design/', 'Extension design']],
    eyebrow: 'Extension design',
    h1: 'Extension design by an engineer, from planning to build',
    lede: 'Planning drawings, building regulations drawings and structural calculations for extensions, lofts and garage conversions, all from one engineer, at fixed prices.',
    ctas: `<a class="btn btn-amber" href="/extension-design-prices/">See prices</a><a class="btn btn-ghost" href="/can-i-extend/">Can I extend?</a>`,
    intro: `<h2>One engineer, every stage</h2>
<p>Most extension projects need two approvals: <strong>planning permission</strong>, or confirmation it isn't needed, and <strong>building regulations approval</strong>. Most also need <strong>structural calculations</strong> for beams and foundations. Other firms split this between a designer and an outside engineer. Ashbridge does all three, so nothing gets lost between two firms and there's no waiting for a third-party engineer.</p>
<div class="grid-2">
  <a class="card" href="/planning-drawings/" style="text-decoration:none"><h3>Planning drawings</h3><p class="small muted">from ${gbp(single.s1)}</p></a>
  <a class="card" href="/building-regulations-drawings/" style="text-decoration:none"><h3>Building regs drawings</h3><p class="small muted">from ${gbp(single.s2)}</p></a>
  <a class="card" href="/structural-calculations/" style="text-decoration:none"><h3>Structural calculations</h3><p class="small muted">from ${gbp(prices.beamCalc)}</p></a>
  <a class="card" href="/loft-conversion-drawings/" style="text-decoration:none"><h3>Loft conversions</h3><p class="small muted">from ${gbp(prices.design[2].s1)}</p></a>
  <a class="card" href="/garage-conversion-drawings/" style="text-decoration:none"><h3>Garage conversions</h3><p class="small muted">from ${gbp(prices.design[3].s1)}</p></a>
  <a class="card" href="/can-i-extend/" style="text-decoration:none"><h3>Can I extend?</h3><p class="small muted">Free feasibility check</p></a>
</div>`,
    includes: ['Measured survey of your home', 'Planning history and council policy check', 'Design options and concept drawings', 'Planning or Lawful Development Certificate drawings, submission and management', 'Building regs technical drawings and specification', 'Structural calculations in-house (Complete package)', 'Free planning resubmission when both stages are booked', 'Free location and site plan when both stages are booked'],
    excludes: ['Council planning and building control fees', 'Party wall surveyor, if your project needs one', 'Topographical or drainage surveys, if needed'],
    faqs: designFaqs,
    extra: `<section class="section-tight"><div class="wrap">${designQuoteTool()}</div></section>`,
    offer: { name: 'Extension design', price: single.s1 },
  }),

  servicePage({
    path: '/planning-drawings/',
    title: `Planning Drawings from ${gbp(single.s1)}`,
    description: `Planning drawings for extensions, lofts and garage conversions from ${gbp(single.s1)}, with no VAT. Measured survey, design, submission and management of your application. Engineer-led, England-wide.`,
    trail: [['/extension-design/', 'Extension design'], ['/planning-drawings/', 'Planning drawings']],
    eyebrow: 'Stage 1 · Planning',
    h1: `Planning drawings from ${gbp(single.s1)}`,
    lede: 'Everything needed to get planning permission, or a Lawful Development Certificate, for your extension, loft or garage conversion.',
    ctas: `<a class="btn btn-amber" href="/contact/?service=Extension%20design">Get my fixed price</a><a class="btn btn-ghost" href="/can-i-extend/">Do I need planning?</a>`,
    intro: `<h2>Designed around your council's rules</h2><p>Every council has its own design guide: rules on depth, height, the 45-degree test, materials and overlooking. We check your property's planning history and the local policy before we draw a line, so the design suits both you and the planning officer.</p>
<p>If your project is permitted development, we prepare a <strong>Lawful Development Certificate</strong> application instead, which gives you legal certainty for a lower council fee.</p>
<h3>Prices</h3><p>Single-storey extension ${gbp(prices.design[0].s1)} · Double-storey ${gbp(prices.design[1].s1)} · Loft ${gbp(prices.design[2].s1)} · Garage conversion ${gbp(prices.design[3].s1)}. <a href="/extension-design-prices/">Full price list</a>.</p>`,
    includes: ['Measured survey of your property', 'Existing plans and elevations', 'Concept designs and options', 'Proposed plans, elevations and roof plan', 'Planning or Lawful Development Certificate submission', 'Managing the application and speaking with the planning officer', 'Changes requested by the planning department'],
    excludes: ['The council\'s application fee', 'Location and site plan (free when both stages are booked)'],
    faqs: designFaqs.slice(0, 3).concat([designFaqs[4]]),
    offer: { name: 'Planning drawings', price: single.s1 },
  }),

  servicePage({
    path: '/building-regulations-drawings/',
    title: `Building Regulations Drawings from ${gbp(single.s2)}`,
    description: `Building regulations drawings and specifications drawn by a civil engineer, from ${gbp(single.s2)}, with structural calculations in-house. No VAT, England-wide.`,
    trail: [['/extension-design/', 'Extension design'], ['/building-regulations-drawings/', 'Building regs drawings']],
    eyebrow: 'Stage 2 · Building regulations',
    h1: 'Building regs drawings that builders can actually build from',
    lede: 'Technical plans, sections, details and specification for building control, drawn by an engineer who understands how it goes together on site.',
    ctas: `<a class="btn btn-amber" href="/contact/?service=Extension%20design">Get my fixed price</a>`,
    intro: `<h2>Where engineering matters most</h2><p>Building regulations drawings show <em>how</em> your extension is built: foundations, beams, insulation, drainage, fire safety and ventilation. They're what building control approves and what your builder prices from. Vague drawings lead to vague quotes and extra costs part-way through.</p>
<p>Because Ashbridge is engineer-led, beams, foundations and drainage are designed properly from the start. Add in-house structural calculations with the <strong>Complete</strong> package, so building control gets one consistent set of documents.</p>`,
    includes: ['Technical floor plans and sections', 'Technical elevations', 'Construction details: foundations, walls, roof, junctions', 'Specification notes to Approved Documents', 'Building control submission and management', 'Changes requested by building control'],
    excludes: ['Building control fees', 'Structural calculations (included in the Complete package)'],
    faqs: [['Do I need building regs drawings if I have planning permission?', 'Yes. Planning covers what the extension looks like. Building regulations cover how it\'s built, and apply to almost all extensions, lofts and garage conversions.'], designFaqs[1], designFaqs[4]],
    offer: { name: 'Building regulations drawings', price: single.s2 },
  }),

  servicePage({
    path: '/structural-calculations/',
    title: `Structural Calculations from ${gbp(prices.beamCalc)}: Beams, Walls & Extensions`,
    description: `In-house structural calculations for steel beams, wall removal, extensions and lofts, from ${gbp(prices.beamCalc)}. Done by a civil engineer, accepted by building control. No VAT.`,
    trail: [['/extension-design/', 'Extension design'], ['/structural-calculations/', 'Structural calculations']],
    eyebrow: 'Structural calculations',
    h1: `Structural calculations from ${gbp(prices.beamCalc)}`,
    lede: 'Steel beam and wall removal calculations, and full structural packs for extensions and lofts. Done in-house by our civil engineer, with no third party to wait for.',
    ctas: `<a class="btn btn-amber" href="/contact/?service=Structural%20calculations">Request calculations</a>`,
    intro: `<h2>For homeowners and builders</h2><p>Knocking through a wall, opening up a kitchen or adding an extension? Building control needs calculations showing the beam, padstones and supports are adequate. We size the steel, check the bearings and loads, and produce calculations and a beam specification that building control can approve.</p>
<div class="table-wrap"><table><thead><tr><th>Work</th><th class="num">Price</th></tr></thead><tbody>
<tr><td>Wall removal / single steel beam</td><td class="num">${gbp(prices.beamCalc)}</td></tr>
${prices.design.map((d) => `<tr><td>${d.name}, when booked with Stage 2</td><td class="num">${gbp(d.calcs)}</td></tr>`).join('')}
</tbody></table></div>
<p class="small muted">Builders: ask about repeat-work rates.</p>`,
    includes: ['Load take-down and beam sizing', 'Padstone and bearing checks', 'Lintel and connection details', 'Calculations and beam specification for building control', 'Answers to building control queries on the calculations'],
    excludes: ['Site supervision', 'Steel fabrication or installation'],
    faqs: [['Will building control accept your calculations?', 'Yes. Calculations are prepared by a civil engineer (MSc) and set out to the relevant design standards. We answer any queries building control raises on them.'], ['How quickly can you turn them round?', 'Straightforward beam calculations are usually ready within 3–5 working days of receiving the measurements and photos.']],
    offer: { name: 'Structural calculations', price: prices.beamCalc },
  }),

  servicePage({
    path: '/loft-conversion-drawings/',
    title: `Loft Conversion Drawings from ${gbp(prices.design[2].s1)}`,
    description: `Loft conversion drawings: planning or lawful development from ${gbp(prices.design[2].s1)}, building regs drawings, and structural calculations in-house. Engineer-led, no VAT.`,
    trail: [['/extension-design/', 'Extension design'], ['/loft-conversion-drawings/', 'Loft conversions']],
    eyebrow: 'Loft conversions',
    h1: 'Loft conversion drawings and structural design',
    lede: 'Dormers, hip-to-gable and rooflight conversions, with floor joists, steels and fire escape routes designed by an engineer.',
    ctas: `<a class="btn btn-amber" href="/contact/?service=Extension%20design&detail=Loft%20conversion">Get my fixed price</a>`,
    intro: `<h2>Structure is the hard part of a loft</h2><p>A loft conversion is mostly a structural job: new floor joists, steel beams, a staircase with enough headroom and a protected escape route. Because we design the structure in-house, the drawings and calculations come from one engineer and match each other.</p><p>Many dormer lofts are permitted development. We confirm it with a Lawful Development Certificate, or prepare a planning application where it's needed.</p><p><strong>Prices:</strong> Stage 1 ${gbp(prices.design[2].s1)} · Stage 2 ${gbp(prices.design[2].s2)} · Both ${gbp(prices.design[2].both)} · Complete with calcs ${gbp(prices.design[2].complete)}.</p>`,
    includes: ['Measured survey including the roof space', 'Planning or Lawful Development Certificate drawings', 'Building regs drawings: floor, stairs, fire escape, insulation', 'Structural calculations for joists and steels (Complete package)'],
    excludes: ['Council and building control fees', 'Party wall surveyor, if needed'],
    faqs: [['Do I need planning permission for a loft conversion?', 'Often not. Dormers within 40 m³ (terraced) or 50 m³ (other houses) that don\'t face the road are usually permitted development, except in conservation areas or where rights have been removed. <a href="/can-i-extend/">Check yours</a>.']],
    offer: { name: 'Loft conversion drawings', price: prices.design[2].s1 },
  }),

  servicePage({
    path: '/garage-conversion-drawings/',
    title: `Garage Conversion Drawings from ${gbp(prices.design[3].s1)}`,
    description: `Garage conversion drawings from ${gbp(prices.design[3].s1)}: lawful development or planning, building regs, and structural calculations. Engineer-led, no VAT.`,
    trail: [['/extension-design/', 'Extension design'], ['/garage-conversion-drawings/', 'Garage conversions']],
    eyebrow: 'Garage conversions',
    h1: 'Garage conversion drawings',
    lede: 'Turn the garage into a room you\'ll actually use, with the right approvals, insulation and foundations for the new front wall.',
    ctas: `<a class="btn btn-amber" href="/contact/?service=Extension%20design&detail=Garage%20conversion">Get my fixed price</a>`,
    intro: `<h2>Simple, but not planning-free on every estate</h2><p>Converting an integral garage is often permitted development. On many newer estates, though, permitted development rights or garage use are restricted by a planning condition. We check before you spend anything. Building regulations approval is always needed, for insulation, the new wall and its foundation, ventilation and fire safety.</p><p><strong>Prices:</strong> Stage 1 ${gbp(prices.design[3].s1)} · Stage 2 ${gbp(prices.design[3].s2)} · Both ${gbp(prices.design[3].both)} · Complete with calcs ${gbp(prices.design[3].complete)}.</p>`,
    includes: ['Planning history and conditions check', 'Lawful Development Certificate or planning drawings', 'Building regs drawings and specification', 'Structural calculations for the new opening or wall (Complete package)'],
    excludes: ['Council and building control fees'],
    offer: { name: 'Garage conversion drawings', price: prices.design[3].s1 },
  }),

  // ---------------- DESIGN PRICES ----------------
  {
    path: '/extension-design-prices/',
    title: 'Extension Design Prices: Planning, Building Regs & Structural Calcs',
    description: `Fixed prices for extension drawings: planning from ${gbp(single.s1)}, both stages from ${gbp(single.both)}, Complete with structural calcs from ${gbp(single.complete)}. No VAT to add.`,
    trail: [['/extension-design-prices/', 'Design prices']],
    ld: [{ '@context': 'https://schema.org', '@type': 'OfferCatalog', name: 'Extension design prices', itemListElement: prices.design.map((d) => ({ '@type': 'Offer', name: d.name + ' – planning and building regs', price: d.both, priceCurrency: 'GBP' })) }],
    body: `${pageHero({ trail: [['/extension-design-prices/', 'Design prices']], eyebrow: 'Prices', h1: 'Extension design prices', lede: 'Fixed “from” prices in two stages, with no VAT to add. Book both stages together for a saving, a free resubmission and a free site plan.' })}
<section class="section"><div class="wrap stack">
  ${designPriceTable()}
  <div class="grid-3">
    <div class="card"><h3>Stage 1 · Planning</h3><ul class="ticks small"><li>Measured survey</li><li>Existing drawings</li><li>Concept designs and options</li><li>Planning drawings</li><li>Submission and management</li><li>Changes the council asks for</li></ul></div>
    <div class="card"><h3>Stage 2 · Building regs</h3><ul class="ticks small"><li>Technical plans and elevations</li><li>Construction details</li><li>Technical specification</li><li>Engineer's input on beams, foundations and drainage</li><li>Building control management</li><li>Changes building control asks for</li></ul></div>
    <div class="card"><h3>Complete</h3><ul class="ticks small"><li>Both stages</li><li>Structural calculations in-house</li><li>Free planning resubmission</li><li>Free location and site plan</li><li>One engineer, one consistent set of documents</li></ul></div>
  </div>
  <div class="note-box slate"><strong>What can change the price:</strong> two-storey or wraparound designs, conservation areas and listed buildings, sites that need a topographical survey, and redesigns you request after the design is agreed. You'll always get a fixed price before any work starts. <strong>Payment:</strong> Stage 1 at booking, Stage 2 when it starts. For both stages together, 50% at booking and 50% before Stage 2.</div>
  <div class="note-box">Council planning and building control fees are paid directly to the council and aren't included. Measured surveys outside our in-person area may carry a travel supplement, which we confirm in your quote.</div>
</div></section>
<section class="section-tight"><div class="wrap">${designQuoteTool()}</div></section>
${ctaBand()}`,
  },

  // ---------------- CAN I EXTEND ----------------
  {
    path: '/can-i-extend/',
    title: 'Can I Extend My House Without Planning Permission? Free Check',
    description: 'Free feasibility check for extensions, lofts and garage conversions in England: find out whether your project is likely to be permitted development, need prior approval or need planning.',
    trail: [['/extension-design/', 'Extension design'], ['/can-i-extend/', 'Can I extend?']],
    body: `${pageHero({ trail: [['/extension-design/', 'Extension design'], ['/can-i-extend/', 'Can I extend?']], eyebrow: 'Free feasibility check', h1: 'Can I extend my house?', lede: 'A quick first guide to whether your project is permitted development, needs prior approval, or needs a planning application.' })}
<section class="section"><div class="wrap">${canExtendTool()}</div></section>
<section class="section section-white"><div class="wrap narrow prose">
  <h2>How permitted development works</h2>
  <p>Houses in England have “permitted development” rights: some extensions can be built without a planning application, within set limits on depth, height, width and materials. Flats and maisonettes don't have these rights. Conservation areas, National Parks and National Landscapes (formerly AONBs) have tighter limits, and a council can remove rights with an Article 4 direction or a planning condition, which is common on newer estates.</p>
  <p>Even when a project is permitted development, a <strong>Lawful Development Certificate</strong> is worth getting. It proves the work was lawful when you come to sell, and building regulations approval is still needed.</p>
  <p>We check your property's planning history and local restrictions as part of every quote. <a href="/contact/?service=Extension%20design">Send us your address and idea</a>.</p>
</div></section>
${ctaBand()}`,
  },

  // ---------------- SNAGGING HUB ----------------
  servicePage({
    path: '/new-build-snagging/',
    title: `New-Build Snagging Surveys from ${gbp(minSnag)}, England-wide`,
    description: `Independent new-build snagging surveys and pre-completion inspections from ${gbp(minSnag)}. Engineer-checked reports within 24 hours. Based in Birmingham, covering England. No VAT.`,
    trail: [['/new-build-snagging/', 'New-build snagging']],
    eyebrow: 'New-build snagging',
    h1: 'Independent new-build snagging surveys',
    lede: 'Find every defect before it becomes your problem. Room-by-room inspections against building regulations and warranty standards, with a clear report within 24 hours.',
    ctas: `<a class="btn btn-amber" href="#quote">Get an instant price</a><a class="btn btn-ghost" href="/sample-snagging-report/">See a sample report</a>`,
    intro: `<h2>Built properly, or put right</h2><p>New homes are built quickly, and most have defects: some cosmetic, some that matter, like missing insulation, poor drainage falls, badly fitted windows or unsealed service penetrations. A snagging survey records them in a format the developer has to respond to.</p>
<p>We are <strong>independent</strong>. We don't work for developers and we only act for the buyer.</p>
<div class="grid-2">
  <a class="card" href="/pre-completion-inspection/" style="text-decoration:none"><h3>Pre-completion inspection</h3><p class="small muted">Before you complete: the best time</p></a>
  <a class="card" href="/two-year-warranty-inspection/" style="text-decoration:none"><h3>2-year warranty inspection</h3><p class="small muted">Before the developer's liability ends</p></a>
</div>`,
    includes: ['Inspection of every room, the loft space and the outside', 'Checks against building regulations and warranty-provider standards', 'Windows, doors, finishes, plumbing, heating, electrics (visual and functional)', 'Photographs with each snag located and graded', 'PDF report within 24 hours, ready to send to the developer', 'Every report checked by our lead engineer'],
    excludes: ['Opening up of concealed structures', 'Specialist gas or electrical safety certification'],
    faqs: snagFaqs,
    extra: `<section class="section-tight"><div class="wrap">${snagQuoteTool()}</div></section>`,
    offer: { name: 'New-build snagging survey', price: minSnag },
  }),

  {
    path: '/pre-completion-inspection/',
    title: 'Pre-Completion Inspections: Your NHQB Inspection Window',
    description: 'Buying from an NHQB-registered developer? You can request an independent pre-completion inspection. Check your inspection window and book an engineer-checked inspection.',
    trail: [['/new-build-snagging/', 'New-build snagging'], ['/pre-completion-inspection/', 'Pre-completion inspection']],
    ld: [faqLd([
      ['Can I have my new build inspected before completion?', 'If your developer is registered with the New Homes Quality Board, you can request an independent pre-completion inspection under the New Homes Quality Code.'],
      ['When does the inspection window open?', 'For homes reserved from 2 March 2026, the developer must give the inspector the chance to inspect from five calendar days after the Notice to Complete is served.'],
    ])],
    body: `${pageHero({ trail: [['/new-build-snagging/', 'New-build snagging'], ['/pre-completion-inspection/', 'Pre-completion inspection']], eyebrow: 'Pre-completion inspection', h1: 'Buying from an NHQB-registered developer? You can request an independent pre-completion inspection.', lede: `The best time to find defects is before you complete, while the developer still has every reason to fix them. Inspections from ${gbp(minSnag)}, no VAT.`, ctas: '<a class="btn btn-amber" href="#window">Check my inspection window</a><a class="btn btn-ghost" href="/snagging-prices/">Prices</a>' })}
<section class="section"><div class="wrap grid-2">
  <div class="prose">
    <h2>How it works under the New Homes Quality Code</h2>
    <p>The New Homes Quality Code applies to homes sold by developers registered with the <strong>New Homes Quality Board (NHQB)</strong>. It gives buyers the right to request a pre-completion inspection by a suitably qualified independent inspector.</p>
    <p>Version 2 of the Code applies to homes reserved from <strong>2 March 2026</strong>:</p>
    <ul>
      <li>The developer must give your inspector the chance to inspect from <strong>five calendar days after the Notice to Complete</strong> is served.</li>
      <li>Issues that breach the warranty provider's technical standards are the developer's responsibility, ideally fixed before legal completion, or within 30 days if that isn't possible.</li>
      <li>Normal snags shouldn't delay completion. They're listed and dealt with through the developer's aftercare.</li>
    </ul>
    <p>Not sure if your developer is registered? Check the <a href="https://www.nhqb.org.uk/" rel="noopener">NHQB website</a>, or ask us: we check it when you book.</p>
    <p class="small muted">This page summarises the Code for buyers and isn't legal advice. Your conveyancer can confirm the dates in your contract.</p>
  </div>
  <div>${pciTool()}</div>
</div></section>
<section class="section-tight"><div class="wrap">${snagQuoteTool('Pre-completion inspection price')}</div></section>
${ctaBand()}`,
  },

  servicePage({
    path: '/two-year-warranty-inspection/',
    title: `2-Year Warranty Inspection: Before the Developer's Liability Ends`,
    description: `Inspection of your new-build home before the end of the developer's two-year defects period. ${gbp(prices.warranty)}, or ${gbp(prices.warrantyReturning)} for returning clients. No VAT.`,
    trail: [['/new-build-snagging/', 'New-build snagging'], ['/two-year-warranty-inspection/', '2-year warranty inspection']],
    eyebrow: '2-year warranty inspection',
    h1: 'Get defects on record before your two years are up',
    lede: `Under most new-home warranties, the developer is responsible for putting defects right in the first two years. After that, cover is mainly structural. An inspection at month 22–23 makes sure nothing is missed. ${gbp(prices.warranty)}, no VAT.`,
    ctas: `<a class="btn btn-amber" href="/contact/?service=New-build%20snagging&detail=2-year%20warranty%20inspection">Book my inspection</a>`,
    intro: `<h2>Problems that show up after you move in</h2><p>Settlement cracking, sticking doors and windows, damp patches, poor drainage, failing sealant and heating issues often appear after the first year, once the house has dried out and been through the seasons. They are much easier to get fixed while the developer is still responsible.</p><p>Returning Ashbridge clients pay ${gbp(prices.warrantyReturning)}.</p>`,
    includes: ['Full re-inspection of the home, inside and out', 'Comparison with any earlier snagging report', 'Photographed, graded report within 24 hours', 'Guidance on raising issues with the developer and warranty provider'],
    offer: { name: '2-year warranty inspection', price: prices.warranty },
  }),

  {
    path: '/snagging-prices/',
    title: `Snagging Survey Prices from ${gbp(minSnag)}: Instant Quote`,
    description: `Snagging survey and pre-completion inspection prices by bedrooms: ${prices.snag.map((r) => r.label + ' ' + gbp(r.price)).join(', ')}. No VAT. Book online.`,
    trail: [['/new-build-snagging/', 'New-build snagging'], ['/snagging-prices/', 'Prices']],
    ld: [{ '@context': 'https://schema.org', '@type': 'OfferCatalog', name: 'Snagging survey prices', itemListElement: prices.snag.map((r) => ({ '@type': 'Offer', name: 'Snagging survey – ' + r.label, price: r.price, priceCurrency: 'GBP' })) }],
    body: `${pageHero({ trail: [['/new-build-snagging/', 'New-build snagging'], ['/snagging-prices/', 'Prices']], eyebrow: 'Snagging prices', h1: 'Snagging survey prices', lede: `Priced by bedrooms, with no VAT to add. Book online with a ${gbp(prices.deposit)} deposit and pay the balance when your report arrives.` })}
<section class="section-tight"><div class="wrap">${snagQuoteTool()}</div></section>
<section class="section"><div class="wrap stack">${snagPriceTable()}</div></section>
${ctaBand()}`,
  },

  {
    path: '/sample-snagging-report/',
    title: 'Sample Snagging Report: What You Receive',
    description: 'See how an Ashbridge snagging report is laid out: every snag photographed, located, graded and referenced to the relevant standard.',
    trail: [['/new-build-snagging/', 'New-build snagging'], ['/sample-snagging-report/', 'Sample report']],
    body: `${pageHero({ trail: [['/new-build-snagging/', 'New-build snagging'], ['/sample-snagging-report/', 'Sample report']], eyebrow: 'Sample report', h1: 'What your report looks like', lede: 'Clear enough for you, precise enough for the developer. Every snag is photographed, located, graded and referenced.' })}
<section class="section"><div class="wrap grid-2" style="align-items:start">
  <div class="report" aria-label="Example report layout">
    <div class="report-head"><b>ASHBRIDGE DESIGN · SNAGGING REPORT</b><span>Example layout: not a real property</span></div>
    <div class="snag"><div class="ph">Photo</div><div class="stack-sm"><div><span class="sev sev-high">Priority</span></div><h4>Kitchen: gap at worktop and wall junction, no seal</h4><p class="small">Location: kitchen, rear wall, left of sink. Risk of water getting behind the units. Seal to the manufacturer's standard.</p></div></div>
    <div class="snag"><div class="ph">Photo</div><div class="stack-sm"><div><span class="sev sev-med">Standard</span></div><h4>Bedroom 2: door catches the frame when closing</h4><p class="small">Location: bedroom 2 entrance. Adjust the hinges so the door closes freely with an even gap.</p></div></div>
    <div class="snag"><div class="ph">Photo</div><div class="stack-sm"><div><span class="sev sev-low">Cosmetic</span></div><h4>Landing: paint runs on skirting board</h4><p class="small">Location: first-floor landing, 1.2 m from the stair head. Rub down and repaint.</p></div></div>
  </div>
  <div class="stack">
    <h2>In every report</h2>
    <ul class="ticks">
      <li>A summary of snags by room and by priority</li>
      <li>A photo of every snag, with its exact location</li>
      <li>A grade: priority, standard or cosmetic</li>
      <li>The relevant standard where one applies (building regulations or warranty-provider tolerances)</li>
      <li>A clear remedy, written so the developer can act on it</li>
      <li>Sign-off by our lead engineer</li>
    </ul>
    <p class="muted small">A full anonymised sample PDF will be available here once the first inspections are complete. <a href="/contact/?service=New-build%20snagging&detail=Please%20send%20a%20sample%20report">Ask us for one</a>.</p>
    <div class="btn-row"><a class="btn btn-amber" href="/snagging-prices/">Get an instant price</a></div>
  </div>
</div></section>
${ctaBand()}`,
  },

  // ---------------- COMPANY ----------------
  {
    path: '/about/',
    title: 'About Ashbridge Design',
    description: 'Ashbridge Design is an engineer-led practice based in Birmingham: extension design, structural calculations and new-build inspections across England.',
    trail: [['/about/', 'About']],
    body: `${pageHero({ trail: [['/about/', 'About']], eyebrow: 'About', h1: 'An engineer, not a call centre', lede: 'Ashbridge Design is a Birmingham-based practice for two jobs that both come down to the same thing: a home that\'s built properly.' })}
<section class="section"><div class="wrap grid-2">
  <div class="prose">
    <h2>${site.founderName ? esc(site.founderName) + ', founder' : 'Led by a civil engineer'}</h2>
    <p>Ashbridge is led by a civil engineer with a Master's in Civil Engineering and 15 years' experience in design and construction. That background shapes everything we do. We design extensions that work structurally from day one, produce our own structural calculations, and inspect new homes against the standards they were meant to be built to.</p>
    <h3>What we promise</h3>
    <ul>
      <li><strong>Fixed, published prices.</strong> No VAT to add and no hourly billing.</li>
      <li><strong>Speed.</strong> Snagging reports within 24 hours, and quotes usually the same day.</li>
      <li><strong>One standard across England.</strong> Every report and drawing set is signed off by the lead engineer.</li>
      <li><strong>Independence.</strong> We act for homeowners and buyers, never for developers.</li>
    </ul>
    <p class="small muted">Ashbridge Design is not an architecture practice: “architect” is a protected title in the UK. We are an engineer-led design and inspection practice.</p>
  </div>
  <div class="card stack">
    <div class="stamp" style="background:var(--deep);margin-inline:auto">MSc<br>CIVIL ENG<small>15 YEARS</small></div>
    <h3>At a glance</h3>
    <ul class="ticks"><li>Based in ${site.base}</li><li>Covering all of England</li><li>Extension design, planning and building regs drawings</li><li>Structural calculations in-house</li><li>New-build snagging and pre-completion inspections</li><li>Not VAT registered</li></ul>
  </div>
</div></section>
${ctaBand()}`,
  },

  {
    path: '/projects/',
    title: 'Projects & Planning Approvals',
    description: 'Extension design projects and planning approvals by Ashbridge Design.',
    trail: [['/projects/', 'Projects']],
    body: `${pageHero({ trail: [['/projects/', 'Projects']], eyebrow: 'Projects', h1: 'Projects and planning approvals', lede: 'Real projects with drawings, before-and-after photos and council reference numbers you can check on the planning portal.' })}
<section class="section"><div class="wrap narrow stack">
  <div class="note-box slate"><strong>Our first projects are being documented.</strong> Each case study will show the brief, the drawings, the planning decision with its council reference, and the finished build, published with the homeowner's permission.</div>
  <p>Planning an extension now? <a href="/contact/?service=Extension%20design">Ask about introductory pricing for early projects</a> in exchange for permission to feature yours.</p>
</div></section>
${ctaBand()}`,
  },

  {
    path: '/contact/',
    title: 'Get a Price',
    description: 'Get a fixed price for extension drawings, structural calculations or a new-build snagging inspection. Usually the same day.',
    trail: [['/contact/', 'Get a price']],
    body: `${pageHero({ trail: [['/contact/', 'Get a price']], eyebrow: 'Get a price', h1: 'Tell us about your project', lede: 'You\'ll get a clear, fixed price, usually the same day. For snagging, you can also <a href="/snagging-prices/">get an instant price</a>.' })}
<section class="section"><div class="wrap grid-2" style="align-items:start">
  <form class="form card" name="enquiry" method="POST" action="/api/enquiry/" enctype="multipart/form-data" data-form>
    <p class="hp"><label>Leave this empty <input name="company" tabindex="-1" autocomplete="off"></label></p>
    <div class="row">
      <div class="field"><label for="f-name">Name</label><input id="f-name" name="name" required autocomplete="name"></div>
      <div class="field"><label for="f-email">Email</label><input id="f-email" name="email" type="email" required autocomplete="email"></div>
    </div>
    <div class="row">
      <div class="field"><label for="f-phone">Phone</label><input id="f-phone" name="phone" type="tel" autocomplete="tel"></div>
      <div class="field"><label for="f-pc">Property postcode</label><input id="f-pc" name="postcode" required autocomplete="postal-code"></div>
    </div>
    <div class="field"><label for="f-service">Service</label><select id="f-service" name="service" required>
      <option value="Extension design">Extension design / drawings</option>
      <option value="Structural calculations">Structural calculations</option>
      <option value="New-build snagging">New-build snagging</option>
      <option value="Pre-completion inspection">Pre-completion inspection</option>
      <option value="Other">Something else</option></select></div>
    <div class="field"><label for="f-msg">Your project or property</label><textarea id="f-msg" name="message" required placeholder="What do you want to build, or which new build are you buying (development, developer, bedrooms, completion date)?"></textarea></div>
    <div class="field"><label for="f-files">Photos or plans (optional)</label><input id="f-files" name="files" type="file" multiple accept="image/*,.pdf"><span class="hint">Up to 4 MB in total. Larger files can be emailed after we reply.</span></div>
    <p class="small muted">We use your details only to reply about your enquiry. See our <a href="/privacy/">privacy notice</a>.</p>
    <div class="btn-row"><button class="btn btn-amber" type="submit">Send my enquiry</button></div>
    <p class="form-status" role="status"></p>
  </form>
  <div class="stack">
    <div class="card stack-sm"><h3>Contact</h3>
      <p><a href="mailto:${site.email}">${site.email}</a></p>
      ${site.phone ? `<p><a href="tel:${tel}">${esc(site.phone)}</a></p>` : ''}
      ${site.whatsapp ? `<p><a href="https://wa.me/${site.whatsapp}">WhatsApp us</a></p>` : ''}
      <p class="small muted">Based in ${site.base}. Covering all of England.</p></div>
    <div class="card stack-sm"><h3>What happens next</h3><ol class="steps" style="grid-template-columns:1fr">
      <li><p class="small">We review your details, and check planning history or your developer's NHQB status where it applies.</p></li>
      <li><p class="small">You get a fixed price and the earliest available date.</p></li>
      <li><p class="small">Book with a deposit, or pay for Stage 1, and we get started.</p></li>
    </ol></div>
  </div>
</div></section>`,
  },

  {
    path: '/thank-you/',
    title: 'Thank You',
    description: 'Your enquiry has been sent.',
    noindex: true,
    body: `${pageHero({ eyebrow: 'Sent', h1: 'Thanks, we\'ve got your enquiry', lede: 'You\'ll hear back with a fixed price, usually the same day. Check your junk folder if nothing arrives.', ctas: '<a class="btn btn-ghost" href="/guides/">Read our guides</a><a class="btn btn-ghost" href="/">Back to home</a>' })}`,
  },

  {
    path: '/privacy/',
    title: 'Privacy Notice',
    description: 'How Ashbridge Design uses your personal information.',
    trail: [['/privacy/', 'Privacy']],
    body: `${pageHero({ trail: [['/privacy/', 'Privacy']], h1: 'Privacy notice' })}
<section class="section"><div class="wrap prose">
  <p>${esc(site.name)} (“we”) is the data controller for personal information you give us through this website. Contact: <a href="mailto:${site.email}">${site.email}</a>.</p>
  <h2>What we collect and why</h2>
  <ul><li><strong>Enquiries:</strong> your name, contact details, property address and project information, used to reply and quote (legitimate interests, or steps before entering a contract).</li><li><strong>Clients:</strong> the information needed to carry out surveys, inspections and design work, and to keep business records (contract and legal obligation).</li><li><strong>Follow-up:</strong> with your consent, occasional messages about relevant services, such as your 2-year warranty inspection. You can opt out at any time.</li></ul>
  <h2>Who we share it with</h2>
  <p>Only where needed to deliver your service: councils and building control bodies (for applications), inspectors or survey partners working for us, and our website, email and form-hosting providers. We never sell your data.</p>
  <h2>How long we keep it</h2>
  <p>Enquiries that don't go ahead: up to 12 months. Client records: up to 7 years, for professional indemnity and tax purposes.</p>
  <h2>Your rights</h2>
  <p>You can ask to see, correct or delete your information, or object to its use. You can also complain to the Information Commissioner's Office (ico.org.uk).</p>
</div></section>`,
  },
];
