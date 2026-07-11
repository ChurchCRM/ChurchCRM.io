---
title: "How to Upgrade from ChurchInfo to ChurchCRM"
date: "2026-07-11"
lastmod: "2026-07-11"
author: "George Dawoud"
description: "If your ChurchInfo installation broke after a PHP upgrade, it's time to move. ChurchCRM is the actively maintained successor with full PHP 8.x support and regular security patches."
summary: "ChurchInfo hasn't had a security patch in years. ChurchCRM runs on current PHP, ships regular security fixes, and imports your ChurchInfo data natively. Here's how to make the move."
keywords: "ChurchInfo to ChurchCRM migration, ChurchInfo PHP 8 broken, ChurchInfo security, ChurchCRM upgrade, migrate from ChurchInfo"
tags: ["migration", "ChurchInfo", "how-to", "self-hosted", "security"]
featured_image: "/images/blogs/churchinfo-upgrade-hero.jpg"
featured_image_alt: "Church entrance portal — a fresh start with ChurchCRM after migrating from ChurchInfo"
image_credit: "Entrance Portal, Fourth Presbyterian Church, Chicago — Wikimedia Commons (public domain)"
---

If your ChurchInfo installation just broke after a PHP upgrade, you're not alone — and you're not out of options. But before you chase a fix, it's worth understanding what's actually going on.

## ChurchInfo Is No Longer Maintained

ChurchInfo hasn't received a security patch or meaningful update in years. The PHP versions it was built for — 5.x and early 7.x — are long past their end-of-life. That means your church has been running software with known, unpatched security vulnerabilities: a real risk for any system holding your congregation's personal data.

When your hosting provider bumped PHP to 8.x, ChurchInfo stopped working. You can roll PHP back as a temporary workaround, but you'd be running unsupported, unpatched software — and buying yourself time, not a solution.

## ChurchCRM Is Always Current

ChurchCRM is the actively maintained successor to ChurchInfo. We ship regular releases that track current PHP versions and include security fixes. Right now, ChurchCRM runs cleanly on PHP 8.1, 8.2, and 8.3 — all versions actively receiving security patches from the PHP team.

Your congregation's data is sensitive. It deserves software that someone is actually looking after.

## Migrating Your Data

The move from ChurchInfo to ChurchCRM is designed to be direct. ChurchCRM's restore tool supports ChurchInfo database backups natively — your members, families, giving history, and group records come with you.

**The short version:**

1. **Export your ChurchInfo database** as a `.sql` file using phpMyAdmin or your host's database tools. Back this up safely before anything else.

2. **Install ChurchCRM** — download the latest release from [churchcrm.io](https://churchcrm.io) and run the setup wizard. It takes about 10 minutes.

3. **Restore from your ChurchInfo backup** — during setup, ChurchCRM will prompt you to restore from a previous backup. Upload your ChurchInfo `.sql` file. ChurchCRM recognizes ChurchInfo exports and upgrades the database schema automatically.

4. **Verify and go** — spot-check a few family records, confirm giving history looks right, set up your email settings, and you're live.

**What carries over:** members and families, contact info, group memberships, donation and pledge history.

**What to set up fresh:** user accounts and passwords, SMTP / email settings, church name and logo.

## You Don't Have to Do This Alone

Our Discord community is full of people who've made this exact move. Post a question and someone will help — usually within the hour.

- **Download ChurchCRM:** [churchcrm.io](https://churchcrm.io)
- **Community Discord:** [discord.gg/tuWyFzj3Nj](https://discord.gg/tuWyFzj3Nj)
- **GitHub:** [github.com/ChurchCRM/CRM](https://github.com/ChurchCRM/CRM)

Your congregation's data has been building for years. It belongs in software that's actively being cared for — and kept secure.

---

*ChurchCRM is free, open-source church management software used by congregations in 55+ languages worldwide.*
