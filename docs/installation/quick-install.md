---
title: 快速安装
hide_title: true
sidebar_position: 1
---

## 快速安装

---

**KubeGems Installer Operator**是一个通过[Operator SDK](https://sdk.operatorframework.io/)构建的Ansible Kubernetes控制器。通过CRD中的定义的字段对Ansible进行变量传递。Installer Operator的运行需要具备集群管理员的RBAC权限，所以在部署前需要联系您的集群管理员，以保证有足够的授权执行以下操作。

<img src="/img/docs/installer.jpg" height="100%" />

### Installation

1.执行以下命令安装KubeGems Installer控制器

```bash
kubectl apply -n kubegems-installer -f https://src.cloudminds.com/gemscloud/installer-operator/-/raw/master/deploy/centrol.yaml
```

2.执行以下命令验证部署结果

```bash
kubectl get pod -n kubegems-installer

NAME                                           READY   STATUS    RESTARTS   AGE     IP                NODE              NOMINATED NODE   READINESS GATES
kubegems-installer-manager-8649bd7fcb-j286g    2/2     Running   0          15m     192.169.15.92     k8s-master3-123   <none>           <none>
```

### Configuration

```bash
kubectl edit configmap kubegems-config -n kubegems-installer
```

//TODO: Implement
基本配置

### Installer

1.本地创建一个`installer.yaml`文件，并粘贴如下内容


```bash
kubectl apply -f https://src.cloudminds.com/gemscloud/installer-operator/-/raw/master/deploy/centrol.installer.yaml
```

[更多Installer CRD相关信息](/docs/installation/more-install-guides/install-operator-config)

2.观察Installer部署状态

在提交CR后，可是使用以下命令观察installer的日志输出

```bash
kubectl logs -n kubegems-installer  <installer-operator容器> -c manager -f
```

指导出现类似下面日志，则表示初始化完成。

<img src="/img/docs/installer-complete.jpg" width="100%" />

3.运行以下命令进行部署验证

```
kubectl get pod --all-namespaces |grep gems
```
KubeGems部署完成后，会运行如下截图信息的容器

<img src="/img/docs/service-complete.jpg" width="100%" />

1. 访问KubeGems

当部署成功后，您可以在`gemcloud-gateway-system`命名空间下找到KubeGems创建了一个默认的ingress网关，以及暴露为`NodePort`的`Service`。

```bash
kubectl get pod -n gemcloud-gateway-system
NAME                                                         READY   STATUS    RESTARTS   AGE
default-gateway-5bcb8bc59c-2fcq4                             1/1     Running   0          7d7h
nginx-ingress-operator-controller-manager-56bcddd997-kbjqw   2/2     Running   0          7d7h

kubectl get pod -n gemcloud-gateway-system
NAME                                                        TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)                      AGE
default-gateway                                             NodePort    10.102.206.7    <none>        80:32717/TCP,443:30557/TCP   7d7h
nginx-ingress-operator-controller-manager-metrics-service   ClusterIP   10.96.47.121    <none>        8443/TCP                     7d8h
nginx-ingress-operator-metrics                              ClusterIP   10.111.159.25   <none>        9113/TCP                     7d8h
```

Installer Operator会创建一条ingress用户前端的访问，您可以执行命令得到ingress的信息

```bash
kubectl get ingress -n gemcloud-system
NAME             CLASS             HOSTS                     ADDRESS   PORTS     AGE
gems-dashboard   default-gateway   dash.kubegems.com                   80, 443   64m
```

此时，您需要将域名`http://kubegems.cloudminds.com:<NodePort>`解析到默认的ingress网关的IP地址上即可实现访问

:::info 信息
如何自定义KubeGems域名，请参考[Installer Operator配置](/docs/installation/more-install-guides/install-operator-config)
:::

### 其他

| 命名空间 | 用途 |
| --- | --- |
| cert-manager | 证书管理所在空间 |
| gemcloud-system| KubeGems系统服务所在空间|
| gemcloud-monitoring-system| 监控告警服务所在空间|
| gemcloud-logging-system| 日志服务所在空间 |
| gemcloud-gateway-system| 租户网关所在空间 |
| gemcloud-workflow-system | ci/cd引擎所在空间 |
