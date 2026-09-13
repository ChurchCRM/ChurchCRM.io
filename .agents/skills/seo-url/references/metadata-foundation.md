# ChurchCRM.io metadata rules

Search metadata is implemented in `layouts/partials/head.html`, `layouts/_default/faq.html`, and `layouts/blog/single.html`. Keep claims consistent with the current `ChurchCRM/CRM` source and release notes.

## JSON-LD

When inserting an individual `jsonify` value into hand-written JSON-LD, pipe it through `safeJS` to prevent Hugo's script-context escaping from double-encoding it:

```go
"headline": {{ .Title | jsonify | safeJS }}
```

When the entire script body is produced by one `jsonify` call over a `dict` or `slice`, do not add `safeJS` to individual fields.

## Current behavior

- Blog posts use `og:type=article`; other pages use `website`.
- `featured_image` must resolve to a built asset. The site-wide fallback is `images/home-feature.png`.
- Taxonomy and term pages use `noindex, follow`; other normal pages use `index, follow`.
- Alias pages are generated separately by Hugo and rely on their canonical and meta-refresh output.
- Do not broaden operating-system, hosting, security, integration, locale, or feature claims without verifying them against authoritative product sources.

## Validation

Build the site, then run the committed metadata validator. A successful Hugo build alone does not prove that JSON-LD or referenced images are valid.

```bash
hugo --minify
node scripts/check-metadata.mjs
```
