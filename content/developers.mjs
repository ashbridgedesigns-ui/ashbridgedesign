import { gbp, esc, pageHero, ctaBand, faqHtml, faqLd } from '../lib/layout.mjs';
import { site, prices } from '../lib/parts.mjs';
import { relatedGuides } from './guides.mjs';

// Registration details from the NHQB Register of Developers (nhqb.org.uk/register-of-developers),
// checked on the date below. Re-check before changing anything here.
export const REGISTER_CHECKED = '2026-09-25';
const REGISTER_URL = 'https://www.nhqb.org.uk/register-of-developers/';
const PART3_URL = 'https://www.nhqb.org.uk/the-code/part-3-after-sales-service-complaints-and-the-new-homes-ombudsman/';

const BARRATT_REDROW = 'Barratt Redrow plc';
const PERSIMMON = 'Persimmon plc';
const VISTRY = 'Vistry Group';

// Builder-specific facts, taken from primary sources only (HBF star rating results and each
// builder's own website), checked on the date below. A field is left out rather than guessed.
// Developments are those listed with prices on the builder's West Midlands pages that day,
// excluding ones marked coming soon or sold out, and ones outside the West Midlands region.
export const FACTS_CHECKED = '2026-10-20';
const HBF_URL = 'https://www.hbf.co.uk/policy/campaigns-and-initiatives/css-star-awards/';
const HBF_2026 = { year: 2026, period: 'October 2024 to September 2025' };
const HBF_2025 = { year: 2025, period: 'October 2023 to September 2024' };
const VISTRY_HBF = { ...HBF_2026, stars: 5, as: 'Vistry Homes', score: 4.2, sample: 4078 };
const VISTRY_WARRANTY = 'NHBC Buildmark or a similar provider. For years 3 to 10 the brand names NHBC, LABC Warranty or Premier Guarantee as possible insurers.';
const VISTRY_CARE_NOTE = 'Lists the regional Vistry customer service teams, including South West Midlands and North West Midlands, and links the My Home customer portal.';
const PERSIMMON_WARRANTY = 'Premier Guarantee, NHBC or LABC: the builder names all three as its warranty partners, so check which one covers your plot.';
const PERSIMMON_HBF = { ...HBF_2026, stars: 5, as: 'Persimmon Homes', score: 4.3, sample: 8459 };
const BARRATT_HBF = { ...HBF_2026, stars: 5, as: 'Barratt Redrow', score: 4.32, sample: 12411 };

const FACTS = {
  'barratt-homes': {
    hbf: BARRATT_HBF,
    warranty: { text: 'NHBC. Barratt says every home has an NHBC warranty but not always NHBC Buildmark, and confirms the provider at reservation.', url: 'https://www.barratthomes.co.uk/why-buy-new/nhbc-warranty-and-insurance/' },
    care: { label: 'Owners Hub', url: 'https://www.barratthomes.co.uk/help--support/', note: 'Issues are reported through the My Home customer portal or the online form, and Barratt aims to respond within three working days.' },
    wm: { urls: ['https://www.barratthomes.co.uk/new-homes/west-midlands-homes/'], devs: [['Anvil Place', 'Netherton, Dudley'], ['The Watchmakers', 'Coventry'], ['Silkin Meadows', 'Telford'], ['The Pearls', 'Stourport-on-Severn'], ['Kensington Gate', 'Rushwick, Worcester'], ['Poppy Fields', 'Uttoxeter']] },
  },
  'david-wilson-homes': {
    hbf: BARRATT_HBF,
    warranty: { text: 'NHBC. David Wilson Homes says all its new homes are covered by the NHBC warranty and insurance policy.', url: 'https://www.dwh.co.uk/why-buy-new/nhbc-warranty-and-insurance/' },
    care: { label: 'Owners Hub', url: 'https://www.dwh.co.uk/help--support/', note: 'Issues are reported through the My Home customer portal to the New Home Customer Care team.' },
    wm: { urls: ['https://www.dwh.co.uk/new-homes/west-midlands/'], devs: [['Ashtree Grove', 'Hampton-in-Arden, Solihull'], ['Curborough Fields', 'Lichfield'], ['The Catkins', 'Stafford'], ['Ashlawn Gardens', 'Rugby'], ['Hughes Meadow', 'Lawley, Telford'], ['Otters Reach at Benthall Grange', 'Ironbridge'], ['The Pearls', 'Stourport-on-Severn']] },
  },
  redrow: {
    hbf: BARRATT_HBF,
    warranty: { text: 'NHBC, or another provider: Redrow names LABC and Premier Guarantee as the alternatives.', url: 'https://www.redrow.co.uk/help-and-support/code-of-practice/nhbc-warranty-and-insurance/' },
    care: { label: 'Homeowner Support', url: 'https://www.redrow.co.uk/help-and-support/homeowner-support/', note: 'Concerns are logged through My Home, with a photo where possible; Redrow asks owners to check its build and finish standards first.' },
    wm: { urls: ['https://www.redrow.co.uk/locations/west-midlands/'], devs: [['Eagle Gate at Amington', 'Tamworth'], ['Amington Fairway', 'Tamworth'], ['Arden Fields', 'Bulkington'], ['Curborough Lakes', 'Lichfield'], ['Curborough Fields', 'Lichfield'], ['Redrow at Houlton', 'Rugby'], ['Royal Gardens', 'Worcester']] },
  },
  'taylor-wimpey': {
    hbf: { ...HBF_2026, stars: 5, as: 'Taylor Wimpey', score: 4.24, sample: 6431 },
    warranty: { text: 'NHBC Buildmark. Taylor Wimpey covers defects for the first two years; NHBC insures structural defects in years 3 to 10.', url: 'https://www.taylorwimpey.co.uk/support/warranty' },
    care: { label: 'Support', url: 'https://www.taylorwimpey.co.uk/support', note: 'Owner guides on settling in, the warranty, troubleshooting and maintenance.' },
    wm: { urls: ['https://www.taylorwimpey.co.uk/new-homes/west-midlands'], devs: [['Lindridge Chase', 'Sutton Coldfield'], ['Appledown Gate', 'Keresley'], ['Appledown Meadow', 'Coventry'], ['Allard Way', 'Coventry'], ['Titan Wharf', 'Stourbridge']] },
  },
  'persimmon-homes': {
    hbf: PERSIMMON_HBF,
    warranty: { text: PERSIMMON_WARRANTY, url: 'https://www.persimmonhomes.com/blog/articles/support-after-you-move-into-your-new-home' },
    care: { label: 'Support after you move in', url: 'https://www.persimmonhomes.com/blog/articles/support-after-you-move-into-your-new-home', note: 'The regional Customer Care team handles defects for the two-year warranty period; after that, issues go to the warranty provider.' },
    wm: { urls: ['https://www.persimmonhomes.com/locations/west-midlands'], devs: [['Coseley New Village', 'Dudley'], ['Tame Bridge View', 'Wednesbury'], ['Whitmore Place', 'Coventry'], ['Thickthorn Gardens', 'Kenilworth'], ['Newlands Meadows', 'Bedworth'], ['Eaton Place', 'Nuneaton'], ['Meon Way Gardens', 'Stratford-upon-Avon'], ['The View', 'Redditch'], ['Cromwell Wharf', 'Lichfield'], ['Beamhill Heights', 'Burton upon Trent'], ['Royal Gardens', 'Stoke-on-Trent'], ['Cherry Tree Gardens', 'Telford'], ['Hadley Gate', 'Telford'], ['Eckford Vale', 'Shrewsbury'], ['Penson Grange', 'Shropshire'], ['Hawthorn Park', 'Herefordshire']] },
  },
  'charles-church': {
    hbf: PERSIMMON_HBF,
    warranty: { text: PERSIMMON_WARRANTY, url: 'https://www.charleschurch.com/be-inspired/how-we-support-you-after-you-move' },
    care: { label: 'Support after you move', url: 'https://www.charleschurch.com/be-inspired/how-we-support-you-after-you-move', note: 'Customer Care looks after the two-year warranty period; in years 3 to 10, issues are reported to the warranty provider.' },
    wm: { urls: ['https://www.charleschurch.com/locations/west-midlands'], devs: [['Lockside', 'Lichfield'], ['Kenilworth Gate', 'Kenilworth'], ['Dunchurch Fields', 'Rugby'], ['Moat House Grange', 'Bedworth']] },
  },
  bellway: {
    hbf: { ...HBF_2026, stars: 5, as: 'Bellway Homes', score: 4.38, sample: 6900 },
    warranty: { text: 'NHBC Buildmark, or an equivalent warranty from another provider. Bellway covers the first two years; the insurer covers years 3 to 10.', url: 'https://www.bellway.co.uk/buying-with-bellway/warranty-and-insurance-protection' },
    care: { label: 'Homeowner support', url: 'https://www.bellway.co.uk/customer-support/homeowners-support' },
    wm: { urls: ['https://www.bellway.co.uk/new-homes/west-midlands'], devs: [['Lucas Green', 'Shirley, Solihull'], ['Arden Glade', 'Keresley'], ['Priors Meadow', 'Whitnash, Leamington Spa'], ['Yew Tree Park', 'Nuneaton'], ['Astley Fields', 'Bedworth'], ['Harvino', 'Hunnington'], ['Bellway at Whitford Heights', 'Bromsgrove'], ['Ladywell Coppice', 'Wombourne'], ['Sheasby Park', 'Fradley, Lichfield'], ['Victoria Gate', 'Stafford'], ['Baldwins Gate Grange', 'Newcastle-under-Lyme'], ['The Crescent', 'Stoke-on-Trent'], ["Darwin's Edge", 'Shrewsbury']] },
  },
  'bovis-homes': {
    hbf: VISTRY_HBF,
    warranty: { text: VISTRY_WARRANTY, url: 'https://www.bovishomes.co.uk/buying-a-home/10-year-warranty' },
    care: { label: 'Customer services', url: 'https://www.bovishomes.co.uk/contact-us/customer-services', note: VISTRY_CARE_NOTE },
    wm: { urls: ['https://www.bovishomes.co.uk/locations/west-midlands', 'https://www.bovishomes.co.uk/locations/warwickshire', 'https://www.bovishomes.co.uk/locations/staffordshire', 'https://www.bovishomes.co.uk/locations/worcestershire', 'https://www.bovishomes.co.uk/locations/shropshire', 'https://www.bovishomes.co.uk/locations/herefordshire'], devs: [['Coppice Green at Pickford Gate', 'Coventry'], ['Stoneleigh View', 'Kenilworth'], ['St James Gate', 'Bulkington'], ['The Chancery', 'Shottery, Stratford-upon-Avon'], ['Partridge Walk', 'Stafford'], ['Stone Walk', 'Seabridge, Newcastle-under-Lyme'], ['Elgar Park', 'Worcester'], ['Habberley Park', 'Kidderminster'], ['The Rambles', 'Telford'], ['Hopfields', 'Ledbury']] },
  },
  'linden-homes': {
    hbf: VISTRY_HBF,
    warranty: { text: VISTRY_WARRANTY, url: 'https://www.lindenhomes.co.uk/buying-a-home/10-year-warranty' },
    care: { label: 'Customer services', url: 'https://www.lindenhomes.co.uk/contact-us/customer-services', note: VISTRY_CARE_NOTE },
    wm: { urls: ['https://www.lindenhomes.co.uk/locations/west-midlands', 'https://www.lindenhomes.co.uk/locations/warwickshire', 'https://www.lindenhomes.co.uk/locations/staffordshire', 'https://www.lindenhomes.co.uk/locations/worcestershire', 'https://www.lindenhomes.co.uk/locations/shropshire'], devs: [['The Meadows at Woodland View', 'Coventry'], ['Stoneleigh View', 'Kenilworth'], ['Bamford Park at Windmill View', 'Lighthorne'], ['Partridge Walk', 'Stafford'], ['Park Gate', 'Kidderminster'], ['Woodland Glade', 'Telford'], ['The Quarters', 'Redhill, Telford']] },
  },
  'countryside-homes': {
    hbf: VISTRY_HBF,
    warranty: { text: VISTRY_WARRANTY, url: 'https://www.countrysidehomes.com/buying-a-home/10-year-warranty' },
    care: { label: 'Customer services', url: 'https://www.countrysidehomes.com/contact-us/customer-services', note: VISTRY_CARE_NOTE },
    wm: { urls: ['https://www.countrysidehomes.com/locations/new-build-homes-for-sale-in-warwickshire', 'https://www.countrysidehomes.com/locations/new-build-homes-for-sale-in-staffordshire'], devs: [['Milby Meadows', 'Nuneaton'], ['Dracan Village', 'Drakelow, near Burton upon Trent']] },
  },
  'miller-homes': {
    hbf: { ...HBF_2026, stars: 5, as: 'Miller Homes', score: 4.32, sample: 3398 },
    warranty: { text: 'NHBC 10-year warranty "or similar", as stated in Miller\'s customer charter.', url: 'https://www.millerhomes.co.uk/help-and-advice/our-customer-charter' },
    care: { label: 'After you\'ve moved in', url: 'https://www.millerhomes.co.uk/help-and-advice/faqs/after-sales-faqs' },
    wm: { urls: ['https://www.millerhomes.co.uk/locations/west-midlands-and-the-surrounding-areas'], devs: [['Silver Willows', 'Leamington Spa'], ['Kington Meadows', 'Bulkington'], ['Eastgate Gardens', 'Rugby'], ['The Choristers', 'Streethay, Lichfield'], ['Springbrook Gardens', 'Blakedown, Kidderminster'], ['Astley Croft', 'Stourport-on-Severn'], ['Badsey Gardens', 'Badsey'], ['Earls Grange', 'Priorslee, Telford'], ['Roman Croft', 'Priorslee, Telford']] },
  },
  'bloor-homes': {
    hbf: { ...HBF_2026, stars: 5, as: 'Bloor Homes', score: 4.54, sample: 2920 },
    warranty: { text: 'NHBC Buildmark. Bloor\'s own two-year warranty is run by its in-house Customer Care team; NHBC insures years 3 to 10.', url: 'https://bloorhomes.com/buying-guide/warranty-cover' },
    care: { label: 'Customer Care and complaints', url: 'https://bloorhomes.com/complaint-process', note: 'The Regional Customer Care team works office hours (8.30am to 5pm, Monday to Friday) and confirms receipt of a complaint within 5 working days.' },
    wm: { urls: ['https://bloorhomes.com/new-homes/west-midlands'], devs: [['Frankley Park', 'Birmingham'], ['Arden Grange', 'Keresley'], ['The Asps', 'Warwick'], ['Atherstone Place', 'Atherstone'], ['Alcester Park', 'Alcester'], ['Shottery View', 'Shottery'], ['The Brambles', 'Rugby'], ['Penkridge Chase', 'Penkridge'], ['Sandon Gate', 'Stafford'], ['Outwood Meadows', 'Burton upon Trent'], ['Elgar Park', 'Worcester'], ['Evesham Gate', 'Evesham'], ['Badsey Meadows', 'Badsey'], ['Hutchison Gate', 'Newport, Shropshire']] },
  },
  'crest-nicholson': {
    hbf: { ...HBF_2026, stars: 5, as: 'Crest Nicholson', score: 4.19, sample: 818 },
    warranty: { text: 'NHBC Buildmark, Premier Guarantee or another provider, with the first two years covered by Crest Nicholson.', url: 'https://www.crestnicholson.com/your-crest-experience/buying-with-crest-nicholson/how-we-support-you' },
    care: { label: 'How we support you', url: 'https://www.crestnicholson.com/your-crest-experience/buying-with-crest-nicholson/how-we-support-you', note: 'If a complaint isn\'t resolved, Crest Nicholson says you can ask the warranty provider to become involved.' },
    wm: { urls: ['https://www.crestnicholson.com/towns-counties-new-homes/west-midlands', 'https://www.crestnicholson.com/towns-counties-new-homes/warwickshire', 'https://www.crestnicholson.com/towns-counties-new-homes/staffordshire', 'https://www.crestnicholson.com/towns-counties-new-homes/shropshire'], devs: [['Westwood Park', 'Westwood Heath, Coventry'], ['Sketchley Gardens', 'Nuneaton'], ['Marston Leys', 'Meon Vale'], ['Branston Locks', 'Branston, Burton upon Trent'], ['Bridgnorth Edge', 'Bridgnorth'], ['Crest Nicholson at Albrighton', 'Albrighton']] },
  },
  keepmoat: {
    hbf: { ...HBF_2026, stars: 5, as: 'Keepmoat Homes', score: 4.31, sample: 1758 },
    warranty: { text: 'NHBC or LABC structural warranty, alongside Keepmoat\'s own two-year warranty.', url: 'https://www.keepmoat.com/contact-us/faqs' },
    care: { label: 'Customer Care', url: 'https://www.keepmoat.com/contact-us/customer-care', note: 'Each Keepmoat region has its own Customer Care team; the page also links the Homeowner\'s Manual.' },
    wm: { urls: ['https://www.keepmoat.com/new-build-homes/west-midlands'], devs: [['Locksmiths Quarter', 'Willenhall'], ["Stalling's Place", 'Kingswinford'], ['Spirit Quarters', 'Coventry'], ['Sketchley Meadows', 'Nuneaton'], ['Chesterton Woods', 'Upper Lighthorne'], ['Branston Locks', 'Burton upon Trent'], ['Mill Place', 'Tean, Stoke-on-Trent'], ['The Saltings', 'Droitwich'], ['Atlas Exchange', 'Pershore']] },
  },
  'avant-homes': {
    hbf: { ...HBF_2025, stars: 5, as: 'Avant Homes', sample: 848, missing2026: true },
    warranty: { text: 'NHBC or Premier Guarantee: Avant\'s warranty guide points owners to both providers\' guidance.', url: 'https://www.avanthomes.co.uk/avant-homes-homeowner-warranty-your-personal-guide' },
    care: { label: 'Report an issue', url: 'https://www.avanthomes.co.uk/contact-us/customer-service/report-an-issue' },
    wm: { urls: ['https://www.avanthomes.co.uk/new-build-homes/west-midlands'], devs: [['Priory Orchard', 'Priorslee, Telford']] },
  },
  'cala-homes': {
    hbf: { ...HBF_2026, stars: 5, as: 'CALA Group', score: 4.35, sample: 1851 },
    warranty: { text: 'NHBC or a similar industry-regulated scheme for years 3 to 10, with CALA\'s own warranty for the first two years.', url: 'https://www.cala.co.uk/customer-service/' },
    care: { label: 'Customer Service', url: 'https://www.cala.co.uk/customer-service/', note: 'For the first two years CALA also provides a 24-hour emergency contact service.' },
    wm: { urls: ['https://www.cala.co.uk/homes-for-sale/cotswolds/warwickshire/', 'https://www.cala.co.uk/homes-for-sale/cotswolds/worcestershire/'], devs: [] },
  },
};

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
].map((d) => ({ ...d, facts: FACTS[d.slug] }));

const withArticle = (name) => (/^[AEIOU]/i.test(name) ? 'an ' : 'a ') + name;
const human = (d) => new Date(d + 'T12:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
const bySlug = Object.fromEntries(DEVELOPERS.map((d) => [d.slug, d]));
const hostOf = (u) => new URL(u).hostname.replace(/^www\./, '');
const pageName = (u) => new URL(u).pathname.split('/').filter(Boolean).pop().replace(/^new-build-homes-for-sale-in-/, '').replace(/-homes$/, '').replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

function hbfLine(h) {
  const base = `<strong>${h.stars} stars</strong> in the HBF ${h.year} results (survey year ${h.period}), rated as ${esc(h.as)}`;
  if (h.missing2026) return `${base}, from a sample of ${h.sample.toLocaleString('en-GB')}. Not listed in the 2026 results.`;
  return `${base}: composite score ${h.score} from a sample of ${h.sample.toLocaleString('en-GB')}.`;
}

// Sourced, builder-specific facts (see FACTS above).
function factsSection(d) {
  const f = d.facts;
  if (!f) return '';
  const name = esc(d.short || d.brand);
  const rows = [];
  if (f.hbf) rows.push(['HBF star rating', hbfLine(f.hbf)]);
  if (f.warranty) rows.push(['Warranty provider', esc(f.warranty.text)]);
  if (f.care) rows.push(['After-sales', `<a href="${f.care.url}" rel="noopener">${esc(f.care.label)}</a> on ${hostOf(f.care.url)}.${f.care.note ? ' ' + esc(f.care.note) : ''}`]);
  if (f.wm) rows.push(['West Midlands developments', f.wm.devs.length
    ? f.wm.devs.map(([n, t]) => `${esc(n)} (${esc(t)})`).join(', ') + '.'
    : `None listed on ${name}'s Warwickshire or Worcestershire pages when we checked.`]);
  const sources = [
    f.hbf && ['HBF Star Rating results', HBF_URL],
    f.warranty && [`${d.brand}: warranty`, f.warranty.url],
    f.care && f.care.url !== f.warranty?.url && [`${d.brand}: ${f.care.label}`, f.care.url],
    ...(f.wm ? f.wm.urls.map((u) => [`${d.brand}: new homes in ${pageName(u)}`, u]) : []),
    ['NHQB Register of Developers', REGISTER_URL],
  ].filter(Boolean);
  return `<section class="section"><div class="wrap narrow stack">
  <p class="eyebrow">Checked ${human(FACTS_CHECKED)}</p>
  <h2>${esc(d.brand)}: rating, warranty and after-sales</h2>
  <p>What ${name} buyers should know, taken from the HBF Star Rating results and ${name}'s own website.</p>
  <div class="table-wrap"><table>
    <tbody>${rows.map(([k, v]) => `<tr><th scope="row">${k}</th><td>${v}</td></tr>`).join('')}</tbody>
  </table></div>
  <p class="small muted">The warranty provider can vary by development, so check the one named in your reservation documents. Developments are those ${name} listed with prices for the West Midlands, Staffordshire, Warwickshire, Worcestershire, Shropshire and Herefordshire on the date above; availability changes quickly. HBF publishes ratings per builder or group, so sister brands share a rating.</p>
  <h3>Sources</h3>
  <ul class="sources">${sources.map(([l, u]) => `<li><a href="${u}" rel="noopener">${esc(l)}</a></li>`).join('')}</ul>
</div></section>`;
}
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
    <thead><tr><th>Housebuilder</th><th>Group</th><th>HBF stars</th><th>NHQB register</th><th>Code applies to homes reserved from</th></tr></thead>
    <tbody>${DEVELOPERS.map((d) => `<tr><td><a href="/developers/${d.slug}/"><strong>${esc(d.brand)}</strong></a></td><td>${d.group ? esc(d.group) : '<span class="muted">—</span>'}</td><td class="num">${d.facts?.hbf ? `${d.facts.hbf.stars} (${d.facts.hbf.year})` : '<span class="muted">—</span>'}</td><td><span class="pill pill-amber">Active</span></td><td class="num">${human(d.from)}</td></tr>`).join('')}</tbody>
  </table></div>
  <p class="small muted">Registration details from the <a href="${REGISTER_URL}" rel="noopener">NHQB Register of Developers</a>, checked on ${human(REGISTER_CHECKED)}. Star ratings from the <a href="${HBF_URL}" rel="noopener">HBF Star Rating results</a>, checked on ${human(FACTS_CHECKED)}; sister brands share their group's rating. Registrations can change, so always check the register for your developer. Ashbridge Design is independent and not affiliated with any housebuilder; names are used only to identify the developer.</p>
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
      ...(d.facts?.warranty ? [[`Which warranty comes with ${withArticle(d.short || d.brand)} home?`, `${d.facts.warranty.text} That is what ${d.short || d.brand}'s website said on ${human(FACTS_CHECKED)}; your reservation documents name the warranty for your plot. Either way, ${d.short || d.brand} is responsible for putting right defects in the first two years, which is when a snagging survey matters most.`]] : []),
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
${factsSection(d)}
<section class="section section-white"><div class="wrap narrow stack"><h2>${esc(d.brand)} inspection questions</h2>${faqHtml(faqs)}
  <p class="small muted">Ashbridge Design is independent and not affiliated with ${esc(d.brand)}${d.group ? ` or ${esc(d.group)}` : ''}. The name is used only to identify the developer. <a href="/developers/">Other housebuilders</a>.</p>
</div></section>
${relatedGuides(['pre-completion-inspection-explained', 'new-build-snagging-checklist', 'what-happens-after-your-snagging-report'])}
${ctaBand()}`,
    });
  }
  return out;
}
