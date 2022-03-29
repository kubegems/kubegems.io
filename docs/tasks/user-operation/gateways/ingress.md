---
title: 服务路由
hide_title: true
sidebar_position: 2
# description: 本文用于指导用户在KubeGems快速使用，并对Kubernetes相关的资源进行操作
# keywords: [kubegems,KubeGems,kubernetes]
---

## 服务路由

Kubegems 针对租户网关功能，提供了相对便捷的ingress服务路由功能

### 绑定路由网关

选择当前租户下已创建的网关，将该路由规则与其绑定, 当然，也可以选择默认网关。
路由的`spec.ingressClassName` 与网关的`spec.ingressClass`相同，即为绑定

### 路由规则

一条路由可配置多条路由规则，路由规则支持便捷配置以下5种协议:

| 协议  | 是否需要绑定密钥 | 对应的注解                                         |
| :---- | ---------------- | :------------------------------------------------- |
| http  | x                |
| https | √                |
| ws    | x                | `nginx.org/websocket-services: service1, service2` |
| wss   | √                | `nginx.org/websocket-services: service1, service2` |
| grpc  | √                | `nginx.org/grpc-services: service1, service2`      |

:::tip

你可以在 **[配置中心-密钥](/docs/tasks/user-operation/workerloads/config)** 模块创建密钥

:::


### 路由注解

支持以`key-value`形式配置注解，注解会作为`annotations`配置在`ingress`资源上。

Ingress 资源仅允许您使用基本的 NGINX 功能——基于主机和路径的路由以及 TLS 终止。因此，重写请求 URI 或插入附加响应标头等高级功能不可用。

除了使用高级功能外，通常还需要自定义或微调 NGINX 行为。例如，设置连接超时值。

应用于 Ingress 资源的注释允许您使用高级 NGINX 功能并为该 Ingress 资源自定义/微调 NGINX 行为。

:::tip

路由中配置的注解优先级**高于**网关中的注解，另外，根据你选择的协议，会自动在这里生成对应的注解

:::

支持的配置项参见文档: 

<https://docs.nginx.com/nginx-ingress-controller/configuration/ingress-resources/advanced-configuration-with-annotations>

