---
title: "常见问题"
description: "关于 ChurchCRM 安装、登录、排错和最佳实践的常见问题。"
date: "2026-03-16"
lastmod: "2026-03-16"
layout: faq
faqs:
  - q: "ChurchCRM 真的是免费且开源吗？"
    a: "是的。ChurchCRM 完全免费并且开源，没有授权费用。"
  - q: "安装前可以在哪里体验 ChurchCRM？"
    a: "请使用本地化演示页面：[/zh/demo.html](/zh/demo.html)。"
  - q: "服务器要求是什么？"
    a: "ChurchCRM 需要 PHP 8.4+、MySQL 8.0+（或兼容的 MariaDB）以及启用 mod_rewrite 的 Apache。"
  - q: "最快的安装方式是什么？"
    a: "请参考安装指南：[/zh/install.html](/zh/install.html)。如果主机提供 Softaculous，通常是最快的方法。"
  - q: "全新安装后如何登录？"
    a: "全新安装会创建管理员账号：用户名 `admin`，密码 `changeme`。首次登录后请立即修改密码。"
  - q: "出现 \"Too Many Redirects\" 或 API 错误时应检查什么？"
    a: "先检查 Apache mod_rewrite 是否启用，以及重写规则是否正确。"
  - q: "如何排查 500 Internal Server Error？"
    a: "先检查文件权限和服务器日志。官方说明：https://docs.churchcrm.io/administration/500-error"
  - q: "如何启用调试和日志？"
    a: "在系统设置中启用应用日志，并在排错时提高 PHP 错误报告级别。"
  - q: "如何安全地添加自定义 Logo 或信头？"
    a: "将文件上传到 Images 目录，并在报表设置中填写该路径。不要直接覆盖系统默认文件，以免升级时丢失。"
  - q: "在哪里寻求帮助或报告问题？"
    a: "提问请使用 GitHub Discussions，确认缺陷请提交 GitHub Issues：https://github.com/ChurchCRM/CRM/discussions 和 https://github.com/ChurchCRM/CRM/issues"
  - q: "ChurchCRM 7.x 有哪些变化？"
    a: "最大的变化是全面重新设计的界面（Tabler/Bootstrap 5），包括深色模式、插件系统、无需 API 密钥的 OpenStreetMap 地图，以及支持 46 种语言。"

  - q: "我需要 Google Maps API 密钥吗？"
    a: "不需要。地图使用 OpenStreetMap 和 Leaflet，无需任何 API 密钥。"

  - q: "我可以通过插件扩展 ChurchCRM 吗？"
    a: "可以。ChurchCRM 包括插件系统和社区插件注册表，可直接从管理面板安装经过审核的插件。"

  - q: "有深色模式吗？"
    a: "有。每位用户可在 我的设置 → 主题 中独立开启深色模式。"

  - q: "如何从 6.x 升级到 7.x？"
    a: "备份数据库，用新版本替换应用文件，然后访问网站。数据库迁移在应用启动时自动执行。"


---

这里汇总了 ChurchCRM 在部署、日常使用与故障排查中的高频问题与答案。
