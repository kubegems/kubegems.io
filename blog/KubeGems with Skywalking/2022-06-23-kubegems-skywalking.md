---
slug: kubegems-skywalking
title: 基于KubeGems可视化搭建SkyWalking
authors: [liutao]
tags: [kubernetes,tracing,observability,kubegems]
---

[Apache Skywalking](https://github.com/apache/incubator-skywalking) 专门为微服务架构和云原生架构系统而设计并且支持分布式链路追踪的APM系统。[Apache Skywalking](https://github.com/apache/incubator-skywalking) 通过加载探针的方式收集应用调用链路信息，并对采集的调用链路信息进行分析，生成应用间关系和服务间关系以及服务指标。[Apache Skywalking](https://github.com/apache/incubator-skywalking) 目前支持多种语言，其中包括 [Java](https://github.com/apache/incubator-skywalking)，[.Net Core](https://github.com/OpenSkywalking/skywalking-netcore)，[Node.js](https://github.com/OpenSkywalking/skywalking-nodejs) 和 [Go](https://github.com/OpenSkywalking/skywalking-go) 语言。本文将从以 KubeGems 应用商店出发，来快速搭建一套Skywalking，希望能够帮助到大家。

## 安装SkyWalking OAP

> KubeGems应用商店(HelmChart)是一个描述Kubernetes相关资源的文件集合，单个应用可以用来部署某些复杂的HTTP服务器以及Web全栈应用、数据库、缓存等

1. ### Elasticsearch安装

在KubeGems应用商店中找到Elasticsearch

![](https://img-blog.csdnimg.cn/img_convert/12ad60c8cc85f5045a1ee8a8f445261d.png)

选择部署7.13.2版本，填写必要的【项目】、【环境】等信息

![img](https://img-blog.csdnimg.cn/img_convert/223d171147da56a82cb509968568f858.png)

为方便演示，Master、ES副本数都配置为1，可根据实际需要配置参数，还可以修改 `Values` 中的配置

SkyWalking 初始化 ElasticSearch index 的是默认规则是 1 副本 1 分片，实际在使用中ElasticSearch 的实例数最好大于 2 个

![img](https://img-blog.csdnimg.cn/img_convert/ab6bec19080bfa2eaf357c5aa5adee8b.png)

点击部署，ES服务搭建完成。

![img](https://img-blog.csdnimg.cn/img_convert/5732a57c4733b7001c28dbee0cec1bf9.png)

1. ### SkyWalking安装

同样在应用商店找到skywalking应用，填写基本信息，进入详细配置页，将数据设置为ES应用名称与端口

![img](https://img-blog.csdnimg.cn/img_convert/f8c24482817f6d19af4db47e08b06544.png)

点击部署，可以看到skywalking-oap、skywalking-ui服务已经部署完成

![img](https://img-blog.csdnimg.cn/img_convert/a0bde3d10539ffb239e0772921c84f85.png)

在KubeGems控制台，找到容器服务-->运行时-->路由，创建路由，将skywalking-ui服务地址进行域名映射。我这里直接采用随机域名，用户可以根据自己公司内的域名手动配置。

![img](https://img-blog.csdnimg.cn/img_convert/4ea6c436becd2f6c9e6ec6d0f16c5d78.png)

在浏览器中打开路由访问地址，已经能正常看skywalking-ui的页面了

![img](https://img-blog.csdnimg.cn/img_convert/5c93cd6a4ac9c193f61edb3c92b156db.png)

![img](https://img-blog.csdnimg.cn/img_convert/212b4f67b1839059813b35704ff9ad0c.png)

skywalking服务搭建完成啦，是不是非常的快速方便，哈哈哈哈哈😄

## SkyWalking Agent

> 所谓Agent是指SkyWalking从各个平台(Java Python等)收集监控数据的代理，此处我们以为Java应用为例，收集Java应用产生的各种监控数据

SkyWalking的数据采集主要是通过**业务探针(Agent)**来实现的，针对不同的编程语言SkyWalking提供了对应的Agent实现。Java微服务接入SkyWalking可以使用“SkyWalking Java Agent”来上报监控数据。

这就需要Java微服务在部署启动的过程中需要获取 **SkyWalking Java Agent** 探针包，并在启动参数中通过`--javaagent:xxx`进行参数指定。而具体的集成方式大致有以下四种：

- 使用官方提供的基础镜像；

- 将agent包构建到已存在的基础镜像中；

- 将agent包放到共享volume中;

- 通过sidecar 模式挂载agent；

其中前两种方式主要是通过在构建Docker镜像的过程中将Agent依赖打包集成到Java服务的Docker镜像中，而sidecar模式则是利用k8s的相关特性来实现在**容器启动时挂载Agent**相关依赖。

### 为什么选择sidecar

Sidecard主要原理是通过Kubernetes的初始化容器`initContainers`来实现的，`initContainers`是一种专用容器，它应用容器启动之前运行，可以用于完成应用启动前的必要初始化工作。如果微服务是直接部署在 Kubernetes 集群，那么采用 sidecar 模式来使用 SkyWalking Agent会更加方便，因为这种方式**不需要修改原来的基础镜像，也不需要重新构建新的服务镜像**，而是会以sidecar模式，通过共享的volume将agent所需的相关文件直接挂载到已经存在的服务镜像中。

### 初始化容器InitContainers

InitContainers 就是用来做初始化工作的容器，可以是一个或者多个，如果有多个的话，这些容器会按定义的顺序依次执行，只有所有的initContainers执行完后，主容器才会被启动。我们知道一个Pod里面的所有容器是共享数据卷和网络命名空间的，所以`initContainers`里面产生的数据可以被主容器使用到的

### **自定义SkyWalking Agent镜像**

- 下载SkyWalking官方发行包，并解压到指定目录

```Bash
#下载skywalking-8.6.0 for es7版本的发布包，与部署的skywalking后端版本一致
$ wget https://archive.apache.org/dist/skywalking/8.6.0/apache-skywalking-apm-8.6.0.tar.gz

#将下载的发布包解压到当前目录
$ tar -zxvf apache-skywalking-apm-es7-8.6.0.tar.gz
```

- 修改配置，编辑config/agent.config文件，以下只列出部分配置项

```Bash
# The agent namespace
# agent.namespace=${SW_AGENT_NAMESPACE:default-namespace}
# 表示提供相同功能/逻辑的逻辑组的服务名称
agent.service_name=${SW_AGENT_NAME:Your_ApplicationName}

# OAP服务地址，修改默认地址为skywalking-oap服务名
collector.backend_service=${SW_AGENT_COLLECTOR_BACKEND_SERVICES:skywalking-oap:11800}
# 日志文件名
logging.file_name=${SW_LOGGING_FILE_NAME:skywalking-api.log}
# 日志级别：TRACE、DEBUG、INFO、WARN、ERROR、OFF。
logging.level=${SW_LOGGING_LEVEL:INFO}
# 最大历史日志文件。发生翻转时，如果日志文件超过此数量，则最旧的文件将被删除。默认情况下，负数或零表示关闭。
logging.max_history_files=${SW_LOGGING_MAX_HISTORY_FILES:10}
# 挂载插件的特定文件夹。安装文件夹中的插件可以工作。
plugin.mount=${SW_MOUNT_FOLDERS:plugins,activations,bootstrap-plugins}
# 排除插件目录中定义的一些插件
# plugin.exclude_plugins=${SW_EXCLUDE_PLUGINS:}
```

- 构建skywalking-agent sidecar 镜像并push至hub私有镜像仓库

在前面步骤中解压的skywalking发行包，进入agent目录编写Dockerfile文件

```Bash
FROM busybox:latest
RUN set -eux && mkdir -p /usr/skywalking/agent/
COPY . /usr/skywalking/agent/
WORKDIR /
```

- 完成Docker文件编写后，执行镜像构建命令：

```Bash
# 构建镜像，注意最后一个.
docker build -t <your-registry>/skywalking-agent-sidecar:8.6.0 .
# 镜像推送至私有Harbor仓库
docker push <your-registry>/skywalking-agent-sidecar:8.6.0
```

### sidecar挂载

在KubeGems中找到 【工作负载】，编辑更新工作负载进入到容器镜像页面

**设置SW环境变量**，编辑工作容器 

- SW_AGENT_NAME=\<YourApplicationName\>
- JAVA_TOOL_OPTIONS=-javaagent:/usr/skywalking/agent/skywalking-agent.jar

**添加容器镜像**，选择初始化容器将skywalking-agent-sidecard镜像进行挂载，并添加启动命令

```Bash
sh -c /usr/skywalking/agent/* /skywalking/agent
```

![img](https://img-blog.csdnimg.cn/img_convert/cad0e71470d041f2ef2dbf86da258abc.png)

**挂载emptyDir卷**

![img](https://img-blog.csdnimg.cn/img_convert/e34455919c3c6dbd6334609aad32bd26.png)

点击确定保存工作负载信息，自动重启后进入应用容器，可以看到agent目标已经加载到容器中了

```Bash
root@pod-7bc77468ff-7b4xt:/# cd /usr/skywalking/agent/
root@pod-7bc77468ff-7b4xt:/usr/skywalking/agent# ll

total 17716
drwxrwxrwx 9 root root      194 May 19 08:14 ./
drwxr-xr-x 3 root root       27 May 19 08:14 ../
-rw-r--r-- 1 root root      114 May 19 08:14 Dockerfile
drwxr-xr-x 2 root root     4096 May 19 08:14 activations/
drwxr-xr-x 2 root root       85 May 19 08:14 bootstrap-plugins/
drwxr-xr-x 2 root root       64 May 19 08:14 config/
drwxr-xr-x 2 root root       32 May 19 08:14 logs/
drwxr-xr-x 2 root root     4096 May 19 08:14 optional-plugins/
drwxr-xr-x 2 root root       45 May 19 08:14 optional-reporter-plugins/
drwxr-xr-x 2 root root     4096 May 19 08:14 plugins/
-rw-r--r-- 1 root root 18121582 May 19 08:14 skywalking-agent.jar
```

此时打开skywalking-ui，已经可以看到监控数据了

![img](https://img-blog.csdnimg.cn/img_convert/144d7ab53fc6553098b3e70193f2a74d.png)

## SkyWalking动态配置

SkyWalking配置主要是通过`application.yml`操作系统环境变量设置的，其中一些还支持来自上游管理系统的动态设置。上游服务支持包括Zookeeper、Etcd、Consul、Apollo、Nacos、K8s-configmap等。

目前SkyWalking支持以下动态配置

| 配置 | 说明 |
| :-------------------------------------------------: | :----------------------------------------------------------- |
| agent-analyzer.default.slowDBAccessThreshold        | `receiver-trace/default/slowDBAccessThreshold`慢数据库语句的阈值，覆盖`application.yml`. |
| agent-analyzer.default.uninstrumentedGateways       | 未检测的网关覆盖`gateways.yml`.                              |
| alarm.default.alarm-settings                        | 警报设置将覆盖`alarm-settings.yml`。                         |
| core.default.apdexThreshold                         | apdex 阈值设置，将覆盖`service-apdex-threshold.yml`.         |
| core.default.endpoint-name-grouping                 | 端点名称分组设置，将覆盖`endpoint-name-grouping.yml`.        |
| agent-analyzer.default.sampleRate                   | 跟踪采样，覆盖`receiver-trace/default/sampleRate`.`application.yml` |
| agent-analyzer.default.slowTraceSegmentThreshold    | 设置这个关于延迟的阈值将使慢跟踪段在花费更多时间时被采样，即使采样机制被激活。默认值为`-1`，这意味着不会对慢速跟踪进行采样。单位，毫秒。的覆盖`receiver-trace/default/slowTraceSegmentThreshold`。`application.yml` |
| configuration-discovery.default.agentConfigurations | ConfigurationDiscovery 设置                                  |

### k8s-configmap

> 很多应用在其初始化或运行期间要依赖一些配置信息。大多数时候， 存在要调整配置参数所设置的数值的需求。 ConfigMap 是 Kubernetes 用来向应用 Pod 中注入配置数据的方法。

本文介绍如何通过KubGems平台动态配置SkyWalking参数

- KubGems工作台 --> 配置中心 --> 配置 --> 创建配置
- 添加参数及告警规则配置

![img](https://img-blog.csdnimg.cn/img_convert/ae9fc31a7b36272e16f1ecaa7a686a4b.png)

- 编辑yaml，添加修改app、compoent标签值

```YAML
kind: ConfigMap
apiVersion: v1
metadata:
  name: skywalking-dynamic-config
  namespace: default
  creationTimestamp: '2022-05-16T11:14:23Z'
  labels:
    component: oap
data:
  agent-analyzer.default.sampleRate: '7000'
  agent-analyzer.default.slowDBAccessThreshold: default:250,mongodb:100
  alarm.default.alarm-settings: >-
    rules:
      # Rule unique name, must be ended with `_rule`.
      service_resp_time_rule:
        metrics-name: service_resp_time
        op: ">"
        threshold: 2000
        period: 10
        count: 3
        silence-period: 5
        message: 最近3分钟内服务 {name} 的平均响应时间超过2秒
```

- 修改skywalking-oap环境变量信息，使用k8s-configmap配置

```YAML
apiVersion: apps/v1
kind: Deployment
metadata:
  name: skywalking-oap
  labels:
    app: skywalking
    app.kubernetes.io/instance: skywalking
.........

  env:

    .....

    - name: SW_CLUSTER_K8S_LABEL

      value: app=skywalking,component=oap

    - name: SW_CONFIGURATION

      value: k8s-configmap
```

> `SW_CONFIGURATION= k8s-configmap`，动态配置采用k8s-configmap
> `SW_CLUSTER_K8S_LABEL= app=collector,release=skywalking`，根据这个值自动选择合适的configmap

- 重启skywalking-oap，配置生效

## SkyWalking配置优化

### OAP优化

 skywalking写入ES的操作是使用了ES的批量写入接口，我们要做的是调整相关参数尽量降低ES索引的写入频率。 参数调整主要是针对skywalking的配置文件``application.yml`，相关参数如下：  

```YAML
storage:
  elasticsearch:
    bulkActions: ${SW_STORAGE_ES_BULK_ACTIONS:4000} # Execute the bulk every 2000 requests
    bulkSize: ${SW_STORAGE_ES_BULK_SIZE:40} # flush the bulk every 20mb
    flushInterval: ${SW_STORAGE_ES_FLUSH_INTERVAL:30} # flush the bulk every 10 seconds whatever the number of requests
    concurrentRequests: ${SW_STORAGE_ES_CONCURRENT_REQUESTS:4} # the number of concurrent requests
    metadataQueryMaxSize: ${SW_STORAGE_ES_QUERY_MAX_SIZE:8000}
```

调整 bulkActions 默认2000次请求批量写入一次改到4000次；

- bulkSize批量刷新从20M一次到40M一次；

- flushInterval每10秒刷新一次堆改为每30秒刷新；

- concurrentRequests查询的最大数量由5000改为8000。

### 过滤不需要监控的接口

- 制作agent镜像时，将`apm-trace-ignore-plugin-8.6.0.jar`复制到`\plugins`下面

- config目录下新建一个配置文件 `apm-trace-ignore-plugin.config`，文件内容为： 

```YAML
trace.ignore_path=${SW_AGENT_TRACE_IGNORE_PATH:/actuator,/actuator/**,/admin/**,/nacos/**}
```

### 设置采样率

 在默认情况下，SkyWalking会采集所有追踪的数据。但是如果系统比较复杂，采集的端点比较多的时候，可能存储压力比较大，这个时候我们可以修改配置，只存储部分的调用链路信息。比如：50%。 设置采样率的时候并不会影响相关指标的计算。包括服务，服务实例，端点，拓扑图等相关指标的计算还是使用完整的数据计算的。 

在k8s-configmap中，添加配置项，设置采样率为70%:

```YAML
agent-analyzer.default.sampleRate: '7000'
```
## 总结

本文用于指导用于在 KubeGems 中快速部署并运行 SkyWalking服务，用户可在研发环境中快速启用此功能来验证 APM 相关功能。更多关于KubeGems 与 SkyWalking 的配置优化，我们会持续更新，敬请关注。