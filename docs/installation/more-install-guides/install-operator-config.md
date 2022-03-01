---
title: 配置Install Operator
hide_title: true
sidebar_position: 2
---

## Installer Operator配置

---

Installer operator通过`Ansible`向Kubernetes提交`Artifact`，为了保证资源的一致性，Controller会定时循环执行任务。**所以被托管的资源有任何的修改都会被Operator还原**。

<img src="/img/docs/installer_shixu.jpg" width="100%" />

当用户在使用Installer时，主要分为两种场景：

- 中心机房管理侧

此种场景下，由于KubeGems是首次部署在用户的环境，所以除了正常的平台服务外，还需要将平台依赖的组件一起安装。

- 被托管K8S集群
  
在此种场景下，用户已经将KubeGems部署完成后，此后添加的Kubernetes皆为被托管集群，在Dashboard中添加集群，KubeGems会自动将Insatller下发到被托管的集群，并执行部署安装。

本文将从上述两个场景来说明Installer的配置。

### Installer资源类型

完成Installer operator安装后，您可以执行`kubectl api-resources`命令查看集群中是否已经注册Installer的CRD

```yaml
NAME                              SHORTNAMES         APIVERSION                             NAMESPACED   KIND
installers                                           plugins.gems.cloudminds.com/v1alpha1   true         Installer
```

:::info 信息
虽然Installer资源的scope是`namespace`，但是在部署时您需要**将installer的RBAC关联给cluster-admin**，以保证Ansbile在执行Task时有足够的权限提交资源。<br />
您可以通过执行命令`kubectl get clusterrole gems-installer-role -o yaml`和`kubectl get clusterrolebinding gems-installer-role -o yaml`来查看具体的RBAC权限。
:::

#### installerSpec

| 参数名称 | 类型         | 描述                                                |
| ------------------ | ------------ | ------------------------------------------------------------ |
| cluster_name       | 字符串       | Kubernetes集群名称，用于在监控、日志等服务中提供集群的元数据信息 |
| runtime            | 字符串       | 容器运行时，主要在日志采集和三方插件需要与容器进行Socket通信时使用，仅支持`docker/conatinerd`|
| mode               | 字符串       | Installer运行模式，`仅支持server`，在被托管集群时不需要此参数   |
| core_plugins       | *pluginsSpec | KubeGems平台的核心组件                                       |
| kubernetes_plguins | *plguinsSpec | Kubernetes三方组件                                           |

#### pluginsSpec

| 参数名称 | 类型         | 描述                                                |
| --------------------- | ------- | ------------------------------------------------------------ |
| [component]           | Object  | 组件名称                                                     |
| details               | Object  | 组件的描述信息，在KubeGems的组件管理中展示                   |
| details.catalog       | String  | 组件类型，在KubeGems的组件展示中进行分组                     |
| details.description   | String  | 组件描述信息                                                 |
| details.version       | String  | 组件版本，installer在部署时`version`会用做镜像的`tag`信息        |
| enabled               | Boolean | 组件开关，用于控制Installer Operator是否安装组件             |
| skip                  | Boolean | 跳过部署，控制Installer Operator部署时是否跳过，`当skip为true时，enabled失效` |
| manual/operator       | *Spec   | 部署方式，只提供`manual`和`operator`两种方式，用户不需要修改，保持默认即可 |
| namespace             | String  | 组件运行的命名空间，Installer大部分安装都强制使用了默认的命名空间，该参数主要用于KubeGems状态检查时发现组件位置 |
| status                | Object  | 组件状态信息                                                 |
| status.[workloadKind] | Object  | 组件运行时的资源名称，KubeGems会检查组件状态并在集群组件管理界面中展示组件的相关信息 |

#### manualSpec

`manual`类型为installer操作`Manifest`时的变量，支持的参数以实际下载的为准。
#### operatorSpec

`operator`类型为installer操作三方Operator时的控制变量，支持的参数以实际下载的为准。

### Installer 中心侧资源

中心侧在部署Installer operator时，资源需要手动提交，大多数场景下KubeGems已经集成并封装好了组件，不需要用户额外的编辑。如果您需要定制修改插件配置时，请参考如下文件。

```yaml
apiVersion: plugins.gems.cloudminds.com/v1alpha1
kind: Installer
metadata:
  name: kubegems-plugins
  namespace: kubegems-installer
spec:
  # Cluster name, this field is used to label the kubernetes name, and its used by logging and monitoring
  cluster_name: kubegems
  # Container runtime, this field used to record container's logs
  # runtime: docker or containerd
  runtime: docker
  core_plugins:
    alertmanager:
      details:
        catalog: 监控&告警
        description: 告警消息控制器，丰富的告警通知渠道，支持消息去重，降噪，分组，策略路由.
        version: 0.22.2-debian-10-r2
      enabled: true
      namespace: gemcloud-monitoring-system
      operator:
        alertmanager: gemcloud
        image:
          repository: harbor.cloudminds.com/library/alertmanager
        persistent:
          size: 10Gi
          # Specify stralgeclass to use, local-path was default value
          #storageclass: local-path
        replicas: 3
        retention: 146h
      status:
        required: true
        statefulset:
        - alertmanager-gemcloud
      # If you need to interface to an external alertmanager service, disealed alertmanager and configured the host field
      # Tips: host only support <ipaddress>:<ports>
      # host: 172.16.0.1:9093
    argocd:
      details:
        catalog: DevOps
        description: ArgoCD是一个专为Kubernetes而生，遵循GitOps理念的持续部署工具.
        version: v1.7.14
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
        catalog: DevOps
        description: Argo Rollout是一个运行在Kubernetes上的渐进式交付控制器.
        version: v1.1.0
      enabled: true
      namespace: gemcloud-workflow-system
      status:
        deployment:
        - argo-rollouts
        required: true
    basic_gateway:
      details:
        catalog: GemsCloud
        description: GemsCloud多租户网关控制器（基础版）
        version: v1.0
      enabled: true
      namespace: gemcloud-gateway-system
      status:
        deployment:
        - nginx-ingress-operator-controller-manager
        required: true
    cert_manager:
      details:
        catalog: GemsCloud
        description: Kubernetes上的全能证书管理工具.
        version: v1.4.0
      enabled: true
      namespace: cert-manager
      status:
        deployment:
        - cert-manager
        - cert-manager-cainjector
        - cert-manager-webhook
        required: true
    gems_agent:
      details:
        catalog: GemsCloud
        description: GemsCloud的集群客户端服务.
        version: v2.1.2
      enabled: true
      manual:
        image:
          repository: harbor.cloudminds.com/gemscloud/gems-agent
      namespace: gemcloud-system
      status:
        deployment:
        - gems-agent
        required: true
    gems_controller:
      details:
        catalog: GemsCloud
        description: GemsCloud的集群资源控制器.
        version: v2.1.2
      enabled: true
      manual:
        image:
          repository: harbor.cloudminds.com/gemscloud/gems-controller
      namespace: gemcloud-system
      status:
        deployment:
        - gems-controller-manager
        required: true
    gems_service:
      details:
        catalog: GemsCloud
        description: GemsCloud平台核心服务.
        version: v2.1.2
      enabled: true
      manual:
        image:
          repository: harbor.cloudminds.com/gemscloud/gems-service
      namespace: gemcloud-system
      status:
        deployment:
        - gems-service
        required: true
    gems_worker:
      details:
        catalog: GemsCloud
        description: GemsCloud平台离线任务工作服务.
        version: v2.1.2
      enabled: true
      manual:
        image:
          repository: harbor.cloudminds.com/gemscloud/gems-worker
      namespace: gemcloud-system
      status:
        deployment:
        - gems-worker
        required: true
    gems_msgbus:
      details:
        catalog: GemsCloud
        description: GemsCloud平台消息服务.
        version: v2.1.2
      enabled: true
      manual:
        image:
          repository: harbor.cloudminds.com/gemscloud/gems-msgbus
      namespace: gemcloud-system
      status:
        deployment:
        - gems-msgbus
        required: true
    gems_dashboard:
      details:
        catalog: GemsCloud
        description: GemsCloud门户服务
        version: v2.1.2
      enabled: true
      namespace: gemcloud-system
      manual:
        image:
          repository: harbor.cloudminds.com/gemscloud/gems-dashboard
      status:
        deployment:
        - gems-dashboard
        required: true
    grafana:
      details:
        catalog: 监控&告警
        description: Grafana是一个跨平台的开源的度量分析和可视化工具.
        version: 8.0.3
      enabled: true
      namespace: gemcloud-monitoring-system
      operator:
        grafana: gemcloud
        image:
          repository: harbor.cloudminds.com/library/grafana
      status:
        deployment:
        - grafana-deployment
    logging:
      details:
        catalog: 日志中心
        description: 一个基于 kubenretes 的容器日志采集控制器.
        version: v3.15.0
      enabled: true
      operator:
        # Upstream used by logs whitch fluentbit collect, forward to fluentdpstream uspfluentbit and forwarded to flunetd
        enable_upstream: false
        fluentbit:
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
            cpu: "2"
            memory: 4Gi
          persistent:
            size: 100Gi
      namespace: gemcloud-logging-system
      status:
        daemonset:
        - logging-operator
    loki:
      details:
        catalog: 日志中心
        description: 一个水平可扩展，高可用性，多租户的日志聚合系统.
        version: v2.4.1
      enabled: false
      manual:
        persistent:
          size: 500Gi
          #storageclass: local-path
      namespace: gemcloud-logging-system
      status:
      # If you need to interface to an external loki service, disealed loki and configured the host field
      # Tips: host only support <ipaddress>:<ports>
      # host: 172.168.0.1:3100
        statefulset:
        - loki-system
    prometheus:
      details:
        catalog: 监控&告警
        description: Prometheus是一套开源的监控&告警框架.
        version: 2.27.1-debian-10-r16
      enabled: true
      namespace: gemcloud-monitoring-system
      operator:
        apply_rules: true
        image:
          repository: harbor.cloudminds.com/library/prometheus
        resources:
          cpu: 4000m
          memory: 16Gi
        persistent:
          size: 400Gi
          #storageclass: local-path
        prometheus: gemcloud
        replicas: 1
        retention: 30d
      status:
        required: true
        statefulset:
        - prometheus-gemcloud
      # If you need to interface to an external prometheus service, disealed prometheus and configured the host field
      # Tips: host only support <ipaddress>:<ports>
      # host: 172.16.0.1:9090
  kubernetes_plugins:
    eventer:
      details:
        catalog: 日志&事件
        description: Kubernetes集群内事件收集器.
        version: v1.1
      enabled: true
      manual:
        image:
          repository: harbor.cloudminds.com/gemscloud/gems-eventer
      namespace: gemcloud-logging-system
      status:
        deployment:
        - gems-eventer
    kube_state_metrics:
      details:
        catalog: 监控&告警
        description: 监控Kubernetes内各个资源的运行状态.
        version: 1.9.8-debian-10-r0
      enabled: true
      manual:
        image:
          repository: harbor.cloudminds.com/library/kube-state-metrics
      namespace: kube-system
      status:
        deployment:
        - kube-state-metrics
        required: true
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
    metrics_server:
      details:
        catalog: 监控&告警
        description: Kubernetes内CPU和内存实时使用率，提供弹性伸缩容的资源判断.
        version: v0.4.2
      enabled: true
      manual:
        image:
          repository: harbor.cloudminds.com/library/metrics-server
      namespace: kube-system
      status:
        deployment:
        - metrics-server
        required: true
    node_exporter:
      details:
        catalog: 监控&告警
        description: 集群内主机的详细监控客户端.
        version: 1.1.1-debian-10-r0
      enabled: true
      manual:
        image:
          repository: harbor.cloudminds.com/library/node-exporter
      namespace: gemcloud-monitoring-system
      status:
        daemonset:
        - node-exporter
    node_problem_detector:
      details:
        catalog: 日志&事件
        description: 增强版的集群节点异常事件监控组件.
        version: v0.8.7
      enabled: true
      manual:
        image:
          repository: harbor.cloudminds.com/library/node-problem-detector
      namespace: kube-system
      status:
        daemonset:
        - node-problem-detector
```

### Installer 被托管集群

:::info 信息
被托管集群的installer通常有KubeGems平台在添加集群是自动注入，用户无需特别关注
:::
