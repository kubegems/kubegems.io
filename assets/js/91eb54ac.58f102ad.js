"use strict";(self.webpackChunkkubegems_docs=self.webpackChunkkubegems_docs||[]).push([[3994],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=i,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27079:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],s={title:"\u591a\u79df\u6237\u4e0e\u591a\u96c6\u7fa4\u8d44\u6e90\u8bbe\u8ba1",hide_title:!0,sidebar_position:1,description:"KubeGems \u591a\u79df\u6237\u591a\u79df\u6237\u4e0b\u7684\u8ba1\u7b97\u8d44\u6e90\u914d\u989d\u8bbe\u8ba1"},u=void 0,l={unversionedId:"expand/design/multi-tenancy",id:"expand/design/multi-tenancy",title:"\u591a\u79df\u6237\u4e0e\u591a\u96c6\u7fa4\u8d44\u6e90\u8bbe\u8ba1",description:"KubeGems \u591a\u79df\u6237\u591a\u79df\u6237\u4e0b\u7684\u8ba1\u7b97\u8d44\u6e90\u914d\u989d\u8bbe\u8ba1",source:"@site/docs/expand/design/multi-tenancy.md",sourceDirName:"expand/design",slug:"/expand/design/multi-tenancy",permalink:"/docs/expand/design/multi-tenancy",editUrl:"https://github.com/kubegems/kubegems.io/edit/main/docs/expand/design/multi-tenancy.md",tags:[],version:"current",lastUpdatedBy:"LinkMaq",lastUpdatedAt:1666867312,formattedLastUpdatedAt:"2022/10/27",sidebarPosition:1,frontMatter:{title:"\u591a\u79df\u6237\u4e0e\u591a\u96c6\u7fa4\u8d44\u6e90\u8bbe\u8ba1",hide_title:!0,sidebar_position:1,description:"KubeGems \u591a\u79df\u6237\u591a\u79df\u6237\u4e0b\u7684\u8ba1\u7b97\u8d44\u6e90\u914d\u989d\u8bbe\u8ba1"},sidebar:"tutorialSidebar",previous:{title:"Design",permalink:"/docs/category/design"},next:{title:"\u5e94\u7528\u90e8\u7f72\u8bbe\u8ba1",permalink:"/docs/expand/design/apps"}},c={},p=[{value:"\u591a\u96c6\u7fa4\u7ba1\u7406",id:"\u591a\u96c6\u7fa4\u7ba1\u7406",level:2},{value:"\u591a\u79df\u6237\u7ba1\u7406",id:"\u591a\u79df\u6237\u7ba1\u7406",level:2},{value:"CostomResourceDefinition",id:"costomresourcedefinition",level:3},{value:"\u8ba1\u7b97\u8d44\u6e90\u7ba1\u7406",id:"\u8ba1\u7b97\u8d44\u6e90\u7ba1\u7406",level:3},{value:"\u8ba1\u7b97\u8d44\u6e90\u8bbe\u8ba1",id:"\u8ba1\u7b97\u8d44\u6e90\u8bbe\u8ba1",level:3},{value:"\u7f51\u7edc\u9694\u79bb",id:"\u7f51\u7edc\u9694\u79bb",level:3}],m={toc:p};function d(e){var t=e.components,s=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u591a\u96c6\u7fa4\u7ba1\u7406"},"\u591a\u96c6\u7fa4\u7ba1\u7406"),(0,a.kt)("p",null,"KubeGems \u652f\u6301\u5bf9\u63a5\u591a\u5957 Kubernetes \u96c6\u7fa4\uff0c\u5e76\u53ef\u4ee5\u901a\u8fc7\u81ea\u8eab Operator \u5b8c\u6210\u96c6\u7fa4\u7684\u5b89\u88c5\u4efb\u52a1\uff0c\u65e0\u8bba\u60a8\u662f\u91c7\u7528\u88f8\u91d1\u5c5e\u90e8\u7f72\u7684Kubernetes\uff0c\u8fd8\u662f\u7531\u516c\u6709\u4e91\u5382\u5bb6\u6258\u7ba1\u7684Kubernetes\uff0c\u5b83\u4eec\u90fd\u80fd\u8fd0\u884c Agent \u670d\u52a1\u5e76\u63a5\u5165\u5230\u4e2d\u5fc3\u96c6\u7fa4\u8fdb\u884c\u7ba1\u7406\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(62561).Z,width:"2254",height:"1146"})),(0,a.kt)("h2",{id:"\u591a\u79df\u6237\u7ba1\u7406"},"\u591a\u79df\u6237\u7ba1\u7406"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"costomresourcedefinition"},"CostomResourceDefinition"),(0,a.kt)("p",null,"KubeGems\u901a\u8fc7\u81ea\u5b9a\u4e49 ",(0,a.kt)("strong",{parentName:"p"},"CRD(Custom Resource Definitions)")," \u5c06\u6237\u8d44\u6e90\u62bd\u8c61\u4e3a5\u4e2a\u7c7b\u578b\u8fdb\u884c\u7edf\u4e00\u7ba1\u7406\uff0c\u5206\u522b\u662f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Tenant \uff08\u79df\u6237\uff09")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Enviroments \uff08\u73af\u5883\uff09")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"TenantResourceQuotas \uff08\u8d44\u6e90\uff09")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"TenantGateways \uff08\u7f51\u5173\uff09")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"TenantNetworkPolicys \uff08\u7f51\u7edc\u7b56\u7565\uff09"))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(83954).Z,width:"1758",height:"1336"})),(0,a.kt)("p",null,"KubeGems\u7684\u79df\u6237\u63a7\u5236\u4e3b\u8981\u5728 Tenant \u548c Enviroments \u4e24\u4e2aCRD\u4e2d\u5b9e\u73b0\u7ba1\u7406\uff0c\u91cc\u9762\u5206\u522b\u5b9a\u4e49\u4e86\u79df\u6237\u4ee5\u53ca\u73af\u5883\uff08\u5305\u542b\u9879\u76ee\uff09\u7b49\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"\u4e0b\u56fe\u63cf\u8ff0\u4e86 KubeGems \u5e73\u53f0\u4e2d\u7684\u7a7a\u95f4\u4e0eKubernetes\u96c6\u7fa4\u4e4b\u95f4\u7684\u903b\u8f91\u5173\u7cfb\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(91834).Z,width:"912",height:"550"})),(0,a.kt)("h3",{id:"\u8ba1\u7b97\u8d44\u6e90\u7ba1\u7406"},"\u8ba1\u7b97\u8d44\u6e90\u7ba1\u7406"),(0,a.kt)("p",null,"KubeGems API \u670d\u52a1\u4e8e\u7ef4\u62a4\u4e86 Kubernetes \u96c6\u7fa4\u8d44\u6e90\u7684\u4f7f\u7528\u7edf\u8ba1\u548c\u6ce8\u518c\u3002\u5f53 Kubernetes \u96c6\u7fa4\u5728 KubeGems \u5e73\u53f0\u4e0a\u6210\u529f\u5bfc\u5165\uff0cAgent \u4fbf\u4f1a\u88ab\u63a8\u9001\u5230kubernetes\u96c6\u7fa4\u5185\u8fd0\u884c\uff0c\u5e76\u5c06\u96c6\u7fa4\u8d44\u6e90\u4e0a\u62a5\u7ed9 service\uff0c\u4ea4\u7531\u7528\u6237\u5728 KubeGems \u540e\u7aef\u8fdb\u884c\u8d44\u6e90\u7684\u5206\u914d"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(76801).Z,width:"1173",height:"469"})),(0,a.kt)("h3",{id:"\u8ba1\u7b97\u8d44\u6e90\u8bbe\u8ba1"},"\u8ba1\u7b97\u8d44\u6e90\u8bbe\u8ba1"),(0,a.kt)("p",null,"\u79df\u6237\u8d44\u6e90\u7ba1\u7406\u7531 KubeGems \u7684 TenantResourceQuotas \u7ba1\u7406\uff0c\u5b83\u5728 Kubernetes \u7684\u539f\u751f\u8d44\u6e90\u5bf9\u8c61 ResouceQuota \u548c LimitRange \u4e4b\u4e0a\u62bd\u8c61\u7684\u8d44\u6e90\u7528\u4e8e\u5bf9\u96c6\u7fa4\u5185\u7684\u79df\u6237\u8d44\u6e90\u8fdb\u884c\u63a7\u5236\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(28437).Z,width:"1224",height:"706"})),(0,a.kt)("p",null,"\u5f53\u7528\u6237\u5728 Kubernetes \u96c6\u7fa4\u5185\u7684\u547d\u540d\u7a7a\u95f4\u5185\u7684\u8d44\u6e90\u603b\u548c\u5927\u4e8e\u79df\u6237\u5206\u914d\u5230\u8be5\u96c6\u7fa4\u7684\u8d44\u6e90\u603b\u6570\u65f6\uff0c\u7528\u6237\u65e0\u6cd5\u518d\u901a\u8fc7\u8c03\u6574\u914d\u989d\u7684\u65b9\u5f0f\u5206\u914d\u8d44\u6e90\u3002\u6b64\u65f6\u9700\u8981\u8be5\u79df\u6237\u4e0b\u7684\u7ba1\u7406\u5458\u63d0\u4ea4\u8d44\u6e90\u7533\u8bf7\u5de5\u5355\u7ed9\u5e73\u53f0\u7ba1\u7406\u5458\u8fdb\u884c\u7533\u8bf7\u3002\u5f53\u7ba1\u7406\u5458\u6279\u51c6\u8d44\u6e90\u7533\u8bf7\u540e\uff0c\u65b0\u7684\u96c6\u7fa4\u79df\u6237\u8d44\u6e90(TenantResourceQuotas)\u7684\u64cd\u4f5c\u4f1a\u7531 KubeGems API \u670d\u52a1 \u4e0b\u53d1\u5230 Kubernetes \u96c6\u7fa4\uff0c\u5e76\u7531 KubeGems Controller \u670d\u52a1\u8fdb\u884c\u8d44\u6e90\u6821\u9a8c\u548c\u63a7\u5236\u3002"),(0,a.kt)("h3",{id:"\u7f51\u7edc\u9694\u79bb"},"\u7f51\u7edc\u9694\u79bb"),(0,a.kt)("p",null,"KubeGems\u5b9a\u4e49\u4e86\u79df\u6237\u7ea7\u522b\u7684CRD\u5bf9\u8c61 TenantNetworkPolicys \uff0c\u6b64\u5bf9\u8c61",(0,a.kt)("strong",{parentName:"p"},"\u5b9a\u4e49\u7684\u7f51\u7edc\u9694\u79bb\u8303\u56f4\u548c\u7f51\u7edc\u9694\u79bb\u7684\u7b56\u7565"),"\uff0cKubeGems\u53ef\u4ee5\u63a7\u5236\u96c6\u7fa4\u5185 NetworkPolicy \u4ee5\u5b9e\u73b0\u5185\u90e8\u79df\u6237\u3001\u9879\u76ee\u548c\u73af\u5883\u7ea7\u522b\u7684\u7f51\u7edc\u9694\u79bb\u3002"),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"KubeGems v1.20.0 \u7248\u672c\u6682\u4e0d\u652f\u6301Pod\u7ea7\u522b\u7684\u7ec6\u7c92\u5ea6\u7f51\u7edc\u9694\u79bb\u7b56\u7565\u3002"))),(0,a.kt)("img",{src:n(85066).Z,alt:"Example banner",align:"center"}))}d.isMDXComponent=!0},85066:function(e,t,n){t.Z=n.p+"assets/images/tnetpol-fc736a1311f2cbef7f80e6ddbbae2976.jpg"},76801:function(e,t,n){t.Z=n.p+"assets/images/cluster-resources-2928a8677bfbff980f9ad90446a48a2c.jpg"},62561:function(e,t,n){t.Z=n.p+"assets/images/mutil-cluster-5374431bf4eff4d5cacf2b8e4d3169a6.jpg"},91834:function(e,t,n){t.Z=n.p+"assets/images/mutil-tenant-arch-92024676cb938ab2e8f69ae924917777.jpg"},83954:function(e,t,n){t.Z=n.p+"assets/images/tenantCrds-ff58ec037f200da0917fbc07d7295734.jpg"},28437:function(e,t,n){t.Z=n.p+"assets/images/tenantresources-d3c3d000ce36150972d689a7e5d8bcb2.jpg"}}]);