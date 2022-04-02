---
title: 自定义资源
hide_title: true
sidebar_position: 4
# description: 本文用于指导用户在KubeGems快速使用，并对Kubernetes相关的资源进行操作
# keywords: [kubegems,KubeGems,kubernetes]
---

## CustomResourceDefinition

`CustomResourceDefinition` 是用户拓展Kubernetes API的一个途径。同理，KubeGems 内部对资源的抽象也是你用 CRD 来实现。

KubeGems 页面没有提供直接创建 `CustomResourceDefinition` 资源的途径，但在页面上提供了对 CRD 资源的`遍历`和`删除`能力，管理员可在 CRD 页面中对其关联的 CR 资源进行管理。

进入【平台设置】，点击导航栏的【自定义资源】的 “CRD” 按钮进入管理

![crd列表](/img/docs/tasks-cluster-manage-crd-list.png)
## CustomResource

1. 在 【CRD 详情页】中，我们选择顶部 “资源列表”，可看到该 CRD 下属的资源。

![crd列表](/img/docs/tasks-cluster-manage-cr-list.png)

2. 点击 “创建” 或者 “编辑” 按钮对 CR 资源进行管理

![crd列表](/img/docs/tasks-cluster-manage-cr-create.png)
