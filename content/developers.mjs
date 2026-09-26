import { gbp, esc, pageHero, ctaBand, faqHtml, faqLd } from '../lib/layout.mjs';
import { site, prices } from '../lib/parts.mjs';

// Registration details from the NHQB Register of Developers (nhqb.org.uk/register-of-developers),
// checked on the date below. Re-check before changing anything here.
export const REGISTER_CHECKED = '2026-09-25';
const REGISTER_URL = 'https://www.nhqb.org.uk/register-of-developers/';
const PART3_URL = 'https://www.nhqb.org.uk/the-code/part-3-after-sales-service-complaints-and-the-new-homes-ombudsman/';

const BARRATT_REDROW = 'Barratt Redrow plc';
const PERSIMMON = 'Persimmon plc';
const VISTRY = 'Vistry Group';

export const DEVELOPERS = [
  { slug: 'barratt-homes', short: 'Barratt', brand: 'Barratt Homes', entity: 'Barratt Homes Limited', from: '2022-11-01', group: BARRATT_REDROW, siblings: ['david-wilson-homes', 'redrow'] },
  { slug: 'david-wilson-homes', short: 'David Wilson', brand: 'David Wilson Homes', entity: 'David Wilson Homes Limited', from: '2022-11-01', group: BARRATT_REDROW, siblings: ['barratt-homes', 'redrow'] },
  { slug: 'redrow', brand: 'Redrow', entity: 'Redrow Homes Limited', from: '2022-10-04', group: BARRATT_REDROW, siblings: ['barratt-homes', 'david-wilson-homes'] },
  { slug: 'taylor-wimpey', brand: 'Taylor Wimpey', entity: 'Taylor Wimpey plc', from: '2022-11-01' },
  { slug: 'persimmon-homes', short: 'Persimmon', brand: 'Persimmon Homes', entity: 'Persimmon Public Limited Company', from: '2024-03-05', group: PERSIMMON, siblings: ['charles-church'] },
  { slug: 'charles-church', brand: 'Charles Church', entity: 'Charles Church Developments Ltd', from: '2024-03-05', group: PERSIMMON, siblings: ['persimmon-homes'] },
  { slug: 'bellway', brand: 'Bellway', entity: 'Bellway Homes Limited', from: '2022-10-04' },
  { slug: 'bovis-homes', short: 'Bovis', brand: 'Bovis Homes', entity: 'Bovis Homes', from: '2024-04-08', group: VISTRY, siblings: ['linden-homes', 'countryside-homes'] },
  { slug: 'linden-homes', short: 'Linden', brand: 'Linden Homes', entity: 'Linden Homes', from: '2024-04-08', group: VISTRY, siblings: ['bovis-homes', 'countryside-homes'] },
  { slug: 'countryside-homes', short: 'Countryside', brand: 'Countryside Homes', entity: 'Countryside Homes', from: '2024-04-08', group: VISTRY, siblings: ['bovis-homes', 'linden-homes'] },
  { slug: 'miller-homes', short: 'Miller', brand: 'Miller Homes', entity: 'Miller Homes Limited', from: '2023-01-03' },
  { slug: 'bloor-homes', short: 'Bloor', brand: 'Bloor Homes', entity: 'Bloor Homes Limited', from: '2023-07-04' },
  { slug: 'crest-nicholson', brand: 'Crest Nicholson', entity: 'Crest Nicholson Operations Limited', from: '2023-02-07' },
  { slug: 'keepmoat', brand: 'Keepmoat', entity: 'Keepmoat Homes Limited', from: '2023-05-02' },
  { slug: 'avant-homes', short: 'Avant', brand: 'Avant Homes', entity: 'Avant Homes (England) Limited', from: '2023-03-07' },
  { slug: 'cala-homes', short: 'CALA', brand: 'CALA Homes', entity: 'CALA Management Limited', from: '2023-10-03' },
];

const withArticle = (name) => (/^[AEIOU]/i.test(name) ? 'an ' : 'a ') + name;
const human = (d) => new Date(d + 'T12:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
const bySlug = Object.fromEntries(DEVELOPERS.map((d) => [d.slug, d]));
const minSnag = prices.snag[0].price;

export function developerPages() {
  const out = [];
  const indexTrail = [['/new-build-snagging/', 'New-build Snagging'], ['/developers/', 'Developers']];

  out.push({
    path: '/developers/',
    title: 'Snagging Inspections by Housebuilder',
    description: `Independent snagging and pre-completion inspections for homes from England's major housebuilders, from ${gbp(minSnag)}. Check each builder's New Homes Quality Code registration.`,
    trail: indexTrail,
    body: `${pageHero({ trail: indexTrail, eyebrow: 'Housebuilders', h1: 'Snagging and pre-completion inspections, by housebuilder', lede: 'Whichever developer you are buying from, the same rules decide whether you can have your home inspected before completion. Find your builder below.' })}
<section class="section"><div class="wrap stack">
  <div class="table-wrap"><table>
    <thead><tr><th>Housebuilder</th><th>Group</th><th>NHQB register</th><th>Code applies to homes reserved from</th></tr></thead>
    <tbody>${DEVELOPERS.map((d) => `<tr><td><a href="/developers/${d.slug}/"><strong>${esc(d.brand)}</strong></a></td><td>${d.group ? esc(d.group) : '<span class="muted">—</span>'}</td><td><span class="pill pill-amber">Active</span></td><td class="num">${human(d.from)}</td></tr>`).join('')}</tbody>
  </table></div>
  <p class="small muted">Registration details from the <a href="${REGISTER_URL}" rel="noopener">NHQB Register of Developers</a>, checked on ${human(REGISTER_CHECKED)}. Registrations can change, so always check the register for your developer. Ashbridge Design is independent and not affiliated with any housebuilder; names are used only to identify the developer.</p>
  <div class="note-box slate"><strong>Not on this list?</strong> We inspect homes from any developer in England. If your developer is on the NHQB register, the same pre-completion rules apply. <a href="/pre-completion-inspection/">How pre-completion inspections work</a>.</div>
</div></section>
${ctaBand()}`,
  });

  for (const d of DEVELOPERS) {
    const trail = [...indexTrail, [`/developers/${d.slug}/`, d.brand]];
    const since = human(d.from);
    const groupLine = d.group ? ` ${esc(d.brand)} is part of ${esc(d.group)}.` : '';
    const siblings = (d.siblings || []).map((s) => bySlug[s]).filter(Boolean);
    const faqs = [
      [`Can I have my ${d.short || d.brand} home inspected before completion?`, `Yes, if you reserved it on or after ${since}. ${d.entity} is listed as active on the NHQB Register of Developers from that date, and the New Homes Quality Code lets buyers of registered developers have a pre-completion inspection after the Notice to Complete is served and before completion.`],
      [`Do I have to use ${d.short || d.brand}'s own inspection?`, `No. You can appoint your own suitably qualified inspector: a member of a recognised professional body for surveying, with professional indemnity insurance. Homes reserved from 2 March 2026 can also be inspected by the buyer themselves, using the NHQB checklist.`],
      [`What if ${d.brand} doesn't fix the snags?`, `Report issues in writing through the after-sales service. Under Version 2 of the Code, developers should settle after-sales issues within 30 days unless there is a significant reason for delay. If you make a formal complaint and it isn't resolved, you can refer it to the New Homes Ombudsman Service after 56 days.`],
      [`How much is a snagging survey on ${withArticle(d.short || d.brand)} home?`, `From ${gbp(minSnag)} for a flat, ${gbp(prices.snag[2].price)} for a 3-bedroom house and ${gbp(prices.snag[4].price)} for 5 bedrooms, the same whichever developer built it.`],
    ];
    out.push({
      path: `/developers/${d.slug}/`,
      title: `${d.brand} Snagging Inspections`,
      description: `Buying ${withArticle(d.short || d.brand)} home? Engineer-checked snagging and pre-completion inspections from ${gbp(minSnag)}. On the NHQB register from ${since}.`,
      trail,
      ld: [faqLd(faqs), { '@context': 'https://schema.org', '@type': 'Service', name: `Snagging and pre-completion inspections for ${d.short || d.brand} homes`, serviceType: 'New-build snagging inspection', provider: { '@id': site.url + '/#business' }, areaServed: { '@type': 'Country', name: 'England' }, offers: { '@type': 'Offer', price: minSnag, priceCurrency: 'GBP' } }],
      body: `${pageHero({ trail, eyebrow: `${d.brand} · New-build inspections`, h1: `${esc(d.brand)} snagging survey and pre-completion inspection`, lede: `Buying a new ${esc(d.short || d.brand)} home? Get it independently inspected before you complete, with an engineer-checked report within 24 hours. From ${gbp(minSnag)}, anywhere in England.`, ctas: '<a class="btn btn-amber" href="/snagging-prices/">Get an instant price</a><a class="btn btn-ghost" href="/sample-snagging-report/">See a sample report</a>' })}
<section class="section"><div class="wrap grid-2">
  <div class="card card-door">
    <p class="eyebrow">New Homes Quality Code</p>
    <h2>Is ${esc(d.brand)} covered?</h2>
    <p><strong>Yes, for homes reserved on or after ${since}.</strong> ${esc(d.entity)} is listed as <strong>active</strong> on the NHQB Register of Developers, with registration from that date.${groupLine}</p>
    <p>If you reserved on or after that date, the Code gives you the right to a pre-completion inspection and access to the free New Homes Ombudsman Service. If you reserved on or after 2 March 2026, Version 2 of the Code applies.</p>
    <p class="small muted">Checked on the <a href="${REGISTER_URL}" rel="noopener">NHQB register</a> on ${human(REGISTER_CHECKED)}. Check it yourself for your reservation date.</p>
  </div>
  <div class="card card-door">
    <p class="eyebrow">Your options</p>
    <h2>When to inspect ${esc(withArticle(d.short || d.brand))} home</h2>
    <ul class="ticks">
      <li><strong>Before completion:</strong> after the Notice to Complete is served and before the completion date. The notice period is normally at least 14 calendar days. <a href="/pre-completion-inspection/#window">Check your window</a>.</li>
      <li><strong>After you move in:</strong> a full snagging survey, ideally in the first few months.</li>
      <li><strong>Before the two years are up:</strong> a <a href="/two-year-warranty-inspection/">2-year warranty inspection</a> while the builder is still responsible for defects.</li>
    </ul>
    <p class="price-from">Inspections from <b>${gbp(minSnag)}</b></p>
  </div>
</div></section>
<section class="section section-white"><div class="wrap narrow prose">
  <h2>Getting snags fixed by ${esc(d.brand)}</h2>
  <ol>
    <li><strong>Send the report in writing</strong> through ${esc(d.short || d.brand)}'s after-sales service, and keep a copy with the date you sent it.</li>
    <li><strong>Expect action within 30 days.</strong> Under Version 2 of the Code, developers should settle after-sales issues within 30 days unless there's a significant reason for delay, with monthly updates if it takes longer.</li>
    <li><strong>If it stalls, make a formal complaint.</strong> The developer should acknowledge it within 5 days and respond within 30 days of the complaint start date.</li>
    <li><strong>Still unresolved?</strong> You can refer the complaint to the New Homes Ombudsman Service after 56 days. The service is free for homebuyers.</li>
  </ol>
  <p>An independent report helps at every step: each snag is photographed, located and referenced to the relevant standard, which is much harder to dismiss than a list you've written yourself. <a href="/guides/what-happens-after-your-snagging-report/">What happens after your snagging report</a>.</p>
  <p class="small muted">Timescales from <a href="${PART3_URL}" rel="noopener">Part 3 of the New Homes Quality Code (Version 2)</a>. Homes reserved before 2 March 2026 fall under Version 1.</p>
  ${siblings.length ? `<p>Also part of ${esc(d.group)}: ${siblings.map((s) => `<a href="/developers/${s.slug}/">${esc(s.brand)}</a>`).join(' and ')}.</p>` : ''}
</div></section>
<section class="section"><div class="wrap narrow stack"><h2>${esc(d.brand)} inspection questions</h2>${faqHtml(faqs)}
  <p class="small muted">Ashbridge Design is independent and not affiliated with ${esc(d.brand)}${d.group ? ` or ${esc(d.group)}` : ''}. The name is used only to identify the developer. <a href="/developers/">Other housebuilders</a>.</p>
</div></section>
${ctaBand()}`,
    });
  }
  return out;
}
