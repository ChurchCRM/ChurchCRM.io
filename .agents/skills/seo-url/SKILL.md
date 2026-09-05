---
name: seo-url
description: URL normalization, canonical tags, hreflang/multilingual content, redirects, and SEO audits for churchcrm.io (the Hugo marketing site, not the CRM application). One of several churchcrm.io skills — see also blog-post for content creation. Use this whenever adding or renaming a page, adding a language variant, touching layouts/partials/head.html or layouts/sitemap.xml, editing content/redirect-mapping.csv, or the user mentions canonical URLs, duplicate content, index.html suffixes, hreflang, or SEO on this site.
metadata:
  author: ChurchCRM
  version: "1.0.0"
---

# churchcrm.io SEO & URL Skills

Project-specific skills for AI agents and developers working on churchcrm.io's URL structure and SEO. This is one of several churchcrm.io skills; see also [`blog-post`](../blog-post/SKILL.md) for content creation.

## SEO & URL Structure

| Skill | When to Use |
|-------|------------|
| [URL Normalization](./references/url-normalization.md) | Hugo-specific canonical/hreflang/sitemap patterns; adding or renaming pages |
| [Canonical Consolidation](./references/canonical-consolidation.md) | Implementing `<link rel="canonical">` strategy for URL duplicates |
| [Redirect Strategy](./references/redirect-strategy.md) | Deciding between redirects and canonical consolidation on static hosting (GitHub Pages) |
| [Multilingual Content](./references/multilingual-content.md) | Language variants, hreflang tags, language-specific routing |
| [SEO Audit Methodology](./references/seo-audit-methodology.md) | 4-phase framework for auditing URL patterns and duplicate content |
| [Metadata Foundation](./references/metadata-foundation.md) | Titles, OG/Twitter tags, JSON-LD structured data, robots — including a critical `jsonify`/`safeJS` gotcha for any hand-written JSON-LD `<script>` block |

## Related

- Validation scripts: `scripts/check-url-normalization.mjs`, `scripts/check-metadata.mjs`
- Redirect mapping: `content/redirect-mapping.csv`
- Hugo config: `hugo.toml`
