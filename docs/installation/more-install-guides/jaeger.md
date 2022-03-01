---
title: 配置Jaeger
hide_title: true
sidebar_position: 6
description: 本文将介绍用户如何将 KubeGems 与 Jaeger 服务的集成。
keywords: [kubegems,kubernetes,jaeger,tracing，distributited,operator]
---


## 配置 Jaeger

---

KubeGems Installer 默认内置了安装了 Jaeger 控制器，用于管理集群内的 Jaeger 服务，用户可以在` kubernetes_plugins.jaeger` 中对 jaeger 进行个性化配置。

样例：

```yaml
core_plugins:
  jaeger:
    details:
      catalog: 服务网格
      description: 遵循OpenTracing标准的一套应用分布式链路追踪平台.
      status: disable
      version: v1.25.0
    operator:
      sampling:
        # jaeger sampling type
        type: probabilistic
        # jaeger sampling
        param: 0.5
      elasticsearch:
        enabled: true
        persistent:
          size: 100Gi
        # If you need to interface to an external ElasticSearch service, disealed ElasticSearch and configured the external_urls fielda.
        # external_urls: "http://172.16.0.1:9200"
    enabled: true
    namespace: observability
    status:
      deployment:
      - jaeger-collector
      - jaeger-query
```

### 外部 ElasitcSearch

Jaeger 如需对接外部 ElasticSearch 的场景下，需将`jaeger.operator.elasticsearch`设置为禁用，并将外部地址设置到 `external_urls`即可。

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

<br />

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

:::info 信息
1.25 版本的 jaeger 默认未开启 zipkin 端口，虽然其设置了环境变量 "COLLECTOR_ZIPKIN_HTTP_PORT" 但似乎没有生效。所以需要手动设置 options: {"collector.zipkin.host-port":"9411"}，以便于 istio 使用。
:::

1.25 版本中升级了其 ingress 的版本为 network.k8s.io/v1 ,最低要求版本为 Kubernetes 1.19。 1.18 版本下需要修改 operator 源码。

:::info 信息
为了在 1.18 上正常使用 1.25版本，我们对 operator 做了改动，使其支持 v1beta1 ingress: https://src.cloudminds.com/gemscloud/jaeger-operator.git 。并生成了新镜像: harbor.cloudminds.com/jaegertracing/jaeger-operator:1.25.0-ingressv1beta1
:::

### 与 Istio 集成

istio 可以与 jaeger 集成，将服务网格内的 tracing 数据发送至 jaeger 服务。与 jaeger 集成就是让每个服务网格内的 sidecar(envoy) 被配置为开启追踪并发送追踪数据至 jaeger。

官方配置参见 ： [Configurability](https://istio.io/latest/docs/tasks/observability/distributed-tracing/configurability/#customizing-trace-sampling)

主要有两个配置：

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

:::warning 注意
这里使用的是 zipkin 协议，由于历史原因 istio 使用 zipkin 协议发送追踪数据，jaeger 也支持 zipkin.<br />
[backwards-compatibility-with-zipkin](https://github.com/jaegertracing/jaeger/tree/v1.24.0#backwards-compatibility-with-zipkin)
虽然 jaeger 宣称后端适配 zipkin 协议，但在实际使用中依旧失败，继续使用 7411 端口。
:::
