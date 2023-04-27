---
title: 产品全景
hide_title: true
sidebar_position: 3
description: KubeGems 产品全景图
---

## 产品架构与全景

---

KubeGems 产品整体面上端到端的设计，边缘侧以 K3S 为底座通过 KubeGems Edge 组件的扩展实现与中心集群的控制面通讯。在中心集群侧，KubeGems 向Kubernetes添加了多向扩展能力**(Extention Capabilities和 Third-Party Capabilities)**它们均以Kubernetes API （CRD
）的形式向上层应用提供业务逻辑抽象。无论您的集群是基于裸金属、IaaS、公有云或者边缘IOT设备，KubeGems 都统一在 Kubernetes API 的接口层向上实现了统一的视图和用户交互逻辑。

在面相用户层面上 KuebGems 产品主要包含两大方向，**云原生多云应用管理**和**云原生AI平台***（包含在 KubeGems Prime）*。作为纯后台系统，KubeGems 也对外部提供Rest API接口调用。

以下是KubeGems产品的全景图

![](./assets/arch.jpg)
