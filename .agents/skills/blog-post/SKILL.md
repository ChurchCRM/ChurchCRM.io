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
- Original article artwork belongs under `static/images/blogs/`; product captures use the current CDN. Featured imagery is optional under the archetype; if present it must be real and relevant. Placeholders are draft-only.
- Do not set a post-specific `url`; the intentional site-wide `uglyURLs = true` behavior controls permalinks.
- Canonical and social tags are produced by the shared templates. For URL changes, read the `seo-url` skill.

## Publish and verify

A post can have a working URL and still be missing from `/blog/`. Hugo drops some posts from the build without an error, so check every new post before and after merge.

- **Filename and date:** name the file `YYYY-MM-DD-slug.md`. The permalink is `/blog/YYYY-MM-DD-slug.html`, not `/blog/YYYY-MM-DD-slug/`.
- **Date must not be in the future.** Hugo skips posts dated after build time (`buildFuture` is off). Deploys only run on push to `master`, so a future-dated post stays unpublished until something else is merged after that date. Use the merge date or earlier; set `lastmod` for later edits.
- **For publication set `draft: false`; never use a boolean `published:`.** Hugo treats `published` as a date, not a visibility flag.
- **Frontmatter:** use `archetypes/blog.md`. Leave the title out of the body: `layouts/blog/single.html` already renders it as the page's only `<h1>`. Preserve `summary`, `keywords`, `author` and image/alt fields from the archetype.
- **Featured image:** use a site-absolute path or a full URL. That is either a 1200×630 image under `/images/blogs/` or a current capture from the CDN, `https://cdn.churchcrm.io/screenshots/en/desktop/<name>.png`. A bare filename breaks the listing thumbnail and `og:image`.
- **Before merge:** run `hugo --minify`, then `node scripts/check-blog-listing.mjs` and `node scripts/check-metadata.mjs`. CI and deploy run the same checks, so a post that doesn't appear on `/blog/` fails the build.
- **After merge:** confirm the "Deploy Hugo Site to GitHub Pages" run for the merge commit passed. Then open `https://churchcrm.io/blog/` and check that the post is listed. GitHub Pages caches HTML for up to 10 minutes, so a listing you loaded before the deploy can still look stale. Hard-refresh, or add a query string like `/blog/?v=1`, before you decide the post is missing.

## Review

- Publish one companion announcement for each `major.minor.0` ChurchCRM release.
- Fold patch-release highlights into the next minor announcement unless a security or operational fix needs timely communication.
- Verify every included change against the published `ChurchCRM/CRM` release and linked implementation before drafting.
- Keep version-specific facts in the release post; do not spread volatile version claims across evergreen pages.

## Content ownership

Campaign planning and unpublished drafts may originate in private `ChurchCRM/marketing`.
Publish by a reviewed PR here; the merged Hugo file is the only editable published copy.
Keep private strategy/research out of this public repository.

## Images and social previews

The archetype allows an empty featured image; when provided, it must be a valid
original article image or authentic CDN capture with appropriate alt text.
Use `social_image`/`social_image_alt` for a dedicated sharing card when needed.
`layouts/partials/social-image.html` resolves `social_image`, then `featured_image`,
then the site-wide default card. Shared templates own canonical/hreflang/social
metadata; do not add hand-rolled tags. Read the `seo-url` card before URL changes.

## Draft request

Provide the audience, verified released workflow, intended CTA and supporting
sources. Use the archetype and the publish checks above; select a useful structure,
not a fixed word count. Preserve taxonomy URLs when trimming existing tags.

## Verified example

For a visitor-follow-up article, describe only current capabilities: record the person or family, classify the visitor, record attendance, use a query or Cart to organize follow-up, and add notes as appropriate. Do not claim automated reminders, skills matching, availability scheduling, or other workflows unless they are verified in the current product.
