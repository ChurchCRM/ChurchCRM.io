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

## Publish and verify

A post can have a working URL and still be missing from `/blog/`. Hugo drops some posts from the build without an error, so check every new post before and after merge.

- **Filename and date:** name the file `YYYY-MM-DD-slug.md`. The permalink is `/blog/YYYY-MM-DD-slug.html`, not `/blog/YYYY-MM-DD-slug/`.
- **Date must not be in the future.** Hugo skips posts dated after build time (`buildFuture` is off). Deploys only run on push to `master`, so a future-dated post stays unpublished until something else is merged after that date. Use the merge date or earlier; set `lastmod` for later edits.
- **Set `draft: false` and delete `published:`.** The marketing repo's template uses `published: true`. Hugo reads `published` as a publish date, so that line fails the whole build with `"published" front matter field is not a parsable date`.
- **Frontmatter:** use `archetypes/blog.md`. Leave the title out of the body: `layouts/blog/single.html` already renders it as the page's only `<h1>`. Add `summary`, `keywords` and `author`, which the marketing template leaves out.
- **Featured image:** use a site-absolute path. That is either a 1200×630 image under `/images/blogs/` or a current pipeline capture under `/images/screenshots/desktop/`. A bare filename breaks the listing thumbnail and `og:image`.
- **Before merge:** run `hugo --minify`, then `node scripts/check-blog-listing.mjs` and `node scripts/check-metadata.mjs`. CI and deploy run the same checks, so a post that doesn't appear on `/blog/` fails the build.
- **After merge:** confirm the "Deploy Hugo Site to GitHub Pages" run for the merge commit passed. Then open `https://churchcrm.io/blog/` and check that the post is listed. GitHub Pages caches HTML for up to 10 minutes, so a listing you loaded before the deploy can still look stale. Hard-refresh, or add a query string like `/blog/?v=1`, before you decide the post is missing.

## Review

- Publish one companion announcement for each `major.minor.0` ChurchCRM release.
- Fold patch-release highlights into the next minor announcement unless a security or operational fix needs timely communication.
- Verify every included change against the published `ChurchCRM/CRM` release and linked implementation before drafting.
- Keep version-specific facts in the release post; do not spread volatile version claims across evergreen pages.

## 7. Safety
- Keep outputs free of personal data: do not request, include, or reproduce parishioner PII (names, emails, phone numbers, addresses) unless anonymized and provided by the user for a specific task.
- Do not expose secrets or configuration values. Never ask for or output API keys, passwords, or private credentials.
- Avoid prescriptive legal, medical, or pastoral advice — provide guidance and point readers to professional resources when appropriate.

## 8. Content Ownership and Hugo Publishing

- Campaign planning and unpublished drafts may originate in the private `ChurchCRM/marketing` repository.
- Publication occurs through a pull request to this repository.
- Once merged, the Hugo content file and its website asset are the canonical published versions.
- Correct published copy here. Do not synchronize it back into a second editable archive.
- Keep marketing research, analytics, private strategy, and unpublished campaign material out of this public repository.

- Place blog posts under `content/en/blog/` for English posts. Use language subfolders for translations (e.g. `content/es/blog`).
- Use the `archetypes/blog.md` archetype. Preserve its frontmatter fields, including `featured_image_alt`.
- Tags: keep to a maximum of 3 tags; do not use the project name (avoid the tag "ChurchCRM"). Use ministry-focused tags (e.g., `security`, `2FA`, `volunteers`).
- **Trimming existing tags — check for singleton `/tags/<slug>/` pages first** <!-- learned: 2026-09-05 --> — every distinct tag auto-generates an indexed `/tags/<slug>/` taxonomy page. Before dropping a tag from a post, grep all posts' `tags:` lines for that value; if the post being edited is the *only* one using it, removing the tag deletes that live page (no successor URL, so it's a pure removal, not a redirect case — see `content/redirect-mapping.csv` for the audit-and-document pattern used in issue #65). Tags that only change *capitalization* (`"hrvatska"` → `"Hrvatska"`, `"open-source"` → `"Open Source"`) are safe: Hugo lowercases taxonomy slugs, so the same `/tags/<slug>/` page persists under the same URL. Verify by grepping `public/tags/` after `hugo --minify` — the count of tag directories should only shrink for tags with zero remaining posts.
- Featured image: use a real, relevant 1200×630 image under `static/images/blogs/` and reference it as `/images/blogs/<filename>`. For a how-to post, a current Playwright capture under `/images/screenshots/desktop/` is also fine. Use `/images/placeholders/blog-placeholder.svg` only while drafting. Do not publish an empty or missing image path.
- Frontmatter SEO: include a short `description` (meta description) and `keywords`. `summary` is used for previews and should be ~1 sentence.
- Permalinks & filenames: use human-friendly filenames. `hugo.toml` sets `uglyURLs = true` **deliberately, site-wide** — do not change this. It is the foundation of the canonical/hreflang/sitemap consolidation strategy documented in [`url-normalization.md`](../seo-url/references/url-normalization.md); flipping it would restructure every URL on the site and break that strategy. Blog posts should not set an explicit `url:` in front matter — leaving it unset lets them follow the site-wide `uglyURLs` behavior like every other post.

## 9. SEO
- Title structure: `<Post Title> | <Site Title>` (the site's head partial already appends the site title by default).
- Canonical: handled automatically by `layouts/partials/head.html` — it strips any `index.html` suffix from `.Permalink` before emitting the `<link rel="canonical">` tag. Don't hand-roll a canonical tag in a blog template; see [`url-normalization.md`](../seo-url/references/url-normalization.md) for the full pattern. Ensure preview/staging builds set correct `baseURL` when generating canonical tags.
- Open Graph / Twitter cards: set `featured_image` in frontmatter and templates should use that before falling back to the site icon.
- Structured data: keep `ld+json` blocks short; prefer descriptive `description` and a per-post `screenshot` where appropriate.

## 10. Accessibility & Images
- Use descriptive `alt` text for featured images (e.g., `featured_image_alt` frontmatter) for better accessibility and SEO.
- Prefer SVG for placeholders and PNG/JPEG for social preview images (1200x630). When using page bundles, generate resized images via Hugo image processing.

## 11. Example Prompt (Hugo-ready)
"Draft a Hugo blog post for `content/en/blog/` about **[Topic]** aimed at **[Church Type]**. Include frontmatter: `title`, `date`, `description`, `summary` (1 sentence), `author`, `keywords`, `tags` (max 3), and `featured_image` (optional). Write in empathetic, ministry-centered tone and include a short CTA linking back to https://churchcrm.io or the online manual."

## 12. Verified Example

For a visitor-follow-up article, describe only current capabilities: record the person or family, classify the visitor, record attendance, use a query or Cart to organize follow-up, and add notes as appropriate. Do not claim automated reminders, skills matching, availability scheduling, or other workflows unless they are verified in the current product.
