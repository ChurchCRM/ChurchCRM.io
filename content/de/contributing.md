---
title: "Wie man Beiträgt"
description: "Erfahren Sie, wie Sie zu ChurchCRM beitragen können. Reichen Sie Fehlerberichte, Code-Patches, Dokumentationsverbesserungen und vieles mehr ein."
date: "2026-03-19"
lastmod: "2026-03-19"
---

Wir lieben es, Ideen von unseren Benutzern zu hören! Das macht diese Plattform so großartig und vielseitig. Wenn Sie eine Idee zum Beitragen haben, nehmen Sie sich bitte einen Moment Zeit, um sie mit uns zu teilen!

Das Projekt begrüßt und ist auf Beiträge von Entwicklern und Benutzern aus der Open-Source-Gemeinschaft angewiesen. Beiträge können auf verschiedene Arten erfolgen:

- Code-Patches über Pull-Requests
- Dokumentationsverbesserungen
- Fehlermeldungen und Patch-Überprüfungen

## Erste Schritte

1. Lesen Sie diese ganze Seite "von oben nach unten".
2. Stellen Sie sicher, dass Sie ein [GitHub-Konto](https://github.com/signup/free) haben.
3. Stellen Sie sich im Entwickler-Chat auf [Discord](https://discord.gg/tuWyFzj3Nj) vor.
4. Schauen Sie sich die Seite [Offene Probleme](https://github.com/ChurchCRM/CRM/issues) an. Wir haben es für Anfänger einfach gemacht mit dem Label [good first issue](https://github.com/ChurchCRM/CRM/labels/good%20first%20issue) — das sind Probleme, die relativ einfach zu beheben sein sollten.
5. Viel Spaß!

## Einrichtung der Entwicklungsumgebung

### Schnellstart (Empfohlen)

**🚀 GitHub Codespaces (Am Einfachsten):**
1. Klicken Sie auf "Code" → "Codespaces" → "Create codespace on [branch]"
2. Warten Sie 2-3 Minuten auf die automatische Einrichtung
3. Öffnen Sie `http://localhost` und melden Sie sich mit `admin`/`changeme` an

**🐳 VS Code-Entwicklungscontainer:**
1. Installieren Sie die Erweiterung "Dev Containers" in VS Code
2. Öffnen Sie dieses Repository in VS Code
3. Klicken Sie auf "Reopen in Container", wenn Sie dazu aufgefordert werden
4. Warten Sie auf die Fertigstellung der Einrichtung

**🔧 DDEV (Lokales Docker):**
1. Installieren Sie [DDEV](https://ddev.readthedocs.io/en/stable/users/install/ddev-installation/) und [Docker](https://docs.docker.com/desktop/)
2. Klonen Sie das Repository und führen Sie aus:
   ```bash
   git clone https://github.com/ChurchCRM/CRM.git churchcrm
   cd churchcrm
   ddev start
   ddev setup-churchcrm
   ```
3. Öffnen Sie [https://churchcrm.ddev.site](https://churchcrm.ddev.site) und melden Sie sich mit `admin`/`changeme` an

Weitere Informationen und Fehlerbehebung finden Sie unter [DDEV-Setup](#ddev-setup).

### Manuelle Einrichtung

Wenn Sie manuelle Einrichtung bevorzugen oder die automatischen Optionen nicht funktionieren:

1. **Voraussetzungen Installieren:**
   - [Git](https://github.com/git-guides/install-git) oder [GitHub Desktop](https://desktop.github.com/)
   - [Node.js Version 20+](https://nodejs.org/en/download/)
   - [Docker](https://docs.docker.com/desktop/)
   - **PHP 8.4+** mit Erweiterungen: `bcmath`, `curl`, `gd`, `gettext`, `iconv`, `mbstring`, `mysqli`, `pdo_mysql`, `sodium`, `zip`, `zlib`
   - [Composer](https://getcomposer.org/download/) (PHP-Abhängigkeitsmanager)

2. **Klonen und Einrichten:**
   ```bash
   git clone https://github.com/your-username/ChurchCRM.git
   cd ChurchCRM
   ./scripts/setup-dev-environment.sh
   ```

3. **Zugang zur Website:**
   - ChurchCRM: [http://localhost/](http://localhost/) (`admin`/`changeme`)
   - MailHog: [http://localhost:8025](http://localhost:8025) (Email-Test)
   - Adminer: [http://localhost:8088](http://localhost:8088) (Datenbankadmin)

### Fehlerbehebung

**Häufige Probleme:**
- **Port-80-Konflikte:** Beenden Sie andere Webserver oder ändern Sie die Docker-Port-Zuordnung
- **Docker-Build schlägt fehl:** Stellen Sie sicher, dass Docker 4 GB+ RAM zugeordnet hat
- **Dienste starten nicht:** Führen Sie `npm run docker:dev:logs` aus, um Protokolle zu überprüfen
- **Tests schlagen lokal fehl:** Verwenden Sie `npm run docker:test:rebuild` für eine saubere Testumgebung
- **PHP-Erweiterungen fehlen:** Verwenden Sie Docker-Container — nicht lokal erstellen
- **Veraltetes Datenbankschema:** Führen Sie `npm run docker:test:restart:db` aus zum Aktualisieren

### DDEV-Setup

[DDEV](https://ddev.readthedocs.io/en/stable/) ist eine lokale Docker-basierte Entwicklungsumgebung, die PHP, MariaDB, Node.js, HTTPS und E-Mail-Tests mit einem einzigen Befehl bereitstellt.

#### Voraussetzungen

- [Docker Desktop](https://docs.docker.com/desktop/)
- [DDEV](https://ddev.readthedocs.io/en/stable/users/install/ddev-installation/) v1.22+

#### Schnellstart

```bash
git clone https://github.com/ChurchCRM/CRM.git churchcrm
cd churchcrm
ddev start
ddev setup-churchcrm
ddev launch
```

Anmeldung: **admin** / **changeme**

#### Service-URLs

| Dienst | URL |
|--------|-----|
| ChurchCRM | https://churchcrm.ddev.site |
| Mailpit | https://churchcrm.ddev.site:8025 |
| MySQL | `ddev mysql` |

#### Täglicher Arbeitsablauf

```bash
ddev start                        # Dienste starten
ddev stop                         # Dienste beenden
ddev ssh                          # Shell-Zugriff
ddev logs                         # Protokolle anzeigen
```

#### DDEV-Fehlerbehebung

| Problem | Lösung |
|---------|--------|
| `ddev start` schlägt fehl | Stellen Sie sicher, dass Docker läuft: `docker info` |
| Config.php nicht erstellt | Führen Sie `ddev exec cp /var/www/html/.ddev/Config.ddev.php /var/www/html/src/Include/Config.php` aus |
| Datenbank leer | Reimportieren: `ddev import-db --file=cypress/data/seed.sql` |

Vollständige DDEV-Dokumentation: https://ddev.readthedocs.io

## Entwicklungsstandards

### Benutzeroberfläche

ChurchCRM verwendet das AdminLTE-Framework für die Benutzeroberfläche. Beachten Sie diese Richtlinien:

1. Machen Sie sich mit [AdminLTE](https://adminlte.io/) vertraut
2. Halten Sie UI-Änderungen mit AdminLTE-Designprinzipien in Einklang
3. Erstellen Sie modulare und organisierte CSS-Dateien für benutzerdefinierte Stile
4. Gewährleisten Sie responsives Design auf allen Bildschirmgrößen

### Slim-MVC-Architektur

Für neue APIs und Seiten folgen Sie der Slim-MVC-Architektur (Model-View-Controller).

### Tests mit Cypress

Verwenden Sie Cypress für End-to-End-Tests:

```bash
npm run test              # Alle Tests ausführen
npm run test:ui           # Interaktive Tests
```

Teststruktur:
- API-Tests: `cypress/e2e/api/private/[feature]/[endpoint].spec.js`
- UI-Tests: `cypress/e2e/ui/[feature]/`

## Entwicklungs-Arbeitsablauf

1. **Verzweigung:**
   ```bash
   git checkout -b feature-name
   ```

2. **Code-Standards:**
   - Befolgen Sie bestehende Kodierungsstandards
   - Halten Sie sich an den Stilführer in `.github/copilot-instructions.md`
   - Verwenden Sie aussagekräftige Commit-Meldungen

3. **Tests:**
   - Schreiben Sie Tests für Ihre Änderungen mit Cypress
   - Aktualisieren Sie die Dokumentation nach Bedarf

4. **Pull-Request-Prozess:**
   ```bash
   git pull origin master
   git rebase master
   git push origin feature-name
   ```

## Kodierungsstandards

ChurchCRM hält strenge Codequalitätsstandards ein:

- ✅ **Datenbank:** Propel ORM obligatorisch (kein rohes SQL)
- ✅ **HTML5:** Nur Bootstrap 4.6.2 CSS
- ✅ **Dienste:** Geschäftslogik in Service-Klassen
- ✅ **PHP 8.4+:** Explizite nullable Typen
- ✅ **i18n:** Wickeln Sie UI-Text mit `gettext()` oder `i18next.t()` ein

Für vollständige Standards siehe `.github/copilot-instructions.md`

## Verhaltenskodex

Bitte befolgen Sie den [Verhaltenskodex](CODE_OF_CONDUCT.md) in allen Interaktionen.

Danke für deinen Beitrag!
