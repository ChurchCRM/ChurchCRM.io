---
title: "如何贡献"
description: "了解如何为ChurchCRM做出贡献。提交错误报告、代码补丁、文档改进等。"
date: "2026-03-19"
lastmod: "2026-03-19"
---

我们喜欢听到用户的想法！这正是使该平台伟大多功能的原因。如果您有贡献的想法，请花时间与我们分享！

该项目欢迎并依赖于开源社区中开发人员和用户的贡献。贡献可以通过多种方式进行：

- 通过拉取请求的代码补丁
- 文档改进
- 错误报告和补丁审查

## 首要步骤

1. 从"从上到下"阅读整个页面。
2. 确保您拥有[GitHub帐户](https://github.com/signup/free)。
3. 在[Discord](https://discord.gg/tuWyFzj3Nj)上的开发人员聊天中自我介绍。
4. 查看[开放问题](https://github.com/ChurchCRM/CRM/issues)页面。我们使用[good first issue](https://github.com/ChurchCRM/CRM/labels/good%20first%20issue)标签为初学者提供便利——这些问题应该相对容易修复。
5. 尽情享受！

## 设置开发环境

### 快速入门（推荐）

**🚀 GitHub Codespaces（最简单）：**
1. 点击 "Code" → "Codespaces" → "Create codespace on [branch]"
2. 等待2-3分钟进行自动设置
3. 打开 `http://localhost` 并使用 `admin`/`changeme` 登录

**🐳 VS Code开发容器：**
1. 在VS Code中安装"Dev Containers"扩展
2. 在VS Code中打开此存储库
3. 出现提示时点击"Reopen in Container"
4. 等待设置完成

**🔧 DDEV（本地Docker）：**
1. 安装[DDEV](https://ddev.readthedocs.io/en/stable/users/install/ddev-installation/)和[Docker](https://docs.docker.com/desktop/)
2. 克隆repo并运行：
   ```bash
   git clone https://github.com/ChurchCRM/CRM.git churchcrm
   cd churchcrm
   ddev start
   ddev setup-churchcrm
   ```
3. 打开[https://churchcrm.ddev.site](https://churchcrm.ddev.site)并使用`admin`/`changeme`登录

有关完整的详细信息和故障排除，请查看[DDEV设置](#ddev设置)。

### 手动设置

如果您更喜欢手动安装或自动选项不适用：

1. **安装先决条件：**
   - [Git](https://github.com/git-guides/install-git)或[GitHub Desktop](https://desktop.github.com/)
   - [Node.js版本20+](https://nodejs.org/en/download/)
   - [Docker](https://docs.docker.com/desktop/)
   - **PHP 8.4+**配合扩展：`bcmath`, `curl`, `gd`, `gettext`, `iconv`, `mbstring`, `mysqli`, `pdo_mysql`, `sodium`, `zip`, `zlib`
   - [Composer](https://getcomposer.org/download/)（PHP依赖管理器）

2. **克隆和设置：**
   ```bash
   git clone https://github.com/your-username/ChurchCRM.git
   cd ChurchCRM
   ./scripts/setup-dev-environment.sh
   ```

3. **访问网站：**
   - ChurchCRM: [http://localhost/](http://localhost/) (`admin`/`changeme`)
   - MailHog: [http://localhost:8025](http://localhost:8025) (邮件测试)
   - Adminer: [http://localhost:8088](http://localhost:8088) (数据库管理)

### 故障排除

**常见问题：**
- **端口80冲突：** 停止其他web服务器或更改Docker端口映射
- **Docker构建失败：** 确保Docker分配了4GB+内存
- **服务无法启动：** 运行 `npm run docker:dev:logs` 检查日志
- **本地测试失败：** 使用 `npm run docker:test:rebuild` 进行干净的测试环境
- **缺少PHP扩展：** 使用Docker容器——不要在本地构建
- **数据库架构过时：** 运行 `npm run docker:test:restart:db` 刷新

### DDEV设置

[DDEV](https://ddev.readthedocs.io/en/stable/)是一个基于Docker的本地开发环境，使用一个命令即可提供PHP、MariaDB、Node.js、HTTPS和电子邮件测试。

#### 先决条件

- [Docker Desktop](https://docs.docker.com/desktop/)
- [DDEV](https://ddev.readthedocs.io/en/stable/users/install/ddev-installation/) v1.22+

#### 快速入门

```bash
git clone https://github.com/ChurchCRM/CRM.git churchcrm
cd churchcrm
ddev start
ddev setup-churchcrm
ddev launch
```

登录：**admin** / **changeme**

#### 服务URL

| 服务 | URL |
|------|-----|
| ChurchCRM | https://churchcrm.ddev.site |
| Mailpit | https://churchcrm.ddev.site:8025 |
| MySQL | `ddev mysql` |

#### 每日工作流程

```bash
ddev start                        # 启动服务
ddev stop                         # 停止服务
ddev ssh                          # 外壳访问
ddev logs                         # 查看日志
```

#### DDEV故障排除

| 问题 | 解决方案 |
|------|---------|
| `ddev start` 失败 | 确保Docker正在运行：`docker info` |
| Config.php未创建 | 运行 `ddev exec cp /var/www/html/.ddev/Config.ddev.php /var/www/html/src/Include/Config.php` |
| 数据库为空 | 重新导入：`ddev import-db --file=cypress/data/seed.sql` |

完整的DDEV文档：https://ddev.readthedocs.io

## 开发标准

### 用户界面

ChurchCRM为用户界面使用AdminLTE框架。遵循这些指南：

1. 熟悉[AdminLTE](https://adminlte.io/)
2. 保持UI更改与AdminLTE设计原理保持一致
3. 为自定义样式创建模块化、有组织的CSS文件
4. 确保响应式设计适用于所有屏幕大小

### 纤细的MVC架构

对于新的API和页面，请遵循Slim MVC（模型-视图-控制器）架构。

### Cypress测试

使用Cypress进行端到端测试：

```bash
npm run test              # 运行所有测试
npm run test:ui           # 交互式测试
```

测试结构：
- API测试：`cypress/e2e/api/private/[feature]/[endpoint].spec.js`
- UI测试：`cypress/e2e/ui/[feature]/`

## 开发工作流程

1. **分支：**
   ```bash
   git checkout -b feature-name
   ```

2. **代码标准：**
   - 遵循现有的编码标准
   - 遵守`.github/copilot-instructions.md`中的样式指南
   - 使用描述性提交消息

3. **测试：**
   - 使用Cypress为您的更改编写测试
   - 根据需要更新文档

4. **拉取请求过程：**
   ```bash
   git pull origin master
   git rebase master
   git push origin feature-name
   ```

## 编码标准

ChurchCRM维护严格的代码质量标准：

- ✅ **数据库：** Propel ORM强制（无原始SQL）
- ✅ **HTML5：** 仅Bootstrap 4.6.2 CSS
- ✅ **服务：** Service类中的业务逻辑
- ✅ **PHP 8.4+：** 显式可空类型
- ✅ **i18n：** 使用`gettext()`或`i18next.t()`包装UI文本

有关完整的标准，请查看`.github/copilot-instructions.md`

## 行为准则

请在所有互动中遵守[行为准则](CODE_OF_CONDUCT.md)。

感谢您的贡献！
