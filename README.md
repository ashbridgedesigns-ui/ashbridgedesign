# ashbridgedesign.co.uk

Static website for Ashbridge Design. No frameworks and no dependencies: just Node 18+.

```
node build.mjs     # builds 83 pages into dist/
node serve.mjs     # preview at http://localhost:4321
```

## Where things live

| What | File |
|---|---|
| Phone, email, founder name, company no., deposit link, **all prices** | `site.config.mjs` |
| Core pages (home, services, prices, tools, about, contact, privacy) | `content/pages.mjs` |
| Guides | `content/guides.mjs` |
| Area pages + local notes | `content/areas.mjs`, places in `data/areas.csv`, location data in `data/geo.json` (re-run `node tools/fetch-geo.mjs` after adding places) |
| Header, footer, SEO tags, schema | `lib/layout.mjs` |
| Enquiry form email sender | `api/enquiry.js` (Vercel function) |
| Tools (instant quotes, inspection window, “Can I extend?”) | `assets/main.js`, markup in `lib/parts.mjs` |
| Styles / brand colours | `assets/styles.css` |

Change a price in `site.config.mjs`, rebuild, and every page, table, tool and schema updates.

## Before going live

1. **Fill `site.config.mjs`:** phone (turns on the Call buttons), founder name, qualifications, memberships, photo, LinkedIn, PI insurance, company number, Google reviews link and other profiles (`sameAs`). Each one appears on About, in every guide byline and in the Person/Organization schema as soon as it's set.
2. **Deposit payments:** create a £49 Stripe Payment Link and paste it into `depositLink`. Until then, “Book” goes to the enquiry form.
3. **Logo:** replace `assets/logo.jpg` with a transparent SVG from the designer, and update the `<img>` tags in `lib/layout.mjs`.
4. **Photos:** add real inspection and project photos as they come in. The site currently uses drawn illustrations only. Nothing is stock and nothing is invented.
5. **Sample report:** add a real anonymised PDF to `/sample-snagging-report/`.
6. **Area pages:** every place in `data/areas.csv` gets an indexed page (`INDEX_ALL_TIERS` in `content/areas.mjs`). Setting it to `false` indexes only **tier 1** pages and makes the rest `noindex, follow`. Add researched local notes to `LOCAL` in `content/areas.mjs` to make town pages more distinct.
7. Check `/privacy/` with the final company details.

## Deploy (Vercel)

1. In Vercel, **Add New → Project** and import `ashbridgedesigns-ui/ashbridgedesign`. `vercel.json` sets the build (`node build.mjs`, output `dist`), so leave the framework as **Other**.
2. **Enquiry emails:** create a free account at resend.com, verify the domain `ashbridgedesign.co.uk` (Resend gives DNS records for GoDaddy), and create an API key. In Vercel → Project → Settings → Environment Variables, add:
   - `RESEND_API_KEY`: the key
   - `ENQUIRY_TO`: the inbox for enquiries (required)
   - `ENQUIRY_FROM`: optional sender (defaults to website@ashbridgedesign.co.uk)

   Then redeploy. Until this is set, the form shows an error asking people to email instead.
3. **Domains:** in Vercel → Project → Settings → Domains, add `ashbridgedesign.co.uk`, `www.ashbridgedesign.co.uk`, `ashbridgedesign.com` and `www.ashbridgedesign.com`. The main address is `https://www.ashbridgedesign.co.uk`. `vercel.json` 301-redirects the other three to it. At GoDaddy, set the DNS records Vercel shows: an A record for each bare domain (`@`) and a CNAME for each `www`.
4. Every push to `main` deploys automatically.
5. **Bing and other IndexNow engines:** after a deploy goes live, run `node tools/indexnow.mjs` to submit every page, or `node tools/indexnow.mjs /path/ /other-path/` for just the changed pages. The key is in `site.config.mjs` and is served at `/<key>.txt`.
6. Submit `https://www.ashbridgedesign.co.uk/sitemap.xml` in Google Search Console, and link the site from the Google Business Profile.