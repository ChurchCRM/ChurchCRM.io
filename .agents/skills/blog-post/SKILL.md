---
name: blog-post
description: Draft or edit ministry-focused ChurchCRM.io blog posts and announcements using the site's Hugo conventions and verified product facts.
---

# ChurchCRM.io blog posts

Write warm, direct copy for church administrators, pastors, and volunteers. Lead with the ministry or operational outcome, then explain the verified workflow. Prefer plain language over software jargon and avoid invented testimonials, metrics, personas, or feature behavior.

## Product truth

- Verify shipped behavior against the current `ChurchCRM/CRM` source and published release notes.
- Use approved marketing strategy for positioning, but never let it override product reality.
- Label planned work as Coming or Vision.
- Verify volatile facts such as versions, locales, installation methods, integrations, security behavior, and URLs at writing time.
- Describe ChurchCRM as free, open-source, and self-hosted. Do not imply that hosting, administration, or support has no cost.
- Do not include real parishioner personal data, secrets, or prescriptive legal, medical, or pastoral advice.

## Structure

Choose the shape that fits the post:

- Feature/workflow: church need, verified workflow, concise steps, ministry impact, CTA.
- Release: release theme, valuable shipped outcomes, limitations or upgrade notes, Demo/Install CTA.
- Community: why it matters, what changed, how to participate.
- Security/operations: risk, verified behavior, safe action, authoritative documentation.

Open with useful information rather than a rhetorical question. Keep paragraphs and sections scannable, but do not force a fixed word count or template.

## Hugo conventions

- English posts go in `content/en/blog/`; translations use the matching language directory.
- Start from `archetypes/blog.md` and preserve its frontmatter, including `featured_image_alt`.
- Use no more than three useful tags and do not use `ChurchCRM` as a tag.
- Before removing a tag, check whether it is the only source for an indexed taxonomy page.
- Store real 1200×630 featured images under `static/images/blogs/`; placeholders are draft-only.
- Do not set a post-specific `url`; the intentional site-wide `uglyURLs = true` behavior controls permalinks.
- Canonical and social tags are produced by the shared templates. For URL changes, read the `seo-url` skill.

## Review

Confirm product claims, links, frontmatter, image existence and alt text, heading order, accessibility, and a relevant CTA. Build the site and run the repository's metadata and URL validators before publishing.
