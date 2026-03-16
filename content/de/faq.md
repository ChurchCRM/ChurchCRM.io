---
title: "Häufige Fragen"
description: "Häufige Fragen zu Installation, Anmeldung, Fehlerbehebung und Best Practices für ChurchCRM."
date: "2026-03-16"
lastmod: "2026-03-16"
layout: faq
faqs:
  - q: "Ist ChurchCRM wirklich kostenlos und Open Source?"
    a: "Ja. ChurchCRM ist zu 100% kostenlos und Open Source, ohne Lizenzgebühren."
  - q: "Wo kann ich ChurchCRM vor der Installation testen?"
    a: "Nutzen Sie unsere lokalisierte Demo-Seite: [/de/demo.html](/de/demo.html)."
  - q: "Welche Serveranforderungen gibt es?"
    a: "ChurchCRM benötigt PHP 8.4+, MySQL 8.0+ (oder kompatibles MariaDB) und Apache mit mod_rewrite."
  - q: "Was ist der schnellste Installationsweg?"
    a: "Folgen Sie der Installationsanleitung unter [/de/install.html](/de/install.html). Wenn Ihr Hoster Softaculous anbietet, ist das meist der schnellste Weg."
  - q: "Wie melde ich mich nach einer frischen Installation an?"
    a: "Eine neue Installation erstellt ein Admin-Konto mit Benutzername `admin` und Passwort `changeme`. Ändern Sie das Passwort direkt nach der ersten Anmeldung."
  - q: "Ich sehe \"Too Many Redirects\" oder API-Fehler. Was prüfen?"
    a: "Prüfen Sie zuerst, ob Apache mod_rewrite aktiv ist und ob die Rewrite-Regeln korrekt sind."
  - q: "Wie behebe ich einen Internal Server Error (500)?"
    a: "Prüfen Sie zuerst Dateiberechtigungen und Server-Logs. Offizielle Anleitung: https://docs.churchcrm.io/administration/500-error"
  - q: "Wie aktiviere ich Debugging und Logs?"
    a: "Aktivieren Sie Anwendungsprotokolle in den Systemeinstellungen und erhöhen Sie bei Bedarf die PHP-Fehlerausgabe."
  - q: "Wie füge ich ein eigenes Logo oder Briefpapier update-sicher hinzu?"
    a: "Laden Sie die Datei in das Images-Verzeichnis hoch und hinterlegen Sie den Pfad in den Report-Einstellungen. Ersetzen Sie keine Standarddateien direkt, damit Updates Ihre Anpassungen nicht überschreiben."
  - q: "Wo bekomme ich Hilfe oder melde Bugs?"
    a: "Für Fragen: GitHub Discussions. Für bestätigte Bugs: GitHub Issues. https://github.com/ChurchCRM/CRM/discussions und https://github.com/ChurchCRM/CRM/issues"
---

Kurze Antworten auf häufige Fragen zu Einrichtung, Betrieb und Fehlerbehebung in ChurchCRM.
