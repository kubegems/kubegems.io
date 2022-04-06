---
title: 资源管理
hide_title: true
sidebar_position: 2
# description: 本文用于指导用户在KubeGems快速使用，并对Kubernetes相关的资源进行操作
# keywords: [kubegems,KubeGems,kubernetes]
---

## 资源管理

---
## Kubernetes 中的资源单位 

### CPU 资源单位 

CPU 资源的约束和请求以 “cpu” 为单位。 在 Kubernetes 中，一个 CPU 等于1 个物理 CPU 核 或者 一个虚拟核， 取决于节点是一台物理主机还是运行在某物理主机上的虚拟机。

您也可以表达带小数 CPU 的请求。 当 您定义一个容器，将其 `spec.containers[].resources.requests.cpu` 设置为 0.5 时， 你所请求的 CPU 是你请求 1.0 CPU 时的一半。 对于 CPU 资源单位，数量 表达式 0.1 等价于表达式 100m，可以看作 **“100 millicpu”**。 有些人说成是“一百毫核”，其实说的是同样的事情。

CPU 资源总是设置为资源的绝对数量而非相对数量值。 例如，无论容器运行在单核、双核或者 48-核的机器上，500m CPU 表示的是大约相同的计算能力。

:::tip
Kubernetes 不允许设置精度小于 1m 的 CPU 资源。 因此，当 CPU 单位小于 1 或 1000m 时，使用毫核的形式是有用的； 例如 5m 而不是 0.005。
:::

### 内存资源单位 

memory 的约束和请求以字节为单位。 你可以使用普通的证书，或者带有以下 数量后缀 的定点数字来表示内存：`E、P、T、G、M、k`。 你也可以使用对应的 2 的幂数：`Ei、Pi、Ti、Gi、Mi、Ki`。 例如，以下表达式所代表的是大致相同的值：

128974848、129e6、129M、128974848000m、123Mi

:::caution
请注意后缀的大小写。如果你请求 400m 内存，实际上请求的是 0.4 字节。 如果有人这样设定资源请求或限制，可能他的实际想法是申请 400 兆字节（400Mi） 或者 400M 字节
:::

### 存储资源单位

节点通常还可以具有本地的临时性存储，由本地挂接的可写入设备或者有时也用 RAM 来提供支持。 **“临时（Ephemeral）”**意味着对所存储的数据不提供长期可用性的保证。

**Pods** 通常可以使用临时性本地存储来实现缓冲区、保存日志等功能。 **kubelet** 可以为使用本地临时存储的 Pods 提供这种存储空间，允许后者使用 `emptyDir` 类型的 卷将其挂载到容器中。

:::tip
kubelet 也使用此类存储来保存 节点层面的容器日志， 容器镜像文件、以及运行中容器的可写入层。
:::

## KubeGems 中的资源管理

默认情况下 KubeGems 中的计算资源按照 `1：1` 等分 Kubernetes 资源。

<img
  src={require('./assets/admin-resource.jpg').default}
  align="center"
  width="50%"
/>


不过在大多数情况下，容器受限于 ` spec.container.resource` 的资源控制出现集群资源不足而无法分配的情况，KubeGems 提供了针对集群设计了资源超分概念。

您可以进入【集群详情页】后，点击页面右上角的 “资源超分” 按钮，开始设置集群资源超分比例

<img
  src={require('./assets/admin-resource-oversales.jpg').default}
  align="center"
  width="80%"
/>

:::tip
KubeGems 集群内部默认最大超售比例为 1:20
:::

:::caution
由于KubeGems 还未对 Kubernetes CSI 存储的容量数据做适配，在 1.20 的版本中，您看到的存储均值“临时（Ephemeral）”
:::