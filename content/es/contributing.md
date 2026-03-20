---
title: "Cómo Contribuir"
description: "Aprende cómo contribuir a ChurchCRM. Envía reportes de errores, parches de código, mejoras de documentación y más."
date: "2026-03-19"
lastmod: "2026-03-19"
---

¡Nos encanta escuchar ideas de nuestros usuarios! Es lo que hace que esta plataforma sea tan excelente y versátil. ¡Si tienes una idea para contribuir, tómate un momento para compartirla con nosotros!

El proyecto recibe, y depende de, contribuciones de desarrolladores y usuarios de la comunidad de código abierto. Las contribuciones se pueden hacer de varias formas:

- Parches de código a través de solicitudes de extracción
- Mejoras de documentación
- Reportes de errores y revisión de parches

## Primeros Pasos

1. Lee esta página completa de "arriba a abajo".
2. Asegúrate de tener una [cuenta de GitHub](https://github.com/signup/free).
3. Preséntate en el chat de desarrolladores en [Discord](https://discord.gg/tuWyFzj3Nj).
4. Echa un vistazo a la página [Problemas Abiertos](https://github.com/ChurchCRM/CRM/issues). Hemos hecho que sea fácil para principiantes con la etiqueta [good first issue](https://github.com/ChurchCRM/CRM/labels/good%20first%20issue) — estos son problemas que deberían ser relativamente fáciles de resolver.
5. ¡Diviértete!

## Configuración del Entorno de Desarrollo

### Inicio Rápido (Recomendado)

**🚀 GitHub Codespaces (Lo Más Fácil):**
1. Haz clic en "Code" → "Codespaces" → "Create codespace on [branch]"
2. Espera 2-3 minutos para la configuración automática
3. Abre `http://localhost` e inicia sesión con `admin`/`changeme`

**🐳 Contenedores de Desarrollo VS Code:**
1. Instala la extensión "Dev Containers" en VS Code
2. Abre este repositorio en VS Code
3. Haz clic en "Reopen in Container" cuando se solicite
4. Espera a que se complete la configuración

**🔧 DDEV (Docker Local):**
1. Instala [DDEV](https://ddev.readthedocs.io/en/stable/users/install/ddev-installation/) y [Docker](https://docs.docker.com/desktop/)
2. Clona el repositorio y ejecuta:
   ```bash
   git clone https://github.com/ChurchCRM/CRM.git churchcrm
   cd churchcrm
   ddev start
   ddev setup-churchcrm
   ```
3. Abre [https://churchcrm.ddev.site](https://churchcrm.ddev.site) e inicia sesión con `admin`/`changeme`

Ver [Configuración DDEV](#configuración-ddev) abajo para detalles completos y solución de problemas.

### Configuración Manual

Si prefieres instalar manualmente o las opciones automáticas no funcionan:

1. **Instalar Requisitos Previos:**
   - [Git](https://github.com/git-guides/install-git) (o [GitHub Desktop](https://desktop.github.com/))
   - [Node.js versión 20+](https://nodejs.org/en/download/)
   - [Docker](https://docs.docker.com/desktop/)
   - **PHP 8.4+** con extensiones: `bcmath`, `curl`, `gd`, `gettext`, `iconv`, `mbstring`, `mysqli`, `pdo_mysql`, `sodium`, `zip`, `zlib`
   - [Composer](https://getcomposer.org/download/) (gestor de dependencias PHP)

2. **Clonar y Configurar:**
   ```bash
   git clone https://github.com/tu-usuario/ChurchCRM.git
   cd ChurchCRM
   ./scripts/setup-dev-environment.sh
   ```

3. **Acceder al Sitio Web:**
   - ChurchCRM: [http://localhost/](http://localhost/) (`admin`/`changeme`)
   - MailHog: [http://localhost:8025](http://localhost:8025) (prueba de correo)
   - Adminer: [http://localhost:8088](http://localhost:8088) (administrador de base de datos)

### Solución de Problemas

**Problemas Comunes:**
- **Conflictos de puerto 80:** Detén otros servidores web o cambia la asignación de puertos Docker
- **Error en la construcción de Docker:** Asegúrate de que Docker tenga 4GB+ de memoria asignada
- **Servicios no iniciando:** Ejecuta `npm run docker:dev:logs` para verificar registros
- **Pruebas fallando localmente:** Usa `npm run docker:test:rebuild` para un entorno de prueba limpio
- **Extensiones PHP faltantes:** Usa contenedores Docker - no construyas localmente
- **Esquema de base de datos desactualizado:** Ejecuta `npm run docker:test:restart:db` para refrescar

### Configuración DDEV

[DDEV](https://ddev.readthedocs.io/en/stable/) es un entorno de desarrollo local basado en Docker que te proporciona PHP, MariaDB, Node.js, HTTPS y pruebas de correo con un solo comando.

#### Requisitos Previos

- [Docker Desktop](https://docs.docker.com/desktop/)
- [DDEV](https://ddev.readthedocs.io/en/stable/users/install/ddev-installation/) v1.22+

#### Inicio Rápido

```bash
git clone https://github.com/ChurchCRM/CRM.git churchcrm
cd churchcrm
ddev start
ddev setup-churchcrm
ddev launch
```

Inicio de sesión: **admin** / **changeme**

#### URLs de Servicios

| Servicio | URL |
|----------|-----|
| ChurchCRM | https://churchcrm.ddev.site |
| Mailpit | https://churchcrm.ddev.site:8025 |
| MySQL | `ddev mysql` |

#### Flujo de Trabajo Diario

```bash
ddev start                        # Iniciar servicios
ddev stop                         # Detener servicios
ddev ssh                          # Acceso a shell
ddev logs                         # Ver registros
```

#### Solución de Problemas DDEV

| Problema | Solución |
|----------|----------|
| `ddev start` falla | Asegúrate de que Docker esté ejecutándose: `docker info` |
| Config.php no creado | Ejecuta `ddev exec cp /var/www/html/.ddev/Config.ddev.php /var/www/html/src/Include/Config.php` |
| Base de datos vacía | Re-importa: `ddev import-db --file=cypress/data/seed.sql` |

Documentación completa de DDEV: https://ddev.readthedocs.io

## Estándares de Desarrollo

### Interfaz de Usuario

ChurchCRM utiliza el framework AdminLTE para la interfaz de usuario. Sigue estas directrices:

1. Familiarízate con [AdminLTE](https://adminlte.io/)
2. Mantén los cambios de UI alineados con los principios de diseño de AdminLTE
3. Crea archivos CSS modulares y organizados para estilos personalizados
4. Asegura el diseño responsivo en todos los tamaños de pantalla

### Arquitectura Slim MVC

Para nuevas APIs y páginas, sigue la arquitectura Slim MVC (Modelo-Vista-Controlador).

### Pruebas con Cypress

Usa Cypress para pruebas de principio a fin:

```bash
npm run test              # Ejecutar todas las pruebas
npm run test:ui           # Pruebas interactivas
```

Estructura de pruebas:
- Pruebas de API: `cypress/e2e/api/private/[feature]/[endpoint].spec.js`
- Pruebas de UI: `cypress/e2e/ui/[feature]/`

## Flujo de Trabajo de Desarrollo

1. **Ramificación:**
   ```bash
   git checkout -b nombre-feature
   ```

2. **Estándares de Código:**
   - Sigue los estándares de codificación existentes
   - Adhiérete a la guía de estilos en `.github/copilot-instructions.md`
   - Usa mensajes de confirmación descriptivos

3. **Pruebas:**
   - Escribe pruebas para tus cambios usando Cypress
   - Actualiza la documentación según sea necesario

4. **Proceso de Solicitud de Extracción:**
   ```bash
   git pull origin master
   git rebase master
   git push origin nombre-feature
   ```

## Estándares de Codificación

ChurchCRM mantiene estándares de calidad de código estrictos:

- ✅ **Base de Datos:** ORM Propel obligatorio (sin SQL crudo)
- ✅ **HTML5:** Solo CSS Bootstrap 4.6.2
- ✅ **Servicios:** Lógica empresarial en clases Service
- ✅ **PHP 8.4+:** Tipos anulables explícitos
- ✅ **i18n:** Envuelve el texto de UI con `gettext()` o `i18next.t()`

Para estándares completos, ver `.github/copilot-instructions.md`

## Código de Conducta

Por favor, adhiérate al [Código de Conducta](CODE_OF_CONDUCT.md) en todas las interacciones.

¡Gracias por tu contribución!
