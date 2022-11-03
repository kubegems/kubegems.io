"use strict";(self.webpackChunkkubegems_docs=self.webpackChunkkubegems_docs||[]).push([[7488],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return g}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),g=a,d=m["".concat(s,".").concat(g)]||m[g]||u[g]||i;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},21402:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={title:"\u65e5\u5fd7\u67e5\u8be2",hide_title:!0,sidebar_position:2},s=void 0,p={unversionedId:"tasks/observability/logging/query",id:"tasks/observability/logging/query",title:"\u65e5\u5fd7\u67e5\u8be2",description:"\u65e5\u5fd7\u67e5\u8be2",source:"@site/docs/tasks/observability/logging/query.md",sourceDirName:"tasks/observability/logging",slug:"/tasks/observability/logging/query",permalink:"/docs/tasks/observability/logging/query",editUrl:"https://github.com/kubegems/kubegems.io/edit/main/docs/tasks/observability/logging/query.md",tags:[],version:"current",lastUpdatedBy:"sunlintong",lastUpdatedAt:1657781194,formattedLastUpdatedAt:"2022/7/14",sidebarPosition:2,frontMatter:{title:"\u65e5\u5fd7\u67e5\u8be2",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u65e5\u5fd7\u91c7\u96c6",permalink:"/docs/tasks/observability/logging/scraper"},next:{title:"\u65e5\u5fd7\u544a\u8b66",permalink:"/docs/tasks/observability/logging/alert"}},c={},u=[{value:"\u65e5\u5fd7\u67e5\u8be2",id:"\u65e5\u5fd7\u67e5\u8be2",level:2},{value:"\u65e5\u5fd7\u67e5\u8be2\u5668",id:"\u65e5\u5fd7\u67e5\u8be2\u5668",level:3}],m={toc:u};function g(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u65e5\u5fd7\u67e5\u8be2"},"\u65e5\u5fd7\u67e5\u8be2"),(0,i.kt)("p",null,"\u67e5\u8be2\u91c7\u96c6\u5230\u7684\u5bb9\u5668\u65e5\u5fd7\uff0c\u652f\u6301\u9879\u76ee-\u73af\u5883\u3001\u65f6\u95f4\u7b5b\u9009\u53ca\u9488\u5bf9\u65e5\u5fd7\u5185\u5bb9\u7684\u6b63\u5219\u5339\u914d\u3002"),(0,i.kt)("h3",{id:"\u65e5\u5fd7\u67e5\u8be2\u5668"},"\u65e5\u5fd7\u67e5\u8be2\u5668"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u70b9\u51fb\u5de6\u4e0a\u89d2\uff0c\u9009\u62e9",(0,i.kt)("strong",{parentName:"p"},"\u53ef\u89c2\u6d4b\u6027"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728\u53ef\u89c2\u6d4b\u6027\u680f\u76ee\uff0c\u9009\u62e9",(0,i.kt)("strong",{parentName:"p"},"\u67e5\u8be2\u5668-\u65e5\u5fd7\u67e5\u8be2\u5668"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u9009\u62e9\u5bf9\u5e94\u7684\u9879\u76ee-\u73af\u5883\u540e\uff0c\u70b9\u51fb",(0,i.kt)("strong",{parentName:"p"},"\u8fd0\u884c"),"\n",(0,i.kt)("img",{src:r(63990).Z,width:"1920",height:"961"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u9009\u62e9\u6807\u7b7e\n\u6807\u7b7e\u89e3\u91ca\uff1a"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"app: pod\u7684app label"),(0,i.kt)("li",{parentName:"ul"},"pod: pod\u540d"),(0,i.kt)("li",{parentName:"ul"},"container\uff1a\u5bb9\u5668\u540d"),(0,i.kt)("li",{parentName:"ul"},"stream\uff1a\u65e5\u5fd7\u6d41\u7c7b\u578b\uff0c\u5206\u4e3astdout\u548cstderr"),(0,i.kt)("li",{parentName:"ul"},"node: pod\u6240\u5728\u8282\u70b9"),(0,i.kt)("li",{parentName:"ul"},"image: \u5bb9\u5668\u955c\u50cf\u540d")),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"\u8f93\u5165\u5411\u67e5\u8be2\u7684\u65e5\u5fd7\u5185\u5bb9\n\u65e5\u5fd7\u5185\u5bb9\u652f\u6301\u6b63\u5219\u8868\u8fbe\u5f0f")),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(508).Z,width:"1721",height:"362"})),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u9ad8\u7ea7\u67e5\u8be2\n\u4e5f\u5c31\u662f\u76f4\u63a5\u4f7f\u7528logql\u67e5\u8be2\uff0clogql \u8bed\u6cd5\u53c2\u89c1 ",(0,i.kt)("a",{parentName:"p",href:"https://grafana.com/docs/loki/latest/logql"},"https://grafana.com/docs/loki/latest/logql"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4fdd\u5b58\u4e0e\u4f7f\u7528\u67e5\u8be2\u5386\u53f2\n\u67e5\u8be2\u51fa\u7ed3\u679c\u540e\u53ef\u4ee5\u4fdd\u5b58\u5f53\u524d\u67e5\u8be2\u53c2\u6570\uff0c\u7136\u540e\u5728 ",(0,i.kt)("strong",{parentName:"p"},"\u5386\u53f2")," \u5904\u9009\u62e9\u3002"))),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(10339).Z,width:"1914",height:"447"})),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u65e5\u5fd7\u4e0a\u4e0b\u6587\n\u67e5\u8be2\u51fa\u7ed3\u679c\u540e\uff0c\u53ef\u4ee5\u5728\u6bcf\u6761\u65e5\u5fd7\u5904\u70b9\u51fb ",(0,i.kt)("strong",{parentName:"p"},"\u663e\u793a\u4e0a\u4e0b\u6587")," \u4ee5\u67e5\u770b\u8be5\u6761\u65e5\u5fd7\u7684\u4e0a\u4e0b\u6587\u65e5\u5fd7\u3002\n",(0,i.kt)("img",{src:r(2545).Z,width:"1913",height:"410"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4e0e\u76d1\u63a7\u8054\u52a8\n\u5728\u6bcf\u6761\u65e5\u5fd7\u5904\uff0c\u53ef\u4ee5\u70b9\u51fb\u5982\u4e0b\u56fe\u6807\uff0c\u4ee5\u67e5\u8be2\u8be5\u884c\u65e5\u5fd7\u65f6\u95f4\u70b9\u7684\u8be5\u65e5\u81f3\u7684\u6e90\u5bb9\u5668\u7684CPU\u3001\u5185\u5b58\u3001\u7f51\u7edc\u6307\u6807\u3002\n\u901a\u8fc7\u65e5\u5fd7\u76d1\u63a7\u8054\u52a8\u67e5\u8be2\uff0c\u4ee5\u4fbf\u66f4\u597d\u5730\u5206\u6790\u4e1a\u52a1\u8fd0\u884c\u72b6\u6001\u3002\n",(0,i.kt)("img",{src:r(73636).Z,width:"1920",height:"961"})))))}g.isMDXComponent=!0},2545:function(e,t,r){t.Z=r.p+"assets/images/context-9ede1be29b9030a835ee0d030329e278.jpg"},10339:function(e,t,r){t.Z=r.p+"assets/images/history-b7d3657484240816439f08e3ca17be34.jpg"},73636:function(e,t,r){t.Z=r.p+"assets/images/metric-6a466e42313e285940bef198112a1f02.jpg"},508:function(e,t,r){t.Z=r.p+"assets/images/query-label-f79eb8f48ff41151748da34dd731a8fe.jpg"},63990:function(e,t,r){t.Z=r.p+"assets/images/query-0e8a42e92e177e93fac03e5de442191a.jpg"}}]);