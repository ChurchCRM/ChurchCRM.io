# ChurchCRM Website Strategy

## Purpose

Define the strategy for modernizing churchcrm.io so it explains ChurchCRM clearly, converts qualified visitors into installations, preserves existing search equity, and gives the project a credible foundation for search engines, AI answer systems, and future marketing agents.

This is a strategy document, not an implementation ticket list.

## North-star outcome

The website should help the right church answer three questions quickly:

1. Is ChurchCRM for a church like mine?
2. Can I understand what it does and see it in action?
3. Can I install it and get started?

The primary measurable outcome is **adoption: downloads and installations**, not generic engagement.

## Positioning

ChurchCRM is an open, affordable, self-hosted church management platform that helps a church get organized around its people and ministry workflows without locking the church into a software vendor.

ChurchCRM is especially relevant to churches with limited budgets, churches that are underserved by other ChMS products, churches that want ownership of their data/system, and churches that want to start with something practical before they know everything they will eventually need.

Do not position ChurchCRM as a feature-for-feature replacement for expensive enterprise ChMS platforms. If a church eventually needs capabilities ChurchCRM does not provide, the website should honestly help that church understand its options.

## Core product story

The product story should be workflow-first:

> People → Groups → Events → Attendance → Volunteers → Giving → Reports

The core conceptual hierarchy is:

- **People & Families** — the foundation.
- **Groups & Ministries** — organize people around ministry.
- **Events & Attendance** — operate recurring church life.
- **Giving & Financial Tracking** — record and understand stewardship.
- **Administration** — permissions, security, backups, localization, and deployment.
- **Extensibility** — plugins, integrations, and APIs.

Avoid leading with database objects or long feature inventories.

## Homepage architecture

Recommended progression:

1. **WHAT IT IS** — a clear hero and one-sentence explanation.
2. **WHAT YOU CAN DO** — the major church workflows.
3. **WHY CHURCHES CHOOSE IT** — open source, ownership, affordability, localization, self-hosting.
4. **SEE IT** — real current application screenshots and short workflow videos.
5. **START** — demo and installation paths.
6. **WHERE WE'RE GOING** — a concise product vision, clearly separated from current functionality.
7. **HELP US BUILD IT** — invite users, developers, translators, and church leaders to shape the future.

A possible hero direction:

> **Church management software you can actually start with.**
>
> Get your people, groups, events, attendance, and giving organized with an open-source system your church controls.

The exact copy should be refined during implementation and tested against real users.

## Conversion model

There are two primary paths:

- **See it first:** Live Demo → understand workflows → Install.
- **Ready to start:** Install → technical documentation → successful first run.

Secondary actions can include GitHub/community participation, but should not compete visually with the installation path.

### Measurement

Primary KPI:

- GitHub release asset downloads, interpreted by release and time window.

Secondary adoption signal:

- Softaculous installations, if aggregate installation data can be obtained.

Diagnostic metrics:

- landing-page visits
- demo starts
- installation-page visits
- outbound clicks to GitHub/Softaculous
- campaign/referral attribution

Do not describe a GitHub asset download as a unique church installation. The GitHub counter is a download count, not a unique-customer measure and does not preserve website UTM attribution by itself.

## Content architecture

The website should answer real questions churches ask rather than create pages simply to target keywords.

Recommended evergreen content areas:

- What is ChurchCRM?
- Is ChurchCRM right for my church?
- Church member management
- Groups and ministries
- Events, attendance, and check-in
- Giving and financial tracking
- Sunday School and kiosk check-in
- Volunteer management
- Self-registration and verification
- International/localized church management
- Self-hosting and installation
- Security, permissions, and backups
- Plugins, integrations, and API
- Migration/import
- Getting started / first week
- Community and contributing
- Product vision

Each page should have one clear job and one obvious next step.

## Current vs future

Every marketing claim must be classified as one of:

- **Today** — available in the current supported release.
- **Coming** — committed work that has been publicly identified as upcoming.
- **Vision** — a direction the project wants community input to shape.

Never present roadmap ideas as existing functionality.

The future-facing story should be explicit and humble:

> Here’s where we think ChurchCRM should go. What are we missing? If you don’t like it, help us build it.

## International strategy on the website

ChurchCRM's international story is broader than translation. The application supports translated interfaces plus localization concerns such as date, time, phone, currency, timezone, and regional formatting.

The website currently has a smaller set of localized languages than the application. Expansion should be driven by evidence rather than translating every page indiscriminately.

Language, country, user base, search demand, and adoption potential should be evaluated separately.

## SEO and AI-search strategy

The foundation is conventional technical SEO plus excellent product content.

Priorities:

- stable, descriptive URLs
- preserve existing `.html` URLs where they have search equity
- permanent redirects for every moved/deleted URL
- one canonical URL per page
- accurate title and description metadata
- correct hreflang relationships
- strong internal linking
- useful structured data that matches visible content
- crawlable HTML and clean navigation
- XML sitemap and robots controls
- direct answers to natural-language church questions
- authoritative, current product facts
- real application screenshots and videos
- clear distinction between current functionality and future vision
- maintain and improve `llms.txt` as supplemental machine-readable guidance

Do not create arbitrary 1,000-word/1,500-word requirements. Do not create content solely because it may produce an AI citation. The goal is useful, trustworthy information.

## URL preservation and migrations

URL changes are an SEO migration, not a cosmetic cleanup.

Before changing a URL:

1. Inventory the current URL.
2. Determine whether it has traffic, links, or search value.
3. Choose the new canonical URL.
4. Add a permanent server-side redirect from the old URL.
5. Update internal links, canonical tags, sitemap entries, and hreflang references.
6. Test for redirect chains and loops.
7. Monitor Search Console and analytics after release.

No old public URL should be removed without an explicit redirect decision.

## Visual product proof

Marketing should use the real ChurchCRM application, not AI-recreated UI.

A future automated Playwright media pipeline should produce current screenshots and short workflow videos from a deterministic synthetic installation. The website should consume those artifacts as a maintained product source.

Priority workflows include:

- people/family management
- groups
- event creation and attendance
- kiosk check-in/out
- Sunday School
- donation entry and financial workflow
- volunteer assignment
- self-registration
- first-run setup
- permissions/security
- localization
- backup/restore

## Trust and proof

Trust should come from:

- transparent open-source development
- current release information
- real product UI
- real user stories with permission
- visible community participation
- clear documentation
- honest limits
- security practices
- accurate installation requirements

Do not use stale counters, unsupported customer numbers, fabricated testimonials, or exaggerated claims.

## External discovery

Directory/review profiles can support discovery and credibility, but should be prioritized by adoption impact rather than vanity SEO.

Softaculous is a particularly important installation/discovery channel because it represents a separate path to installation. Its listing should remain synchronized with current ChurchCRM positioning, capabilities, screenshots, and release information.

## Implementation principles

- Optimize for jobs, not database objects.
- Optimize for adoption, not page views.
- Preserve search equity before improving URL aesthetics.
- Tell the truth about today's product.
- Make the future exciting without pretending it exists.
- Use real software visuals.
- Treat localization as a product capability, not just a translation count.
- Keep the website useful to nontechnical church leaders while preserving technical depth in documentation.
- Make it easy to start and easy to decide whether ChurchCRM is the right fit.
