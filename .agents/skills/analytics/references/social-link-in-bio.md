# Reference: Social link-in-bio landing pages

Permanent profile URLs that never change per campaign, while GA4 still answers: which network -> which CTA -> demo / install / docs / GitHub.

## URLs

| Profile link (use in bio) | Source file |
|---|---|
| `churchcrm.io/instagram` | `content/en/instagram.md` |
| `churchcrm.io/facebook` | `content/en/facebook.md` |
| `churchcrm.io/linkedin` | `content/en/linkedin.md` |
| `churchcrm.io/x` | `content/en/x.md` |

Each is a real static page (`type: linkinbio`, layout `layouts/linkinbio/single.html`) built as `/<name>.html`; GitHub Pages serves it extensionless. No redirect, so nothing to lose in transit. To add a network: copy one content file, change `network`, `network_label`, `profile_url`.

## Attribution model

- The page sets `data-social-network` on `<body>` (from the `network` front-matter param).
- `conversion-tracking.js` fires `link_in_bio_view` once on load and adds `social_network` to every existing click event (`demo_click`, `install_click`, `docs_click`, `github_click`, ...) fired on that page. CTAs use `data-ga-location="link_in_bio"`.
- **Internal CTA links deliberately carry no UTMs.** A UTM on an internal link starts a new GA4 session and overwrites the original source. Network attribution comes from the `social_network` event param instead.
- Pages are `noindex` and excluded from the sitemap (thin, campaign-support pages; canonical is self-referential).

## Campaign posts

Posts with clickable links keep normal UTM deep links, e.g. `/demo.html?utm_source=instagram&utm_medium=social&utm_campaign=<campaign>`. Profile/bio links use the vanity URLs above. Use lowercase `utm_source` = network, `utm_medium` = `social`.

## Reading it in GA4

- Register `social_network` as an event-scoped custom dimension (GA4 Admin > Custom definitions) - required before it appears in reports.
- Funnel: `link_in_bio_view` -> `demo_click` / `install_click` / `docs_click` / `github_click`, broken down by `social_network`.
- Limits are the same as in `conversion-events.md`: clicks only, no confirmed demo sessions or installs.

## Validation

`hugo --minify`, `node scripts/check-url-normalization.mjs`, `node scripts/check-metadata.mjs`, `npx playwright test` (covers all four pages: noindex, view event, click event with `social_network` and `link_in_bio` location).
Not validated: arrival of events in the live GA4 property (needs account access).
