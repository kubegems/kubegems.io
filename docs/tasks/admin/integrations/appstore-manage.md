---
title: 设置三方应用商店
hide_title: true
sidebar_position: 5
# description: 本文用于指导用户在KubeGems快速使用，并对Kubernetes相关的资源进行操作
# keywords: [kubegems,KubeGems,kubernetes]
---

## 设置三方应用商店

---
## 概述

**Helm** 是 kubernetes 生态系统中的一个软件包管理工具，类似 ubuntu 的 apt , centos 的 yum 或 python 的 pip 一样，Helm 专门负责管理 kubernetes 中的应用资源；使用 helm 可以对kubernetes 应用进行统一打包、分发、安装、升级以及回退等操作。Helm 利用 `Chart` 来封装 kubernetes 原生应用程序的一些列 yaml 文件，可以在部署应用的时候自定义应用程序的一些Metadata，以便于应用程序的分发。

通常业务都会依赖很多常用的中间价，例如 MySQL 、Redis 等等； KubeGems 默认提供了一个内置的应用商店，里面已经内置了一部分的常用中间价。同时 KubeGems 也允许系统管理员添加第三方的应用商店，当 `Helm Chart Repository` 在第一次添加之后，KubeGems 会立即将第三方仓库的 Charts 镜像到内置的仓库中，之后每天会定时同步一次。

:::tip
应用商店的本质是基于 Helm Chart Repositsry， 只要是兼容 Helm Chart Index 的服务，都可以作为第三方应用商店被添加到 KubeGems 中。
:::

## 配置 Charts 仓库

:::important
KubeGems 不提供扫描第三方应用商店的安全性，作为系统管理员需要谨慎添加第三方仓库，避免引入安全问题；
:::

- 进入【平台设置】，点击左上卡片【平台管理】后选择【集成】，进入 【应用商店仓库】 页面。

![添加界面](/img/docs/tasks-platform-appstore-create.png)


配置说明

|字段|说明|备注|
| ---| ---| ---|
| 名称 | Helm Charts 仓库名称 | 必填项，需全局唯一 |
| URL |Helm Charts 地址| 必填项，默认为 https |

## 手动同步

- 选择需同步的 Charts 仓库，点击最右侧按钮，点击 “同步”后进入 Charts 同步流程

![](./assets/admin-charts-mirror.jpg)
