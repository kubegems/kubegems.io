"use strict";(self.webpackChunkkubegems_docs=self.webpackChunkkubegems_docs||[]).push([[7779],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return m}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=p(o),m=r,f=u["".concat(c,".").concat(m)]||u[m]||s[m]||i;return o?n.createElement(f,l(l({ref:t},d),{},{components:o})):n.createElement(f,l({ref:t},d))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,l=new Array(i);l[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var p=2;p<i;p++)l[p]=o[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},19832:function(e,t,o){o.r(t),o.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return s}});var n=o(87462),r=o(63366),i=(o(67294),o(3905)),l=["components"],a={title:"Login model repository",hide_title:!0,sidebar_position:2,description:"modelx",keywords:["kubegems","modelx"]},c=void 0,p={unversionedId:"ai-applications/modelx/CLI/modelx/login",id:"ai-applications/modelx/CLI/modelx/login",title:"Login model repository",description:"modelx",source:"@site/docs/ai-applications/modelx/CLI/modelx/login.mdx",sourceDirName:"ai-applications/modelx/CLI/modelx",slug:"/ai-applications/modelx/CLI/modelx/login",permalink:"/docs/ai-applications/modelx/CLI/modelx/login",editUrl:"https://github.com/kubegems/kubegems.io/edit/main/docs/ai-applications/modelx/CLI/modelx/login.mdx",tags:[],version:"current",lastUpdatedBy:"LinkMaq",lastUpdatedAt:1666867312,formattedLastUpdatedAt:"2022/10/27",sidebarPosition:2,frontMatter:{title:"Login model repository",hide_title:!0,sidebar_position:2,description:"modelx",keywords:["kubegems","modelx"]},sidebar:"tutorialSidebar",previous:{title:"Add model repository",permalink:"/docs/ai-applications/modelx/CLI/modelx/repo"},next:{title:"Pull models",permalink:"/docs/ai-applications/modelx/CLI/modelx/pull"}},d={},s=[{value:"Login model repository",id:"login-model-repository",level:2}],u={toc:s};function m(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"login-model-repository"},"Login model repository"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\u767b\u5f55\u6a21\u578b\u4ed3\u5e93\uff0c\u5982\u679c modelxd \u670d\u52a1\u672a\u5f00\u542f\u8ba4\u8bc1\uff0c\u53ef\u8df3\u8fc7 token \u9636\u6bb5\uff0c\u76f4\u63a5\u56de\u8f66\u5373\u53ef"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ modelx repo list\n\n+--------+----------------------------+\n| NAME   | URL                        |\n+--------+----------------------------+\n| modelx | https://modelx.kubegems.io |\n+--------+----------------------------+\n\n$ modelx login modelx \nToken:\nLogin successful for modelx\n")))}m.isMDXComponent=!0}}]);