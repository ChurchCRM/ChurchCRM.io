# ChurchCRM Search Demand Research Specification

## Purpose

Give the website and AI marketing strategy a repeatable way to discover what churches actually search for, prioritize content by demand and intent, and avoid both keyword stuffing and the opposite failure mode: creating useful content without considering whether anyone is looking for it.

This is a research specification. It does not assert search volumes or rankings until they are measured.

## Research principles

- Search demand informs priority; it does not dictate copy.
- Search intent matters more than a raw volume number.
- A query is valuable only when ChurchCRM can provide a genuinely useful answer or product fit.
- Search behavior differs by country and language.
- SERPs must be inspected rather than inferred from keyword tools alone.
- Existing pages should be improved before creating unnecessary duplicates.
- Adoption/download/install outcomes ultimately outrank rankings and traffic.

## Initial query hypotheses

These are hypotheses to validate, not guaranteed high-volume terms.

### Category

- free church management software
- church management software
- church management system
- church CRM
- free church CRM
- open source church management software
- open source church software
- church database software

### Workflow

- church member management software
- church membership database software
- church attendance software
- church group management software
- church check in software
- Sunday School attendance software
- church giving management software
- church donation tracking software

### Decision / alternatives

- church management software alternatives
- free alternative to Planning Center
- Planning Center alternative
- ChurchTrac alternative
- Breeze alternative for churches

### Installation / ownership

- self hosted church management software
- church management software self hosted
- open source church management system
- church management software free download

## Research output

For each priority query, capture:

- query
- language
- country/market
- search intent
- funnel stage
- observed demand/source
- current SERP date
- top result types
- relevant competitors
- ChurchCRM fit
- existing ChurchCRM page, if any
- recommended action
- adoption hypothesis

## Funnel stages

### Discovery

Queries that indicate a church is learning what category or solution exists.

### Evaluation

Queries that compare products, capabilities, cost, ownership, or fit.

### Action

Queries that indicate installation, download, demo, migration, or setup intent.

### Retention/education

Queries from existing users seeking help or workflow guidance.

## SERP review

For high-priority queries, inspect the current SERP and record:

- commercial vs informational intent
- dominant page types
- commercial competitors
- directory/community results
- geographic differences
- whether a ChurchCRM result would satisfy the searcher's job

Do not assume a query is worth pursuing because a keyword tool reports volume.

## Search Console baseline

Before the redesign, capture current Search Console performance for at least:

- clicks
- impressions
- CTR
- average position
- top queries
- top landing pages
- country
- device
- search appearance where available

This baseline is required for evaluating whether a redesign improves or harms organic demand capture.

## Initial Search Console evidence — September 2026

A 16-month Google Search Console Web export was reviewed as the first empirical baseline. The export included query, page, country, device, search-appearance, filter, and daily chart data.

The daily chart contained 488 observations and reported approximately **646,666 impressions and 13,385 clicks** across the period. The query export contained 1,000 rows; because Google Search Console's standard report export can be row-limited/representative, the query table must **not** be treated as the complete universe of queries. Page and country exports contained 371 and 225 rows respectively.

### What the baseline demonstrates

1. **ChurchCRM has substantial generic-category visibility but weak average ranking.** The query `church management software` had 30,523 impressions, 83 clicks, 0.27% CTR, and an average position of 23.54. This is a large visibility opportunity, not an absence of demand.
2. **Free/open-source positioning already has meaningful search traction.** `free church management software` had 5,834 impressions and an average position of 10.96. `open source church management software` performed substantially better at 3,896 impressions, 266 clicks, 6.83% CTR, and position 2.32. `free church CRM` had 2,458 impressions, 63 clicks, 2.56% CTR, and position 3.88.
3. **Several category/workflow terms sit around positions 10–20 with very low CTR.** `church member software` had 9,859 impressions, position 11.68, and 0.01% CTR. `church management software free` had 5,834 impressions, position 10.96, and 1.13% CTR. This supports prioritizing better search-result messaging, page intent, internal linking, and content quality rather than simply publishing more pages.
4. **Some broad category terms are currently weakly ranked.** `church management system` had 8,870 impressions at position 29.91; `church membership software` had 7,099 at position 28.03; and `church database software` had 4,627 at position 33.38. These should be treated as longer-term category opportunities requiring stronger intent-matched pages and authority, not quick-win metadata edits alone.
5. **Branded demand is healthy.** `churchcrm` generated 4,180 clicks from 8,893 impressions at position 1.59; `church crm` generated 1,859 clicks from 12,387 impressions at position 4.87. Branded demand should be protected while generic acquisition is improved.
6. **The homepage URL forms require technical investigation.** `/` appeared with approximately 537,363 impressions, 10,113 clicks, and position 26.05, while `/index.html` appeared with approximately 59,881 impressions, 1,075 clicks, and position 12.16. The magnitude is large enough that canonicalization/indexing/redirect behavior must be investigated before changing URL conventions. This is an implementation finding, not proof by itself that Google is incorrectly indexing both URLs.
7. **International demand is meaningful and uneven.** The country export shows particularly strong CTR/ranking combinations in several markets. Ghana had 3,071 impressions, 461 clicks, 15.01% CTR, position 10.56; Kenya 1,851 / 308 / 16.64% / 9.87; Nigeria 2,670 / 339 / 12.70% / 11.37; and South Africa 3,349 / 419 / 12.51% / 13.83. These are evidence for market research, not proof that localized campaigns will succeed.
8. **The United States has the largest visibility but much weaker average performance.** The export shows 441,346 impressions, 3,810 clicks, 0.86% CTR, and position 22.66 for the United States. This supports separating “largest existing demand” from “best current opportunity.”
9. **Giving should remain a product/workflow capability rather than the primary acquisition category.** The available query export does not show giving-related searches at the scale of core church-management/category terms. Do not make online giving the main SEO acquisition thesis without stronger evidence.
10. **Mobile is meaningful and should remain part of the UX strategy.** The device export shows 109,228 mobile impressions and 3,480 clicks with 3.19% CTR, versus 535,336 desktop impressions and 9,776 clicks with 1.83% CTR. This does not justify a native-app marketing strategy; it supports continued responsive-web optimization.

### Initial content opportunity tiers

Based on the first-party Search Console baseline, the initial priority order should be:

**Tier 1 — category + free**

- church management software
- free church management software
- free church management software for small churches
- free church CRM
- church membership software
- free church membership software
- church database software
- free church database software

**Tier 2 — differentiation/ownership**

- open source church management software
- open source church software
- church management software open source
- self-hosted church management software
- church management software without subscription/per-member pricing where the query is actually observed

**Tier 3 — decision support**

- best church management software
- best free church management software
- church management software comparison
- church CRM alternatives
- alternatives to named commercial products where demand is demonstrated

**Tier 4 — workflows**

- church member management
- church directory
- church attendance
- Sunday School management
- church volunteer management
- church group management
- church event management
- church donation tracking

**Tier 5 — installation/technical**

- ChurchCRM download
- ChurchCRM installation
- self-hosted church management software
- church management software Docker
- church management software hosting

These tiers are strategic starting points, not permanent keyword assignments. Revalidate them as the site changes and new Search Console data accumulates.

### Search Console interpretation rules

- Do not add query-level metrics across the 1,000-row export and call the result total site search traffic.
- Use the Search Console chart for overall period totals/trends and query/page tables for opportunity analysis.
- Treat anomalous or unusually verbose queries as potential data noise until confirmed by broader evidence.
- A high-impression query at position 5–20 is not automatically a page opportunity; inspect intent, current ranking page, SERP, and ChurchCRM fit.
- A high-ranking query with poor CTR should trigger title/snippet and intent investigation before a new page is created.
- A query cluster with several related terms should generally map to one strong page when the intent is the same rather than many thin pages.
- Search Console evidence should inform content priority, but adoption/download/install outcomes remain the final business measure.

## International research

For each serious language/country opportunity:

1. Identify the local category term.
2. Identify local workflow terms.
3. Identify “free” and “open source” terminology.
4. Identify local alternative/comparison searches.
5. Review the local SERP.
6. Identify local competitors/directories/community sources.
7. Evaluate ChurchCRM product and localization fit.
8. Define the recommended content/landing page.

Do not simply translate the English keyword list.

## Content prioritization

Prioritize topics using a combination of:

- search demand
- intent strength
- ChurchCRM fit
- competition/SERP opportunity
- content quality opportunity
- localization readiness
- conversion path
- expected installation/adoption value

A lower-volume query with strong installation intent may be more valuable than a high-volume informational query.

## AI-agent integration

AI content agents should consult this specification when creating discoverability-oriented content. They should not invent search volume, ranking position, or market demand.

If current demand evidence is unavailable, label the demand as an unvalidated hypothesis.

Agents should prefer existing first-party Search Console evidence over generic keyword-tool estimates when both are available, while recognizing Search Console's export limitations.

## Maintenance

Review the query set periodically and after major product/positioning changes. Add queries based on actual Search Console data and user language, not just SEO-tool suggestions.

The first empirical baseline should be retained with its export date and source files so future comparisons use a consistent measurement definition.
