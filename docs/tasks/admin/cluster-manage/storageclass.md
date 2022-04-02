---
title: 存储类声明
hide_title: true
sidebar_position: 4
# description: 本文用于指导用户在KubeGems快速使用，并对Kubernetes相关的资源进行操作
# keywords: [kubegems,KubeGems,kubernetes]
---

## 存储类声明

:::caution
KubeGems 1.20版本仅支持通过 yaml 的方式提交 storageClass 资源
:::

StorageClass 为管理员提供了描述存储 "类" 的方法。 不同的类型可能会映射到不同的服务质量等级或备份策略，或是由集群管理员制定的任意策略。 Kubernetes 本身并不清楚各种类代表的什么。这个类的概念在其他存储系统中有时被称为 "配置文件"。

### StorageClass 资源

每个 StorageClass 都包含 `provisioner`、`parameters` 和 `reclaimPolicy` 字段， 这些字段会在 StorageClass 需要动态分配 PersistentVolume 时会使用到。

:::tip
当创建 StorageClass 对象时，管理员设置 StorageClass 对象的命名和其他参数，一旦创建了对象就不能再对其更新。
:::

KubeGems 管理员可以为没有申请绑定到特定 StorageClass 的 PVC 指定一个默认的存储类：

```bash
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: standard
provisioner: kubernetes.io/aws-ebs
parameters:
  type: gp3
reclaimPolicy: Retain
allowVolumeExpansion: true
mountOptions:
  - debug
volumeBindingMode: Immediate
```


更多关于 StorageClass 资源定义和存储定义的文档请参考 [Kubernetes/StorageClass](https://kubernetes.io/zh/docs/concepts/storage/storage-classes/)