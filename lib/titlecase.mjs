// Title Case for page headings (h1–h4), applied at build time.
// Style: minor words (articles, short conjunctions and prepositions) stay lowercase unless
// they start or end the heading or start a sentence/clause; hyphenated words capitalise the first part
// only ("New-build Snagging", "Pre-completion"); words that already contain capitals after
// the first letter (NHQB, MSc, CALA, B76) are left exactly as written.
const MINOR = new Set(['a', 'an', 'the', 'and', 'but', 'or', 'nor', 'for', 'so', 'yet', 'as', 'at', 'by', 'in', 'of', 'off', 'on', 'per', 'to', 'via', 'vs', 'upon']);

function titleCaseText(text, state) {
  return text.replace(/(&[a-z]+;|&#\d+;)|([A-Za-z0-9][A-Za-z0-9'’\-]*)|([.:?!])/g, (m, entity, word, stop) => {
    if (entity) return m;
    if (stop) { if (stop !== ',') state.start = true; return m; }
    const first = state.start || state.index === 0 || state.index === state.total - 1;
    state.index++; state.start = false;
    if (/[A-Z]/.test(word.slice(1))) return word; // acronyms, mixed case, codes
    const lower = word.toLowerCase();
    if (!first && MINOR.has(lower)) return lower;
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
}

function titleCaseHtml(inner) {
  const parts = inner.split(/(<[^>]+>)/);
  const total = parts.filter((p) => !p.startsWith('<')).join(' ').replace(/&[a-z]+;|&#\d+;/g, ' ').match(/[A-Za-z0-9][A-Za-z0-9'’\-]*/g)?.length || 0;
  const state = { index: 0, start: true, total };
  // Transform text between tags only; markup is passed through untouched.
  return parts.map((part) => (part.startsWith('<') ? part : titleCaseText(part, state))).join('');
}

// Title Case a plain string (e.g. breadcrumb labels).
export function titleCase(text) { return titleCaseHtml(text); }

// Title Case the visible labels of buttons: .btn links, <button> elements and the
// mobile action bar. Only the text between tags changes.
export function titleCaseButtons(html) {
  return html
    .replace(/<a\b([^>]*\bclass="[^"]*\bbtn\b[^"]*"[^>]*)>([\s\S]*?)<\/a>/g, (m, attrs, inner) => `<a${attrs}>${titleCaseHtml(inner)}</a>`)
    .replace(/<button\b([^>]*)>([\s\S]*?)<\/button>/g, (m, attrs, inner) => `<button${attrs}>${titleCaseHtml(inner)}</button>`)
    .replace(/(<div class="action-bar"[^>]*>)([\s\S]*?)(<\/div>)/, (m, open, inner, close) => open + inner.replace(/(<a\b[^>]*>)([^<]*)(<\/a>)/g, (x, a, t, c) => a + titleCaseHtml(t) + c) + close);
}

export function titleCaseHeadings(html) {
  return html.replace(/<(h[1-4])(\s[^>]*)?>([\s\S]*?)<\/\1>/g, (m, tag, attrs = '', inner) => {
    if (/class="[^"]*\bsnag-title\b/.test(attrs)) return m; // example report entries read as sentences
    return `<${tag}${attrs}>${titleCaseHtml(inner)}</${tag}>`;
  });
}
