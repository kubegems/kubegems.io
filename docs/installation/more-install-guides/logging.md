---
title: 配置Logging
hide_title: true
sidebar_position: 4
description: 如何将 KubeGems 与外部 Loki 服务集成
keywords: [kubegems,kubernetes,loki]
---

## 配置 Logging

---

KubeGems 内置了 Logging Operator 来处理集群内部容器日志采集、解析和存储的流程。Logging 模块主要涉及到 `FluentBit/d` 和 `Loki` 两个核心服务，您可以在 `core_plugins.logging` 下配置它们。

:::tip 提示
默认情况下 installer 的 cr 中并没有启动 logging 插件，您可以在 KubeGems 后台管理系统中启用此插件
:::

```yaml
core_plugins:
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
```

:::tip 提示
虽然Loki v2.4.1 对查询速度做了大幅提升，但在生产中获得一个更好的体验，还是建议单独部署 Loki 分布式或集群模式。
:::

## 外部 Loki
---
###  禁用 Loki


logging 插件默认内置了一个单机版的 Loki 服务，用户可以在`core_plugins.logging.operator.loki` 中对 Loki 配置。如果您的环境下已存在 Loki 集群，可以在 installer 的 `core_plugins. logging.operator.loki.enabled` 中禁用 loki 服务，并配置外部 loki 的`<IP>:<Port>`连接地址。

```yaml
core_plugins:
  logging:
    operator:
      loki:
        enabled: false
        # If you need to interface to an external loki service, disealed loki and configured the host field
        # Tips: host only support <ipaddress>:<ports>
        external_host: 172.168.0.1:3100
```

:::tip 提示
请求外部 loki 服务是通过 kubernetes 的 external service 实现的，所以这里只能配置 IP 地址。
:::

