# Blog ideas — ChurchCRM 7.1 user-experience enhancements

Drafted 2026-04-12 after reviewing `master` commits since tag `7.0.0` in `CRM/`. These are candidate blog posts for `ChurchCRM.io/` (and cross-posting links in `docs.churchcrm.io/`). Each entry notes the key commits for reference.

## 1. "Meet the new ChurchCRM: Tabler UI, Bootstrap 5, and a modern shell"
Headline announcement of the full UI migration from AdminLTE/BS4 → Tabler/BS5. Cover screenshots before/after, the responsive sidebar, the floating mobile menu, and the new dark mode + accent color theming.
- `ede1bfb08` feat: migrate UI shell from AdminLTE/BS4 to Tabler/BS5
- `c19e760d6` feat: BS4→BS5 global cleanup sweep
- `f554f3445` fix(css): scope global overrides, remove ~170 lines of dead CSS
- `3b85a0ac2` feat: responsive sidebar and floating menu toggle for tablet/mobile
- `24549b218` ui: responsive guidelines + mobile UX cleanup

## 2. "Maps without an API key: goodbye Google Cloud, hello OpenStreetMap"
Huge admin UX win. No more Google Cloud setup, no billing, no key rotation. Leaflet + Nominatim. Explain fair-use, self-hosting option for very large churches, and how existing lat/lng data carries over.
- `51fab7144` refactor: replace Google Maps with Nominatim geocoding, improve map UX
- `b2791b6a0` feat: add /api/map/neighbors/{familyId} endpoint

## 3. "First run, reimagined: the new onboarding wizard"
The guided first-run flow — forced password change, church info, Get Started checklist. Walk through what new admins see on day one.
- `2a8ec1b5b` feat: admin onboarding UX — Get Started wizard and setup progress checklist
- `5fd460997` feat(admin): enforce church name configuration on first run via middleware
- `d9e6954bc` feat: consolidate church info into single page with address defaults
- `a59711598` feat: Add /admin/system/church-info page with routes, tabbed form, auto-geocoding map

## 4. "Upgrade without thinking about it: automatic DB migrations on boot"
Admin-focused post. Explain how ChurchCRM 7.1 runs pending migrations automatically on the next request, so upgrades "just work". Include the downgrade-safety story.
- `d9ec9e722` feat: auto-upgrade database on boot, show mismatch page only for downgrade
- `5858c0463` Upgrade page UX overhaul: fix bugs, Tabler styling, streamlined wizard

## 5. "Redesigned dashboards: Events, Groups, People, and Finance"
Screenshot-heavy tour of the new dashboards, stats widgets, and quick actions.
- `62cf48a9b` Redesign Events Dashboard with stats and improved UI
- `2297a043c` feat: Groups section UI cleanup
- `80a3e620a` Migrate group properties to API, rebuild GroupView as MVC, redesign group UX
- `e28f11bfb` feat: add People Settings panel to people dashboard
- `f3369e7a3` UX: dashboard layout, backup/restore Tabler compliance
- `cc083c20f` Align pledge dashboard UX with finance dashboard style
- `59746ca6d` fix(dashboard): hide deposit widget from non-finance users

## 6. "The new CSV import: drag, drop, done"
Walk through the modern importer — drag-and-drop upload, automatic column mapping, per-row Classification and Family Role, Propel-based writes. Include a "import your old system in 10 minutes" angle.
- `c80eabb4f` feat: modernize CSV import with drag-and-drop upload, auto-mapping, Propel-based execute
- `5af492c8f` feat: Add Classification and FamilyRole fields to CSV import
- `a22778964` feat: Add /admin/export landing page with CSV, ChMeetings, and DB Backup sections

## 7. "Everything about your account in one place: the new User Settings"
Tour of the consolidated User Settings page — profile, password, 2FA, theme, localization, API tokens. Plug dark mode and avatar upload.
- `56d8a18da` feat: redesign user settings with Tabler theme support
- `c28af61a5` feat: consolidate 2FA settings into User Settings page
- `efdf01510` feat: Redirect to original URL after login using secure server-side session

## 8. "Calendar 2.0: offcanvas editing and full modernization"
The calendar page was completely modernized — offcanvas event editor, cleaner views, assorted bug fixes. Great "quality-of-life" post.
- `0dbb1168a` refactor(calendar): full UX modernization, offcanvas layout, bug fixes

## 9. "Print straight from the browser"
Native browser printing replaces the legacy PrintView. Faster, prettier, one less moving part.
- `522722b4b` feat: Replace legacy PrintView with native browser print

## 10. "Unified communication: one system for email, letters, and more"
The new unified communication system with configurable property exclusions. Explain the "build one recipient list, send it anywhere" story.
- `5e02c3ee3` feat: unified communication system with configurable property exclusions
- `1678bd81b` feat: Redesign missing email page to be person-centric with age filters

## 11. "Kiosk check-in made easy"
Better setup flow on the Kiosk Manager admin page, with clear instructions. Target Sunday School / children's ministry leaders.
- `b5dc2204c` feat: improve kiosk admin UX with setup instructions card

## 12. "Deploy ChurchCRM in a single Docker image with FrankenPHP"
Developer-leaning post. Pitch the FrankenPHP image for churches that want one binary, embedded server, no Apache tuning. Include a quickstart.
- `595aab6a4` feat: Add FrankenPHP deployment support

## 13. "Contributing to ChurchCRM just got easier: DDEV for local dev"
Contributor-facing post. `ddev start && ddev setup-churchcrm` — you're running. Pair with the contributing guide.
- `9c56fe694` feat: add DDEV local development environment support
- `848c36d26` chore(ddev): let DDEV auto-manage .ddev/.gitignore

## 14. "Security hardening across 7.1"
Roll up all the security fixes into one credibility post: SQL injection fixes, XSS hardening, auth middleware, IDOR fixes, Discord webhook security notifications. Positions ChurchCRM as actively maintained and audited.
- `9ff646c38` feat(security): add Discord webhook notifications for security events
- `2e20d92c8` fix(security): patch 6 pending SQL injection and permission bypass vulnerabilities
- `d2f7f36e2` fix(security): XSS escaping, API auth middleware, command injection
- `267f7d1b4` fix(deps): resolve all 14 Dependabot security alerts
- `79911dd86` security: fix XSS in search dropdown and PledgeEditor
- `18b211535` Fix API SQL injections, null guards, and security bugs
- `28ea7a296` security: block no-permission users + fix IDOR on person API
- `5691b0dbc` security: add auth middleware to person API routes
- `b3da72a2b` security: fix SQL injection in PledgeEditor queries
- `68be1d12b` security: validate extracted images in backup restore
- `214694eb8` security: fix SQLi in FinancialService + harden API login

## 15. "Events MVC epic: why we rebuilt events from the ground up"
Technical/engineering post for the dev blog. Deep dive on the Event MVC migration.
- `ce9023107` feat(7.2.0): complete Event MVC migration epic + 9 branches consolidation

---

## Lower-priority / short posts

- **"Neighbor finder API"** — new `/api/map/neighbors/{familyId}` endpoint for integrations (`b2791b6a0`)
- **"People-centric missing email report"** with age filters (`1678bd81b`)
- **"GA4 tracking via the plugin system"** — analytics on login/logout pages (`4b4e6c9a2`)
- **"System Reset, redesigned"** — admin page cleanup (`6ebb7d9bb`)
- **"Sunday School full cleanup"** — N+1 queries fixed, dashboard migrated to /groups MVC (`41f9a609d`, `203b6ec46`)
- **"Per-user dismissal for admin notifications"** with wildcard version matching (`167a362ad`)
- **"Notes CRUD via the API"** (`b3edc2258`)

---

## 16. "From $6/month shared hosting to AWS: how to host ChurchCRM for any size church"

Target audience: tech-savvy church volunteer, IT committee member, someone evaluating self-hosting.

Angle: ChurchCRM is flexible enough to run on a $6/month shared hosting plan OR a hardened cloud deployment — and you don't need to make a permanent choice. Start simple, grow into it.

Suggested outline:
- **Option A — Shared hosting (Softaculous):** 5 minutes, no command line, ~$5–$15/mo. Best for most churches under 500 people with no IT volunteer.
- **Option B — cPanel manual:** Same shared hosting, slightly more control. Good first step for tech-curious volunteers.
- **Option C — VPS (DigitalOcean / Hetzner):** $6–$12/mo, full control, better performance, free SSL with Certbot. The sweet spot for churches with one technical volunteer.
- **Option D — Cloud (AWS Lightsail / GCE free tier):** For churches with existing cloud relationships or compliance requirements (e.g., AWS GovCloud for US churches in regulated states).
- **Option E — AWS EC2 + RDS:** Production-grade, fully managed database, scalable. Worthwhile for large congregations or multi-campus churches.

Key message: there's no wrong answer — you can start on shared hosting and migrate to a VPS later in an afternoon. The data moves with you.

Doc cross-link: `docs.churchcrm.io/installation/vps-cloud`

---

## 17. "Your church data, your server: why self-hosted ChurchCRM beats SaaS for many congregations"

Pairs with post #16. Speaks to the data-sovereignty and cost angle.
- No per-member pricing, no seat limits
- Your data stays on your infrastructure (or your chosen cloud provider)
- Open source: you can inspect and extend the code
- Suitable for GDPR, AU Privacy Act, and similar regimes where data residency matters

Target: church leadership making a buy vs. build vs. host decision.

---

## LinkedIn post ideas

### Post A — Hosting range (pairs with blog #16)
Short-form, discovery-focused:

> "Did you know ChurchCRM can run on a $6/month VPS or a full AWS stack?
>
> Most churches start on shared hosting — it's free to try and takes 5 minutes with Softaculous. But if you have a tech volunteer who wants more control, a DigitalOcean or Hetzner droplet gives you:
> - Full Linux access
> - Free SSL via Let's Encrypt
> - Better performance than shared hosting
> - Still under $10/month
>
> And when you outgrow that, you can move to AWS Lightsail or EC2 without touching your data.
>
> We just published a new installation guide covering all five hosting levels — from one-click to cloud. Free and open source.
>
> [link to docs.churchcrm.io/installation/vps-cloud]
>
> #ChurchTech #OpenSource #ChurchManagement #ChurchCRM"

### Post B — Docker transparency
Short note on community ask + honest status:

> "We keep getting asked about a production Docker image for ChurchCRM — and the honest answer is: not yet, but we're working on it.
>
> We shipped a FrankenPHP-based container in 7.1 as an early experiment. It works, but it's not hardened for production. A proper Docker Compose setup with volume management and environment configuration is on the roadmap.
>
> In the meantime, a VPS install takes about 15 minutes and gives you full control. The guide is at docs.churchcrm.io/installation/ubuntu
>
> #ChurchTech #OpenSource #Docker #ChurchCRM"

### Post C — 7.1 release highlights (pairs with blogs #1–#5)
Announce the 7.1 release with the biggest UX wins. Lead with the map story (no more Google API key) since it's the most universally relatable.

> "ChurchCRM 7.1 is out — and the biggest quality-of-life change might surprise you:
>
> Maps and address geocoding now work out of the box. No Google Cloud account. No API key. No billing setup.
>
> We replaced Google Maps with OpenStreetMap + Nominatim — completely free, no account required, and it works on the first install without any configuration.
>
> That plus a full Tabler / Bootstrap 5 UI refresh, an admin onboarding wizard, and a drag-and-drop CSV importer.
>
> Full release notes → [link]
>
> #ChurchTech #OpenSource #ChurchManagement #ChurchCRM #7point1"

---

## Notes for the marketing site

- The `ChurchCRM.io/content/posts/` directory is currently empty — this would be the first blog post collection. Confirm Hugo has a post template/section wired up before publishing.
- Cross-link: each marketing post should link to the matching doc page on `docs.churchcrm.io/`.
- For v7.1 release announcement, use posts #1, #2, #3, #5, #6 as the spine.
