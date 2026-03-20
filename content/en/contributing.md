---
title: "How to Contribute"
description: "Learn how to contribute to ChurchCRM. Submit bug reports, code patches, documentation improvements, and more."
date: "2026-03-19"
lastmod: "2026-03-19"
---

We love to hear ideas from our users! It's what makes this platform so great and versatile. If you have an idea to contribute, please take a few moments to share it with us!

The project welcomes, and depends on, contributions from developers and users in the open source community. Contributions can be made in several ways. A few examples are:

- Code patches via pull requests
- Documentation improvements
- Bug reports and patch reviews

## First Steps

1. Read this whole page "top to bottom."
2. Make sure you have a [GitHub account](https://github.com/signup/free).
3. Introduce yourself in the developer chat at [Discord](https://discord.gg/tuWyFzj3Nj).
4. Take a look at the [Open Issues](https://github.com/ChurchCRM/CRM/issues) page. We've made it easy for beginners with the [good first issue](https://github.com/ChurchCRM/CRM/labels/good%20first%20issue) label — these are issues that should be relatively easy to fix.
5. Have fun!

## Setting Up Your Development Environment

### Quick Start (Recommended)

**🚀 GitHub Codespaces (Easiest):**
1. Click "Code" → "Codespaces" → "Create codespace on [branch]"
2. Wait 2-3 minutes for automatic setup
3. Open `http://localhost` and login with `admin`/`changeme`

**🐳 VS Code Dev Containers:**
1. Install the "Dev Containers" extension in VS Code
2. Open this repo in VS Code
3. Click "Reopen in Container" when prompted
4. Wait for setup to complete

**🔧 DDEV (Local Docker-based):**
1. Install [DDEV](https://ddev.readthedocs.io/en/stable/users/install/ddev-installation/) and [Docker](https://docs.docker.com/desktop/)
2. Clone the repo and run:
   ```bash
   git clone https://github.com/ChurchCRM/CRM.git churchcrm
   cd churchcrm
   ddev start
   ddev setup-churchcrm
   ```
3. Open [https://churchcrm.ddev.site](https://churchcrm.ddev.site) and log in with `admin`/`changeme`

See [DDEV Setup](#ddev-setup) below for full details and troubleshooting.

### Manual Setup

If you prefer manual setup or the automatic options don't work:

1. **Install Prerequisites:**
   - [Git](https://github.com/git-guides/install-git) (or [GitHub Desktop](https://desktop.github.com/))
   - [Node.js version 20+](https://nodejs.org/en/download/)
   - [Docker](https://docs.docker.com/desktop/)
   - **PHP 8.4+** with extensions: `bcmath`, `curl`, `gd`, `gettext`, `iconv`, `mbstring`, `mysqli`, `pdo_mysql`, `sodium`, `zip`, `zlib` and the core extensions required by Composer: `fileinfo`, `filter`, `session`, `PDO`
   - [Composer](https://getcomposer.org/download/) (PHP dependency manager)

2. **Clone and Setup:**
   ```bash
   git clone https://github.com/your-username/ChurchCRM.git
   cd ChurchCRM
   ./scripts/setup-dev-environment.sh
   ```

3. **Access the Website:**
   - ChurchCRM: [http://localhost/](http://localhost/) (`admin`/`changeme`)
   - MailHog: [http://localhost:8025](http://localhost:8025) (email testing)
   - Adminer: [http://localhost:8088](http://localhost:8088) (database admin)

### Troubleshooting

**Common Issues:**
- **Port 80 conflicts:** Stop other web servers or change Docker port mapping
- **Docker build fails:** Ensure Docker has 4GB+ memory allocated
- **Services not starting:** Run `npm run docker:dev:logs` to check logs
- **Tests failing locally:** Use `npm run docker:test:rebuild` for clean test environment
- **Missing PHP extensions:** Use Docker containers - don't build locally
- **Database schema outdated:** Run `npm run docker:test:restart:db` to refresh

### DDEV Setup

[DDEV](https://ddev.readthedocs.io/en/stable/) is a Docker-based local development environment that gives you PHP, MariaDB, Node.js, HTTPS, and email testing with a single command.

#### Prerequisites

- [Docker Desktop](https://docs.docker.com/desktop/)
- [DDEV](https://ddev.readthedocs.io/en/stable/users/install/ddev-installation/) v1.22+

#### Quick Start

```bash
git clone https://github.com/ChurchCRM/CRM.git churchcrm
cd churchcrm
ddev start
ddev setup-churchcrm
ddev launch
```

Login: **admin** / **changeme**

#### Service URLs

| Service | URL |
|---------|-----|
| ChurchCRM | https://churchcrm.ddev.site |
| Mailpit | https://churchcrm.ddev.site:8025 |
| MySQL | `ddev mysql` |

#### Daily Workflow

```bash
ddev start                        # Start services
ddev stop                         # Stop services
ddev ssh                          # Shell access
ddev logs                         # View logs
```

#### Troubleshooting

| Problem | Solution |
|---------|----------|
| `ddev start` fails | Ensure Docker is running: `docker info` |
| Config.php not created | Run `ddev exec cp /var/www/html/.ddev/Config.ddev.php /var/www/html/src/Include/Config.php` |
| Database empty | Re-import: `ddev import-db --file=cypress/data/seed.sql` |

Full DDEV docs: https://ddev.readthedocs.io

## Development Standards

### User Interface

ChurchCRM uses AdminLTE framework for the user interface. Follow these guidelines:

1. Be familiar with [AdminLTE](https://adminlte.io/)
2. Keep UI changes aligned with AdminLTE design principles
3. Create modular, organized CSS files for custom styles
4. Ensure responsive design across all screen sizes

### Slim MVC Architecture

For new APIs and pages, follow the Slim MVC (Model-View-Controller) architecture.

### Testing with Cypress

Use Cypress for end-to-end testing:

```bash
npm run test              # Run all tests
npm run test:ui           # Interactive testing
```

Test structure:
- API tests: `cypress/e2e/api/private/[feature]/[endpoint].spec.js`
- UI tests: `cypress/e2e/ui/[feature]/`

## Development Workflow

1. **Branching:**
   ```bash
   git checkout -b feature-name
   ```

2. **Code Standards:**
   - Follow existing coding standards
   - Adhere to the style guide in `.github/copilot-instructions.md`
   - Use descriptive commit messages

3. **Testing:**
   - Write tests for your changes using Cypress
   - Update documentation as needed

4. **Pull Request Process:**
   ```bash
   git pull origin master
   git rebase master
   git push origin feature-name
   ```

## Coding Standards

ChurchCRM maintains strict code quality standards:

- ✅ **Database:** Propel ORM mandatory (no raw SQL)
- ✅ **HTML5:** Bootstrap 4.6.2 CSS only
- ✅ **Services:** Business logic in Service classes
- ✅ **PHP 8.4+:** Explicit nullable types
- ✅ **i18n:** Wrap UI text with `gettext()` or `i18next.t()`

For complete standards, see `.github/copilot-instructions.md`

## Code of Conduct

Please adhere to the [Code of Conduct](CODE_OF_CONDUCT.md) in all interactions.

Thank you for your contribution!
