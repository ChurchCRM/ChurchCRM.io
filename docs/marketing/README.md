# ChurchCRM Marketing Strategy

This directory contains the strategy and operating specifications for ChurchCRM website, marketing, AI-assisted content, attribution, visual media, and international growth.

These documents are intentionally proposed for review before implementation work is created.

## Documents

1. [Website Strategy](website-strategy.md) — positioning, information architecture, conversion, SEO/AI search, demand capture, URL preservation, and product proof.
2. [Marketing & AI Content Playbook](marketing-ai-content-playbook.md) — rules for human and AI-generated campaigns/content, including search-intent validation.
3. [Product Truth Specification](product-truth.md) — the claims ChurchCRM marketing can safely make and the evidence required.
4. [Attribution & Adoption Measurement](attribution-adoption-measurement.md) — standardized UTM vocabulary, baseline measurement, and adoption-focused reporting.
5. [Visual Media Pipeline](visual-media-pipeline.md) — automated Playwright screenshots and workflow videos from the real application.
6. [International Marketing Plan](international-marketing-plan.md) — evidence-driven language/country prioritization plus international SEO.
7. [Search Demand Research](search-demand-research.md) — query hypotheses, intent, SERP research, Search Console baseline, and content prioritization.

## Review process

This branch/PR is strategy and specification only.

**Do not create implementation GitHub Issues from these documents until the strategy has been reviewed and merged.**

After merge, implementation work should be derived from the approved documents and should consolidate or replace stale existing issues rather than creating duplicate work.

## Review principles

The strategy should be challenged on three dimensions before implementation:

1. **Truth** — Can ChurchCRM substantiate the claim today?
2. **Demand** — Is there evidence that churches are looking for or need the thing being proposed?
3. **Adoption** — Does the work plausibly help a church discover, evaluate, install, activate, or continue using ChurchCRM?

Search optimization should support useful content, not replace it. Marketing should remain honest about where ChurchCRM is and is not the right fit.

## External audit response

A senior SEO/marketing review of this proposal was incorporated into the current branch. The resulting strategy now explicitly covers:

- free-first positioning
- comparison/alternatives content
- search-demand and SERP validation
- off-page/link/entity strategy
- international SEO, hreflang, and localized keyword research
- pre-redesign Search Console/analytics baselines
- clear CTA hierarchy and installation-friction reduction
- structured-data and mobile/CWV acceptance considerations
- testimonial collection and owned-audience considerations
- a privacy-conscious future activation/version signal
- a single canonical content-to-campaign workflow

The audit also included claims about Jekyll/site-code changes in PR #53 itself. Those claims are not applicable to this PR, which contains strategy Markdown only. The underlying requirements are retained as acceptance criteria for the later website implementation work.
