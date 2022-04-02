---
title: 设置三方用户系统
hide_title: true
sidebar_position: 3
# description: 本文用于指导用户在KubeGems快速使用，并对Kubernetes相关的资源进行操作
# keywords: [kubegems,KubeGems,kubernetes]
---

## 设置三方用户系统

### 概述

---

本文将对 KubeGems 与第三方用户认证系统进行对接的文档进行指导和说明。

### 与 OpenLdap 对接

kubegems 提供了ldap和oauth两大类的用户接入方式，由系统管理员负责配置；

+ ldap

![ldap配置](/img/docs/tasks-platform-ldap-create.png)

字段说明

|字段|说明|备注|
| ---| ---| ---|
|ldap地址|ldap host| 必填项, 格式满足 ip:port 或者 ldap://host:port ldapi://host:port/xx |
|basedn|ldap basedn| 必填项，用户的basedn |
|username|ldap bind user| 必填项，binduser,需要填写完整dn |
|password|ldap bind password| 必填项，bind password |
|开启tls|是否使用tls| 默认系统会忽略证书验证 |

### 与 Github 对接

![oauth2配置](/img/docs/tasks-platform-oauth-create.png)

字段说明

|字段|说明|备注|
| ---| ---| ---|
|redirectURL|oauth2 重定向到本地服务的地址|这个字段通常由系统自动生成，需要在oauth provider中填写，且必须一致|
|authURL|oauth2 的用户登陆地址| 必填项，系统内置的gitlab和github，不需要填写 |
|tokenURL|oauth2 获取access_token的地址| 必填项, 系统内置的gitlab和github，不需要填写  |
|userInfoURL|获取用户信息的地址| 必填项，response中必须有username或者name，不然登陆失败 |
|applicationID|oauth2 provider application id| 必填项 |
|secret|oauth2 provider application secret| 必填项 |
|scope|oauth2 获取数据的scope | 如果权限不足，可能读取不到对应的数据 |

### 与 Gitlab 对接

### 与私有支持 Oauth 系统对接


