---
title: 弹性伸缩
hide_title: true
sidebar_position: 3
# description: 本文用于指导用户在KubeGems快速使用，并对Kubernetes相关的资源进行操作
# keywords: [kubegems,KubeGems,kubernetes]
---

## 弹性伸缩

kubegems 弹性扩容基于kubernetes [Horizontal Pod Autoscaler](https://kubernetes.io/zh/docs/tasks/run-application/horizontal-pod-autoscale/),只是将其在界面上简化抽象成表单，基于cpu和内存进行扩缩容;

目前只能针对workloads(Deployment StatefulSet)进行设置

![autoscale](./assets/autoscale.png)

|字段|说明|
|---|---|
|最大cpu使用率|限制pods的CPU平均使用率，超过这个值将触发扩容|
|最大内存使用率|限制pods的内存平均使用率，超过这个值将触发扩容|
|最小副本数|缩容最小副本数下限|
|最大副本数|扩容最大副本数上限|
