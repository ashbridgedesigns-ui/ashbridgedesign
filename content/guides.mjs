import { gbp, pageHero, ctaBand } from '../lib/layout.mjs';
import { prices, site } from '../lib/parts.mjs';

const single = prices.design[0];

const guides = [
  {
    slug: 'snagging-survey-cost',
    published: '2026-09-25', updated: '2026-09-25',
    title: 'How much does a snagging survey cost? (2026 prices)',
    summary: 'What snagging surveys and pre-completion inspections cost in England in 2026, what changes the price, and what to check before you book.',
    body: `<p>Most snagging surveys for a typical new home in England cost <strong>between about £325 and £500</strong>, based on the prices national snagging firms publish in 2026. Flats and smaller houses sit at the lower end; four- and five-bedroom houses at the top.</p>
<h2>Ashbridge prices</h2>
<ul>${prices.snag.map((r) => `<li>${r.label}: <strong>${gbp(r.price)}</strong></li>`).join('')}</ul>
<p>The same price applies to a pre-completion inspection. Both together (before and after you move in) cost the snagging price plus ${gbp(prices.preAndPost)}. See <a href="/snagging-prices/">all snagging prices</a>, or get an instant quote.</p>
<h2>What changes the price</h2>
<ul>
<li><strong>Size:</strong> most firms price by bedrooms, because more rooms mean a longer inspection and a longer report.</li>
<li><strong>Timing:</strong> a pre-completion inspection and a post-completion snagging survey usually cost about the same. Booking both costs more.</li>
<li><strong>Extras:</strong> thermal imaging, drone roof checks and re-inspections are often add-ons.</li>
<li><strong>Location:</strong> some firms charge more for remote areas. Ours is a ${gbp(prices.travel)} supplement for TR, CA and TD postcodes only.</li>
</ul>
<h2>Is the cheapest worth it?</h2>
<p>The report is only as useful as the person who writes it. Before you book any snagging firm, ask:</p>
<ul>
<li>Is the inspector a member of a recognised professional body for surveying? For a pre-completion inspection under the New Homes Quality Code, they need to be.</li>
<li>Do they carry professional indemnity insurance?</li>
<li>Will they use the NHQB Pre-Completion Inspection Checklist where it applies?</li>
<li>Can you see a sample report, and how quickly will you get yours?</li>
</ul>
<p>Compare a few firms on those answers, not just the price. Our <a href="/sample-snagging-report/">sample report</a> shows what you get.</p>`,
  },
  {
    slug: 'what-happens-after-your-snagging-report',
    published: '2026-09-25', updated: '2026-09-25',
    title: 'What happens after your snagging report?',
    summary: 'How to get the developer to fix the snags: sending the report, the timescales in the New Homes Quality Code, complaints and the New Homes Ombudsman.',
    body: `<p>A snagging report is only the start. Here's how to turn it into repairs, using the timescales in Version 2 of the New Homes Quality Code, which applies to homes reserved from 2 March 2026 with NHQB-registered developers.</p>
<h2>1. Send it in writing</h2>
<p>Send the full report to the developer's after-sales or customer care team by email, and keep a copy with the date you sent it. The Code requires developers to provide an after-sales service for at least two years after completion.</p>
<h2>2. Expect action within 30 days</h2>
<p>Developers should settle an after-sales issue within 30 days, unless there's a significant reason for delay. If it takes longer, they should update you monthly.</p>
<h2>3. Check the repairs</h2>
<p>When the developer says the work is done, check it against the report, or book a <a href="/snagging-prices/">re-inspection</a> (${gbp(prices.reinspection)}) so each item is signed off properly.</p>
<h2>4. If it stalls, make a formal complaint</h2>
<ul>
<li>The developer should acknowledge your complaint within 5 days.</li>
<li>They should send an assessment and response within 30 days of the complaint start date.</li>
<li>If it isn't resolved, they should write to you no later than 56 days from the complaint start date.</li>
</ul>
<h2>5. Take it to the New Homes Ombudsman</h2>
<p>If your complaint still isn't resolved, you can refer it to the New Homes Ombudsman Service after 56 days of the complaint start date, as long as the issue arose within two years of completion. The service is free for homebuyers.</p>
<h2>Keep the paper trail</h2>
<p>Dated emails, the original report, photos and any re-inspection report are what make a complaint straightforward. Check which Code version covers you, and whether your developer is registered, on the <a href="/developers/">housebuilder pages</a>.</p>`,
  },
  {
    slug: 'new-build-warranty-first-two-years',
    published: '2026-09-25', updated: '2026-09-25',
    title: 'New-build warranty: what the builder must fix in 2 years',
    summary: 'How new-home warranties split into a two-year builder period and years 3–10, what that means for defects, and when to get a 2-year inspection.',
    body: `<p>Most new homes in England come with a 10-year warranty from a provider such as NHBC, Premier Guarantee or LABC Warranty. The details depend on the policy, so check your own documents, but they usually work in two stages. NHBC's Buildmark policy is the most common example.</p>
<h2>Years 1–2: the builder fixes defects</h2>
<p>Under NHBC Buildmark, for the first two years <strong>the builder is responsible for putting right defects caused by not building to NHBC's Technical Standards</strong>. If the builder doesn't, or has gone out of business, NHBC may step in. This is the period for workmanship and materials: cracks, doors and windows, leaks, finishes and services.</p>
<h2>Years 3–10: structural cover only</h2>
<p>From year three to year ten, NHBC covers defects to the <strong>structural and weatherproofing parts</strong> of the home caused by breaches of its Technical Standards, but only where damage has occurred. Everyday defects that would have been the builder's responsibility in years one and two usually aren't covered.</p>
<h2>Why the end of year two matters</h2>
<p>Some problems only show once a house has dried out and been through the seasons: settlement cracks, sticking doors, damp patches, drainage issues. Getting them on record <strong>before</strong> the two years are up keeps the builder responsible for them.</p>
<p>A <a href="/two-year-warranty-inspection/">2-year warranty inspection</a> at around month 22 or 23 gives you time to report everything and for the builder to respond. It costs ${gbp(prices.warranty)}, or ${gbp(prices.warrantyReturning)} if we inspected your home before.</p>
<h2>How this fits with the New Homes Quality Code</h2>
<p>If your developer is registered with the NHQB, the Code also requires an after-sales service for at least two years after completion, with a route to the New Homes Ombudsman. See <a href="/guides/what-happens-after-your-snagging-report/">what happens after your snagging report</a>.</p>`,
  },
  {
    slug: 'langley-sutton-coldfield-new-build-guide',
    published: '2026-09-25', updated: '2026-09-25',
    title: 'Buying a new build at Langley, Sutton Coldfield',
    summary: 'The 5,500-home Langley development near Walmley: what\'s planned, who is behind it, and how to protect yourself when you buy there.',
    body: `<p>Langley, on the edge of Sutton Coldfield next to Walmley, is one of the largest new housing developments in the West Midlands. As it grows, it will be a big source of new-build purchases in Birmingham's B76 area, and our home base is just down the road.</p>
<h2>What's planned</h2>
<ul>
<li><strong>About 5,500 homes</strong>, of which over a third (about 2,000) are planned as affordable housing.</li>
<li><strong>Around 14,000 residents</strong> once complete.</li>
<li>New schools, community parks, local shops and services, walking and cycling routes, and a traffic-free bridge over the A38.</li>
<li>Development is guided by Birmingham City Council's Langley Sustainable Urban Extension planning document.</li>
</ul>
<h2>Who is behind it</h2>
<p>The planning application was submitted in 2022 by a consortium of Taylor Wimpey, Vistry Homes, New Hall Estates, William Davis, Homes England and Ciel Property Holdings. Which builders sell homes on each phase can change, so check the developer named in your reservation paperwork.</p>
<h2>Protecting yourself as a buyer</h2>
<ul>
<li><strong>Check your developer on the NHQB register.</strong> If they're registered and you reserved on or after their registration date, you can have a pre-completion inspection and use the New Homes Ombudsman. Taylor Wimpey and Vistry Homes are both listed as active. See <a href="/developers/taylor-wimpey/">Taylor Wimpey</a> and <a href="/developers/">other housebuilders</a>.</li>
<li><strong>Book a pre-completion inspection</strong> for after your Notice to Complete arrives. <a href="/pre-completion-inspection/#window">Check your inspection window</a>.</li>
<li><strong>Plan a 2-year check</strong> before the builder's warranty period ends.</li>
</ul>
<p>Langley is inside our in-person area: our lead engineer inspects homes there in person, from ${gbp(prices.snag[0].price)} for a flat and ${gbp(prices.snag[2].price)} for a 3-bedroom house. <a href="/areas/birmingham/">More on Birmingham</a>.</p>`,
  },
  {
    slug: 'can-i-do-my-own-pre-completion-inspection',
    title: 'Can I do my own pre-completion inspection? (2026 rules)',
    summary: 'Code V2 lets buyers inspect their own new build before completion. What the rules say, the hard part, and when a professional is worth it.',
    body: `<p><strong>Yes, in most cases.</strong> If you reserved your home from an NHQB-registered developer on or after <strong>2 March 2026</strong>, Version 2 of the New Homes Quality Code lets you carry out the pre-completion inspection yourself. Under Version 1, the inspection had to be done by a suitably qualified inspector.</p>
<h2>What the Code says</h2>
<ul>
<li>You can <strong>inspect yourself</strong>, or <strong>appoint a suitably qualified inspector</strong>: a member of a recognised professional body for surveying (such as RICS, CIOB or CABE) who holds professional indemnity insurance and works within their competency.</li>
<li>Either way, the inspection must use the <strong>NHQB Pre-Completion Inspection Checklist</strong>.</li>
<li>If you inspect yourself, the developer must tell you that the checklist was <strong>designed to be used by a professional</strong>, so you may miss things or interpret some requirements differently.</li>
<li>The inspection takes place after the Notice to Complete is served and before the completion date, or earlier if you and the developer both agree. The notice period is normally at least 14 calendar days.</li>
<li>If issues breach the warranty provider's technical standards, the developer is responsible for fixing them, ideally before legal completion or within 30 days if that isn't possible.</li>
</ul>
<h2>The hard part: judging what counts as a defect</h2>
<p>The checklist gives you a structure, and it sets out how to inspect: for example, internal walls are viewed in natural daylight from at least two metres away, without shining a light across the surface. But the developer judges your findings against the warranty provider's technical standards. Those standards set tolerances, for example for how level a floor or how straight a wall must be. Knowing the tolerance, and being able to measure it, is what separates a defect the developer must fix from one they can dispute. Download the current checklist from the <a href="https://www.nhqb.org.uk/the-code/" rel="noopener">NHQB website</a> before you start.</p>
<h2>When doing it yourself makes sense</h2>
<ul>
<li>You're confident with tools and happy to read technical standards.</li>
<li>It's a small flat and you have time before completion.</li>
<li>You plan to get a professional snagging survey after you move in anyway.</li>
</ul>
<h2>When a professional is worth it</h2>
<ul>
<li>It's the biggest purchase you'll make, and the developer's own team will review your findings.</li>
<li>A professional report cites the relevant standard for each defect, which is harder to dismiss.</li>
<li>Some of the most costly issues are easy to miss without experience: loft insulation gaps, drainage falls and poorly sealed service penetrations.</li>
</ul>
<p>An Ashbridge pre-completion inspection starts at ${gbp(prices.snag[0].price)} for a flat and ${gbp(prices.snag[2].price)} for a 3-bedroom house, with an engineer-checked report within 24 hours. <a href="/pre-completion-inspection/#window">Check your inspection window</a>, <a href="/sample-snagging-report/">see a sample report</a> or <a href="/snagging-prices/">get an instant price</a>.</p>
<p class="small muted">This guide summarises the Code for buyers and isn't legal advice. Check the current Code on the <a href="https://www.nhqb.org.uk/the-code/" rel="noopener">NHQB website</a>, and your contract dates with your conveyancer.</p>`,
  },
  {
    slug: 'pre-completion-inspection-explained',
    title: 'Pre-completion inspections explained',
    summary: 'What the New Homes Quality Code lets you do before completion, when to book, and what happens to the defects found.',
    body: `<p>If you're buying a new home from a developer registered with the <strong>New Homes Quality Board (NHQB)</strong>, you can ask for an independent pre-completion inspection: a professional check of the home before you legally complete.</p>
<h2>Why before completion matters</h2>
<p>Until completion, the developer is still waiting for your money. That's the strongest position you'll ever be in to get defects put right quickly. After you move in, fixes go into the developer's aftercare queue.</p>
<h2>What the Code says</h2>
<ul>
<li>It applies to homes bought from <strong>NHQB-registered developers</strong>. Most large national housebuilders are registered, but check yours.</li>
<li>Version 2 of the Code applies to homes reserved from <strong>2 March 2026</strong>. Homes reserved earlier fall under Version 1, which also included pre-completion inspections.</li>
<li>The inspection takes place <strong>after the Notice to Complete is served and before the completion date</strong>, or earlier if you and the developer both agree. The notice period is normally <strong>at least 14 calendar days</strong>.</li>
<li>The inspector must be <strong>suitably qualified</strong>: a member of a recognised professional body for surveying (such as RICS, CIOB or CABE), with professional indemnity insurance. The inspection uses the <strong>NHQB Pre-Completion Inspection Checklist</strong>.</li>
<li>Issues that breach the warranty provider's technical standards should be fixed before completion, or within 30 days if that isn't possible.</li>
</ul>
<h2>How to arrange it</h2>
<ol>
<li>Tell the developer's sales team, in writing, that you want a pre-completion inspection.</li>
<li>When the Notice to Complete arrives, <a href="/pre-completion-inspection/#window">check your inspection window</a>.</li>
<li>Book the inspector for a date in that window. We confirm the access arrangements with the site team.</li>
<li>Send the report to the developer and keep a copy for your records.</li>
</ol>
<p class="small muted">This guide summarises the Code for buyers. It isn't legal advice. Your conveyancer can confirm the dates in your contract.</p>`,
  },
  {
    slug: 'do-i-need-planning-permission-for-an-extension',
    title: 'Do I need planning permission for an extension?',
    summary: 'Permitted development, prior approval and full planning, explained for houses in England, including the catch on newer estates.',
    body: `<p>Many extensions in England don't need a full planning application because houses have <strong>permitted development</strong> rights. Whether yours does depends on the type of home, the size of the extension and where you live.</p>
<h2>Single-storey rear extensions</h2>
<ul><li>Up to <strong>3 m</strong> deep (semi-detached or terraced) or <strong>4 m</strong> (detached) is usually permitted development.</li>
<li>Up to <strong>6 m / 8 m</strong> is possible through the <em>larger home extension</em> prior approval route. Neighbours are notified and the council decides within 42 days. This route isn't available in conservation areas.</li>
<li>Maximum 4 m high, and eaves no higher than 3 m within 2 m of a boundary.</li></ul>
<h2>Two-storey and side extensions</h2>
<ul><li>Two-storey rear: up to 3 m deep, and at least 7 m from the rear boundary.</li>
<li>Side: single storey only, no more than 4 m high and no wider than half the original house.</li>
<li>Neither is permitted development in a conservation area.</li></ul>
<h2>When you always need planning</h2>
<ul><li>Flats and maisonettes, which have no householder permitted development rights</li><li>Listed buildings, which also need listed building consent</li><li>Where rights are removed by an <strong>Article 4 direction</strong> or a <strong>planning condition</strong>. This is very common on estates built in the last 15–20 years.</li></ul>
<h2>Even if it's permitted development…</h2>
<p>Get a <strong>Lawful Development Certificate</strong>. It proves the extension was lawful, which your buyer's solicitor will ask about when you sell. Building regulations approval is needed either way.</p>
<p>Try our <a href="/can-i-extend/">free feasibility check</a>, or <a href="/planning-drawings/">get planning drawings from ${gbp(single.s1)}</a>.</p>
<p class="small muted">A general guide to the rules for houses in England. Your own case depends on your property's planning history. We check it as part of every quote.</p>`,
  },
  {
    slug: 'planning-vs-building-regulations-drawings',
    title: 'Planning drawings vs building regs drawings: what\'s the difference?',
    summary: 'Why most extensions need two sets of drawings, what each one shows, and where structural calculations fit.',
    body: `<p>Planning permission and building regulations are two separate approvals, and they need different drawings.</p>
<h2>Planning drawings: what it looks like</h2>
<p>Planning is about how the extension affects the street, the neighbours and the character of the area. The drawings show size, shape, position, windows and materials: existing and proposed floor plans, elevations, a roof plan, and a location and site plan.</p>
<h2>Building regs drawings: how it's built</h2>
<p>Building regulations are about safety and performance: structure, fire safety, insulation, ventilation, drainage and access. The drawings are technical, with sections, construction details and specification notes. They're what building control approves and what your builder prices from.</p>
<h2>Structural calculations</h2>
<p>If there's a steel beam, a new opening or a loft floor, building control needs calculations proving the structure works. Many firms send these to a separate engineer. At Ashbridge they're done in-house.</p>
<h2>What it costs</h2>
<p>For a single-storey extension: planning ${gbp(single.s1)}, building regs ${gbp(single.s2)}, both stages ${gbp(single.both)}, or Complete with calculations ${gbp(single.complete)}. <a href="/extension-design-prices/">See all prices</a>.</p>`,
  },
  {
    slug: 'what-is-a-snagging-survey',
    title: 'What is a snagging survey, and is it worth it?',
    summary: 'What gets checked, what a report looks like, when to book and what it costs.',
    body: `<p>A <strong>snag</strong> is any defect in a new home: unfinished, damaged, or not built to the required standard. A <strong>snagging survey</strong> is an independent inspection that finds and records them.</p>
<h2>What gets checked</h2>
<ul><li>Walls, ceilings, floors and finishes</li><li>Windows and doors: fit, seals, operation and security</li><li>Kitchen and bathrooms: sealing, fittings, water flow and drainage</li><li>Heating, hot water and electrical fittings (visual and functional)</li><li>Loft: insulation, ventilation and services</li><li>Outside: brickwork, pointing, render, roof line, gutters, drainage and paving falls</li></ul>
<h2>Is it worth it?</h2>
<p>Most new homes have defects, and buyers find it hard to spot the ones that matter. A professional report is specific, photographed and referenced, so it's much harder for a developer to dismiss than a buyer's own list.</p>
<h2>When to book</h2>
<p>Before completion, if your developer is NHQB-registered: see <a href="/guides/pre-completion-inspection-explained/">pre-completion inspections explained</a>. After completion is still worthwhile, and again just before the developer's two-year defects period ends.</p>
<h2>Cost</h2>
<p>From ${gbp(prices.snag[0].price)} for a flat, ${gbp(prices.snag[2].price)} for a 3-bedroom house. <a href="/snagging-prices/">Get an instant price</a>.</p>`,
  },
];

// Authoritative sources cited at the foot of each guide.
const NHQB = ['New Homes Quality Board: the New Homes Quality Code', 'https://www.nhqb.org.uk/the-code/'];
const NHQB_P2 = ['NHQB Code V2, Part 2: inspection and completion', 'https://www.nhqb.org.uk/the-code/part-2-legal-documents-information-inspection-completion/'];
const PD = ['GOV.UK: Permitted development rights for householders, technical guidance', 'https://www.gov.uk/government/publications/permitted-development-rights-for-householders-technical-guidance'];
const PP = ['Planning Portal: extensions', 'https://www.planningportal.co.uk/permission/common-projects/extensions/'];
const AD = ['GOV.UK: Building Regulations Approved Documents', 'https://www.gov.uk/government/collections/approved-documents'];
const HOA = ['HomeOwners Alliance: how much does a snagging survey cost?', 'https://hoa.org.uk/advice/guides-for-homeowners/i-am-buying/snagging-survey-cost/'];
const NHQB_P3 = ['NHQB Code V2, Part 3: after-sales service, complaints and the New Homes Ombudsman', 'https://www.nhqb.org.uk/the-code/part-3-after-sales-service-complaints-and-the-new-homes-ombudsman/'];
const NHOS = ['New Homes Ombudsman Service', 'https://www.nhos.org.uk/about-us'];
const NHBC = ['NHBC: Buildmark cover for homeowners', 'https://www.nhbc.co.uk/homeowners/buildmark-cover'];
const REG = ['NHQB Register of Developers', 'https://www.nhqb.org.uk/register-of-developers/'];
const LANGLEY_SPD = ['Birmingham City Council: Langley SUE supplementary planning document', 'https://www.birmingham.gov.uk/download/downloads/id/12543/langley_sue_spd.pdf'];
const LANGLEY_HT = ['Housing Today: 5,500-home Birmingham urban extension (Dec 2022)', 'https://www.housingtoday.co.uk/news/5500-home-birmingham-urban-extension-tipped-for-approval/5121008.article'];
const LANGLEY_UKE = ['UK Estates: Langley approval (Oct 2025)', 'https://ukestates.uk/major-new-housing-community-of-5500-homes-gains-approval-at-langley-sutton-coldfield/'];
const SOURCES = {
  'snagging-survey-cost': [HOA, NHQB_P2],
  'what-happens-after-your-snagging-report': [NHQB_P3, NHOS],
  'new-build-warranty-first-two-years': [NHBC, NHQB_P3],
  'langley-sutton-coldfield-new-build-guide': [LANGLEY_SPD, LANGLEY_UKE, LANGLEY_HT, REG],
  'can-i-do-my-own-pre-completion-inspection': [NHQB_P2, NHQB],
  'pre-completion-inspection-explained': [NHQB_P2, NHQB],
  'do-i-need-planning-permission-for-an-extension': [PD, PP],
  'planning-vs-building-regulations-drawings': [PP, AD],
  'what-is-a-snagging-survey': [NHQB, AD],
};
const PUBLISHED = '2026-09-23';
const UPDATED = '2026-09-24';
const human = (d) => new Date(d + 'T12:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

export function guidePages() {
  const index = {
    path: '/guides/',
    title: 'Guides: Extensions, Planning & New-Build Snagging',
    description: 'Plain-English guides to planning permission, building regulations, structural calculations and new-build snagging in England.',
    trail: [['/guides/', 'Guides']],
    body: `${pageHero({ trail: [['/guides/', 'Guides']], eyebrow: 'Guides', h1: 'Plain-English guides', lede: 'The questions we get asked most, answered by an engineer.' })}
<section class="section"><div class="wrap grid-2">${guides.map((g) => `<a class="card" href="/guides/${g.slug}/" style="text-decoration:none"><h2 class="card-title">${g.title}</h2><p class="muted small">${g.summary}</p><span class="more">Read the guide</span></a>`).join('')}</div></section>
${ctaBand()}`,
  };
  const pages = guides.map((g) => {
    const trail = [['/guides/', 'Guides'], [`/guides/${g.slug}/`, g.title]];
    return {
      path: `/guides/${g.slug}/`,
      title: g.title,
      description: g.summary,
      trail,
      ld: [{
        '@context': 'https://schema.org', '@type': 'Article', headline: g.title, description: g.summary,
        datePublished: g.published || PUBLISHED, dateModified: g.updated || UPDATED, inLanguage: 'en-GB',
        mainEntityOfPage: site.url + `/guides/${g.slug}/`,
        author: { '@type': 'Organization', '@id': site.url + '/#business', name: site.name, url: site.url },
        publisher: { '@type': 'Organization', '@id': site.url + '/#business', name: site.name, logo: { '@type': 'ImageObject', url: site.url + '/assets/logo.jpg' } },
        citation: (SOURCES[g.slug] || []).map(([, u]) => u),
      }],
      body: `${pageHero({ trail, eyebrow: 'Guide', h1: g.title, lede: g.summary })}
<section class="section"><div class="wrap"><article class="prose">
<p class="byline">By <a href="/about/">Ashbridge Design</a> · Reviewed by our lead engineer (MSc Civil Engineering, 15 years' experience) · Updated <time datetime="${g.updated || UPDATED}">${human(g.updated || UPDATED)}</time></p>
${g.body}
${SOURCES[g.slug] ? `<h2>Sources</h2><ul class="sources">${SOURCES[g.slug].map(([l, u]) => `<li><a href="${u}" rel="noopener">${l}</a></li>`).join('')}</ul>` : ''}
</article></div></section>
${ctaBand()}`,
    };
  });
  return [index, ...pages];
}
