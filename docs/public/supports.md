---
title: 版本支持
hide_title: true
sidebar_position: 3
---

## 版本支持

---
### Release: v2.1.0-beta
**2021/11/26**

- [FEATURE] 添加 gems-docs 服务 [installer-operator#11](https://src.cloudminds.com/gemscloud/installer-operator/-/issues/11)

- [FEATURE]增加 argocd rollout 安装 [installer-operator#23](https://src.cloudminds.com/gemscloud/installer-operator/-/issues/23) 

- [FEATURE] 应用商店添加 logging operator 安装[installer-operator#25](https://src.cloudminds.com/gemscloud/installer-operator/-/issues/25)

- [FEATURE]应用商店添加一个 bookinfo 的应用，用于演示微服务[middleware-charts#2](https://src.cloudminds.com/gemscloud/middleware-charts/-/issues/2) 

- [FEATURE] 应用商店添加 cmak(原kafka-manager) [middleware-charts#3](https://src.cloudminds.com/gemscloud/middleware-charts/-/issues/3)

- [FEATURE]添加 code-server 应用[middleware-charts#4](https://src.cloudminds.com/gemscloud/middleware-charts/-/issues/4) 

- [FEATURE]支持管理员默认密码与修改 [service#11](https://src.cloudminds.com/gemscloud/service/-/issues/11) 

- [FEATURE]微服务-istio gateway接口开发 [service#2](https://src.cloudminds.com/gemscloud/service/-/issues/2) 

- [FEATURE] 虚拟空间启用、禁用 [service#24](https://src.cloudminds.com/gemscloud/service/-/issues/24)

- [FEATURE] 增加网站的copyright [ui#78](https://src.cloudminds.com/gemscloud/ui/-/issues/78) 

- [FEATURE] istio网关实例监控-添加入站流量监控图表 [ui#79](https://src.cloudminds.com/gemscloud/ui/-/issues/79)

- [Enhancement] installer-opeator 部署独立在一个 namespace 下[installer-operator#10](https://src.cloudminds.com/gemscloud/installer-operator/-/issues/10) 

- [Enhancement]告警规则的expr尽量使用recording rule的gems promeql [installer-operator#16](https://src.cloudminds.com/gemscloud/installer-operator/-/issues/16) 

- [Enhancement]node-exporter不收集fuse文件系统指标 [installer-operator#26](https://src.cloudminds.com/gemscloud/installer-operator/-/issues/26) 

- [Enhancement]istio监控改为servicemonitor [installer-operator#27](https://src.cloudminds.com/gemscloud/installer-operator/-/issues/27) 

- [Enhancement]收集istio网关的入站流量 [installer-operator#28](https://src.cloudminds.com/gemscloud/installer-operator/-/issues/28) 

- [Enhancement]不采集无用envoy指标 [installer-operator#29](https://src.cloudminds.com/gemscloud/installer-operator/-/issues/29) 

- [Enhancement]部署时支持 gems-service 自定义配置 [installer-operator#4](https://src.cloudminds.com/gemscloud/installer-operator/-/issues/4) 

- [Enhancement]支持对接外部 prometheus [installer-operator#5](https://src.cloudminds.com/gemscloud/installer-operator/-/issues/5) 

- [Enhancement]支持 prometheus 自定义 Resource [installer-operator#6](https://src.cloudminds.com/gemscloud/installer-operator/-/issues/6) 

- [Enhancement]添加 kubectl 容器 [installer-operator#8](https://src.cloudminds.com/gemscloud/installer-operator/-/issues/8) 

- [Enhancement]支持对接外部 Loki 服务 [installer-operator#9](https://src.cloudminds.com/gemscloud/installer-operator/-/issues/9) 

- [Enhancement]worker优化，引入broker，添加异步队列 [service#1](https://src.cloudminds.com/gemscloud/service/-/issues/1) 

- [Enhancement]虚拟空间列表接口，按用户权限返回[service#18](https://src.cloudminds.com/gemscloud/service/-/issues/18) 

- [Enhancement] istio proxy与validation容器cpu内存limit太大导致环境resourcequota很快占满[service#43](https://src.cloudminds.com/gemscloud/service/-/issues/43)

- [Enhancement]stio gatewayCR是否允许不指定网关selector [service#44](https://src.cloudminds.com/gemscloud/service/-/issues/44) i

- [Enhancement]优化告警邮件主题[service#48](https://src.cloudminds.com/gemscloud/service/-/issues/48) 

- [Enhancement]日志时间范围在点击运行时,被重置为最近XXX时间范围 [ui#80](https://src.cloudminds.com/gemscloud/ui/-/issues/80) 

- [Enhancement]优化浏览器history[ui#81](https://src.cloudminds.com/gemscloud/ui/-/issues/81) 

- [Enhancement]优化在同一浏览器多个tab页上进行退出环境，项目等操作后，旧tab刷新出现相关storage 字段丢失的情况 [ui#82](https://src.cloudminds.com/gemscloud/ui/-/issues/82) 

- [BUGFIX]已存在默认stroageclass的情况下installer的local-path storageclass部署冲突 [installer-operator#1](https://src.cloudminds.com/gemscloud/installer-operator/-/issues/1) 

- [BUGFIX]alertmanager 部署未指定email模板 [installer-operator#12](https://src.cloudminds.com/gemscloud/installer-operator/-/issues/12) 

- [BUGFIX]提交/删除 scope 为 cluster 的资源存在潜在冲突[installer-operator#13](https://src.cloudminds.com/gemscloud/installer-operator/-/issues/13) 

- [BUGFIX]kube-dashboard 的 ingress 资源提交失败 [installer-operator#7](https://src.cloudminds.com/gemscloud/installer-operator/-/issues/7) 

- [BUGFIX]资源建议内存错误[service#33](https://src.cloudminds.com/gemscloud/service/-/issues/33) 

- [BUGFIX]应用中心内的平台应用做镜像发布后，镜像 tag 未更新进编排当中 [service#36](https://src.cloudminds.com/gemscloud/service/-/issues/36)

- [BUGFIX]租户网关报错：租户 0 不存在 [service#39](https://src.cloudminds.com/gemscloud/service/-/issues/39) 

- [BUGFIX]用户未读消息过多，导致查询缓慢，最终too many connections [service#40](https://src.cloudminds.com/gemscloud/service/-/issues/40) 

- [BUGFIX]环境资源使用清单平均值计算错误 [service#47](https://src.cloudminds.com/gemscloud/service/-/issues/47) 

- [BUGFIX]链路span数接口需要支持工作负载查询 [service#52](https://src.cloudminds.com/gemscloud/service/-/issues/52) 

- [BUGFIX] 应用商店部署失败 [service#53](https://src.cloudminds.com/gemscloud/service/-/issues/53)

- [BUGFIX]历史告警和监控图标时间不和 [ui#28](https://src.cloudminds.com/gemscloud/ui/-/issues/28) 

- [BUGFIX] istio gateway资源端口协议限制错误[ui#76](https://src.cloudminds.com/gemscloud/ui/-/issues/76) 

- [BUGFIX]日志标签过滤偶发性错乱显示 [ui#77](https://src.cloudminds.com/gemscloud/ui/-/issues/77) 

### Release: v2.0.1-beta9
**2021/11/5**
- [Feature] enable prometheus feature / remote-write-receiver [installer-operator#21](https://src.cloudminds.com/gemscloud/installer-operator/-/issues/21) [@link.ma](https://src.cloudminds.com/link.ma)

- [ENHANCEMENTS] 应用编排镜像部分form表单ui优化 [ui#53](https://src.cloudminds.com/gemscloud/ui/-/issues/53) [@leon.chen](https://src.cloudminds.com/leon.chen)
- [ENHANCEMENTS] 分页组件在只有一页的情况下点击首页不需要再进行数据获取 [ui#52](https://src.cloudminds.com/gemscloud/ui/-/issues/52) [@leon.chen](https://src.cloudminds.com/leon.chen)
- [ENHANCEMENTS] 删除不需要的prometheus指标及label [installer-operator#18](https://src.cloudminds.com/gemscloud/installer-operator/-/issues/18) [@lintong.sun](https://src.cloudminds.com/lintong.sun)

- [BUGFIX] 资源建议描述错误 [ui#51](https://src.cloudminds.com/gemscloud/ui/-/issues/51) [@xiaobing.song](https://src.cloudminds.com/xiaobing.song)
- [BUGFIX] 批量操作key重复导致勾选状态异常 [ui#48](https://src.cloudminds.com/gemscloud/ui/-/issues/48) [@xiaobing.song](https://src.cloudminds.com/xiaobing.song)
- [BUGFIX] node 节点master展示错误 [ui#47](https://src.cloudminds.com/gemscloud/ui/-/issues/47) [@leon.chen](https://src.cloudminds.com/leon.chen)
### Release: v2.0.1-beta8
**2021/10/30**

- [ENHANCEMENTS] 完善监控中心以及证书管理yaml基础jsonschema校验 [ui#43](https://src.cloudminds.com/gemscloud/ui/issues/43) [@xiaobing.song](https://src.cloudminds.com/xiaobing.song)
- [ENHANCEMENTS] 应用编排中错误的yaml文件导致表单渲染失败 [ui#39](https://src.cloudminds.com/gemscloud/ui/issues/39) [@leon.chen](https://src.cloudminds.com/leon.chen)
- [ENHANCEMENTS] 系统告警添加节点负载告警, related to ui#29 [installer-operator#14](https://src.cloudminds.com/gemscloud/installer-operator/issues/14) [@lintong.sun](https://src.cloudminds.com/lintong.sun)
- [ENHANCEMENTS] 精简同一组邮件告警的接收人对象 [service#21](https://src.cloudminds.com/gemscloud/service/issues/21) [@lintong.sun](https://src.cloudminds.com/lintong.sun)
- [ENHANCEMENTS] 监控中心-接收器支持配置多种类型 [ui#35](https://src.cloudminds.com/gemscloud/ui/issues/35) [@xiaobing.song](https://src.cloudminds.com/xiaobing.song)
- [ENHANCEMENTS] 全局命名空间过滤组件优化 [ui#32](https://src.cloudminds.com/gemscloud/ui/issues/32) [@leon.chen](https://src.cloudminds.com/leon.chen)

- [BUGFIX] worker exporter对apiserver请求过多 [service#29](https://src.cloudminds.com/gemscloud/service/issues/29) [@lintong.sun](https://src.cloudminds.com/lintong.sun)
- [BUGFIX] 告警规则：HostHighLoad5 无法展示实时及历史告警 [ui#45](https://src.cloudminds.com/gemscloud/ui/issues/45) [@xiaobing.song](https://src.cloudminds.com/xiaobing.song)
- [BUGFIX] 修改镜像仓库超时 [service#26](https://src.cloudminds.com/gemscloud/service/issues/26) [@lintong.sun](https://src.cloudminds.com/lintong.sun)
- [BUGFIX] 无法创建证书（添加不了域名） [ui#44](https://src.cloudminds.com/gemscloud/ui/issues/44) [@xiaobing.song](https://src.cloudminds.com/xiaobing.song)
- [BUGFIX] 审计刷新，时间没有随着最新的走 [ui#42](https://src.cloudminds.com/gemscloud/ui/issues/42) [@leon.chen](https://src.cloudminds.com/leon.chen)
- [BUGFIX] 有接口在失败时，没有记录租户值 [service#22](https://src.cloudminds.com/gemscloud/service/issues/22) [@lintong.sun](https://src.cloudminds.com/lintong.sun)
- [BUGFIX] 通用label组件修改label的key出现新增的情况 [ui#38](https://src.cloudminds.com/gemscloud/ui/issues/38) [@leon.chen](https://src.cloudminds.com/leon.chen)
- [BUGFIX] 告警消息有重复 [service#17](https://src.cloudminds.com/gemscloud/service/issues/17) [@lintong.sun](https://src.cloudminds.com/lintong.sun)
- [BUGFIX] 邮件告警模板名字调整为 kubegems [ui#34](https://src.cloudminds.com/gemscloud/ui/issues/34) [@xiaobing.song](https://src.cloudminds.com/xiaobing.song)
- [BUGFIX] 租户告警namespace隔离失效 [service#5](https://src.cloudminds.com/gemscloud/service/issues/5) [@lintong.sun](https://src.cloudminds.com/lintong.sun)

### Release: v2.0.1-beta7
**2021/10/23**

- [FEATURE] 设置默认的镜像仓库密钥. [ui#31](https://src.cloudminds.com/gemscloud/ui/issues/31)[service#10](https://src.cloudminds.com/gemscloud/service/issues/10)

- [ENHANCEMENT] 集群详情cpu，内存资源分配情况展示图表优化 [ui#24](https://src.cloudminds.com/gemscloud/ui/issues/24)

- [BUGFIX] 优化主机负载高ui颜色 [ui#29](https://src.cloudminds.com/gemscloud/ui/issues/29)
- [BUGFIX] 修复当前租户下查看项目可过滤其他租户下的项目 [ui#30](https://src.cloudminds.com/gemscloud/ui/issues/30)
- [BUGFIX] 修复工作负载的编排容器的端口信息无法保存bug [ui#26](https://src.cloudminds.com/gemscloud/ui/issues/26)
- [BUGFIX] 取消后端service版本的缓存数据 [ui#25](https://src.cloudminds.com/gemscloud/ui/issues/25)
- [BUGFIX] 告警触发值默认保留一位小数 [service#16](https://src.cloudminds.com/gemscloud/service/issues/16)
- [BUGFIX] 存储卷创建快照报错”unknown reeson“ [#service#14](https://src.cloudminds.com/gemscloud/service/issues/14)
- [BUGFIX] 缺失kubelet servicemonitor [installer-operator#3](https://src.cloudminds.com/gemscloud/installer-operator/issues/3)

### Release: v2.0.1-beta6

**2021/10/15**

- [FEATURE] 支持告警历史查询. [gemscloud/service#9](https://src.cloudminds.com/gemscloud/service/issues/9)
- [FEATURE] 前端增加管理员改密入口 [gemscloud/ui#23](https://src.cloudminds.com/gemscloud/ui/issues/23)

- [ENHANCEMENT] service mysql数据库优化相关问题. [gemscloud/service#6](https://src.cloudminds.com/gemscloud/service/issues/6)
- [ENHANCEMENT] 告警历史添加一列“结束时间” [gemscloud/ui#16](https://src.cloudminds.com/gemscloud/ui/issues/16)
- [ENHANCEMENT] 监控中心/告警 增加历史告警列表 [gemscloud/ui#7](https://src.cloudminds.com/gemscloud/ui/issues/7)
- [ENHANCEMENT] 项目添加租户过滤 [gemscloud/ui#21](https://src.cloudminds.com/gemscloud/ui/issues/21)
- [ENHANCEMENT] 容器终端断开连接提示 [gemscloud/ui#15](https://src.cloudminds.com/gemscloud/ui/issues/15)
- [ENHANCEMENT] 集群事件查询列出具体时间 [gemscloud/ui#14](https://src.cloudminds.com/gemscloud/ui/issues/14)
- [ENHANCEMENT] 用户成员添加搜索功能 [gemscloud/ui#8](https://src.cloudminds.com/gemscloud/ui/issues/8)

- [BUGFIX] migrate init-data 选项丢失. [gemscloud/service#12](https://src.cloudminds.com/gemscloud/service/issues/12)
- [BUGFIX] 消息太多时，join查询太慢导致前端无法加载. [gemscloud/service#8](https://src.cloudminds.com/gemscloud/service/issues/8)
- [BUGFIX] 消息过多，导致数据库Too many connections.[gemscloud/service#7](https://src.cloudminds.com/gemscloud/service/issues/7)
- [BUGFIX] 更正消息导出格式. [gemscloud/service#3](https://src.cloudminds.com/gemscloud/service/issues/3)
- [BUGFIX] 添加 charts 仓库报错 [gemscloud/ui#22](https://src.cloudminds.com/gemscloud/ui/issues/22)
- [BUGFIX] 偶现浏览器字体图标乱码 [gemscloud/ui#5](https://src.cloudminds.com/gemscloud/ui/issues/5)
- [BUGFIX] 无法列出租户下所有环境 [gemscloud/ui#20](https://src.cloudminds.com/gemscloud/ui/issues/20)
- [BUGFIX] 应用编排服务ClusterIP为空时报错 [gemscloud/ui#18](https://src.cloudminds.com/gemscloud/ui/issues/18)
- [BUGFIX] 应用编排页面健康检查端口点击修改按钮，页面无反应 [gemscloud/ui#17](https://src.cloudminds.com/gemscloud/ui/issues/17)
- [BUGFIX] 日志中心标签无法二次筛选 [gemscloud/ui#11](https://src.cloudminds.com/gemscloud/ui/issues/11)
- [BUGFIX] 资源监控单位换算不一致 [gemscloud/ui#3](https://src.cloudminds.com/gemscloud/ui/issues/3)
- [BUGFIX] 应用编排diff超出宽度无法进行滚动查看 [gemscloud/ui#9](https://src.cloudminds.com/gemscloud/ui/issues/9)
- [BUGFIX] 告警消息跳转之后再次点击其他告警页面未进行跳转更新 [gemscloud/ui#4](https://src.cloudminds.com/gemscloud/ui/issues/4)
- [BUGFIX] 租户工作台页面集群资源分配显示有误，应显示已分配，不是已使用 [gemscloud/ui#1](https://src.cloudminds.com/gemscloud/ui/issues/1)
- [BUGFIX] 排序重复刷新 [gemscloud/ui#2](https://src.cloudminds.com/gemscloud/ui/issues/2)

- [DOCS] 存储文案调整 [gemscloud/ui#19](https://src.cloudminds.com/gemscloud/ui/issues/19)

<backmatter />