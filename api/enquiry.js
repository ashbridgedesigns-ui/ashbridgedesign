// Vercel function: receives the enquiry form and emails it via Resend.
// Environment variables (Vercel → Project → Settings → Environment Variables):
//   RESEND_API_KEY  required — from resend.com
//   ENQUIRY_TO      where enquiries go (default hello@ashbridgedesign.co.uk)
//   ENQUIRY_FROM    verified sender (default website@ashbridgedesign.co.uk)

const MAX_ATTACH = 4 * 1024 * 1024; // Vercel caps request bodies at 4.5 MB
const FIELDS = ['name', 'email', 'phone', 'postcode', 'service', 'message'];

const esc = (s) => String(s || '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export async function POST(request) {
  let form;
  try {
    form = await request.formData();
  } catch {
    return Response.json({ ok: false, error: 'Unreadable form' }, { status: 400 });
  }

  if (form.get('company')) return Response.json({ ok: true }); // honeypot: silently drop bots

  const data = Object.fromEntries(FIELDS.map((f) => [f, String(form.get(f) || '').trim()]));
  if (!data.name || !data.email || !data.postcode || !data.message || !/^\S+@\S+\.\S+$/.test(data.email)) {
    return Response.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error('RESEND_API_KEY is not set; enquiry not sent', data);
    return Response.json({ ok: false, error: 'Email not configured' }, { status: 500 });
  }

  const attachments = [];
  let total = 0;
  for (const file of form.getAll('files')) {
    if (typeof file === 'string' || !file.size) continue;
    total += file.size;
    if (total > MAX_ATTACH) break;
    attachments.push({ filename: file.name, content: Buffer.from(await file.arrayBuffer()).toString('base64') });
  }

  const rows = FIELDS.map((f) => `<tr><td style="padding:6px 12px 6px 0;color:#5B6672;vertical-align:top">${f}</td><td style="padding:6px 0;white-space:pre-wrap">${esc(data[f])}</td></tr>`).join('');
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: `Ashbridge Website <${process.env.ENQUIRY_FROM || 'website@ashbridgedesign.co.uk'}>`,
      to: [process.env.ENQUIRY_TO || 'hello@ashbridgedesign.co.uk'],
      reply_to: data.email,
      subject: `New enquiry: ${data.service || 'General'} · ${data.postcode} · ${data.name}`,
      html: `<h2 style="font-family:Arial">New website enquiry</h2><table style="font-family:Arial;font-size:14px">${rows}</table>${attachments.length ? `<p>${attachments.length} attachment(s) included.</p>` : ''}`,
      attachments,
    }),
  });

  if (!res.ok) {
    console.error('Resend error', res.status, await res.text());
    return Response.json({ ok: false, error: 'Send failed' }, { status: 502 });
  }
  return Response.json({ ok: true });
}
