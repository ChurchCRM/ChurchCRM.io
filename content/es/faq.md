---
title: "Preguntas Frecuentes"
description: "Preguntas comunes sobre instalación, acceso, solución de problemas y buenas prácticas de ChurchCRM."
date: "2026-03-16"
lastmod: "2026-03-16"
layout: faq
faqs:
  - q: "¿ChurchCRM realmente es gratis y de código abierto?"
    a: "Sí. ChurchCRM es 100% gratuito y de código abierto, sin costos de licencia."
  - q: "¿Dónde puedo probar ChurchCRM antes de instalarlo?"
    a: "Usa nuestra página de demo localizada: [/es/demo.html](/es/demo.html)."
  - q: "¿Cuáles son los requisitos del servidor?"
    a: "ChurchCRM requiere PHP 8.4+, MySQL 8.0+ (o MariaDB compatible) y Apache con mod_rewrite."
  - q: "¿Cuál es la forma más rápida de instalar ChurchCRM?"
    a: "Sigue la guía en [/es/install.html](/es/install.html). Si tu hosting ofrece Softaculous, normalmente es la opción más rápida."
  - q: "¿Cómo inicio sesión en una instalación nueva?"
    a: "Una instalación nueva crea un usuario administrador con nombre `admin` y contraseña `changeme`. Cambia la contraseña inmediatamente."
  - q: "Veo \"Too Many Redirects\" o errores de API. ¿Qué reviso?"
    a: "Primero verifica que Apache mod_rewrite esté habilitado y que las reglas de reescritura estén correctas."
  - q: "¿Cómo soluciono un Error Interno del Servidor (500)?"
    a: "Revisa permisos de archivos y logs del servidor. Guía oficial: https://docs.churchcrm.io/administration/500-error"
  - q: "¿Cómo habilito depuración y registros?"
    a: "Activa los logs de la aplicación en Configuración del sistema y aumenta el reporte de errores de PHP durante el diagnóstico."
  - q: "¿Cómo agrego un logo o membrete personalizado sin riesgos?"
    a: "Sube tu archivo al directorio Images y configura esa ruta en ajustes de reportes. Evita reemplazar archivos predeterminados para no perder cambios en actualizaciones."
  - q: "¿Dónde pido ayuda o reporto problemas?"
    a: "Usa GitHub Discussions para preguntas y GitHub Issues para errores confirmados: https://github.com/ChurchCRM/CRM/discussions y https://github.com/ChurchCRM/CRM/issues"
---

Respuestas rápidas para las preguntas más comunes sobre configuración, operación y solución de problemas en ChurchCRM.
