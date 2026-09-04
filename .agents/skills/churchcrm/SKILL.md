---
name: churchcrm-io
description: Skills for churchcrm.io (Hugo marketing site) covering URL normalization, canonicalization, hreflang/multilingual content, and SEO audits. Use when adding pages, managing language variants, or making URL/redirect changes on this site.
metadata:
  author: ChurchCRM
  version: "1.0.0"
---

# churchcrm.io Development Skills

Project-specific skills for AI agents and developers working on the churchcrm.io Hugo static site.

## SEO & URL Structure

| Skill | When to Use |
|-------|------------|
| [URL Normalization](./url-normalization.md) | Hugo-specific canonical/hreflang/sitemap patterns; adding or renaming pages |
| [Canonical Consolidation](./canonical-consolidation.md) | Implementing `<link rel="canonical">` strategy for URL duplicates |
| [Redirect Strategy](./redirect-strategy.md) | Deciding between redirects and canonical consolidation on static hosting (GitHub Pages) |
| [Multilingual Content](./multilingual-content.md) | Language variants, hreflang tags, language-specific routing |
| [SEO Audit Methodology](./seo-audit-methodology.md) | 4-phase framework for auditing URL patterns and duplicate content |

## Related

- Validation script: `scripts/check-url-normalization.mjs`
- Redirect mapping: `content/redirect-mapping.csv`
- Hugo config: `hugo.toml`
