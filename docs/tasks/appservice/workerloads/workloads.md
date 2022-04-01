---
title: 工作负载
hide_title: true
sidebar_position: 1
# description: 本文用于指导用户在KubeGems快速使用，并对Kubernetes相关的资源进行操作
# keywords: [kubegems,KubeGems,kubernetes]
---

## 工作负载

kubegems 针对k8s原生资源提供了`工作负载`界面，它主要是提供了`Deployment(无状态服务)`、`StatefulSet(有状态服务)`和`DeamonSet(守护进程服务)`的管理功能;

kubegems 列出workloads,并且根据过去一周的使用量提供了资源建议;

<img src={require('./assets/workload-list.png').default} align="center" />

### 资源建议策略

kubegems 目前版本的资源建议策略是基于固定时间的，具体策略为，kubegems统计上周一到周日当前服务下的pods的资源使用情况，如果任一pod的cpu或者内存使用率超过90%，那么认为当前服务的资源使用率极高，尽快扩容或者升级对应资源，如果任一pod的cpu或者内存使用率超过了60%,就认为当前服务资源使用率较高，可以考虑扩容或者升级对应资源，当cpu和内存使用率低于10%, 那么认为当前服务资源使用率较低，可以考虑缩容对应资源.

kubegems 默认配置资源使用率健康区间为 30%-50%, 目标值为40%；例如过去一周的内存使用率为6.7%，内存限制配置的是1Gi，kubegems认为这个内存使用率较低，根据40%的目标，**(1Gi * 6.7%) / 0.4** 得到建议值171Mi;

<img src={require('./assets/resource-advise.png').default} width="25%" align="center" />