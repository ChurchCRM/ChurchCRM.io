---
title: "Foire Aux Questions"
description: "Questions fréquentes sur l'installation, la connexion, le dépannage et les bonnes pratiques de ChurchCRM."
date: "2026-03-16"
lastmod: "2026-03-16"
layout: faq
faqs:
  - q: "ChurchCRM est-il vraiment gratuit et open source ?"
    a: "Oui. ChurchCRM est 100% gratuit et open source, sans frais de licence."
  - q: "Ai-je besoin de mon propre serveur, ou puis-je installer ChurchCRM sur mon ordinateur local ?"
    a: >-
      ChurchCRM ne propose pas d'hébergement — il n'existe aucun service cloud géré par le projet
      auquel vous pourriez vous abonner. Vous êtes responsable de fournir un environnement pour
      faire tourner le logiciel. Cela dit, deux options pratiques s'offrent à vous si vous ne
      disposez pas d'un serveur.


      **Hébergement partagé (recommandé pour la plupart des églises) :** Un compte d'hébergement
      partagé chez n'importe quel grand prestataire (Hostinger, Bluehost, SiteGround, DreamHost,
      etc.) vous fournit tout ce dont ChurchCRM a besoin — PHP, MySQL et Apache — pour environ
      3 à 10 € par mois. La plupart incluent Softaculous, qui installe ChurchCRM en quelques
      clics. C'est la configuration la plus répandue et permet à toute votre congrégation
      d'accéder au logiciel depuis n'importe quel appareil.


      **Ordinateur local (pour les tests ou un usage individuel) :** Oui, ChurchCRM peut
      fonctionner sur votre propre ordinateur Windows, Mac ou Linux grâce à une pile de serveur
      web local comme XAMPP, WAMP, MAMP ou Docker. C'est gratuit et convient bien à l'évaluation
      ou à un usage personnel. La limitation importante est qu'une installation locale n'est
      accessible que depuis cet ordinateur — les autres membres de l'équipe ne pourront pas se
      connecter depuis leurs appareils sauf s'ils sont sur le même réseau local.


      Si le coût est une préoccupation, plusieurs hébergeurs proposent des plans à moins de
      5 €/mois qui suffisent amplement pour ChurchCRM dans une congrégation de toute taille.

  - q: "Où puis-je essayer ChurchCRM avant l'installation ?"
    a: "Utilisez notre page de démonstration localisée : [/fr/demo.html](/fr/demo.html)."
  - q: "Quelles sont les exigences serveur ?"
    a: "ChurchCRM nécessite PHP 8.4+, MySQL 8.0+ (ou MariaDB compatible) et Apache avec mod_rewrite."
  - q: "Quelle est la méthode la plus rapide pour installer ChurchCRM ?"
    a: "Suivez le guide d'installation : [/fr/install.html](/fr/install.html). Si Softaculous est disponible chez votre hébergeur, c'est souvent la méthode la plus rapide."
  - q: "Comment se connecter à une nouvelle installation ?"
    a: "Une installation neuve crée un compte administrateur avec l'identifiant `admin` et le mot de passe `changeme`. Modifiez le mot de passe immédiatement."
  - q: "Je vois \"Too Many Redirects\" ou des erreurs API. Que vérifier ?"
    a: "Vérifiez d'abord que Apache mod_rewrite est activé et que les règles de réécriture sont correctes."
  - q: "Comment diagnostiquer une erreur interne serveur (500) ?"
    a: "Vérifiez d'abord les permissions de fichiers et les logs serveur. Guide officiel : https://docs.churchcrm.io/administration/500-error"
  - q: "Comment activer le débogage et les journaux ?"
    a: "Activez les logs applicatifs dans les paramètres système et augmentez le niveau de rapport d'erreurs PHP lors du dépannage."
  - q: "Comment ajouter un logo ou un en-tête personnalisé sans risque ?"
    a: "Téléversez votre fichier dans le dossier Images et configurez ce chemin dans les paramètres de rapports. Évitez de remplacer directement les fichiers par défaut pour rester compatible avec les mises à jour."
  - q: "Où demander de l'aide ou signaler un bug ?"
    a: "Utilisez GitHub Discussions pour les questions et GitHub Issues pour les bugs confirmés : https://github.com/ChurchCRM/CRM/discussions et https://github.com/ChurchCRM/CRM/issues"
  - q: "Qu'est-ce qui a changé dans ChurchCRM 7.x ?"
    a: "La principale nouveauté est une interface entièrement repensée (Tabler/Bootstrap 5), le mode sombre, un système de plugins, des cartes via OpenStreetMap sans clé d'API et la prise en charge de 46 langues."

  - q: "Ai-je besoin d'une clé API Google Maps ?"
    a: "Non. Les cartes utilisent OpenStreetMap et Leaflet — aucune clé API n'est nécessaire."

  - q: "Puis-je étendre ChurchCRM avec des plugins ?"
    a: "Oui. ChurchCRM inclut un système de plugins avec un registre communautaire pour installer des plugins approuvés directement depuis le panneau d'administration."

  - q: "Y a-t-il un mode sombre ?"
    a: "Oui. Chaque utilisateur peut activer le mode sombre individuellement dans Mes Paramètres → Thème."

  - q: "Comment mettre à niveau de 6.x vers 7.x ?"
    a: "Sauvegardez la base de données, remplacez les fichiers de l'application par le nouveau package et visitez le site. La migration de la base de données s'effectue automatiquement au démarrage."


---

Réponses rapides aux questions les plus courantes sur la configuration, l'utilisation et le dépannage de ChurchCRM.
