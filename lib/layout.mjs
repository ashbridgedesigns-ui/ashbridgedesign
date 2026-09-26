import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import site, { prices } from '../site.config.mjs';

// Content hash per asset, so browsers fetch a fresh copy whenever the file changes
// (assets are cached for a week).
const assetVersion = (file) => createHash('sha1').update(readFileSync(new URL(`../assets/${file}`, import.meta.url))).digest('hex').slice(0, 10);
const CSS_V = assetVersion('styles.css');
const JS_V = assetVersion('main.js');

export const gbp = (n) => '£' + Number(n).toLocaleString('en-GB');
export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const slug = (s) => String(s).toLowerCase().replace(/&/g, 'and').replace(/['’]/g, '').replace(/\(.*?\)/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const NAV = [
  ['/extension-design/', 'Extension Design'],
  ['/structural-calculations/', 'Structural Calculations'],
  ['/new-build-snagging/', 'New-build Snagging'],
  ['/extension-design-prices/', 'Prices'],
  ['/areas/', 'Areas'],
  ['/guides/', 'Guides'],
  ['/about/', 'About'],
];

export const tel = site.phone ? site.phone.replace(/\s+/g, '') : '';

const WA_ICON = '<svg viewBox="0 0 32 32" width="24" height="24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M16.04 3C9.02 3 3.3 8.7 3.3 15.72c0 2.24.59 4.43 1.7 6.36L3.2 28.8l6.9-1.8a12.7 12.7 0 0 0 5.93 1.5h.01c7.02 0 12.74-5.7 12.74-12.73 0-3.4-1.33-6.6-3.73-9A12.64 12.64 0 0 0 16.04 3Zm0 23.35h-.01a10.57 10.57 0 0 1-5.39-1.48l-.39-.23-4.1 1.07 1.1-3.99-.25-.41a10.54 10.54 0 0 1-1.62-5.6c0-5.84 4.76-10.59 10.62-10.59 2.83 0 5.5 1.1 7.5 3.11a10.5 10.5 0 0 1 3.1 7.49c0 5.84-4.76 10.6-10.56 10.6Zm5.8-7.93c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.19.21-.37.24-.69.08-.32-.16-1.34-.49-2.56-1.57-.94-.84-1.58-1.88-1.77-2.2-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.71-.98-2.34-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.64 0 1.56 1.14 3.07 1.3 3.28.16.21 2.24 3.41 5.42 4.78.76.33 1.35.52 1.81.67.76.24 1.45.2 2 .12.61-.09 1.88-.77 2.14-1.51.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37Z"/></svg>';

// One WhatsApp URL site-wide, so link checkers test it once instead of once per page
// (wa.me rate-limits them with HTTP 429). The page context is added on click by main.js.
export function waHref() {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi Ashbridge Design, I'm getting in touch from your website.")}`;
}
const waAttrs = (context) => `href="${waHref()}" target="_blank" rel="nofollow noopener"${context ? ` data-wa-context="${esc(context)}"` : ''}`;

function whatsappFab(context) {
  if (!site.whatsapp) return '';
  return `<a class="wa-fab" ${waAttrs(context)} aria-label="Chat with Ashbridge Design on WhatsApp">
  <span class="wa-pulse" aria-hidden="true"></span>${WA_ICON}<span class="wa-label">Chat on WhatsApp</span>
</a>`;
}

export function waInline(label = 'Message us on WhatsApp', context) {
  if (!site.whatsapp) return '';
  return `<a class="wa-inline" ${waAttrs(context)}>${WA_ICON}<span>${label}</span></a>`;
}

function header(path) {
  const links = NAV.map(([href, label]) =>
    `<a href="${href}"${path.startsWith(href) ? ' aria-current="page"' : ''}>${label}</a>`).join('');
  return `<a class="skip" href="#main">Skip to content</a>
<header class="site-header">
  <div class="wrap header-inner">
    <a class="brand" href="/" aria-label="${esc(site.name)} home"><img src="/assets/logo.jpg" alt="${esc(site.name)}" width="713" height="180"></a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>
    <nav class="nav" id="site-nav" aria-label="Main">${links}<a class="btn btn-amber" href="/contact/">Get a price</a></nav>
  </div>
</header>`;
}

function footer() {
  const year = new Date().getFullYear();
  return `<footer class="site-footer">
  <div class="wrap">
    <div class="footer-grid">
      <div class="stack-sm">
        <a class="footer-logo" href="/"><img src="/assets/logo.jpg" alt="${esc(site.name)}" width="713" height="180"></a>
        <p>${esc(site.tagline)}. Based in ${site.base}, covering all of England.</p>
        <p>${[site.email && `<a href="mailto:${site.email}">${site.email}</a>`, site.phone && `<a href="tel:${tel}">${esc(site.phone)}</a>`, site.whatsapp && `<a ${waAttrs()}>WhatsApp ${esc(site.whatsappDisplay)}</a>`, '<a href="/contact/">Get a price online</a>'].filter(Boolean).join('<br>')}</p>
      </div>
      <div><h2 class="footer-h">Design</h2><ul>
        <li><a href="/extension-design/">Extension Design</a></li>
        <li><a href="/planning-drawings/">Planning drawings</a></li>
        <li><a href="/building-regulations-drawings/">Building Regulations drawings</a></li>
        <li><a href="/structural-calculations/">Structural Calculations</a></li>
        <li><a href="/loft-conversion-drawings/">Loft conversions</a></li>
        <li><a href="/garage-conversion-drawings/">Garage conversions</a></li>
        <li><a href="/can-i-extend/">Can I extend?</a></li>
      </ul></div>
      <div><h2 class="footer-h">Inspections</h2><ul>
        <li><a href="/new-build-snagging/">New-build Snagging</a></li>
        <li><a href="/pre-completion-inspection/">Pre-completion inspection</a></li>
        <li><a href="/two-year-warranty-inspection/">2-year warranty inspection</a></li>
        <li><a href="/snagging-prices/">Snagging prices</a></li>
        <li><a href="/sample-snagging-report/">Sample report</a></li>
        <li><a href="/developers/">By housebuilder</a></li>
      </ul></div>
      <div><h2 class="footer-h">Company</h2><ul>
        <li><a href="/about/">About</a></li>
        <li><a href="/areas/">Areas we cover</a></li>
        <li><a href="/projects/">Projects</a></li>
        <li><a href="/guides/">Guides</a></li>
        <li><a href="/contact/">Contact</a></li>
        <li><a href="/privacy/">Privacy</a></li>
        ${site.ga4Id ? '<li><button type="button" class="link-btn" data-consent-open>Cookie settings</button></li>' : ''}
      </ul></div>
    </div>
    <div class="footer-base">
      <span>© ${year} ${esc(site.name)}${site.companyNumber ? ` · Registered in England, company no. ${esc(site.companyNumber)}` : ''}</span>
    </div>
  </div>
</footer>
<div class="action-bar" aria-label="Quick actions">
  ${site.phone ? `<a href="tel:${tel}">Call</a>` : site.whatsapp ? `<a ${waAttrs()}>WhatsApp</a>` : site.email ? `<a href="mailto:${site.email}">Email</a>` : `<a href="/contact/">Contact</a>`}
  <a href="/snagging-prices/">Snag price</a>
  <a class="primary" href="/contact/">Get a price</a>
</div>`;
}

export function breadcrumbs(trail) {
  if (!trail || !trail.length) return '';
  const all = [['/', 'Home'], ...trail];
  const html = all.map(([href, label], i) => i === all.length - 1 ? `<span>${esc(label)}</span>` : `<a href="${href}">${esc(label)}</a><span aria-hidden="true">/</span>`).join('');
  return `<nav class="crumbs" aria-label="Breadcrumb">${html}</nav>`;
}

function breadcrumbLd(trail) {
  if (!trail || !trail.length) return null;
  const all = [['/', 'Home'], ...trail];
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: all.map(([href, label], i) => ({ '@type': 'ListItem', position: i + 1, name: label, item: site.url + href })) };
}

export const orgLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': site.url + '/#business',
  name: site.name,
  description: 'Engineer-led extension design, planning and Building Regulations drawings, structural calculations and new-build snagging inspections across England.',
  url: site.url,
  logo: site.url + '/assets/logo.jpg',
  ...(site.email ? { email: site.email } : {}),
  ...(site.phone ? { telephone: site.phone } : {}),
  address: { '@type': 'PostalAddress', addressLocality: 'Birmingham', addressRegion: 'West Midlands', addressCountry: 'GB' },
  areaServed: { '@type': 'Country', name: 'England' },
  priceRange: '£150–£2,195',
  slogan: 'Design it properly. Inspect it properly.',
  knowsAbout: ['House extension design', 'Planning drawings', 'Building Regulations drawings', 'Structural calculations', 'Loft conversions', 'Garage conversions', 'Permitted development', 'New-build snagging inspections', 'Pre-completion inspections', 'New Homes Quality Code'],
  contactPoint: { '@type': 'ContactPoint', contactType: 'customer service', url: site.url + '/contact/', ...(site.email ? { email: site.email } : {}), areaServed: 'GB', availableLanguage: 'English' },
};

export function faqLd(faqs) {
  return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a.replace(/<[^>]+>/g, '') } })) };
}

export function faqHtml(faqs) {
  return `<div class="faq">${faqs.map(([q, a]) => `<details><summary>${esc(q)}</summary><div>${a}</div></details>`).join('')}</div>`;
}

export function page({ path, title, description, body, trail, ld = [], noindex = false }) {
  const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`;
  const lds = [orgLd, breadcrumbLd(trail), ...ld].filter(Boolean);
  const clientData = { prices, site: { email: site.email, whatsappDisplay: site.whatsappDisplay, depositLink: site.depositLink } };
  return `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${site.url}${path}">
${noindex ? '<meta name="robots" content="noindex, follow">' : ''}
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${site.url}${path}">
<meta property="og:image" content="${site.url}/assets/logo.jpg">
<meta name="theme-color" content="#3C4854">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="preload" href="/assets/fonts/figtree-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/archivo-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/styles.css?v=${CSS_V}">
${site.ga4Id ? `<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied'});try{if(localStorage.getItem('ash-consent')==='granted')gtag('consent','update',{analytics_storage:'granted'});}catch(e){}gtag('js',new Date());gtag('config','${site.ga4Id}');</script>
<script>addEventListener('load',function(){var l=function(){var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id=${site.ga4Id}';document.head.appendChild(s);};window.requestIdleCallback?requestIdleCallback(l,{timeout:2000}):setTimeout(l,1);});</script>` : ''}
${lds.map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n')}
</head>
<body>
${header(path)}
<main id="main">
${body}
</main>
${footer()}
${whatsappFab(path === '/' ? 'home page' : title.split(' | ')[0])}
<script>window.ASH=${JSON.stringify(clientData)};</script>
<script src="/assets/main.js?v=${JS_V}" defer></script>
</body>
</html>
`;
}

export function pageHero({ trail, eyebrow, h1, lede, ctas = '' }) {
  return `<section class="page-hero"><div class="wrap">
  ${breadcrumbs(trail)}
  ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}
  <h1>${h1}</h1>
  ${lede ? `<p class="lede">${lede}</p>` : ''}
  ${ctas ? `<div class="btn-row">${ctas}</div>` : ''}
</div></section>`;
}

export function ctaBand(title = 'Ready for a fixed price?', text = 'Tell us about your project or the home you\'re buying. You\'ll get a clear, fixed quote, usually the same day.') {
  return `<section class="section-tight"><div class="wrap"><div class="cta-band">
  <div class="stack-sm"><h2>${title}</h2><p>${text}</p></div>
  <div class="btn-row"><a class="btn btn-amber" href="/contact/">Get a price</a><a class="btn btn-ghost" style="color:#fff;border-color:#fff" href="/snagging-prices/">Snagging prices</a></div>
</div></div></section>`;
}
