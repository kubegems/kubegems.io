---
title: 本地构建和运行本站
hide_title: true
sidebar_position: 2
---

## 本地构建和运行本站

---

在为本站做贡献之后，要确保变更是符合预期的。可以通过做本地预览来确保没问题，我们提供了相应的工具让您方便地构建和查看。在把修改的内容放在一个合并请求（PR）中提交之前，您也应该在本地运行测试。

### 准备环境

KubeGems Docs采用Vuetify构建，在编写文档前，请先在本地准备一些基础环境：

- **Nodejs   v15.14.0+** 

[点我下载](https://nodejs.org/zh-cn/download/current/)

- **yarn     1.22.11+**

[yarn安装](https://classic.yarnpkg.com/en/docs/install/)


### 构建运行本站

使用Git下载本站源码

```bash
mkdir kubegems_doc && cd kubegems_docs
git clone https://src.cloudminds.com/kubegems/docs.git
```

**安装依赖**

```bash
yarn install
```

**本地预览**

```bash
yarn serve


 DONE  Compiled successfully in 1352ms

  App running at:
  - Local:   http://localhost:8080/ 
  - Network: http://10.12.96.171:8080/
```

您可以打开本地浏览器，通过访问`http://localhost:8080`来浏览本站内容。
