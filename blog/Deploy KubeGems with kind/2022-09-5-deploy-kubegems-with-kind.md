---
slug: kubegems-kind
title: 使用 Kind 快速部署体验 KubeGems
authors: [LinkMaq]
tags: [kubernetes,kind,kubegems]
---

> [Kind](https://kind.sigs.k8s.io/)是Kubernetes In Docker的缩写，通过使用 Docker ，它能快速的拉起一套 Kubernetes 服务。因此它在Kubernetes功能测试和二开等领域被广泛使用。

> **KubeGems**是一款以围绕 Kubernetes 通过自研和集成云原生项目而构建的通用性开源 PaaS 云管理平台。经过我们内部近一年的持续迭代，当前 KubeGems 的核心功能已经初步具备多云多租户场景下的统一管理。并通过插件化的方式，在用户界面中灵活控制包括 **监控系统**、**日志系统**、**微服务治理** 等众多插件的启用和关闭。

本文将指导用户使用 Kind 快速部署一个 KubeGems v1.21的版本用于本地测试。

##  安装 Kind 

在 Linux 上

```shell
curl -Lo ./kind https://github.com/kubegems/kind/releases/download/v0.15.0-alpha-kubegems/kind-linux-amd64
chmod +x ./kind
sudo mv ./kind /usr/local/bin/kind
```

在 MacOS 上

```shell
# for Intel Macs
[ $(uname -m) = x86_64 ]&& curl -Lo ./kind https://github.com/kubegems/kind/releases/download/v0.15.0-alpha-kubegems/kind-darwin-amd64
# for M1 / ARM Macs
[ $(uname -m) = arm64 ] && curl -Lo ./kind https://github.com/kubegems/kind/releases/download/v0.15.0-alpha-kubegems/kind-darwin-arm64
chmod +x ./kind
mv ./kind /some-dir-in-your-PATH/kind
```

在 Windows 上

```shell
curl.exe -Lo kind-windows-amd64.exe ./kind https://github.com/kubegems/kind/releases/download/v0.15.0-alpha-kubegems/kind-windows-amd64
Move-Item .\kind-windows-amd64.exe c:\some-dir-in-your-PATH\kind.exe
```

## 创建服务

#### Single Cluster

和创建 Kubernetes 集群一样，使用命令`kind create cluster`就能快速拉起一个 Kubernetes 服务并部署 KubeGems
![image-20220805141017484.png](https://img-blog.csdnimg.cn/img_convert/3657c5205677e4e218c3af9ca78d49a8.png)

由于不需要定制`kindest/node`镜像，所以 KubeGems安装全程需要连接公网下载所需的镜像。在启动完成之前会有许多 Pod 的状态为 `CrashLoopBackOff`，这是由于其依赖的服务（mysql、redis、gitea、argocd 等）还在启动中，这是正常的，请耐心等待。

kubegems 所有服务部署并启动完成后会有如下 pod

![image-20220805141327441.png](https://img-blog.csdnimg.cn/img_convert/fb5260ef6c4a10fa34e4b3ee832c9011.png)

当容器状态全部`Running`后，使用 port-forward 将 KubeGems Dashboard 服务映射到本地

```shell
kubectl port-forward svc/kubegems-dashboard :80 -n kubegems                           

Forwarding from 127.0.0.1:52302 -> 8000
Forwarding from [::1]:52302 -> 8000
```

此时，我们打开浏览器访问 `http://localhost:52302`即可访问 KubeGems，默认用户`admin` 默认密码`demo!@#admin`
> 使用 Kind 生成的 KubeConfig文件导入集群是，注意修改集群 Server 地址为内部地址`http://kubernetes.default:443`

![image-20220805144837887.png](https://img-blog.csdnimg.cn/img_convert/750cf1eb84463f564fd6c1cf00b2bac5.png)

#### Mutil Cluster

如果您需要使用 Kind 部署一个 Kubernetes 集群，那么可以按照如下配置

```yaml
cat ./kind.yaml

kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
- role: control-plane
- role: control-plane
- role: control-plane
- role: worker
- role: worker
- role: worker
```

并通过命令 `kind create cluster --config kind.yaml`

![image-20220805143833694.png](https://img-blog.csdnimg.cn/img_convert/a4cc811c69ba68cfc166887d56c8829b.png)


打开 KubeGems 后台并导入集群后，我们便可以在机器列表中查看集群内主机数量

![image-20220805145229274.png](https://img-blog.csdnimg.cn/img_convert/962f40e48dd8fcacbcf5c5259e6e2e60.png)


#### 指定 Kubernetes版本创建 KubeGems

如果您要在指定的 Kubernetes 版本中创建 KubeGems，只需要kind 在创建过程中指定`kindest/node`镜像版本即可

```shell
kind create cluster  --image kindest/node:v1.23.6
```

#### 启用插件

默认情况下 KubeGems 只做了最小化安装，如果您要启用更多功能，可在管理员后台的`组件管理`中启用相关插件

![image-20220805145350662.png](https://img-blog.csdnimg.cn/img_convert/7305b799c99f47e6dac62bc610572ce8.png)

---