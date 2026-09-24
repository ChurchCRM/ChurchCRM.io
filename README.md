# ChurchCRM.io

Official marketing website for [ChurchCRM](https://churchcrm.io/?utm_source=github&utm_medium=referral&utm_campaign=github_content&utm_content=website_readme_home) — free, open-source church management software.

## Content strategy

This repository implements the approved ChurchCRM marketing strategy. Keep public copy outcome-first: show how ChurchCRM helps churches organize people, groups, events, attendance, giving, volunteers, and related workflows before introducing implementation details. Product claims must be verified against the current CRM application, documentation, and releases.

## Repository responsibility

This repository is the source of truth for the public website:

- published pages and blog posts
- website-ready images and media
- Hugo layouts, content structure, CSS, and components
- public URLs, redirects, canonicals, hreflang, sitemap, and structured data
- website tests, builds, and deployment

The private `ChurchCRM/marketing` repository owns marketing strategy, research, campaign planning, unpublished drafts, social and email content, and reusable marketing templates. It may define the intent for website work, but Hugo-specific implementation guidance belongs here.

Product claims must be verified against `ChurchCRM/CRM`; technical instructions belong in `ChurchCRM/docs.churchcrm.io`.

## Tech Stack

- **[Hugo](https://gohugo.io/)** static site generator (`uglyURLs = true` to preserve `.html` URLs for SEO)
- **Webpixels CSS** — modern UI kit and CSS framework used for the site's components and utilities
- **Bootstrap Icons 1.11** — icons
- **GitHub Actions** — automated build and deploy to GitHub Pages

## Local Development

```bash
# Install Hugo (macOS)
brew install hugo

# Start dev server
hugo server

# Open http://localhost:1313
```

## Build

```bash
hugo --minify
# Output in public/
```

## Project Structure

```
ChurchCRM.io/
├── hugo.toml               # Hugo config (8 languages, uglyURLs)
├── content/en/             # English page frontmatter
├── layouts/
│   ├── index.html          # Home page
│   ├── demo/single.html    # Demo page
│   ├── install/single.html # Install page
│   ├── connect/single.html # Connect / community page
│   └── partials/           # Shared: navbar, footer, head, FABs
├── i18n/                   # Translations (en, es, pt, zh, fr, ru, de, ar)
├── static/
│   ├── css/                # Site and editorial design styles
│   ├── images/             # Screenshots
│   └── media/              # Logos, favicons
└── .github/workflows/
    └── deploy.yml          # Hugo build → GitHub Pages on push to master
```

## Pages & URLs

| Page | URL | Layout |
|------|-----|--------|
| Home | `/` | `layouts/index.html` |
| Demo | `/demo.html` | `layouts/demo/single.html` |
| Install | `/install.html` | `layouts/install/single.html` |
| Connect | `/connect.html` | `layouts/connect/single.html` |

## Multilingual

8 languages are configured: `en`, `es`, `pt`, `zh`, `fr`, `ru`, `de`, `ar`.

- English content lives at the root (`/`, `/demo.html`, etc.)
- Other languages are prefixed (`/de/`, `/de/demo.html`, etc.)
- UI strings are in `i18n/*.toml`; page content is in `content/{lang}/`

## Blog

- Blog posts live under `content/{lang}/blog/` (example: `content/en/blog/`).
- New posts should use the `archetypes/blog.md` frontmatter scaffold. Use `draft: true` while drafting.
- A draft may originate in the private marketing repository, but publication happens through a PR here.
- After that PR merges, the file under `content/{lang}/blog/` is canonical. Correct published content here; do not maintain a second editable copy in the marketing repository.
- Frontmatter fields we use: `title`, `date`, `lastmod`, `draft`, `author`, `description`, `summary`, `keywords`, `tags` (max 3), `featured_image`, and `featured_image_alt`. Don't set `url` or `slug`; the filename sets the permalink (`/blog/YYYY-MM-DD-slug.html`).
- To create a new post quickly: `hugo new content/en/blog/YYYY-MM-DD-slug.md` and edit the generated file.
- Never future-date a post. Hugo skips it, and nothing rebuilds the site when that date arrives. `node scripts/check-blog-listing.mjs` (run in CI after `hugo --minify`) fails if a published post is missing from `/blog/`.
- After merge, check that the deploy run passed and the post appears on `https://churchcrm.io/blog/`. Pages caches HTML for up to 10 minutes, so hard-refresh first.

## Localization

- Site UI strings are in `i18n/*.toml`; translate keys there for each language (use the `i18n/{lang}.toml` files).
- Content pages live in `content/{lang}/` — copy `content/en/` into a new language folder and translate.
- `hugo.toml` already includes the configured languages and `uglyURLs = true` to preserve `.html` URLs for SEO.
- To add a language: update `hugo.toml` languages section, add an `i18n/{lang}.toml`, and create `content/{lang}/`.

## Build & Deployment

- Local development: install Hugo then run `hugo server -D` to preview drafts at `http://localhost:1313`.
- Production build: `hugo --minify` produces the static site in `public/`.
- CI/CD: a GitHub Actions workflow (`.github/workflows/deploy.yml`) builds the site and deploys to GitHub Pages whenever code is pushed to `master`.
- Static assets: CSS lives in `static/css/` (we use Webpixels CSS + custom styles in `styles.css`); images in `static/images/`.
- If you want a similar site: fork this repo, update `hugo.toml` for your site params, add content under `content/`, and push to a branch configured to deploy.

## Screenshots

Screenshots are stored in `static/images/` and `static/images/screenshots/`.

## Deployment

Push to `master` triggers the GitHub Actions workflow which:
1. Builds the site with Hugo
2. Deploys to GitHub Pages

The live site is at [churchcrm.io](https://churchcrm.io/?utm_source=github&utm_medium=referral&utm_campaign=github_content&utm_content=website_readme_live_site).
