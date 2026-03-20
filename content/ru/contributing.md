---
title: "Как Внести Вклад"
description: "Узнайте, как внести свой вклад в ChurchCRM. Отправляйте отчеты об ошибках, исправления кода, улучшения документации и многое другое."
date: "2026-03-19"
lastmod: "2026-03-19"
---

Нам нравится слышать идеи наших пользователей! Это то, что делает этот проект таким великолепным и универсальным. Если у вас есть идея для взноса, пожалуйста, поделитесь ею с нами!

Проект приветствует и зависит от вкладов разработчиков и пользователей из сообщества с открытым исходным кодом. Вклады могут быть сделаны несколькими способами:

- Исправления кода через запросы на слияние
- Улучшения документации
- Отчеты об ошибках и обзоры исправлений

## Первые Шаги

1. Прочитайте всю эту страницу "сверху вниз".
2. Убедитесь, что у вас есть [учетная запись GitHub](https://github.com/signup/free).
3. Представьтесь в чате разработчиков на [Discord](https://discord.gg/tuWyFzj3Nj).
4. Посмотрите страницу [Открытые Проблемы](https://github.com/ChurchCRM/CRM/issues). Мы облегчили это для новичков с меткой [good first issue](https://github.com/ChurchCRM/CRM/labels/good%20first%20issue) — это проблемы, которые должны быть относительно легки в решении.
5. Развлекайтесь!

## Настройка Среды Разработки

### Быстрый Старт (Рекомендуется)

**🚀 GitHub Codespaces (Самый Простой):**
1. Нажмите "Code" → "Codespaces" → "Create codespace on [branch]"
2. Подождите 2-3 минуты автоматической настройки
3. Откройте `http://localhost` и войдите с `admin`/`changeme`

**🐳 Контейнеры разработки VS Code:**
1. Установите расширение "Dev Containers" в VS Code
2. Откройте этот репозиторий в VS Code
3. Нажмите "Reopen in Container" когда будет предложено
4. Дождитесь завершения настройки

**🔧 DDEV (Локальный Docker):**
1. Установите [DDEV](https://ddev.readthedocs.io/en/stable/users/install/ddev-installation/) и [Docker](https://docs.docker.com/desktop/)
2. Клонируйте репозиторий и выполните:
   ```bash
   git clone https://github.com/ChurchCRM/CRM.git churchcrm
   cd churchcrm
   ddev start
   ddev setup-churchcrm
   ```
3. Откройте [https://churchcrm.ddev.site](https://churchcrm.ddev.site) и войдите с `admin`/`changeme`

См. [Настройка DDEV](#настройка-ddev) ниже для полных деталей и устранения неполадок.

### Ручная Настройка

Если вы предпочитаете ручную установку или автоматические опции не работают:

1. **Установка Предварительных Требований:**
   - [Git](https://github.com/git-guides/install-git) или [GitHub Desktop](https://desktop.github.com/)
   - [Node.js версия 20+](https://nodejs.org/en/download/)
   - [Docker](https://docs.docker.com/desktop/)
   - **PHP 8.4+** с расширениями: `bcmath`, `curl`, `gd`, `gettext`, `iconv`, `mbstring`, `mysqli`, `pdo_mysql`, `sodium`, `zip`, `zlib`
   - [Composer](https://getcomposer.org/download/) (менеджер зависимостей PHP)

2. **Клонирование и Настройка:**
   ```bash
   git clone https://github.com/your-username/ChurchCRM.git
   cd ChurchCRM
   ./scripts/setup-dev-environment.sh
   ```

3. **Доступ к Веб-сайту:**
   - ChurchCRM: [http://localhost/](http://localhost/) (`admin`/`changeme`)
   - MailHog: [http://localhost:8025](http://localhost:8025) (тестирование почты)
   - Adminer: [http://localhost:8088](http://localhost:8088) (администратор БД)

### Устранение Неполадок

**Распространенные Проблемы:**
- **Конфликты портов 80:** Остановите другие веб-серверы или измените отображение портов Docker
- **Ошибка при сборке Docker:** Убедитесь, что Docker имеет выделено 4 ГБ+ памяти
- **Услуги не запускаются:** Выполните `npm run docker:dev:logs` для проверки логов
- **Тесты не пройдены локально:** Используйте `npm run docker:test:rebuild` для чистой среды тестирования
- **Отсутствуют расширения PHP:** Используйте контейнеры Docker — не собирайте локально
- **Устаревшая схема БД:** Выполните `npm run docker:test:restart:db` для обновления

### Настройка DDEV

[DDEV](https://ddev.readthedocs.io/en/stable/) — это локальная среда разработки на основе Docker, которая обеспечивает PHP, MariaDB, Node.js, HTTPS и тестирование электронной почты одной командой.

#### Предварительные Требования

- [Docker Desktop](https://docs.docker.com/desktop/)
- [DDEV](https://ddev.readthedocs.io/en/stable/users/install/ddev-installation/) v1.22+

#### Быстрый Старт

```bash
git clone https://github.com/ChurchCRM/CRM.git churchcrm
cd churchcrm
ddev start
ddev setup-churchcrm
ddev launch
```

Вход: **admin** / **changeme**

#### URLs Сервисов

| Сервис | URL |
|--------|-----|
| ChurchCRM | https://churchcrm.ddev.site |
| Mailpit | https://churchcrm.ddev.site:8025 |
| MySQL | `ddev mysql` |

#### Ежедневный Рабочий Процесс

```bash
ddev start                        # Запуск сервисов
ddev stop                         # Остановка сервисов
ddev ssh                          # Доступ к shell
ddev logs                         # Просмотр логов
```

#### Устранение Неполадок DDEV

| Проблема | Решение |
|----------|---------|
| `ddev start` не работает | Убедитесь, что Docker запущен: `docker info` |
| Config.php не создан | Выполните `ddev exec cp /var/www/html/.ddev/Config.ddev.php /var/www/html/src/Include/Config.php` |
| База данных пуста | Переимпортируйте: `ddev import-db --file=cypress/data/seed.sql` |

Полная документация DDEV: https://ddev.readthedocs.io

## Стандарты Разработки

### Пользовательский Интерфейс

ChurchCRM использует фреймворк AdminLTE для пользовательского интерфейса. Следуйте этим рекомендациям:

1. Ознакомьтесь с [AdminLTE](https://adminlte.io/)
2. Держите изменения UI в соответствии с принципами дизайна AdminLTE
3. Создавайте модульные и организованные CSS файлы для пользовательских стилей
4. Обеспечивайте адаптивный дизайн для всех размеров экрана

### Архитектура Slim MVC

Для новых API и страниц следуйте архитектуре Slim MVC (Model-View-Controller).

### Тестирование с Cypress

Используйте Cypress для комплексного тестирования:

```bash
npm run test              # Запуск всех тестов
npm run test:ui           # Интерактивное тестирование
```

Структура тестов:
- Тесты API: `cypress/e2e/api/private/[feature]/[endpoint].spec.js`
- Тесты UI: `cypress/e2e/ui/[feature]/`

## Рабочий Процесс Разработки

1. **Ветвление:**
   ```bash
   git checkout -b feature-name
   ```

2. **Стандарты Кода:**
   - Следуйте существующим стандартам кодирования
   - Придерживайтесь руководства стиля в `.github/copilot-instructions.md`
   - Используйте описательные сообщения коммитов

3. **Тестирование:**
   - Напишите тесты для ваших изменений с помощью Cypress
   - Обновляйте документацию по мере необходимости

4. **Процесс запроса на слияние:**
   ```bash
   git pull origin master
   git rebase master
   git push origin feature-name
   ```

## Стандарты Кодирования

ChurchCRM поддерживает строгие стандарты качества кода:

- ✅ **База Данных:** ORM Propel обязателен (без сырого SQL)
- ✅ **HTML5:** Только CSS Bootstrap 4.6.2
- ✅ **Сервисы:** Бизнес-логика в классах Service
- ✅ **PHP 8.4+:** Явные типы nullable
- ✅ **i18n:** Оборачивайте текст UI с `gettext()` или `i18next.t()`

Для полных стандартов см. `.github/copilot-instructions.md`

## Кодекс Поведения

Пожалуйста, соблюдайте [Кодекс Поведения](CODE_OF_CONDUCT.md) во всех взаимодействиях.

Спасибо за ваш вклад!
