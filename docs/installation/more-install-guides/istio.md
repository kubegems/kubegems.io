---
title: 配置Istio
hide_title: true
sidebar_position: 5
description: 本文将介绍用户如何将 KubeGems 与 Istio 服务的集成。
keywords: [kubegems,kubernetes,jaeger,tracing，distributited,operator,istio,servicemesh,mesh,envoy,gateway]
---


## 配置 Istio

---

KubeGems Installer 默认内置了安装了 Istio 控制器，用于管理集群内的 Istio 服务，用户可以在` kubernetes_plugins.istio` 中对 istio 进行个性化配置。

样例：

```yaml
core_plugins:
  details:
    catalog: 服务网格
    description: KubeGems平台服务治理套件.
    version: v1.11.7
  enabled: false
  namespace: istio-system
  operator:
    eastwestgateway:
      enabled: false
    dnsproxy:
      enabled: true
    istio-cni:
      enabled: true
    tracing:
      enabled: true
      param: 50
      address: "jaeger-collector.observability.svc.cluster.local:9411"
    kiali:
      enabled: true
      prometheus_urls: "http://prometheus.gemcloud-monitoring-system.svc.cluster.local:9090"
      trace_urls: "http://jaeger-query.observability.svc.cluster.local:16685/jaeger"
      grafana_urls: "http://grafana-service.gemcloud-monitoring-system.svc.cluster.local:3000"
  status:
    deployment:
    - istiod
```


## 手动部署 Istio

---

### 版本检查

istio 依赖 kubernetes 功能，需要按照当前的 k8s 版本选择适合的 istio 版本。

参考[Support status of Istio releases](https://istio.io/latest/docs/releases/supported-releases/#support-status-of-istio-releases)

### 安装 istioctl

```
curl -L https://istio.io/downloadIstio | sh -
```

:::tip 信息
实际使用的脚本为istio/istio/downloadIstioCandidate.sh

推荐通过 istioctl 安装 istio operator，后续的安装均由 operator CR 完成。
:::

### 安装 istio operator

可以选择安装 istioctl 并使用 istioctl 相关命令来配置 istio 部署，也可以使用在集群中安装 istio operator 的方式来配置 istio 部署。

```
istio operator init
```

对于 docker.io 拉取镜像失败的场景可以指定其他镜像仓库

```
istioctl operator init --hub example.com/istio
```

也可以保持默认，在安装 CR 时也可指定 hub

### 安装 istio

在安装完成 istio-operator 后可以通过 istio-operator CR 来安装 istio。
(推荐)在 istio-system 空间中安装 istio，因其为 istio 默认空间:

```bash
kubectl create ns istio-system
kubectl apply -f - <<EOF
apiVersion: install.istio.io/v1alpha1
kind: IstioOperator
metadata:
  namespace: istio-system
  name: default-istiocontrolplane
spec:
  profile: default
EOF
```

对于访问 docker.io 不方便的情况可以指定其他 OCI 仓库

```yaml
apiVersion: install.istio.io/v1alpha1
kind: IstioOperator
metadata:
  namespace: istio-system
  name: default-istiocontrolplane
spec:
  profile: default
  hub: example.com/istio    # 第三方仓库（可选）
  tag: 1.11.0   #指定tag(可选)，推荐不指定，与operator版本相同。
```

可配置字段参考 [IstioOperatorSpec](https://istio.io/latest/docs/reference/config/istio.operator.v1alpha1/)



### 配置 istio gateway

默认的 istio operator 没有对 istio-gateway 设置开启注入，也就无法记录网关的追踪数据。默认将 gateway 安装在了 istio-system 空间，安全起见，推荐将其移动至独立的空间。
需要更改两个配置：

1. Gateway 安装的目标空间。
2. Gateway 设置注入方式为 gateway 方式(区别于 sidecar 模式)。

参考：

1. 1.11 新增的针对 gateway 的注入方式，不再使用 sidecar。[gateway-injection](https://istio.io/latest/news/releases/1.11.x/announcing-1.11/#gateway-injection)
2. [deploying-a-gateway](https://istio.io/latest/docs/setup/additional-setup/gateway/#deploying-a-gateway)

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
  components:
    ingressGateways:
      - name: istio-ingress
        namespace: istio-ingress # gateway namespace
  values:
    gateways:
      istio-ingressgateway:
        injectionTemplate: "gateway" # enable gateway injection
```

:::warning 注意
istio 对 gateway 的注入方式与常规不同，无法使用 sidecar 方式注入 gateway，需要指定 injectionTemplate 为 gateway。
:::

此时再从 jaeger 界面查询即可查询到从 gateway 开始的追踪数据了。

### 开启 istio cni

[install Istio with the Istio CNI plugin](https://istio.io/latest/docs/setup/additional-setup/cni/)

istio cni 有效解决了 istio 往 pod 注入 sidecar 时要求 pod 有 `NET_ADMIN` 能力，用于在 initContainer 阶段来改变 iptables 规则将流量导至 sidecar 的问题。

因为此 Pod 权限，可能让网络存在安全风险或者有其他的隐患，istio cni 在 Pod 生命周期的创建网络阶段就进行了这个更改，在容器运行时就不再需要 `NET_ADMIN` 能力了

```yaml
apiVersion: install.istio.io/v1alpha1
kind: IstioOperator
metadata:
  namespace: istio-system
  name: default-istiocontrolplane
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
  components:
    ingressGateways:
      - name: istio-ingress
        namespace: istio-ingress # gateway namespace
    cni:
      enabled: true # enable cni
  values:
    gateways:
      istio-ingressgateway:
        injectionTemplate: "gateway" # enable gateway injection
```

:::tip 提醒
istio cni 不会与其他 cni 冲突，安装 istio cni 时它也不会替换已存在的 cni 插件，cni 插件是链式执行的。例如在 calico cni 下启用 istio cni 后的 cni 配置类似如下：

```json
{
  "cniVersion": "0.3.1",
  "name": "k8s-pod-network",
  "plugins": [
    {
      "type": "calico"
      ...
    },
    ...
    {
      "kubernetes": {
        "cni_bin_dir": "/opt/cni/bin",
        "exclude_namespaces": ["istio-system", "kube-system"],
        "kubeconfig": "/etc/cni/net.d/ZZZ-istio-cni-kubeconfig"
      },
      "log_level": "info",
      "log_uds_address": "/var/run/istio-cni/log.sock",
      "name": "istio-cni",
      "type": "istio-cni"
    }
  ]
}
```
更多关于 CNi 配置的可参考 [cni-example-configuration](https://github.com/containernetworking/cni/blob/master/SPEC.md#example-configuration)
:::
## 安装 kiali

kiali 是 mesh 的可视化工具，您可以通过 istio addon 方式 [手动安装](https://kiali.io/documentation/latest/quick-start/#_install_via_istio_addons) ，或者采用[ kiali-operator 安装](https://github.com/kiali/kiali-operator)。

```bash
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.11/samples/addons/kiali.yaml
```

kiali 在端口 20001 监听 webui 地址，可以访问其 service.


### 配置 kiali 

如使用了外部 promethus 以及 jaeger 等，需要修改配置才能使 kiali 正常生效。主要涉及如下配置：

```
# configmap kiali
external_services:
  grafana:
    in_cluster_url: http://grafana.grafana:3000
  prometheus:
    url: http://prometheus.monitoring:9090
  tracing:
    in_cluster_url: http://jaeger-query.observability:16685/jaeger
```

### 与 prometheus 集成

kiali 使用了 prometheus 数据来生成 kiali graph，为了能够正确的生成这些图，需要从 prometheus 获取 `envoy sidecar` 的指标。即需要保证 envoy 相关指标被 primetheus 采集到。
[prometheus/#configuration](https://istio.io/latest/docs/ops/integrations/prometheus/#configuration) 提供两种方式实现。
sidecar 在注入的时候存在配置 `meshConfig.enablePrometheusMerge`, 其控制了 sidecar 的注入行为，如果为 true 则会将原 pod 的 prometheus 注解更换为聚合的 prometheus 注解（如下）。

```yaml
kind: Pod
metadata:
  annotations:
    prometheus.io/path: /stats/prometheus
    prometheus.io/port: "15020"
    prometheus.io/scrape: "true"
```

一般来说有几种配置方式：

1. sidecar 会为 pod 增加 prometheus.io/scrape: "true" 注解，这个注解约定为存在该注解的 pod 会被 prometheus 发现并采集。也就能够被 kiali 所使用。

:::tip 提示
如果您使用了 prometheus operator 这可以忽略该方式
:::

2. 如果配置上没有对上述注解响应，即使指定了注解也无法被发现。这是需要主动设置 prometheus 采集规则[customized-scraping-configurations](https://istio.io/latest/docs/ops/integrations/prometheus/#option-2-customized-scraping-configurations)

```yaml
- job_name: "istiod"
  kubernetes_sd_configs:
    - role: endpoints
      namespaces:
        names:
          - istio-system
  relabel_configs:
    - source_labels:
        [
          __meta_kubernetes_service_name,
          __meta_kubernetes_endpoint_port_name,
        ]
      action: keep
      regex: istiod;http-monitoring

- job_name: "envoy-stats"
  metrics_path: /stats/prometheus
  kubernetes_sd_configs:
    - role: pod
  relabel_configs:
    - source_labels: [__meta_kubernetes_pod_container_port_name]
      action: keep
      regex: ".*-envoy-prom"
```

对于使用 `prometheus operator` 的可以将上述配置添加至 [secret/additional-scrape-configs](https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/additional-scrape-config.md) 。

除此之外此外，为加快查询速度，您还可以配置 `RecordRule`,参考 [using-prometheus-for-production-scale-monitoring](https://istio.io/latest/docs/ops/best-practices/observability/#using-prometheus-for-production-scale-monitoring)

## 调优

istio 默认安装下监听所有空间下的 service 以便于网格服务之间都能够互相通信。但在集群 workload 较多的情况下，istio sidecar 中会存在集群所有的服务配置，占用的内存甚至超过了部分业务内存。如果能够将 sidecar 中存储的配置项目缩减则可显著降低内存使用。

istio 提供了 `sidecars.networking.istio.io` 资源可以针对命名空间级别对服务条目进行限制。让该空间下的 envoy 仅能访问所配置的服务。

sidecar 支持通过 ingress/egress 项目和 workloadSelector 选择需要配置的服务。更多参考官方文档： [istio/sidecar](https://istio.io/latest/docs/reference/config/networking/sidecar/)

**以 book-info 为例：**

```yaml
apiVersion: networking.istio.io/v1beta1
kind: Sidecar
metadata:
  name: default
  namespace: istio-demo
spec:
  egress:
    - hosts:
        - "./*"
```

调整前后 envoy 的内存占用对比：

```
$ kubectl -n istio-demo top pod
NAME                             CPU(cores)   MEMORY(bytes)
details-v1-6f6bc76446-4bksd      10m          327Mi
productpage-v1-69d595976-c8qkj   56m          281Mi
ratings-v1-75475c49cd-cbbnn      7m           325Mi
reviews-v1-c5f75b9d4-ngst4       67m          381Mi
reviews-v2-65dffdf654-s7kt4      50m          375Mi
reviews-v3-755bf5cf76-52bxj      9m           457Mi
$ kubectl -n istio-demo top pod --use-protocol-buffers
NAME                             CPU(cores)   MEMORY(bytes)
details-v1-6f6bc76446-vjkrw      8m           60Mi
productpage-v1-69d595976-sk8lc   56m          98Mi
ratings-v1-75475c49cd-bv6q6      10m          50Mi
reviews-v1-c5f75b9d4-2nk52       132m         150Mi
reviews-v2-65dffdf654-mdrbv      39m          189Mi
reviews-v3-755bf5cf76-lk829      140m         192Mi
```

## 常见问题
  
### 1.无法拉取镜像

建议更换镜像源，因默认从`docker.io`拉取；

```
kubectl apply -f - <<EOF
apiVersion: install.istio.io/v1alpha1
kind: IstioOperator
metadata:
  namespace: istio-system
  name: default-istiocontrolplane
spec:
  profile: default
  hub: gcr.io/istio
  tag: 1.11.0
EOF
```

因当前集群为 1.18 ，ingress版本尚未支持 v1，目前为 v1beta1;可选择降低 operator 版本，选择则 1.22.0 版本。
### 2.无法访问 jaeger.observability:9411
istio 使用 zipkin 协议进行 tracing 数据发送，jaeger 支持该协议，但是默认 jaeger 配置未开启该功端口。参见[collectors](https://www.jaegertracing.io/docs/1.25/deployment/#collectors)

jaeger 将在相同的端口支持 zipkin 协议，参见[backwards-compatibility-with-zipkin](https://github.com/jaegertracing/jaeger#backwards-compatibility-with-zipkin)。
### 3.istio gateway 没有追踪数据发送
 istio gateway 默认不发送追踪数据，需要为其配置 sidecar。并建议不要将其放置在 istio-system 空间
