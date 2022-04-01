---
title: 设置应用商店
hide_title: true
sidebar_position: 5
# description: 本文用于指导用户在KubeGems快速使用，并对Kubernetes相关的资源进行操作
# keywords: [kubegems,KubeGems,kubernetes]
---

## 设置应用商店

通常业务都会依赖很多常用的中间价，例如mysql,redis等等； kubegems默认提供了一个内置的应用商店，里面已经内置了一部分的常用中间价，但是并不完全；kubegems允许系统管理员添加第三方的应用商店；

应用商店的本质就是helm chart repo; 是要是兼容helm chart index 的服务，都可以作为第三方应用商店被添加到kubegems中，第三方的helm chart repo会在第一次添加之后，立即同步第三方仓库的chart 到 kubegems内置的chartmusem中，之后每天会定时同步一次；所以，如果出现找不到第三方源库的chart的时候，管理员可以在 管理界面手动出发同步；

:::important
kubegems 不会扫描第三方应用商店的安全性，所以作为系统管理员需要谨慎添加第三方仓库，避免引入安全问题；
:::

![添加界面](/img/docs/tasks-platform-appstore-create.png)

添加第三方应用商店需要提供`名字`和`index地址`, 其中名字在kubegems中，必须唯一
