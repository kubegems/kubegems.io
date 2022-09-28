"use strict";(self.webpackChunkkubegems_docs=self.webpackChunkkubegems_docs||[]).push([[5043],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),o=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=o(n),c=r,d=s["".concat(u,".").concat(c)]||s[c]||k[c]||l;return n?a.createElement(d,i(i({ref:t},m),{},{components:n})):a.createElement(d,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},14260:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return k}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],p={slug:"kubegems-auth",title:"KubeGems \u7528\u6237\u8ba4\u8bc1\u548c\u767b\u5f55\u8bbe\u8ba1",authors:["pepesi"],tags:["\u767b\u9646\u8ba4\u8bc1","Auth"]},u=void 0,o={permalink:"/blog/kubegems-auth",source:"@site/blog/kubegems-perms/2022-03-21-kubegems-auth.md",title:"KubeGems \u7528\u6237\u8ba4\u8bc1\u548c\u767b\u5f55\u8bbe\u8ba1",description:"\u4e3b\u8981\u6570\u636e\u6a21\u578b",date:"2022-03-21T00:00:00.000Z",formattedDate:"2022\u5e743\u670821\u65e5",tags:[{label:"\u767b\u9646\u8ba4\u8bc1",permalink:"/blog/tags/\u767b\u9646\u8ba4\u8bc1"},{label:"Auth",permalink:"/blog/tags/auth"}],readingTime:6.435,truncated:!1,authors:[{name:"yud",title:"developer@kubegems.io",url:"https://github.com/pepesi",imageURL:"https://github.com/pepesi.png",key:"pepesi"}],frontMatter:{slug:"kubegems-auth",title:"KubeGems \u7528\u6237\u8ba4\u8bc1\u548c\u767b\u5f55\u8bbe\u8ba1",authors:["pepesi"],tags:["\u767b\u9646\u8ba4\u8bc1","Auth"]},prevItem:{title:"KubeGems \u4e2d\u7684\u65e5\u5fd7\u8bbe\u8ba1",permalink:"/blog/kubegems-logging"}},m={authorsImageUrls:[void 0]},k=[{value:"\u4e3b\u8981\u6570\u636e\u6a21\u578b",id:"\u4e3b\u8981\u6570\u636e\u6a21\u578b",level:2},{value:"\u7528\u6237\u6743\u9650",id:"\u7528\u6237\u6743\u9650",level:2},{value:"\u7cfb\u7edf\u7ea7\u89d2\u8272",id:"\u7cfb\u7edf\u7ea7\u89d2\u8272",level:3},{value:"\u79df\u6237\u7ea7\u89d2\u8272",id:"\u79df\u6237\u7ea7\u89d2\u8272",level:3},{value:"\u9879\u76ee\u7ea7\u89d2\u8272",id:"\u9879\u76ee\u7ea7\u89d2\u8272",level:3},{value:"\u73af\u5883\u7ea7\u89d2\u8272",id:"\u73af\u5883\u7ea7\u89d2\u8272",level:3},{value:"\u767b\u9646\u6a21\u5757",id:"\u767b\u9646\u6a21\u5757",level:2},{value:"\u9700\u6c42",id:"\u9700\u6c42",level:3},{value:"\u767b\u9646\u8bbe\u8ba1",id:"\u767b\u9646\u8bbe\u8ba1",level:3},{value:"\u8ba4\u8bc1\u8bbe\u8ba1",id:"\u8ba4\u8bc1\u8bbe\u8ba1",level:3},{value:"\u8ba4\u8bc1\u6d41\u7a0b",id:"\u8ba4\u8bc1\u6d41\u7a0b",level:3}],s={toc:k};function c(e){var t=e.components,p=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,p,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4e3b\u8981\u6570\u636e\u6a21\u578b"},"\u4e3b\u8981\u6570\u636e\u6a21\u578b"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"pic",src:n(2795).Z,width:"1131",height:"571"})),(0,l.kt)("p",null,"\u6570\u636e\u6a21\u578b\u7684\u4e3b\u8981\u5c42\u7ea7\u5173\u7cfb\u4e3a \u79df\u6237 -> \u9879\u76ee -> \u73af\u5883 -> \u5e94\u7528;"),(0,l.kt)("p",null,"\u5bf9\u5e94\u5230\u96c6\u7fa4\u4e2d\u7684\u4ee5\u4e0b\u8d44\u6e90"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u8d44\u6e90"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7b80\u5199"),(0,l.kt)("th",{parentName:"tr",align:null},"group/version"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u662fnamespaced\u8d44\u6e90"),(0,l.kt)("th",{parentName:"tr",align:null},"Crd"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"environments"),(0,l.kt)("td",{parentName:"tr",align:null},"tenv"),(0,l.kt)("td",{parentName:"tr",align:null},"gems.kubegems.io/v1beta1"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Environment")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tenantgateways"),(0,l.kt)("td",{parentName:"tr",align:null},"tgw"),(0,l.kt)("td",{parentName:"tr",align:null},"gems.kubegems.io/v1beta1"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"TenantGateway")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tenantnetworkpolicies"),(0,l.kt)("td",{parentName:"tr",align:null},"tnetpol"),(0,l.kt)("td",{parentName:"tr",align:null},"gems.kubegems.io/v1beta1"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"TenantNetworkPolicy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tenantresourcequotas"),(0,l.kt)("td",{parentName:"tr",align:null},"tquota"),(0,l.kt)("td",{parentName:"tr",align:null},"gems.kubegems.io/v1beta1"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"TenantResourceQuota")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tenants"),(0,l.kt)("td",{parentName:"tr",align:null},"ten"),(0,l.kt)("td",{parentName:"tr",align:null},"gems.kubegems.io/v1beta1"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Tenant")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u5185\u9876\u7ea7\u8d44\u6e90\u4e3a\u79df\u6237\u548c\u96c6\u7fa4,  \u79df\u6237\u548c\u96c6\u7fa4\u90fd\u7531\u7cfb\u7edf\u7ba1\u7406\u5458\u6dfb\u52a0\uff1b\u79df\u6237\u4e0e\u96c6\u7fa4\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"li"},"TenantResourceQuota"),"\u5173\u8054\uff0c\u4e00\u4e2a\u79df\u6237\u5728\u4e00\u4e2a\u96c6\u7fa4\u4e0b\u53ea\u80fd\u5b58\u5728\u4e00\u4e2aTenantResourceQuota;\n\u79df\u6237\u6620\u5c04\u5230\u96c6\u7fa4\u4e2d\u7684CRD\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"Tenant"),", \u79df\u6237CRD\u4e0b\u5b58\u5728",(0,l.kt)("inlineCode",{parentName:"li"},"\u7f51\u7edc\u9694\u79bb\u7b56\u7565(TenantNetworkPolicy)"),"\u548c",(0,l.kt)("inlineCode",{parentName:"li"},"\u8d44\u6e90\u9650\u5236(TenantResourceQuota)"),"\u4ee5\u53ca",(0,l.kt)("inlineCode",{parentName:"li"},"\u79df\u6237\u7f51\u5173(TenantGateway)"),", \u8fd9\u4e9b\u5b50\u8d44\u6e90\u90fd\u5c06\u5728\u79df\u6237crd\u521b\u5efa\u7684\u65f6\u5019\u9ed8\u8ba4\u521b\u5efa\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u7528\u6237(Users)\u4e0e\u79df\u6237\uff0c\u9879\u76ee\uff0c\u73af\u5883\u90fd\u5b58\u5728\u7740\u5173\u8054\u5173\u7cfb\uff0c\u8fd9\u4e9b\u5173\u8054\u5173\u7cfb\u5c06\u4e3a\u4ee5\u540e\u7684\u7528\u6237\u6743\u9650\u63d0\u4f9b\u6570\u636e\u652f\u6301\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u9879\u76ee\u4ec5\u4ec5\u662f\u5e73\u53f0\u4fa7\u7684\u6982\u5ff5\uff0c\u5b83\u8868\u793a\u4e00\u7ec4\u5e94\u7528\u7684\u96c6\u5408"),(0,l.kt)("li",{parentName:"ul"},"\u73af\u5883\u4e0e\u96c6\u7fa4\u7684namespace\u5173\u8054\uff0c\u5b9e\u73b0\u73af\u5883\u9694\u79bb\uff0c\u8d44\u6e90\u9650\u5236\uff0c\u7f51\u7edc\u9694\u79bb\u7b49\uff0c\u73af\u5883\u5219\u66f4\u591a\u7684\u662f\u8fd0\u7ef4\u76f8\u5173\u5c5e\u6027;"),(0,l.kt)("li",{parentName:"ul"},"\u5e94\u7528\u8868\u793a\u771f\u5b9e\u7684\u5e94\u7528")),(0,l.kt)("h2",{id:"\u7528\u6237\u6743\u9650"},"\u7528\u6237\u6743\u9650"),(0,l.kt)("p",null,"\u7cfb\u7edf\u7684\u7528\u6237\u6743\u9650\u4e3b\u8981\u901a\u8fc7",(0,l.kt)("strong",{parentName:"p"},"\u89d2\u8272"),"\u5b9e\u73b0, \u89d2\u8272\u53c8\u5206\u4e3a",(0,l.kt)("em",{parentName:"p"},"\u7cfb\u7edf\u7ea7\u89d2\u8272"),",",(0,l.kt)("em",{parentName:"p"},"\u79df\u6237\u7ea7\u89d2\u8272"),",",(0,l.kt)("em",{parentName:"p"},"\u9879\u76ee\u7ea7\u89d2\u8272"),"\u548c",(0,l.kt)("em",{parentName:"p"},"\u73af\u5883\u7ea7\u89d2\u8272"),";"),(0,l.kt)("h3",{id:"\u7cfb\u7edf\u7ea7\u89d2\u8272"},"\u7cfb\u7edf\u7ea7\u89d2\u8272"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u7cfb\u7edf\u7ba1\u7406\u5458"),"\u7684\u804c\u8d23\u662f\u7ba1\u7406\u7cfb\u7edf\u8d44\u6e90\uff0c\u96c6\u7fa4\uff0c\u96c6\u7fa4\u63d2\u4ef6\uff0c\u79df\u6237\u7b49; \u7cfb\u7edf\u7ba1\u7406\u5458\u62e5\u6709\u4e00\u5207\u8d44\u6e90\u7684\u64cd\u4f5c\u6743\u9650\u548c\u8bfb\u6743\u9650\n"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u666e\u901a\u7528\u6237"),"\u4ee3\u8868 KubeGems \u4e2d\u7684\u666e\u901a\u6210\u5458\uff0c\u7528\u666e\u901a\u7528\u6237\u89d2\u8272\u7684\u8d26\u53f7\u4ec5\u80fd\u767b\u9646\u7cfb\u7edf\uff0c\u5176\u4ed6\u79df\u6237\uff0c\u9879\u76ee\u7b49\u6743\u9650\u5c06\u6839\u636e\u79df\u6237\u548c\u9879\u76ee\u4e0b\u7684\u89d2\u8272\u5224\u65ad")),(0,l.kt)("h3",{id:"\u79df\u6237\u7ea7\u89d2\u8272"},"\u79df\u6237\u7ea7\u89d2\u8272"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u79df\u6237\u7ba1\u7406\u5458"),"\u7684\u4e3b\u8981\u804c\u8d23\u662f\u8d1f\u8d23\u79df\u6237\u7684\u6210\u5458\u7ba1\u7406\u548c\u9879\u76ee\u7ba1\u7406,\u8d1f\u8d23\u9879\u76ee\u6dfb\u52a0\u548c\u5220\u9664\uff0c\u79df\u6237\u6210\u5458\u7684\u6dfb\u52a0\u548c\u4fee\u6539; \u79df\u6237\u7ba1\u7406\u5458\u62e5\u6709\u79df\u6237\u4e0b\u7684\u4e00\u5207\u8d44\u6e90\u64cd\u4f5c\u6743\u9650\u548c\u8bfb\u6743\u9650")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u79df\u6237\u6210\u5458"),"\u9ed8\u8ba4\u4ec5\u53ef\u4ee5\u8bfb\u79df\u6237\u4e0b\u7684\u9879\u76ee\u4fe1\u606f; \u5728\u6dfb\u52a0",(0,l.kt)("inlineCode",{parentName:"p"},"\u9879\u76ee\u6210\u5458"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"\u73af\u5883\u6210\u5458"),"\u7684\u65f6\u5019\uff0c\u7528\u6237\u5fc5\u987b\u662f\u79df\u6237\u6210\u5458\u624d\u80fd\u4f5c\u4e3a\u9879\u76ee\u6210\u5458\u548c\u73af\u5883\u6210\u5458\u7684\u5907\u9009\u9879;"))),(0,l.kt)("h3",{id:"\u9879\u76ee\u7ea7\u89d2\u8272"},"\u9879\u76ee\u7ea7\u89d2\u8272"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u9879\u76ee\u7ba1\u7406\u5458"),"\u7684\u804c\u8d23\u662f\u8d1f\u8d23\u9879\u76ee\u7684\u6210\u5458\u7ba1\u7406\uff0c\u9879\u76ee\u7684\u73af\u5883\u7ba1\u7406\u548c\u9879\u76ee\u4e0b\u7684\u5e94\u7528\u7ba1\u7406; \u9879\u76ee\u7ba1\u7406\u5458\u62e5\u6709\u9879\u76ee\u4e0b\u7684\u4e00\u5207\u8d44\u6e90\u7684\u64cd\u4f5c\u6743\u9650\u548c\u8bfb\u6743\u9650;")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u9879\u76ee\u6210\u5458\u62e5\u6709\u4e09\u4e2a\u89d2\u8272\uff0c\u5206\u522b\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"\u5f00\u53d1")," ",(0,l.kt)("inlineCode",{parentName:"p"},"\u6d4b\u8bd5")," ",(0,l.kt)("inlineCode",{parentName:"p"},"\u8fd0\u7ef4")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u9879\u76ee\u5f00\u53d1\u6210\u5458"),"\u53ef\u4ee5\u8bfb\u6240\u6709\u73af\u5883\uff0c\u53ea\u80fd\u64cd\u4f5c\u5f00\u53d1\u7c7b\u578b\u7684\u73af\u5883"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u9879\u76ee\u6d4b\u8bd5\u6210\u5458"),"\u53ef\u4ee5\u8bfb\u6240\u6709\u73af\u5883\uff0c\u53ea\u80fd\u64cd\u4f5c\u6d4b\u8bd5\u7c7b\u578b\u7684\u73af\u5883"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u9879\u76ee\u8fd0\u7ef4\u6210\u5458"),"\u53ef\u4ee5\u8bfb\u6240\u6709\u73af\u5883\uff0c\u53ef\u4ee5\u64cd\u4f5c\u5f00\u53d1 \u6d4b\u8bd5 \u751f\u4ea7\u7c7b\u578b\u7684\u73af\u5883")))),(0,l.kt)("h3",{id:"\u73af\u5883\u7ea7\u89d2\u8272"},"\u73af\u5883\u7ea7\u89d2\u8272"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u73af\u5883reader"),"\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u9879\u76ee\u6210\u5458\u662f\u6240\u6709\u73af\u5883\u7684reader,\u5373\u53ea\u8981\u662f\u9879\u76ee\u6210\u5458\uff0c\u5c31\u80fd\u8bfb\u53d6\u6240\u6709\u7684\u73af\u5883\u6570\u636e")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u73af\u5883operator"),"\u901a\u5e38\u4e0d\u9700\u8981\u914d\u7f6e\u8fd9\u4e2a\u89d2\u8272\uff0c\u4f46\u662f\u6709\u7279\u6b8a\u7684\u60c5\u51b5\uff0c\u4f8b\u5982\u5f00\u53d1\u9700\u8981\u64cd\u4f5c\u751f\u4ea7\u73af\u5883\u7684\u8d44\u6e90\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5f00\u53d1\u4eba\u5458\u53ea\u80fd\u64cd\u4f5c\u5f00\u53d1\u73af\u5883\uff0c\u8fd9\u65f6\u5019\u6388\u6743\u5f00\u53d1\u4eba\u5458\u5728\u751f\u4ea7\u73af\u5883\u662foperator\u7684\u89d2\u8272\uff0c\u5c31\u53ef\u4ee5\u64cd\u4f5c\u751f\u4ea7\u73af\u5883\u4e86;"))),(0,l.kt)("h2",{id:"\u767b\u9646\u6a21\u5757"},"\u767b\u9646\u6a21\u5757"),(0,l.kt)("h3",{id:"\u9700\u6c42"},"\u9700\u6c42"),(0,l.kt)("p",null,"\u652f\u6301\u591a\u6e90\u767b\u9646(ldap, oauth2)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u672c\u5730\u8ba4\u8bc1\uff0c\u652f\u6301\u8d26\u53f7+\u5bc6\u7801\u767b\u9646")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5916\u90e8\u8ba4\u8bc1\uff0c\u652f\u6301ldap\u548coauth2\u7684\u8ba4\u8bc1"))),(0,l.kt)("h3",{id:"\u767b\u9646\u8bbe\u8ba1"},"\u767b\u9646\u8bbe\u8ba1"),(0,l.kt)("p",null,"\u63d2\u4ef6\u5f0f\u8bbe\u8ba1\uff0c\u5141\u8bb8\u4e0d\u540c\u7c7b\u578b\u7684\u767b\u9646\u6e90\u5b9e\u73b0\u767b\u9646\u63d2\u4ef6\u5373\u53ef,\u63d2\u4ef6\u76ee\u524d\u5206\u4e3a\u4e24\u7c7b,\u5206\u522b\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"OAUTH"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"LDAP")),(0,l.kt)("p",null,"\u63d2\u4ef6\u9700\u8981\u5b9e\u73b0\u63a5\u53e3",(0,l.kt)("inlineCode",{parentName:"p"},"aaa.AuthenticateIface"),"\u63a5\u53e3"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"type AuthenticateIface interface {\n    // \u8fd4\u56de\u767b\u9646\u63d2\u4ef6\u7684\u540d\u5b57\n    GetName() string\n    // \u8fd4\u56de\u767b\u9646\u5730\u5740\n    LoginAddr() string\n    // , \u83b7\u53d6\u7528\u6237\u4fe1\u606f\n    // \u9a8c\u8bc1\u51ed\u636e,\u83b7\u53d6\u6839\u636e\u7528\u6237\u63d0\u4f9b\u7684\u51ed\u636e\u83b7\u53d6\u7528\u6237\u4fe1\u606f\n    GetUserInfo(ctx context.Context, cred *Credential) (*UserInfo, error)\n}\n")),(0,l.kt)("p",null,"\u767b\u9646\u6d41\u7a0b:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"LDAP\u7c7b\u578b\u548c\u9ed8\u8ba4\u8d26\u53f7\u5bc6\u7801\u767b\u9646,\u76f4\u63a5\u63d0\u4f9b\u767b\u9646\u7684\u7528\u6237\u548c\u5bc6\u7801\u4ee5\u53ca\u767b\u9646\u6e90\u5373\u53ef,\u767b\u9646\u540e\u5c06\u83b7\u5f97token")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"OAUTH\u7c7b\u578b\uff0c\u5148\u83b7\u53d6\u767b\u9646\u5730\u5740\uff0c\u91cd\u5b9a\u5411\u5230\u767b\u9646\u5730\u5740\uff0c\u901a\u5e38\u8fd9\u4e2a\u767b\u9646\u5730\u5740\u4e3a\u7b2c\u4e09\u65b9\u5e73\u53f0\u7684\u8ba4\u8bc1\u6388\u6743\u754c\u9762\uff0c\u6388\u6743\u540e\u7b2c\u4e09\u65b9\u5c06\u4f1a\u91cd\u5b9a\u5411\u5230\u5e73\u53f0\u914d\u7f6e\u7684\u4e00\u4e2a\u5730\u5740\uff0c\u5e76\u4e14\u643a\u5e26\u7740\u7b2c\u4e09\u65b9\u5e73\u53f0\u7684\u4e00\u4e2a\u6388\u6743code,\u5e73\u53f0\u901a\u8fc7\u8fd9\u4e2acode\u83b7\u53d6access_token\uff0c\u518d\u5e26\u7740\u8fd9\u4e2aaccess_token\u8bbf\u95ee\u7528\u6237\u4fe1\u606f\uff0c\u901a\u8fc7\u7b2c\u4e09\u65b9\u5e73\u53f0\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"\u7528\u6237\u540d"),"\u4f5c\u4e3akubegems\u4e2d\u7684\u7528\u6237\uff0c\u767b\u9646\u6210\u529f\u540e\u83b7\u5f97token"))),(0,l.kt)("h3",{id:"\u8ba4\u8bc1\u8bbe\u8ba1"},"\u8ba4\u8bc1\u8bbe\u8ba1"),(0,l.kt)("p",null,"\u63d2\u4ef6\u5f0f\u8bbe\u8ba1\uff0c\u76ee\u524d\u4ec5\u5b9e\u73b0\u4e86\u57fa\u4e8eJWT\u7684\u8ba4\u8bc1\u65b9\u5f0f; \u9700\u8981\u5b9e\u73b0\u63a5\u53e3",(0,l.kt)("inlineCode",{parentName:"p"},"aaa.UserGetterIface")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"type UserGetterIface interface {\n    GetUser(req *http.Request) (u user.CommonUserIface, exist bool)\n}\n")),(0,l.kt)("h3",{id:"\u8ba4\u8bc1\u6d41\u7a0b"},"\u8ba4\u8bc1\u6d41\u7a0b"),(0,l.kt)("p",null,"\u4e0d\u540c\u7684\u8ba4\u8bc1\u63d2\u4ef6, \u4ece\u8bf7\u6c42\u5934\u4e2d\u83b7\u53d6\u9700\u8981\u7684\u4fe1\u606f\uff0c\u4f8b\u5982\u901a\u8fc7Authorization\u5934\u83b7\u53d6Bearer token,\u901a\u8fc7\u83b7\u53d6\u5230\u7684\u4fe1\u606f\u8f7d\u5165\u7528\u6237\uff0c\u5982\u679c\u6ca1\u6709\u627e\u5230\u7528\u6237\uff0c\u5219\u8868\u793a\u672a\u767b\u9646"))}c.isMDXComponent=!0},2795:function(e,t,n){t.Z=n.p+"assets/images/data-models.drawio-0acc3b60be686e11bcff59ec584bcbb8.svg"}}]);