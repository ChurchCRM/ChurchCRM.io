# ChurchCRM Product Truth Specification

## Purpose

Provide a single marketing-facing reference for what ChurchCRM can safely claim today. This document is intentionally conservative. When the application, documentation, or release changes, this document should be reviewed before marketing claims change.

## Source-of-truth hierarchy

When resolving a product claim, prefer sources in this order:

1. Current ChurchCRM application behavior and automated tests.
2. Current ChurchCRM release notes/changelog.
3. Current official documentation.
4. Approved marketing content derived from the above.
5. Older marketing pages, directory listings, third-party reviews, or search snippets only as historical/contextual evidence.

If sources conflict, do not guess. Flag the claim for verification.

## Product identity

ChurchCRM is free and open-source church management software designed to help churches manage people and families and the connected workflows around groups, events, attendance, giving/financial tracking, volunteers, reporting, administration, and related church operations.

It is self-hosted. The project supports practical installation paths ranging from hosted control panels and package installers to conventional Linux deployments and Docker-based options, with support status varying by deployment method.

## Core workflows

### People & Families — CORE

Current capabilities include family/household records, member/person profiles, contact information, church history, notes/properties, searching, classifications, self-registration, and online verification.

Marketing language should emphasize organizing people and families rather than database terminology.

### Groups & Ministries — CORE

Current capabilities include groups for ministry teams, committees, Bible studies, small groups, and related organization of people. Group workflows connect with events, attendance, communication-related functions, reports, and kiosk use where supported.

### Events & Attendance — CORE

Current capabilities include one-time and recurring events, attendance tracking, event-related workflows, and child check-in/check-out through kiosk functionality.

### Kiosk / Check-in & Checkout — SUPPORTED

ChurchCRM includes kiosk workflows for event/group check-in and checkout, including Sunday School-related use cases and parent-alert capabilities through supported email/SMS configuration.

Do not imply the kiosk is a native mobile application.

### Sunday School — SUPPORTED

ChurchCRM supports Sunday School class/group workflows and kiosk-based check-in/out. Marketing should present this as part of the connected people → groups → events → attendance workflow.

### Giving & Donations — CORE

ChurchCRM supports recording donations and linking giving history to donors/families, along with pledges, funds, deposits, statements/tax statements, and financial reporting workflows.

Do **not** describe ChurchCRM as a native online-giving/payment-processing platform unless a specific current integration/capability has been verified.

### Financial Management — CORE

Current capabilities include deposits, pledges, funds, donor history, statements, reports, and workflows around imported/authorized automatic transactions where documented.

Use “giving and financial tracking” or similarly accurate language.

### Volunteers — SUPPORTED

ChurchCRM supports volunteer-related workflows. Marketing should avoid claiming a complete enterprise volunteer-management suite unless specifically verified.

### Self Registration — SUPPORTED

ChurchCRM supports self-registration workflows for people/families. Customization depth should not be overstated; user feedback indicates customization needs remain an area for improvement.

### Online Verification — SUPPORTED

ChurchCRM supports online verification workflows. This is a useful trust/onboarding capability, but its exact workflow should be demonstrated from the current application before detailed claims are made.

### Communication — PARTIAL / INTEGRATION-DEPENDENT

ChurchCRM has communication-related capabilities and integrations. Email/SMS capabilities can depend on system configuration and external providers. Do not imply that unlimited built-in messaging is universally available.

### Calendar — SUPPORTED

ChurchCRM provides calendar/event capabilities. Marketing should focus on the church's scheduling workflow rather than implying a full general-purpose calendar replacement.

### Reports & Queries — SUPPORTED

ChurchCRM provides reports and query functionality across supported data domains.

### Fundraising — SUPPORTED

Fundraiser functionality exists. Avoid presenting it as a complete fundraising/marketing platform without specific evidence.

### Localization & International Support — CORE DIFFERENTIATOR

ChurchCRM supports translated interfaces and regional/localization settings. Official documentation currently describes 46 languages, regional grouping, browser language detection, and localization settings.

The application supports localization concerns including language, timezone, date/time formats, phone number formats, and currency display. The website should describe this as **localization**, not merely a language-count claim.

Language counts are volatile and must be checked against the current application before publication.

### Maps & Geographic — SUPPORTED

ChurchCRM includes mapping/geographic capabilities, including interactive maps and neighbor-finding workflows. Exact provider/configuration details belong in technical documentation rather than broad marketing claims.

### Import / Data Migration — SUPPORTED

ChurchCRM supports data import/export workflows including CSV and documented migration formats. Marketing should avoid promising painless migration from every competitor.

### Backup & Restore — SUPPORTED

ChurchCRM supports backup and restore. Recent releases include backup automation improvements. Marketing should not imply that backups eliminate the need for administrators to understand their own hosting and recovery responsibilities.

### Plugins & Integrations — CORE DIFFERENTIATOR

ChurchCRM supports plugins and external integrations. The project has a community-oriented plugin model and documented integrations such as MailChimp, Vonage SMS, OpenLP, Gravatar, Google Analytics, external backup, custom menu links, and holiday calendar capabilities.

Specific integration claims must be checked against current documentation before publication.

### API & Developer Extensibility — CORE DIFFERENTIATOR

ChurchCRM is intended to be extensible through APIs, plugins, and integrations. Avoid promising a complete enterprise integration platform unless the specific API capability is verified.

### Security / Permissions / 2FA — SUPPORTED

ChurchCRM provides role-based and granular permissions and two-factor authentication. Marketing can describe these as security and administrative capabilities, but should not make compliance/certification claims without evidence.

### Self-hosting & Installation — CORE DIFFERENTIATOR

ChurchCRM is self-hosted. Documented deployment paths include Softaculous, cPanel, Ubuntu/Debian, Rocky Linux, Azure, VPS/cloud environments, and Docker-based deployment paths with support maturity varying by method.

Avoid “works on any web host.” Conventional deployments require an appropriate supported web server/runtime configuration.

### UI / UX — PRODUCT DIRECTION

The application is actively being modernized. Marketing should show the current interface and avoid claiming that every workflow is already simple, polished, or mobile-optimized.

### Mobile / Tablet — SUPPORTED WEB EXPERIENCE

ChurchCRM provides responsive web UI. It is not a native iOS/Android application. Marketing may say the web application is designed to work across desktop/tablet/mobile layouts, while avoiding unsupported claims about every workflow being equally optimized on every device.

### Accessibility — IMPROVEMENT AREA

Accessibility should not be marketed as a major differentiator today. The project should improve accessibility systematically and verify claims with testing.

### Documentation & Onboarding — CORE

Official documentation covers installation, first-run setup, feature workflows, administration, deployment, and development topics. Marketing may point users to documentation as a practical path to getting started.

## Runtime requirements

Current product source establishes **PHP 8.4 as the minimum supported PHP version**, with PHP 8.5 tested.

Any public page or directory listing saying PHP 8.2 or PHP 8.3 is the minimum should be treated as stale and corrected.

## Release claims

Release numbers, release dates, download counts, feature lists, and language counts are volatile. Do not hard-code them into evergreen marketing copy unless there is an automated source or a defined review process.

## Claims that require special caution

### “Free”

ChurchCRM software is free/open source. Hosting, administration, backups, email/SMS providers, payment services, and other infrastructure can still cost money.

### “No fees”

Avoid absolute “no costs” language. “No ChurchCRM software subscription” or “no mandatory monthly ChurchCRM license fee” is safer when the exact context is clear.

### “No vendor lock-in”

This is a strategic positioning statement grounded in self-hosting/open source. Do not imply that migration is automatically effortless.

### “46 languages”

Treat as a current application/documentation fact that must be rechecked when content is published. Marketing website languages are a separate count.

### “International”

Prefer localization language that covers regional formatting and translated UI, not just language count.

### “Online giving”

Do not use this as a current core capability unless the exact implementation is verified. Current safe language is giving/donation recording and financial tracking, plus supported integrations/import paths.

### “Mobile app”

Not supported as a native-app claim. Say responsive web application when appropriate.

## Evidence requirements for marketing

For every substantial product claim, agents should be able to identify:

- capability
- current release/version context
- authoritative source
- whether the claim is Today/Coming/Vision
- whether configuration or external services are required
- whether there are meaningful limitations

## Maintenance

Review this document whenever:

- a release changes a user-visible capability
- a feature is removed or materially changed
- an integration changes
- deployment requirements change
- localization changes materially
- a marketing campaign proposes a new claim

The safest marketing system is one that makes stale claims difficult to create.
