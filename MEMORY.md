# ChurchCRM.io Development Memory

Critical patterns, learnings, and conventions for maintaining and improving this website.

---

## Homepage Narrative Strategy <!-- learned: 2026-09-05 -->

**The approved canonical narrative for churchcrm.io** (from `marketing/strategy/website-strategy.md`):

The homepage should make churches think: **"This could actually work for our church."**

### 10-Step Narrative Flow

1. **Hero** — What ChurchCRM is, get-organized outcome
2. **Trust indicators** — 950+ stars, 79+ releases, 50+ languages, since 2013
3. **Why it fits your church** — Organize congregation, groups, events, giving (workflow-focused, not feature-dump)
4. **Why churches choose it** — Free, no subscription, you own your data, open source, made by churches
5. **See the real product** — Authentic screenshots with real UI
6. **Primary CTAs** — Demo and Install with **equal prominence** (no artificial hierarchy)
7. **You're not on your own** — Documentation, community, support
8. **Origin story** — 14+ years serving real churches
9. **Roadmap** — Today/Coming/Vision clearly separated (never position vision as current product)
10. **Community invitation** — Contribute (developers, designers, translators, testers, church members)

### Anti-patterns to avoid

- ❌ Feature dump (12+ feature cards as primary content) → Move to secondary "Explore in detail" section
- ❌ Artificial Demo/Install decision layer → Present with equal visual weight
- ❌ Generic value props (Free, Languages, Privacy, LAMP) → Connect to real church workflows
- ❌ Vague support claims → Link to authoritative docs, community, and FAQ
- ❌ Vision as current product → Keep Today/Coming/Vision clearly separated

### Implementation notes

- Use existing i18n keys from `i18n/en.toml` where possible
- Keep feature cards (screenshots gallery) but reposition as secondary
- All CTA links should point to: `/demo.html`, `/install.html`, `/faq.html`, docs.churchcrm.io, GitHub discussions
- Preserve existing URLs and SEO — no redirects needed
- Use Bootstrap 5 / Tabler CSS classes (no deprecated AdminLTE classes)

---

## Product Claim Verification <!-- learned: 2026-09-05 -->

When marketing claims must be verified:

- **Source of truth:** ChurchCRM/CRM repository
- **Check locations:**
  - `orm/schema.xml` — database schema for feature existence
  - `src/plugins/core/` — plugin capabilities
  - `src/Include/QuillEditorHelper.php`, `.github/workflows/` — real feature support
  - Documentation at `docs.churchcrm.io` — confirmed capabilities
  
**Example:** "Volunteer skills and availability" was claimed but the volunteer-opportunity feature only has: name, description, active, order. No skills or scheduling fields. → Reword to describe what actually exists.

---

## i18n and Translation Strategy

- Translation files at `i18n/{lang}.toml` (Hugo TOML format)
- Keys are categorized by section (nav, hero, feature, gallery, etc.)
- When restructuring homepage: reuse existing keys, add new ones only for genuinely new content
- Never run `npm run locale:build` locally — term extraction is automated outside this repo
- Hand-editing `locale/messages.po` breaks the automation sync with POEditor

---

## URL and SEO Preservation

- `/` → homepage (primary)
- `/church-management-software/` → decision/evaluation page (secondary, category intent TBD)
- All URLs use `| relLangURL` in Hugo templates for proper localization
- Use `relURL` for asset paths to respect root path configuration
- Canonical hreflang set automatically by Hugo; no manual intervention needed

---

## Related Issues and Dependencies

- **#55** (Homepage narrative) — completed with PR #91
- **#56** (Church-management-software page) — completed with PRs #86, #87
- **#72** (FAQ rework) — completed with PR #85
- **#70** (Workflow content architecture) — depends on homepage being narrative-based
- **#75** (Evidence-based content opportunities) — builds on strategy foundation

---

## Quick Reference: Homepage Sections

| Section | Purpose | Status | Notes |
|---------|---------|--------|-------|
| Hero | Headline, subtitle, description, CTAs | ✅ Keep | No changes needed |
| Trust bar | Stats: stars, releases, languages, founding year | ✅ Keep | Links to origin story |
| Why ChurchCRM Fits | Congregation, groups, events, giving workflows | ✅ Added | Replaces generic value props |
| Why Churches Choose It | Free, data ownership, open source, 14 years | ✅ Added | Core positioning |
| Support/Community | Docs, community, FAQ | ✅ Added | Reassurance for prospects |
| Features (Explore) | 12 feature cards, organized by category | ✅ Keep | Positioned as secondary |
| Screenshots Gallery | 6 real product screenshots | ✅ Keep | Authentic product proof |
| Roadmap | Today/Coming/Vision | ✅ Added | Manage expectations |
| Primary CTA Reinforce | "Ready to get organized?" Demo/Install | ✅ Added | Mid-page reinforcement |
| Contributor Invite | "Help us build it" with link to contributing | ✅ Added | Secondary community call |

---

## Design and CSS Notes

- Use Tabler components (Bootstrap 5.3.3 with Tabler extensions)
- Section spacing: `py-16` (normal), `py-24 py-lg-32` (large)
- Container: `container-xl mw-screen-xl` for max-width consistency
- Cards: `card card-elevated` for depth
- Badges: `badge bg-primary|info|secondary|warning` for timeline callouts
- Text utilities: `text-muted`, `fw-semibold`, `fw-bold`, `lead`, `display-6`
- Icons: Font Awesome (`.bi` prefix)

---

## Performance and Builds

- Hugo version: 0.165.0 (set in deploy.yml)
- Build command: `hugo --minify`
- Validation scripts:
  - `node scripts/check-url-normalization.mjs` — no trailing index.html
  - `node scripts/check-metadata.mjs` — titles, descriptions, structured data (if needed)
- Playwright E2E smoke tests run on every push/PR (post-merge to master)
- All 8 languages build in ~700ms

---

## Next Steps for Homepage Evolution

- **#70** (Workflow architecture) — Create dedicated pages for People, Groups, Events, Giving, Volunteers workflows
- **#73** (Testimonials) — Add permission-based user stories to homepage
- **#75** (Content opportunities) — Use Search Console data to validate homepage intent ownership
- Visual media updates — Replace placeholder feature descriptions with real screenshots as product evolves

---

Last updated: 2026-09-05
