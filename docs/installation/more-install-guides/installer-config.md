---
title: 配置Installer
hide_title: true
sidebar_position: 2
---

## Installer 资源

---

Installer operator通过`Ansible`向Kubernetes提交`Artifact`，为了保证资源的一致性，Controller会定时循环执行任务。

:::warning
**被托管的资源有任何的修改都会被Operator还原**。
:::

![](./assets/installer_shixu.jpg)

当用户在使用Installer时，主要分为两种场景：

- k8s 中心集群

此种场景下，由于KubeGems是首次部署在 Kubernetes 集群的环境，所以除了正常的平台服务外，还需要将平台依赖的组件一起安装。

- K8S 工作集群
  
在此种场景下，用户在 KubeGems 后台添加 Kubernetes集群，平台自动将Insatller Operator下发到工作集群，并执行部署安装。

本文将主要针对场景一模式下做主要说明。


完成Installer operator安装后，您可以执行`kubectl api-resources`命令查看集群中是否已经注册Installer的CRD

```yaml
NAME                              SHORTNAMES         APIVERSION                             NAMESPACED   KIND
installers                                           plugins.kubegems.io/v1beta1            true         Installer
```

:::tip 说明
虽然 Installer 资源的 scope 是`namespace`，但是在部署时您需要 **将installer的RBAC关联给cluster-admin** ，以保证Ansbile在执行Task时有足够的权限提交资源。<br />

您可以通过执行命令`kubectl get clusterrole gems-installer-role -o yaml`和`kubectl get clusterrolebinding gems-installer-role -o yaml`来查看具体的RBAC权限。
:::

### installerSpec

| 参数名称 | 类型         | 描述                                                |
| ------------------ | ------------ | ------------------------------------------------------------ |
| cluster_name       | 字符串       | Kubernetes集群名称，用于在监控、日志等服务中提供集群的元数据信息 |
| runtime            | 字符串       | 容器运行时，主要在日志采集和三方插件需要与容器进行Socket通信时使用，仅支持`docker/conatinerd`|
| global             | *globalSpec| Installer的一些全局配置  |
| core_plugins       | *pluginsSpec | KubeGems平台的核心组件                                       |
| kubernetes_plguins | *plguinsSpec | Kubernetes三方组件                                           |

### globalSpec

| 参数名称 | 类型         | 描述                                                |
| ------------------ | ------------ | ------------------------------------------------------------ |
| repository      | 字符串       |  全局的镜像仓库日志，installer 在安装时会以此下载镜像 |
| imagepullsecret | 字符串       |  全局的镜像仓库下载秘钥 |
| storageclass    | 字符串       |  全局的存储卷声明，默认是 `local-path` |
### pluginsSpec

| 参数名称 | 类型         | 描述                                                |
| --------------------- | ------- | ------------------------------------------------------------ |
| [component]           | Object  | 组件名称                                                     |
| details               | Object  | 组件的描述信息，在KubeGems的组件管理中展示                   |
| details.catalog       | String  | 组件类型，在KubeGems的组件展示中进行分组                     |
| details.description   | String  | 组件描述信息                                                 |
| details.version       | String  | 组件版本，installer在部署时`version`会用做镜像的`tag`信息        |
| enabled               | Boolean | 组件开关，用于控制Installer Operator是否安装组件             |
| operator       | *operatorSpec   | 部署方式，只提供`manual`和`operator`两种方式，用户不需要修改，保持默认即可 |
| namespace             | String  | 组件运行的命名空间，Installer大部分安装都强制使用了默认的命名空间，该参数主要用于KubeGems状态检查时发现组件位置 |
| status                | Object  | 组件状态信息                                                 |
| status.[workloadKind] | Object  | 组件运行时的资源名称，KubeGems会检查组件状态并在集群组件管理界面中展示组件的相关信息 |
### operatorSpec

`operator`类型为installer操作三方Operator时的控制变量，支持的参数以实际下载的为准。

## Centrol 集群

中心侧在部署Installer operator时，资源需要手动提交，大多数场景下KubeGems已经集成并封装好了组件，不需要用户额外的编辑。如果您需要定制修改插件配置时，请参考如下文件。

```yaml
apiVersion: plugins.kubegems.io/v1beta1
kind: Installer
metadata:
  name: kubegems-plugins
  namespace: kubegems-installer
spec:
  cluster_name: kubegems-centrol
  # Container runtime, this field used to record container's logs
  # runtime: docker or containerd
  runtime: containerd
  
  global:
    # Container repository on kubegems installer running.
    # default vvariable used to "docker.io/kubegems" if not set.
    # available container repositories "docker.io/kubegem" is default, other reigstry incoude <ghcr.io/kubegems> and <registry.cn-beijing.aliyuncs.com/kubegems>.
    # If you are using a private repository, you can configure a policy to replicat image locallly from any of the srouce registry listed above.
    repository: registry.cn-beijing.aliyuncs.com/kubegems
  
    # Secret for container repositories.
    # imagepullsecret: kubegems
  
    # Kubegems uses the built-in local-path-provisioner by defaults.
    # If you need to set a personalised storageclass for the component, please configure it in the field "<component>.operator.persisten.storageclass".
    #storageclass: local-path
  
  core_plugins:
    kubegems_local:
      details:
        catalog: KubeGems
        description: KubeGems本地组件服务,运行在Kubernetes集群内部.
        version: v1.20.0-beta.1
      namespace: gemcloud-system
      enabled: true
      operator:
        cert_manager:
          version: v1.4.0
          namespace: cert-manager
        basic_gateway:
          version: v1.0
          namespace: gemcloud-gateway-system
        gems_agent:
          # replicas: 1
        gems_controller:
          replicas: 1
      status:
        deployment:
        - gems-agent
        - gems-controller-manager
        required: true
  
    kubegems_dashboard:
      details:
        catalog: KubeGems
        description: KubeGems用户界面.
        version: v1.20.0-beta.1
      enabled: true
      namespace: gemcloud-system
      operator:
        replicas: 1
      status:
        deployment:
        - gems-dashboard
  
    kubegems_centrol:
      details:
        catalog: KubeGems
        description: KubeGems集群控制中心组件服务.
        version: v1.20.0-beta.1
      enabled: true
      namespace: gemcloud-system
      operator:
        gems_service:
          replicas: 1
          #debug: false
          persistent:
            #size: 10Gi
            #Required persistent volume which type is RWX.
            #storageclass: local-path
        gems_msgbus:
          replicas: 1
          #debug: false
        gems_worker:
          replicas: 1
          #debug: false
          persistent:
            #size: 10Gi
            #Required persistent volume which type is RWX.
            #storageclass:local-path
      status:
        deployment:
        - gems-service
        - gems-msgbus
        - gems-worker
  
    monitoring:
      details:
        catalog: 监控&告警
        description: KubeGems平台监控&告警控制器,包含Prometheus和AlertManager服务.
        version: v0.50.1-gems
      enabled: true
      namespace: gemcloud-monitoring-system
      operator:
        prometheus: 
          enabled: true
          replicas: 1
          retention: 30d
          apply_rules: true
          image:
            tag: 2.27.1-debian-10-r16
          resources:
            cpu: 4000m
            memory: 8Gi
          persistent:
            size: 50Gi
            # Specify stralgeclass to use, local-path was default value
            # storageclass: local-path
  
          # If you need to interface to an external alertmanager service, disealed alertmanager and configured the host field
          # Tips: host only support <ipaddress>:<ports>
          #external_host: 172.16.0.1:9093
        alertmanager:
          enabled: true
          replicas: 1
          image:
            tag: 0.22.2-debian-10-r2
          retention: 146h
          persistent:
            size: 10Gi
            # Specify stralgeclass to use, local-path was default value
            # storageclass: local-path
  
          # If you need to interface to an external alertmanager service, disealed alertmanager and configured the host field
          # Tips: host only support <ipaddress>:<ports>
          #external_host: 172.16.0.1:9093
      status:
        deployment:
        - prometheus-operator
  
    node_exporter:
      details:
        catalog: 监控&告警
        description: 物理机监控指标暴露器.
        version: v1.1.1-debian-10-r0
      enabled: true
      namespace: gemcloud-monitoring-system
      status:
        daemonset:
        - node-exporter
  
    kube_state_metrics:
      details:
        catalog: 监控&告警
        description: 监控Kubernetes内各个资源的运行状态.
        version: v1.9.8-debian-10-r0
      enabled: true
      namespace: gemcloud-monitoring-system
      status:
        deployment:
        - kube-state-metrics
  
    argocd:
      details:
        catalog: GitOps
        description: KubeGems内部应用管理的GitOps引擎.
        version: v1.8.7
      enabled: true
      namespace: gemcloud-workflow-system
      status:
        deployment:
        - argocd-application-controller
        - argocd-dex-server
        - argocd-redis
        - argocd-repo-server
        - argocd-server
  
    argo_rollouts:
      details:
        catalog: GitOps
        description: KubeGems内部应用策略部署的GitOps引擎,支持蓝绿、金丝雀发布等高级策略.
        version: v1.1.0
      enabled: true
      namespace: gemcloud-workflow-system
      status:
        deployment:
        - argo-rollouts
        required: true
  
    logging:
      details:
        catalog: 日志中心
        description: KubeGems平台管理容器日志框架,包含控制器、Loki Stack等服务.
        version: v3.15.0
      enabled: false
      namespace: gemcloud-logging-system
      operator:
        # Upstream used by logs whitch fluentbit collect, forward to fluentdpstream uspfluentbit and forwarded to flunetd
        enable_upstream: false
        fluentbit:
          # Set the buffer size for HTTP client when reading responses from Kubernetes API server. 
          # The value must be according to the Unit Size specification.
          #buffer: 256k
          resources:
            cpu: "2"
            memory: 1Gi
          # If the container logs are redirected to another path(not /var/log/pods), the path needs to be mounted to fluentbit.
          #volume_mounts:
          #  source: /data
          #  destination: /data
        fluentd:
          # The replicas of flunetd
          replicas: 2
          resources:
            cpu: "1"
            memory: 2Gi
          persistent:
            size: 10Gi
            #storageclass: local-path
        loki:
          enabled: true
          #image:
          #  repository: 
          #  tag:
          #resources:
          #  cpu: "4"
          #  memory: "8Gi"
          persistent:
            size: 100Gi
            #storageclass: local-path
          # If you need to interface to an external loki service, disealed loki and configured the host field
          # Tips: host only support <ipaddress>:<ports>
          #external_host: 172.168.0.1:3100
      status:
        deployment:
        - logging-operator
  
    eventer:
      details:
        catalog: 日志中心
        description: Kubernetes集群事件收集器(需开启 logging 套件).
        version: v1.1
      enabled: true
      namespace: gemcloud-logging-system
      status:
        deployment:
        - gems-eventer
  
    istio:
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
  
    jaeger:
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
  
  kubernetes_plugins:
    local_path:
      details:
        catalog: 存储
        description: Rancher的开源的一个轻量级的卷管理控制器.
        version: v0.0.19
      enabled: true
      # Set kubernetes default StorageClass,if cluster don't have any storageclass.
      default_class: false
      namespace: local-path-storage
      status:
        deployment:
        - local-path-provisioner
        required: true
  
    node_problem_detector:
      details:
        catalog: 日志&事件
        description: Kubernees集群节点事件诊断器.
        version: v0.8.7
      enabled: false
      namespace: kube-system
      status:
        daemonset:
        - node-problem-detector
  
    node_local_dns:
      details:
        catalog: 网络
        description: Kuberntes主机DNS缓存服务.
        version: v1.15.13
      enabled: false
      operator:
        dns_upsteam: 192.168.0.10
      namespace: kube-system
      status:
        daemonset:
        - node-local-dns
  
    nvidia_device_plugin:
      details:
        catalog: 设备管理
        description: Nvidia公司为Kubernetes提供的云上容器独占显卡插件
        version: v1.0.0-beta
      enabled: false
      namespace: kube-system
      status:
        daemonset:
          - nvidia-device-plugin-daemonset
  
    gpu_manager:
      details:
        catalog: 设备管理
        description: 腾讯云(TKE)开源的GPU显卡资源虚拟化分配的Kubernetes插件.
        version: v1.1.2
      enabled: false
      namespace: kube-system
      status:
        daemonset:
        - tke-gpu-manager
```

## Worker 集群

:::info 信息
 Worker 集群的 installer 通常由 KubeGems 平台在添加集群是自动注入，用户无需特别关注
:::
