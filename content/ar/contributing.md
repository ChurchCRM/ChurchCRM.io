---
title: "كيفية المساهمة"
description: "تعرف على كيفية المساهمة في ChurchCRM. قدم تقارير الأخطاء وإصلاحات الأكواد وتحسينات التوثيق والمزيد."
date: "2026-03-19"
lastmod: "2026-03-19"
---

نحن نحب سماع الأفكار من مستخدمينا! هذا ما يجعل هذه المنصة رائعة وموثوقة. إذا كان لديك فكرة للمساهمة، يرجى تخصيص لحظة لمشاركتها معنا!

يرحب المشروع ويعتمد على مساهمات المطورين والمستخدمين من مجتمع المصادر المفتوحة. يمكن القيام بالمساهمات بعدة طرق:

- إصلاحات الأكواد عبر طلبات السحب
- تحسينات التوثيق
- تقارير الأخطاء ومراجعة الإصلاحات

## الخطوات الأولى

1. اقرأ هذه الصفحة بالكامل "من الأعلى إلى الأسفل".
2. تأكد من أن لديك [حساب GitHub](https://github.com/signup/free).
3. قدم نفسك في دردشة المطورين على [Discord](https://discord.gg/tuWyFzj3Nj).
4. راجع صفحة [المشاكل المفتوحة](https://github.com/ChurchCRM/CRM/issues). لقد جعلنا الأمر سهلاً للمبتدئين باستخدام علامة [good first issue](https://github.com/ChurchCRM/CRM/labels/good%20first%20issue) — هذه مشاكل يجب أن تكون سهلة نسبياً في الحل.
5. استمتع!

## إعداد بيئة التطوير

### البدء السريع (موصى به)

**🚀 GitHub Codespaces (الأسهل):**
1. انقر على "Code" → "Codespaces" → "Create codespace on [branch]"
2. انتظر 2-3 دقائق للإعداد التلقائي
3. افتح `http://localhost` وسجل الدخول باستخدام `admin`/`changeme`

**🐳 حاويات تطوير VS Code:**
1. ثبّت ملحق "Dev Containers" في VS Code
2. افتح هذا المستودع في VS Code
3. انقر على "Reopen in Container" عند الطلب
4. انتظر اكتمال الإعداد

**🔧 DDEV (Docker محلي):**
1. ثبّت [DDEV](https://ddev.readthedocs.io/en/stable/users/install/ddev-installation/) و [Docker](https://docs.docker.com/desktop/)
2. استنسخ المستودع وقم بتشغيل:
   ```bash
   git clone https://github.com/ChurchCRM/CRM.git churchcrm
   cd churchcrm
   ddev start
   ddev setup-churchcrm
   ```
3. افتح [https://churchcrm.ddev.site](https://churchcrm.ddev.site) وسجل الدخول باستخدام `admin`/`changeme`

انظر [إعداد DDEV](#إعداد-ddev) أدناه للتفاصيل الكاملة واستكشاف الأخطاء وإصلاحها.

### الإعداد اليدوي

إذا كنت تفضل الإعداد اليدوي أو إذا لم تعمل الخيارات التلقائية:

1. **تثبيت المتطلبات الأساسية:**
   - [Git](https://github.com/git-guides/install-git) أو [GitHub Desktop](https://desktop.github.com/)
   - [Node.js الإصدار 20+](https://nodejs.org/en/download/)
   - [Docker](https://docs.docker.com/desktop/)
   - **PHP 8.4+** مع الامتدادات: `bcmath`, `curl`, `gd`, `gettext`, `iconv`, `mbstring`, `mysqli`, `pdo_mysql`, `sodium`, `zip`, `zlib`
   - [Composer](https://getcomposer.org/download/) (مدير اعتماديات PHP)

2. **استنسخ والإعداد:**
   ```bash
   git clone https://github.com/your-username/ChurchCRM.git
   cd ChurchCRM
   ./scripts/setup-dev-environment.sh
   ```

3. **الوصول إلى موقع الويب:**
   - ChurchCRM: [http://localhost/](http://localhost/) (`admin`/`changeme`)
   - MailHog: [http://localhost:8025](http://localhost:8025) (اختبار البريد الإلكتروني)
   - Adminer: [http://localhost:8088](http://localhost:8088) (إدارة قاعدة البيانات)

### استكشاف الأخطاء وإصلاحها

**المشاكل الشائعة:**
- **تضارب المنفذ 80:** أوقف خوادم ويب أخرى أو غيّر تعيين منفذ Docker
- **فشل إنشاء Docker:** تأكد من أن Docker لديها 4GB+ من الذاكرة المخصصة
- **الخدمات لا تبدأ:** قم بتشغيل `npm run docker:dev:logs` للتحقق من السجلات
- **فشلت الاختبارات محلياً:** استخدم `npm run docker:test:rebuild` لبيئة اختبار نظيفة
- **امتدادات PHP المفقودة:** استخدم حاويات Docker - لا تقم بالإنشاء محلياً
- **مخطط قاعدة البيانات قديم:** قم بتشغيل `npm run docker:test:restart:db` للتحديث

### إعداد DDEV

[DDEV](https://ddev.readthedocs.io/en/stable/) هي بيئة تطوير محلية قائمة على Docker توفر PHP و MariaDB و Node.js و HTTPS واختبار البريد الإلكتروني بأمر واحد.

#### المتطلبات الأساسية

- [Docker Desktop](https://docs.docker.com/desktop/)
- [DDEV](https://ddev.readthedocs.io/en/stable/users/install/ddev-installation/) v1.22+

#### البدء السريع

```bash
git clone https://github.com/ChurchCRM/CRM.git churchcrm
cd churchcrm
ddev start
ddev setup-churchcrm
ddev launch
```

تسجيل الدخول: **admin** / **changeme**

#### عناوين URL للخدمات

| الخدمة | URL |
|--------|-----|
| ChurchCRM | https://churchcrm.ddev.site |
| Mailpit | https://churchcrm.ddev.site:8025 |
| MySQL | `ddev mysql` |

#### سير العمل اليومي

```bash
ddev start                        # بدء الخدمات
ddev stop                         # إيقاف الخدمات
ddev ssh                          # الوصول إلى shell
ddev logs                         # عرض السجلات
```

#### استكشاف أخطاء DDEV وإصلاحها

| المشكلة | الحل |
|--------|-----|
| `ddev start` فشل | تأكد من تشغيل Docker: `docker info` |
| لم يتم إنشاء Config.php | قم بتشغيل `ddev exec cp /var/www/html/.ddev/Config.ddev.php /var/www/html/src/Include/Config.php` |
| قاعدة البيانات فارغة | أعد الاستيراد: `ddev import-db --file=cypress/data/seed.sql` |

وثائق DDEV الكاملة: https://ddev.readthedocs.io

## معايير التطوير

### واجهة المستخدم

يستخدم ChurchCRM إطار work AdminLTE لواجهة المستخدم. اتبع هذه الإرشادات:

1. تعرّف على [AdminLTE](https://adminlte.io/)
2. حافظ على تغييرات UI متماشية مع مبادئ تصميم AdminLTE
3. أنشئ ملفات CSS معيارية ومنظمة للأنماط المخصصة
4. اضمن التصميم المتجاوب على جميع أحجام الشاشات

### معمارية Slim MVC

للـ APIs والصفحات الجديدة، اتبع معمارية Slim MVC (Model-View-Controller).

### الاختبار باستخدام Cypress

استخدم Cypress للاختبار الشامل:

```bash
npm run test              # تشغيل جميع الاختبارات
npm run test:ui           # الاختبار التفاعلي
```

هيكل الاختبار:
- اختبارات API: `cypress/e2e/api/private/[feature]/[endpoint].spec.js`
- اختبارات UI: `cypress/e2e/ui/[feature]/`

## سير عمل التطوير

1. **التفرع:**
   ```bash
   git checkout -b feature-name
   ```

2. **معايير الأكواد:**
   - اتبع معايير الترميز الموجودة
   - الالتزم بدليل النمط في `.github/copilot-instructions.md`
   - استخدم رسائل التزام وصفية

3. **الاختبار:**
   - اكتب اختبارات لتغييراتك باستخدام Cypress
   - حدث التوثيق حسب الحاجة

4. **عملية طلب السحب:**
   ```bash
   git pull origin master
   git rebase master
   git push origin feature-name
   ```

## معايير الترميز

يحافظ ChurchCRM على معايير جودة أكواد صارمة:

- ✅ **قاعدة البيانات:** ORM Propel إلزامي (بدون SQL خام)
- ✅ **HTML5:** CSS Bootstrap 4.6.2 فقط
- ✅ **الخدمات:** منطق الأعمال في فئات Service
- ✅ **PHP 8.4+:** أنواع nullable صريحة
- ✅ **i18n:** غلّف نص UI باستخدام `gettext()` أو `i18next.t()`

للمعايير الكاملة، انظر `.github/copilot-instructions.md`

## قواعس السلوك

يرجى الالتزام بـ [قواعس السلوك](CODE_OF_CONDUCT.md) في جميع التفاعلات.

شكراً على مساهمتك!
