---
title: "ChurchCRM Runs on PHP 8.4. ChurchInfo Doesn't."
date: "2026-07-11"
lastmod: "2026-07-11"
author: "George Dawoud"
description: "If your ChurchInfo installation broke after a PHP upgrade, here's why — and how to migrate to ChurchCRM, the actively maintained successor with PHP 8.4 support."
summary: "ChurchInfo can't run on PHP 8.4. ChurchCRM can — and it imports your data natively. Here's how to make the move."
keywords: "ChurchInfo to ChurchCRM migration, ChurchInfo PHP 8.4 broken, ChurchCRM PHP 8.4, migrate from ChurchInfo, church management software upgrade"
tags: ["migration", "ChurchInfo", "how-to", "self-hosted", "security", "PHP"]
featured_image: "/images/blogs/churchinfo-upgrade-hero.jpg"
featured_image_alt: "Church entrance portal — a fresh start with ChurchCRM on PHP 8.4"
image_credit: "Entrance Portal, Fourth Presbyterian Church, Chicago — Wikimedia Commons (public domain)"
---

If your ChurchInfo installation just stopped working after a PHP upgrade, you're not alone. And the fix isn't to roll PHP back.

ChurchInfo can't run on PHP 8.4. ChurchCRM can.

## Why ChurchInfo Breaks

ChurchInfo was built for PHP 5.x and early 7.x — versions that reached end-of-life years ago. PHP 8.4 removed the deprecated functions and patterns that ChurchInfo relies on. When your hosting provider updated PHP, it wasn't a misconfiguration — it was PHP moving forward while ChurchInfo stayed still.

Running PHP 7.x to keep ChurchInfo alive means running software with known, unpatched security vulnerabilities. Your congregation's member data, giving history, and contact records deserve better than that.

## ChurchCRM Runs on PHP 8.4

ChurchCRM is the actively maintained successor to ChurchInfo. We test every release against PHP 8.4 (and 8.5). Security patches ship regularly. The codebase is current.

You're not switching to a different philosophy or a different mission — you're stepping forward on the same road, with software that's actually being looked after.

## Migrating Your Data

The move is designed to be direct. ChurchCRM's restore tool was built with ChurchInfo in mind and supports ChurchInfo database exports natively.

**Step 1 — Back up your ChurchInfo database.**
Export it as a `.sql` file using phpMyAdmin or your host's tools. Do this before anything else.

**Step 2 — Install ChurchCRM.**
Download the latest release from [churchcrm.io](https://churchcrm.io) and run the setup wizard. About 10 minutes on shared hosting.

**Step 3 — Restore from your ChurchInfo backup.**
During setup, you'll be prompted to restore from a previous backup. Upload your ChurchInfo `.sql` file. ChurchCRM recognizes the format and upgrades the schema automatically.

**Step 4 — Verify and go.**
Spot-check a few family records, confirm giving history, configure email settings, and you're live.

**What comes with you:** members and families, contact info, group memberships, donation and pledge history.

**What to set up fresh:** user accounts and passwords, SMTP settings, church name and logo.

## Get Help From the Community

Our Discord has people who've made this exact move. Post your question and someone will usually respond within the hour.

- **Download ChurchCRM:** [churchcrm.io](https://churchcrm.io)
- **Community Discord:** [discord.gg/tuWyFzj3Nj](https://discord.gg/tuWyFzj3Nj)
- **GitHub:** [github.com/ChurchCRM/CRM](https://github.com/ChurchCRM/CRM)

Your congregation's data has been building for years. It belongs in software that can keep up.

---

*ChurchCRM is free, open-source church management software used by congregations in 55+ languages worldwide.*
