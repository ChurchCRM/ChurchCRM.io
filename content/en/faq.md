---
title: "Frequently Asked Questions"
description: "Common ChurchCRM questions about installation, getting started, and best practices."
date: "2026-03-16"
lastmod: "2026-04-23"
layout: faq
faqs:
  - q: "Is ChurchCRM free and open-source?"
    a: >-
      Yes. ChurchCRM is 100% free and open-source under the MIT license, with no licensing
      fees, no subscription tiers, and no per-member pricing. You download and install the
      software on your own server, and it is yours to use indefinitely without paying anyone.
      The source code is publicly available on GitHub, where any developer can audit it, fork
      it, or contribute improvements back to the project. Hosting is the only ongoing cost —
      a standard shared hosting plan typically runs $0–$10/month depending on your provider.
      There are no paid add-ons, no premium features behind a paywall, and no vendor who could
      raise prices or shut down your access. This model is possible because ChurchCRM is
      maintained by a global community of volunteer developers and church administrators who
      believe that high-quality tools should be freely available to every congregation,
      regardless of budget or size.

  - q: "Do I need my own server, or can I install ChurchCRM on my local computer?"
    a: >-
      ChurchCRM does not provide hosting — there is no cloud service or managed server run by
      the project that you can sign up for. You are responsible for providing a place to run the
      software. ChurchCRM runs on Linux with Apache or nginx, MySQL or MariaDB, and PHP. That
      said, you have two practical options if you do not already have a server.


      **Shared hosting (recommended for most churches):** A shared hosting account from any
      major provider (Hostinger, Bluehost, SiteGround, DreamHost, and many others) runs Linux
      and gives you everything ChurchCRM needs for roughly $3–$10 per month. Most include
      Softaculous, which installs ChurchCRM in a few clicks. This is the most common setup and
      means your ChurchCRM is accessible from any device, anywhere, for your whole congregation.


      **Local computer using Docker (for testing or a single-user setup):** ChurchCRM is built
      and developed using Docker, and example Dockerfiles for local use are in the
      [`docker/`](https://github.com/ChurchCRM/CRM/tree/master/docker) directory on GitHub. There
      is no officially maintained production Docker image — once a container runs in production,
      keeping it patched and secure is the operator's job, not something the project maintains for
      you. For local testing this is not a concern, but see the
      [Docker notes](https://docs.churchcrm.io/installation/vps-cloud#docker) before running it
      anywhere your congregation's data would be at risk. The important limitation of a local
      install either way is that it is only accessible on that one machine — other staff or
      volunteers cannot log in from their own devices unless you configure network access
      manually. If you need multiple people to use ChurchCRM, shared hosting is the better path.


      If cost is a concern, several hosting providers offer plans under $5/month that comfortably
      run ChurchCRM for a congregation of any size.

  - q: "Where can I try ChurchCRM before installing?"
    a: >-
      You can try the [live ChurchCRM demo environment](/demo.html) at any time without
      creating an account or installing anything. The demo is hosted by Softaculous, which
      creates a private ChurchCRM instance at a unique URL just for you — your session is
      isolated from other visitors and expires automatically when done. When the demo first
      loads it may appear empty — visit Admin Dashboard → Demo Data and click "Import Demo
      Data" to populate it with 50+ sample families, 175+ people, groups, notes, and
      contribution records. This makes the evaluation experience much more realistic. The demo
      is available 24/7, completely free to use, and requires no signup before making any
      installation decision.

  - q: "What server requirements does ChurchCRM need?"
    a: >-
      ChurchCRM runs on standard Linux hosting: PHP 8.4 or newer, MySQL 8.0+ or MariaDB 10.5+,
      and Apache or nginx with URL rewriting enabled. Plan for about 500 MB of disk to start.
      Most shared hosting plans already meet this, and it works equally well on a VPS or
      dedicated server. The full list of required PHP extensions, database-user permissions,
      and memory settings is in the
      [system requirements documentation](https://docs.churchcrm.io/installation/system-requirements).

  - q: "What's the fastest way to install ChurchCRM?"
    a: >-
      The fastest way depends on your hosting environment. If your host supports Softaculous
      (available in most cPanel-based shared hosting accounts), that is the quickest option —
      search for ChurchCRM in Softaculous and click Install. If Softaculous is not available,
      a manual cPanel install or a self-hosted server are also documented options. See the
      [installation guide](/install.html) to compare approaches, or go straight to the
      [full instructions](https://docs.churchcrm.io/installation) for step-by-step guides.

  - q: "How do I log in to a fresh install?"
    a: >-
      After completing the installation wizard, a default administrator account is created —
      change its password immediately from Admin → Users. If you installed via Softaculous,
      use the credentials you entered during setup instead. See the
      [first-run guide](https://docs.churchcrm.io/getting-started/first-run) for the full
      walkthrough, including password reset.

  - q: "How do I add a custom logo or letterhead safely?"
    a: >-
      Upload your logo to the Images directory rather than replacing bundled files, then point
      Admin → System Settings at the new file — this way the branding survives future upgrades.
      See the [system settings documentation](https://docs.churchcrm.io/administration/system-settings)
      for supported formats, sizing, and report-template details.

  - q: "Where should I ask for help or report issues?"
    a: >-
      For questions, troubleshooting help, and general discussion about using ChurchCRM, join
      the [Discord server](https://discord.gg/tuWyFzj3Nj) — the community is active and
      responsive. For confirmed software bugs (something that does not work as documented),
      open an issue on [GitHub Issues](https://github.com/ChurchCRM/CRM/issues) with as much
      detail as possible: your ChurchCRM version, PHP version, hosting environment, and the
      exact steps to reproduce the problem. For direct email support, contact
      [info@churchcrm.io](mailto:info@churchcrm.io). Please reserve GitHub Issues for
      confirmed bugs only — use Discord for general how-to questions and support.
  - q: "What changed in ChurchCRM 7.x?"
    a: >-
      ChurchCRM 7.x is the most significant update in the project's history. The biggest change
      is a complete interface redesign — the application moved from AdminLTE/Bootstrap 4
      to Tabler/Bootstrap 5, which delivers cleaner layouts, dark mode support, per-user accent
      colors, and better tablet and desktop performance. Other major changes include: a plugin
      ecosystem with a community registry for installing approved extensions;
      OpenStreetMap replacing Google Maps so no API key is required; the kiosk check-in system
      expanded to all group types (not just Sunday School); and a central Export Hub for data
      exports. ChurchCRM now ships with 46 community-contributed languages.

  - q: "Do I need a Google Maps API key?"
    a: >-
      No. Maps are now rendered using Leaflet.js with OpenStreetMap tiles, and addresses are 
      geocoded with Nominatim — all free and open services with no API key required. If you are 
      upgrading from an older release, your existing family coordinates are preserved. Maps work 
      out of the box on every new install and upgrade.

  - q: "Can I extend ChurchCRM with plugins?"
    a: >-
      Yes. ChurchCRM includes a plugin system with a community plugin registry that lets you 
      install approved plugins directly from the Admin panel without editing files manually. 
      Available plugins include MailChimp list sync, OpenLP presentation integration, Vonage SMS 
      messaging, and more. Each community plugin is reviewed for security and localization compliance 
      before being listed. You can also build your own private plugins — see the Creating Community 
      Plugins guide in the developer wiki.

  - q: "Is there a dark mode?"
    a: >-
      Yes. Dark mode is available as a per-user setting. Each user can enable it independently 
      from My Settings → Theme without affecting other users on the same installation. The same 
      settings page also lets users choose an accent color and upload a profile avatar. The 
      system-wide default remains light mode; individual users override it for their own session only.

  - q: "How do I upgrade from 6.x to 7.x?"
    a: >-
      ChurchCRM supports automatic upgrade on boot — when you deploy a newer version, the
      database migration runs automatically when the application starts. For a manual upgrade: back
      up your database, replace the application files with the new release package, and visit the
      site; the upgrade wizard runs automatically if needed. The upgrade page includes clearer 
      pre-flight validation. If you are on 6.x, update to the latest 6.x patch first, then upgrade 
      to 7.x in one step — skipping major versions is not supported. Full instructions are in the 
      Upgrade Guide at docs.churchcrm.io.


---

Find answers to the most common setup and getting-started questions for ChurchCRM.
