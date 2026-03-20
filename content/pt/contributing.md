---
title: "Como Contribuir"
description: "Aprenda como contribuir para o ChurchCRM. Envie relatórios de bugs, patches de código, melhorias de documentação e mais."
date: "2026-03-19"
lastmod: "2026-03-19"
---

Adoramos ouvir ideias de nossos usuários! É isso que torna esta plataforma tão ótima e versátil. Se você tem uma ideia para contribuir, por favor, leve um momento para compartilhá-la conosco!

O projeto acolhe e depende de contribuições de desenvolvedores e usuários da comunidade de código aberto. As contribuições podem ser feitas de várias maneiras:

- Patches de código por meio de requisições de pull
- Melhorias de documentação
- Relatórios de bugs e revisões de patches

## Primeiros Passos

1. Leia toda esta página "de cima para baixo".
2. Certifique-se de ter uma [conta GitHub](https://github.com/signup/free).
3. Apresente-se no chat de desenvolvedores em [Discord](https://discord.gg/tuWyFzj3Nj).
4. Veja a página [Problemas Abertos](https://github.com/ChurchCRM/CRM/issues). Tornamos fácil para iniciantes com o rótulo [good first issue](https://github.com/ChurchCRM/CRM/labels/good%20first%20issue) — esses são problemas que devem ser relativamente fáceis de corrigir.
5. Divirta-se!

## Configuração do Ambiente de Desenvolvimento

### Início Rápido (Recomendado)

**🚀 GitHub Codespaces (Mais Fácil):**
1. Clique em "Code" → "Codespaces" → "Create codespace on [branch]"
2. Aguarde 2-3 minutos para a configuração automática
3. Abra `http://localhost` e faça login com `admin`/`changeme`

**🐳 Contêineres de Desenvolvimento VS Code:**
1. Instale a extensão "Dev Containers" no VS Code
2. Abra este repositório no VS Code
3. Clique em "Reopen in Container" quando solicitado
4. Aguarde a conclusão da configuração

**🔧 DDEV (Docker Local):**
1. Instale [DDEV](https://ddev.readthedocs.io/en/stable/users/install/ddev-installation/) e [Docker](https://docs.docker.com/desktop/)
2. Clone o repositório e execute:
   ```bash
   git clone https://github.com/ChurchCRM/CRM.git churchcrm
   cd churchcrm
   ddev start
   ddev setup-churchcrm
   ```
3. Abra [https://churchcrm.ddev.site](https://churchcrm.ddev.site) e faça login com `admin`/`changeme`

Veja [Configuração DDEV](#configuração-ddev) abaixo para detalhes completos e resolução de problemas.

### Configuração Manual

Se preferir instalar manualmente ou as opções automáticas não funcionarem:

1. **Instalar Pré-requisitos:**
   - [Git](https://github.com/git-guides/install-git) (ou [GitHub Desktop](https://desktop.github.com/))
   - [Node.js versão 20+](https://nodejs.org/en/download/)
   - [Docker](https://docs.docker.com/desktop/)
   - **PHP 8.4+** com extensões: `bcmath`, `curl`, `gd`, `gettext`, `iconv`, `mbstring`, `mysqli`, `pdo_mysql`, `sodium`, `zip`, `zlib`
   - [Composer](https://getcomposer.org/download/) (gerenciador de dependências PHP)

2. **Clonar e Configurar:**
   ```bash
   git clone https://github.com/seu-usuario/ChurchCRM.git
   cd ChurchCRM
   ./scripts/setup-dev-environment.sh
   ```

3. **Acessar o Site:**
   - ChurchCRM: [http://localhost/](http://localhost/) (`admin`/`changeme`)
   - MailHog: [http://localhost:8025](http://localhost:8025) (teste de email)
   - Adminer: [http://localhost:8088](http://localhost:8088) (admin de banco de dados)

### Resolução de Problemas

**Problemas Comuns:**
- **Conflitos de porta 80:** Pare outros servidores web ou mude o mapeamento de portas Docker
- **Falha na compilação do Docker:** Certifique-se de que Docker tenha 4GB+ de memória alocada
- **Serviços não iniciando:** Execute `npm run docker:dev:logs` para verificar logs
- **Testes falhando localmente:** Use `npm run docker:test:rebuild` para um ambiente de testes limpo
- **Extensões PHP faltando:** Use contêineres Docker - não compile localmente
- **Esquema de banco de dados desatualizado:** Execute `npm run docker:test:restart:db` para atualizar

### Configuração DDEV

[DDEV](https://ddev.readthedocs.io/en/stable/) é um ambiente de desenvolvimento local baseado em Docker que fornece PHP, MariaDB, Node.js, HTTPS e teste de email com um único comando.

#### Pré-requisitos

- [Docker Desktop](https://docs.docker.com/desktop/)
- [DDEV](https://ddev.readthedocs.io/en/stable/users/install/ddev-installation/) v1.22+

#### Início Rápido

```bash
git clone https://github.com/ChurchCRM/CRM.git churchcrm
cd churchcrm
ddev start
ddev setup-churchcrm
ddev launch
```

Login: **admin** / **changeme**

#### URLs de Serviços

| Serviço | URL |
|---------|-----|
| ChurchCRM | https://churchcrm.ddev.site |
| Mailpit | https://churchcrm.ddev.site:8025 |
| MySQL | `ddev mysql` |

#### Fluxo de Trabalho Diário

```bash
ddev start                        # Iniciar serviços
ddev stop                         # Parar serviços
ddev ssh                          # Acesso shell
ddev logs                         # Ver logs
```

#### Resolução de Problemas DDEV

| Problema | Solução |
|----------|---------|
| `ddev start` falha | Certifique-se de que Docker está em execução: `docker info` |
| Config.php não criado | Execute `ddev exec cp /var/www/html/.ddev/Config.ddev.php /var/www/html/src/Include/Config.php` |
| Banco de dados vazio | Re-importe: `ddev import-db --file=cypress/data/seed.sql` |

Documentação completa de DDEV: https://ddev.readthedocs.io

## Padrões de Desenvolvimento

### Interface do Usuário

ChurchCRM usa o framework AdminLTE para a interface do usuário. Siga estas diretrizes:

1. Familiarize-se com [AdminLTE](https://adminlte.io/)
2. Mantenha as alterações de UI alinhadas com os princípios de design do AdminLTE
3. Crie arquivos CSS modulares e organizados para estilos personalizados
4. Garanta design responsivo em todos os tamanhos de tela

### Arquitetura Slim MVC

Para novas APIs e páginas, siga a arquitetura Slim MVC (Model-View-Controller).

### Testes com Cypress

Use Cypress para testes end-to-end:

```bash
npm run test              # Executar todos os testes
npm run test:ui           # Teste interativo
```

Estrutura de testes:
- Testes de API: `cypress/e2e/api/private/[feature]/[endpoint].spec.js`
- Testes de UI: `cypress/e2e/ui/[feature]/`

## Fluxo de Trabalho de Desenvolvimento

1. **Ramificação:**
   ```bash
   git checkout -b nome-feature
   ```

2. **Padrões de Código:**
   - Siga os padrões de codificação existentes
   - Adira ao guia de estilo em `.github/copilot-instructions.md`
   - Use mensagens de commit descritivas

3. **Testes:**
   - Escreva testes para suas alterações usando Cypress
   - Atualize a documentação conforme necessário

4. **Processo de Requisição de Pull:**
   ```bash
   git pull origin master
   git rebase master
   git push origin nome-feature
   ```

## Padrões de Codificação

ChurchCRM mantém padrões rigorosos de qualidade de código:

- ✅ **Banco de Dados:** ORM Propel obrigatório (sem SQL bruto)
- ✅ **HTML5:** Apenas CSS Bootstrap 4.6.2
- ✅ **Serviços:** Lógica comercial em classes Service
- ✅ **PHP 8.4+:** Tipos anuláveis explícitos
- ✅ **i18n:** Envolva o texto da UI com `gettext()` ou `i18next.t()`

Para padrões completos, ver `.github/copilot-instructions.md`

## Código de Conduta

Por favor, adira ao [Código de Conduta](CODE_OF_CONDUCT.md) em todas as interações.

Obrigado pela sua contribuição!
