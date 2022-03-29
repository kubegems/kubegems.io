---
title: 自定义资源
hide_title: true
sidebar_position: 4
# description: 本文用于指导用户在KubeGems快速使用，并对Kubernetes相关的资源进行操作
# keywords: [kubegems,KubeGems,kubernetes]
---

## 自定义资源

`CustomResourceDefinition`是用户拓展k8s api的途径，kubegems本身的租户资源隔离等功能也是基于CustomResourceDefinition

kubegems 没有提供创建CustomResourceDefinition的途径，kubegems 提供了`批量删除CustomResourceDefinition`，查看CustomResourceDefinition对应的CustomResource和创建CustomResource的途径;

1. crd 列表
![crd列表](/img/docs/tasks-cluster-manage-crd-list.png)

2. crd对应cr列表
![crd列表](/img/docs/tasks-cluster-manage-cr-list.png)

3. 创建cr
![crd列表](/img/docs/tasks-cluster-manage-cr-create.png)
