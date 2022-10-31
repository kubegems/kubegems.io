---
title: 本地构建和运行本站
hide_title: true
sidebar_position: 2
---

## 本地构建和运行本站

---

本站采用 [Docusaurus 2](https://docusaurus.io/) 构建，为确保您的变更是符合预期的。我们提供了相应的工具让您方便地构建和查看。在把修改的内容放在一个合并请求（PR）中提交之前，最好也应该在本地运行测试。

### 准备环境

KubeGems Docs采用Vuetify构建，在编写文档前，请先在本地准备一些基础环境：

- **NodeJS** &nbsp; &nbsp;&nbsp;   [Download v16.14.0+](https://nodejs.org/zh-cn/download/current/)

- **Yarn** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    [Download 1.22.11+](https://classic.yarnpkg.com/en/docs/install/)


### 构建运行本站

将 [kubegems.io](https://github.com/kubegems/kubegems.io) 仓库 fork 到自己名下,并将代码 clone 到本地

```bash
git clone git@github.com:<your_github_name>/kubegems.io.git
```

**安装依赖**

```bash
yarn install
```

**本地预览**

```bash
yarn start

yarn run v1.22.11
$ docusaurus start
[INFO] Starting the development server...
[SUCCESS] Docusaurus website is running at http://localhost:3000/.
```

您可以打开本地浏览器，通过访问`http://localhost:3000`来浏览本站内容。


### 提交文档

1. 在 Github 页面上将本仓库 fork 到自己名下

2. clone 仓库到本地

```
$ git clone https://github.com/<你的账号>/kubegems.io.git
```

3. 设置 remote repo

```
$ git remote add upstream https://github.com/kubegems/kubegems.io.git
```

4. 创建分支并开始更新文档

```
$ git branch <你的分支名称>
```

5. 提交更新的文档

```
$ git add <你的文档>

$ git commit -m '更新内容'
```

6. 提交 pr

```
$ git fetch upstream/main

$ git rebase -i upstream/main  --reapply-cherry-picks

$ git push origin <你的分支>
```

7. 登录 GitHub 提交 PR