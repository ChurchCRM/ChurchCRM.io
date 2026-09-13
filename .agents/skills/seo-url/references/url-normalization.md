# ChurchCRM.io URL rules

ChurchCRM.io is a multilingual Hugo site hosted on GitHub Pages. Preserve existing public URLs unless there is a documented reason to change one.

## Canonical form

- `hugo.toml` intentionally uses `uglyURLs = true`; do not change it without a site-wide migration plan.
- Canonical, hreflang, navigation, and sitemap URLs must not end in `index.html`.
- Every translated page has its own self-referencing canonical. Do not canonicalize translations to English.
- `x-default` points to the English/default site.
- Canonical URLs must be absolute and emitted once in `<head>`.

The implementation lives in `layouts/partials/head.html` and `layouts/sitemap.xml`. Reuse it instead of adding page-specific tags.

## Adding or renaming content

Before changing a path, check navigation, translations, inbound references, generated taxonomy pages, and `content/redirect-mapping.csv`.

When a published path changes:

1. Add the old path to the page's `aliases` frontmatter.
2. Add the mapping to `content/redirect-mapping.csv`.
3. Update internal links to the canonical path.
4. Build and run the URL validator.

GitHub Pages cannot provide repository-defined HTTP 301/308 redirects. Hugo aliases therefore produce a meta-refresh page with a canonical tag. Do not claim it is an HTTP redirect. Do not try to replace GitHub Pages' native `/index.html` behavior; canonical consolidation handles it.

For a new translation, follow the existing language directory and URL pattern and verify reciprocal hreflang output. Do not invent server-side language detection or fallback behavior that static hosting does not provide.

## Validation

```bash
hugo --minify
node scripts/check-url-normalization.mjs
```

The validator checks canonicals, hreflang, sitemap entries, aliases, and the redirect mapping. Inspect the built page when changing templates. Use Search Console evidence before proposing broader URL consolidation.
