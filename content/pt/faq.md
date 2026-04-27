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
  - q: "O que mudou no ChurchCRM 7.x?"
    a: "A maior mudança é a reformulação completa da interface em 7.1.0 (Tabler/Bootstrap 5), modo escuro, sistema de plugins, mapas com OpenStreetMap sem chave de API e suporte para 46 idiomas."

  - q: "Preciso de uma chave de API do Google Maps?"
    a: "Não. Desde o ChurchCRM 7.0.0, os mapas usam OpenStreetMap e Leaflet — nenhuma chave de API é necessária."

  - q: "Posso ampliar o ChurchCRM com plugins?"
    a: "Sim. O sistema de plugins existe desde a versão 7.0.0. Na 7.3.0, foi adicionado um registro comunitário para instalar plugins aprovados diretamente pelo painel de administração."

  - q: "Há modo escuro?"
    a: "Sim. Desde a versão 7.1.2, cada utilizador pode ativar o modo escuro individualmente em Minhas Configurações → Tema."

  - q: "Como faço upgrade de 6.x para 7.x?"
    a: "Faça backup do banco de dados, substitua os ficheiros da aplicação pelo novo pacote e acesse o site. Desde 7.0.5, a migração do banco de dados é executada automaticamente na inicialização."


---

Respostas rapidas para as duvidas mais comuns sobre configuracao, operacao e suporte do ChurchCRM.
