import { gbp, pageHero, ctaBand } from '../lib/layout.mjs';
import { prices } from '../lib/parts.mjs';

const single = prices.design[0];

const guides = [
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
<p>The checklist gives you a structure, but the developer judges your findings against the warranty provider's technical standards. Those standards set tolerances, for example for how level a floor or how straight a wall must be. Knowing the tolerance, and being able to measure it, is what separates a defect the developer must fix from one they can dispute. Download the current checklist from the <a href="https://www.nhqb.org.uk/the-code/" rel="noopener">NHQB website</a> before you start.</p>
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

export function guidePages() {
  const index = {
    path: '/guides/',
    title: 'Guides: Extensions, Planning & New-Build Snagging',
    description: 'Plain-English guides to planning permission, building regulations, structural calculations and new-build snagging in England.',
    trail: [['/guides/', 'Guides']],
    body: `${pageHero({ trail: [['/guides/', 'Guides']], eyebrow: 'Guides', h1: 'Plain-English guides', lede: 'The questions we get asked most, answered by an engineer.' })}
<section class="section"><div class="wrap grid-2">${guides.map((g) => `<a class="card" href="/guides/${g.slug}/" style="text-decoration:none"><h3>${g.title}</h3><p class="muted small">${g.summary}</p><span class="more">Read the guide</span></a>`).join('')}</div></section>
${ctaBand()}`,
  };
  const pages = guides.map((g) => {
    const trail = [['/guides/', 'Guides'], [`/guides/${g.slug}/`, g.title]];
    return {
      path: `/guides/${g.slug}/`,
      title: g.title,
      description: g.summary,
      trail,
      ld: [{ '@context': 'https://schema.org', '@type': 'Article', headline: g.title, description: g.summary, author: { '@type': 'Organization', name: 'Ashbridge Design' }, datePublished: '2026-09-23' }],
      body: `${pageHero({ trail, eyebrow: 'Guide', h1: g.title, lede: g.summary })}
<section class="section"><div class="wrap"><article class="prose">${g.body}</article></div></section>
${ctaBand()}`,
    };
  });
  return [index, ...pages];
}
