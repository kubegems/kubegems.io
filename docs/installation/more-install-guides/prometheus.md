---
title: 配置Prometheus
hide_title: true
sidebar_position: 3
description: 如何将 KubeGems 与外部 Prometheus 服务集成
keywords: [kubegems,kubernetes,prometheus,prometheus-operator]
---

## 配置 Prometheus
---

KubeGems 默认内置了 Prometheus-Operator 来管理 Prometheus 和 AlertManager 服务，您可以在 installer 的 `core_plugins.prometheus` 中对 Prometheus 进行个性化配置。

```yaml
core_plugins:
    prometheus:
      details:
        catalog: 监控&告警
        description: Prometheus是一套开源的监控&告警框架.
        version: 2.27.1-debian-10-r16
      enabled: true        
      namespace: gemcloud-monitoring-system
      operator:
        apply_rules: true
        image:
          repository: harbor.cloudminds.com/library/prometheus
        resources:
          cpu: 4000m
          memory: 16Gi
        persistent:
          size: 400Gi
          storageclass: local-path
        prometheus: gemcloud
        replicas: 1
        retention: 30d
      status:
        required: true
        statefulset:
        - prometheus-gemcloud
        # If you need to an external prometheus service, disealed prometheus and configured the host field
        # Tips: host only support <ipaddress>:<ports>
        # host: 172.16.0.1:9090
```

<br />

## 外部 Prometheus

---
###  禁用 Prometheus

如果用户环境下已存在 prometheus 服务，可以在 installer 的 `core_plugins.prometheus` 中禁用 prometheus 服务，并配置外部 prometheus 的`<IP>:<Port>`连接地址。

```yaml
core_plugins:
    prometheus:
      enabled: false          
      # If you need to an external prometheus service, disealed prometheus and configured the host field
      # Tips: host only support <ipaddress>:<ports>
      status:
        host: 172.16.0.1:9090
```

:::info 信息
请求外部 prometheus 服务是通过 kubernetes 的 external service 实现的，所以这里只能配置 IP 地址。
:::

### 配置 Recording Rules

KubeGems 内部配置了大量 Prometheus Recording rules 用于提高查询速度。用户需要将这部分 Recording rules配置在自有 Prometheus 服务中。

```yaml
- name: gems.rules
  rules:
  - expr: sum(irate(apiserver_request_total[5m]))by(code)
    record: gems_cluster_apiserver_qps
  - expr: histogram_quantile(0.95, sum(irate(apiserver_request_duration_seconds_bucket[5m]))
      by (le, verb))
    record: gems_cluster_apiserver_response_duration_seconds
  - expr: sum(irate(etcd_request_duration_seconds_count[5m]))by(operation)
    record: gems_cluster_etcd_qps
  - expr: histogram_quantile(0.95, sum(irate(etcd_request_duration_seconds_bucket[5m]))
      by (le, operation))
    record: gems_cluster_etcd_response_duration_seconds
  - expr: count(sum(node_cpu_seconds_total)by(cpu, host))by(host)
    record: gems_node_cpu_total_cores
  - expr: sum(irate(node_cpu_seconds_total{mode!="idle"}[5m]))by(host)
    record: gems_node_cpu_usage_cores
  - expr: gems_node_cpu_usage_cores / gems_node_cpu_total_cores
    record: gems_node_cpu_usage_percent
  - expr: sum(node_memory_MemTotal_bytes)by(host)
    record: gems_node_memory_total_bytes
  - expr: sum(node_memory_MemTotal_bytes - node_memory_MemAvailable_bytes)by(host)
    record: gems_node_memory_usage_bytes
  - expr: gems_node_memory_usage_bytes / gems_node_memory_total_bytes
    record: gems_node_memory_usage_percent
  - expr: max(node_filesystem_size_bytes{device=~"/dev/.*", device!~"/dev/loop\\d+"})by(host,
      device)
    record: gems_node_disk_total_bytes
  - expr: max(node_filesystem_size_bytes{device=~"/dev/.*", device!~"/dev/loop\\d+"}
      - node_filesystem_avail_bytes{device=~"/dev/.*", device!~"/dev/loop\\d+"})by(host,
      device)
    record: gems_node_disk_usage_bytes
  - expr: gems_node_disk_usage_bytes / gems_node_disk_total_bytes
    record: gems_node_disk_usage_percent
  - expr: sum(irate(node_disk_reads_completed_total[5m]))by(host)
    record: gems_node_disk_read_iops
  - expr: sum(irate(node_disk_writes_completed_total[5m]))by(host)
    record: gems_node_disk_write_iops
  - expr: sum(irate(node_network_receive_bytes_total{device!~"^(cali.+|tunl.+|dummy.+|kube.+|flannel.+|cni.+|docker.+|veth.+|lo.*)"}[5m]))by(host)
    record: gems_node_network_receive_bps
  - expr: sum(irate(node_network_transmit_bytes_total{device!~"^(cali.+|tunl.+|dummy.+|kube.+|flannel.+|cni.+|docker.+|veth.+|lo.*)"}[5m]))by(host)
    record: gems_node_network_send_bps
  - expr: |
      sum(kube_pod_status_phase * on(namespace, pod) group_left(host_ip, node, pod_ip) kube_pod_info > 0)
      by(namespace, pod, phase, pod_ip, host_ip, node)
    record: gems_pod_status
  - expr: |
      sum(label_replace(label_join(label_replace(kube_pod_owner{job="kube-state-metrics"},"owner_kind", "Deployment", "owner_kind", "ReplicaSet"), "workload",":","owner_kind","owner_name"), "workload","$1","workload","(Deployment:.+)-(.+)"))
      by(namespace, pod, owner_kind, workload)
    record: gems_pod_workload
  - expr: sum(irate(container_cpu_usage_seconds_total{pod!="", image!=""}[5m]))by(container,
      pod, namespace, node)
    record: gems_container_cpu_usage_cores
  - expr: sum(kube_pod_container_resource_limits_cpu_cores)by(container, pod, namespace)
    record: gems_container_cpu_limit_cores
  - expr: |
      gems_container_cpu_usage_cores
      * on (namespace, pod) group_left(owner_kind,workload)
      gems_pod_workload
    record: gems_container_with_workload_cpu_usage_cores
  - expr: |
      gems_container_cpu_limit_cores
      * on (namespace, pod) group_left(owner_kind,workload)
      gems_pod_workload
    record: gems_container_with_workload_cpu_limit_cores
  - expr: sum(container_memory_working_set_bytes{pod!="", image!=""})by(container,
      pod, namespace, node)
    record: gems_container_memory_usage_bytes
  - expr: sum(container_memory_rss{pod!="", image!=""})by(container, pod, namespace,
      node)
    record: gems_container_memory_rss
  - expr: sum(kube_pod_container_resource_limits_memory_bytes)by(container, pod, namespace)
    record: gems_container_memory_limit_bytes
  - expr: "gems_container_memory_usage_bytes \n* on (namespace, pod) group_left(owner_kind,workload)\ngems_pod_workload\n"
    record: gems_container_with_workload_memory_usage_bytes
  - expr: |
      gems_container_memory_limit_bytes
      * on (namespace, pod) group_left(owner_kind,workload)
      gems_pod_workload
    record: gems_container_with_workload_memory_limit_bytes
  - expr: sum(irate(container_network_receive_bytes_total{pod!="", image!=""}[5m]))by(container,
      pod, namespace, node)
    record: gems_container_network_receive_bps
  - expr: sum(irate(container_network_transmit_bytes_total{pod!="", image!=""}[5m]))by(container,
      pod, namespace, node)
    record: gems_container_network_send_bps
  - expr: sum(kubelet_volume_stats_used_bytes)by(namespace, node, persistentvolumeclaim)
    record: gems_pvc_usage_bytes
  - expr: sum(kubelet_volume_stats_inodes)by(namespace, node, persistentvolumeclaim)
    record: gems_pvc_inode_total
  - expr: sum(kubelet_volume_stats_inodes_used)by(namespace, node, persistentvolumeclaim)
    record: gems_pvc_inode_used
  - expr: "sum(gems_container_cpu_usage_cores)by(namespace)\n* on(namespace) group_left(label_gems_cloudminds_com_environment,
      label_gems_cloudminds_com_project, label_gems_cloudminds_com_tenant) \nkube_namespace_labels\n"
    record: gems_namespace_with_environment_cpu_usage_cores
  - expr: "sum(gems_container_memory_usage_bytes)by(namespace)\n* on(namespace) group_left(label_gems_cloudminds_com_environment,
      label_gems_cloudminds_com_project, label_gems_cloudminds_com_tenant) \nkube_namespace_labels\n"
    record: gems_namespace_with_environment_memory_usage_bytes
  - expr: "sum(gems_container_network_receive_bps)by(namespace)\n* on(namespace) group_left(label_gems_cloudminds_com_environment,
      label_gems_cloudminds_com_project, label_gems_cloudminds_com_tenant) \nkube_namespace_labels\n"
    record: gems_namespace_with_environment_network_receive_bps
  - expr: "sum(gems_container_network_send_bps)by(namespace)\n* on(namespace) group_left(label_gems_cloudminds_com_environment,
      label_gems_cloudminds_com_project, label_gems_cloudminds_com_tenant) \nkube_namespace_labels\n"
    record: gems_namespace_with_environment_network_send_bps
  - expr: "sum(gems_pvc_usage_bytes)by(namespace)\n* on(namespace) group_left(label_gems_cloudminds_com_environment,
      label_gems_cloudminds_com_project, label_gems_cloudminds_com_tenant) \nkube_namespace_labels\n"
    record: gems_namespace_with_environment_pvc_usage_bytes
  - expr: sum(irate(istio_requests_total[5m]))without(connection_security_policy,
      destination_app, destination_canonical_revision, destination_canonical_service,
      destination_principal, destination_service, instance, job, source_app, source_canonical_revision,
      source_canonical_service, source_principal)
    record: gems_istio_workload_request_qps
  - expr: histogram_quantile(0.95, sum(irate(istio_request_duration_milliseconds_bucket[5m]))
      without (connection_security_policy, destination_app, destination_canonical_revision,
      destination_canonical_service, destination_principal, destination_service, instance,
      job, source_app, source_canonical_revision, source_canonical_service, source_principal))
      / 1000
    record: gems_istio_workload_response_duration_seconds
  - expr: sum(irate(envoy_http_outbound_0_0_0_0_8080_downstream_rq[5m]))by(namespace,
      pod, response_code_class)
    record: gems_istio_gateway_port_80_downstream_qps
  - expr: histogram_quantile(0.95, sum(irate(envoy_http_outbound_0_0_0_0_8080_downstream_rq_time_bucket[5m]))by(namespace,
      pod, le)) / 1000
    record: gems_istio_gateway_port_80_downstream_response_duration_seconds
  - expr: sum(irate(envoy_http_outbound_0_0_0_0_8443_downstream_rq[5m]))by(namespace,
      pod, response_code_class)
    record: gems_istio_gateway_port_443_downstream_qps
  - expr: histogram_quantile(0.95, sum(irate(envoy_http_outbound_0_0_0_0_8443_downstream_rq_time_bucket[5m]))by(namespace,
      pod, le)) / 1000
    record: gems_istio_gateway_port_443_downstream_response_duration_seconds
```

### 配置 Alert Rules (Optional)

KubeGems 内部自带了部分 Kubernetes 集群级别的监控告警服务配置。用户可根据自己情况选择或全部配置。

```yaml
- name: KubernetesNodeReady
  rules:
  - alert: KubernetesNodeReady
    annotations:
      message: Cluster {{ $externalLabels.k8s_cloud_cluster }} node {{ $labels.node
        }} not ready
      value: '{{ $value | printf "%.1f" }}'
    expr: kube_node_status_condition{condition="Ready",status="true"} == 0
    for: 10m
    labels:
      gems_alert_scope: system-admin
      gems_alertname: KubernetesNodeReady
      gems_namespace: gemcloud-monitoring-system
      severity: critical
- name: KubernetesMemoryPressure
  rules:
  - alert: KubernetesMemoryPressure
    annotations:
      message: Cluster {{ $externalLabels.k8s_cloud_cluster }} node {{ $labels.node
        }} memory in pressure
      value: '{{ $value | printf "%.1f" }}'
    expr: kube_node_status_condition{condition="MemoryPressure",status="true"} ==
      1
    for: 2m
    labels:
      gems_alert_scope: system-admin
      gems_alertname: KubernetesMemoryPressure
      gems_namespace: gemcloud-monitoring-system
      severity: critical
- name: KubernetesDiskPressure
  rules:
  - alert: KubernetesDiskPressure
    annotations:
      message: Cluster {{ $externalLabels.k8s_cloud_cluster }} node {{ $labels.node
        }} disk in pressure
      value: '{{ $value | printf "%.1f" }}'
    expr: kube_node_status_condition{condition="DiskPressure",status="true"} == 1
    for: 2m
    labels:
      gems_alert_scope: system-admin
      gems_alertname: KubernetesDiskPressure
      gems_namespace: gemcloud-monitoring-system
      severity: critical
- name: KubernetesOutOfDisk
  rules:
  - alert: KubernetesOutOfDisk
    annotations:
      message: Cluster {{ $externalLabels.k8s_cloud_cluster }} node {{ $labels.node
        }} out of disk
      value: '{{ $value | printf "%.1f" }}'
    expr: kube_node_status_condition{condition="OutOfDisk",status="true"} == 1
    for: 2m
    labels:
      gems_alert_scope: system-admin
      gems_alertname: KubernetesOutOfDisk
      gems_namespace: gemcloud-monitoring-system
      severity: critical
- name: KubernetesPodNumberTooHigh
  rules:
  - alert: KubernetesPodNumberTooHigh
    annotations:
      message: Cluster {{ $externalLabels.k8s_cloud_cluster }} node {{ $labels.node
        }} pod number too high, current rate {{ $value }}%
      value: '{{ $value | printf "%.1f" }}'
    expr: sum(gems_pod_status{phase="Running"})by(node) / sum(kube_node_status_allocatable_pods)by(node)
      * 100 > 90
    for: 2m
    labels:
      gems_alert_scope: system-admin
      gems_alertname: KubernetesPodNumberTooHigh
      gems_namespace: gemcloud-monitoring-system
      severity: error
- name: KubernetesPersistentvolumeError
  rules:
  - alert: KubernetesPersistentvolumeError
    annotations:
      message: Cluster {{ $externalLabels.k8s_cloud_cluster }} persistentvolume {{
        $labels.persistentvolume }} error
      value: '{{ $value | printf "%.1f" }}'
    expr: kube_persistentvolume_status_phase{phase=~"Failed|Pending", job="kube-state-metrics"}
      > 0
    for: 0m
    labels:
      gems_alert_scope: system-admin
      gems_alertname: KubernetesPersistentvolumeError
      gems_namespace: gemcloud-monitoring-system
      severity: critical
- name: KubernetesPodCrashLooping
  rules:
  - alert: KubernetesPodCrashLooping
    annotations:
      message: Cluster {{ $externalLabels.k8s_cloud_cluster }} namespace {{ $labels.namespace
        }} pod {{ $labels.pod }} crash looping
      value: '{{ $value | printf "%.1f" }}'
    expr: increase(kube_pod_container_status_restarts_total[1m]) > 1
    for: 1m
    labels:
      gems_alert_scope: system-admin
      gems_alertname: KubernetesPodCrashLooping
      gems_namespace: gemcloud-monitoring-system
      severity: error
- name: KubernetesPodOOMKilling
  rules:
  - alert: KubernetesPodOOMKilling
    annotations:
      message: Cluster {{ $externalLabels.k8s_cloud_cluster }} namespace {{ $labels.namespace
        }} pod {{ $labels.pod }} OOM Killing
      value: '{{ $value | printf "%.1f" }}'
    expr: kube_pod_container_status_terminated_reason{reason="OOMKilled"} > 0
    for: 0m
    labels:
      gems_alert_scope: system-admin
      gems_alertname: KubernetesPodOOMKilling
      gems_namespace: gemcloud-monitoring-system
      severity: critical
- name: HostHighCpuLoad
  rules:
  - alert: HostHighCpuLoad
    annotations:
      message: Cluster {{ $externalLabels.k8s_cloud_cluster }} node {{ $labels.host
        }} cpu overload, current usage {{ $value | printf "%.2f" }}%
      value: '{{ $value | printf "%.1f" }}'
    expr: gems_node_cpu_usage_percent * 100 > 80
    for: 0m
    labels:
      gems_alert_scope: system-admin
      gems_alertname: HostHighCpuLoad
      gems_namespace: gemcloud-monitoring-system
      severity: error
- name: HostHighMemoryLoad
  rules:
  - alert: HostHighMemoryLoad
    annotations:
      message: Cluster {{ $externalLabels.k8s_cloud_cluster }} node {{ $labels.host
        }} out of memory, current usage {{ $value | printf "%.2f" }}%
      value: '{{ $value | printf "%.1f" }}'
    expr: gems_node_memory_usage_percent * 100 > 90
    for: 2m
    labels:
      gems_alert_scope: system-admin
      gems_alertname: HostHighMemoryLoad
      gems_namespace: gemcloud-monitoring-system
      severity: error
- name: HostUnusualDiskReadRate
  rules:
  - alert: HostUnusualDiskReadRate
    annotations:
      message: Cluster {{ $externalLabels.k8s_cloud_cluster }} node {{ $labels.host
        }} disk read rate too high, current {{ $value | printf "%.2f" }}Mb/s
      value: '{{ $value | printf "%.1f" }}'
    expr: sum by (host, namespace) (rate(node_disk_read_bytes_total[2m])) / 1024 /
      1024 > 50
    for: 5m
    labels:
      gems_alert_scope: system-admin
      gems_alertname: HostUnusualDiskReadRate
      gems_namespace: gemcloud-monitoring-system
      severity: error
- name: HostUnusualDiskWriteRate
  rules:
  - alert: HostUnusualDiskWriteRate
    annotations:
      message: Cluster {{ $externalLabels.k8s_cloud_cluster }} node {{ $labels.host
        }} disk write rate too high, current {{ $value | printf "%.2f" }}Mb/s
      value: '{{ $value | printf "%.1f" }}'
    expr: sum by (host, namespace) (rate(node_disk_written_bytes_total[2m])) / 1024
      / 1024 > 50
    for: 2m
    labels:
      gems_alert_scope: system-admin
      gems_alertname: HostUnusualDiskWriteRate
      gems_namespace: gemcloud-monitoring-system
      severity: error
- name: HostCpuStealNoisyNeighbor
  rules:
  - alert: HostCpuStealNoisyNeighbor
    annotations:
      message: Cluster {{ $externalLabels.k8s_cloud_cluster }} node {{ $labels.host
        }} CPU steal noisy neighbor
      value: '{{ $value | printf "%.1f" }}'
    expr: avg by(host, namespace) (rate(node_cpu_seconds_total{mode="steal"}[5m]))
      * 100 > 10
    for: 0m
    labels:
      gems_alert_scope: system-admin
      gems_alertname: HostCpuStealNoisyNeighbor
      gems_namespace: gemcloud-monitoring-system
      severity: error
- name: HostContextSwitching
  rules:
  - alert: HostContextSwitching
    annotations:
      message: Cluster {{ $externalLabels.k8s_cloud_cluster }} node {{ $labels.host
        }} context switching
      value: '{{ $value | printf "%.1f" }}'
    expr: (rate(node_context_switches_total[5m])) / (count without(cpu, mode) (node_cpu_seconds_total{mode="idle"}))
      > 40000
    for: 0m
    labels:
      gems_alert_scope: system-admin
      gems_alertname: HostContextSwitching
      gems_namespace: gemcloud-monitoring-system
      severity: error
- name: HostNetworkReceiveErrors
  rules:
  - alert: HostNetworkReceiveErrors
    annotations:
      message: Cluster {{ $externalLabels.k8s_cloud_cluster }} node {{ $labels.host
        }} Network Receive Errors
      value: '{{ $value | printf "%.1f" }}'
    expr: rate(node_network_receive_errs_total[2m]) / rate(node_network_receive_packets_total[2m])
      > 0.01
    for: 2m
    labels:
      gems_alert_scope: system-admin
      gems_alertname: HostNetworkReceiveErrors
      gems_namespace: gemcloud-monitoring-system
      severity: error
- name: HostNetworkTransmitErrors
  rules:
  - alert: HostNetworkTransmitErrors
    annotations:
      message: Cluster {{ $externalLabels.k8s_cloud_cluster }} node {{ $labels.host
        }} Network Transmit Errors
      value: '{{ $value | printf "%.1f" }}'
    expr: rate(node_network_transmit_errs_total[2m]) / rate(node_network_transmit_packets_total[2m])
      > 0.01
    for: 2m
    labels:
      gems_alert_scope: system-admin
      gems_alertname: HostNetworkTransmitErrors
      gems_namespace: gemcloud-monitoring-system
      severity: error
- name: HostNetworkInterfaceSaturated
  rules:
  - alert: HostNetworkInterfaceSaturated
    annotations:
      message: Cluster {{ $externalLabels.k8s_cloud_cluster }} node {{ $labels.host
        }} Network Interface Saturated
      value: '{{ $value | printf "%.1f" }}'
    expr: (rate(node_network_receive_bytes_total{device!~"^tap.*"}[1m]) + rate(node_network_transmit_bytes_total{device!~"^tap.*"}[1m]))
      / node_network_speed_bytes{device!~"^tap.*"} > 0.8
    for: 1m
    labels:
      gems_alert_scope: system-admin
      gems_alertname: HostNetworkInterfaceSaturated
      gems_namespace: gemcloud-monitoring-system
      severity: error
- name: HostConntrackLimit
  rules:
  - alert: HostConntrackLimit
    annotations:
      message: Cluster {{ $externalLabels.k8s_cloud_cluster }} node {{ $labels.host
        }} conntrack limit
      value: '{{ $value | printf "%.1f" }}'
    expr: node_nf_conntrack_entries / node_nf_conntrack_entries_limit > 0.8
    for: 5m
    labels:
      gems_alert_scope: system-admin
      gems_alertname: HostConntrackLimit
      gems_namespace: gemcloud-monitoring-system
      severity: error
- name: HostHighLoad5
  rules:
  - alert: HostHighLoad5
    annotations:
      message: Cluster {{ $externalLabels.k8s_cloud_cluster }} node {{ $labels.host
        }} load5 too high, load5 - cpu-cores = {{ $value | printf "%.1f" }}
      value: '{{ $value | printf "%.1f" }}'
    expr: sum(node_load5) by (host) - sum(gems_node_cpu_total_cores) by (host) > 0
    for: 0m
    labels:
      gems_alert_scope: system-user
      gems_alertname: HostHighLoad5
      gems_namespace: gemcloud-monitoring-system
      severity: error
  - alert: HostHighLoad5
    annotations:
      message: Cluster {{ $externalLabels.k8s_cloud_cluster }} node {{ $labels.host
        }} load5 too high, load5 - 1.5 * cpu-cores = {{ $value | printf "%.1f" }}
      value: '{{ $value | printf "%.1f" }}'
    expr: sum(node_load5) by (host) - sum(gems_node_cpu_total_cores) by (host) * 1.5
      > 0
    for: 0m
    labels:
      gems_alert_scope: system-user
      gems_alertname: HostHighLoad5
      gems_namespace: gemcloud-monitoring-system
      severity: critical
- name: CertManagerCertExpirySoon
  rules:
  - alert: CertManagerCertExpirySoon
    annotations:
      message: Cluster {{ $externalLabels.k8s_cloud_cluster }} namespace {{ $labels.namespace
        }} cert {{ $labels.name }} is {{ $value | humanizeDuration }} from expiry
      value: '{{ $value | printf "%.1f" }}'
    expr: certmanager_certificate_expiration_timestamp_seconds - time() < 7 * 24 *
      3600
    for: 1m
    labels:
      gems_alert_scope: system-admin
      gems_alertname: CertManagerCertExpirySoon
      gems_namespace: gemcloud-monitoring-system
      severity: error
- name: CertManagerCertNotReady
  rules:
  - alert: CertManagerCertNotReady
    annotations:
      message: Cluster {{ $externalLabels.k8s_cloud_cluster }} namespace {{ $labels.namespace
        }} cert {{ $labels.name }} is not ready to serve traffic.
      value: '{{ $value | printf "%.1f" }}'
    expr: max by (name, namespace, condition) (certmanager_certificate_ready_status{condition!="True"}
      == 1)
    for: 1h
    labels:
      gems_alert_scope: system-admin
      gems_alertname: CertManagerCertNotReady
      gems_namespace: gemcloud-monitoring-system
      severity: error
- name: ClusterHighCpuLoad
  rules:
  - alert: ClusterHighCpuLoad
    annotations:
      message: Cluster {{ $externalLabels.k8s_cloud_cluster }} cpu overload, current
        usage {{ $value | printf "%.2f" }}%
      value: '{{ $value | printf "%.1f" }}'
    expr: (1 - avg(rate(node_cpu_seconds_total{mode="idle"}[2m]))) * 100 > 90
    for: 0m
    labels:
      gems_alert_scope: system-user
      gems_alertname: ClusterHighCpuLoad
      gems_namespace: gemcloud-monitoring-system
      severity: critical
- name: ClusterHighMemoryLoad
  rules:
  - alert: ClusterHighMemoryLoad
    annotations:
      message: Cluster {{ $externalLabels.k8s_cloud_cluster }} out of memory, current
        usage {{ $value | printf "%.2f" }}%
      value: '{{ $value | printf "%.1f" }}'
    expr: (1- sum(node_memory_MemAvailable_bytes) / sum(node_memory_MemTotal_bytes))
      * 100 > 90
    for: 0m
    labels:
      gems_alert_scope: system-user
      gems_alertname: ClusterHighMemoryLoad
      gems_namespace: gemcloud-monitoring-system
      severity: error
- name: GemsPluginFailed
  rules:
  - alert: GemsPluginFailed
    annotations:
      message: Cluster {{ $externalLabels.k8s_cloud_cluster }} {{ $labels.type }}
        plugin {{ $labels.plugin }} failed
      value: '{{ $value | printf "%.1f" }}'
    expr: gems_server_plugin_status{enabled="true"} == 0
    for: 1m
    labels:
      gems_alert_scope: system-admin
      gems_alertname: GemsPluginFailed
      gems_namespace: gemcloud-monitoring-system
      severity: critical
- name: ExporterDown
  rules:
  - alert: ExporterDown
    annotations:
      message: Cluster {{ $externalLabels.k8s_cloud_cluster }} node {{ $labels.host
        }} node-exporter {{ $labels.plugin }} down
      value: '{{ $value | printf "%.1f" }}'
    expr: up{job=~"alertmanager|cert-manager|gems-agent|kube-state-metrics|node-exporter|nginx-ingress-operator-metrics"}
      == 0
    for: 1m
    labels:
      gems_alert_scope: system-admin
      gems_alertname: ExporterDown
      gems_namespace: gemcloud-monitoring-system
      severity: critical
```
