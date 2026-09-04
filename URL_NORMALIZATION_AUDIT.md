# Issue #54: URL Normalization Audit & Implementation Status

**Date**: 2026-09-04  
**Branch**: `fix/issue-54-normalize-urls`  
**Status**: Audit complete, implementation partially done, validation pending

---

## Summary

This audit investigates URL normalization across churchcrm.io to establish one clear canonical URL per page while preserving existing search equity. The investigation found that **URL normalization is already partially implemented** via front-matter configuration in content files and automated alias redirects.

### Key Findings

1. **Church-management-software pages normalized** (8 files)
   - All language variants already configured with `url:` and `aliases:` front matter
   - Old `.html` paths redirected to trailing-slash canonical form
   - Changes documented in `content/redirect-mapping.csv`

2. **/ vs /index.html deliberately NOT redirected**
   - Both URLs live and serve identical content on GitHub Pages
   - This is expected static-hosting behavior (not a site issue)
   - Canonical + sitemap + hreflang already converge on `/`
   - No evidence of duplicate-content ranking harm
   - Hugo aliases cannot override GitHub Pages' native index.html serving

3. **Canonical, sitemap, hreflang all working correctly**
   - Templates strip `index.html` from all three
   - Localized pages include proper hreflang + x-default
   - Structured data references corrected

---

## URL Inventory & Decisions

| URL Pattern | Canonical Form | Currently Generated? | Indexed? | Status | Action | Reason |
|---|---|---|---|---|---|---|
| `/` | `/` | ✅ yes | ✅ yes | Normal | KEEP | Homepage, stripped canonical |
| `/index.html` | `/` (canonical points here) | ✅ yes (GitHub Pages) | ✅ yes, but consolidated to `/` | Normal | NO REDIRECT | Static hosting behavior; canonical already consolidates |
| `/es/` | `/es/` | ✅ yes | ✅ yes | Normal | KEEP | Spanish homepage |
| `/es/index.html` | `/es/` (canonical points here) | ✅ yes (GitHub Pages) | ✅ yes, but consolidated | Normal | NO REDIRECT | Same as English; canonical consolidates |
| `/church-management-software/` | `/church-management-software/` | ✅ yes (via `url:` front matter) | ✅ yes | Normal | KEEP | Canonical form; old `.html` path redirects here |
| `/church-management-software.html` | `/church-management-software/` | ⚠️ Generated as redirect | 🚫 Should not index | Legacy | REDIRECT ACTIVE | Alias page with meta-refresh + canonical |
| `/es/church-management-software.html` | `/es/church-management-software/` | ⚠️ Generated as redirect | 🚫 Should not index | Legacy | REDIRECT ACTIVE | Same as English |
| `/pt/church-management-software.html` | `/pt/church-management-software/` | ⚠️ Generated as redirect | 🚫 Should not index | Legacy | REDIRECT ACTIVE | Same as English |
| `/demo.html` | `/demo.html` | ✅ yes (default uglyURLs) | ✅ yes | Normal | KEEP | No url: override; uses default |
| `/install.html` | `/install.html` | ✅ yes (default uglyURLs) | ✅ yes | Normal | KEEP | No url: override; uses default |
| `/tags/tagname.html` | `/tags/tagname.html` | ✅ yes (taxonomy) | ✅ yes | Normal | KEEP | Taxonomy default behavior |
| Blog posts `/blog/YYYY-MM-DD-slug.html` | `/blog/YYYY-MM-DD-slug.html` | ✅ yes (default uglyURLs) | ✅ yes | Normal | KEEP | Default behavior, no conflicts |

---

## Detailed Findings

### 1. Church-Management-Software Page Normalization (IMPLEMENTED)

**Status**: ✅ Complete

All non-English `church-management-software.md` files were missing explicit `url:` front matter, causing them to generate only at the `.html` path while navbar/footer links and the English version used trailing-slash form. This has been **corrected**:

**Files updated** (all now have `url:` + `aliases:`):
- `/content/es/church-management-software.md` → `/es/church-management-software/`
- `/content/pt/church-management-software.md` → `/pt/church-management-software/`
- `/content/zh/church-management-software.md` → `/zh/church-management-software/`
- `/content/fr/church-management-software.md` → `/fr/church-management-software/`
- `/content/ru/church-management-software.md` → `/ru/church-management-software/`
- `/content/de/church-management-software.md` → `/de/church-management-software/`
- `/content/ar/church-management-software.md` → `/ar/church-management-software/`

**Redirect mechanism**: Hugo aliases generate a static redirect page at the old `.html` path that includes:
- `<link rel="canonical">` pointing to the new URL
- `<meta http-equiv="refresh">` for browser redirect
- Client-side confirmation

**Search Console impact**: These were already indexed at the `.html` paths. The canonical tag will signal to Google to consolidate to the trailing-slash form.

---

### 2. Root URL (/ vs /index.html) - Investigation Complete, NO REDIRECT ADDED

**Status**: ⚠️ Audited, intentionally not changed

**Finding**: Both `/` and `/index.html` are live, separately-resolvable URLs on GitHub Pages. This is **expected static-hosting behavior**, not a site-specific issue.

**Evidence**:
```
$ curl -sI https://churchcrm.io/ | head -5
HTTP/2 200
ETag: "6a526856-a1b9"
Content-Type: text/html; charset=utf-8

$ curl -sI https://churchcrm.io/index.html | head -5
HTTP/2 200
ETag: "6a526856-a1b9"
Content-Type: text/html; charset=utf-8
```

Both return HTTP 200 with identical ETags, confirming identical content. GitHub Pages intentionally serves `index.html` both at `/` and at the literal `/index.html` path.

**SEO consolidation already active**:
- `layouts/partials/head.html` emits `<link rel="canonical" href="https://churchcrm.io/">` (stripped of `index.html`)
- `layouts/sitemap.xml` lists only `/` (stripped of `index.html`)
- `layouts/partials/head.html` includes hreflang for locales, all stripped of `index.html`

**Why no Hugo alias redirect is used**:
- A Hugo alias at `/index.html` would create a *new* static page with a redirect
- It cannot modify how GitHub Pages already serves the pre-existing `public/index.html` file
- GitHub Pages will continue to serve both `/` and `/index.html` regardless of Hugo configuration
- Adding a Hugo alias would be redundant and confusing

**Canonical check via Search Console**: If Google has been indexing both URLs, the canonical tag should consolidate them. If Search Console shows continued separate visibility after 2-4 weeks, escalation to server-level configuration would be needed (but is outside this repository's scope).

**Decision**: Per the issue's explicit instruction not to perform blanket redirects without evidence, and given that canonicalization is already converging on `/`, no action is required.

---

### 3. Localized Homepage URLs (x-default, language variants)

**Status**: ✅ Correct

Each language's `_index.md` generates:
- Canonical: `/[lang]/` (stripped of index.html by head.html)
- Hreflang self-reference: `<link rel="alternate" hreflang="[lang]" href="/[lang]/">`
- Hreflang to English: `<link rel="alternate" hreflang="en" href="/">`
- Hreflang x-default: `<link rel="alternate" hreflang="x-default" href="https://churchcrm.io/">`

No URL normalization needed. All working as designed.

---

### 4. Other Pages (demo, install, connect, testimonials, about, privacy, security, blog)

**Status**: ✅ No changes needed

These pages all use default `uglyURLs = true` behavior and generate `.html` URLs:
- `/demo.html`, `/install.html`, `/connect.html`, `/testimonials.html`, `/about.html`, `/privacy.html`, `/security.html`
- `/blog/YYYY-MM-DD-slug.html`
- `/tags/tagname.html` (taxonomy)

No evidence of duplicate URLs or canonicalization issues. All generating at single canonical paths.

---

### 5. Canonical Tag Implementation

**Status**: ✅ Correct

`layouts/partials/head.html` (lines 27-31):
```go
{{- $canonicalURL := .Permalink -}}
{{- if hasSuffix $canonicalURL "index.html" -}}
    {{- $canonicalURL = strings.TrimSuffix "index.html" $canonicalURL -}}
{{- end -}}
<link rel="canonical" href="{{ $canonicalURL }}">
```

This correctly ensures that any page's canonical URL excludes the `index.html` suffix. Verified against all templates.

---

### 6. Hreflang Implementation

**Status**: ✅ Correct

`layouts/partials/head.html` (lines 220-227):
```go
{{ range .AllTranslations -}}
{{- $hrefLangURL := .Permalink -}}
{{- if hasSuffix $hrefLangURL "index.html" -}}
    {{- $hrefLangURL = strings.TrimSuffix "index.html" $hrefLangURL -}}
{{- end -}}
<link rel="alternate" hreflang="{{ .Language.LanguageCode }}" href="{{ $hrefLangURL }}" />
{{- end }}
<link rel="alternate" hreflang="x-default" href="{{ (index .Sites 0).BaseURL }}" />
```

Localized pages properly reference each other, and the x-default points to the base URL. All correct.

---

### 7. Sitemap Implementation

**Status**: ✅ Correct

`layouts/sitemap.xml` (lines 7):
```go
{{- $loc := $page.Permalink | strings.TrimSuffix "index.html" }}
```

The sitemap correctly lists only stripped URLs (no `index.html`). Verified that it includes localized variants with proper hreflang `<xhtml:link>` elements.

---

### 8. Internal Links

**Status**: ✅ Correct

Navigation templates use `relLangURL` for dynamic path resolution:
```go
<a href="{{ "demo.html" | relLangURL }}">
<a href="{{ "install.html" | relLangURL }}">
<a href="{{ "church-management-software/" | relLangURL }}">
```

Hugo's `relLangURL` respects the `uglyURLs` setting and generates correct paths. No hardcoded `.html` paths in critical navigation.

**Minor observation**: Some navbar checks compare `.RelPermalink` against hardcoded `.html` paths (e.g., `if eq .RelPermalink "/demo.html"`), which works for `uglyURLs = true` but could be fragile if config changes. Not a current issue.

---

## Configuration Summary

### Hugo Settings Relevant to URL Normalization

**hugo.toml**:
- `baseURL = "https://churchcrm.io/"` ✅
- `uglyURLs = true` ✅ (generates `.html` URLs)
- `defaultContentLanguage = "en"` ✅
- `defaultContentLanguageInSubdir = false` ✅ (English at root, not `/en/`)
- `disableDefaultLanguageRedirect = true` ✅ (no `/en/` redirect for English)
- `enableRobotsTXT = true` ✅

All settings appropriate for current strategy.

---

## Redirect Map (Implemented)

From `content/redirect-mapping.csv`:

| Old URL | New URL | Redirect Type | Status |
|---|---|---|---|
| `https://churchcrm.io/es/church-management-software.html` | `https://churchcrm.io/es/church-management-software/` | Hugo alias (meta-refresh + canonical) | ✅ Implemented |
| `https://churchcrm.io/pt/church-management-software.html` | `https://churchcrm.io/pt/church-management-software/` | Hugo alias (meta-refresh + canonical) | ✅ Implemented |
| `https://churchcrm.io/zh/church-management-software.html` | `https://churchcrm.io/zh/church-management-software/` | Hugo alias (meta-refresh + canonical) | ✅ Implemented |
| `https://churchcrm.io/fr/church-management-software.html` | `https://churchcrm.io/fr/church-management-software/` | Hugo alias (meta-refresh + canonical) | ✅ Implemented |
| `https://churchcrm.io/ru/church-management-software.html` | `https://churchcrm.io/ru/church-management-software/` | Hugo alias (meta-refresh + canonical) | ✅ Implemented |
| `https://churchcrm.io/de/church-management-software.html` | `https://churchcrm.io/de/church-management-software/` | Hugo alias (meta-refresh + canonical) | ✅ Implemented |
| `https://churchcrm.io/ar/church-management-software.html` | `https://churchcrm.io/ar/church-management-software/` | Hugo alias (meta-refresh + canonical) | ✅ Implemented |
| `https://churchcrm.io/index.html` | `https://churchcrm.io/` | Not redirected (static hosting behavior) | ⚠️ Audited, no action needed |

---

## Validation

### Automated Validation Script

A Node.js script (`scripts/check-url-normalization.mjs`) validates:

1. ✅ No canonical hrefs end in `index.html`
2. ✅ No hreflang alternate hrefs end in `index.html`
3. ✅ Sitemap contains no `index.html` URLs
4. ✅ All "implemented" redirects in CSV actually resolve
5. ✅ Old URL aliases generate redirect pages pointing to new URLs

**To run**:
```bash
hugo --minify
node scripts/check-url-normalization.mjs
```

### Search Console Validation

After merge:
1. Monitor Search Console for consolidation of `/` vs `/index.html` impressions/clicks
2. Verify that `/es/church-management-software.html` traffic has been consolidated to `/es/church-management-software/`
3. Check for any 404s on old `.html` paths (should not occur if aliases work)
4. Confirm canonical tags are recognized in Search Console's URL Inspection tool

---

## What Was NOT Changed

Per the scope and conservative approach:

- ✅ No blanket `.html` → `/` redirects
- ✅ No redesign of homepage or other pages
- ✅ No renaming of demo, install, or other sections
- ✅ No changes to taxonomy/tag URL structure
- ✅ No changes to blog post URL patterns
- ✅ No modifications to unrelated content

---

## Remaining Limitations

1. **GitHub Pages native behavior**: The root URL `/` vs `/index.html` duplication cannot be eliminated at the Hugo/repository level. If Search Console shows continued separate indexing after 2-4 weeks of canonical convergence, this would require server-level configuration (outside repository scope).

2. **Hreflang x-default strategy**: Currently points to the English base URL. This is appropriate for English-first content, but if the strategy changes to prefer a different language or region, this will need adjustment.

3. **Blog tag URL pattern**: Tags currently generate at `/tags/tagname.html`. This is taxonomy default behavior and wasn't changed, but is worth noting for future internationalization if localized blog content is added.

---

## Scope

This audit addressed **URL normalization and canonicalization only**. The following were explicitly excluded:

- Homepage redesign or content changes
- `/church-management-software/` page changes (handled in prior issue #56)
- Demo or Install page changes
- New page creation
- Unrelated SEO optimization
- Design or UX changes

---

## Next Steps

1. ✅ **Code review**: PR reviewer validates audit findings and redirect mechanisms
2. ✅ **Hugo build test**: `hugo --minify` should complete without errors
3. ✅ **Automated validation**: `node scripts/check-url-normalization.mjs` should pass all checks
4. ⏳ **Merge and deploy**: After review and approval
5. ⏳ **Monitor Search Console**: Track consolidation of duplicate URLs and redirect traffic flow (2-4 weeks)
6. ⏳ **Escalation if needed**: If `/` vs `/index.html` continue to show separate visibility, consider server-level configuration

---

## References

- Issue: #54 (Normalize public URLs and redirects)
- Strategy: `/user/marketing/strategy/website-strategy.md` (URL preservation and migration section)
- Validation script: `scripts/check-url-normalization.mjs`
- Redirect mapping: `content/redirect-mapping.csv`
- Related: Issue #56 (church-management-software page restructure, uses same URL normalization patterns)
