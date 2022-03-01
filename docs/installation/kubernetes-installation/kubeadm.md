---
title: Kubeadm（集群模式）
hide_title: true
sidebar_position: 1
---

## 使用Kubeadm安装

本页面显示如何通过kubeadm安装一个3 Master节点的高可用Kubernetes集群。有关在执行此安装过程后如何使用 **kubeadm** 创建集群的信息，请参见kubeadm官方文档。

---

### 准备开始

- 一台兼容的 Linux 主机。Kubernetes 项目**为基于Debian和Ubuntu**的Linux发行版以及一些不提供包管理器的发行版提供通用的指令

- 每台机器 8 GB 或更多的 RAM （如果少于这个数字将会影响你应用的运行内存)

- 2 CPU 核或更多

- 集群中的所有机器的网络彼此均能相互连接(公网和内网都可以)

- 节点之中不可以有重复的主机名、MAC 地址或 product_uuid。请参见这里了解更多详细信息。

- 开启机器上的某些端口。

- 禁用交换分区。为了保证 kubelet 正常工作，你**必须**禁用交换分区。

:::info 信息
**操作系统推荐使用**Ubuntu Server 1804**以上版本**
:::

**下载kuberentes安装包**

```bash
wget https://dumps.cloudminds.com/DOCKERFILE/kubelet/kubernetes.1.18.16-with-containerd.tar.gz
tar xf kubernetes.1.18.16-with-containerd.tar.gz 
rm -rf kubernetes.1.18.16-with-containerd.tar.gz
```

**安装kubernetes组件和containerd**

```bash
cd root
apt install -y ./libseccomp2_2.4.3-1ubuntu3.18.04.3_amd64.deb
dpkg -i containerd.io_1.4.4-1_amd64.deb
apt install -y ./*.deb
```

**配置containerd和cri工**具

```bash
cat <<EOF | sudo tee /etc/modules-load.d/containerd.conf
overlay
br_netfilter
EOF

sudo modprobe overlay
sudo modprobe br_netfilter

cat << EOF | sudo tee /etc/sysctl.d/99-kubernetes-cri.conf
net.bridge.bridge-nf-call-iptables  = 1
net.ipv4.ip_forward                 = 1
net.bridge.bridge-nf-call-ip6tables = 1
EOF

# Apply sysctl params without reboot
sudo sysctl --system

cat << EOF | sudo tee /etc/crictl.yaml
runtime-endpoint: unix:///run/containerd/containerd.sock
image-endpoint: unix:///run/containerd/containerd.sock
timeout: 10
debug: false
EOF

sudo mkdir -p /etc/containerd
sudo containerd config default | sudo tee /etc/containerd/config.toml
sed -i 's#root = "/var/lib/containerd"#root = "/data/containerd"#' /etc/containerd/config.tom
systemctl restart containerd
```   

**配置kubelet**

```bash
cat << \EOF | sudo tee /etc/systemd/system/kubelet.service.d/10-kubeadm.conf
# Note: This dropin only works with kubeadm and kubelet v1.11+
[Service]
Environment="KUBELET_KUBECONFIG_ARGS=--pod-manifest-path=/etc/kubernetes/manifests --container-runtime=remote --container-runtime-endpoint=/run/containerd/containerd.sock"
#Environment="KUBELET_CONFIG_ARGS=--config=/var/lib/kubelet/config.yaml"
# This is a file that "kubeadm init" and "kubeadm join" generates at runtime, populating the KUBELET_KUBEADM_ARGS variable dynamically
EnvironmentFile=-/var/lib/kubelet/kubeadm-flags.env
# This is a file that the user can use for overrides of the kubelet args as a last resort. Preferably, the user should use
# the .NodeRegistration.KubeletExtraArgs object in the configuration files instead. KUBELET_EXTRA_ARGS should be sourced from this file.
EnvironmentFile=-/etc/default/kubelet
ExecStart=
ExecStart=/usr/bin/kubelet $KUBELET_KUBECONFIG_ARGS $KUBELET_CONFIG_ARGS $KUBELET_KUBEADM_ARGS $KUBELET_EXTRA_ARGS
EOF

systemctl daemon-reload
systemctl restart kubelet
systemctl status kubelet
```

**导入kuberentes master和etcd镜像**

```bash
mkdir image
cd image
wget https://dumps.cloudminds.com/DOCKERFILE/kubelet/kubernetes-1.18.16-images.tar.gz
tar xf kubernetes-1.18.16-images.tar.gz
rm -rf kubernetes-1.18.16-images.tar.gz
ctr ns create k8s.io
ctr -n k8s.io images import api.18.tar.gz
ctr -n k8s.io images import etcd.tar.gz
ctr -n k8s.io images import manager.18.tar.gz
ctr -n k8s.io images import proxy.18.tar.gz
ctr -n k8s.io images import scheduler.18.tar.gz
ctr -n k8s.io images import coredns.18.tar.gz

wget https://dumps.cloudminds.com/DOCKERFILE/kubelet/pause.tar.gz
ctr -n k8s.io images import pause.tar.gz
```

---

### 部署etcd高可用集群

**master1节点上创建etcd配置文件**

```bash
# HOST地址根据自己的实际服务器地址进行更换
export HOST0=10.36.0.68
export HOST1=10.36.0.69
export HOST2=10.36.0.70
mkdir -p /tmp/${HOST0}/ /tmp/${HOST1}/ /tmp/${HOST2}/
ETCDHOSTS=(${HOST0} ${HOST1} ${HOST2})
NAMES=("infra0" "infra1" "infra2")
for i in "${!ETCDHOSTS[@]}"; do
HOST=${ETCDHOSTS[$i]}
NAME=${NAMES[$i]}
cat << EOF > /tmp/${HOST}/kubeadmcfg.yaml
apiVersion: "kubeadm.k8s.io/v1beta2"
kind: ClusterConfiguration
etcd:
    local:
        serverCertSANs:
        - "${HOST}"
        peerCertSANs:
        - "${HOST}"
        extraArgs:
            initial-cluster: infra0=https://${ETCDHOSTS[0]}:2380,infra1=https://${ETCDHOSTS[1]}:2380,infra2=https://${ETCDHOSTS[2]}:2380
            initial-cluster-state: new
            name: ${NAME}
            listen-peer-urls: https://${HOST}:2380
            listen-client-urls: https://${HOST}:2379
            advertise-client-urls: https://${HOST}:2379
            initial-advertise-peer-urls: https://${HOST}:2380
EOF
done
```

**生成etcd集群的证书**

```bash
kubeadm init phase certs etcd-ca
kubeadm init phase certs etcd-server --config=/tmp/${HOST2}/kubeadmcfg.yaml
kubeadm init phase certs etcd-peer --config=/tmp/${HOST2}/kubeadmcfg.yaml
kubeadm init phase certs etcd-healthcheck-client --config=/tmp/${HOST2}/kubeadmcfg.yaml
kubeadm init phase certs apiserver-etcd-client --config=/tmp/${HOST2}/kubeadmcfg.yaml
cp -R /etc/kubernetes/pki /tmp/${HOST2}/
find /etc/kubernetes/pki -not -name ca.crt -not -name ca.key -type f -delete
kubeadm init phase certs etcd-server --config=/tmp/${HOST1}/kubeadmcfg.yaml
kubeadm init phase certs etcd-peer --config=/tmp/${HOST1}/kubeadmcfg.yaml
kubeadm init phase certs etcd-healthcheck-client --config=/tmp/${HOST1}/kubeadmcfg.yaml
kubeadm init phase certs apiserver-etcd-client --config=/tmp/${HOST1}/kubeadmcfg.yaml
cp -R /etc/kubernetes/pki /tmp/${HOST1}/
find /etc/kubernetes/pki -not -name ca.crt -not -name ca.key -type f -delete
kubeadm init phase certs etcd-server --config=/tmp/${HOST0}/kubeadmcfg.yaml
kubeadm init phase certs etcd-peer --config=/tmp/${HOST0}/kubeadmcfg.yaml
kubeadm init phase certs etcd-healthcheck-client --config=/tmp/${HOST0}/kubeadmcfg.yaml
kubeadm init phase certs apiserver-etcd-client --config=/tmp/${HOST0}/kubeadmcfg.yaml
find /tmp/${HOST2} -name ca.key -type f -delete
find /tmp/${HOST1} -name ca.key -type f -delete
```

**拷贝etcd集群证书**

将目录/tmp/\${HOST1}和/tmp/\${HOST2}下的文件分别拷贝到对应master节点的/etc/kubernetes目录下
保证文件结构如下

```bash
/tmp/${HOST0,1,2}
└── kubeadmcfg.yaml
---
/etc/kubernetes
└── kubeadmcfg.yaml
└── pki
      ├── apiserver-etcd-client.crt
      ├── apiserver-etcd-client.key
      └── etcd
          ├── ca.crt
          ├── ca.key
          ├── healthcheck-client.crt
          ├── healthcheck-client.key
          ├── peer.crt
          ├── peer.key
          ├── server.crt
          └── server.key
```

**创建etcd实例**

- master1节点

```bash
kubeadm init phase etcd local --config=/tmp/${HOST0}/kubeadmcfg.yaml
```

- master2/master3节点

```bash
kubeadm init phase etcd local --config=/etc/kubernetes/kubeadmcfg.yaml
```


**查看etcd集群状态**

```bash
pod_id=`crictl ps |grep etcd | awk '{print $1}'`
crictl exec -it ${pod_id} etcdctl \
--cert /etc/kubernetes/pki/etcd/peer.crt \
--key /etc/kubernetes/pki/etcd/peer.key \
--cacert /etc/kubernetes/pki/etcd/ca.crt \
--endpoints https://10.36.0.68:2379 endpoint health --cluster
```

---

### 部署Master集群

**修改kubelet配置文件**

```bash
cat << \EOF | sudo tee /etc/systemd/system/kubelet.service.d/10-kubeadm.conf
# Note: This dropin only works with kubeadm and kubelet v1.11+
[Service]
Environment="KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=/etc/kubernetes/bootstrap-kubelet.conf --kubeconfig=/etc/kubernetes/kubelet.conf  --pod-manifest-path=/etc/kubernetes/manifests --cgroup-driver=systemd  --container-runtime=remote --container-runtime-endpoint=/run/containerd/containerd.sock"
Environment="KUBELET_CONFIG_ARGS=--config=/var/lib/kubelet/config.yaml"
# This is a file that "kubeadm init" and "kubeadm join" generates at runtime, populating the KUBELET_KUBEADM_ARGS variable dynamically
EnvironmentFile=-/var/lib/kubelet/kubeadm-flags.env
# This is a file that the user can use for overrides of the kubelet args as a last resort. Preferably, the user should use
# the .NodeRegistration.KubeletExtraArgs object in the configuration files instead. KUBELET_EXTRA_ARGS should be sourced from this file.
EnvironmentFile=-/etc/default/kubelet
ExecStart=
ExecStart=/usr/bin/kubelet $KUBELET_KUBECONFIG_ARGS $KUBELET_CONFIG_ARGS $KUBELET_KUBEADM_ARGS $KUBELET_EXTRA_ARGS
EOF

systemctl daemon-reload
systemctl restart kubelet
systemctl status kubelet
```

**生成kubeadm配置**

```bash
cat << EOF | sudo tee /root/kubeadm.conf
apiVersion: kubeadm.k8s.io/v1beta2
bootstrapTokens:
- groups:
  - system:bootstrappers:kubeadm:default-node-token
  token: abcdef.0123456789abcdef
  ttl: 24h0m0s
  usages:
  - signing
  - authentication
kind: InitConfiguration
localAPIEndpoint:
### 必配，选着Kubnernetes api的暴露地址，一般为管理网段，地址根据实际情况修改
  advertiseAddress: 10.36.0.68
  bindPort: 6443
nodeRegistration:
  criSocket: /run/containerd/containerd.sock
### 必配，选着Kubnernetes master的hostname
  name: l-010036000068-k8s.cloudminds.com
  taints:
  - effect: NoSchedule
    key: node-role.kubernetes.io/master

---
apiVersion: kubeadm.k8s.io/v1beta2
kind: ClusterConfiguration
kubernetesVersion: v1.18.16
imageRepository: k8s.gcr.io
clusterName: kubernetes
certificatesDir: /etc/kubernetes/pki
dns:
  type: CoreDNS
etcd:
  external:
    endpoints:
### 必配, 外部etcd集群的连接地址,地址根据实际情况修改
    - https://10.36.0.68:2379
    - https://10.36.0.69:2379
    - https://10.36.0.70:2379
### 必配，保持默认路径
    caFile: "/etc/kubernetes/pki/etcd/ca.crt"
    certFile: "/etc/kubernetes/pki/apiserver-etcd-client.crt"
    keyFile: "/etc/kubernetes/pki/apiserver-etcd-client.key"
networking:
  dnsDomain: cluster.local
  serviceSubnet: 10.96.0.0/12
### 必配，calico后期如果要用bgp协议，需要提前规划
  podSubnet: "172.16.0.0/16"

apiServer:
  # 打开apiserver的审计日志
  extraArgs:
    audit-log-path: /var/log/kube-apiserver.audit.log
    audit-policy-file: /etc/kubernetes/audit.yaml
    audit-log-maxage: "1"
    audit-log-maxsize: "100"
    audit-log-maxbackup: "1"
  extraVolumes:
    - name: audit
      hostPath: /etc/kubernetes/audit.yaml
      mountPath: /etc/kubernetes/audit.yaml
      readOnly: true
      pathType: File
    - name: audit-log
      hostPath: /var/log
      mountPath: /var/log
  timeoutForControlPlane: 4m0s
  certSANs:
### 必配，api服务的证书签名ip和域名,地址根据实际情况修改
  - 127.0.0.1
  - 10.36.0.68
  - 10.36.0.69
  - 10.36.0.70
  - 10.36.13.145
  - 10.36.13.146
  - 10.36.13.147
controllerManager: {}
scheduler: {}

---
apiVersion: kubeproxy.config.k8s.io/v1alpha1
kind: KubeProxyConfiguration

# 开启ipvs模式，可选择iptables
mode: "ipvs"

# nodeport绑定地址,1.1.1.0/24就只绑定在这个网段
nodePortAddresses: null

# nodeport的端口范围
portRange:
configSyncPeriod: 0s

### 必配
# 容器的CIDR网段，用来做snat地址伪装
clusterCIDR: 10.156.0.0/16

# 关闭设置conntrack跟踪表
conntrack:
  maxPerCore: null
  min: null
  tcpCloseWaitTimeout: null
  tcpEstablishedTimeout: null

# 关闭ipvs的设置，以操作系统初始化为主
ipvs:
  excludeCIDRs: null
  minSyncPeriod: 0s
  scheduler: ""
  strictARP: false
  syncPeriod: 0s
  tcpFinTimeout: 0s
  tcpTimeout: 0s
  udpTimeout: 0s

---
apiVersion: kubelet.config.k8s.io/v1beta1
kind: KubeletConfiguration
maxPods: 250
# 此配置保证了 kubelet 能在 swap 开启的情况下启动
failSwapOn: false

# 初始镜像GC的磁盘占比触发
imageGCLowThresholdPercent: 75

# 超过85¥后一直运行镜像GC
imageGCHighThresholdPercent: 85

# kubelet预留资源，根据配置设置
#kubeReserved:
#  "cpu": "500m"
#  "memory": "512Mi"
#  "ephemeral-storage": "1Gi"

# kubelet证书轮转
rotateCertificates: true
featureGates:
  EphemeralContainers: true
EOF
```

```bash
mkdir /etc/kubernetes
cat << EOF | sudo tee /etc/kubernetes/audit.yaml
apiVersion: audit.k8s.io/v1
kind: Policy
omitStages:
  - "ResponseStarted"
rules:
  - level: RequestResponse
EOF
```

**初始化kubernets master1节点**

```bash
swapoff -a
kubeadm  init \
--config=/root/kubeadm.conf \
--ignore-preflight-errors all \
--cri-socket /var/run/containerd/containerd.sock \
--feature-gates EphemeralContainers=true,ServiceAppProtocol=true
```


**拷贝kubectl配置文件**

```bash
mkdir /root/.kube
cp /etc/kubernetes/admin.conf  /root/.kube/config
chown -R root.root/root/.kube/config 

kubeadm token create --ttl 0
```

**master2/master3 节点安装**

- 加入kubernetes集群

```bash
kubeadm join 10.36.0.68:6443 \
--token wi0cmt.0o8xodk3thphulkj \
--discovery-token-ca-cert-hash sha256:ae184f561109c7aecfadaa12a5bf6d871c6a0cced0ff4f77313b4639f0fd8f33 \
--cri-socket /run/containerd/containerd.sock \
--ignore-preflight-errors all
```

:::warning 注意
`token`为kubeadm初始化后提供.<br />
`discovery-token-ca-cert-hash`为kubeadm初始化后提供。
:::

- master1节点打包配置文件

```bash
cd /etc/kubernetes
tar cvzf api.config.tar.gz admin.conf audit.yaml controller-manager.conf scheduler.conf pki/sa.key pki/sa.pub pki/front-proxy-client.crt pki/front-proxy-client.key pki/front-proxy-ca.key pki/front-proxy-ca.crt pki/apiserver-kubelet-client.crt pki/apiserver-kubelet-client.key pki/apiserver.crt pki/apiserver.key pki/ca.key
```

- 将`api.config.tar.gz`拷贝到master2，master3节点

```
mv api.config.tar.gz /etc/kubernetes
tar xf api.config.tar.gz
```

- 创建Kubernetes auth规则

```bash
mkdir /etc/kubernetes
cat << EOF | sudo tee /etc/kubernetes/audit.yaml
apiVersion: audit.k8s.io/v1
kind: Policy
omitStages:
  - "ResponseStarted"
rules:
  - level: RequestResponse
EOF
```

**拷贝api组件manifest文件**

```bash
cat /etc/kubernetes/manifests/kube-apiserver.yaml
cat /etc/kubernetes/manifests/kube-controller-manager.yaml
cat /etc/kubernetes/manifests/kube-scheduler.yaml
```

:::warning 注意
`kube-apiserver.yaml` 文件拷贝到master2和master3上时，需要将文件中的master1节点ip信息换成对应机器上的ip。
:::

---

### 部署Kubelet节点

**容器数据盘**

根据服务器上的硬盘灵活规划数据盘的挂载，通常将sdb设备格式化后挂在到`/data`目录下

```bash
msfs.xfs /dev/sdb
mkdir /data
mount /dev/sdb /data
echo "/dev/sdb    none            xfs   defaults      0       0" >> /etc/fstab
```

:::info 信息
**sdb设备要灵活选择，要保证数据的安全性，如果服务器有多块硬盘的话，至少要做RAID1以上的模式**
:::

**配置nginx，反向代理到kubernets api**

```bash
apt install -y nginx

cat << EOF | sudo tee /etc/nginx/nginx.conf
user root;
worker_processes 2;
worker_cpu_affinity auto;
pid /run/nginx.pid;
load_module  /usr/share/nginx/modules/ngx_stream_module.so;
worker_rlimit_nofile 64512;
worker_shutdown_timeout 10s;
events {
    multi_accept        on;
    worker_connections  16384;
    use                 epoll;
}
stream {
    upstream upstream_balancer {
            least_conn;
            # kubernetes master的api地址
            server 10.36.0.68:6443 max_fails=2 fail_timeout=20s;
            server 10.36.0.69:6443 max_fails=2 fail_timeout=20s;
            server 10.36.0.70:6443 max_fails=2 fail_timeout=20s;
        }
    log_format log_stream [$time_local] $protocol $status $bytes_sent $bytes_received $session_time;
    access_log /var/log/nginx/access.log log_stream ;
    error_log  /var/log/nginx/error.log;
    server {
            listen 127.0.0.1:6443;
            proxy_timeout 1200s;
            proxy_pass upstream_balancer;
        }
}
EOF

nginx -t && nginx -s reload 
```


**下载kubernetes安装包**

```bash
wget https://dumps.cloudminds.com/DOCKERFILE/kubelet/kubernetes.1.18.16-with-containerd.tar.gz
tar xf kubernetes.1.18.16-with-containerd.tar.gz 
rm -rf kubernetes.1.18.16-with-containerd.tar.gz
cd root
```

**安装kubernetes和containerd**

```bash
apt install -y ./libseccomp2_2.4.3-1ubuntu3.18.04.3_amd64.deb
dpkg -i containerd.io_1.4.4-1_amd64.deb
apt install -y --allow-change-held-packages ./*.deb
```

**配置containerd和cri工具**

```bash
cat <<EOF | sudo tee /etc/modules-load.d/containerd.conf
overlay
br_netfilter
EOF

sudo modprobe overlay
sudo modprobe br_netfilter

cat << EOF | sudo tee /etc/sysctl.d/99-kubernetes-cri.conf
net.bridge.bridge-nf-call-iptables  = 1
net.ipv4.ip_forward                 = 1
net.bridge.bridge-nf-call-ip6tables = 1
EOF

# Apply sysctl params without reboot
sudo sysctl --system

cat << EOF | sudo tee /etc/crictl.yaml
runtime-endpoint: unix:///run/containerd/containerd.sock
image-endpoint: unix:///run/containerd/containerd.sock
timeout: 10
debug: false
EOF

sudo mkdir -p /etc/containerd
sudo containerd config default | sudo tee /etc/containerd/config.toml
sed -i 's#root = "/var/lib/containerd"#root = "/data/containerd"#' /etc/containerd/config.toml
systemctl restart containerd
```   

**导入Container镜像**

```bash 
mkdir image
cd image
wget https://dumps.cloudminds.com/DOCKERFILE/kubelet/kubernetes-1.18.16-images.tar.gz
tar xf kubernetes-1.18.16-images.tar.gz
rm -rf kubernetes-1.18.16-images.tar.gz
ctr ns create k8s.io
ctr -n k8s.io images import proxy.18.tar.gz
```

**清除安装文件**

```bash
cd /root && rm -rf root
```

---

**加入kuernetes集群**

```bash
kubeadm join 127.0.0.1:6443 \
--token wi0cmt.0o8xodk3thphulkj \
--discovery-token-ca-cert-hash sha256:ae184f561109c7aecfadaa12a5bf6d871c6a0cced0ff4f77313b4639f0fd8f33 \
--cri-socket /run/containerd/containerd.sock \
--ignore-preflight-errors all
```

:::warning 注意
`token`为kubeadm初始化后提供.<br />
`discovery-token-ca-cert-hash`为kubeadm初始化后提供。
:::

---

### 部署Kubelet节点(GPU)

**容器数据盘**

根据服务器上的硬盘灵活规划数据盘的挂载，通常将sdb设备格式化后挂在到`/data`目录下

```bash
mkfs.xfs /dev/sdb -f
mkdir /data
mount /dev/sdb /data
echo "/dev/sdb    /data xfs   defaults      0       0" >> /etc/fstab
```

:::info 信息
**sdb设备要灵活选择，要保证数据的安全性，如果服务器有多块硬盘的话，至少要做RAID1以上的模式**
:::

**配置nginx，反向代理到kubernets api**

```bash
apt install -y nginx

cat << EOF | sudo tee /etc/nginx/nginx.conf
user root;
worker_processes 2;
worker_cpu_affinity auto;
pid /run/nginx.pid;
load_module  /usr/share/nginx/modules/ngx_stream_module.so;
worker_rlimit_nofile 64512;
worker_shutdown_timeout 10s;
events {
    multi_accept        on;
    worker_connections  16384;
    use                 epoll;
}
stream {
    upstream upstream_balancer {
            least_conn;
            # kubernetes master的api地址
            server 172.16.13.134:6443 max_fails=2 fail_timeout=20s;
            server 172.16.13.135:6443 max_fails=2 fail_timeout=20s;
            server 172.16.13.136:6443 max_fails=2 fail_timeout=20s;
        }
    log_format log_stream [$time_local] $protocol $status $bytes_sent $bytes_received $session_time;
    access_log /var/log/nginx/access.log log_stream ;
    error_log  /var/log/nginx/error.log;
    server {
            listen 127.0.0.1:6443;
            proxy_timeout 1200s;
            proxy_pass upstream_balancer;
        }
}
EOF

nginx -t && nginx -s reload 
```

**下载kubernetes安装包**

```bash
wget https://dumps.cloudminds.com/DOCKERFILE/kubelet/kubernetes.1.18.16-with-containerd.tar.gz
tar xf kubernetes.1.18.16-with-containerd.tar.gz 
rm -rf kubernetes.1.18.16-with-containerd.tar.gz
cd root
```

**安装kubernetes和containerd**

```bash
apt install -y ./libseccomp2_2.4.3-1ubuntu3.18.04.3_amd64.deb
dpkg -i containerd.io_1.4.4-1_amd64.deb
apt install -y ./*.deb
```

**安装contaienrd nvidia runtime**

```bash
mkdir nvidia
wget https://dumps.cloudminds.com/DOCKERFILE/kubelet/containerd-nvidia-1.18.16.tar.gz
tar xf containerd-nvidia-1.18.16.tar.gz
rm -rf containerd-nvidia-1.18.16.tar.gz
apt install -y ./*.deb
```

**配置containerd和cri工具**

```bash
cat <<EOF | sudo tee /etc/modules-load.d/containerd.conf
overlay
br_netfilter
EOF

sudo modprobe overlay
sudo modprobe br_netfilter

cat << EOF | sudo tee /etc/sysctl.d/99-kubernetes-cri.conf
net.bridge.bridge-nf-call-iptables  = 1
net.ipv4.ip_forward                 = 1
net.bridge.bridge-nf-call-ip6tables = 1
EOF

# Apply sysctl params without reboot
sudo sysctl --system

cat << EOF | sudo tee /etc/crictl.yaml
runtime-endpoint: unix:///run/containerd/containerd.sock
image-endpoint: unix:///run/containerd/containerd.sock
timeout: 10
debug: false
EOF

sudo mkdir -p /etc/containerd

cat << EOF | sudo tee /etc/containerd/config.toml
version = 2
root = "/data/containerd"
state = "/run/containerd"
plugin_dir = ""
disabled_plugins = []
required_plugins = []
oom_score = 0
[grpc]
  address = "/run/containerd/containerd.sock"
  tcp_address = ""
  tcp_tls_cert = ""
  tcp_tls_key = ""
  uid = 0
  gid = 0
  max_recv_message_size = 16777216
  max_send_message_size = 16777216
[ttrpc]
  address = ""
  uid = 0
  gid = 0
[debug]
  address = ""
  uid = 0
  gid = 0
  level = ""
[metrics]
  address = ""
  grpc_histogram = false
[cgroup]
  path = ""
[timeouts]
  "io.containerd.timeout.shim.cleanup" = "5s"
  "io.containerd.timeout.shim.load" = "5s"
  "io.containerd.timeout.shim.shutdown" = "3s"
  "io.containerd.timeout.task.state" = "2s"
[plugins]
  [plugins."io.containerd.gc.v1.scheduler"]
    pause_threshold = 0.02
    deletion_threshold = 0
    mutation_threshold = 100
    schedule_delay = "0s"
    startup_delay = "100ms"
  [plugins."io.containerd.grpc.v1.cri"]
    disable_tcp_service = true
    stream_server_address = "127.0.0.1"
    stream_server_port = "0"
    stream_idle_timeout = "4h0m0s"
    enable_selinux = false
    selinux_category_range = 1024
    sandbox_image = "k8s.gcr.io/pause:3.2"
    stats_collect_period = 10
    systemd_cgroup = false
    enable_tls_streaming = false
    max_container_log_line_size = 16384
    disable_cgroup = false
    disable_apparmor = false
    restrict_oom_score_adj = false
    max_concurrent_downloads = 3
    disable_proc_mount = false
    unset_seccomp_profile = ""
    tolerate_missing_hugetlb_controller = true
    disable_hugetlb_controller = true
    ignore_image_defined_volumes = false
    [plugins."io.containerd.grpc.v1.cri".containerd]
      snapshotter = "overlayfs"
      default_runtime_name = "runc"
      no_pivot = false
      disable_snapshot_annotations = true
      discard_unpacked_layers = false
      [plugins."io.containerd.grpc.v1.cri".containerd.default_runtime]
        runtime_type = ""
        runtime_engine = ""
        runtime_root = ""
        privileged_without_host_devices = false
        base_runtime_spec = ""
      [plugins."io.containerd.grpc.v1.cri".containerd.untrusted_workload_runtime]
        runtime_type = ""
        runtime_engine = ""
        runtime_root = ""
        privileged_without_host_devices = false
        base_runtime_spec = ""
      [plugins."io.containerd.grpc.v1.cri".containerd.runtimes]
        [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc]
          runtime_type = "io.containerd.runtime.v1.linux"
          runtime_engine = ""
          runtime_root = ""
          privileged_without_host_devices = false
          base_runtime_spec = ""
          [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc.options]
    [plugins."io.containerd.grpc.v1.cri".cni]
      bin_dir = "/opt/cni/bin"
      conf_dir = "/etc/cni/net.d"
      max_conf_num = 1
      conf_template = ""
    [plugins."io.containerd.grpc.v1.cri".registry]
      [plugins."io.containerd.grpc.v1.cri".registry.mirrors]
        [plugins."io.containerd.grpc.v1.cri".registry.mirrors."docker.io"]
          endpoint = ["https://registry-1.docker.io"]
    [plugins."io.containerd.grpc.v1.cri".image_decryption]
      key_model = ""
    [plugins."io.containerd.grpc.v1.cri".x509_key_pair_streaming]
      tls_cert_file = ""
      tls_key_file = ""
  [plugins."io.containerd.internal.v1.opt"]
    path = "/opt/containerd"
  [plugins."io.containerd.internal.v1.restart"]
    interval = "10s"
  [plugins."io.containerd.metadata.v1.bolt"]
    content_sharing_policy = "shared"
  [plugins."io.containerd.monitor.v1.cgroups"]
    no_prometheus = false
  [plugins."io.containerd.runtime.v1.linux"]
    shim = "containerd-shim"
    runtime = "nvidia-container-runtime"
    runtime_root = ""
    no_shim = false
    shim_debug = false
  [plugins."io.containerd.runtime.v2.task"]
    platforms = ["linux/amd64"]
  [plugins."io.containerd.service.v1.diff-service"]
    default = ["walking"]
  [plugins."io.containerd.snapshotter.v1.devmapper"]
    root_path = ""
    pool_name = ""
    base_image_size = ""
    async_remove = false
EOF

systemctl restart containerd
```   

**导入Container镜像**

``` 
mkdir image
cd image
wget https://dumps.cloudminds.com/DOCKERFILE/kubelet/kubernetes-1.18.16-images.tar.gz
tar xf kubernetes-1.18.16-images.tar.gz
rm -rf kubernetes-1.18.16-images.tar.gz
ctr ns create k8s.io
ctr -n k8s.io images import proxy.18.tar.gz
```

**清除安装文件**

```
cd /root && rm -rf root
```

**加入kuernetes集群**

```
kubeadm join 127.0.0.1:6443 \
--token k9brva.g7vj4109keb0c093 \
--discovery-token-ca-cert-hash sha256:72986af040b0dc8e251ee85f774120844e9b64c26bfff547348ef0e669a0f208 \
--cri-socket /run/containerd/containerd.sock \
--ignore-preflight-errors all
```

:::warning 注意
`token`为kubeadm初始化后提供。<br />
`discovery-token-ca-cert-hash`为kubeadm初始化后提供。
:::
