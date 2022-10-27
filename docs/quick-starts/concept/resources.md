---
title: 计算资源管理
hide_title: true
sidebar_position: 3
description: KubeGems 与 Kubernetes 多集群之间的计算资源管理
keywords: [kubegems, KubeGems, kubernetes, resource]
---

## 计算资源管理

---

计算资源（Resource）是 Kubernetes 内管理应用资源的有效手段。在 KubeGems 中，针对多集群、多租户的场景下在 Kubernetes 原生 resourcequota 上重新设计了一个面向租户资源管理的对象，TenantResourceQuota。利用 Tquota，我们能够更好的解决租户在 Kubernetes 集群中的资源分配问题。

用一句话概括 TenantResources，即它管理了一个租户在一个 Kubernetes 集群下的资源上线。

:::info
租户创建的环境资源（kubernetes resourcequota） 均从 tenantresourcesquota 中申请，上限之和不能超过 tquota 的最大值
:::

![](./assets/tenantresources.jpg)