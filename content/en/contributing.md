---
title: "How to Contribute"
description: "ChurchCRM welcomes developers, designers, translators, testers, writers, social media managers, and anyone who wants to help more churches access great tools for free."
date: "2026-04-26"
lastmod: "2026-09-09"
---

ChurchCRM is a community project. Every church that uses it does so because someone — a volunteer, a developer, a designer, a pastor's assistant — gave a little of their time to make it better.

**You don't need to write code to make a meaningful contribution.** Churches need to find ChurchCRM, understand it, and feel confident choosing it. That takes writers, designers, testers, social media managers, translators, and developers working together.

**AI tools are welcome here.** If you have an idea but not the technical background to build it yourself, tools like Claude Code, GitHub Copilot, or ChatGPT are a legitimate way to turn that idea into a working plugin, a documentation fix, or a first pull request — see the wiki's **[AI Agent Workflow](https://github.com/ChurchCRM/CRM/wiki/AI-Agent-Workflow)** guide for how to use them safely on this codebase. Just be upfront that AI helped, test what it produces, and expect the same review as any other PR.

![ChurchCRM admin dashboard](/images/screenshots/desktop/dashboard-admin.png)

*This is what you'd be contributing to — the real, current interface, not a mockup.*

---

## Every Skill Matters

| Your skill | How you help |
|------------|-------------|
| **Developer** | Fix bugs, add features, build community plugins |
| **Plugin builder** | Create integrations ChurchCRM doesn't include yet |
| **QA tester** | Find bugs, test new features, validate fixes |
| **Designer** | UI/UX improvements, logo work, social graphics |
| **Writer / content creator** | Blog posts, tutorials, case studies |
| **Documentation writer** | User guides, admin docs, developer wiki |
| **Translator** | Translate ChurchCRM into your language |
| **Social media manager** | Grow ChurchCRM's presence and reach |
| **Photographer / image creator** | Screenshots, promotional images, social assets |
| **Community helper** | Answer questions on Discord and GitHub |

---

## No Code Required

### Write Content

ChurchCRM's story needs to be told. Blog posts, tutorials, how-to guides, and church testimonials help other congregations understand what ChurchCRM can do and feel confident choosing it.

**What's needed:** blog posts about features and use cases, church testimonials, tutorial articles, comparison guides for churches evaluating software.

**Where to contribute:** open an issue on [GitHub](https://github.com/ChurchCRM/CRM/issues) with the `documentation` label, or share your draft on [Discord](https://discord.gg/tuWyFzj3Nj).

### Improve Documentation

The [official documentation site](https://docs.churchcrm.io) covers every feature but always needs clearer explanations, better examples, and updated screenshots. The docs are Markdown files in the [docs.churchcrm.io repository](https://github.com/ChurchCRM/docs.churchcrm.io) — **no GitHub experience required**, you can [edit pages directly in the browser](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files).

### Translate

ChurchCRM is used in 49 languages. Every new translation opens ChurchCRM to churches that couldn't use it before — no Git required:

1. Join the [ChurchCRM POEditor project](https://poeditor.com/join/project/RABdnDSqAt)
2. Select your language (or request a new one)
3. Translate strings directly in the browser
4. Translations are pulled into the next release automatically

**See:** [Localization for Translators](https://docs.churchcrm.io/administration/localization)

### Test the Application

You don't need to be a developer to test ChurchCRM. Try new releases across browsers and devices, walk through common workflows (adding families, recording attendance, generating reports), and report anything confusing or broken on [GitHub Issues](https://github.com/ChurchCRM/CRM/issues) — or [test the live demo](https://churchcrm.io/demo.html). Use the [Bug Reporting Guide](https://docs.churchcrm.io/troubleshooting) to file a useful report.

### Design & Create Images

ChurchCRM's site, docs, and social presence all need visual assets: updated screenshots, social graphics, promotional images, and honest UI/UX feedback on what feels confusing. **Share your work** on [Discord](https://discord.gg/tuWyFzj3Nj) in `#marketing`, or open a GitHub issue with the `design` label.

### Social Media & Marketing

ChurchCRM has thousands of users but most churches have never heard of it — spreading the word is one of the highest-leverage ways to help. Share ChurchCRM where churches gather (Facebook groups, LinkedIn, X/Twitter), write reviews on Capterra/G2/SourceForge/AlternativeTo, or suggest content ideas for ChurchCRM's own channels. **Connect** on [Discord](https://discord.gg/tuWyFzj3Nj) to coordinate.

### Answer Questions in the Community

A quick, helpful answer on [Discord](https://discord.gg/tuWyFzj3Nj) or [GitHub Discussions](https://github.com/ChurchCRM/CRM/discussions) saves a church admin hours of frustration. No expertise required beyond having used ChurchCRM for a while.

---

## Developer Contributions

### Contribute to the Core Application

1. Get a [GitHub account](https://github.com/signup/free)
2. Join [Discord](https://discord.gg/tuWyFzj3Nj) and introduce yourself
3. Find a [`good first issue`](https://github.com/ChurchCRM/CRM/labels/good%20first%20issue)
4. Set up your [development environment](#setting-up-your-development-environment)
5. Open a pull request — **every PR must link to an open issue** (open one first if it doesn't exist)

### Build a Community Plugin

Add a feature ChurchCRM doesn't include yet — a third-party integration, a custom workflow, a specialized report — without touching core code. Plugins survive upgrades; direct modifications to source files don't.

![Plugin management in ChurchCRM](/images/screenshots/desktop/admin-plugin-management.png)

**Best for:** service integrations (MailChimp, SMS, OpenLP), church-specific workflows, optional features not every install needs. **Start here:** [Plugin development guide](https://docs.churchcrm.io/administration/plugins/).

---

## Setting Up Your Development Environment

The full, current setup steps (Codespaces, Dev Containers, DDEV), coding standards, and testing requirements live on the project wiki — not duplicated here, so there's one place for them to stay accurate as the stack changes:

- **[Development Guide](https://github.com/ChurchCRM/CRM/wiki/Development)** — environment setup, dev cycle, npm scripts
- **[Code / Style Guide](https://github.com/ChurchCRM/CRM/wiki/Code-Conventions---Style-Guide)** — coding standards and conventions
- **[Cypress Testing Guide](https://github.com/ChurchCRM/CRM/wiki/Testing)** — how to write and run tests (required on every PR)

---

All contributors follow our [Code of Conduct](CODE_OF_CONDUCT.md). Thank you — every contribution, no matter how small, helps a church somewhere run a little better.

Want the bigger picture — where the community talks, how support works, how decisions get made? See **[Community & Support](/community.html)**.
