---
title: "Frequently Asked Questions"
description: "Common ChurchCRM questions about installation, login, troubleshooting, and best practices."
date: "2026-03-16"
lastmod: "2026-03-16"
layout: faq
faqs:
  - q: "Is ChurchCRM really free and open-source?"
    a: "Yes. ChurchCRM is 100% free and open-source with no licensing fees."
  - q: "Where can I try ChurchCRM before installing?"
    a: "Use our localized demo page at [/demo.html](/demo.html)."
  - q: "What are the server requirements?"
    a: "ChurchCRM requires PHP 8.4+, MySQL 8.0+ (or compatible MariaDB), and Apache with mod_rewrite."
  - q: "What is the quickest way to install ChurchCRM?"
    a: "Follow the installation guide at [/install.html](/install.html). If your host supports Softaculous, that is usually the fastest option."
  - q: "How do I log in to a fresh install?"
    a: "A fresh install creates an admin account with username `admin` and password `changeme`. Change the password immediately after first login."
  - q: "I see \"Too Many Redirects\" or API errors. What should I check?"
    a: "First verify Apache mod_rewrite is enabled and your virtual host rewrite rules are correct."
  - q: "How do I troubleshoot an Internal Server Error (500)?"
    a: "Check file permissions and server logs first. See the official guide: https://docs.churchcrm.io/administration/500-error"
  - q: "How do I enable debugging and logs?"
    a: "Enable application logs from System Settings and increase PHP error reporting when troubleshooting."
  - q: "How do I add a custom logo or letterhead safely?"
    a: "Upload your file to the Images directory and point the report setting to that file path. Avoid replacing default bundled files directly so upgrades do not overwrite your branding."
  - q: "Where should I ask for help or report issues?"
    a: "Use GitHub Discussions for questions and GitHub Issues for confirmed bugs: https://github.com/ChurchCRM/CRM/discussions and https://github.com/ChurchCRM/CRM/issues"
---

Find answers to the most common setup, operations, and troubleshooting questions for ChurchCRM.
