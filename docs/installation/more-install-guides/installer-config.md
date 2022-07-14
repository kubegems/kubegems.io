---
title: 配置插件
hide_title: true
sidebar_position: 2
---

## 配置插件

Kubegems 插件由 [bundle-controller](https://github.com/kubegems/bundle-controller) 工程实现，Kubegems内置的插件目前存放于 [kubegems plugins](https://github.com/kubegems/kubegems/tree/main/deploy/plugins)

受支持的插件类型有:
- helm
- template
- kustomize

### helm 插件

你需要指定插件仓库，并将自定义的`helm values`填入`values`字段, eg:
```yaml
apiVersion: plugins.kubegems.io/v1beta1
kind: Plugin
metadata:
  name: grafana
  namespace: kubegems-monitoring
spec:
  kind: helm
  url: https://grafana.github.io/helm-charts
  values:
    adminPassword: demo!@#admin
    datasources:
      datasources.yaml:
        apiVersion: 1
        datasources:
        - access: proxy
          isDefault: true
          name: Prometheus
          type: prometheus
          url: http://kube-prometheus-stack-prometheus.kubegems-monitoring:9090
        - access: proxy
          isDefault: false
          name: Loki
          type: loki
          url: http://loki-headless.kubegems-logging:3100
    image:
      repository: registry.cn-beijing.aliyuncs.com/kubegems/grafana
    ingress:
      enabled: true
      hosts:
      - grafana.kubegems-demo.kubegems.io
      ingressClassName: default-gateway
  version: 6.29.5
```

### template 插件

以`go-template`形式组织，同样可以通过`values`, `valuesFrom`添加自定义字段，eg:
```yaml
apiVersion: plugins.kubegems.io/v1beta1
kind: Plugin
metadata:
  annotations:
    plugins.kubegems.io/appVersion: 3.17.6
    plugins.kubegems.io/category: 可观测性
    plugins.kubegems.io/description: KubeGems平台管理容器日志框架,包含控制器、Loki Stack等服务
    plugins.kubegems.io/health-check: statefulsets.apps/loki-*,deployments.apps/logging-*
    plugins.kubegems.io/install-namespace: kubegems-logging
    plugins.kubegems.io/main-category: core
  name: logging
  namespace: kubegems-local
spec:
  disabled: false
  installNamespace: kubegems-logging
  kind: template
  values: {}
  valuesFrom:
  - kind: ConfigMap
    name: kubegems-global-values
  - kind: ConfigMap
    name: kubegems-monitoring-values
    optional: true
    prefix: monitoring.
```    

### kustomize插件
通过`kustomize`组织插件yaml，需要在`url`处指定kustomize文件地址，eg:
```yaml
apiVersion: plugins.kubegems.io/v1beta1
kind: Plugin
metadata:
  name: external-snapshotter
  namespace: kube-system
spec:
  kind: kustomize
  path: external-snapshotter-5.0.1/client/config/crd
  url: https://github.com/kubernetes-csi/external-snapshotter/archive/refs/tags/v5.0.1.tar.gz
  values: {}
  version: 5.0.1
status:
  creationTimestamp: "2022-06-17T09:05:47Z"
  namespace: kube-system
  phase: Installed
  resources:
  - apiVersion: apiextensions.k8s.io/v1
    kind: CustomResourceDefinition
    name: volumesnapshotclasses.snapshot.storage.k8s.io
  - apiVersion: apiextensions.k8s.io/v1
    kind: CustomResourceDefinition
    name: volumesnapshotcontents.snapshot.storage.k8s.io
  - apiVersion: apiextensions.k8s.io/v1
    kind: CustomResourceDefinition
    name: volumesnapshots.snapshot.storage.k8s.io
  upgradeTimestamp: "2022-06-17T09:05:47Z"
  values: {}
  version: 5.0.1
```  