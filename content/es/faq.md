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
  - q: "¿Qué cambió en ChurchCRM 7.x?"
    a: "La mayor novedad es una interfaz completamente rediseñada en 7.1.0 (Tabler/Bootstrap 5), modo oscuro, sistema de plugins, mapas con OpenStreetMap sin clave de API y soporte para 46 idiomas."

  - q: "¿Necesito una clave de API de Google Maps?"
    a: "No. Desde ChurchCRM 7.0.0, los mapas usan OpenStreetMap y Leaflet — no se necesita ninguna clave de API."

  - q: "¿Puedo ampliar ChurchCRM con plugins?"
    a: "Sí. Hay un ecosistema de plugins desde la versión 7.0.0. En 7.3.0 se agregó un registro comunitario para instalar plugins aprobados directamente desde el panel de administración."

  - q: "¿Hay modo oscuro?"
    a: "Sí. Desde la versión 7.1.2, cada usuario puede activar el modo oscuro individualmente en Mi Configuración → Tema."

  - q: "¿Cómo actualizo de 6.x a 7.x?"
    a: "Haz una copia de seguridad de la base de datos, reemplaza los archivos de la aplicación con el nuevo paquete y visita el sitio. Desde 7.0.5, la migración de la base de datos se ejecuta automáticamente al iniciar."


---

Respuestas rápidas para las preguntas más comunes sobre configuración, operación y solución de problemas en ChurchCRM.
