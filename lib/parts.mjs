import site, { prices } from '../site.config.mjs';
import { gbp } from './layout.mjs';

// Drafting-style elevation: existing house in slate, new extension in amber.
export const heroArt = `<svg viewBox="0 0 560 430" role="img" aria-labelledby="ha-t" xmlns="http://www.w3.org/2000/svg">
<title id="ha-t">Technical drawing of a house with a new single-storey extension highlighted in amber</title>
<defs><pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" stroke="#DDE1E5" stroke-width="1"/></pattern></defs>
<rect width="560" height="430" fill="#FAF8F4"/><rect width="560" height="430" fill="url(#grid)"/>
<g stroke="#9CA3AE" stroke-width="1" stroke-dasharray="4 5" fill="none"><path d="M20 360H540"/><path d="M60 90V380"/><path d="M300 30V380"/><path d="M470 200V380"/></g>
<g fill="none" stroke="#3C4854" stroke-width="3" stroke-linejoin="round">
  <path d="M80 360V190L190 100L300 190V360Z" fill="#FFFFFF"/>
  <path d="M190 100V70"/><rect x="178" y="58" width="24" height="42" fill="#FFFFFF"/>
  <rect x="110" y="220" width="46" height="42" fill="#EEF0F2"/><rect x="224" y="220" width="46" height="42" fill="#EEF0F2"/>
  <rect x="110" y="290" width="46" height="42" fill="#EEF0F2"/><rect x="170" y="290" width="40" height="70" fill="#EEF0F2"/>
</g>
<g stroke="#26303A" stroke-width="3" stroke-linejoin="round">
  <path d="M300 250H470V360H300Z" fill="#FBB424"/>
  <path d="M292 250H478" fill="none"/>
  <rect x="330" y="280" width="110" height="80" fill="#FFF3D6"/><path d="M385 280V360" fill="none"/>
</g>
<g font-family="Figtree, Arial, sans-serif" font-size="13" fill="#3C4854">
  <path d="M300 395H470" stroke="#3C4854" stroke-width="1.5"/><path d="M300 388V402M470 388V402" stroke="#3C4854" stroke-width="1.5"/>
  <text x="385" y="418" text-anchor="middle" font-weight="700">6000</text>
  <path d="M500 250V360" stroke="#3C4854" stroke-width="1.5"/><path d="M493 250H507M493 360H507" stroke="#3C4854" stroke-width="1.5"/>
  <text x="514" y="310" font-weight="700">3000</text>
  <path d="M30 190V360" stroke="#3C4854" stroke-width="1.5"/><path d="M23 190H37M23 360H37" stroke="#3C4854" stroke-width="1.5"/>
</g>
<g font-family="Archivo, Arial, sans-serif" font-weight="800" font-size="12" letter-spacing="1.5">
  <rect x="316" y="200" width="178" height="26" fill="#26303A"/><text x="405" y="218" text-anchor="middle" fill="#FBB424">PROPOSED EXTENSION</text>
  <text x="82" y="44" fill="#9CA3AE">SIDE ELEVATION · EXISTING + PROPOSED · 1:100</text>
</g>
<g stroke="#26303A" stroke-width="2" fill="none"><circle cx="420" cy="238" r="0"/></g>
<path d="M296 250L300 246L304 250" stroke="#26303A" fill="none"/>
</svg>`;

export const inspectArt = `<svg viewBox="0 0 420 300" role="img" aria-labelledby="ia-t" xmlns="http://www.w3.org/2000/svg">
<title id="ia-t">Illustration of a wall being inspected with snags marked</title>
<rect width="420" height="300" fill="#FFFFFF"/>
<g stroke="#DDE1E5"><path d="M0 60H420M0 120H420M0 180H420M0 240H420"/><path d="M70 0V60M210 0V60M350 0V60M140 60V120M280 60V120M70 120V180M210 120V180M350 120V180M140 180V240M280 180V240M70 240V300M210 240V300M350 240V300"/></g>
<g fill="none" stroke="#B4541F" stroke-width="2.5"><circle cx="120" cy="95" r="22"/><circle cx="300" cy="200" r="26"/></g>
<g font-family="Archivo, Arial, sans-serif" font-weight="800" font-size="13"><rect x="140" y="62" width="30" height="22" fill="#B4541F"/><text x="155" y="78" text-anchor="middle" fill="#fff">01</text><rect x="322" y="166" width="30" height="22" fill="#B4541F"/><text x="337" y="182" text-anchor="middle" fill="#fff">02</text></g>
<path d="M98 110 L112 92 L118 102 L130 84" stroke="#3C4854" stroke-width="2" fill="none"/>
<g transform="translate(220 40) rotate(20)"><circle cx="0" cy="0" r="40" fill="rgba(251,180,36,.18)" stroke="#26303A" stroke-width="5"/><path d="M28 28L70 70" stroke="#26303A" stroke-width="10" stroke-linecap="round"/></g>
</svg>`;

export function snagQuoteTool(heading = 'Instant snagging price') {
  return `<div class="tool" data-tool="snag-quote" id="quote">
  <div class="stack-sm"><p class="eyebrow">Instant price</p><h2>${heading}</h2><p class="muted">Fixed prices by bedrooms. Book online with a ${gbp(prices.deposit)} deposit.</p></div>
  <div class="tool-grid">
    <div class="field"><label for="sq-beds">Bedrooms</label><select id="sq-beds" name="beds">
      ${prices.snag.map((r) => `<option value="${r.beds}"${r.beds === '3' ? ' selected' : ''}>${r.label}</option>`).join('')}
      <option value="6">6 or more</option></select></div>
    <div class="field"><label for="sq-pc">Property postcode</label><input id="sq-pc" name="postcode" autocomplete="postal-code" placeholder="e.g. B76 1AA"><span class="hint">So we can confirm who will inspect</span></div>
  </div>
  <fieldset class="field"><legend>Inspection</legend><div class="choice">
    <label><input type="radio" name="type" value="snag" checked> Snagging survey</label>
    <label><input type="radio" name="type" value="pci"> Pre-completion</label>
    <label><input type="radio" name="type" value="both"> Pre-completion + snagging</label>
    <label><input type="radio" name="type" value="warranty"> 2-year warranty check</label>
    <label><input type="radio" name="type" value="reinspect"> Re-inspection</label>
  </div></fieldset>
  <div class="result" aria-live="polite"></div>
</div>`;
}

export function designQuoteTool() {
  return `<div class="tool" data-tool="design-quote" id="design-quote">
  <div class="stack-sm"><p class="eyebrow">Instant design price</p><h2>What will my drawings cost?</h2><p class="muted">Fixed “from” prices. We confirm the exact fee after a free review of your project.</p></div>
  <div class="tool-grid">
    <div class="field"><label for="dq-p">Project</label><select id="dq-p" name="project">
      ${prices.design.map((d) => `<option value="${d.id}">${d.name}</option>`).join('')}
      <option value="beam">Wall removal / steel beam only</option></select></div>
  </div>
  <fieldset class="field"><legend>What do you need?</legend><div class="choice">
    <label><input type="radio" name="stage" value="s1"> Planning drawings</label>
    <label><input type="radio" name="stage" value="s2"> Building regs drawings</label>
    <label><input type="radio" name="stage" value="both" checked> Both stages</label>
    <label><input type="radio" name="stage" value="complete"> Complete, with structural calcs</label>
  </div></fieldset>
  <div class="result" aria-live="polite"></div>
</div>`;
}

export function pciTool() {
  return `<div class="tool" data-tool="pci-window" id="window">
  <div class="stack-sm"><p class="eyebrow">Inspection window checker</p><h2>When can my home be inspected?</h2><p class="muted">For homes bought from an NHQB-registered developer, under Code V2.</p></div>
  <div class="tool-grid"><div class="field"><label for="pci-ntc">Date your Notice to Complete was served</label><input id="pci-ntc" name="ntc" type="date"></div></div>
  <div class="result" aria-live="polite"></div>
</div>`;
}

export function canExtendTool() {
  return `<div class="tool" data-tool="can-extend" id="check">
  <div class="stack-sm"><p class="eyebrow">Feasibility check</p><h2>Can I extend without planning permission?</h2><p class="muted">Answer five questions for a first guide, based on the permitted development rules for houses in England.</p></div>
  <fieldset class="field"><legend>Your home</legend><div class="choice">
    <label><input type="radio" name="home" value="detached"> Detached house</label>
    <label><input type="radio" name="home" value="semi" checked> Semi-detached</label>
    <label><input type="radio" name="home" value="terraced"> Terraced</label>
    <label><input type="radio" name="home" value="flat"> Flat or maisonette</label>
  </div></fieldset>
  <fieldset class="field"><legend>What do you want to build?</legend><div class="choice">
    <label><input type="radio" name="ext" value="rear1" checked> Single-storey rear</label>
    <label><input type="radio" name="ext" value="rear2"> Two-storey rear</label>
    <label><input type="radio" name="ext" value="side"> Side extension</label>
    <label><input type="radio" name="ext" value="loft"> Loft dormer</label>
    <label><input type="radio" name="ext" value="garage"> Garage conversion</label>
  </div></fieldset>
  <div class="tool-grid">
    <div class="field"><label for="ce-depth">How far out from the back wall? (metres)</label><input id="ce-depth" name="depth" type="number" min="0" max="15" step="0.5" value="3"><span class="hint">For rear extensions</span></div>
    <div class="field"><label for="ce-area">Is the house in…</label><select id="ce-area" name="area"><option value="none">None of these</option><option value="conservation">A conservation area, National Park or National Landscape (AONB)</option><option value="listed">A listed building</option></select></div>
    <div class="field"><label for="ce-nb">Built in the last 15 years on an estate?</label><select id="ce-nb" name="newbuild"><option value="no">No</option><option value="yes">Yes</option></select></div>
  </div>
  <div class="result" aria-live="polite"></div>
</div>`;
}

export function designPriceTable() {
  const rows = prices.design.map((d) => `<tr><td><strong>${d.name}</strong></td><td class="num">${gbp(d.s1)}</td><td class="num">${gbp(d.s2)}</td><td class="num"><strong class="best">${gbp(d.both)}</strong><br><span class="small muted">save ${gbp(d.s1 + d.s2 - d.both)}</span></td><td class="num">${gbp(d.complete)}</td></tr>`).join('');
  return `<div class="table-wrap"><table>
  <thead><tr><th>Project</th><th class="num">Stage 1<br>Planning</th><th class="num">Stage 2<br>Building regs</th><th class="num">Both stages</th><th class="num">Complete<br>+ structural calcs</th></tr></thead>
  <tbody>${rows}
  <tr><td><strong>Wall removal / single steel beam</strong></td><td colspan="3" class="muted">Structural calculations only</td><td class="num">${gbp(prices.beamCalc)}</td></tr>
  <tr><td><strong>Wraparound, multiple projects, conservation or listed</strong></td><td colspan="4" class="muted">Fixed quote after a free 15-minute scope call</td></tr>
  </tbody></table></div>`;
}

export function snagPriceTable() {
  const rows = prices.snag.map((r) => `<tr><td><strong>${r.label}</strong></td><td class="num">${gbp(r.price)}</td><td class="num">${gbp(r.price + prices.preAndPost)}</td></tr>`).join('');
  return `<div class="table-wrap"><table>
  <thead><tr><th>Home</th><th class="num">Snagging survey or<br>pre-completion inspection</th><th class="num">Pre-completion<br>+ snagging</th></tr></thead>
  <tbody>${rows}<tr><td><strong>6+ bedrooms</strong></td><td colspan="2" class="num muted">Fixed quote</td></tr></tbody></table></div>
  <div class="table-wrap" style="margin-top:16px"><table>
  <thead><tr><th>Add-on</th><th class="num">Price</th></tr></thead>
  <tbody>
    <tr><td>Re-inspection: checking the developer's fixes</td><td class="num">${gbp(prices.reinspection)}</td></tr>
    <tr><td>2-year warranty inspection</td><td class="num">${gbp(prices.warranty)} <span class="small muted">(${gbp(prices.warrantyReturning)} for returning clients)</span></td></tr>
    <tr><td>Neighbours on the same development booking together</td><td class="num">10% off each</td></tr>
    <tr><td>Travel supplement: Cornwall, Cumbria and the Scottish border (TR, CA and TD postcodes)</td><td class="num">${gbp(prices.travel)}</td></tr>
  </tbody></table></div>`;
}

export const engineerBand = `<section class="section section-dark"><div class="wrap engineer">
  <div class="stamp">MSc<br>CIVIL ENG<small>15 YEARS</small></div>
  <div class="stack">
    <p class="eyebrow">Why engineer-led matters</p>
    <h2>Many drawing firms use drafters, and many snagging firms use ex-tradespeople. Ashbridge is run by a civil engineer.</h2>
    <ul class="ticks">
      <li><strong>Drawings designed with building control in mind:</strong> beams, foundations and drainage are considered from day one, not bolted on later.</li>
      <li><strong>Structural calculations in-house:</strong> no third-party engineer, no extra 1–3 week wait, no extra invoice.</li>
      <li><strong>Inspections to an engineer's standard:</strong> we check against building regulations and warranty tolerances, not just a decorator's checklist.</li>
    </ul>
  </div>
</div></section>`;

export const newsletterNote = '';
export { site, prices };
