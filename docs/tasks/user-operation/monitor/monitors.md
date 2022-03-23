---
title: 监控指标
hide_title: true
sidebar_position: 1
# description: 本文用于指导用户在KubeGems快速使用，并对Kubernetes相关的资源进行操作
# keywords: [kubegems,KubeGems,kubernetes]
---

## 指标采集

Kubegems提供了针对`service`和`workload`的监控指标采集器功能，用户可为自己的应用配置对应的采集器，采集到的指标会汇集在该集群内置的`prometheus`中。

### 创建监控采集器

![](/img/docs/create-metric-target.jpg)

| 字段名       | 释义                                                                                                                                                                                                             |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 名称         | 采集器名                                                                                                                                                                                                         |
| 命名空间     | 采集器所在的命名空间                                                                                                                                                                                             |
| 类型         | 要采集目标的类型，支持四种: `service`, `deployment`, `statefulset`, `daemonset`, 后面三种都算是`workload`                                                                                                        |
| 目标命名空间 | 要采集目标所在的命名空间，通常与命名空间相同                                                                                                                                                                     |
| 目标         | 要采集的目标名                                                                                                                                                                                                   |
| 标签配置     | 要采集目标的标签，通常会根据用户所选目标自动填充，用户也可以修改。默认填充方式根据采集器类型也会有所不同, 标签来自于 [标签来源](#标签来源)                                                                       |
| 端口         | 采集目标的端口名，端口来自于 [端口来源](#端口来源)                                                                                                                                                               |
| 路径         | 在所配置端口上的URL 路径，默认为 `/metrics`                                                                                                                                                                      |
| 采集间隔     | 多久采集一次，例如: `30s`, `1m`                                                                                                                                                                                  |
| 指标标签优先 | 若采集到的标签和 [Kubegems平台relabel的标签](#Kubegems平台relabel的标签) 重名，是否采集到的指标标签优先，更多信息参考: <https://prometheus.io/docs/prometheus/latest/configuration/configuration/#scrape_config> |

#### 标签来源

- `service`: 取metadata.labels字段
- `deployment/statefulset/daemonset`：取spec.template.metadata.labels字段

#### 端口来源

- `service`: spec.ports的所有name
- `deployment/statefulset/daemonset`: spec.template.spec.containers中，所有container的所有ports的name

#### Kubegems平台relabel的标签

在采集到指标时，平台会进行一系列的 _relabel_ 工作，通过relabel会给指标添加额外的标签，如下:
- `service`: job, container, endpoint, instance, namespace, pod, service
- `deployment/statefulset/daemonset`：job, container, endpoint, instance, namespace, pod


### 验证监控采集器

访问该集群的 <http://prometheus.gemcloud-monitoring-system:9090/targets> 验证是否成功采集


## 指标查询

