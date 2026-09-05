---
name: analytics
description: Conversion-funnel click tracking (GA4, via the existing gtag.js snippet) for churchcrm.io. Use this whenever adding a new Demo/Install/GitHub/docs CTA, touching static/js/conversion-tracking.js, or the user asks about analytics, conversion tracking, funnel measurement, or GA4 events on this site.
metadata:
  author: ChurchCRM
  version: "1.0.0"
---

# churchcrm.io Analytics & Conversion Tracking

Project-specific documentation for the Learn → Demo → Install conversion funnel measurement on churchcrm.io. This is one of several churchcrm.io skills; see also [`seo-url`](../seo-url/SKILL.md).

## Contents

| Doc | When to Use |
|-----|-------------|
| [Conversion Events](./references/conversion-events.md) | Full event taxonomy, parameters, attribution rules — read before adding a new CTA or a new event type |

## Quick Reference

- **Analytics platform**: Google Analytics 4, loaded via the existing `gtag.js` snippet in `layouts/partials/head.html`. There is no second analytics platform on this site — do not add one.
- **Click tracking**: `static/js/conversion-tracking.js`, loaded once in `layouts/_default/baseof.html`. A single delegated `click` listener classifies links by URL pattern (no per-element `onclick` handlers) and calls `gtag('event', ...)`.
- **New CTA that should already be tracked** (matches `/demo.html`, `/install.html`, `/church-management-software/`, `#features`, `docs.churchcrm.io`, or `github.com/ChurchCRM/CRM`): no changes needed — the URL-pattern classifier picks it up automatically.
- **New CTA needing a more specific `cta_location`** than the auto-detected `navbar` / `footer` / `page_content`: add a `data-ga-location="..."` attribute to the `<a>` tag. No JS changes required.
- **New event type** (a link pattern the classifier doesn't cover yet): add a rule to `classify()` in `static/js/conversion-tracking.js` **and** document it in [Conversion Events](./references/conversion-events.md) in the same change — keep the two in sync.

## Related

- Tracking script: `static/js/conversion-tracking.js`
- Loaded from: `layouts/_default/baseof.html`
- GA4 site ID: `hugo.toml` → `params.googleAnalyticsID`
