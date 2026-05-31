---
title: "Preguntas Frecuentes"
description: "Preguntas comunes sobre instalación, acceso, solución de problemas y buenas prácticas de ChurchCRM."
date: "2026-03-16"
lastmod: "2026-03-16"
layout: faq
faqs:
  - q: "¿ChurchCRM realmente es gratis y de código abierto?"
    a: "Sí. ChurchCRM es 100% gratuito y de código abierto, sin costos de licencia."
  - q: "¿Necesito mi propio servidor, o puedo instalar ChurchCRM en mi computadora local?"
    a: >-
      ChurchCRM no ofrece alojamiento propio — el proyecto no gestiona ningún servidor en la nube
      al que puedas suscribirte. Eres responsable de proporcionar un lugar donde ejecutar el
      software. Dicho esto, tienes dos opciones prácticas si no tienes un servidor.


      **Alojamiento compartido (recomendado para la mayoría de las iglesias):** Una cuenta de
      hosting compartido de cualquier proveedor importante (Hostinger, Bluehost, SiteGround,
      DreamHost y muchos otros) te da todo lo que ChurchCRM necesita — PHP, MySQL y Apache — por
      aproximadamente $3–$10 al mes. La mayoría incluye Softaculous, que instala ChurchCRM con
      pocos clics. Es la configuración más común y permite que toda tu congregación acceda desde
      cualquier dispositivo.


      **Computadora local (para pruebas o uso individual):** Sí, ChurchCRM puede ejecutarse en
      tu propia computadora Windows, Mac o Linux usando una pila de servidor web local como XAMPP,
      WAMP, MAMP o Docker. Esto no tiene costo adicional y funciona bien para evaluación o uso
      personal. La limitación importante es que una instalación local solo es accesible desde esa
      computadora — otros usuarios no podrán iniciar sesión desde sus propios dispositivos a menos
      que estén en la misma red local.


      Si el costo es una preocupación, varios proveedores ofrecen planes por menos de $5 al mes
      que funcionan perfectamente para ChurchCRM en una congregación de cualquier tamaño.

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
    a: "No. Los mapas usan OpenStreetMap y Leaflet — no se necesita ninguna clave de API."

  - q: "¿Puedo ampliar ChurchCRM con plugins?"
    a: "Sí. ChurchCRM incluye un ecosistema de plugins con un registro comunitario para instalar plugins aprobados directamente desde el panel de administración."

  - q: "¿Hay modo oscuro?"
    a: "Sí. Cada usuario puede activar el modo oscuro individualmente en Mi Configuración → Tema."

  - q: "¿Cómo actualizo de 6.x a 7.x?"
    a: "Haz una copia de seguridad de la base de datos, reemplaza los archivos de la aplicación con el nuevo paquete y visita el sitio. La migración de la base de datos se ejecuta automáticamente al iniciar."


---

Respuestas rápidas para las preguntas más comunes sobre configuración, operación y solución de problemas en ChurchCRM.
