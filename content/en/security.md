---
title: "Security Policy"
description: "How to report security vulnerabilities in ChurchCRM and stay informed about security patches and CVE disclosures."
date: "2026-04-23"
lastmod: "2026-04-23"
---

## Stay Informed

Security patch announcements, CVE disclosures, and dependency update notices are posted in the **#security** channel on our Discord server.

**[Join Discord](https://discord.gg/tuWyFzj3Nj)** — then follow **#security** for announcements.

Please do not DM maintainers directly about security issues, post vulnerability details in any other Discord channel, or ask about undisclosed vulnerabilities in public channels. The #security channel is read-only for announcements.

---

## Reporting a Vulnerability

Use GitHub's private [Security Advisory](https://github.com/ChurchCRM/CRM/security/advisories) feature to report issues that could be exploited by attackers. **Do not open a public GitHub issue for security vulnerabilities** — public disclosure gives attackers time to exploit the issue before a fix is available.

Report via Security Advisory for:

- **Cross-Site Scripting (XSS)** — injection of malicious scripts
- **SQL Injection** — unauthorized database access
- **Authentication/Authorization Bypass** — accessing data without proper permissions
- **Session Hijacking** — stealing or manipulating user sessions
- **Remote Code Execution** — running arbitrary code on the server
- **Sensitive Data Exposure** — leaking passwords, personal information, or financial data
- **Cross-Site Request Forgery (CSRF)** — forcing users to perform unintended actions

When reporting, include:

- Description of the vulnerability and its potential impact
- Steps to reproduce
- Affected versions
- Environment and configuration details
- Proof of concept if available

We will acknowledge receipt within **1 week** and provide updates on the fix timeline.

If you are unsure whether an issue is security-related, err on the side of caution and use the Security Advisory.

---

## Regular Bugs (Non-Security)

For bugs that do not pose a security risk, use [GitHub Issues](https://github.com/ChurchCRM/CRM/issues):

- UI or display issues
- Features not working as expected
- Error messages or crashes without security implications
- Performance problems
- Documentation errors
- Installation or upgrade issues

---

## Supported Versions

Only the latest release branch receives security fixes.

| Version | Supported | PHP Version |
|---------|-----------|-------------|
| 7.1+ | ✅ | ≥ 8.4 |
| 7.0.x | ❌ | ≥ 8.3 |
| 6.0–6.x | ❌ | ≥ 8.2 |
| 5.3+ | ❌ | ≥ 8.1 |
| 4.0.x | ❌ | 7.2–7.3 |
| 3.0.x | ❌ | 7.x |
| 2.0.x | ❌ | 5.6, 7.0–7.1 |

---

## Security Best Practices

ChurchCRM should **only run on HTTPS**. If you do not have an SSL certificate, [Let's Encrypt](https://letsencrypt.org/) provides free certificates for any domain.

---

## No Testing on Demo Sites

Please do not perform security testing on ChurchCRM demo environments. The demo is for evaluation purposes only. Test against your own local or staging installation instead.

---

## Developer Security

For contributors, security best practices including Content Security Policy (CSP) compliance are documented in the project's [GitHub repository](https://github.com/ChurchCRM/CRM).

---

## Contact

- **Security reports:** [GitHub Security Advisory](https://github.com/ChurchCRM/CRM/security/advisories) (preferred) or [security@churchcrm.io](mailto:security@churchcrm.io)
- **#security on Discord:** [discord.gg/tuWyFzj3Nj](https://discord.gg/tuWyFzj3Nj) — announcements only
- **General questions:** [info@churchcrm.io](mailto:info@churchcrm.io)
