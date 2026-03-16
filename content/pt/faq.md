---
title: "Perguntas Frequentes"
description: "Perguntas comuns sobre instalacao, acesso, solucao de problemas e boas praticas do ChurchCRM."
date: "2026-03-16"
lastmod: "2026-03-16"
layout: faq
faqs:
  - q: "O ChurchCRM e realmente gratuito e open source?"
    a: "Sim. O ChurchCRM e 100% gratuito e de codigo aberto, sem taxas de licenca."
  - q: "Onde posso testar o ChurchCRM antes de instalar?"
    a: "Use nossa pagina de demonstracao localizada: [/pt/demo.html](/pt/demo.html)."
  - q: "Quais sao os requisitos do servidor?"
    a: "O ChurchCRM requer PHP 8.4+, MySQL 8.0+ (ou MariaDB compativel) e Apache com mod_rewrite."
  - q: "Qual e a forma mais rapida de instalar o ChurchCRM?"
    a: "Siga o guia de instalacao em [/pt/install.html](/pt/install.html). Se o seu provedor tiver Softaculous, normalmente e o caminho mais rapido."
  - q: "Como faço login em uma instalacao nova?"
    a: "Uma instalacao nova cria uma conta admin com usuario `admin` e senha `changeme`. Altere a senha imediatamente apos o primeiro acesso."
  - q: "Vejo \"Too Many Redirects\" ou erros de API. O que verificar?"
    a: "Primeiro verifique se o Apache mod_rewrite esta habilitado e se as regras de reescrita estao corretas."
  - q: "Como resolver Erro Interno do Servidor (500)?"
    a: "Verifique permissoes de arquivos e logs do servidor. Guia oficial: https://docs.churchcrm.io/administration/500-error"
  - q: "Como habilitar depuracao e logs?"
    a: "Ative os logs da aplicacao nas Configuracoes do Sistema e aumente o nivel de erro do PHP durante o diagnostico."
  - q: "Como adicionar logotipo ou papel timbrado com seguranca?"
    a: "Envie o arquivo para o diretorio Images e configure esse caminho nas configuracoes de relatorios. Evite substituir arquivos padrao para nao perder customizacoes em atualizacoes."
  - q: "Onde pedir ajuda ou reportar problemas?"
    a: "Use GitHub Discussions para perguntas e GitHub Issues para bugs confirmados: https://github.com/ChurchCRM/CRM/discussions e https://github.com/ChurchCRM/CRM/issues"
---

Respostas rapidas para as duvidas mais comuns sobre configuracao, operacao e suporte do ChurchCRM.
