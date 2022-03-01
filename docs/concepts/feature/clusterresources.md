---
title: 集群与服务资源
hide_title: true
sidebar_position: 2
---

## Kubernetes集群部署与资源管理

--- 

### Kubernetes集群安装

KubeGems支持对接多套以Kubernetes为基础架构的云平台，无论您是裸金属部署的Kubernetes，还是由公有云厂家托管的Kubernetes。

<img src="/img/docs/mutil-cluster.jpg" width="100%" />

更多关于Kubernetes安装说明，请参考[Kubernetes安装](/docs/installation/kubernetes-installation/kubeadm)

:::info 信息
KubeGems建议您的生产环境Kubernetes集群至少满足三个主Master的模式。
:::

### 多种网络方案接入

- 支持Calico、Flannel和KubeOvn等开源的网络解决方案

### 多种存储方案接入

- 支持开源存储解决方案，例如`GlusterFS、CephRBD、OpenEBS和Longhorn等存储系统`

- 支持其他商业存储以`CSI`插件方式连接到`KubeGems`平台中的各种块存储服务。

<img src="/img/docs/mutil-storage.jpg" width="80%" align="center" />

### 计算资源管理

`gems-agent`维护了Kubernetes集群资源的使用统计和注册。当Kubernetes集群在KubeGems平台上成功导入，`gems-agent`便会被推送到kubernetes集群内运行。

<img src="/img/docs/cluster-resources.jpg" width="100%" />

KubeGems提供了多维度的集群资源管理配置功能：

- **资源超分：** 支持Kubernetes集群`资源超分`规划，更好的提高集群资源使用率，降低IT成本

- **资源管理：** 支持对租户空间内的资源进行扩容、使用监控等管理

- **细粒度资源控制：** 基于`ResouceQuota`和`LimitRange`对用户环境空间内各应用进行细粒度资源的控制

- **资源智能分析：** KubeGems根据用户过去的时间周期，在后台离线为用户资源进行资源使用率分析，并指导用户进行调整

- **灵活分配：** 租户可以在KubeGems内提交资源工单，并在平台内部扭转资源工单的审批和资源分配

### 附录

---

#### 计算资源设计

租户资源管理由KubeGems的CRD管理，在Kubernetes的原生资源对象`ResouceQuota`和`LimitRange`之上抽象了一个`TenantResourceQuotas`来对集群内的租户资源进行控制。

<img src="/img/docs/tenantresources.jpg" width="100%" />

在Kubernetes命名空间内部，用户部署应用的资源的策略和使用统计与原生方式一致，您可以在KubeGems平台的环境空间中设置所需资源的配额。如果您所在租户在当前集群没有足够的资源时，您需要联系您的租户管理员，进行集群资源的申请。`集群租户资源（TenantResourceQuotas）`的操作会由KubeGems下发到Kubernetes集群，并由`gems-controller-manager`服务进行资源校验和资源行为控制。
