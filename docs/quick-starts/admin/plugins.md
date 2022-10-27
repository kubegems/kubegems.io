---
title: 启（禁）用平台插件
hide_title: true
sidebar_position: 3
description: 本文用于指导用户在 KubeGems 中启用或禁止平台插件
keywords: [kubegems, KubeGems, kubernetes, plugins, helm, charts, schema]
---

## 启(禁)用平台插件

---

KubeGems 内置了 “核心组件” 和 “Kubernetes 组件” 两种类型的插件

- **核心组件** 内的插件与 KubeGems 核心服务进行了深度绑定，并影响页面功能加载

:::info
部分核心组件的启（禁）用会影响 kubegems-api 服务的重启。当插件启（禁）用时，插件相关的访问地址会作为全局变量，触发kubegems-api 重新更新，例如 monitoring 插件
:::
- **Kubernetes 组件** 是 KubeGems 与第三方或云原生社区集成的插件，他们并不直接与 KubeGems 核心服务交互。

![](./assets/pluginlist.jpg)


### 前置条件

1. KubeGems 成功安装

2. KubeGems 至少有一个 Kubernetes 集群

3. 需要具备 admin 权限的账号操作

### 启用插件


进入到 【集群管理】的插件列表页面，点击“启用”即可完成插件的部署

  <img
  src={require('./assets/plugin-enable.jpg').default}
  align="center"
  width="60%"
/>

### 插件配置

参见 [KubeGems 插件配置](../../installation/more-install-guides/plugins-config)