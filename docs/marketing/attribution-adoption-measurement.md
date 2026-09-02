# ChurchCRM Marketing Attribution & Adoption Measurement

## Purpose

Define a repeatable attribution system for ChurchCRM marketing so humans and AI agents can create consistent referral URLs and evaluate campaigns against the outcome that matters: adoption.

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

GitHub release assets provide a direct download count for each release asset. Track the count by release and time window.

Recommended fields:

- release
- release date
- release type
- asset name
- downloads at day 1/7/14/28
- downloads per day
- comparable release benchmark

Compare like with like. Weekly patch/security releases should not automatically be compared with larger feature releases.

GitHub asset downloads are **not unique churches** and do not inherently preserve the source UTM parameters from the website.

### Softaculous installations

Softaculous represents a separate installation path and should be measured separately from GitHub downloads.

If aggregate ChurchCRM installation statistics can be obtained from Softaculous, track them as a second primary adoption signal.

Do not estimate Softaculous installs from GitHub downloads.

## UTM standard

All campaign links pointing to ChurchCRM-owned destinations should use a standardized UTM vocabulary.

Required fields when attribution is useful:

- `utm_source`
- `utm_medium`
- `utm_campaign`

Recommended field:

- `utm_content`

Use `utm_term` only when there is a genuine term-level advertising/search use case.

## Standard source vocabulary

Use lowercase, stable values. Do not create spelling/capitalization variants.

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

For church forums, directories, partner sites, or other referrals, use the site's stable lowercase name as `utm_source` and document the value before reuse.

## Campaign naming

Campaign names should identify the initiative, not the individual post.

Recommended pattern:

`churchcrm_<objective>_<period>`

Examples:

- `churchcrm_awareness_2026q3`
- `churchcrm_demo_2026q3`
- `churchcrm_install_2026q3`
- `churchcrm_open_source_2026q3`
- `churchcrm_international_2026q3`

Avoid dates that imply a campaign is a single day unless that is actually the campaign scope.

## Content naming

`utm_content` should identify the content angle or workflow, for example:

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

Keep values lowercase and use underscores rather than spaces.

## Destination strategy

Do not send every campaign to the homepage.

Choose the page that best completes the reader's current job:

| Intent | Preferred destination |
|---|---|
| Product discovery | Homepage or product overview |
| See the product | Demo |
| Ready to install | Install |
| Member management | Relevant workflow/product page |
| Groups | Relevant workflow/product page |
| Giving | Relevant giving/financial page |
| Self-hosting | Installation documentation |
| Developers | Contributing/API documentation |
| Future vision | Vision page |
| Community | Contributing/community page |

The exact destination URLs must be checked against the current site before campaigns launch.

## AI-agent workflow

When an agent is asked to create a campaign:

1. Identify the audience.
2. Identify the church problem.
3. Identify the content pillar.
4. Select the best landing page.
5. Select the standard source and medium.
6. Select or create the campaign name.
7. Select a content value.
8. Build the UTM URL.
9. Verify every UTM value against this document.
10. Verify the destination URL exists.
11. Verify product claims against Product Truth.
12. Record the campaign metadata.

## Example construction

A LinkedIn post about getting member records organized for an awareness campaign could use:

`utm_source=linkedin`

`utm_medium=social`

`utm_campaign=churchcrm_awareness_2026q3`

`utm_content=member_management`

The final URL should be generated from the real destination page and encoded correctly. Agents should not invent destination paths.

## Attribution limitations

UTMs describe traffic arriving at ChurchCRM-owned destinations. They do not automatically follow a user through an external GitHub download flow.

For example:

> LinkedIn → ChurchCRM install page → GitHub → ZIP download

The UTM can identify the LinkedIn visit to the install page, but the GitHub asset counter alone cannot prove that a specific download came from that visit.

If stronger end-to-end attribution is desired later, design it as a separate measurement project rather than assuming the existing GitHub counter provides it.

## Dashboard

A useful adoption dashboard should contain:

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

### Installation table

- GitHub release downloads
- Softaculous installs, if available
- other verified installation channels

## Decision rules

Use campaign data to answer questions such as:

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
- Treat GitHub and Softaculous counts as separate measures.
- Document changes to measurement definitions.

## Future measurement opportunities

Potential future improvements include:

- automated GitHub release-download collection
- automated Softaculous installation reporting if available
- centralized campaign registry
- conversion reporting by country/language
- release cohort analysis
- landing-page-to-install funnel analysis
- automated UTM validation in CI

These are implementation opportunities, not prerequisites for using this standard.
