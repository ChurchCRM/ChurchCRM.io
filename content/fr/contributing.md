---
title: "Comment Contribuer"
description: "Apprenez comment contribuer à ChurchCRM. Soumettez des rapports de bugs, des correctifs de code, des améliorations de documentation, et plus."
date: "2026-03-19"
lastmod: "2026-03-19"
---

Nous adorons entendre les idées de nos utilisateurs ! C'est ce qui rend cette plateforme si excellente et polyvalente. Si vous avez une idée pour contribuer, veuillez prendre un moment pour la partager avec nous !

Le projet accueille et dépend des contributions des développeurs et des utilisateurs de la communauté du logiciel libre. Les contributions peuvent se faire de plusieurs façons :

- Correctifs de code via des demandes de tirage
- Améliorations de la documentation
- Rapports de bugs et révisions de correctifs

## Premières Étapes

1. Lisez cette page complète "de haut en bas".
2. Assurez-vous d'avoir un [compte GitHub](https://github.com/signup/free).
3. Présentez-vous dans le chat des développeurs sur [Discord](https://discord.gg/tuWyFzj3Nj).
4. Consultez la page [Problèmes Ouverts](https://github.com/ChurchCRM/CRM/issues). Nous avons facilité ces pour les débutants avec le label [good first issue](https://github.com/ChurchCRM/CRM/labels/good%20first%20issue) — ce sont des problèmes qui devraient être relativement faciles à résoudre.
5. Amusez-vous !

## Configuration de l'Environnement de Développement

### Démarrage Rapide (Recommandé)

**🚀 GitHub Codespaces (Le Plus Simple) :**
1. Cliquez sur "Code" → "Codespaces" → "Create codespace on [branch]"
2. Attendez 2-3 minutes pour la configuration automatique
3. Ouvrez `http://localhost` et connectez-vous avec `admin`/`changeme`

**🐳 Conteneurs de Développement VS Code :**
1. Installez l'extension "Dev Containers" dans VS Code
2. Ouvrez ce référentiel dans VS Code
3. Cliquez sur "Reopen in Container" lorsque demandé
4. Attendez la fin de la configuration

**🔧 DDEV (Docker Local) :**
1. Installez [DDEV](https://ddev.readthedocs.io/en/stable/users/install/ddev-installation/) et [Docker](https://docs.docker.com/desktop/)
2. Clonez le référentiel et exécutez :
   ```bash
   git clone https://github.com/ChurchCRM/CRM.git churchcrm
   cd churchcrm
   ddev start
   ddev setup-churchcrm
   ```
3. Ouvrez [https://churchcrm.ddev.site](https://churchcrm.ddev.site) et connectez-vous avec `admin`/`changeme`

Voir [Configuration DDEV](#configuration-ddev) ci-dessous pour plus de détails et dépannage.

### Configuration Manuelle

Si vous préférez installer manuellement ou si les options automatiques ne fonctionnent pas :

1. **Installer les Prérequis :**
   - [Git](https://github.com/git-guides/install-git) ou [GitHub Desktop](https://desktop.github.com/)
   - [Node.js version 20+](https://nodejs.org/en/download/)
   - [Docker](https://docs.docker.com/desktop/)
   - **PHP 8.4+** avec extensions : `bcmath`, `curl`, `gd`, `gettext`, `iconv`, `mbstring`, `mysqli`, `pdo_mysql`, `sodium`, `zip`, `zlib`
   - [Composer](https://getcomposer.org/download/) (gestionnaire de dépendances PHP)

2. **Cloner et Configurer :**
   ```bash
   git clone https://github.com/votre-utilisateur/ChurchCRM.git
   cd ChurchCRM
   ./scripts/setup-dev-environment.sh
   ```

3. **Accéder au Site Web :**
   - ChurchCRM : [http://localhost/](http://localhost/) (`admin`/`changeme`)
   - MailHog : [http://localhost:8025](http://localhost:8025) (test d'email)
   - Adminer : [http://localhost:8088](http://localhost:8088) (admin base de données)

### Dépannage

**Problèmes Courants :**
- **Conflits de port 80 :** Arrêtez d'autres serveurs web ou changez le mappage de ports Docker
- **Échec de la compilation Docker :** Assurez-vous que Docker dispose d'au moins 4 Go de mémoire
- **Services ne commençant pas :** Exécutez `npm run docker:dev:logs` pour vérifier les journaux
- **Tests échouant localement :** Utilisez `npm run docker:test:rebuild` pour un environnement de test propre
- **Extensions PHP manquantes :** Utilisez les conteneurs Docker — ne compilez pas localement
- **Schéma de base de données obsolète :** Exécutez `npm run docker:test:restart:db` pour actualiser

### Configuration DDEV

[DDEV](https://ddev.readthedocs.io/en/stable/) est un environnement de développement local basé sur Docker qui fournit PHP, MariaDB, Node.js, HTTPS et test d'email avec une seule commande.

#### Prérequis

- [Docker Desktop](https://docs.docker.com/desktop/)
- [DDEV](https://ddev.readthedocs.io/en/stable/users/install/ddev-installation/) v1.22+

#### Démarrage Rapide

```bash
git clone https://github.com/ChurchCRM/CRM.git churchcrm
cd churchcrm
ddev start
ddev setup-churchcrm
ddev launch
```

Connexion : **admin** / **changeme**

#### URLs des Services

| Service | URL |
|---------|-----|
| ChurchCRM | https://churchcrm.ddev.site |
| Mailpit | https://churchcrm.ddev.site:8025 |
| MySQL | `ddev mysql` |

#### Flux de Travail Quotidien

```bash
ddev start                        # Démarrer les services
ddev stop                         # Arrêter les services
ddev ssh                          # Accès shell
ddev logs                         # Afficher les journaux
```

#### Dépannage DDEV

| Problème | Solution |
|----------|----------|
| `ddev start` échoue | Assurez-vous que Docker s'exécute : `docker info` |
| Config.php non créé | Exécutez `ddev exec cp /var/www/html/.ddev/Config.ddev.php /var/www/html/src/Include/Config.php` |
| Base de données vide | Réimportez : `ddev import-db --file=cypress/data/seed.sql` |

Documentation complète de DDEV : https://ddev.readthedocs.io

## Normes de Développement

### Interface Utilisateur

ChurchCRM utilise le framework AdminLTE pour l'interface utilisateur. Suivez ces directives :

1. Familiarisez-vous avec [AdminLTE](https://adminlte.io/)
2. Gardez les changements d'interface utilisateur alignés avec les principes de conception d'AdminLTE
3. Créez des fichiers CSS modulaires et organisés pour les styles personnalisés
4. Assurez un design réactif sur tous les appareils

### Architecture Slim MVC

Pour les nouvelles APIs et pages, suivez l'architecture Slim MVC (Model-View-Controller).

### Tests avec Cypress

Utilisez Cypress pour les tests de bout en bout :

```bash
npm run test              # Exécuter tous les tests
npm run test:ui           # Test interactif
```

Structure des tests :
- Tests API : `cypress/e2e/api/private/[feature]/[endpoint].spec.js`
- Tests UI : `cypress/e2e/ui/[feature]/`

## Flux de Travail de Développement

1. **Embranchement :**
   ```bash
   git checkout -b nom-feature
   ```

2. **Normes de Code :**
   - Suivez les normes de codage existantes
   - Respectez le guide de style dans `.github/copilot-instructions.md`
   - Utilisez des messages de commit descriptifs

3. **Tests :**
   - Écrivez des tests pour vos modifications avec Cypress
   - Mettez à jour la documentation si nécessaire

4. **Processus de Demande de Tirage :**
   ```bash
   git pull origin master
   git rebase master
   git push origin nom-feature
   ```

## Normes de Codage

ChurchCRM maintient des normes strictes de qualité du code :

- ✅ **Base de Données :** ORM Propel obligatoire (pas de SQL brut)
- ✅ **HTML5 :** Uniquement CSS Bootstrap 4.6.2
- ✅ **Services :** Logique métier dans les classes Service
- ✅ **PHP 8.4+:** Types nullables explicites
- ✅ **i18n :** Enveloppez le texte de l'interface utilisateur avec `gettext()` ou `i18next.t()`

Pour des normes complètes, voir `.github/copilot-instructions.md`

## Code de Conduite

Veuillez respecter le [Code de Conduite](CODE_OF_CONDUCT.md) dans toutes les interactions.

Merci pour votre contribution !
