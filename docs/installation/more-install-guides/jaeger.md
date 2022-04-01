---
title: 配置Jaeger
hide_title: true
sidebar_position: 6
description: 本文将介绍用户如何将 KubeGems 与 Jaeger 服务的集成。
keywords: [kubegems,kubernetes,jaeger,tracing，distributited,operator]
---


## 配置 Jaeger

---

KubeGems Installer 默认内置了 `Jaeger Operator`，用于管理集群内的 Jaeger 服务，用户可以在` core_plugins.jaeger` 中对 jaeger 进行个性化配置。

样例：

```yaml
core_plugins:
  details:
    catalog: 服务网格
    description: KubeGems平台服务追踪套件.
    version: v1.25.0
  enabled: false
  namespace: observability
  operator:
    sampling:
      type: probabilistic
      param: 0.5
    elasticsearch:
      enabled: true
      # Elasticsearch running mode, default is single node. <cluster> mode will be set 3 replicas as a cluster.
      mode: single
      persistent:
        size: 100Gi
        # storageclass: local-path

      # If you need to interface to an external ElasticSearch service, disealed ElasticSearch and configured the external_urls fielda.
      # external_urls: "http://172.16.0.1:9200"
  status:
    deployment:
    - jaeger-collector
    - jaeger-query
```

### 外部 ElasitcSearch

Jaeger 如需对接外部 ElasticSearch 的场景下，需将 `jaeger.operator.elasticsearch.enabled` 设置为`false`，并将外部地址设置到 `external_urls`即可。

样例：

```yaml
core_plugins:
  jaeger:
    operator:
      elasticsearch:
        enabled: false
        # If you need to an external ElasticSearch service, disealed ElasticSearch and configured the external_urls fielda.
        external_urls: "http://172.16.0.1:9200"
```

## 手动部署 Jaeger
---
### Jaeger Operator

```yaml
apiVersion: jaegertracing.io/v1
kind: Jaeger
metadata:
  name: jaeger
  namespace: observability
spec:
  strategy: production
  ingress:
    enabled: false
  agent:
    image: example.com/jaegertracing/jaeger-agent:1.25.0 # optional
  query:
    image: example.com/jaegertracing/jaeger-query:1.25.0 # optional
  collector:
    image: example.com/jaegertracing/jaeger-collector:1.25.0 # optional
    options:
      collector.zipkin.host-port: "9411"
  storage:
    type: elasticsearch
    options:
      es:
        server-urls: http://elasticsearch:9200
```

:::caution 注意
1.25 版本的 Jaeger 默认未开启 zipkin 端口，虽然其设置了环境变量 `COLLECTOR_ZIPKIN_HTTP_PORT` 但似乎没有生效。所以需要手动设置 `options: {"collector.zipkin.host-port":"9411"}`，以便于 istio 使用。
:::

:::info 信息
为了在 kubernetes 1.18 上正常使用 v1.25 版本，KubeGems 对 Jaeger Operator 做了改动，使其支持 v1beta1 ingress.
:::

### 与 Istio 集成

istio 可以与 jaeger 集成，将服务网格内的 tracing 数据发送至 jaeger 服务。与 jaeger 集成就是让每个服务网格内的 sidecar(envoy) 被配置为开启追踪并发送追踪数据至 jaeger。

官方配置参见 ： [Configurability](https://istio.io/latest/docs/tasks/observability/distributed-tracing/configurability/#customizing-trace-sampling)

主要有两个地方的配置：

1. 采样方式
2. tracing 服务器地址

需要在 istio-operator CR 中更新设置上述两个配置：

```yaml
apiVersion: install.istio.io/v1alpha1
kind: IstioOperator
metadata:
  name: istio
  namespace: istio-system
spec:
  profile: default
  hub: example.com/istio
  tag: 1.11.0
  meshConfig:
    enableTracing: true
    defaultConfig:
      tracing:
        sampling: 1.0 # defualt 1%
        zipkin:
          address: jaeger-collector.observability:9411
```

:::caution 注意
由于历史原因 istio 使用 zipkin 协议发送追踪数据。<br />
[backwards-compatibility-with-zipkin](https://github.com/jaegertracing/jaeger/tree/v1.24.0#backwards-compatibility-with-zipkin)

虽然 jaeger 宣称后端适配 zipkin 协议，但在实际使用中依旧失败，继续使用 7411 端口。
:::
