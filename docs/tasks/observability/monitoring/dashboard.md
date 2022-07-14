---
title: 监控大盘
hide_title: true
sidebar_position: 3
# description: 本文用于指导用户在KubeGems快速使用，并对Kubernetes相关的资源进行操作
# keywords: [kubegems,KubeGems,kubernetes]
---

## 监控大盘

此功能支持用户在环境下创建自定义的监控大盘，并支持保存，方便快速的查询出图，目前不能调整每个图表位置、大小，且只支持时序图。

### 创建监控大盘

1. 点击左上角，选择**可观测性**
2. 在可观测性栏目，选择**可视化-监控大盘**

![](./assets/dashboard.jpg) 

3. 在右上角菜单栏选择**创建监控大盘**
   
![](./assets/create-dashboard.jpg)

如图所示，你可以选择两种创建方式：
- 空的大盘: 你需要后续按自己需求逐个添加图表
- 从模板创建：使用内置的模板创建，目前提供两个模板：`容器基础指标监控`和`存储卷监控`

:::tip 
后续可能会添加更多的模板及更多的创建方式（比如从其他大盘创建），敬请期待 ^ _ ^
:::

4. 添加图表

![](./assets/add-graph.jpg)

你可以在此添加多个图表。

:::info
图表的字段内容与**[监控指标查询](/docs/tasks/observability/monitoring/query)**一致，此处不再赘述。
:::

