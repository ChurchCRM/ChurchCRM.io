# ChurchCRM.io

Official marketing website for [ChurchCRM](https://churchcrm.io) — free, open-source church management software.

## Tech Stack

- **[Hugo](https://gohugo.io/)** static site generator (`uglyURLs = true` to preserve `.html` URLs for SEO)
- **Webpixels CSS** — modern UI kit and CSS framework used for the site's components and utilities
- **Font Awesome 6.5** — icons
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
├── hugo.toml               # Hugo config (9 languages, uglyURLs)
├── content/en/             # English page frontmatter
├── layouts/
│   ├── index.html          # Home page
│   ├── demo/single.html    # Demo page
│   ├── install/single.html # Install page
│   ├── connect/single.html # Connect / community page
│   └── partials/           # Shared: navbar, footer, head, FABs
├── i18n/                   # Translations (en, de, es, ar, hi, ja, pt, ru, zh)
├── static/
│   ├── css/styles.css
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

9 languages are scaffolded: `en`, `de`, `es`, `ar`, `hi`, `ja`, `pt`, `ru`, `zh`.

- English content lives at the root (`/`, `/demo.html`, etc.)
- Other languages are prefixed (`/de/`, `/de/demo.html`, etc.)
- UI strings are in `i18n/*.toml`; page content is in `content/{lang}/`

## Blog

- Blog posts live under `content/{lang}/blog/` (example: `content/en/blog/`).
- New posts should use the `archetypes/blog.md` frontmatter scaffold. Use `draft: true` while drafting.
- Frontmatter fields we use: `title`, `date`, `description`, `tags`, `categories`, and `slug`.
- To create a new post quickly: `hugo new blog/my-post.md` and edit the generated file.

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

The live site is at [churchcrm.io](https://churchcrm.io).
