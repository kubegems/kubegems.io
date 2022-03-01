---
title: 配置Loki
hide_title: true
sidebar_position: 4
description: 如何将 KubeGems 与外部 Loki 服务集成
keywords: [kubegems,kubernetes,loki]
---

## 配置 Loki

---

KubeGems Installer 默认内置了一个单机版的 Loki 服务，用户可以在`core_plugins.loki` 中对 Loki 配置。

```yaml
core_plugins:
  loki:
    details:
      catalog: 日志中心
      description: 一个水平可扩展，高可用性，多租户的日志聚合系统.
      version: v2.4.1
    enabled: true
    manual:
      persistent:
        size: 500Gi
        storageclass: local-path
    namespace: gemcloud-logging-system
    status:
      statefulset:
      - loki-system
    # If you need to interface to an external loki service, disealed loki and configured the host field
    # Tips: host only support <ipaddress>:<ports>
    # host: 172.168.0.1:3100
```

:::info 信息
虽然Loki v2.4.1 对查询速度做了大幅提升，但在生产中获得一个更好的体验，还是建议单独部署 Loki 分布式或集群模式。
:::

## 外部 Loki
---
###  禁用 Loki

如果用户环境下已存在 Loki 服务，可以在 installer 的 `core_plugins.loki` 中禁用 loki 服务，并配置外部 loki 的`<IP>:<Port>`连接地址。

```yaml
core_plugins:
    loki:
      enabled: false          
      # If you need to an external prometheus service, disealed prometheus and configured the host field
      # Tips: host only support <ipaddress>:<ports>
      status:
        host: 172.16.0.1:3100
```

:::info 信息
请求外部 loki 服务是通过 kubernetes 的 external service 实现的，所以这里只能配置 IP 地址。
:::

### 部署 Loki (Optional)

如果您的集群容器日志规模不大（200 ~ 600GB /days）且具有 S3 对象存储服务的情况下，建议可以在集群内部署单机版的`Loki + Redis(Cache) + Cassandra（Index store） + S3（Chunks store）`架构。


#### Redis.yaml


```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  namespace: gemcloud-logging-system
  labels:
    app.kubernetes.io/name: loki-redis
  name: loki-redis
data:
  redis.conf: |-
    bind 0.0.0.0
    port 6379
    tcp-backlog 511
    tcp-keepalive 300
    loglevel notice
    databases 2
    save 900 1  
    save 300 10
    save 60 10000
    dir /var/lib/redis
    appendonly no
    maxmemory 8589934592

---
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: loki-redis-data
  namespace: gemcloud-logging-system
  labels:
    app.kubernetes.io/name: loki-redis
spec:
  accessModes:
    - "ReadWriteOnce"
  resources:
    requests:
      storage: 20Gi

--- 
apiVersion: v1
kind: Service
metadata:
  name: loki-redis
  namespace: gemcloud-logging-system
  labels:
    app.kubernetes.io/name: loki-redis
spec:
  type: ClusterIP
  ports:
    - name: tcp-6379
      port: 6379
      protocol: TCP
      targetPort: 6379
  selector:
    app.kubernetes.io/name: loki-redis

--- 
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: loki-redis
  namespace: gemcloud-logging-system
  labels:
    app.kubernetes.io/name: loki-redis
spec:
  replicas: 1
  serviceName: loki-redis
  selector:
    matchLabels:
      app.kubernetes.io/name: loki-redis
  template:
    metadata:
      labels:
        app.kubernetes.io/name: loki-redis
    spec:
      containers:
      - name: loki-redis
        image: harbor.cloudminds.com/gemscloud/redis:5.0.6
        imagePullPolicy: IfNotPresent
        args: ["/etc/redis.conf"]
        ports:
        - containerPort: 6379
          name: tcp-6379
          protocol: TCP
        resources:
          limits:
            cpu: "1"
            memory: 8Gi
          requests:
            cpu: 200m
            memory: 4Gi
        volumeMounts:
        - name: redis-config
          mountPath: /etc/redis.conf
          subPath: redis.conf
          readOnly: true
        - name: data
          mountPath: /var/lib/redis
        livenessProbe:
          failureThreshold: 3
          initialDelaySeconds: 120
          periodSeconds: 30
          successThreshold: 1
          tcpSocket:
            port: 6379
          timeoutSeconds: 5
        securityContext:
          capabilities:
            add: []
            drop:
            - ALL
          readOnlyRootFilesystem: false
          runAsNonRoot: true
          runAsUser: 1001
      - name: loki-redis-exporter
        image: harbor.cloudminds.com/gemscloud/redis_exporter:v1.0.3
        imagePullPolicy: IfNotPresent
        args:
          - -redis.addr=loki-redis:6379
        ports:
          - containerPort: 9121
            name: metrics
            protocol: TCP
        resources:
          limits:
            cpu: "50m"
            memory: 32Mi 
          requests:
            cpu: 10m
            memory: 16Mi
      imagePullSecrets:
        - name: gemcloud
      securityContext:
        fsGroup: 100
      tolerations:
        - effect: NoSchedule
          key: node-role.kubernetes.io/master
          operator: Exists
      volumes:
      - name: redis-config
        configMap:
          name: loki-redis
      - persistentVolumeClaim:
          claimName: loki-redis-data
        name: data
```

#### cassandra.yaml

```yaml
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: loki-cassandra-data
  namespace: gemcloud-logging-system
  labels:
    app: loki-cassandra
spec:
  accessModes:
    - "ReadWriteOnce"
  resources:
    requests:
      storage: 20Gi

--- 
apiVersion: v1
kind: Service
metadata:
  name: loki-cassandra
  namespace: gemcloud-logging-system
  labels:
    app: loki-cassandra
spec:
  type: ClusterIP
  ports:
    - name: http-7000
      port: 7000
      protocol: TCP
      targetPort: 7000
    - name: http-9042
      port: 9042
      protocol: TCP
      targetPort: 9042
  selector:
    app: loki-cassandra

--- 
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: loki-cassandra
  namespace: gemcloud-logging-system
  labels:
    app: loki-cassandra
spec:
  replicas: 1
  serviceName:  loki-cassandra
  selector:
    matchLabels:
      app: loki-cassandra
  template:
    metadata:
      labels:
        app: loki-cassandra
      annotations:
        sidecar.istio.io/inject: "false"
    spec:
      containers:
      - name: loki-cassandra
        image: harbor.cloudminds.com/library/cassandra:3-debian-10
        imagePullPolicy: IfNotPresent
        ports:
        - containerPort: 7000
          name: http-7000
          protocol: TCP
        - containerPort: 9042
          name: http-9042
          protocol: TCP
        env:
        - name: CASSANDRA_SEEDS
          value: "loki-cassandra-0.loki-cassandra.gemcloud-logging-system.svc.cluster.local"
        - name: CASSANDRA_PASSWORD_SEEDER
          value: "yes"
        - name: CASSANDRA_PASSWORD
          value: "cassandra"
        resources:
          limits:
            cpu: "2"
            memory: 12Gi
          requests:
            cpu: 500m
            memory: 8Gi
        volumeMounts:
        - name: data
          mountPath: /bitnami
        livenessProbe:
          failureThreshold: 130
          initialDelaySeconds: 300
          periodSeconds: 30
          successThreshold: 1
          tcpSocket:
            port: 9042
          timeoutSeconds: 10
      volumes:
      - persistentVolumeClaim:
          claimName: loki-cassandra-data
        name: data
```

#### loki.yaml

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  namespace: gemcloud-logging-system
  labels:
    app.kubernetes.io/name: loki
  name: loki-local-config
data:
  local-config.yaml: |-
    auth_enabled: false
    
    server:
      http_listen_port: 3100
      grpc_server_max_recv_msg_size: 10000000
      grpc_server_max_send_msg_size: 10000000
      grpc_server_max_concurrent_streams: 0
    
    frontend:
      compress_responses: true
    
    query_range:
      split_queries_by_interval: 24h
      results_cache:
        cache:
          redis:
            endpoint: loki-redis-0.loki-redis.gemcloud-logging-system.svc.cluster.local:6379
            expiration: 1h
      cache_results: true
    
    ingester:
      lifecycler:
        address: 127.0.0.1
        ring:
          kvstore:
            store: inmemory
          replication_factor: 1
        final_sleep: 0s
      chunk_idle_period: 5m
      chunk_retain_period: 30
      wal:
        enabled: true
        dir: /data/wal
        flush_on_shutdown: true
    
    schema_config:
      configs:
      - from: 2021-11-16
        store: cassandra
        object_store: aws
        schema: v11
        index:
          prefix: index_
          period: 336h
        chunks:
          prefix: chunks_
          period: 336h
    
    storage_config:
      cassandra:
        username: cassandra
        password: cassandra
        addresses: loki-cassandra.gemcloud-logging-system.svc.cluster.local
        port: 9042
        consistency: LOCAL_ONE
        auth: true
        keyspace: lokiindex
    
      aws:
        s3: s3://<access_key>:<secret_key>@<address>/<bucket>
        s3forcepathstyle: true
        insecure: true
    
      index_queries_cache_config:
        redis:
          endpoint: loki-redis-0.loki-redis.gemcloud-logging-system.svc.cluster.local:6379
          expiration: 1h
    
    chunk_store_config:
      chunk_cache_config:
        redis:
          endpoint: loki-redis-0.loki-redis.gemcloud-logging-system.svc.cluster.local:6379
          expiration: 1h
    
      write_dedupe_cache_config:
       redis:
          endpoint: loki-redis-0.loki-redis.gemcloud-logging-system.svc.cluster.local:6379
          expiration: 1h
    table_manager:
      chunk_tables_provisioning:
        inactive_read_throughput: 0
        inactive_write_throughput: 0
        provisioned_read_throughput: 0
        provisioned_write_throughput: 0
      index_tables_provisioning:
        inactive_read_throughput: 0
        inactive_write_throughput: 0
        provisioned_read_throughput: 0
        provisioned_write_throughput: 0
      retention_deletes_enabled: false
      retention_period: 0
    
    limits_config:
      enforce_metric_name: false
      reject_old_samples: true
      reject_old_samples_max_age: 168h
      ingestion_rate_mb: 64
      ingestion_burst_size_mb: 128
      max_entries_limit_per_query: 50000
    
    ruler:
      storage:
        type: local
        local:
          directory: /data/rules
      rule_path: /data/scratch
      alertmanager_url: http://alertmanager.gemcloud-monitoring-system.svc.cluster.local:9093
      ring:
        kvstore:
          store: inmemory
      enable_api: true

---
apiVersion: v1
kind: Service
metadata:
  name: loki-system-headless
  namespace: gemcloud-logging-system
  labels:
    app.kubernetes.io/name: loki-system
spec:
  type: ClusterIP
  clusterIP: None 
  ports:
    - name: http-3100
      port: 3100
      protocol: TCP
      targetPort: 3100
    - name: grpc-9095
      port: 9095
      protocol: TCP
      targetPort: 9095
    - name: tcp-7946
      port: 7946
      protocol: TCP
      targetPort: 7946
  selector:
    app.kubernetes.io/name: loki-system
---
apiVersion: v1
kind: Service
metadata:
  name: loki-gateway
  namespace: gemcloud-logging-system
  labels:
    app.kubernetes.io/name: loki-system
spec:
  type: ClusterIP
  ports:
    - name: http-3100
      port: 3100
      protocol: TCP
      targetPort: 3100
    - name: grpc-9095
      port: 9095
      protocol: TCP
      targetPort: 9095
    - name: tcp-7946
      port: 7946
      protocol: TCP
      targetPort: 7946
  selector:
    app.kubernetes.io/name: loki-system
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: loki-table-manager
  namespace: gemcloud-logging-system
  labels:
    app.kubernetes.io/name: loki-table-manager
spec:
  replicas: 1
  selector:
    matchLabels:
      app.kubernetes.io/name: loki-table-manager
  template:
    metadata:
      labels:
        app.kubernetes.io/name: loki-table-manager
    spec:
      affinity:
        podAffinity:
        podAntiAffinity:
          preferredDuringSchedulingIgnoredDuringExecution:
            - podAffinityTerm:
                labelSelector:
                  matchLabels:
                    app.kubernetes.io/name: loki-table-manager
                namespaces:
                  - "gemcloud-logging-system"
                topologyKey: kubernetes.io/hostname
              weight: 1
        nodeAffinity:
      containers:
      - name: table-manager
        image: grafana/loki:2.4.1
        imagePullPolicy: IfNotPresent
        args:
        - -config.file=/etc/loki/local-config.yaml
        - -target=table-manager
        securityContext:
          runAsUser: 0
          capabilities:
            add: []
            drop:
            - ALL
          readOnlyRootFilesystem: false
        volumeMounts:
        - name: loki-config
          mountPath: /etc/loki/
          readOnly: true
        - mountPath: /etc/localtime
          name: timezone
          readOnly: true
      imagePullSecrets:
        - name: gemcloud
      tolerations:
        - effect: NoSchedule
          key: node-role.kubernetes.io/master
          operator: Exists
      volumes:
      - hostPath:
          path: /etc/localtime
        name: timezone
      - name: loki-config
        configMap:
          name: loki-local-config
---
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: loki-system
  namespace: gemcloud-logging-system
  labels:
    app.kubernetes.io/name: loki-system
spec:
  replicas: 1
  serviceName:  loki-system-headless
  selector:
    matchLabels:
      app.kubernetes.io/name: loki-system
  template:
    metadata:
      labels:
        app.kubernetes.io/name: loki-system
    spec:
      affinity:
        podAffinity:
        podAntiAffinity:
          preferredDuringSchedulingIgnoredDuringExecution:
            - podAffinityTerm:
                labelSelector:
                  matchLabels:
                    app.kubernetes.io/name: loki-system
                namespaces:
                  - "gemcloud-logging-system"
                topologyKey: kubernetes.io/hostname
              weight: 1
        nodeAffinity:
      initContainers:
      - name: initialization
        image: harbor.cloudminds.com/library/busybox:latest
        imagePullPolicy: IfNotPresent
        command:
          - sh
          - -c
          - |
            set -x
            mkdir -p /data/rules/fake
            mkdir -p /data/scratch
            mkdir -p /data/wal
        volumeMounts:
          - name: data
            mountPath: /data
      containers:
      - name: loki-system
        image: grafana/loki:2.4.1
        args:
        - -config.file=/etc/loki/local-config.yaml
        imagePullPolicy: IfNotPresent
        ports:
        - containerPort: 3100
          name: http-3100
          protocol: TCP
        - containerPort: 9095
          name: grpc-9095
          protocol: TCP
        - containerPort: 7946
          name: tcp-7946
          protocol: TCP
        resources:
          limits:
            cpu: "8"
            memory: 24Gi
          requests:
            cpu: "1"
            memory: "8Gi"
        volumeMounts:
        - name: loki-config
          mountPath: /etc/loki/
          readOnly: true
        - name: data
          mountPath: /data
        - mountPath: /etc/localtime
          name: timezone
          readOnly: true
        livenessProbe:
          failureThreshold: 3
          initialDelaySeconds: 120
          periodSeconds: 30
          successThreshold: 1
          tcpSocket:
            port: 3100
          timeoutSeconds: 5
        securityContext:
          runAsUser: 0
          capabilities:
            add: []
            drop:
            - ALL
          readOnlyRootFilesystem: false
      imagePullSecrets:
        - name: gemcloud
      tolerations:
        - effect: NoSchedule
          key: node-role.kubernetes.io/master
          operator: Exists
      volumes:
      - name: loki-config
        configMap:
          name: loki-local-config
      - hostPath:
          path: /etc/localtime
        name: timezone
  volumeClaimTemplates:
  - metadata:
      name: data
      labels:
        app.kubernetes.io/name: loging-system
    spec:
      accessModes: ["ReadWriteOnce"]
      resources:
        requests:
          storage: "100Gi"
```
