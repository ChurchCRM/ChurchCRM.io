# ChurchCRM Website Strategy

## Purpose

Define the strategy for modernizing churchcrm.io so it explains ChurchCRM clearly, converts qualified visitors into installations, preserves search equity, captures existing search demand, and provides a credible foundation for search engines, AI answer systems, and future marketing agents.

This is a strategy document, not an implementation ticket list.

## North-star outcome

The website should help the right church answer three questions quickly:

1. Is ChurchCRM for a church like mine?
2. Can I understand what it does and see it in action?
3. Can I install it and get started?

The primary measurable outcome is **adoption: downloads and installations**, not generic engagement.

## Positioning

ChurchCRM is **free and open-source church management software** that is self-hosted and helps churches organize people and families and the ministry workflows around groups, events, attendance, giving, volunteers, reporting, administration, and related church operations.

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
3. **WHY CHURCHES CHOOSE IT** — free/open source, ownership, localization, self-hosting, and practical fit.
4. **SEE IT** — real current application screenshots and short workflow videos.
5. **START** — demo and installation paths, with the easiest installation route clearly surfaced.
6. **WHERE WE'RE GOING** — a concise product vision, clearly separated from current functionality.
7. **HELP US BUILD IT** — invite users, developers, translators, and church leaders to shape the future.

A possible hero direction:

> **Church management software you can actually start with.**
>
> Free and open-source software to organize your church's people, groups, events, attendance, and giving — with a system your church controls.

The exact copy should be refined during implementation and tested against real users. The phrase “free and open-source” should remain prominent because it is both true and central to category/search intent.

## Conversion model

The website should intentionally reduce the biggest adoption barrier: getting installed.

Primary paths:

- **See it first:** Live Demo → understand workflows → Install.
- **Ready to start:** Install → choose easiest deployment path → first run.
- **Need help deciding:** Is ChurchCRM right for your church? → honest fit guidance → Demo or Install.

Installation options should be framed as conversion levers, not merely technical alternatives:

- Softaculous/one-click installation where available
- documented hosting/control-panel paths
- conventional Linux/VPS deployment
- Docker where supported at the relevant maturity level

The homepage should surface the easiest supported installation path without making technical prerequisites the main story.

Secondary actions such as GitHub/source/community should not compete visually with the primary adoption path.

### CTA hierarchy

Use a clear two-tier hierarchy:

- **Primary:** Try the Live Demo or Install ChurchCRM, depending on page intent.
- **Secondary:** View Source / GitHub, Documentation, or other technical/community actions.

Do not give Demo, Download, GitHub, and every other action equal visual weight.

### Measurement

Primary KPI:

- GitHub release asset downloads, interpreted by release and time window.

Secondary adoption signals:

- Softaculous installations, if aggregate data can be obtained.
- Future opt-in activation/version signals if the project deliberately adds them with appropriate privacy controls.

Diagnostic metrics:

- landing-page visits
- demo starts
- installation-page visits
- outbound clicks to GitHub/Softaculous
- campaign/referral attribution

Do not describe a GitHub asset download as a unique church installation.

## Content architecture

The website should answer real questions churches ask **and use search demand to decide which questions deserve priority**.

Recommended content areas:

- What is ChurchCRM?
- Is ChurchCRM right for my church?
- Church member management
- Church database software
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
- **Alternatives and comparisons**
- **Release/news and educational articles**, if the blog remains active

Each page should have one clear job and one obvious next step.

### Comparison and alternatives strategy

Comparison content is a legitimate high-intent content pillar when it is factual and useful.

Potential topics include:

- ChurchCRM alternatives
- Free alternatives to commercial church management software
- ChurchCRM vs Planning Center
- ChurchCRM vs ChurchTrac
- ChurchCRM vs Breeze/Tithely
- other competitor comparisons where there is demonstrated search demand

Rules:

- compare verified capabilities, pricing models, hosting/ownership models, and fit
- source facts from authoritative current sources
- state where ChurchCRM is weaker as well as where it is stronger
- never disparage competitors
- never imply ChurchCRM is the best choice for every church
- use Product Truth for ChurchCRM claims
- label volatile pricing/features with dates or review procedures

The goal is decision support, not “winning” every comparison.

## Search-demand strategy

The project should maintain a small, evidence-based target-query set. This is not keyword stuffing and does not impose word-count requirements.

### Initial query hypotheses to validate

**Category:**

- free church management software
- church management software
- church management system
- church CRM
- free church CRM
- open source church management software
- open source church software

**Workflow:**

- church member management software
- church membership database software
- church attendance software
- church group management software
- church check in software
- Sunday School attendance software
- church giving management software
- church donation tracking software

**Decision/alternatives:**

- church management software alternatives
- free alternative to Planning Center
- Planning Center alternative
- ChurchTrac alternative
- Breeze alternative for churches

These are **research hypotheses, not approved target keywords**. Validate them using Search Console, current SERPs, keyword research, and actual conversion/adoption data before making prioritization decisions.

### Keyword/search-intent validation

Before creating substantial search-oriented content, the agent or marketer should:

1. Identify the audience/problem.
2. Identify likely search intent.
3. Check the approved target-query set and current search demand.
4. Review the actual SERP for the relevant market.
5. Confirm ChurchCRM has a useful answer/product fit.
6. Check Product Truth.
7. Choose or create the appropriate landing page.

Do not create pages for queries where ChurchCRM cannot provide a genuinely useful answer.

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

Language, country, user base, search demand, SERP competition, product localization readiness, and adoption potential should be evaluated separately.

## SEO and AI-search strategy

The foundation is conventional technical SEO plus excellent product content. AI-search visibility should be treated as an outcome of clear, authoritative, well-structured information rather than a separate trick.

Priorities:

- stable, descriptive URLs
- preserve existing URL equity
- permanent redirects for every moved/deleted public URL
- one canonical URL per page
- accurate title and description metadata
- exactly one clear page-level H1 and logical H2/H3 hierarchy
- correct hreflang relationships
- strong internal linking
- useful structured data that matches visible content
- crawlable HTML and clean navigation
- XML sitemap and robots controls
- direct answers to natural-language church questions
- search-demand-informed content priorities
- authoritative, current product facts
- real application screenshots and videos
- clear distinction between current functionality and future vision
- maintain and improve `llms.txt` as supplemental machine-readable guidance

### Structured data

Use structured data deliberately and only where the visible page supports it. The core types to evaluate are:

- `SoftwareApplication` — including the free software offer where accurate.
- `Organization` — consistent ChurchCRM identity information.
- `FAQPage` — only where the page contains genuine, visible FAQs and the format is appropriate.

Also maintain appropriate `WebSite`, `BreadcrumbList`, and article/blog structured data where applicable. Structured data is supporting evidence, not a substitute for useful content.

### Page-level heading and metadata standard

Every public page should have:

- one clear H1 describing the page's primary intent
- sequential, meaningful H2/H3 headings
- an explicit title
- a useful, page-specific meta description
- canonical URL
- appropriate Open Graph/Twitter metadata

The exact wording should be based on the page intent, not forced keyword repetition.

### Performance and mobile acceptance

The redesign must include a mobile/CWV check. Images should have explicit dimensions where possible, non-critical images should be lazy-loaded, and media should be compressed/optimized. The hero/LCP path should receive special attention.

Do not add visual weight that materially harms the mobile experience merely to make the site look richer.

Do not create arbitrary 1,000-word/1,500-word requirements. Do not create content solely because it may produce an AI citation. The goal is useful, trustworthy information.

## URL preservation and migrations

URL changes are an SEO migration, not a cosmetic cleanup.

Before changing a URL:

0. **Capture the pre-migration baseline** — Search Console performance, analytics/traffic, indexed URLs, top landing pages, important queries, backlinks where available, and current redirects.
1. Inventory the current public URL and classify its current convention (`.html`, directory-style, blog, etc.).
2. Determine whether it has traffic, links, or search value.
3. Choose the new canonical URL.
4. Add a permanent server-side redirect from the old URL.
5. Update internal links, canonical tags, sitemap entries, and hreflang references.
6. Test for redirect chains, loops, and accidental 404s.
7. Monitor Search Console and analytics after release.

The current site uses a **mixed URL convention**: some top-level pages use `.html` while paths such as `/church-management-software/` and `/blog/` are directory-style. The redesign should not assume a uniform existing convention.

No old public URL should be removed without an explicit redirect decision.

## International SEO requirements

International SEO is part of the website strategy, not just a translation concern. See the International Marketing Plan for the market-selection process.

The implementation must define and test:

- language subdirectory structure
- canonical URLs for each localized page
- reciprocal `hreflang` relationships
- `x-default` behavior where appropriate
- language-region combinations where supported by actual content
- sitemap handling for localized URLs
- internal links between language variants where useful
- prevention of accidental canonicalization of translated pages to English

The existing eight website languages should be audited before redesign so that every live localized URL has a deliberate canonical/hreflang outcome.

## Off-page, links, and entity strategy

ChurchCRM has no reason to rely exclusively on on-site content. Build compounding authority through legitimate earned links and consistent entity information.

### Link/listing audit

Audit and maintain relevant listings across:

- open-source software directories
- church technology directories/blogs
- self-hosted software lists
- software review/comparison sites
- AlternativeTo-style sites
- Capterra/GetApp/Software Advice where worthwhile
- G2 where worthwhile
- SourceForge and similar OSS discovery sites
- curated open-source/self-hosted lists
- denominational or church-technology networks
- community partners

For every listing, record current URL, claimed product facts, link status, freshness, and whether an update/request is worthwhile.

Do not pursue links through spam, paid link schemes, or irrelevant directories.

### Entity consistency

Maintain consistent ChurchCRM identity information across:

- churchcrm.io
- GitHub
- software directories
- knowledge/entity systems where an appropriate legitimate profile exists
- community profiles

The canonical identity should consistently communicate the product name, category, free/open-source status, self-hosting model, and official website. Investigate whether an appropriate Wikidata/entity record exists before creating or changing one; do not create an entity solely as an SEO shortcut.

## Visual product proof

Marketing should use the real ChurchCRM application, not AI-recreated UI.

A future automated Playwright media pipeline should produce current screenshots and short workflow videos from a deterministic synthetic installation. The website should consume those artifacts as a maintained product source.

Priority workflows include people/family management, groups, event attendance, kiosk check-in/out, Sunday School, giving/financial workflows, volunteer assignment, self-registration, first-run setup, permissions/security, localization, and backup/restore.

## Trust, testimonials, and owned audience

Trust should come from transparent open-source development, current product visuals, real user stories with permission, visible community participation, documentation, honest limits, security practices, and accurate installation requirements.

The existing testimonials page should be supported by a lightweight collection process:

- post-install feedback request
- community/forum request for stories
- release-note/community call for testimonials
- permission to publish
- attribution and optional church details
- privacy review before publication

Do not fabricate testimonials or publish registration/contact information.

If the project wants an owned audience, add a clear, privacy-conscious email option for useful updates such as releases or getting-started guidance. If no email program is intended, remove `newsletter` from the active campaign taxonomy rather than defining a channel that does not exist.

## Blog / ongoing publishing

Decide explicitly whether the existing blog is an active publishing channel or legacy content.

If active, give it a purpose:

- useful church-technology education
- workflow/how-to content
- release context that is more useful than a changelog
- community stories
- localization/community stories
- open-source education
- comparison/decision content

An active publishing channel should have a sustainable cadence, even if that cadence is modest. Do not publish filler solely for freshness.

## External discovery

Directory/review profiles should be treated as **discovery, links, entity consistency, and credibility assets** and prioritized by likely adoption impact.

Softaculous is particularly important because it is both a discovery channel and a lower-friction installation path. Its listing should remain synchronized with current ChurchCRM positioning, capabilities, screenshots, and release information.

## Implementation principles

- Optimize for jobs, not database objects.
- Optimize for adoption, not page views.
- Preserve search equity before improving URL aesthetics.
- Capture a baseline before migration.
- Capture demand before creating search content.
- Tell the truth about today's product.
- Make the future exciting without pretending it exists.
- Use real software visuals.
- Treat localization as a product capability, not just a translation count.
- Build legitimate earned authority and consistent entity identity.
- Make installation friction visible and solvable.
- Keep the website useful to nontechnical church leaders while preserving technical depth in documentation.
- Make it easy to decide whether ChurchCRM is the right fit.
