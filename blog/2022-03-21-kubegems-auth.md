---
slug: kubegems-auth
title: 登陆和认证设计
authors: [pepesi]
tags: [登陆认证, kubegems]
---

## 登陆模块

### 需求

支持多源登陆(ldap, oauth2)

### 登陆设计

插件式设计，允许不同类型的登陆源实现登陆插件即可,插件目前分为两类,分别是`OAUTH`和`LDAP`

插件需要实现接口`aaa.AuthenticateIface`接口

    type AuthenticateIface interface {
        // 返回登陆插件的名字
        GetName() string
        // 返回登陆地址
        LoginAddr() string
        // , 获取用户信息
        // 验证凭据,获取根据用户提供的凭据获取用户信息
        GetUserInfo(ctx context.Context, cred *Credential) (*UserInfo, error)
    }

登陆流程:

1. LDAP类型和默认账号密码登陆,直接提供登陆的用户和密码以及登陆源即可,登陆后将获得token

2. OAUTH类型，先获取登陆地址，重定向到登陆地址，通常这个登陆地址为第三方平台的认证授权界面，授权后第三方将会重定向到平台配置的一个地址，并且携带着第三方平台的一个授权code,平台通过这个code获取access_token，再带着这个access_token访问用户信息，通过第三方平台中的`用户名`作为kubegems中的用户，登陆成功后获得token


### 认证设计

插件式设计，目前仅实现了基于JWT的认证方式; 需要实现接口`aaa.UserGetterIface`

    type UserGetterIface interface {
        GetUser(req *http.Request) (u user.CommonUserIface, exist bool)
    }

认证流程

不同的认证插件, 从请求头中获取需要的信息，例如通过Authorization头获取Bearer token,通过获取到的信息载入用户，如果没有找到用户，则表示未登陆