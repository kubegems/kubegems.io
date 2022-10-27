"use strict";(self.webpackChunkkubegems_docs=self.webpackChunkkubegems_docs||[]).push([[9022],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||l[m]||s;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<s;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},93173:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return l}});var n=r(87462),o=r(63366),s=(r(67294),r(3905)),i=["components"],a={title:"\u8ba1\u7b97\u8d44\u6e90\u7ba1\u7406",hide_title:!0,sidebar_position:3,description:"KubeGems \u4e0e Kubernetes \u591a\u96c6\u7fa4\u4e4b\u95f4\u7684\u8ba1\u7b97\u8d44\u6e90\u7ba1\u7406",keywords:["kubegems","KubeGems","kubernetes","resource"]},c=void 0,u={unversionedId:"quick-starts/concept/resources",id:"quick-starts/concept/resources",title:"\u8ba1\u7b97\u8d44\u6e90\u7ba1\u7406",description:"KubeGems \u4e0e Kubernetes \u591a\u96c6\u7fa4\u4e4b\u95f4\u7684\u8ba1\u7b97\u8d44\u6e90\u7ba1\u7406",source:"@site/docs/quick-starts/concept/resources.md",sourceDirName:"quick-starts/concept",slug:"/quick-starts/concept/resources",permalink:"/docs/quick-starts/concept/resources",editUrl:"https://github.com/kubegems/kubegems.io/edit/main/docs/quick-starts/concept/resources.md",tags:[],version:"current",lastUpdatedBy:"LinkMaq",lastUpdatedAt:1666867312,formattedLastUpdatedAt:"2022/10/27",sidebarPosition:3,frontMatter:{title:"\u8ba1\u7b97\u8d44\u6e90\u7ba1\u7406",hide_title:!0,sidebar_position:3,description:"KubeGems \u4e0e Kubernetes \u591a\u96c6\u7fa4\u4e4b\u95f4\u7684\u8ba1\u7b97\u8d44\u6e90\u7ba1\u7406",keywords:["kubegems","KubeGems","kubernetes","resource"]},sidebar:"tutorialSidebar",previous:{title:"\u7528\u6237\u89d2\u8272\u4e0e\u6743\u9650",permalink:"/docs/quick-starts/concept/roles"},next:{title:"\u5e73\u53f0\u8bbe\u7f6e",permalink:"/docs/category/\u5e73\u53f0\u8bbe\u7f6e"}},p={},l=[{value:"\u8ba1\u7b97\u8d44\u6e90\u7ba1\u7406",id:"\u8ba1\u7b97\u8d44\u6e90\u7ba1\u7406",level:2}],d={toc:l};function m(e){var t=e.components,a=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\u8ba1\u7b97\u8d44\u6e90\u7ba1\u7406"},"\u8ba1\u7b97\u8d44\u6e90\u7ba1\u7406"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"\u8ba1\u7b97\u8d44\u6e90\uff08Resource\uff09\u662f Kubernetes \u5185\u7ba1\u7406\u5e94\u7528\u8d44\u6e90\u7684\u6709\u6548\u624b\u6bb5\u3002\u5728 KubeGems \u4e2d\uff0c\u9488\u5bf9\u591a\u96c6\u7fa4\u3001\u591a\u79df\u6237\u7684\u573a\u666f\u4e0b\u5728 Kubernetes \u539f\u751f resourcequota \u4e0a\u91cd\u65b0\u8bbe\u8ba1\u4e86\u4e00\u4e2a\u9762\u5411\u79df\u6237\u8d44\u6e90\u7ba1\u7406\u7684\u5bf9\u8c61\uff0cTenantResourceQuota\u3002\u5229\u7528 Tquota\uff0c\u6211\u4eec\u80fd\u591f\u66f4\u597d\u7684\u89e3\u51b3\u79df\u6237\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u7684\u8d44\u6e90\u5206\u914d\u95ee\u9898\u3002"),(0,s.kt)("p",null,"\u7528\u4e00\u53e5\u8bdd\u6982\u62ec TenantResources\uff0c\u5373\u5b83\u7ba1\u7406\u4e86\u4e00\u4e2a\u79df\u6237\u5728\u4e00\u4e2a Kubernetes \u96c6\u7fa4\u4e0b\u7684\u8d44\u6e90\u4e0a\u7ebf\u3002"),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"\u79df\u6237\u521b\u5efa\u7684\u73af\u5883\u8d44\u6e90\uff08kubernetes resourcequota\uff09 \u5747\u4ece tenantresourcesquota \u4e2d\u7533\u8bf7\uff0c\u4e0a\u9650\u4e4b\u548c\u4e0d\u80fd\u8d85\u8fc7 tquota \u7684\u6700\u5927\u503c"))),(0,s.kt)("p",null,(0,s.kt)("img",{src:r(59269).Z,width:"1224",height:"706"})))}m.isMDXComponent=!0},59269:function(e,t,r){t.Z=r.p+"assets/images/tenantresources-d3c3d000ce36150972d689a7e5d8bcb2.jpg"}}]);