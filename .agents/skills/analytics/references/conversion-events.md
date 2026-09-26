# Conversion events

`static/js/conversion-tracking.js` uses one delegated click listener and classifies links by URL. Keep this reference and the classifier synchronized.

All events include `link_url`, trimmed `link_text`, `cta_location`, and `page_path`.

| Event | Trigger |
|---|---|
| `demo_click` | Any-language `/demo.html` link |
| `install_click` | Any-language `/install.html` link |
| `learn_click` | Product-page or `#features` link; also includes `learn_type` |
| `docs_click` | Link to `docs.churchcrm.io` |
| `github_release_click` | CRM GitHub releases link; evaluated before the general GitHub rule |
| `github_click` | Other links under `github.com/ChurchCRM/CRM` |

`cta_location` comes from `data-ga-location` when present; otherwise it is inferred as `navbar`, `footer`, or `page_content`. Use an explicit value only when the default location is insufficient.

All events share this base parameter shape, plus any event-specific params listed below:

| Param | Type | Description |
|-------|------|-------------|
| `link_url` | string | The link's resolved `href` (absolute URL) |
| `link_text` | string | Visible link text, trimmed, truncated to 100 chars |
| `cta_location` | string | Where on the page the link lives — see [CTA Locations](#cta-locations) |
| `page_path` | string | `window.location.pathname` of the page the click happened on |

### `demo_click`

Fired when a link to `/demo.html` (any language) is clicked. Matches `/demo\.html(?:[?#]|$)/`.

### `install_click`

Fired when a link to `/install.html` (any language) is clicked. Matches `/install\.html(?:[?#]|$)/`.

### `learn_click`

Fired for the two "Learn" entry points into product/feature content. Adds one extra param:

| Param | Value | Meaning |
|-------|-------|---------|
| `learn_type` | `"product_page"` | Link to `/church-management-software/` (any language) |
| `learn_type` | `"features_anchor"` | In-page link to `#features` |

### `docs_click`

Fired for any link to `docs.churchcrm.io` — the docs homepage, install guides, user-guide deep links, contributing guide, etc. Matches `^https?:\/\/docs\.churchcrm\.io/`.

### `github_click`

Fired for any link under `github.com/ChurchCRM/CRM` that is **not** a releases link — the repo homepage, Issues, Discussions, labels, wiki, etc. Matches `^https?:\/\/github\.com\/ChurchCRM\/CRM(?:\/|$)`, excluding the releases pattern below (releases is checked first in `classify()`).

### `github_release_click`

Fired for links to `github.com/ChurchCRM/CRM/releases...` (the download/release-notes destination) — checked before the general `github_click` rule so it takes priority. Matches `^https?:\/\/github\.com\/ChurchCRM\/CRM\/releases`.

### `link_in_bio_view` and `social_network`

On social link-in-bio pages (`/instagram`, `/facebook`, `/linkedin`, `/x`) a `link_in_bio_view` event fires once on load, and every click event above gains a `social_network` param. Full design: [social-link-in-bio.md](social-link-in-bio.md).

## CTA Locations

`cta_location` is either explicit (a `data-ga-location` attribute on the `<a>`, read verbatim) or auto-detected from DOM position:

| Value | How it's determined |
|-------|---------------------|
| `hero_primary` | Explicit — the two large hero buttons ("Try the Live Demo" / "Install Free") on the homepage |
| `hero_secondary` | Explicit — the four small inline text links in the homepage hero paragraph (Demo / Install / Docs / GitHub) |
| `link_in_bio` | Explicit — CTAs on the social link-in-bio pages |
| `fab` | Explicit — the floating "Try Demo" button (`layouts/partials/fabs.html`) |
| `navbar` | Auto-detected — link is inside a `<nav>` element |
| `footer` | Auto-detected — link is inside a `<footer>` element |
| `page_content` | Default — everything else (gallery cards, in-page CTAs, install/demo page buttons, etc.) |

To give a new CTA a more specific location than the auto-detected default, add `data-ga-location="your_value"` to the `<a>` tag — no JS changes needed.

## Attribution — read before adding anything that implies a confirmed outcome

These events measure clicks, not completed demos, installations, downloads, or successful support outcomes. Do not name an event or report as though a downstream outcome is known without a real cross-site signal.

These events measure that a link **was clicked**. They do not, and cannot, measure:

- Whether a Demo session was actually used after the click
- Whether the Install guide was followed to a working install
- Whether a GitHub visit led to a clone, download, or install
- Whether a docs page answered the visitor's question

**Do not** name a future event, parameter, or dashboard in a way that implies otherwise (e.g. `install_completed`, `demo_conversion`) unless there is a technically valid signal for it (there currently is none — GA4 has no visibility once a visitor leaves for `github.com` or `docs.churchcrm.io`, and the Demo destination is a separate, un-instrumented app). If a genuine linkage is ever added (e.g. a UTM-tagged link the Demo app itself reads and reports back on), document the actual mechanism here — don't just rename an event and imply the mechanism exists.

## Validation

```bash
hugo --minify
node scripts/test-conversion-tracking-classify.mjs
npm run test:e2e
```

Browser tests should inspect `window.dataLayer`; the inline `gtag()` wrapper overwrites pre-navigation stubs. Local tests validate classification and data-layer pushes, not receipt inside the GA4 property. Property-level verification requires GA4 Realtime or DebugView access.
