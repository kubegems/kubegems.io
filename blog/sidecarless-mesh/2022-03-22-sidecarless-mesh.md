---
slug: sidecarless-mesh
title: sidecarless-mesh方案可行性验证
authors: [zhanghe]
tags: [ebpf, cilium, sidecarless]
---

## 传统方案与sidecarless方案对比  

<img src="/img/docs/sidecarless-mesh.webp" width="100%" />

## kind 集群搭建步骤
   安装kind请参考[kind install](https://kind.sigs.k8s.io/docs/user/quick-start/#installing-from-release-binaries),假定`GOPATH=$HOME/go`
# 构建kubegems适配的k8s node-image
  
   - `mkdir $GOPATH/src/k8s.io && cd $GOPATH/src/k8s.io`
   - `git clone https://github.com/kubernetes/kubernets`
   - `git check -b kubegems_test v1.21.1`
   - `kind build node-image`  
   检查是否成功构建镜像  
   `docker images  | grep kindest/node`
# 构建k8s集群
   需要使用的kind配置文件`kind-example-config.yaml`  
```yaml
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
kubeadmConfigPatches:
- |
  apiServer:
    extraArgs:
      v: "4"
  controllerManager:
    extraArgs:
      v: "4"
  scheduler:
    extraArgs:
      v: "4"
  apiVersion: kubelet.config.k8s.io/v1beta1
  kind: KubeletConfiguration
  evictionHard:
    nodefs.available: "0%"
- |
  apiVersion: kubeadm.k8s.io/v1beta2
  kind: InitConfiguration
  nodeRegistration:
    kubeletExtraArgs:
      v: "4"
- |
  apiVersion: kubeadm.k8s.io/v1beta2
  kind: JoinConfiguration
  nodeRegistration:
    kubeletExtraArgs:
      v: "4"
networking:
  disableDefaultCNI: true
  podSubnet: "10.0.0.0/16"
  serviceSubnet: "10.1.0.0/16"
nodes:
- role: control-plane
- role: worker
- role: worker
- role: worker
```  
---
**NOTE**  
   配置项一定要设置`disableDefaultCNI: true`

---  
   创建cluster  
   `kind create cluster --config=kind-example-config.yaml --image=kindest/node:latest`  
# 安装cilium service-mesh镜像
  安装cilium-cli  
```
curl -L --remote-name-all https://github.com/cilium/cilium-cli/releases/latest/download/cilium-linux-amd64.tar.gz{,.sha256sum}
sha256sum --check cilium-linux-amd64.tar.gz.sha256sum
sudo tar xzvfC cilium-linux-amd64.tar.gz /usr/local/bin
rm cilium-linux-amd64.tar.gz{,.sha256sum}
```
---
**NOTE**  
  请保障cilium-cli版本 > v0.10.0  

---  
  使用如下一小段脚本来简化kind上的安装过程,将之命名为`load.sh`
```bash
ciliumMeshImage=("quay.io/cilium/cilium-service-mesh:v1.11.0-beta.1" "quay.io/cilium/operator-generic-service-mesh:v1.11.0-beta.1" "quay.io/cilium/hubble-relay-service-mesh:v1.11.0-beta.1")
for i in ${ciliumMeshImage[@]}
do
  docker pull $i
  kind load docker-image $i
done

```
   执行`./load.sh`  
   执行命令
```bash
   cilium install --version -service-mesh:v1.11.0-beta.1 --config enable-envoy-config=true  --datapath-mode=vxlan  --kube-proxy-replacement=probe 
```
---
**NOTE**  
  选项解释: 
  - `-service-mesh:v1.11.0-beta.1`是完整的版本后缀, cilium-cli(>v0.10.0)会通过正则表达式来匹配,请保障不要出错  
  - `enable-envoy-config=true` 使能对应的k8s CR
  - `--datapath-mode=vxlan` 目前mesh功能还不支持native routing, 必须为tunnel模式,详见issue  
  [L7 traffic examples need tunnelling datapath mode](https://github.com/cilium/cilium-service-mesh-beta/issues/9)
  - `--kube-proxy-replacement=probe` 使能bpf相关feature探针, 根据内核版本对bpf的支持能力设置cilium-agent的配置  

---
  验证安装结果`cilium status`
# 安装kubegems
  详细步骤请参考[kubegems quick start](https://github.com/kubegems/installer-operator#quick-start)  

# 验证步骤
- ingress相关验证 [ingress](https://github.com/cilium/cilium-service-mesh-beta/blob/main/kubernetes-ingress/http.md)  
  kind版本集群的ingress验证需要修改内核启动参数,因为socket-level的BPF程序暂时无法准确判断上下文是否处于host ns,解决方案是启动full kube-proxy replacement,
  这个需要禁止cgroup v1,禁止cgroup v1(ubuntu21.04)命令如下  
```bash
sudo vim /etc/default/grub
+ GRUB_CMDLINE_LINUX="cgroup_no_v1=all"
sudo reboot
```
  详细背景分析参见[issue](https://github.com/cilium/cilium-service-mesh-beta/issues/3) 
- metric相关验证 [Open Telemetry](https://github.com/cilium/cilium-service-mesh-beta/tree/main/custom-envoy-listener)
- l7 traffic [L7-aware Traffic Management](https://github.com/cilium/cilium-service-mesh-beta/tree/main/l7-traffic-management)

## 开发环境搭建工作
  待续
# 遇到的问题以及解决方法
  - 编译器版本和内核版本的选择
    目前我使用的ubuntu21.04,clang-14是有问题的,内核版本较低,但编译器版本较高,推荐ubuntu20.04 LTS + clang-10
    我目前提了一些相关issue,待进一步分析解决  
    [llvm](https://github.com/cilium/cilium/issues/18861)  
    [operator](https://github.com/cilium/cilium-service-mesh-beta/issues/25)  
  - iptable模式的k8s限制  
    cilium实现ingress方案较为特殊,没有和istio-gateway/nginx一样建立对应的真实的endpoint POD,只有一个loadbalancer service,这样
    直接在虚拟机环境上nodeport方式不工作,因为filter表中会有对应的REJECT规则, 参见k8s源代码  
    https://github.com/kubernetes/kubernetes/blob/18df5ad1fdce9d4f7c9c04a9ea4bdcc7a7400a16/pkg/proxy/iptables/proxier.go#L1177-L1253