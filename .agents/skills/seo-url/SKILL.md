---
name: seo-url
description: URL normalization, canonical tags, hreflang/multilingual content, redirects, and SEO audits for churchcrm.io (the Hugo marketing site, not the CRM application). One of several churchcrm.io skills — see also blog-post for content creation. Use this whenever adding or renaming a page, adding a language variant, touching layouts/partials/head.html or layouts/sitemap.xml, editing content/redirect-mapping.csv, or the user mentions canonical URLs, duplicate content, index.html suffixes, hreflang, or SEO on this site.
---

# churchcrm.io SEO & URL Skills

Project-specific skills for AI agents and developers working on churchcrm.io's URL structure and SEO. This is one of several churchcrm.io skills; see also [`blog-post`](../blog-post/SKILL.md) for content creation.

## SEO & URL Structure

| Skill | When to Use |
|-------|------------|
| [URL Rules](./references/url-normalization.md) | Canonicals, hreflang, aliases, redirects, sitemaps, and URL changes |
| [Metadata Rules](./references/metadata-foundation.md) | Titles, social metadata, JSON-LD, robots, product claims, and validation |

## Related

- Validation scripts: `scripts/check-url-normalization.mjs`, `scripts/check-metadata.mjs`
- Redirect mapping: `content/redirect-mapping.csv`
- Hugo config: `hugo.toml`
