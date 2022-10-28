"use strict";(self.webpackChunkkubegems_docs=self.webpackChunkkubegems_docs||[]).push([[7317],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return p}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(t),p=a,k=m["".concat(u,".").concat(p)]||m[p]||c[p]||i;return t?r.createElement(k,o(o({ref:n},d),{},{components:t})):r.createElement(k,o({ref:n},d))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},58215:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(67294);function a(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(87462),a=t(67294),i=t(72389),o=t(1907),l=t(86010),u="tabItem_LplD";function s(e){var n,t,i,s=e.lazy,d=e.block,c=e.defaultValue,m=e.values,p=e.groupId,k=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,o.lx)(f,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(n=null!=c?c:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=b[0])?void 0:i.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,o.UB)(),y=h.tabGroupChoices,w=h.setTabGroupChoices,N=(0,a.useState)(g),x=N[0],O=N[1],T=[],E=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var C=y[p];null!=C&&C!==x&&f.some((function(e){return e.value===C}))&&O(C)}var j=function(e){var n=e.currentTarget,t=T.indexOf(n),r=f[t].value;r!==x&&(E(n),O(r),null!=p&&w(p,r))},K=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;t=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;t=T[a]||T[T.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},k)},f.map((function(e){var n=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:function(e){return T.push(e)},onKeyDown:K,onFocus:j,onClick:j},i,{className:(0,l.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":x===n})}),null!=t?t:n)}))),s?(0,a.cloneElement)(b.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}function d(e){var n=(0,i.Z)();return a.createElement(s,(0,r.Z)({key:String(n)},e))}},7855:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=t(9877),l=t(58215),u=["components"],s={title:"\u5355\u673a\u4f53\u9a8c\u7248(Kind)\u5b89\u88c5",hide_title:!0,sidebar_position:1,description:"\u672c\u6587\u7528\u4e8e\u6307\u5bfc\u7528\u6237\u4f7f\u7528 kind \u90e8\u7f72\u4e00\u4e2a kubegems \u7684demo \u73af\u5883",keywords:["kubegems","KubeGems","kubernetes"]},d=void 0,c={unversionedId:"quick-starts/demo",id:"quick-starts/demo",title:"\u5355\u673a\u4f53\u9a8c\u7248(Kind)\u5b89\u88c5",description:"\u672c\u6587\u7528\u4e8e\u6307\u5bfc\u7528\u6237\u4f7f\u7528 kind \u90e8\u7f72\u4e00\u4e2a kubegems \u7684demo \u73af\u5883",source:"@site/docs/quick-starts/demo.mdx",sourceDirName:"quick-starts",slug:"/quick-starts/demo",permalink:"/docs/quick-starts/demo",editUrl:"https://github.com/kubegems/kubegems.io/edit/main/docs/quick-starts/demo.mdx",tags:[],version:"current",lastUpdatedBy:"LinkMaq",lastUpdatedAt:1666925338,formattedLastUpdatedAt:"2022/10/28",sidebarPosition:1,frontMatter:{title:"\u5355\u673a\u4f53\u9a8c\u7248(Kind)\u5b89\u88c5",hide_title:!0,sidebar_position:1,description:"\u672c\u6587\u7528\u4e8e\u6307\u5bfc\u7528\u6237\u4f7f\u7528 kind \u90e8\u7f72\u4e00\u4e2a kubegems \u7684demo \u73af\u5883",keywords:["kubegems","KubeGems","kubernetes"]},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u901f\u5165\u95e8",permalink:"/docs/category/\u5feb\u901f\u5165\u95e8"},next:{title:"\u5165\u95e8\u6982\u5ff5",permalink:"/docs/category/\u5165\u95e8\u6982\u5ff5"}},m={},p=[{value:"\u5355\u673a\u4f53\u9a8c\u7248(Kind)\u5b89\u88c5",id:"\u5355\u673a\u4f53\u9a8c\u7248kind\u5b89\u88c5",level:2},{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",level:3},{value:"\u5b89\u88c5 Kind",id:"\u5b89\u88c5-kind",level:3},{value:"\u521b\u5efa\u670d\u52a1",id:"\u521b\u5efa\u670d\u52a1",level:3}],k={toc:p};function b(e){var n=e.components,t=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u5355\u673a\u4f53\u9a8c\u7248kind\u5b89\u88c5"},"\u5355\u673a\u4f53\u9a8c\u7248(Kind)\u5b89\u88c5"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u7684\u76ee\u6807\u673a\u5668\u8fd0\u884c\u4e86 docker \u670d\u52a1 "),(0,i.kt)("li",{parentName:"ul"},"\u76ee\u6807\u673a\u5668\u5177\u5907 kubectl \u5de5\u5177")),(0,i.kt)("h3",{id:"\u5b89\u88c5-kind"},"\u5b89\u88c5 Kind"),(0,i.kt)("p",null,"\u9009\u62e9\u5b89\u88c5\u9002\u5408\u60a8\u64cd\u4f5c\u7cfb\u7edf\u7684\u53d1\u884c\u7248"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Linux",label:"Linux",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -Lo ./kind https://github.com/kubegems/kind/releases/download/v0.15.0-alpha-kubegems/kind-linux-amd64\nchmod +x ./kind\nsudo mv ./kind /usr/local/bin/kind\n"))),(0,i.kt)(l.Z,{value:"MacOS",label:"MacOS",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# for Intel Macs\n[ $(uname -m) = x86_64 ]&& curl -Lo ./kind https://github.com/kubegems/kind/releases/download/v0.15.0-alpha-kubegems/kind-darwin-amd64\n# for M1 / ARM Macs\n[ $(uname -m) = arm64 ] && curl -Lo ./kind https://github.com/kubegems/kind/releases/download/v0.15.0-alpha-kubegems/kind-darwin-arm64\nchmod +x ./kind\nmv ./kind /some-dir-in-your-PATH/kind\n"))),(0,i.kt)(l.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl.exe -Lo kind-windows-amd64.exe ./kind https://github.com/kubegems/kind/releases/download/v0.15.0-alpha-kubegems/kind-windows-amd64\nMove-Item .\\kind-windows-amd64.exe c:\\some-dir-in-your-PATH\\kind.exe\n")))),(0,i.kt)("h3",{id:"\u521b\u5efa\u670d\u52a1"},"\u521b\u5efa\u670d\u52a1"),(0,i.kt)("p",null,"\u548c\u521b\u5efa Kubernetes \u96c6\u7fa4\u4e00\u6837\uff0c\u4f7f\u7528\u547d\u4ee4",(0,i.kt)("inlineCode",{parentName:"p"},"kind create cluster"),"\u5c31\u80fd\u5feb\u901f\u62c9\u8d77\u4e00\u4e2a Kubernetes \u670d\u52a1\u5e76\u90e8\u7f72 KubeGems\n",(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/3657c5205677e4e218c3af9ca78d49a8.png",alt:"image-20220805141017484.png"})),(0,i.kt)("p",null,"\u7531\u4e8e\u4e0d\u9700\u8981\u5b9a\u5236",(0,i.kt)("inlineCode",{parentName:"p"},"kindest/node"),"\u955c\u50cf\uff0c\u6240\u4ee5 KubeGems\u5b89\u88c5\u5168\u7a0b\u9700\u8981\u8fde\u63a5\u516c\u7f51\u4e0b\u8f7d\u6240\u9700\u7684\u955c\u50cf\u3002\u5728\u542f\u52a8\u5b8c\u6210\u4e4b\u524d\u4f1a\u6709\u8bb8\u591a Pod \u7684\u72b6\u6001\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"CrashLoopBackOff"),"\uff0c\u8fd9\u662f\u7531\u4e8e\u5176\u4f9d\u8d56\u7684\u670d\u52a1\uff08mysql\u3001redis\u3001gitea\u3001argocd \u7b49\uff09\u8fd8\u5728\u542f\u52a8\u4e2d\uff0c\u8fd9\u662f\u6b63\u5e38\u7684\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85\u3002"),(0,i.kt)("p",null,"kubegems \u6240\u6709\u670d\u52a1\u90e8\u7f72\u5e76\u542f\u52a8\u5b8c\u6210\u540e\u4f1a\u6709\u5982\u4e0b pod"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/fb5260ef6c4a10fa34e4b3ee832c9011.png",alt:"image-20220805141327441.png"})),(0,i.kt)("p",null,"\u5f53\u5bb9\u5668\u72b6\u6001\u5168\u90e8",(0,i.kt)("inlineCode",{parentName:"p"},"Running"),"\u540e\uff0c\u4f7f\u7528 port-forward \u5c06 KubeGems Dashboard \u670d\u52a1\u6620\u5c04\u5230\u672c\u5730"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward svc/kubegems-dashboard :80 -n kubegems --address 0.0.0.0\n\nForwarding from 0.0.0.0:52302 -> 8000\nForwarding from [::1]:52302 -> 8000\n")),(0,i.kt)("p",null,"\u6b64\u65f6\uff0c\u6253\u5f00\u6d4f\u89c8\u5668\u8bbf\u95ee ",(0,i.kt)("inlineCode",{parentName:"p"},"http://<\u76ee\u6807\u670d\u52a1\u5668\u5730\u5740>:52302"),"\u5373\u53ef\u8bbf\u95ee KubeGems\uff0c\u9ed8\u8ba4\u7528\u6237",(0,i.kt)("inlineCode",{parentName:"p"},"admin")," \u9ed8\u8ba4\u5bc6\u7801",(0,i.kt)("inlineCode",{parentName:"p"},"demo!@#admin")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"}," \u4f7f\u7528 Kind \u751f\u6210\u7684 KubeConfig\u6587\u4ef6\u5bfc\u5165\u96c6\u7fa4\u662f\uff0c\u6ce8\u610f\u4fee\u6539\u96c6\u7fa4 Server \u5730\u5740\u4e3a\u5185\u90e8\u5730\u5740",(0,i.kt)("inlineCode",{parentName:"p"},"https://kubernetes.default:443")))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/750cf1eb84463f564fd6c1cf00b2bac5.png",alt:"image-20220805144837887.png"})))}b.isMDXComponent=!0}}]);