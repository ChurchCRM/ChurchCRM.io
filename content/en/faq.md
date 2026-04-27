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
      ChurchCRM requires PHP 8.4 or higher, MySQL 8.0 or higher (or a compatible MariaDB
      version), and Apache web server with mod_rewrite enabled. Additionally, several PHP
      extensions are needed: php-bcmath, php-curl, php-exif, php-gd, php-gettext, php-intl,
      php-json, php-mbstring, php-mysqli, php-soap, php-sodium, php-xml, and php-zip. Most
      standard shared hosting providers include all of these by default, so you typically do
      not need to configure them manually. The database user must have CREATE, ALTER, SELECT,
      INSERT, UPDATE, DELETE, EXECUTE, and CREATE VIEW permissions — in cPanel, granting ALL
      PRIVILEGES covers this. Minimum recommended memory is 256 MB with 512 MB or more
      preferred. ChurchCRM works on shared hosting, VPS, and dedicated servers running the
      standard LAMP stack.

  - q: "What's the fastest way to install ChurchCRM?"
    a: >-
      The fastest way to install ChurchCRM depends on your hosting environment. If your host
      supports Softaculous (available in most cPanel-based shared hosting accounts), that is
      the quickest option — log into cPanel, search for ChurchCRM in Softaculous, click
      Install, fill in your domain and admin credentials, and the installer handles everything
      automatically in two to five minutes. If Softaculous is not available, use the manual
      cPanel method: create a MySQL database, download ChurchCRM from GitHub, upload the files
      via File Manager, then visit your site URL to run the setup wizard. For VPS or dedicated
      servers, clone the GitHub repository directly. Full step-by-step instructions with
      screenshots for all three methods are in the [ChurchCRM installation
      guide](/install.html).

  - q: "How do I log in to a fresh install?"
    a: >-
      After completing the ChurchCRM installation wizard, a default administrator account is
      created automatically. The default username is `admin` and the default password is
      `changeme`. You should change this password immediately after your first login — go to
      Admin → Users, select the admin account, and set a strong, unique password before doing
      anything else. Leaving the default password in place is a significant security risk,
      especially if your installation is accessible from the internet. If you installed via
      Softaculous, the username and password you entered during setup are used instead of the
      defaults, so check what you entered there. If you have forgotten your password, a reset
      option is available on the login page, or any administrator can reset it via the Users
      panel.

  - q: "How do I add a custom logo or letterhead safely?"
    a: >-
      To add a custom logo or letterhead to ChurchCRM reports, upload your image file to the
      Images directory within your ChurchCRM installation rather than replacing any bundled
      default files. Once uploaded, go to Admin → System Settings and point the report logo
      setting to your new file path. This approach ensures that your custom branding survives
      future upgrades — if you replace bundled files directly, an upgrade will overwrite your
      changes and you will need to re-apply them each time. Supported formats include PNG and
      JPEG; a transparent-background PNG works best for professional reports. Keep your logo
      at a reasonable resolution (typically 300–600px wide) to balance print quality with file
      size. For custom letterhead in report templates, refer to the documentation for the
      report template directory locations.

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
