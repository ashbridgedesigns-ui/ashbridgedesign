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
| Area pages + local notes | `content/areas.mjs`, data in `data/areas.csv` |
| Header, footer, SEO tags, schema | `lib/layout.mjs` |
| Tools (instant quotes, inspection window, “Can I extend?”) | `assets/main.js`, markup in `lib/parts.mjs` |
| Styles / brand colours | `assets/styles.css` |

Change a price in `site.config.mjs`, rebuild, and every page, table, tool and schema updates.

## Before going live

1. **Fill `site.config.mjs`:** phone (turns on the Call buttons), founder name, company number, Google reviews link.
2. **Deposit payments:** create a £49 Stripe Payment Link and paste it into `depositLink`. Until then, “Book” goes to the enquiry form.
3. **Logo:** replace `assets/logo.jpg` with a transparent SVG from the designer, and update the `<img>` tags in `lib/layout.mjs`.
4. **Photos:** add real inspection and project photos as they come in. The site currently uses drawn illustrations only. Nothing is stock and nothing is invented.
5. **Sample report:** add a real anonymised PDF to `/sample-snagging-report/`.
6. **Area pages:** 48 Tier 1 town pages are live, built from the council data. Add researched local notes (developments, conservation areas) to `LOCAL` in `content/areas.mjs`, then promote Tier 2 places by changing their tier in `data/areas.csv`.
7. Check `/privacy/` with the final company details.

## Deploy (Netlify, free tier)

1. Push this folder to a GitHub repo and import it in Netlify. `netlify.toml` already sets the build.
2. Add the domains `ashbridgedesign.co.uk` (primary), `www.ashbridgedesign.co.uk`, `ashbridgedesign.com` and `www.ashbridgedesign.com`. The redirects in `netlify.toml` send everything to `https://ashbridgedesign.co.uk` with 301s.
3. At GoDaddy, point the DNS for both domains at Netlify (Netlify shows the records).
4. **Forms:** enquiries arrive in Netlify → Forms. Set up an email notification to hello@ashbridgedesign.co.uk.
5. Submit `https://ashbridgedesign.co.uk/sitemap.xml` in Google Search Console, and link the site from the Google Business Profile.
