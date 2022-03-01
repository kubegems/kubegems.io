---
title: 多租户管理
hide_title: true
sidebar_position: 1
---

## 多租户管理

--- 

在 KubeGems中，资源（例如集群）可以在租户之间共享。管理员或运维人员掌握了平台内不同的用户角色的权限设置。普通用户在环境空间对各种计算资源进行操作。基础设施层上的计算资源由KubeGems集中管理和分配，由于KubeGems完全隔离了租户，因此用户不必担心计算资源出现相互影响的场景。

- **角色认证：** 支持基于角色的细粒度身份验证

- **多认证渠道：** 支持与`LDAP`、`AD` 协议的中央身份验证系统兼容，同时也支持OAuth/SSO协议系统，以实现租户身份的统一身份验证

- **授权管理：** 权限管理分别作用于三个空间：`租户(空间),项目(空间),环境(空间)`

- **安全隔离：** 支持基于`Calico`，`KubeOVN`模式下的网络策略管理，在平台内部为租户在基于`租户，项目，环境`三个维度下实现了网络隔离的策略分发

### CRD

KubeGems通过自定义`CRD（Custom Resource Definitions）`的方式，将租户抽象为4个资源进行统一管理，它们分别是：

- Tenant （租户）

- Enviroments （环境）

- TenantResourceQuotas （资源）

- TenantGateways （网关）

- TenantNetworkPolicys （网络策略）

<img src="/img/docs/tenantCrds.jpg" width="80%" alt="CRDs" align="center" />

KubeGems的租户控制主要在`Tenant`和`Enviroments`两个CRD中实现管理，里面分别定义了租户以及环境（包含项目）等信息。

更多信息请阅读 [租户管理](/docs/tasks/platform/tenant)

### 平台术语

|术语|解释|
|--- | --- |
| 用户（User）  | 云平台上一个可登录的用户，用户的权限可以是平台管理员租户或者普通用户，用户的角色可以由各级管理员进行控制。| 
| 应用（Application）| 部署在KubeGmes的一个服务，它可以是一个进程或进程组，通常它等同于Pod。应用是云平台上最小的部署单元 | 
| 环境（Enviroments）| KubeGems应用部署的在Kubernets上一个命名空间，它与Namespaces是对等关系 |
| 项目（Project）| 多个环境组成的一个抽象集合，项目下的环境可以分布在多个Kubernets集群，也可以分布在一个Kubernetes集群内 | 
| 集群（Cluster）| 一个Kubernetes集群 | 
| 租户（Tenant）| KubeGems上服务客户的主体单位，用户的计算资源运行在租户空间内，它与平台内的其他租户共享集群资源 | 

下图表述了KubeGems平台中的空间与Kubernetes集群之间的逻辑关系：

<img src="/img/docs/mutil-tenant-arch.jpg" width="80%" alt="KubeGems逻辑关系" align="center" />

### 网络隔离

KubeGems定义了租户级别的CRD对象`TenantNetworkPolicys`，此对象**定义的网络隔离范围和网络隔离的策略**，KubeGems可以控制集群内`NetworkPolicy`，为KubeGems提供的租户、项目和环境级别的网络隔离服务。

:::caution 注意
KubeGems 2.0.x版本不支持Pod级别的网络隔离策略。
:::

<img src="/img/docs/tnetpol.jpg" alt="TenantNetworkPlicys" align="center" />

### 附录 

---

#### 权限说明

|角色|类别|说明|
| --- | --- | --- |
| 系统管理员|	系统|	可以操作系统所有的资源，用户，租户|
| 系统成员	|系统	|没有任何系统级别的权限|
| 租户管理员|	租户	|可以操作租户下所有资源|
| 租户成员|	租户	|只能看到自己参与的项目|
| 项目管理员|	项目|	可以操作项目下的所有资源|
| 项目测试	|项目	|仅可以操作测试属性的环境|
| 项目研发	|项目	|仅可以操作研发属性的环境|
| 项目运维	|项目	|可以操作所有环境|
| 环境成员	|环境	|只可以查看环境下的资源|
| 环境管理员|	环境|	可以操作环境下的资源|
