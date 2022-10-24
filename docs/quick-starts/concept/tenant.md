---
title: 多租户与成员管理
hide_title: true
sidebar_position: 1
description: KubeGems 多租户管理
keywords: [kubegems, KubeGems, kubernetes, tenance]
---

## 多租户与成员管理

---

|术语|解释|
| :--- | :--- |
| 用户（User）  | KubeGems 上一个可登录的用户，用户的权限可以是平台管理员租户或者普通用户，用户的角色可以由各级管理员进行控制。| 
| 应用（Application）| 部署在 KubeGmes 的一个应用，它可以是一个进程或进程组，通常它等同于Pods。应用是 KubeGems 上最小的部署单元 | 
| 环境（Enviroments）| KubeGems 应用部署的在 Kubernets 上一个命名空间，它等同于 Namespaces |
| 项目（Project）| KubeGems 内多个环境组成的一个抽象集合，项目下的环境可以分布在多个Kubernets集群，也可以分布在一个Kubernetes集群内 | 
| 集群（Cluster）| 一个Kubernetes集群 | 
| 租户（Tenant）| KubeGems 上服务用户的主体单位，用户的计算资源运行在租户空间内，它与平台内的其他租户共享 Kubernetes 资源 | 