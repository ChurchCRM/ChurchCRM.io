---
title: "Update PHP Now: A Critical Security Fix for Every ChurchCRM Install"
date: "2026-10-25"
draft: false
description: "A critical PHP flaw (PHP2Shell) lets attackers run code without logging in. Update your server's PHP or Docker image now, and upgrade to ChurchCRM 7.8.2."
summary: "A critical PHP security flaw needs action today: update PHP or your Docker image, and upgrade to ChurchCRM 7.8.2."
author: "ChurchCRM Team"
keywords: "PHP security, PHP2Shell, updates, Docker, upgrade"
tags: ["Security", "Updates"]
featured_image: "https://cdn.churchcrm.io/screenshots/en/desktop/dashboard-admin.png"
featured_image_alt: "ChurchCRM admin dashboard"
social_image: ""
social_image_alt: ""
---

A critical flaw in PHP itself — the language ChurchCRM runs on — lets an attacker run code on your server without logging in. It is already being reported as exploited. If you administer ChurchCRM, please act on this today. If you use ChurchCRM but do not administer it, please forward this post to your church's admin right away — they are the one who can apply the fix.

### What happened

Two vulnerabilities in PHP, CVE-2026-109618 and CVE-2026-109619, known as "PHP2Shell," allow unauthenticated remote code execution: an attacker needs no account on your system to exploit them. They were disclosed on October 21, 2026, and are already being reported as exploited. This is not a flaw in ChurchCRM's code — it is a flaw in PHP, and it affects any site running an unpatched PHP version. Setups using Apache with mod_php are at the highest risk, but any unpatched PHP should be treated as exposed.

### What to do

**If you run ChurchCRM with Docker:** update to the latest ChurchCRM image, which runs patched PHP 8.4.27. Pulling the new image is the whole fix.

**If you run ChurchCRM on your own server:** update your server's PHP installation to a patched release (8.4.27). If your host uses cPanel, the EasyApache4 update covers both vulnerabilities. If you are unsure what PHP version your server runs, ask your host — and ask them to update it.

**While you are there:** upgrade ChurchCRM itself to [7.8.2](https://github.com/ChurchCRM/CRM/releases/tag/7.8.2), the current release. There is no setting inside ChurchCRM that protects you from this flaw — only a patched PHP does.

### Our goal: safe software, kept up to date

ChurchCRM exists to serve churches, and that means the software your church trusts with its people must be safe, secure, and kept up to date. That is our goal, and it is a continuing one: we ship security fixes as they come, we tell you plainly when action is needed on your side — like this PHP update — and we keep the current release maintained so staying up to date stays straightforward. When a fix needs you, we will say so, clearly and early.

Please check today: Docker users, confirm you are on the patched image; server owners, confirm your PHP version. If you are not sure, ask your host — and do not put it off. The [Upgrade Guide](https://docs.churchcrm.io/administration/upgrade) walks through keeping ChurchCRM itself current.
