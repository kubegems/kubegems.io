---
title: 配置Linux内核
hide_title: true
sidebar_position: 1
---


## Linux内核优化

---

Linux kernel参数优化是为KubeGems worker节点更好、稳定的服务容器而总结出来的一套内核优化基线。其中部分参数涉及到机器性能的动态调整，文档里会给出计算公式，请读者自行根据情况转换。

```bash
# 计算内存总量
mem_total_bytes = memtotal_mb * 1024 * 1024
```

### 修改sysctl.conf

使用vim打开并编辑`/etc/sysctl.conf`文件

```yaml
kernel.panic = 10
kernel.panic_on_oops = 10
kernel.sysrq=0
# 最大进程数
#用命令ps -eLf | wc -l 查看当前实际 PID 数量，检查当前用户的 PID 数量
kernel.pid_max=196605
#最大线程数
kernel.threads_max=196605
kernel.ctrl-alt-del=1
#打开coredns
kernel.core_pattern=/var/log/core.%e.%p.%t
kernel.shmmax = {{ mem_total_bytes//2 }}
kernel.shmall = {{ mem_total_bytes//2//4096 }}
kernel.msgmnb = 65536
kernel.msgmax = 65536

fs.file-max = 1048576
#每个 linux 进程可以持有多个 fd，每个 inotify 类型的 fd 可以 watch 多个目录，每个用户下所有进程 inotify 类型的 fd 可以 watch 的总目录数有个最大限制
fs.inotify.max_user_instances=524288
fs.inotify.max_user_watches=524288
#如果wattch数过多可以打开 inotify_add_watch 跟踪，进一步 debug inotify watch 耗尽的原因:
#echo 1 >> /sys/kernel/debug/tracing/events/syscalls/sys_exit_inotify_add_watch/enable

#关闭swap空间
vm.swappiness = 0
vm.max_map_count=1048575
vm.dirty_ratio = 60
vm.dirty_background_ratio = 5
vm.min_free_kbytes = {{ mem_total_bytes//1024//100*5 }}

net.ipv4.tcp_syncookies = 1
net.ipv4.tcp_synack_retries = 2
net.ipv4.tcp_dsack = 1
net.ipv4.tcp_sack = 0
net.ipv4.tcp_fack = 1
net.ipv4.conf.all.forwarding = 1
net.ipv4.conf.default.forwarding = 1
net.ipv4.ip_forward = 1
net.ipv4.conf.all.send_redirects = 0
net.ipv4.conf.default.send_redirects = 0
net.ipv4.conf.all.accept_source_route = 0
net.ipv4.conf.default.accept_source_route = 0
net.ipv4.conf.all.rp_filter = 0
net.ipv4.conf.default.rp_filter = 0
net.ipv4.conf.all.accept_redirects = 0
net.ipv4.conf.default.accept_redirects = 0
net.ipv4.conf.all.secure_redirects = 0
net.ipv4.conf.default.secure_redirects = 0
net.ipv4.conf.all.bootp_relay = 0
net.ipv4.conf.all.proxy_arp = 0
net.ipv4.icmp_echo_ignore_broadcasts = 1
net.ipv4.icmp_ignore_bogus_error_responses = 1

net.ipv4.tcp_rfc1337 = 1
net.ipv4.tcp_congestion_control = cubic
net.core.default_qdisc = pfifo_fast
net.ipv4.tcp_ecn = 2
net.ipv4.tcp_reordering = 3
net.ipv4.tcp_retries2 = 8
net.ipv4.tcp_retries1 = 3
net.ipv4.tcp_no_metrics_save = 1
net.ipv4.tcp_slow_start_after_idle = 0
net.ipv4.tcp_fin_timeout = 10
#tcp_keepalive_time需要低于ipvs中的tcp_timeout时长，一般情况下要低于kube-proxy lvs的900s
net.ipv4.tcp_keepalive_time = 600
net.ipv4.tcp_keepalive_probes = 5
net.ipv4.tcp_keepalive_intvl = 15
net.ipv4.ip_local_port_range = 20000 65535
#预留给kubernetes service的nodeport端口范围，不设置可能会造成
#kubernetes在做服务探针时使用下列范围端口，造成连接被占用而失败，引起探针失效
net.ipv4.ip_local_reserved_ports = 30000-32768

# 每个网络接口接收数据包的速率比内核处理这些包的速率快时，允许送到队列的数据包的最大数目
net.core.netdev_max_backlog = 16384
#没有启用syncookies的情况下，syn queue(半连接队列)大小除了受somaxconn限制外，也受这个参数的限制，默认1024，优化到65535，避免在高并发场景下丢包
net.ipv4.tcp_max_syn_backlog = 65535
# 表示socket监听(listen)的backlog上限，也就是就是socket的监听队列(accept queue)，当一个tcp连接尚未被处理或建立时(半连接状态)
#会保存在这个监听队列，默认为 128，在高并发场景下偏小，优化到 16384。参考 https://imroc.io/posts/kubernetes-overflow-and-drop/
net.core.somaxconn = 16384
net.ipv4.tcp_window_scaling = 1
net.ipv4.tcp_adv_win_scale = 2
net.ipv4.tcp_rmem = 4096 524287 16777216
net.core.rmem_default = 524287
net.core.rmem_max = 16777216
net.ipv4.tcp_wmem = 4096 524287 16777216
net.core.wmem_default = 524287
net.core.wmem_max = 16777216
net.core.optmem_max = 524287
net.ipv4.tcp_fastopen = 3
net.ipv4.tcp_timestamps = 1
net.ipv4.tcp_tw_recycle = 0
net.ipv4.tcp_tw_reuse = 0
net.ipv4.tcp_max_tw_buckets = 360000

# 当前 arp 记录数接近 gc_thresh3 比较容易 overflow，因为当 arp 记录达到 gc_thresh3 时会强制触发 gc 清理
#当这时又有数据包要发送，并且根据目的 IP 在 arp cache 中没找到 mac 地址，这时会判断当前 arp cache 记录数加 1 是否大于 gc_thresh3
#如果没有大于就会 时就会报错: arp_cache: neighbor table overflow!
# arp -an | wc -l参看arp记录数
net.ipv4.neigh.default.gc_thresh3 = 2048
net.ipv4.neigh.default.gc_thresh2 = 1024
net.ipv4.neigh.default.gc_thresh1 = 128
#分析如果是业务服务常见性的出现"arp_cache: neighbor table overflow!"，则考虑推送将下列注释的参数推倒所有Node节点
#net.ipv4.neigh.default.gc_thresh1 = 80000
#net.ipv4.neigh.default.gc_thresh2 = 90000
#net.ipv4.neigh.default.gc_thresh3 = 100000
net.ipv4.neigh.default.gc_interval = 120
net.ipv4.route.flush = 1
net.ipv4.rt_cache_rebuild_count = -1

net.netfilter.nf_conntrack_max = 4194304
net.nf_conntrack_max = 4194304
net.netfilter.nf_conntrack_buckets = 1048576
net.netfilter.nf_conntrack_tcp_timeout_fin_wait=30
net.netfilter.nf_conntrack_tcp_timeout_time_wait=300
net.netfilter.nf_conntrack_tcp_timeout_close_wait=1
#维持通过NAT维持TCP长连接的优化,注意kube-proxy会修改此参数
net.netfilter.nf_conntrack_tcp_timeout_established=3600
#tcp_keepalive_time+ tcp_keepalive_interval * tcp_keepalive_max_retry + 2msl取整
#https://www.xinmeow.com/2020/05/04/iptables-nf_conntrack-%E6%9D%A1%E7%9B%AE%E7%9A%84%E8%80%81%E5%8C%96%E6%97%B6%E9%97%B4%E5%9B%A0%E8%AF%A5%E8%BF%9E%E6%8E%A5%E5%8F%91%E7%94%9F%E4%B8%A2%E5%8C%85%E8%80%8C%E5%8F%98%E7%9F%AD%EF%BC%8C/
net.netfilter.nf_conntrack_tcp_timeout_max_retrans=720

net.ipv6.conf.all.disable_ipv6 = 1
net.ipv6.conf.default.disable_ipv6 = 1
```

### 生效配置

执行`sysctl -p`命令即时生效配置

或者

执行`reboot`重启服务器后内核配置生效
