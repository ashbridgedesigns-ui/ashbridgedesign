import { gbp, esc, pageHero, ctaBand, founderLd } from '../lib/layout.mjs';
import { titleCase } from '../lib/titlecase.mjs';
import { prices, site } from '../lib/parts.mjs';
import { seoGuides, seoGuideUpdates } from './seo-guides.mjs';

const single = prices.design[0];
// HBF 2026 star rating results (survey year Oct 2024 to Sept 2025): [builder, sample surveyed, composite score], ranked.
const HBF_2026_TABLE = [["Riverdale Developments",24,4.84],["Rose Builder",57,4.72],["Campion Homes",51,4.69],["Malcolm Allan",54,4.61],["Stancliffe Homes",39,4.6],["3West Group",29,4.56],["Kingswood Homes",80,4.56],["Bloor Homes",2920,4.54],["Denbury Homes",92,4.53],["Lioncourt Homes",142,4.53],["Newett Homes",80,4.52],["Homes by Honey",83,4.51],["Captiva Homes",32,4.5],["Dandara Homes",616,4.46],["Kebbell Development",41,4.46],["Thakeham Homes",89,4.44],["Orbit Group",88,4.42],["Deanfield Homes",37,4.4],["Morris Homes Group",410,4.4],["Churchill Living",392,4.39],["William Davis",165,4.39],["Bellway Homes",6900,4.38],["Robertson Homes",244,4.37],["CALA Group",1851,4.35],["Castle Green Homes",204,4.33],["Freeman Homes",44,4.33],["Barratt Redrow",12411,4.32],["Jones Homes",270,4.32],["Miller Homes",3398,4.32],["Keepmoat Homes",1758,4.31],["Persimmon Homes",8459,4.3],["Stonebond",53,4.28],["Story Homes",693,4.28],["Cameron Homes",96,4.27],["Beal Developments",151,4.26],["Hill Group",362,4.24],["Taylor Wimpey",6431,4.24],["Allison Homes",229,4.22],["Spitfire Bespoke Homes",219,4.22],["Croudace Homes",233,4.21],["Amethyst Homes",30,4.2],["Bargate Homes",73,4.2],["Davidsons Homes",581,4.2],["Vistry Homes",4078,4.2],["Crest Nicholson",818,4.19],["Durkan",87,4.17],["Cruden Homes",77,4.16],["Strata Group",271,4.15]];
const HBF_LINKS = {"Barratt Redrow":"/developers/barratt-homes/","Bellway Homes":"/developers/bellway/","Bloor Homes":"/developers/bloor-homes/","CALA Group":"/developers/cala-homes/","Crest Nicholson":"/developers/crest-nicholson/","Keepmoat Homes":"/developers/keepmoat/","Miller Homes":"/developers/miller-homes/","Persimmon Homes":"/developers/persimmon-homes/","Taylor Wimpey":"/developers/taylor-wimpey/","Vistry Homes":"/developers/bovis-homes/"};

const originalGuides = [
  {
    slug: 'snagging-survey-cost',
    published: '2026-09-25', updated: '2026-09-25',
    updated: '2026-10-31',
    updated: '2026-11-18',
    title: 'How much does a snagging survey cost? (2026 prices)',
    summary: 'What snagging surveys and pre-completion inspections cost in England in 2026, what changes the price, and what to check before you book.',
    body: `<p>Most snagging surveys for a typical new home in England cost <strong>between about £325 and £500</strong>, based on the prices national snagging firms publish in 2026. Flats and smaller houses sit at the lower end; four- and five-bedroom houses at the top.</p>
<h2>Published prices compared</h2>
<div class="table-wrap"><table><thead><tr><th>Firm</th><th>Published price</th><th>Notes</th></tr></thead><tbody>
<tr><td>Ashbridge Design</td><td>${gbp(prices.snag[0].price)} (flat) to ${gbp(prices.snag[4].price)} (5 bedrooms)</td><td>Same price before or after completion; re-inspection ${gbp(prices.reinspection)}</td></tr>
<tr><td>HomeSnag (Midlands page)</td><td>Snagging survey from £395 inc. VAT; pre-completion from £295 inc. VAT</td><td>Prices "from", by survey type</td></tr>
<tr><td>Professional Snagging Company (Birmingham page)</td><td>Add-ons: drone £45, thermal imaging £45, re-inspection £350</td><td>Base price not compared here</td></tr>
<tr><td>Snagging Solutions (prices page)</td><td>£300 to £450, by size</td><td>Several price bands by property size</td></tr>
</tbody></table></div>
<p class="small muted">Taken from each firm's website: HomeSnag and Professional Snagging Company on 18 November 2026, Snagging Solutions on 31 October 2026. Prices change, so check before you book.</p>
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
<h2>Are thermal imaging and drone checks worth paying for?</h2>
<ul>
<li><strong>Thermal imaging</strong> can point to likely insulation gaps, draughts or hidden leaks. It works best when inside and outside temperatures differ clearly, and findings usually need checking another way.</li>
<li><strong>Drone checks</strong> can help where a roof is hard to see from the ground.</li>
</ul>
<p>Both are most useful when you have a specific concern, such as cold spots, unexplained damp or a suspected roof problem. We don't currently offer either, so if you need one, ask a specialist what it covers and what it costs.</p>
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
    updated: '2026-10-20',
    updated: '2026-10-31',
    title: 'What happens after your snagging report?',
    summary: 'Do builders have to fix snags, and how long do you have to report them? Sending the report, the Code timescales, complaints and the New Homes Ombudsman.',
    body: `<p>A snagging report is only the start. Here's how to turn it into repairs, using the timescales in Version 2 of the New Homes Quality Code, which applies to homes reserved from 2 March 2026 with NHQB-registered developers.</p>
<h2>Do builders have to fix snags?</h2>
<p>Yes, where the snag is a defect. Under most new-home warranties, such as NHBC Buildmark, the builder must put right defects that breach the warranty's technical standards during the first two years. Cosmetic issues within the published tolerances, and damage after you moved in, usually aren't covered. See <a href="/guides/new-build-warranty-first-two-years/">how new-build warranties work</a>.</p>
<h2>How long do you have to report snags?</h2>
<p>Report them as soon as you find them, in writing. The builder's responsibility for defects normally runs for <strong>two years from completion</strong>, and the New Homes Ombudsman can only consider issues that arose within two years of completion. Snags reported late in that period still count, but leave little time for the complaints process.</p>
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
<h2>A simple defect log</h2>
<p>If several items are outstanding, keep one running log and send it with each chaser. It makes gaps obvious, and it's useful evidence if you later complain.</p>
<div class="table-wrap"><table><thead><tr><th>Ref</th><th>Defect and location</th><th>Reported</th><th>Developer's reply</th><th>Promised by</th><th>Fixed and checked</th></tr></thead><tbody>
<tr><td>1</td><td>Example: bedroom 2 door catches the frame</td><td>Date sent</td><td>Date and summary</td><td>Date</td><td>Date</td></tr>
</tbody></table></div>
<p class="no-print"><a class="btn btn-ghost" href="/assets/defect-log.csv" download>Download the defect log (CSV)</a></p>
<p class="small muted">Opens in Excel, Google Sheets or Numbers, ready to fill in or print.</p>
<h2>If the developer disputes an item</h2>
<ul>
<li>Ask for the reason in writing, including the standard or tolerance they rely on.</li>
<li>Compare it with the reference in your report and your warranty documents.</li>
<li>If you still disagree, make a formal complaint rather than repeating the after-sales request. If the warranty provider offers a resolution service, ask whether it applies.</li>
</ul>
<h2>Keep the paper trail</h2>
<p>Dated emails, the original report, photos and any re-inspection report are what make a complaint straightforward. Check which Code version covers you, and whether your developer is registered, on the <a href="/developers/">housebuilder pages</a>.</p>`,
  },
  {
    slug: 'new-build-warranty-first-two-years',
    published: '2026-09-25', updated: '2026-09-25',
    updated: '2026-10-31',
    updated: '2026-11-18',
    title: 'New-build warranty explained: 10-year cover and the first 2 years',
    summary: 'How new-home warranties split into a two-year builder period and years 3–10, what that means for defects, and when to get a 2-year inspection.',
    body: `<p>Most new homes in England come with a 10-year warranty from a provider such as NHBC, Premier Guarantee or LABC Warranty. The details depend on the policy, so check your own documents, but they usually work in two stages. NHBC's Buildmark policy is the most common example.</p>
<h2>The main providers at a glance</h2>
<div class="table-wrap"><table><thead><tr><th>Provider</th><th>New homes for sale</th><th>How the cover splits</th></tr></thead><tbody>
<tr><td>NHBC Buildmark</td><td>10 years</td><td>Builder responsible for defects in years 1–2, then NHBC insurance for years 3–10</td></tr>
<tr><td>Premier Guarantee</td><td>10 years</td><td>2-year defects period (builder or developer), then an 8-year structural period (insurer)</td></tr>
<tr><td>LABC Warranty</td><td>10 years</td><td>Check your policy document for how cover is split</td></tr>
</tbody></table></div>
<p>Your warranty certificate names the provider. Each <a href="/developers/">housebuilder page</a> also lists the provider the builder says it normally uses.</p>
<h2>Years 1–2: the builder fixes defects</h2>
<p>Under NHBC Buildmark, for the first two years <strong>the builder is responsible for putting right defects caused by not building to NHBC's Technical Standards</strong>. If the builder doesn't, or has gone out of business, NHBC may step in. This is the period for workmanship and materials: cracks, doors and windows, leaks, finishes and services.</p>
<h2>Years 3–10: structural cover only</h2>
<p>From year three to year ten, NHBC covers defects to the <strong>structural and weatherproofing parts</strong> of the home caused by breaches of its Technical Standards, but only where damage has occurred. Everyday defects that would have been the builder's responsibility in years one and two usually aren't covered.</p>
<h2>Do all new builds have a 10-year warranty?</h2>
<p>Not by law, but almost all do. Mortgage lenders will generally only lend on a newly built home if it's covered by a warranty scheme or a <a href="/guides/professional-consultants-certificate-new-build/">Professional Consultant's Certificate</a>. If a new home has neither, ask why before you exchange.</p>
<h2>Is there a 15-year new build warranty?</h2>
<p>For new homes for sale, NHBC, Premier Guarantee and LABC Warranty each list 10-year cover. Premier Guarantee and LABC Warranty list up to 12 years for some social housing and rental products. If you're offered a longer warranty, read what it covers and who stands behind it.</p>
<h2>Why the end of year two matters</h2>
<p>Some problems only show once a house has dried out and been through the seasons: settlement cracks, sticking doors, damp patches, drainage issues. Getting them on record <strong>before</strong> the two years are up keeps the builder responsible for them.</p>
<p>A <a href="/two-year-warranty-inspection/">2-year warranty inspection</a> at around month 22 or 23 gives you time to report everything and for the builder to respond. It costs ${gbp(prices.warranty)}, or ${gbp(prices.warrantyReturning)} if we inspected your home before.</p>
<h2>A timeline for the end of year two</h2>
<ul>
<li><strong>Around month 18:</strong> find your warranty documents and check your completion date, since that sets the deadline. Walk round the home and start a list.</li>
<li><strong>Around month 22:</strong> check for cracks, sticking doors and windows, damp patches, leaks, failed seals, loose finishes, gutters and drainage. Book a <a href="/two-year-warranty-inspection/">2-year inspection</a> if you want a professional record.</li>
<li><strong>By month 23:</strong> send everything to the builder in writing and keep a dated copy. This leaves time for a reply before the deadline.</li>
<li><strong>Before month 24:</strong> chase anything without a response. If there's a complaint, raise it formally now. The New Homes Ombudsman can only consider issues that arose within two years of completion.</li>
</ul>
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
    updated: '2026-10-31',
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
<h2>Before or after completion: which should you book?</h2>
<div class="table-wrap"><table><thead><tr><th></th><th>Pre-completion inspection</th><th>Post-completion snagging survey</th></tr></thead><tbody>
<tr><td>When</td><td>After the Notice to Complete, before completion</td><td>After you move in, ideally in the first few months</td></tr>
<tr><td>Best for</td><td>Getting defects raised while the sale is still open</td><td>Buyers who've already completed, or whose developer isn't registered</td></tr>
<tr><td>Limitation</td><td>Depends on Code rules and access in a short window</td><td>Repairs join the developer's after-sales process</td></tr>
</tbody></table></div>
<p>If your developer is registered and the window is open, book before completion. If you've missed it, book a snagging survey. Doing both gives you a check of the repairs too: it costs the snagging price plus ${gbp(prices.preAndPost)}.</p>
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
    updated: '2026-10-31',
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
<p>Get a <strong>Lawful Development Certificate</strong>. It proves the extension was lawful, which your buyer's solicitor will ask about when you sell. Building Regulations approval is needed either way.</p>
<h2>If you live in Birmingham or Solihull</h2>
<ul>
<li><strong>Birmingham conservation areas:</strong> the city has about 30. The council lists householder Article 4 controls in Austin Village, Bournville Village, part of Edgbaston, Greenfield Road, High Street Sutton Coldfield, Moor Pool in Harborne, Moseley, Old Yardley, Selly Park, Selly Park Avenues and St Agnes. Even minor work, such as a porch, replacement windows or re-roofing, can need permission there.</li>
<li><strong>Birmingham's city-wide Article 4 direction:</strong> this is about converting houses to small HMOs. It doesn't by itself remove your rights to extend a family home.</li>
<li><strong>Solihull conservation areas:</strong> the borough has 20, including Knowle, Solihull and White House Way. Some have Article 4 directions, so check your exact address with the council.</li>
<li><strong>Newer estates:</strong> check your own planning permission for conditions removing permitted development rights, wherever you live.</li>
</ul>
<p>These lists can change, so confirm them with the council for your address.</p>
<p>Try our <a href="/can-i-extend/">free feasibility check</a>, or <a href="/planning-drawings/">get planning drawings from ${gbp(single.s1)}</a>.</p>
<p class="small muted">A general guide to the rules for houses in England. Your own case depends on your property's planning history. We check it as part of every quote.</p>`,
  },
  {
    slug: 'planning-vs-building-regulations-drawings',
    title: 'Planning vs Building Regulations drawings: the difference',
    summary: 'Why most extensions need two sets of drawings, what each one shows, and where structural calculations fit.',
    body: `<p>Planning permission and Building Regulations are two separate approvals, and they need different drawings.</p>
<h2>Planning drawings: what it looks like</h2>
<p>Planning is about how the extension affects the street, the neighbours and the character of the area. The drawings show size, shape, position, windows and materials: existing and proposed floor plans, elevations, a roof plan, and a location and site plan.</p>
<h2>Building Regulations drawings: how it's built</h2>
<p>Building Regulations are about safety and performance: structure, fire safety, insulation, ventilation, drainage and access. The drawings are technical, with sections, construction details and specification notes. They're what building control approves and what your builder prices from.</p>
<h2>Structural calculations</h2>
<p>If there's a steel beam, a new opening or a loft floor, building control needs calculations proving the structure works. Many firms send these to a separate engineer. At Ashbridge they're done in-house.</p>
<h2>What it costs</h2>
<p>For a single-storey extension: planning ${gbp(single.s1)}, Building Regulations ${gbp(single.s2)}, both stages ${gbp(single.both)}, or Complete with calculations ${gbp(single.complete)}. <a href="/extension-design-prices/">See all prices</a>.</p>`,
  },
  {
    slug: 'what-is-a-snagging-survey',
    updated: '2026-10-20',
    title: 'Is a snagging survey worth it?',
    summary: 'What a professional snagging survey checks that you might miss, when it pays for itself, when to book and what it costs.',
    body: `<p><strong>For most new-build buyers, yes.</strong> A snagging survey is an independent inspection that finds and records defects in a new home, called snags, in a report the developer has to respond to. New to the term? Start with <a href="/guides/what-is-snagging/">what snagging means</a>.</p>
<h2>What gets checked</h2>
<ul><li>Walls, ceilings, floors and finishes</li><li>Windows and doors: fit, seals, operation and security</li><li>Kitchen and bathrooms: sealing, fittings, water flow and drainage</li><li>Heating, hot water and electrical fittings (visual and functional)</li><li>Loft: insulation, ventilation and services</li><li>Outside: brickwork, pointing, render, roof line, gutters, drainage and paving falls</li></ul>
<h2>Is it worth it?</h2>
<p>Most new homes have defects, and buyers find it hard to spot the ones that matter. A professional report is specific, photographed and referenced, so it's much harder for a developer to dismiss than a buyer's own list.</p>
<p>It's most worth it when you're buying from an NHQB-registered developer and can inspect <strong>before completion</strong>, when you're short of time or confidence, or when the home is large. If you'd rather do it yourself, use our <a href="/guides/new-build-snagging-checklist/">snagging checklist</a>, and read <a href="/guides/choosing-a-snagging-company/">how to choose a snagging company</a> before you book anyone.</p>
<h2>When to book</h2>
<p>Before completion, if your developer is NHQB-registered: see <a href="/guides/pre-completion-inspection-explained/">pre-completion inspections explained</a>. After completion is still worthwhile, and again just before the developer's two-year defects period ends.</p>
<h2>Cost</h2>
<p>From ${gbp(prices.snag[0].price)} for a flat, ${gbp(prices.snag[2].price)} for a 3-bedroom house. <a href="/snagging-prices/">Get an instant price</a>.</p>`,
  },
  {
    slug: 'what-is-snagging',
    published: '2026-10-20', updated: '2026-10-20',
    title: 'What is snagging? Meaning, snag lists and what happens next',
    summary: 'What snagging means for a new home and in construction, what counts as a snag, when snagging happens and who has to fix the problems.',
    body: `<p><strong>Snagging means checking a newly built or newly finished home for defects, called snags, and getting them put right.</strong> A snag is anything unfinished, damaged or not built to the required standard: a door that sticks, a cracked tile, a gap in the loft insulation. A <strong>snag list</strong> is the written record of those defects, room by room, that the builder works through.</p>
<h2>What counts as a snag?</h2>
<p>A snag is a defect the builder is responsible for. Most are cosmetic, but some matter far more than they look.</p>
<div class="table-wrap"><table><thead><tr><th>Usually a snag</th><th>Usually not a snag</th></tr></thead><tbody>
<tr><td>Doors and windows that stick, don't latch or don't lock</td><td>Wear and tear, or damage after you moved in</td></tr>
<tr><td>Missing or broken sealant around baths, showers and worktops</td><td>A finish you dislike but that was specified</td></tr>
<tr><td>Paint runs, missed areas and damaged plaster</td><td>Marks only visible with a torch held against the wall</td></tr>
<tr><td>Gaps or uneven loft insulation, unlagged pipes</td><td>Minor drying-out (shrinkage) cracks, which most warranties treat as normal in a new home</td></tr>
<tr><td>Paving or ground that falls towards the house, blocked airbricks</td><td>Anything within the tolerance set by the warranty provider's technical standards</td></tr>
</tbody></table></div>
<p>The dividing line is the <strong>technical standard</strong> the home was built to. Warranty providers such as NHBC and LABC Warranty publish tolerances, for example for how flat a wall or how level a floor must be. A defect outside the tolerance is the builder's to fix. That's why a professional report names the standard for each snag.</p>
<h2>When does snagging happen?</h2>
<ol>
<li><strong>Before completion.</strong> If your developer is registered with the New Homes Quality Board, you can have a <a href="/pre-completion-inspection/">pre-completion inspection</a> after the Notice to Complete and before you legally complete. This is when the developer has most reason to fix things fast.</li>
<li><strong>After you move in.</strong> A full snagging survey in the first weeks or months, once you can see the home furnished and lived in.</li>
<li><strong>Before the end of year two.</strong> Most new-home warranties make the builder responsible for defects for the first two years. A <a href="/two-year-warranty-inspection/">2-year inspection</a> gets late-appearing problems on record in time.</li>
</ol>
<h2>Who fixes the snags?</h2>
<p>The developer. Under most new-home warranties, the builder must put right defects that breach the warranty's technical standards in the first two years. If your developer is NHQB-registered, Version 2 of the New Homes Quality Code also expects after-sales issues to be settled within 30 days unless there's a significant reason for delay, with a route to the free New Homes Ombudsman Service if a complaint isn't resolved. See <a href="/guides/what-happens-after-your-snagging-report/">what happens after your snagging report</a>.</p>
<h2>Snagging in construction</h2>
<p>On a building project, snagging is the stage around <strong>practical completion</strong>, when the contractor, the client or their representative walks the finished work and lists everything still to finish or correct. The snag list then becomes part of handover. If you're having an extension built, the same applies to you: read <a href="/guides/snagging-an-extension/">snagging your extension</a>.</p>
<h2>Can I do my own snagging?</h2>
<p>Yes. Our <a href="/guides/new-build-snagging-checklist/">room-by-room snagging checklist</a> is free to print. A professional inspection adds what most buyers can't judge: whether a defect is outside tolerance, and the problems in places you won't look, like the loft, drainage and service penetrations. Read <a href="/guides/what-is-a-snagging-survey/">is a snagging survey worth it?</a></p>`,
  },
  {
    slug: 'new-build-snagging-checklist',
    published: '2026-10-20', updated: '2026-10-20',
    updated: '2026-10-31',
    title: 'New-build snagging checklist: room by room (free to print)',
    summary: 'A room-by-room snagging list for new-build homes in England, written by an engineer. Print it or save it as a PDF and take it round your home.',
    body: `<p>Use this checklist to snag your own new build, or alongside a professional report. Tick each item as you check it, and photograph anything wrong with something in the shot for scale.</p>
<p class="no-print"><button class="btn btn-ghost" type="button" onclick="window.print()">Print or save as PDF</button></p>
<h2>Before you start</h2>
<ul>
<li>Inspect in <strong>daylight</strong>. The NHQB Pre-Completion Inspection Checklist asks for internal walls to be viewed in natural daylight from at least two metres away, not with a light shone across the surface. Marks you can only see that way usually won't count.</li>
<li>Take a phone charger or plug-in socket tester, a spirit level, masking tape to mark snags, and a notebook.</li>
<li>Work in the same order in every room: ceiling, walls, windows, doors, floor, fittings.</li>
</ul>
<h2>Outside</h2>
<ul class="checklist">
<li>Brickwork clean, with no cracked or chipped bricks and no mortar smears</li>
<li>Pointing complete and even, with no gaps</li>
<li>Render free of cracks and hollow-sounding patches</li>
<li>Roof line straight, with no slipped, cracked or missing tiles (look from the street)</li>
<li>Gutters and downpipes secure, joined and draining into gullies</li>
<li>Paths and patios fall away from the house, not towards it</li>
<li>Damp-proof course visible and not bridged: soil and paving should normally sit at least 150 mm below it</li>
<li>Airbricks clear and not covered by soil or paving</li>
<li>Manhole and gully covers level, undamaged and not rocking</li>
<li>Fences, gates and boundary walls complete, with gates that latch</li>
<li>Outside taps, lights and sockets working</li>
</ul>
<h2>Doors and windows</h2>
<ul class="checklist">
<li>Front and back doors open, close and lock without force, with even gaps around the frame</li>
<li>Thresholds sealed, with level access where it was specified</li>
<li>Every window opens, closes and locks, with keys provided</li>
<li>Seals intact, glass unscratched, and no condensation between the panes</li>
<li>Trickle vents present and working where fitted</li>
<li>Frames sealed to the wall inside and out</li>
</ul>
<h2>Every room</h2>
<ul class="checklist">
<li>Ceilings: no cracks, nail pops or uneven patches</li>
<li>Walls: even finish, with no missed paint, runs or damaged plaster</li>
<li>Internal doors close and latch without catching, and handles are secure</li>
<li>Skirting and architrave fitted tight, with joints filled and painted</li>
<li>Floors: no squeaks, bounce or obvious slope, and flooring finished at the edges</li>
<li>Every socket and light switch works (test sockets with a charger)</li>
<li>Radiators get hot, valves turn, and there are no leaks at the joints</li>
<li>Smoke and heat alarms fitted and working</li>
</ul>
<h2>Kitchen</h2>
<ul class="checklist">
<li>Units level and aligned, with doors and drawers that close evenly</li>
<li>Worktop joints tight, with sealant along the wall and around the sink</li>
<li>Taps: hot and cold the right way round, good flow, no drips</li>
<li>Sink drains quickly, with no leaks under the unit</li>
<li>Appliances installed and working, with manuals</li>
<li>Extractor works and vents outside where it's meant to</li>
</ul>
<h2>Bathrooms and en-suites</h2>
<ul class="checklist">
<li>Sealant complete around the bath, shower tray and basin</li>
<li>Tiles level and fully grouted, with none cracked or hollow</li>
<li>Toilet flushes, refills properly and is fixed firmly</li>
<li>Bath, shower and basin drain quickly, with no leaks</li>
<li>Shower has good pressure and temperature, and the screen is sealed</li>
<li>Extractor fan works, and runs on after the light where designed to</li>
</ul>
<h2>Stairs and landing</h2>
<ul class="checklist">
<li>Handrail and balustrade firm, with no loose spindles</li>
<li>Treads don't creak or move</li>
<li>Smoke alarm fitted on each floor</li>
</ul>
<h2>Loft</h2>
<ul class="checklist">
<li>Insulation laid evenly across the whole loft, with no gaps at the edges or around the hatch</li>
<li>Pipes and water tanks insulated</li>
<li>Ventilation at the eaves not blocked by insulation</li>
<li>Hatch closes, and is insulated and sealed</li>
<li>No daylight through the roof and no water staining</li>
</ul>
<h2>Heating, electrics and services</h2>
<ul class="checklist">
<li>Boiler or heat pump works, with controls set up and explained</li>
<li>Consumer unit circuits labelled</li>
<li>Meters accessible, with readings noted on the day you complete</li>
<li>Gaps where pipes and cables pass through walls are sealed</li>
</ul>
<h2>Paperwork to ask for</h2>
<ul class="checklist">
<li>Warranty certificate (NHBC, LABC Warranty, Premier Guarantee or another provider)</li>
<li>Building control completion certificate</li>
<li>Energy Performance Certificate</li>
<li>Electrical installation certificate, and gas or heat pump commissioning records</li>
<li>Appliance and boiler manuals and guarantees</li>
<li>All keys, including window keys and meter cupboard keys</li>
</ul>
<h2>What a DIY check usually misses</h2>
<p>Most buyers can find cosmetic snags. The expensive ones are harder: loft insulation that looks complete but isn't, drainage falls, missing cavity trays over openings, poorly sealed service penetrations, and anything that's out of tolerance but looks fine. A professional report also names the standard for each defect, which makes it harder for the developer to dismiss.</p>
<h2>This checklist or a professional inspection?</h2>
<div class="table-wrap"><table><thead><tr><th></th><th>This checklist</th><th>Professional inspection</th></tr></thead><tbody>
<tr><td>Cost</td><td>Free</td><td>From ${gbp(prices.snag[0].price)} with us</td></tr>
<tr><td>Finds visible snags</td><td>Often, with enough time</td><td>Yes</td></tr>
<tr><td>Loft, drainage, hidden-detail checks</td><td>Hard without experience</td><td>Checked where visible and accessible</td></tr>
<tr><td>Standards named for each defect</td><td>You'd need to look them up</td><td>Included where one applies</td></tr>
<tr><td>Report ready for the developer</td><td>You write it</td><td>Photographed and graded PDF within 24 hours</td></tr>
</tbody></table></div>
<p>Our inspectors work to the NHQB checklist where the New Homes Quality Code applies, and every report is checked by our lead engineer. <a href="/snagging-prices/">Get an instant price</a> or <a href="/sample-snagging-report/">see what a report looks like</a>.</p>`,
  },
  {
    slug: 'choosing-a-snagging-company',
    published: '2026-10-20', updated: '2026-10-20',
    title: 'How to choose a snagging company: 9 checks before you book',
    summary: 'Qualifications, insurance, independence and the report itself: what to check before you pay any snagging company or inspector.',
    body: `<p>Quality varies a lot between snagging firms. These nine checks separate a report the developer has to act on from one they can ignore. They apply to any firm, including us.</p>
<h2>1. Are they members of a professional body?</h2>
<p>For a pre-completion inspection under the New Homes Quality Code, the inspector must be <strong>suitably qualified</strong>: a member of a recognised professional body for surveying, such as RICS, CIOB or CABE. Ask which body, and check the membership on that body's own directory.</p>
<h2>2. Do they have professional indemnity insurance?</h2>
<p>The Code requires it for pre-completion inspections, and it protects you if something serious is missed. Ask who the insurer is and what the cover is.</p>
<h2>3. Are they independent of the developer?</h2>
<p>An inspector recommended by the sales office, or one who also works for developers, has a conflict. Ask directly whether they take work or referral fees from housebuilders.</p>
<h2>4. Who inspects, and who signs the report?</h2>
<p>Some firms sell the job and pass it on. You should know the inspector's name and professional body before the day, and who checks the report before you get it.</p>
<h2>5. Can you see a sample report?</h2>
<p>A good report gives every snag a photo, an exact location, a priority and a clear remedy, and references the standard where one applies. If a firm won't show you an example, be wary.</p>
<h2>6. Do they use the NHQB checklist?</h2>
<p>If your developer is NHQB-registered, the pre-completion inspection must use the NHQB Pre-Completion Inspection Checklist. Ask whether they use it.</p>
<h2>7. Can they fit your inspection window?</h2>
<p>The Notice to Complete period is normally at least 14 calendar days, and the inspection has to happen inside it. Ask how quickly they can attend and how soon the report arrives after the visit.</p>
<h2>8. What's included, and what's extra?</h2>
<p>Check whether the price covers the loft and the outside, whether thermal imaging is included or extra, and what a re-inspection of the developer's repairs costs.</p>
<h2>9. Is the price fixed?</h2>
<p>Most firms price by bedrooms. Make sure the quote is fixed, including any travel charge. Typical prices are in our guide to <a href="/guides/snagging-survey-cost/">what a snagging survey costs</a>.</p>
<h2>How Ashbridge answers these</h2>
<div class="table-wrap"><table><thead><tr><th>Check</th><th>Ashbridge</th></tr></thead><tbody>
<tr><td>Professional body</td><td>Inspectors are members of a recognised professional body for surveying. Your booking confirmation names your inspector and their body.</td></tr>
<tr><td>Independence</td><td>We act only for buyers and homeowners, never for developers.</td></tr>
<tr><td>Who signs off</td><td>Every report is checked by our lead engineer before it reaches you.</td></tr>
<tr><td>Checklist</td><td>The NHQB Pre-Completion Inspection Checklist, where the Code applies.</td></tr>
<tr><td>Report</td><td>Within 24 hours, with photos, locations, grades and remedies. <a href="/sample-snagging-report/">See the layout</a>.</td></tr>
<tr><td>Price</td><td>Fixed by bedrooms, from ${gbp(prices.snag[0].price)}. Re-inspection ${gbp(prices.reinspection)}. <a href="/snagging-prices/">Get an instant price</a>.</td></tr>
</tbody></table></div>`,
  },
  {
    slug: 'snagging-an-extension',
    published: '2026-10-20', updated: '2026-10-20',
    title: 'Snagging your extension: practical completion and final checks',
    summary: 'How to snag a finished extension or loft conversion with your builder: the walk-round, the paperwork, holding back a retention, and what to check.',
    body: `<p>Snagging isn't only for new builds. When your builder says the extension is finished, you go round it together, list everything that isn't right, and agree when it will be fixed. Doing it properly protects the money you still owe and the paperwork you'll need when you sell.</p>
<h2>Practical completion: what it means</h2>
<p><strong>Practical completion</strong> is the point at which the work is finished apart from minor defects and the extension can be used. Depending on your contract, it usually triggers the final payment (less any retention) and the start of the <strong>defects period</strong>, during which the builder must come back and fix problems that appear.</p>
<h2>The snagging walk-round</h2>
<ul>
<li>Do it in daylight, with the builder, and write the list as you go.</li>
<li>Photograph every snag and agree a date for each fix.</li>
<li>Email the list afterwards, so it's dated and in writing.</li>
</ul>
<h2>What to check</h2>
<ul>
<li><strong>Where old meets new:</strong> cracks at the junction with the existing house, inside and out, and how the new roof meets the old wall (flashings and lead work).</li>
<li><strong>Floors:</strong> a level, step-free transition into the extension if that was designed, and no bounce.</li>
<li><strong>Openings:</strong> bifold and sliding doors that run smoothly, lock and seal, with no cracking around beams or lintels.</li>
<li><strong>Weathering:</strong> roof coverings finished, gutters and downpipes connected, and no sign of water getting in.</li>
<li><strong>Drainage:</strong> gullies and manholes accessible, and rainwater going where the drawings show.</li>
<li><strong>Finishes:</strong> the same checks as a new home. Our <a href="/guides/new-build-snagging-checklist/">snagging checklist</a> works room by room.</li>
</ul>
<h2>Paperwork before the final payment</h2>
<ul>
<li><strong>Building control completion certificate.</strong> This shows the work was signed off under the Building Regulations. Without it you'll have problems when you sell.</li>
<li><strong>Electrical installation certificate</strong> for new circuits, with the work notified under Part P.</li>
<li><strong>Window and door certificates</strong> (such as FENSA or CERTASS) where they were fitted by a registered installer.</li>
<li><strong>Gas Safe certificate</strong> if any gas work was done.</li>
<li>Guarantees for the roof, windows and any insurance-backed warranty the builder offered.</li>
</ul>
<h2>Retention: keep some money back</h2>
<p>Many building contracts let you hold back a small percentage of the price, called a <strong>retention</strong>, until the end of the defects period. It gives the builder a reason to come back. Agree the amount and the length of the defects period in writing <em>before</em> work starts; it's much harder to agree afterwards.</p>
<h2>If something looks structural</h2>
<p>Diagonal cracks, doors that start sticking months later, sagging over openings or cracks that get wider deserve an engineer's view, not just the builder's reassurance. Good <a href="/building-regulations-drawings/">Building Regulations drawings</a> and <a href="/structural-calculations/">structural calculations</a> prevent most of these problems in the first place. Worried about yours? <a href="/contact/?service=Structural%20calculations">Send us photos</a>.</p>`,
  },
  {
    slug: 'extension-drawings-total-cost',
    published: '2026-10-31', updated: '2026-11-18', reviewed: false,
    title: 'How much do extension drawings cost in total? Fees explained',
    summary: 'Drawings, structural calculations, the national planning fee and building control: what you pay before building starts, with a Birmingham worked example.',
    body: `<p>The drawings are only part of the cost of getting an extension approved. Before a builder starts, most homeowners pay for <strong>drawings, structural calculations, a planning fee and building control</strong>, and some also pay for a party wall surveyor.</p>
<h2>The costs at a glance</h2>
<div class="table-wrap"><table><thead><tr><th>Cost</th><th>Who sets it</th><th>Typical amount</th></tr></thead><tbody>
<tr><td>Planning drawings</td><td>Your designer</td><td>From ${gbp(single.s1)} with us (single-storey)</td></tr>
<tr><td>Building Regulations drawings</td><td>Your designer</td><td>From ${gbp(single.s2)} with us (single-storey)</td></tr>
<tr><td>Structural calculations</td><td>Your engineer</td><td>From ${gbp(single.calcs)} with us (single-storey)</td></tr>
<tr><td>Householder planning application</td><td>National fee</td><td>£548 in England since 1 April 2026</td></tr>
<tr><td>Larger home extension prior approval</td><td>National fee</td><td>£249 in England since 1 April 2026, due to rise to £310 on 8 December 2026</td></tr>
<tr><td>Building control</td><td>Your building control body</td><td>Varies: ask for a written quote</td></tr>
<tr><td>Party wall surveyor</td><td>The surveyor</td><td>Only if needed: ask for a written quote</td></tr>
</tbody></table></div>
<p>Planning fees are the same across England, so a council can't charge you more than its neighbour for the same householder application. From 8 December 2026 it is due to rise to £575, if Parliament approves it. See <a href="/guides/planning-application-fees-december-2026/">the December 2026 fee changes</a>.</p>
<h2>Worked example: a single-storey extension in Birmingham</h2>
<ul>
<li>Complete design package with structural calculations: <strong>${gbp(single.complete)}</strong></li>
<li>Householder planning application: <strong>£548</strong>, paid to Birmingham City Council</li>
<li>Known total before building control: <strong>${gbp(single.complete + 548)}</strong></li>
</ul>
<p>Add your building control charge. Birmingham City Council says its building consultancy service is now provided by Acivico, and you can also use a registered private building control approver, so compare written quotes.</p>
<p>Want the council's view first? Birmingham's 2026–27 schedule lists householder pre-application advice at £166.80. It's optional. If your extension is permitted development, you won't pay the planning application fee, but we still recommend a Lawful Development Certificate as proof. Ask the council for the current fee.</p>
<h2>Costs people forget</h2>
<ul>
<li><strong>Party wall:</strong> steels bearing on a shared wall usually bring the Party Wall Act into play. See <a href="/guides/party-wall-agreements-for-extensions/">party wall agreements for extensions</a>.</li>
<li><strong>Surveys:</strong> topographical or drainage surveys, if your site needs them.</li>
<li><strong>Revisions:</strong> check what your quote allows if the planners ask for changes. Use our <a href="/guides/how-to-compare-extension-drawing-quotes/">quote comparison checklist</a>.</li>
</ul>
<p>See <a href="/extension-design-prices/">all extension design prices</a>, including double-storey extensions, loft and garage conversions.</p>
<p class="small muted">Fees checked on 18 November 2026. These are the costs of design and approval only, not the cost of building the extension.</p>`,
  },
  {
    slug: 'when-do-you-need-structural-calculations',
    published: '2026-10-31', updated: '2026-10-31', reviewed: false,
    title: 'When do you need structural calculations?',
    summary: 'Wall removals, steel beams, extensions and lofts: when calculations are needed, why building control asks for them, and what they should include.',
    body: `<p>You need structural calculations whenever building work changes how loads travel through your home and someone has to show that the result is safe. Part A of the Building Regulations covers structure, and building control will want evidence that your design complies.</p>
<h2>Work that usually needs them</h2>
<ul>
<li><strong>Removing a load-bearing wall:</strong> the most common reason, because a beam has to carry what the wall carried.</li>
<li><strong>Opening up the back of a house:</strong> bi-fold doors or a wider opening mean a new beam over the gap.</li>
<li><strong>Extensions with steels:</strong> especially where the new room opens into the existing house.</li>
<li><strong>Loft conversions:</strong> new floor joists, steels and support for the altered roof.</li>
<li><strong>Removing a chimney breast:</strong> anything left above needs proper support.</li>
</ul>
<h2>What the calculations have to prove</h2>
<p>When a load-bearing wall comes out, the load above it still has to reach the ground. The calculations show that the beam, its supports and what sits beneath them can safely carry it.</p>
<figure style="margin:0"><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:16px"><svg viewBox="0 0 340 260" role="img" aria-label="Before: a load-bearing wall carries the floor above straight down to its foundation."><path d="M70 6V28m-5-7 5 7 5-7" fill="none" stroke="#26303A" stroke-width="2"/><path d="M130 6V28m-5-7 5 7 5-7" fill="none" stroke="#26303A" stroke-width="2"/><path d="M210 6V28m-5-7 5 7 5-7" fill="none" stroke="#26303A" stroke-width="2"/><path d="M270 6V28m-5-7 5 7 5-7" fill="none" stroke="#26303A" stroke-width="2"/><rect x="20" y="30" width="300" height="12" fill="#3C4854"/><rect x="10" y="210" width="320" height="26" fill="#EEF0F2" stroke="#9CA3AE"/><rect x="40" y="42" width="260" height="168" fill="#DDE1E5" stroke="#3C4854"/><text x="170" y="120" text-anchor="middle" font-size="13" font-weight="600" fill="#26303A">Load-bearing wall</text><text x="170" y="140" text-anchor="middle" font-size="13" font-weight="600" fill="#26303A">carries the floor above</text><text x="170" y="228" text-anchor="middle" font-size="13" font-weight="600" fill="#26303A">Foundation</text><text x="170" y="255" text-anchor="middle" font-size="13" font-weight="600" fill="#26303A">Before</text></svg><svg viewBox="0 0 340 260" role="img" aria-label="After: a steel beam spans the new opening and rests on padstones, sending the load down through the remaining wall at each side."><path d="M70 6V28m-5-7 5 7 5-7" fill="none" stroke="#26303A" stroke-width="2"/><path d="M130 6V28m-5-7 5 7 5-7" fill="none" stroke="#26303A" stroke-width="2"/><path d="M210 6V28m-5-7 5 7 5-7" fill="none" stroke="#26303A" stroke-width="2"/><path d="M270 6V28m-5-7 5 7 5-7" fill="none" stroke="#26303A" stroke-width="2"/><rect x="20" y="30" width="300" height="12" fill="#3C4854"/><rect x="10" y="210" width="320" height="26" fill="#EEF0F2" stroke="#9CA3AE"/><rect x="40" y="42" width="260" height="30" fill="#DDE1E5" stroke="#3C4854"/><rect x="40" y="72" width="45" height="138" fill="#DDE1E5" stroke="#3C4854"/><rect x="255" y="72" width="45" height="138" fill="#DDE1E5" stroke="#3C4854"/><rect x="62" y="72" width="216" height="20" fill="#FBB424" stroke="#26303A"/><rect x="60" y="92" width="25" height="10" fill="#3C4854"/><rect x="255" y="92" width="25" height="10" fill="#3C4854"/><path d="M62 106V202m-5-7 5 7 5-7" fill="none" stroke="#26303A" stroke-width="2"/><path d="M278 106V202m-5-7 5 7 5-7" fill="none" stroke="#26303A" stroke-width="2"/><text x="170" y="87" text-anchor="middle" font-size="13" font-weight="600" fill="#26303A">Steel beam</text><text x="170" y="125" text-anchor="middle" font-size="13" font-weight="600" fill="#26303A">New opening</text><text x="170" y="150" text-anchor="middle" font-size="13" font-weight="600" fill="#26303A">Padstone under</text><text x="170" y="166" text-anchor="middle" font-size="13" font-weight="600" fill="#26303A">each beam end</text><text x="170" y="228" text-anchor="middle" font-size="13" font-weight="600" fill="#26303A">Foundation</text><text x="170" y="255" text-anchor="middle" font-size="13" font-weight="600" fill="#26303A">After</text></svg></div><figcaption class="small muted">How load moves when a wall is removed. Simplified illustration, not a design: every beam and support must be sized for the actual building.</figcaption></figure>
<h2>What about a wall that isn't load-bearing?</h2>
<p>Don't assume. Stud walls can still carry loads, and a thin wall can be supporting a floor above. An engineer should confirm it before anything comes down.</p>
<h2>What building control looks for</h2>
<ul>
<li>The loads the structure has to carry</li>
<li>The size and grade of each beam or member</li>
<li>How the beam is supported at each end, including padstones and bearing lengths</li>
<li>Connections, and how the steel will meet fire protection requirements</li>
<li>Foundations, where new loads reach the ground</li>
</ul>
<p>Requirements vary with the job, so ask your building control body what it needs for yours.</p>
<h2>Do it before you get builders' quotes</h2>
<p>Beam sizes affect cost, ceiling lines and access. Having calculations first means builders price the same job, and you avoid changes once work has started.</p>
<p>We produce calculations in-house. A wall removal or single steel beam starts at ${gbp(prices.beamCalc)}. See <a href="/structural-calculations/">structural calculations</a>.</p>`,
  },
  {
    slug: 'how-to-compare-extension-drawing-quotes',
    published: '2026-10-31', updated: '2026-10-31',
    title: 'How to compare two extension drawing quotes',
    summary: 'The questions that show whether two quotes cover the same work: survey, revisions, submissions, structural calculations and exclusions.',
    body: `<p>Two quotes can differ by hundreds of pounds and still not cover the same work. Ask each designer the same questions, in writing, before you compare the price.</p>
<h2>The checklist</h2>
<div class="table-wrap"><table><thead><tr><th>Ask</th><th>Why it matters</th></tr></thead><tbody>
<tr><td>Is a measured survey included?</td><td>Accurate drawings depend on it. A separate survey fee changes the comparison.</td></tr>
<tr><td>Does it cover planning drawings, Building Regulations drawings, or both?</td><td>They are different sets of drawings. A low price may cover planning only.</td></tr>
<tr><td>Are structural calculations included?</td><td>If not, you may need a separate engineer, and coordination between the two becomes your job.</td></tr>
<tr><td>How many revisions are included?</td><td>Planners and homeowners often ask for changes. Find out when extra charges begin.</td></tr>
<tr><td>Who submits the applications?</td><td>Check who prepares the forms and deals with the council's questions.</td></tr>
<tr><td>Which fees are excluded?</td><td>Planning and building control fees are usually paid separately. See <a href="/guides/extension-drawings-total-cost/">the total cost</a>.</td></tr>
<tr><td>What about party wall, drainage or topographical surveys?</td><td>These are commonly excluded, so know what your project may need.</td></tr>
<tr><td>Who does the work, and what are their qualifications?</td><td>Ask who draws it, who signs it off, and whether they carry professional indemnity insurance.</td></tr>
<tr><td>Has the planning history been checked?</td><td>Removed permitted development rights or an Article 4 direction can change the whole approach.</td></tr>
<tr><td>How long will it take?</td><td>Ask for a time to deliver drawings, separate from the council's decision time.</td></tr>
</tbody></table></div>
<h2>Warning signs</h2>
<ul>
<li>A price with no written scope</li>
<li>A promise that planning permission will be granted: the decision belongs to the council</li>
<li>Someone calling themselves an architect without being registered: \"architect\" is a protected title in the UK</li>
</ul>
<p>Our scope and prices are published. See <a href="/extension-design/">how our extension design service works</a> and <a href="/extension-design-prices/">what it costs</a>.</p>`,
  },
  {
    slug: 'party-wall-agreements-for-extensions',
    published: '2026-10-31', updated: '2026-10-31', reviewed: false,
    title: 'Party wall agreements for extensions: when you need one',
    summary: 'When the Party Wall etc Act applies to an extension or loft, how much notice to give, what happens if a neighbour disagrees, and who arranges it.',
    body: `<p>The Party Wall etc Act 1996 applies across England and Wales. It can apply to your extension or loft if the work touches a shared wall, builds on the boundary, or excavates close to a neighbour's building. It's separate from planning permission and Building Regulations, so having those doesn't remove your duty to give notice.</p>
<h2>Three common triggers</h2>
<div class="table-wrap"><table><thead><tr><th>Work</th><th>Example</th><th>Minimum notice</th></tr></thead><tbody>
<tr><td>Work to an existing party wall</td><td>Cutting in a steel beam on a semi or terrace</td><td>2 months</td></tr>
<tr><td>A new wall on the boundary line</td><td>An extension wall built at the boundary</td><td>1 month</td></tr>
<tr><td>Excavating near a neighbour's building</td><td>Foundations close to next door</td><td>1 month</td></tr>
</tbody></table></div>
<p>Work can start sooner only if your neighbour agrees in writing. They don't have to. A notice lapses if work hasn't started within 12 months, so don't serve it too early.</p>
<h2>What happens after you serve notice</h2>
<ol>
<li><strong>Your neighbour agrees in writing.</strong> Keep a record, and consider a schedule of condition with photos of their side.</li>
<li><strong>Your neighbour dissents, or doesn't reply within 14 days.</strong> For most notices, this is treated as a dispute.</li>
<li><strong>Surveyors are appointed.</strong> You can use one agreed surveyor, or one each. They issue an award setting out how the work will proceed.</li>
</ol>
<h2>Who arranges and pays?</h2>
<p>You, as the person doing the work, must give the notice. GOV.UK publishes an explanatory booklet and example letters. Surveyor costs are decided under the award, and the building owner commonly pays where the work is solely for their benefit.</p>
<h2>How this fits with Ashbridge</h2>
<p>Party wall surveyor services aren't included in our design packages. Our drawings and structural calculations show what's proposed at the shared wall, which is the information a surveyor will need. For anything beyond that, speak to a party wall surveyor.</p>
<p>Build the time into your programme: with a two-month notice, you need to start this well before your builder's start date.</p>
<p class="small muted">A general guide, not legal advice. Take advice from a party wall surveyor or solicitor for your own project.</p>`,
  },
  {
    slug: 'hbf-star-ratings-2026-housebuilders-ranked',
    published: '2026-11-18', updated: '2026-11-18', reviewed: false, category: 'snagging',
    title: 'HBF star ratings 2026: every housebuilder ranked by score',
    summary: 'The 2026 HBF customer satisfaction results ranked by composite score, what the scores mean, and why a 5-star builder can still leave snags.',
    body: `<p>The Home Builders Federation (HBF) published its 2026 star ratings in March 2026. They are based on its National New Homes Customer Satisfaction Survey for buyers who moved in between <strong>October 2024 and September 2025</strong>. Every builder in the published 2026 table has 5 stars, so the composite score is the more useful number for comparing them.</p>
<h2>How the 2026 ratings work</h2>
<ul>
<li>Buyers are surveyed <strong>8 weeks and 9 months</strong> after moving in.</li>
<li>Builders are scored on two questions, one about the quality of the home and one about the service received, on a scale of 1 to 5.</li>
<li>For this survey year, a builder needed a composite score of <strong>4.15 or higher</strong> for 5 stars. HBF says the threshold will rise in future years.</li>
<li>Taking part is voluntary, so builders that don't take part, or don't get enough responses, don't appear.</li>
</ul>
<h2>The industry picture</h2>
<p>Across all builders surveyed, HBF reports that 93% of buyers would recommend their builder to a friend, the sixth year in a row at 90% or above. Asked about specific parts of the experience:</p>
<ul>
<li>90% were satisfied with the quality of their home.</li>
<li>90% were satisfied with the service during the buying process.</li>
<li>88% were satisfied with the service after they moved in.</li>
</ul>
<h2>All 48 builders, ranked</h2>
<div class="table-wrap"><table><thead><tr><th>Rank</th><th>Builder</th><th class="num">Composite score</th><th class="num">Sample surveyed</th></tr></thead><tbody>
${HBF_2026_TABLE.map(([b, n, s], i) => `<tr><td class="num">${i + 1}</td><td>${HBF_LINKS[b] ? `<a href="${HBF_LINKS[b]}">${b}</a>` : b}</td><td class="num">${s.toFixed(2)}</td><td class="num">${n.toLocaleString('en-GB')}</td></tr>`).join('')}
</tbody></table></div>
<p class="small muted">Data from the HBF 2026 star rating results, checked on 18 November 2026. Rank is by composite score; ties keep HBF's order.</p>
<h2>What stands out</h2>
<ul>
<li><strong>Small samples top the table.</strong> Riverdale Developments scored 4.84 from 24 surveys. With so few responses, a handful of buyers can move the score a lot.</li>
<li><strong>Among the large builders,</strong> Bloor Homes leads with 4.54 from 2,920 surveys, followed by Bellway (4.38) and CALA Group (4.35). Barratt Redrow and Miller Homes both scored 4.32.</li>
<li><strong>The lowest 5-star scores</strong> were Strata Group (4.15), Cruden Homes (4.16), Durkan (4.17) and Crest Nicholson (4.19), all close to the 4.15 threshold.</li>
<li><strong>Avant Homes isn't in the 2026 table.</strong> It had 5 stars in the 2025 results.</li>
</ul>
<h2>Why a 5-star builder still needs a snagging survey</h2>
<p>The rating measures how satisfied buyers felt soon after moving in, averaged across a builder's whole output. It doesn't tell you about <em>your</em> plot. Even with a good builder, the quickest way to get defects fixed is to record them in writing while the builder is still responsible for them, ideally before completion. See <a href="/pre-completion-inspection/">pre-completion inspections</a> or <a href="/snagging-prices/">snagging survey prices</a>.</p>
<p>For builder-by-builder facts, including warranty providers and after-sales contacts, see our <a href="/developers/">housebuilder pages</a>.</p>`,
  },
  {
    slug: 'planning-application-fees-december-2026',
    published: '2026-11-18', updated: '2026-11-18', reviewed: false, category: 'design',
    title: 'Planning fees rise on 8 December 2026: what extensions will cost',
    summary: 'The householder planning fee in England is due to rise from £548 to £575 on 8 December 2026. The fees that affect extensions, old and new.',
    body: `<p>Planning application fees in England are due to rise on <strong>8 December 2026</strong>, if the draft amending legislation is approved by Parliament. For a householder application to extend a house, the fee goes from <strong>£548 to £575</strong>.</p>
<h2>Fees that affect house extensions</h2>
<div class="table-wrap"><table><thead><tr><th>Application</th><th class="num">From 1 April 2026</th><th class="num">From 8 December 2026</th></tr></thead><tbody>
<tr><td>Householder application: extending or altering a house</td><td class="num">£548</td><td class="num">£575</td></tr>
<tr><td>Prior approval: larger home extension (Part 1, Class A)</td><td class="num">£249</td><td class="num">£310</td></tr>
<tr><td>Prior approval: additional storeys on a home (Part 1, Class AA)</td><td class="num">£249</td><td class="num">£310</td></tr>
<tr><td>Non-material amendment, householder</td><td class="num">£46</td><td class="num">£53</td></tr>
<tr><td>Lawful Development Certificate, proposed works</td><td class="num">£274</td><td class="num">£287.50</td></tr>
</tbody></table></div>
<p class="small muted">From the Planning Portal's current and forthcoming fee schedules, checked on 18 November 2026. A Lawful Development Certificate for proposed works costs half the full application fee, so it is worked out from the householder fee.</p>
<h2>What this means if you're planning an extension</h2>
<ul>
<li><strong>The rise is small next to the total.</strong> For most projects, design, calculations and building control cost far more than the planning fee. See <a href="/guides/extension-drawings-total-cost/">the total cost of extension drawings</a>.</li>
<li><strong>Prior approval rises the most:</strong> up £61, about 24%. If your extension is going through the <a href="/guides/do-i-need-planning-permission-for-an-extension/">larger home extension route</a>, it's worth knowing which fee will apply.</li>
<li><strong>Don't rush a weak application.</strong> A refusal and a resubmission cost far more time than the fee difference. See <a href="/guides/extension-planning-permission-refused/">what happens if planning is refused</a>.</li>
</ul>
<h2>Fees are national</h2>
<p>Planning application fees are set nationally, so the same householder fee applies whichever council you apply to. Building control charges are different: each building control body sets its own, so get a written quote.</p>
<p>Planning an extension? See our <a href="/extension-design-prices/">extension design prices</a>.</p>`,
  },
  {
    slug: 'can-i-extend-my-garage',
    published: '2026-11-18', updated: '2026-11-18', reviewed: false, category: 'design',
    title: 'Can I extend my garage? Planning and Building Regulations',
    summary: 'Extending an attached garage, a detached garage or building over one: when you need planning permission, the permitted development limits and Building Regulations.',
    body: `<p>Usually, yes, but the rules depend on whether your garage is <strong>attached to the house or detached</strong>, and on what you're adding. Start by working out which of these you're planning.</p>
<h2>Extending an attached or integral garage</h2>
<p>A garage that is part of the house is treated as part of the house. Making it bigger, or building a room above it, is a house extension. It follows the same permitted development limits as any other extension, covering depth, height and distance from the boundary. Two-storey and side extensions aren't permitted development in a conservation area.</p>
<p>See <a href="/guides/do-i-need-planning-permission-for-an-extension/">do I need planning permission for an extension?</a> for the limits for each type of extension.</p>
<h2>Extending or replacing a detached garage</h2>
<p>A detached garage is an outbuilding. Under permitted development, outbuildings and garages must:</p>
<ul>
<li>be single storey, with eaves no higher than <strong>2.5 m</strong></li>
<li>be no higher than <strong>4 m</strong> overall with a dual-pitched roof, or <strong>3 m</strong> with any other roof</li>
<li>be no higher than <strong>2.5 m</strong> if within 2 m of a boundary</li>
<li>not sit forward of the principal elevation, which is usually the front of the house</li>
<li>together with other additions, cover no more than <strong>half the land around the original house</strong></li>
</ul>
<p>Lower limits apply in National Parks, National Landscapes and World Heritage Sites. Flats and maisonettes have no householder permitted development rights.</p>
<h2>When you'll need planning permission anyway</h2>
<ul>
<li>Your estate's planning permission removed permitted development rights. This is common on newer estates.</li>
<li>An Article 4 direction applies to your street.</li>
<li>You live in a listed building, or the work goes beyond the limits above.</li>
</ul>
<p>Even when it's permitted development, a <a href="/guides/lawful-development-certificate-house-extension/">Lawful Development Certificate</a> is useful proof when you sell.</p>
<h2>Building Regulations</h2>
<p>Extending an attached garage needs Building Regulations approval. A room above a garage brings in structure, fire separation and insulation. A small detached garage can be exempt under Schedule 2 of the Building Regulations, depending on its size, its distance from the boundary and what it's built from, but a larger one needs approval. If a beam or a new opening is involved, you'll also need <a href="/guides/when-do-you-need-structural-calculations/">structural calculations</a>.</p>
<h2>Converting rather than extending?</h2>
<p>Turning a garage into a room is a different project. See <a href="/garage-conversion-drawings/">garage conversion drawings</a> and our guide to <a href="/guides/garage-conversion-building-regulations-drawings/">garage conversion Building Regulations drawings</a>.</p>
<p>Not sure which applies? Try the free <a href="/can-i-extend/">Can I extend?</a> check.</p>`,
  },
  {
    slug: 'professional-consultants-certificate-new-build',
    published: '2026-11-18', updated: '2026-11-18', reviewed: false, category: 'snagging',
    title: "Professional Consultant's Certificate: new builds without a warranty",
    summary: "What a Professional Consultant's Certificate (PCC) is, often called a CML certificate, when lenders accept one instead of a new home warranty, and what to check.",
    body: `<p>Mortgage lenders will generally only lend on a newly built, converted or renovated home if it's covered by a <strong>warranty scheme</strong> or a <strong>Professional Consultant's Certificate (PCC)</strong>. That's set out in the UK Finance Mortgage Lenders' Handbook. The handbook was previously the CML Lenders' Handbook, which is why the PCC is still often called a "CML certificate".</p>
<h2>What a PCC confirms</h2>
<p>The certificate confirms that a professional consultant:</p>
<ul>
<li>visited the property during construction to check its progress, and checked it against the drawings approved under Building Regulations and the building contract</li>
<li>remains liable to the first buyers, their lender and later buyers and lenders for <strong>6 years</strong> from the date of the certificate</li>
<li>has experience of designing or monitoring residential building work</li>
<li>keeps professional indemnity insurance in force to cover that liability</li>
</ul>
<p>The consultant must belong to one of the professional bodies listed in the handbook, such as the Royal Institution of Chartered Surveyors.</p>
<h2>Warranty or PCC: the difference for you</h2>
<div class="table-wrap"><table><thead><tr><th></th><th>New home warranty</th><th>Professional Consultant's Certificate</th></tr></thead><tbody>
<tr><td>Typical length</td><td>10 years for new homes for sale, from providers such as NHBC, Premier Guarantee and LABC Warranty</td><td>Consultant liable for 6 years from the certificate date</td></tr>
<tr><td>Who stands behind it</td><td>The warranty provider, with the builder responsible for defects at first</td><td>The consultant and their professional indemnity insurance</td></tr>
<tr><td>Common on</td><td>Homes built by registered housebuilders</td><td>Self-builds, small developments and conversions</td></tr>
</tbody></table></div>
<p>Lenders set their own rules on which warranties and certificates they accept, and some limit when a PCC can be used. If you're buying a home with a PCC, ask your lender and conveyancer early whether it's acceptable, and when it must be issued.</p>
<h2>Questions to ask the seller</h2>
<ul>
<li>Who issued the certificate, and which professional body do they belong to?</li>
<li>Did they inspect during construction, from the start, at regular stages?</li>
<li>Is there a Building Regulations completion certificate?</li>
<li>What professional indemnity insurance is in place?</li>
</ul>
<p>Ashbridge doesn't issue Professional Consultant's Certificates. A <a href="/new-build-snagging/">snagging survey</a> is a separate check of the finished home's condition. It doesn't replace a warranty or a PCC. For how warranties work, see <a href="/guides/new-build-warranty-first-two-years/">new-build warranties explained</a>.</p>`,
  },
];

const guides = [
  ...originalGuides.map((guide) => ({ ...guide, ...seoGuideUpdates[guide.slug] })),
  ...seoGuides,
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
const HBF_RES = ['HBF: 2026 star rating results', 'https://www.hbf.co.uk/policy/campaigns-and-initiatives/css-star-awards/'];
const HBF_FAQ = ['HBF: Customer Satisfaction Survey and star ratings FAQs', 'https://www.hbf.co.uk/policy/campaigns-and-initiatives/css-star-awards/css-faqs/'];
const FEES_NOW = ['Planning Portal: planning application fees in England (from 1 April 2026)', 'https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf'];
const FEES_DEC = ['Planning Portal: forthcoming planning application fees in England (from 8 December 2026)', 'https://ecab.planningportal.co.uk/uploads/forthcoming_english_application_fees.pdf'];
const PP_OUT = ['Planning Portal: outbuildings and planning permission', 'https://www.planningportal.co.uk/permission/common-projects/outbuildings/planning-permission'];
const BR_SCH2 = ['legislation.gov.uk: Building Regulations 2010, Schedule 2 (exempt buildings)', 'https://www.legislation.gov.uk/uksi/2010/2214/schedule/2'];
const PCC = ["UK Finance Mortgage Lenders' Handbook: Professional Consultant's Certificate", 'https://lendershandbook.ukfinance.org.uk/pcc'];
const PREMIER = ['Premier Guarantee: New Homes Warranty', 'https://www.premierguarantee.com/en/our-services/structural-warranties/New-Homes-Warranty.html'];
const LABCW = ['LABC Warranty: what we cover', 'https://www.labcwarranty.co.uk/what-we-cover'];
const HOMESNAG = ['HomeSnag: snagging in the Midlands', 'https://homesnag.co.uk/midlands/'];
const PSC = ['Professional Snagging Company: snagging survey Birmingham', 'https://www.snaggingcompany.com/snagging-surveys/snagging-survey-birmingham/'];
const SSOL = ['Snagging Solutions: snagging survey prices', 'https://snaggingsolutions.co.uk/snagging-survey-prices/'];
const NHBC = ['NHBC: Buildmark cover for homeowners', 'https://www.nhbc.co.uk/homeowners/buildmark-cover'];
const REG = ['NHQB Register of Developers', 'https://www.nhqb.org.uk/register-of-developers/'];
const LANGLEY_SPD = ['Birmingham City Council: Langley SUE supplementary planning document', 'https://www.birmingham.gov.uk/download/downloads/id/12543/langley_sue_spd.pdf'];
const LANGLEY_HT = ['Housing Today: 5,500-home Birmingham urban extension (Dec 2022)', 'https://www.housingtoday.co.uk/news/5500-home-birmingham-urban-extension-tipped-for-approval/5121008.article'];
const LANGLEY_UKE = ['UK Estates: Langley approval (Oct 2025)', 'https://ukestates.uk/major-new-housing-community-of-5500-homes-gains-approval-at-langley-sutton-coldfield/'];
const AD_C = ['GOV.UK: Approved Document C (site preparation and resistance to moisture)', 'https://www.gov.uk/government/publications/site-preparation-and-resistance-to-contaminates-and-moisture-approved-document-c'];
const RICS = ['RICS: find a surveyor', 'https://www.ricsfirms.com/'];
const CIOB = ['CIOB: Chartered Institute of Building', 'https://www.ciob.org/'];
const CABE = ['CABE: Chartered Association of Building Engineers', 'https://cbuilde.com/'];
const PP_BC = ['GOV.UK: Building Regulations approval', 'https://www.gov.uk/building-regulations-approval'];
const FEES = ['Planning Portal: planning application fees in England (from 1 April 2026)', 'https://ecab.planningportal.co.uk/uploads/english_application_fees.pdf'];
const FEES_NEXT = ['Planning Portal: forthcoming fees for planning applications in England', 'https://ecab.planningportal.co.uk/uploads/forthcoming_english_application_fees.pdf'];
const BCC_PREAPP = ['Birmingham City Council: pre-application advice fees', 'https://www.birmingham.gov.uk/info/20160/planning_applications/79/pre-application_advice/3'];
const BCC_BC = ['Birmingham City Council: building consultancy', 'https://www.birmingham.gov.uk/info/20008/planning_and_development/459/building_consultancy'];
const BCC_A4 = ['Birmingham City Council: Article 4 directions in conservation areas', 'https://www.birmingham.gov.uk/info/20055/conservation_areas/15/extra_protection_for_conservation_areas_article_4_directions'];
const BCC_CA = ['Birmingham City Council: conservation areas', 'https://www.birmingham.gov.uk/info/20055/conservation_areas'];
const BCC_HMO = ['Birmingham City Council: city-wide Article 4 direction (HMOs)', 'https://www.birmingham.gov.uk/info/20054/local_plan_documents/1933/city-wide_article_4_direction_relating_to_houses_in_multiple_occupation_hmos/5'];
const SOL_CA = ['Solihull Council: conservation areas', 'https://www.solihull.gov.uk/planning-and-building-control/conservation-areas'];
const AD_A = ['GOV.UK: Approved Document A (structure)', 'https://www.gov.uk/government/publications/structure-approved-document-a'];
const PW_BOOK = ['GOV.UK: The Party Wall etc Act 1996, explanatory booklet', 'https://www.gov.uk/government/publications/preventing-and-resolving-disputes-in-relation-to-party-walls/the-party-wall-etc-act-1996-explanatory-booklet'];
const PW_ACT = ['legislation.gov.uk: Party Wall etc. Act 1996', 'https://www.legislation.gov.uk/ukpga/1996/40'];
const PARTP = ['GOV.UK: Approved Document P (electrical safety in dwellings)', 'https://www.gov.uk/government/publications/electrical-safety-approved-document-p'];
const SOURCES = {
  'snagging-survey-cost': [HOA, NHQB_P2, HOMESNAG, PSC, SSOL],
  'hbf-star-ratings-2026-housebuilders-ranked': [HBF_RES, HBF_FAQ],
  'planning-application-fees-december-2026': [FEES_NOW, FEES_DEC],
  'can-i-extend-my-garage': [PD, PP, PP_OUT, BR_SCH2],
  'professional-consultants-certificate-new-build': [PCC, NHBC, PREMIER, LABCW],
  'what-happens-after-your-snagging-report': [NHQB_P3, NHOS],
  'new-build-warranty-first-two-years': [NHBC, PREMIER, LABCW, PCC, NHQB_P3],
  'langley-sutton-coldfield-new-build-guide': [LANGLEY_SPD, LANGLEY_UKE, LANGLEY_HT, REG],
  'can-i-do-my-own-pre-completion-inspection': [NHQB_P2, NHQB],
  'pre-completion-inspection-explained': [NHQB_P2, NHQB],
  'do-i-need-planning-permission-for-an-extension': [PD, PP, BCC_A4, BCC_CA, BCC_HMO, SOL_CA],
  'extension-drawings-total-cost': [FEES, FEES_NEXT, BCC_PREAPP, BCC_BC],
  'when-do-you-need-structural-calculations': [AD_A, PP_BC],
  'how-to-compare-extension-drawing-quotes': [PP, AD],
  'party-wall-agreements-for-extensions': [PW_BOOK, PW_ACT],
  'planning-vs-building-regulations-drawings': [PP, AD],
  'what-is-a-snagging-survey': [NHQB, AD],
  'what-is-snagging': [NHQB_P2, NHQB_P3, NHBC],
  'new-build-snagging-checklist': [NHQB_P2, NHBC, AD_C],
  'choosing-a-snagging-company': [NHQB_P2, RICS, CIOB, CABE],
  'snagging-an-extension': [PP_BC, PARTP, AD],
};
const PUBLISHED = '2026-09-23';
const UPDATED = '2026-09-24';
const human = (d) => new Date(d + 'T12:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

// Each guide links on to related guides and to the service page it supports, so no
// guide relies on the index page alone for internal links.
const RELATED = {
  'hbf-star-ratings-2026-housebuilders-ranked': ['pre-completion-inspection-explained', 'new-build-warranty-first-two-years', 'choosing-a-snagging-company'],
  'planning-application-fees-december-2026': ['extension-drawings-total-cost', 'do-i-need-planning-permission-for-an-extension', 'lawful-development-certificate-house-extension'],
  'can-i-extend-my-garage': ['do-i-need-planning-permission-for-an-extension', 'garage-conversion-building-regulations-drawings', 'lawful-development-certificate-house-extension'],
  'professional-consultants-certificate-new-build': ['new-build-warranty-first-two-years', 'what-is-a-snagging-survey', 'pre-completion-inspection-explained'],
  'what-is-snagging': ['new-build-snagging-checklist', 'what-is-a-snagging-survey', 'what-happens-after-your-snagging-report'],
  'new-build-snagging-checklist': ['what-is-snagging', 'choosing-a-snagging-company', 'can-i-do-my-own-pre-completion-inspection'],
  'choosing-a-snagging-company': ['snagging-survey-cost', 'what-is-a-snagging-survey', 'new-build-snagging-checklist'],
  'what-is-a-snagging-survey': ['what-is-snagging', 'snagging-survey-cost', 'choosing-a-snagging-company'],
  'snagging-survey-cost': ['choosing-a-snagging-company', 'what-is-a-snagging-survey', 'pre-completion-inspection-explained'],
  'what-happens-after-your-snagging-report': ['new-build-warranty-first-two-years', 'what-is-snagging', 'pre-completion-inspection-explained'],
  'new-build-warranty-first-two-years': ['what-happens-after-your-snagging-report', 'what-is-snagging', 'new-build-snagging-checklist'],
  'langley-sutton-coldfield-new-build-guide': ['pre-completion-inspection-explained', 'new-build-snagging-checklist', 'new-build-warranty-first-two-years'],
  'can-i-do-my-own-pre-completion-inspection': ['new-build-snagging-checklist', 'pre-completion-inspection-explained', 'choosing-a-snagging-company'],
  'pre-completion-inspection-explained': ['can-i-do-my-own-pre-completion-inspection', 'new-build-snagging-checklist', 'what-happens-after-your-snagging-report'],
  'do-i-need-planning-permission-for-an-extension': ['extension-drawings-total-cost', 'planning-vs-building-regulations-drawings', 'snagging-an-extension'],
  'extension-drawings-total-cost': ['how-to-compare-extension-drawing-quotes', 'do-i-need-planning-permission-for-an-extension', 'party-wall-agreements-for-extensions'],
  'when-do-you-need-structural-calculations': ['planning-vs-building-regulations-drawings', 'party-wall-agreements-for-extensions', 'extension-drawings-total-cost'],
  'how-to-compare-extension-drawing-quotes': ['extension-drawings-total-cost', 'planning-vs-building-regulations-drawings', 'when-do-you-need-structural-calculations'],
  'party-wall-agreements-for-extensions': ['when-do-you-need-structural-calculations', 'extension-drawings-total-cost', 'do-i-need-planning-permission-for-an-extension'],
  'planning-vs-building-regulations-drawings': ['do-i-need-planning-permission-for-an-extension', 'snagging-an-extension'],
  'snagging-an-extension': ['planning-vs-building-regulations-drawings', 'new-build-snagging-checklist', 'do-i-need-planning-permission-for-an-extension'],
};
const NEXT_STEP = {
  'hbf-star-ratings-2026-housebuilders-ranked': ['/developers/', 'Check your housebuilder'],
  'planning-application-fees-december-2026': ['/extension-design-prices/', 'Extension design prices'],
  'can-i-extend-my-garage': ['/can-i-extend/', 'Free "Can I extend?" check'],
  'professional-consultants-certificate-new-build': ['/new-build-snagging/', 'New-build snagging surveys'],
  'what-is-snagging': ['/new-build-snagging/', 'New-build snagging surveys'],
  'new-build-snagging-checklist': ['/snagging-prices/', 'Instant snagging price'],
  'choosing-a-snagging-company': ['/new-build-snagging/', 'Our snagging surveys'],
  'what-is-a-snagging-survey': ['/snagging-prices/', 'Instant snagging price'],
  'snagging-survey-cost': ['/snagging-prices/', 'Instant snagging price'],
  'what-happens-after-your-snagging-report': ['/two-year-warranty-inspection/', '2-year warranty inspection'],
  'new-build-warranty-first-two-years': ['/two-year-warranty-inspection/', '2-year warranty inspection'],
  'langley-sutton-coldfield-new-build-guide': ['/pre-completion-inspection/', 'Pre-completion inspections'],
  'can-i-do-my-own-pre-completion-inspection': ['/pre-completion-inspection/', 'Pre-completion inspections'],
  'pre-completion-inspection-explained': ['/pre-completion-inspection/', 'Check your inspection window'],
  'extension-drawings-total-cost': ['/extension-design-prices/', 'Extension design prices'],
  'when-do-you-need-structural-calculations': ['/structural-calculations/', 'Structural calculations'],
  'how-to-compare-extension-drawing-quotes': ['/extension-design/', 'Extension design'],
  'party-wall-agreements-for-extensions': ['/extension-design/', 'Extension design'],
  'do-i-need-planning-permission-for-an-extension': ['/can-i-extend/', 'Free "Can I extend?" check'],
  'planning-vs-building-regulations-drawings': ['/extension-design-prices/', 'Extension design prices'],
  'snagging-an-extension': ['/extension-design/', 'Extension design'],
};
const SNAGGING = new Set(['what-is-snagging', 'new-build-snagging-checklist', 'choosing-a-snagging-company', 'what-is-a-snagging-survey', 'snagging-survey-cost', 'what-happens-after-your-snagging-report', 'new-build-warranty-first-two-years', 'langley-sutton-coldfield-new-build-guide', 'can-i-do-my-own-pre-completion-inspection', 'pre-completion-inspection-explained']);
const bySlug = Object.fromEntries(guides.map((g) => [g.slug, g]));

// A "Related guides" block for any page: pass guide slugs.
export const guideSlugs = (test) => guides.filter((g) => (typeof test === 'function' ? test(g) : (g.category === test || (test === 'snagging' && SNAGGING.has(g.slug)) || (test === 'design' && g.category !== 'snagging' && !SNAGGING.has(g.slug))))).map((g) => g.slug);
export function relatedGuides(slugs, heading = 'Related guides') {
  const list = slugs.map((s) => bySlug[s]).filter(Boolean);
  if (!list.length) return '';
  return `<section class="section-tight no-print"><div class="wrap stack-sm"><h2 style="font-size:1.35rem">${heading}</h2><div class="related">${list.map((g) => `<a href="/guides/${g.slug}/">${titleCase(esc(g.title))}<span>${esc(g.summary)}</span></a>`).join('')}</div></div></section>`;
}

const author = site.founderName
  ? `By <a href="/about/#founder">${esc(site.founderName)}</a>, ${esc(site.founderRole.toLowerCase())}${site.founderQualifications.length ? ` (${esc(site.founderQualifications[0])})` : ' (MSc Civil Engineering, 15 years\' experience)'}`
  : 'By <a href="/about/">Ashbridge Design</a> · Reviewed by our lead engineer (MSc Civil Engineering, 15 years\' experience)';
const organizationAuthorLd = { '@type': 'Organization', '@id': site.url + '/#business', name: site.name, url: site.url };
const authorLd = founderLd ? { '@id': founderLd['@id'], '@type': 'Person', name: site.founderName, url: site.url + '/about/' } : organizationAuthorLd;

export function guidePages() {
  const card = (g) => `<a class="card" href="/guides/${g.slug}/" style="text-decoration:none"><h3 class="card-title">${g.title}</h3><p class="muted small">${g.summary}</p><span class="more">Read the guide</span></a>`;
  const index = {
    path: '/guides/',
    title: 'Guides: Extensions, Planning & New-build Snagging',
    description: 'Practical guides to new-build snagging, pre-completion inspections, planning permission and Building Regulations in England, with sources and checklists.',
    trail: [['/guides/', 'Guides']],
    ld: [{ '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Ashbridge Design guides', url: site.url + '/guides/', hasPart: guides.map((g) => ({ '@type': 'Article', headline: titleCase(g.title), url: site.url + `/guides/${g.slug}/` })) }],
    body: `${pageHero({ trail: [['/guides/', 'Guides']], eyebrow: 'Guides', h1: 'Plain-English guides', lede: 'Practical answers for homeowners and new-build buyers, with sources listed on every guide.' })}
<section class="section"><div class="wrap stack"><h2>New-build snagging and inspections</h2><div class="grid-2">${guides.filter((g) => g.category === 'snagging' || SNAGGING.has(g.slug)).map(card).join('')}</div></div></section>
<section class="section section-white"><div class="wrap stack"><h2>Extensions, planning and Building Regulations</h2><div class="grid-2">${guides.filter((g) => g.category !== 'snagging' && !SNAGGING.has(g.slug)).map(card).join('')}</div></div></section>
${ctaBand()}`,
  };
  const pages = guides.map((g) => {
    const trail = [['/guides/', 'Guides'], [`/guides/${g.slug}/`, g.title]];
    const sources = g.sources || SOURCES[g.slug] || [];
    const byline = g.reviewed === false ? 'By <a href="/about/">Ashbridge Design</a>' : author;
    return {
      path: `/guides/${g.slug}/`,
      title: g.seoTitle || g.title,
      description: g.summary,
      trail,
      ld: [{
        '@context': 'https://schema.org', '@type': 'Article', headline: titleCase(g.title), description: g.summary,
        datePublished: g.published || PUBLISHED, dateModified: g.updated || UPDATED, inLanguage: 'en-GB',
        mainEntityOfPage: site.url + `/guides/${g.slug}/`,
        author: g.reviewed === false ? organizationAuthorLd : authorLd,
        ...(founderLd && g.reviewed !== false ? { reviewedBy: { '@id': founderLd['@id'] } } : {}),
        publisher: { '@type': 'Organization', '@id': site.url + '/#business', name: site.name, logo: { '@type': 'ImageObject', url: site.url + '/assets/logo.jpg' } },
        citation: sources.map(([, u]) => u),
      }],
      body: `${pageHero({ trail, eyebrow: 'Guide', h1: g.title, lede: g.summary })}
<section class="section"><div class="wrap"><article class="prose">
<p class="byline">${byline} · Updated <time datetime="${g.updated || UPDATED}">${human(g.updated || UPDATED)}</time></p>
${g.body}
${NEXT_STEP[g.slug] ? `<p class="no-print"><a class="btn btn-amber" href="${NEXT_STEP[g.slug][0]}">${NEXT_STEP[g.slug][1]}</a></p>` : ''}
${sources.length ? `<h2>Sources</h2><ul class="sources">${sources.map(([l, u]) => `<li><a href="${u}" rel="noopener">${l}</a></li>`).join('')}</ul>` : ''}
</article></div></section>
${relatedGuides(g.related || RELATED[g.slug] || [])}
${ctaBand()}`,
    };
  });
  return [index, ...pages];
}
