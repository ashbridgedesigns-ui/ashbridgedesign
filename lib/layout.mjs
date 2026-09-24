import site, { prices } from '../site.config.mjs';

export const gbp = (n) => '£' + Number(n).toLocaleString('en-GB');
export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const slug = (s) => String(s).toLowerCase().replace(/&/g, 'and').replace(/['’]/g, '').replace(/\(.*?\)/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const NAV = [
  ['/extension-design/', 'Extension design'],
  ['/structural-calculations/', 'Structural calcs'],
  ['/new-build-snagging/', 'New-build snagging'],
  ['/extension-design-prices/', 'Prices'],
  ['/areas/', 'Areas'],
  ['/guides/', 'Guides'],
  ['/about/', 'About'],
];

export const tel = site.phone ? site.phone.replace(/\s+/g, '') : '';

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
        <p><a href="mailto:${site.email}">${site.email}</a>${site.phone ? `<br><a href="tel:${tel}">${esc(site.phone)}</a>` : ''}</p>
      </div>
      <div><h4>Design</h4><ul>
        <li><a href="/extension-design/">Extension design</a></li>
        <li><a href="/planning-drawings/">Planning drawings</a></li>
        <li><a href="/building-regulations-drawings/">Building regs drawings</a></li>
        <li><a href="/structural-calculations/">Structural calculations</a></li>
        <li><a href="/loft-conversion-drawings/">Loft conversions</a></li>
        <li><a href="/garage-conversion-drawings/">Garage conversions</a></li>
        <li><a href="/can-i-extend/">Can I extend?</a></li>
      </ul></div>
      <div><h4>Inspections</h4><ul>
        <li><a href="/new-build-snagging/">New-build snagging</a></li>
        <li><a href="/pre-completion-inspection/">Pre-completion inspection</a></li>
        <li><a href="/two-year-warranty-inspection/">2-year warranty inspection</a></li>
        <li><a href="/snagging-prices/">Snagging prices</a></li>
        <li><a href="/sample-snagging-report/">Sample report</a></li>
      </ul></div>
      <div><h4>Company</h4><ul>
        <li><a href="/about/">About</a></li>
        <li><a href="/areas/">Areas we cover</a></li>
        <li><a href="/projects/">Projects</a></li>
        <li><a href="/guides/">Guides</a></li>
        <li><a href="/contact/">Contact</a></li>
        <li><a href="/privacy/">Privacy</a></li>
      </ul></div>
    </div>
    <div class="footer-base">
      <span>© ${year} ${esc(site.name)}${site.companyNumber ? ` · Registered in England, company no. ${esc(site.companyNumber)}` : ''}</span>
      <span>${site.vatRegistered ? 'Prices include VAT' : 'Not VAT registered: no VAT to add to any price'}</span>
    </div>
  </div>
</footer>
<div class="action-bar" aria-label="Quick actions">
  ${site.phone ? `<a href="tel:${tel}">Call</a>` : `<a href="mailto:${site.email}">Email</a>`}
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
  description: 'Engineer-led extension design, planning and building regulations drawings, structural calculations and new-build snagging inspections across England.',
  url: site.url,
  logo: site.url + '/assets/logo.jpg',
  email: site.email,
  ...(site.phone ? { telephone: site.phone } : {}),
  address: { '@type': 'PostalAddress', addressLocality: 'Birmingham', addressRegion: 'West Midlands', addressCountry: 'GB' },
  areaServed: { '@type': 'Country', name: 'England' },
  priceRange: '£150–£2,195',
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
  const clientData = { prices, site: { email: site.email, depositLink: site.depositLink } };
  return `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${site.url}${path}">
${noindex ? '<meta name="robots" content="noindex">' : ''}
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${site.url}${path}">
<meta property="og:image" content="${site.url}/assets/logo.jpg">
<meta name="theme-color" content="#3C4854">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@100..125,600..800&family=Figtree:wght@400;500;600;700&display=swap">
<link rel="stylesheet" href="/assets/styles.css">
${lds.map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n')}
</head>
<body>
${header(path)}
<main id="main">
${body}
</main>
${footer()}
<script>window.ASH=${JSON.stringify(clientData)};</script>
<script src="/assets/main.js" defer></script>
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
