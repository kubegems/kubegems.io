"use strict";(self.webpackChunkkubegems_docs=self.webpackChunkkubegems_docs||[]).push([[2375],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(n),u=i,k=m["".concat(o,".").concat(u)]||m[u]||p[u]||r;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93780:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=["components"],s={title:"\u7528\u6237\u7ba1\u7406",hide_title:!0,sidebar_position:2},o=void 0,d={unversionedId:"tasks/admin/tenant",id:"tasks/admin/tenant",title:"\u7528\u6237\u7ba1\u7406",description:"\u7ba1\u7406\u79df\u6237",source:"@site/docs/tasks/admin/tenant.md",sourceDirName:"tasks/admin",slug:"/tasks/admin/tenant",permalink:"/docs/tasks/admin/tenant",editUrl:"https://github.com/kubegems/kubegems.io/edit/main/docs/tasks/admin/tenant.md",tags:[],version:"current",lastUpdatedBy:"LinkMaq",lastUpdatedAt:1649240009,formattedLastUpdatedAt:"2022/4/6",sidebarPosition:2,frontMatter:{title:"\u7528\u6237\u7ba1\u7406",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u5b58\u50a8\u7c7b\u58f0\u660e",permalink:"/docs/tasks/admin/cluster-manage/storageclass"},next:{title:"\u7a7a\u95f4\u7ba1\u7406",permalink:"/docs/tasks/admin/space"}},c={},p=[{value:"\u7ba1\u7406\u79df\u6237",id:"\u7ba1\u7406\u79df\u6237",level:2},{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u79df\u6237\u7ba1\u7406",id:"\u79df\u6237\u7ba1\u7406",level:2},{value:"\u521b\u5efa\u79df\u6237",id:"\u521b\u5efa\u79df\u6237",level:3},{value:"\u79df\u6237\u8be6\u60c5",id:"\u79df\u6237\u8be6\u60c5",level:3},{value:"\u79df\u6237\u6210\u5458",id:"\u79df\u6237\u6210\u5458",level:3},{value:"\u79df\u6237\u8d44\u6e90",id:"\u79df\u6237\u8d44\u6e90",level:3},{value:"\u79df\u6237\u8d44\u6e90\u76d1\u63a7",id:"\u79df\u6237\u8d44\u6e90\u76d1\u63a7",level:3},{value:"\u7528\u6237\u7ba1\u7406",id:"\u7528\u6237\u7ba1\u7406",level:2},{value:"\u8bbe\u7f6e\u7cfb\u7edf\u7ba1\u7406\u5458",id:"\u8bbe\u7f6e\u7cfb\u7edf\u7ba1\u7406\u5458",level:3},{value:"\u91cd\u7f6e\u7528\u6237\u5bc6\u7801",id:"\u91cd\u7f6e\u7528\u6237\u5bc6\u7801",level:3},{value:"\u5220\u9664\u7528\u6237",id:"\u5220\u9664\u7528\u6237",level:3}],m={toc:p};function u(e){var t=e.components,s=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u7ba1\u7406\u79df\u6237"},"\u7ba1\u7406\u79df\u6237"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4e25\u683c\u4fe9\u8bf4\uff0cKubeGems \u5e76\u6ca1\u6709\u9650\u5b9a\u7528\u6237\u5bf9\u79df\u6237\u7684\u4f7f\u7528\u9650\u5236\uff0c\u7528\u6237\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u5b9e\u9645\u60c5\u51b5\u6765\u5236\u5b9a\u79df\u6237\u7684\u7c92\u5ea6\u3002\u4f8b\u5982\uff1a\u6309\u7167\u90e8\u95e8\u7ef4\u5ea6\u6765\u8bbe\u7f6e\u79df\u6237\uff0c\u4ea6\u6216\u8005\u6309\u7167\u4f01\u4e1a\u4ea7\u54c1\u7ebf\u8bbe\u7f6e\u79df\u6237\u3002\u4e0d\u7ba1\u91c7\u7528\u90a3\u79cd\u65b9\u5f0f\uff0c\u5b83\u4eec\u90fd\u9075\u5faa\u4e00\u4e2a\u539f\u5219\uff1a",(0,r.kt)("strong",{parentName:"p"},"KubeGems \u79df\u6237\u5185\u7684\u8d44\u6e90\u662f\u4e92\u76f8\u72ec\u7acb\u548c\u9694\u79bb\u7684")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u79df\u6237"),"\u662f KubeGems \u5185\u7684\u9876\u7ea7\u6982\u5ff5\uff0c\u5e73\u53f0io\u76ee\u3001\u5e94\u7528\u3001\u73af\u5883\u7b49\u90fd\u96b6\u5c5e\u4e8e\u79df\u6237\u4e0b\u3002 \u666e\u901a\u7528\u6237\u5728\u4f7f\u7528\u5e73\u53f0\u529f\u80fd\u524d\uff0c\u9700\u5148\u52a0\u5165\u5230\u79df\u6237\u4e0b\uff0c\u624d\u5177\u5907\u4f7f\u7528\u8d44\u6e90\u7684\u57fa\u672c\u6743\u9650\u3002 ",(0,r.kt)("strong",{parentName:"p"},"\u5e73\u53f0\u7ba1\u7406\u5458"),"\u53ef\u4ee5\u5728 \u3010\u79df\u6237\u4e2d\u5fc3\u3011 \u4e3a\u6bcf\u4e00\u540d\u79df\u6237\u8bbe\u7f6e\u5176\u80fd\u591f\u4f7f\u7528\u7684 Kubernetes \u8d44\u6e90\u3002\u79df\u6237\u4e00\u65e6\u521b\u5efa\u6210\u529f\u5e76\u5206\u914d\u597d\u8d44\u6e90\u540e\uff0cKubeGems \u4f1a\u5c06\u79df\u6237\u4fe1\u606f\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"cr/tenants.kubegems.io")," \u7684\u65b9\u5f0f\u5c06\u6570\u636e\u53d1\u9001\u7ed9 Kubernetes API\uff0c\u5e76\u7531\u96c6\u7fa4\u63a7\u5236\u5668\u8d1f\u8d23\u79df\u6237\u4fe1\u606f\u7ba1\u7406\u3002"),(0,r.kt)("h2",{id:"\u79df\u6237\u7ba1\u7406"},"\u79df\u6237\u7ba1\u7406"),(0,r.kt)("h3",{id:"\u521b\u5efa\u79df\u6237"},"\u521b\u5efa\u79df\u6237"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fdb\u5165\u3010\u5e73\u53f0\u8bbe\u7f6e\u3011\uff0c\u70b9\u51fb\u5de6\u4e0a\u5361\u7247\u3010\u5e73\u53f0\u7ba1\u7406\u3011\u540e\u9009\u62e9\u3010\u79df\u6237\u7ba1\u7406\u3011\uff0c\u70b9\u51fb\u53f3\u4e0a\u89d2\u6309\u94ae\u9009\u62e9 \u201c\u521b\u5efa\u79df\u6237\u201d\uff0c\u586b\u5165\u79df\u6237\u540d\u79f0\u548c\u5907\u6ce8")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:n(59753).Z,width:"3358",height:"1812"})),(0,r.kt)("h3",{id:"\u79df\u6237\u8be6\u60c5"},"\u79df\u6237\u8be6\u60c5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u70b9\u51fb \u201c\u79df\u6237\u540d\u79f0\u201d\uff0c\u8fdb\u5165\u3010\u79df\u6237\u8be6\u60c5\u9875\u3011")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"\u79df\u6237\u8be6\u60c5",src:n(2846).Z,width:"2878",height:"1528"})),(0,r.kt)("h3",{id:"\u79df\u6237\u6210\u5458"},"\u79df\u6237\u6210\u5458"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u3010\u79df\u6237\u8be6\u60c5\u9875\u3011\u4e2d\u70b9\u51fb\u53f3\u4e0a\u89d2\u70b9\u51fb \u201c\u6dfb\u52a0\u6210\u5458\u201d \uff0c\u8fdb\u5165\u79df\u6237\u6210\u5458\u7ba1\u7406\u754c\u9762")),(0,r.kt)("img",{src:n(90850).Z,align:"center",width:"70%"}),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u79df\u6237\u7ba1\u7406\u5458\u5177\u5907\u79df\u6237\u4e0b\u6240\u6709\u8d44\u6e90\u7684\u7ba1\u7406\u6743\u9650\uff0c\u79df\u6237\u666e\u901a\u6210\u5458\u9700\u52a0\u5165 \u201c\u9879\u76ee\u7a7a\u95f4\u201d \u6216 \u201c\u73af\u5883\u7a7a\u95f4\u201d \u624d\u80fd\u5b8c\u5168\u4f7f\u7528\u7a7a\u95f4\u4e0b\u8d44\u6e90\u3002"))),(0,r.kt)("h3",{id:"\u79df\u6237\u8d44\u6e90"},"\u79df\u6237\u8d44\u6e90"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u3010\u79df\u6237\u8be6\u60c5\u9875\u3011\u4e2d\u70b9\u51fb\u53f3\u4e0a\u89d2\u70b9\u51fb \u201c\u6dfb\u52a0\u96c6\u7fa4\u8d44\u6e90\u201d \uff0c\u6216\u5728\u4ee5\u5206\u914d\u8d44\u6e90\u7684\u96c6\u7fa4\u53f3\u4fa7\u70b9\u51fb \u201c\u8d44\u6e90\u8c03\u6574\u201d\u6309\u94ae\uff0c\u53ef\u8fdb\u5165\u79df\u6237\u7684\u8d44\u6e90\u5206\u914d\u9875\u9762")),(0,r.kt)("img",{src:n(30895).Z,align:"center",width:"90%"}),(0,r.kt)("h3",{id:"\u79df\u6237\u8d44\u6e90\u76d1\u63a7"},"\u79df\u6237\u8d44\u6e90\u76d1\u63a7"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u3010\u79df\u6237\u8be6\u60c5\u9875\u3011\u4e2d\u5bf9\u4ee5\u5206\u914d\u8d44\u6e90\u7684\u96c6\u7fa4\u53f3\u4fa7\u70b9\u51fb \u201c\u8d44\u6e90\u76d1\u63a7\u201d\u6309\u94ae\uff0c\u53ef\u67e5\u770b\u79df\u6237\u5b9e\u65f6\u7684\u8d44\u6e90\u4f7f\u7528\u72b6\u6001")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:n(14245).Z,width:"3350",height:"1818"})),(0,r.kt)("h2",{id:"\u7528\u6237\u7ba1\u7406"},"\u7528\u6237\u7ba1\u7406"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\u8bbe\u7f6e\u7cfb\u7edf\u7ba1\u7406\u5458"},"\u8bbe\u7f6e\u7cfb\u7edf\u7ba1\u7406\u5458"),(0,r.kt)("p",null," KubeGems \u5185\u90e8\u7cfb\u7edf\u7528\u6237\u4ec5\u5206\u4e3a\u4e24\u7c7b ",(0,r.kt)("strong",{parentName:"p"},"\u7cfb\u7edf\u7ba1\u7406\u5458")," \u548c ",(0,r.kt)("strong",{parentName:"p"},"\u666e\u901a\u7528\u6237")," \u89d2\u8272\u3002\u7cfb\u7edf\u7ba1\u7406\u5458\u9664\u7ba1\u7406\u96c6\u7fa4\u548c\u79df\u6237\u5916\uff0c\u8fd8\u5177\u5907\u7528\u6237\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u5bc6\u7801\u91cd\u7f6e"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"\u5220\u9664"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"\u4fee\u6539\u7cfb\u7edf\u89d2\u8272"),"\u7b49\u6743\u9650\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'\u8fdb\u5165\u3010\u5e73\u53f0\u8bbe\u7f6e\u3011\uff0c\u70b9\u51fb\u5de6\u4e0a\u5361\u7247\u3010\u5e73\u53f0\u7ba1\u7406\u3011\u540e\u9009\u62e9\u3010\u79df\u6237\u7ba1\u7406\u3011\uff0c\u70b9\u51fb "\u7528\u6237"\u8fdb\u5165\u7528\u6237\u5217\u8868\u3002\u5728\u7528\u6237\u6700\u53f3\u8fb9\u7684\u6309\u94ae\u4e2d\u9009\u4e2d \u201c\u89d2\u8272\u201d\uff0c\u8fdb\u5165\u7528\u6237\u89d2\u8272\u5206\u914d')),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:n(41264).Z,width:"3353",height:"1822"})),(0,r.kt)("h3",{id:"\u91cd\u7f6e\u7528\u6237\u5bc6\u7801"},"\u91cd\u7f6e\u7528\u6237\u5bc6\u7801"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u7528\u6237\u5217\u8868\u4e2d\uff0c\u70b9\u51fb\u9700\u91cd\u7f6e\u7528\u6237\u6700\u53f3\u8fb9\u7684\u6309\u94ae\uff0c\u9009\u4e2d \u201c\u91cd\u7f6e\u5bc6\u7801\u201d\uff0c\u8fdb\u5165\u7528\u6237\u5bc6\u7801\u91cd\u7f6e\u9875\u9762")),(0,r.kt)("img",{src:n(66220).Z,align:"center",width:"50%"}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4f60\u53ef\u4ee5\u4f7f\u7528 \u201c\u968f\u673a\u5bc6\u7801\u201d \u8ba9\u5e73\u53f0\u4e3a\u60a8\u751f\u6210\u66f4\u7b26\u5408\u5b89\u5168\u89c4\u8303\u7684\u5b57\u7b26\u4e32\u3002"))),(0,r.kt)("h3",{id:"\u5220\u9664\u7528\u6237"},"\u5220\u9664\u7528\u6237"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u7528\u6237\u5217\u8868\u4e2d\uff0c\u70b9\u51fb\u9700\u91cd\u7f6e\u7528\u6237\u6700\u53f3\u8fb9\u7684\u6309\u94ae\uff0c\u9009\u4e2d \u201c\u5220\u9664\u201d\u5373\u53ef\u5b8c\u6210\u64cd\u4f5c\u3002")))}u.isMDXComponent=!0},66220:function(e,t,n){t.Z=n.p+"assets/images/reset-user-password-c1e2268596d38f3d4389d264510e7981.jpg"},90850:function(e,t,n){t.Z=n.p+"assets/images/tenant-member-a3356597d5a9686ee5dbd9154f4fac44.jpg"},30895:function(e,t,n){t.Z=n.p+"assets/images/tenant-resource-07fdd198af9ab2cac43bcd0a0bc91b85.jpg"},41264:function(e,t,n){t.Z=n.p+"assets/images/admin-user-role-1e116703df03ffb59c2b081877b07636.jpg"},59753:function(e,t,n){t.Z=n.p+"assets/images/tenant-create-89ae51873afdeda8299ed740ea025d08.jpg"},14245:function(e,t,n){t.Z=n.p+"assets/images/tenant-resource-metrics-51686a6e2549061cf557b51017bed3e0.jpg"},2846:function(e,t,n){t.Z=n.p+"assets/images/tasks-platform-tenant-info-259f8f9b8a2f28a8845c87ead8b44fec.png"}}]);