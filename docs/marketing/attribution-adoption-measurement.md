# ChurchCRM Marketing Attribution & Adoption Measurement

## Purpose

Define a repeatable attribution system for ChurchCRM marketing so humans and AI agents create consistent referral URLs and evaluate campaigns against the outcome that matters: adoption.

## Measurement philosophy

ChurchCRM should optimize for **downloads and installations**, not vanity metrics.

The measurement hierarchy is:

1. Installations/adoption.
2. Release downloads.
3. Qualified traffic to relevant ChurchCRM pages.
4. Engagement and distribution metrics as diagnostics.

Likes, impressions, followers, and page views are useful only when they help explain adoption.

## Primary adoption channels

### GitHub release downloads

Track each release asset by release and time window, including day 1/7/14/28 downloads, downloads/day, release type, and comparable-release benchmarks.

GitHub asset downloads are **not unique churches** and do not inherently preserve website UTM parameters.

### Softaculous installations

Softaculous is a separate installation channel and also a conversion lever because it can remove server-setup friction. Track aggregate ChurchCRM installation data if it can be obtained.

Do not estimate Softaculous installs from GitHub downloads.

### Future activation signal

Consider an **opt-in, privacy-conscious version/health check** from installed instances in the future. It should collect only what is necessary to understand aggregate active-version/activation behavior, require clear consent where appropriate, document retention, and avoid member, donor, church-identifying, or other sensitive data.

If implemented, an activation measure such as “still active after 30 days” should complement — not replace — download/install counts.

## UTM standard

Campaign links to ChurchCRM-owned destinations should use:

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content` when useful

Use `utm_term` only for genuine term-level advertising/search use cases.

## Standard source vocabulary

Use lowercase, stable values.

| Channel | `utm_source` | `utm_medium` |
|---|---|---|
| LinkedIn | `linkedin` | `social` |
| Facebook | `facebook` | `social` |
| Instagram | `instagram` | `social` |
| X | `x` | `social` |
| Reddit | `reddit` | `social` |
| YouTube | `youtube` | `video` |
| Newsletter | `newsletter` | `email` |
| Search advertising | `google` or approved platform source | `cpc` |

For forums, directories, partner sites, or other referrals, use a documented stable lowercase source.

Only treat `newsletter` as an active channel if an owned email program actually exists.

## Campaign naming

Use:

`churchcrm_<objective>_<period>`

Examples:

- `churchcrm_awareness_2026q3`
- `churchcrm_demo_2026q3`
- `churchcrm_install_2026q3`
- `churchcrm_open_source_2026q3`
- `churchcrm_international_2026q3`

## Content naming

`utm_content` can identify the content angle/workflow:

- `member_management`
- `groups`
- `events_attendance`
- `kiosk`
- `giving`
- `international`
- `open_source`
- `community`
- `vision`
- `getting_started`

Use lowercase and underscores.

## Destination strategy

Choose the page that best completes the reader's job rather than sending every campaign to the homepage.

| Intent | Preferred destination |
|---|---|
| Product discovery | Homepage/product overview |
| See the product | Demo |
| Ready to install | Install |
| Member management | Relevant workflow/product page |
| Groups | Relevant workflow/product page |
| Giving | Relevant giving/financial page |
| Self-hosting | Installation documentation |
| Developers | Contributing/API documentation |
| Future vision | Vision page |
| Community | Contributing/community page |

Exact destination URLs must be checked before publication.

## Canonical campaign/content workflow

The Marketing & AI Content Playbook owns content creation. This document owns the attribution extension. They run in sequence:

1. Identify audience/problem/search intent.
2. Select content pillar and destination.
3. Verify product truth and Today/Coming/Vision status.
4. Draft content.
5. Select standard UTM source/medium/campaign/content values.
6. Build the UTM URL from the verified destination.
7. Validate all UTM values and the destination URL.
8. Record campaign metadata.

This is intentionally one workflow with two responsibilities, not two competing checklists.

## Attribution limitations

UTMs describe traffic arriving at ChurchCRM-owned destinations. They do not automatically follow a user through an external GitHub download flow.

Example:

> LinkedIn → ChurchCRM install page → GitHub → ZIP download

The UTM can identify the LinkedIn visit to the install page, but the GitHub asset counter alone cannot prove that a particular download came from that visit.

## Pre-redesign baseline

Before the website redesign launches, capture a baseline including:

- Search Console clicks/impressions/queries
- top organic landing pages
- analytics traffic to key pages
- demo starts where measurable
- install-page visits
- outbound GitHub/Softaculous clicks
- current indexed URL inventory
- important redirect behavior
- GitHub release-download benchmarks

Store the baseline with a date so post-launch changes can be interpreted rather than guessed.

## Dashboard

### Release table

- release
- date
- release type
- GitHub ZIP downloads at 1/7/14/28 days
- downloads/day
- prior comparable release
- change vs benchmark

### Channel table

- source
- medium
- campaign
- content
- landing page
- sessions/visits
- demo clicks
- install-page clicks
- outbound GitHub clicks
- outbound Softaculous clicks

### Installation/activation table

- GitHub release downloads
- Softaculous installs, if available
- other verified installation channels
- future opt-in activation/30-day active signal, if implemented

## Decision rules

Use campaign data to answer:

- Which church problems attract qualified visitors?
- Which workflows drive demo usage?
- Which content produces installation intent?
- Which channels produce adoption rather than engagement?
- Which languages/countries produce adoption?
- Which landing pages convert qualified visitors into installation actions?

Do not optimize a campaign merely because it has the highest click-through rate.

## Data quality rules

- Use lowercase UTM values.
- Do not create synonyms for an existing source.
- Never put personally identifiable information in UTM parameters.
- Keep campaign names stable once published.
- Do not rename historical campaign values merely for aesthetics.
- Validate destination URLs before publishing.
- Treat GitHub, Softaculous, and future activation as separate measures.
- Document changes to measurement definitions.

## Future measurement opportunities

- automated GitHub release-download collection
- automated Softaculous installation reporting if available
- centralized campaign registry
- conversion reporting by country/language
- release cohort analysis
- landing-page-to-install funnel analysis
- automated UTM validation in CI
- privacy-preserving opt-in version/activation signal

These are implementation opportunities, not prerequisites for using the standard.
