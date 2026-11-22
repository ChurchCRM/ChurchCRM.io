---
title: "The Free Stack Behind ChurchCRM"
date: 2026-10-15
draft: false
description: "ChurchCRM runs on free tiers from GitHub, Docker, CodeRabbit, POEditor, and PostHog. Here's the open-source SaaS that keeps a volunteer project free for every church."
summary: "The free SaaS tools that let a volunteer-maintained ChurchCRM stay free for churches worldwide."
author: "George Dawoud"
keywords: "open source SaaS, free tiers for open source, ChurchCRM infrastructure, GitHub Actions, Docker Hub, CodeRabbit, POEditor, PostHog"
tags: ["Open Source", "Community", "Infrastructure"]
featured_image: "/images/blogs/free-stack-social-1200x630.png"
featured_image_alt: "Thank you to the free SaaS tools powering ChurchCRM"
social_image: "/images/blogs/free-stack-social-1200x630.png"
social_image_alt: "The free stack behind ChurchCRM: GitHub, Docker, CodeRabbit, POEditor, PostHog"
---

ChurchCRM stays free for every church because a small set of companies give open-source projects real free tiers.

Without them, a volunteer-maintained project could not run a full CI matrix on every pull request, keep 49 languages in sync, or ship Docker images on every release. The avoided spend is roughly twelve hundred dollars a year. That is the difference between keeping the project free and needing to start charging.

## The stack

**GitHub** hosts the repositories, runs the Actions CI matrix, Dependabot dependency bumps, and GitHub Pages for both churchcrm.io and docs.churchcrm.io. Standard runners on public repos are free with no minute cap.

**Docker** publishes the churchcrm/crm images to Docker Hub on every release. The Sponsored Open Source program removes pull rate limits that would otherwise break CI. Docker Desktop is free for non-commercial open source.

**CodeRabbit** gives ChurchCRM Team-tier AI code reviews on public repositories. The free OSS plan covers one to ten reviews per hour depending on project activity. Paid starts at twenty-four dollars per developer per month.

**POEditor** is free for OSI-licensed projects with no string limit. ChurchCRM's 49 languages would exceed the standard free plan's one-thousand-string cap immediately.

**PostHog** provides one million product analytics events free every month, no credit card required. The application's telemetry runs on it.

**Dependabot** opens weekly pull requests for npm and Composer updates on public repositories at no cost.

**GitHub Pages** hosts both sites with free SSL and custom domains.

**Docker Buildx and QEMU** handle multi-architecture image builds inside CI at no charge.

**Docker Scout** is available free for projects in the Sponsored Open Source program.

**Docker Mailpit** runs local email testing in development and CI with no cost.

## Why it matters

These companies made it possible for a small, volunteer-run project to stay free. If you maintain an open-source project, the free tiers above are worth checking. If you use ChurchCRM, this is part of why it stays free.

Thank you, GitHub, Docker, CodeRabbit, POEditor, and PostHog.
