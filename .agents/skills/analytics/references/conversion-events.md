# Reference: Conversion Funnel Events

## Context

Issue #68 asked for the primary Learn → Demo → Install journey to be measurable using the site's existing analytics (Google Analytics 4, loaded via `gtag.js` in `layouts/partials/head.html`) — without introducing a second analytics platform and without overstating what the data proves.

Implementation: `static/js/conversion-tracking.js`, loaded once from `layouts/_default/baseof.html`. It adds a single delegated `click` listener on `document`, classifies the clicked link by URL pattern, and calls `gtag('event', <name>, <params>)`. No CTA markup, `href`, or page behavior was changed — this only listens.

## Event Taxonomy

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

## CTA Locations

`cta_location` is either explicit (a `data-ga-location` attribute on the `<a>`, read verbatim) or auto-detected from DOM position:

| Value | How it's determined |
|-------|---------------------|
| `hero_primary` | Explicit — the two large hero buttons ("Try the Live Demo" / "Install Free") on the homepage |
| `hero_secondary` | Explicit — the four small inline text links in the homepage hero paragraph (Demo / Install / Docs / GitHub) |
| `fab` | Explicit — the floating "Try Demo" button (`layouts/partials/fabs.html`) |
| `navbar` | Auto-detected — link is inside a `<nav>` element |
| `footer` | Auto-detected — link is inside a `<footer>` element |
| `page_content` | Default — everything else (gallery cards, in-page CTAs, install/demo page buttons, etc.) |

To give a new CTA a more specific location than the auto-detected default, add `data-ga-location="your_value"` to the `<a>` tag — no JS changes needed.

## Attribution — read before adding anything that implies a confirmed outcome

These events measure that a link **was clicked**. They do not, and cannot, measure:

- Whether a Demo session was actually used after the click
- Whether the Install guide was followed to a working install
- Whether a GitHub visit led to a clone, download, or install
- Whether a docs page answered the visitor's question

**Do not** name a future event, parameter, or dashboard in a way that implies otherwise (e.g. `install_completed`, `demo_conversion`) unless there is a technically valid signal for it (there currently is none — GA4 has no visibility once a visitor leaves for `github.com` or `docs.churchcrm.io`, and the Demo destination is a separate, un-instrumented app). If a genuine linkage is ever added (e.g. a UTM-tagged link the Demo app itself reads and reports back on), document the actual mechanism here — don't just rename an event and imply the mechanism exists.

## Validation

The project now has committed Node and Playwright test tooling. Validate changes in three layers:

1. Build the site with `hugo --minify`.
2. Run `node scripts/test-conversion-tracking-classify.mjs` to test the classifier against built links and explicit positive/negative cases.
3. Run `npm run test:e2e` for the committed browser smoke tests. When adding an event type or location, add a focused browser assertion against `window.dataLayer`.

**Not validated**: actual receipt of these events in the GA4 property itself. This session has no access to the configured GA4 account/dashboard, and this sandboxed environment's network policy blocks outbound requests to `www.googletagmanager.com`, so the real `gtag.js` script cannot even load here — only the local `dataLayer.push` wrapper (defined inline in `head.html`, independent of whether the external script loads) was exercised. Confirming events arrive in GA4's Realtime or DebugView reports needs a human with account access, once this ships to a real domain the property is configured for.

## Testing gotchas <!-- learned: 2026-09-05 -->

If you extend this and write a browser test against it:

- **Don't try to stub `window.gtag` before navigation.** `head.html`'s own inline snippet does `function gtag(){dataLayer.push(arguments)}` — a top-level function declaration, which runs synchronously while `<head>` is parsed and clobbers any pre-navigation stub (e.g. a Playwright `page.addInitScript`) the instant the real page loads. Assert against `window.dataLayer` directly instead — filter for entries where `entry[0] === "event"`. This works with zero network access, because the local `gtag()` wrapper only pushes to the array; the external `googletagmanager.com` script (which actually sends the network request) is a separate, later step this repo's test tooling doesn't need to reach.
- **`gtag` is always defined by the time `conversion-tracking.js` runs**, with no load-order race to guard against. The inline snippet that defines it is a blocking `<script>` in `<head>`, so it always finishes before `<body>` is even parsed — regardless of whether the `async` external `gtag.js` bootstrap script (also in `<head>`) has finished downloading. The `typeof window.gtag !== "function"` check in `conversion-tracking.js` is a defensive fallback for e.g. an ad blocker stripping the inline snippet, not a real race condition.
- **Use the committed tooling.** `package.json`, `playwright.config.js`, and `tests/e2e/` are the supported browser-test path. Do not install Playwright globally or add a second test setup.

## External references <!-- learned: 2026-09-05 -->

No Google-published or Anthropic-marketplace Claude skill for GA4/Google Analytics exists (checked at implementation time). For event-naming and parameter conventions beyond what's captured above, use GA4's own documentation directly rather than guessing:

- [Recommended events](https://developers.google.com/analytics/devguides/collection/ga4/reference/events) — Google's reserved event names and their expected parameters (avoid colliding with these when naming a new custom event)
- [Event parameter reference](https://support.google.com/analytics/answer/9267735) — reserved vs. custom parameter naming rules
- [Enhanced measurement](https://support.google.com/analytics/answer/9216061) — GA4 property-level settings (e.g. automatic outbound-click and file-download tracking) that are configured in the GA4 UI, not in this repo's code; check the property's Enhanced Measurement settings before assuming an event here is the only signal for a given click

---

**Last updated**: 2026-09-12
