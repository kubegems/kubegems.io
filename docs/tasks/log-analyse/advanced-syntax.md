---
title: 高级语法
hide_title: true
sidebar_position: 2
# description: 本文用于指导用户在KubeGems快速使用，并对Kubernetes相关的资源进行操作
# keywords: [kubegems,KubeGems,kubernetes]
---

## 高级语法
  点击`高级查询`按钮,界面进入高级查询模式,这种方式下可以直接使用logql进行查询  

![pic](./log-query-advanced.png)

  日志系统后端为loki, 因此支持完整的loki logql查询方式, 一条完整的logql由两大部分构成
  `steam selector`选择对应的series, `pipeline`对应日志记录的处理,参考下图  

![pic](./query_components.png)

 可以看出, `pipeline`由多种表达式构成,可以由`label filter`来过滤series,可以由`line filter`
 来过滤特定记录,以及可以对日志进行后续的格式化及选择特定的`parser`来解析日志,因此,功能十分丰富.  
 examples: 
 - 多个过滤器  
   `{cluster="ops-tools1", namespace="loki-dev", job="loki-dev/query-frontend"} |= "metrics.go" !="out of order" | logfmt | duration > 30s or status_code!="200"`  

   选择集群ops-tools1中命名空间loki-dev的query-frontend 任务产生的日志,并且日志记录包含metrics.go不包含out of order,然后进行格式化处理, 最后过滤条件是标签duration的值大于30s
   或者status_code不等于200
 - 多个解析器
   假如有如下日志, 我们想解析出method和path  
   `level=debug ts=2020-10-02T10:10:42.092268913Z caller=logging.go:66 traceID=a9d4d8a928d8db1 msg="POST /api/prom/api/v1/query_range (200) 1.5s"`  

   我们可以采用`line_format`和`regex`解析器来操作,如下语句  

   `{job="cortex-ops/query-frontend"} | logfmt | line_format "{{.msg}}" | regexp "(?P<method>\\w+) (?P<path>[\\w|/]+) \\((?P<status>\\d+?)\\) (?P<duration>.*)"`  

   因为`line_format`会将日志记录变更为`POST /api/prom/api/v1/query_range (200) 1.5s`, 后续的`regex`分组部分就能匹配了



