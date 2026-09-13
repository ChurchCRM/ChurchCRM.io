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

These events measure clicks, not completed demos, installations, downloads, or successful support outcomes. Do not name an event or report as though a downstream outcome is known without a real cross-site signal.

## Validation

```bash
hugo --minify
node scripts/test-conversion-tracking-classify.mjs
npm run test:e2e
```

Browser tests should inspect `window.dataLayer`; the inline `gtag()` wrapper overwrites pre-navigation stubs. Local tests validate classification and data-layer pushes, not receipt inside the GA4 property. Property-level verification requires GA4 Realtime or DebugView access.
