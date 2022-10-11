"use strict";(self.webpackChunkkubegems_docs=self.webpackChunkkubegems_docs||[]).push([[4912],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=u(a),c=l,k=d["".concat(o,".").concat(c)]||d[c]||p[c]||r;return a?n.createElement(k,s(s({ref:t},m),{},{components:a})):n.createElement(k,s({ref:t},m))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,s[1]=i;for(var u=2;u<r;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58215:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(67294);function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:l},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(87462),l=a(67294),r=a(72389),s=a(1907),i=a(86010),o="tabItem_LplD";function u(e){var t,a,r,u=e.lazy,m=e.block,p=e.defaultValue,d=e.values,c=e.groupId,k=e.className,g=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,s.lx)(b,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===p?p:null!=(t=null!=p?p:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(r=g[0])?void 0:r.props.value;if(null!==v&&!b.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.UB)(),f=N.tabGroupChoices,y=N.setTabGroupChoices,w=(0,l.useState)(v),E=w[0],C=w[1],R=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var S=f[c];null!=S&&S!==E&&b.some((function(e){return e.value===S}))&&C(S)}var O=function(e){var t=e.currentTarget,a=R.indexOf(t),n=b[a].value;n!==E&&(x(t),C(n),null!=c&&y(c,n))},T=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=R.indexOf(e.currentTarget)+1;a=R[n]||R[0];break;case"ArrowLeft":var l=R.indexOf(e.currentTarget)-1;a=R[l]||R[R.length-1]}null==(t=a)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},k)},b.map((function(e){var t=e.value,a=e.label,r=e.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return R.push(e)},onKeyDown:T,onFocus:O,onClick:O},r,{className:(0,i.Z)("tabs__item",o,null==r?void 0:r.className,{"tabs__item--active":E===t})}),null!=a?a:t)}))),u?(0,l.cloneElement)(g.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,r.Z)();return l.createElement(u,(0,n.Z)({key:String(t)},e))}},79178:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c}});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),s=a(9877),i=a(58215),o=["components"],u={title:"\u5feb\u901f\u5b89\u88c5",hide_title:!0,sidebar_position:1},m=void 0,p={unversionedId:"installation/quick-install",id:"installation/quick-install",title:"\u5feb\u901f\u5b89\u88c5",description:"\u5feb\u901f\u5b89\u88c5",source:"@site/docs/installation/quick-install.mdx",sourceDirName:"installation",slug:"/installation/quick-install",permalink:"/docs/installation/quick-install",editUrl:"https://github.com/kubegems/kubegems.io/edit/main/docs/installation/quick-install.mdx",tags:[],version:"current",lastUpdatedBy:"cnfatal",lastUpdatedAt:1665456673,formattedLastUpdatedAt:"2022/10/11",sidebarPosition:1,frontMatter:{title:"\u5feb\u901f\u5b89\u88c5",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u90e8\u7f72 demo \u73af\u5883",permalink:"/docs/installation/demo"},next:{title:"\u5b89\u88c5Kubernetes",permalink:"/docs/category/\u5b89\u88c5kubernetes"}},d={},c=[{value:"\u5feb\u901f\u5b89\u88c5",id:"\u5feb\u901f\u5b89\u88c5",level:2},{value:"\u524d\u7f6e\u9700\u6c42",id:"\u524d\u7f6e\u9700\u6c42",level:2},{value:"\u4e3b\u8981\u90e8\u5206",id:"\u4e3b\u8981\u90e8\u5206",level:2},{value:"\u90e8\u7f72 KubeGems",id:"\u90e8\u7f72-kubegems",level:2},{value:"\u90e8\u7f72 installer",id:"\u90e8\u7f72-installer",level:3},{value:"(\u53ef\u9009)\u5b89\u88c5\u4f9d\u8d56",id:"\u53ef\u9009\u5b89\u88c5\u4f9d\u8d56",level:3},{value:"\u90e8\u7f72 kubegems \u6838\u5fc3\u7ec4\u4ef6",id:"\u90e8\u7f72-kubegems-\u6838\u5fc3\u7ec4\u4ef6",level:3},{value:"\u8bbf\u95ee kubegems \u4eea\u8868\u677f",id:"\u8bbf\u95ee-kubegems-\u4eea\u8868\u677f",level:3},{value:"\u6dfb\u52a0\u96c6\u7fa4",id:"\u6dfb\u52a0\u96c6\u7fa4",level:3},{value:"\u9644\u5f55",id:"\u9644\u5f55",level:3},{value:"\u7cfb\u7edf\u547d\u540d\u7a7a\u95f4",id:"\u7cfb\u7edf\u547d\u540d\u7a7a\u95f4",level:4}],k={toc:c};function g(e){var t=e.components,u=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},k,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5feb\u901f\u5b89\u88c5"},"\u5feb\u901f\u5b89\u88c5"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"KubeGems"),"\u901a\u8fc7\u4e0e ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubegems/bundle-controller"},"bundle-controller")," \u76f8\u540c\u7684\u65b9\u5f0f\u8fdb\u884c\u5b89\u88c5\uff0c\u901a\u8fc7\u4e0b\u53d1 plugin \u7c7b\u578b\u7684 CR \u6765\u5b89\u88c5\u5bf9\u5e94\u7684 helm/kustomize \u5305\u3002"),(0,r.kt)("p",null,"\u5b89\u88c5 kubegems \u9700\u8981\u5177\u5907",(0,r.kt)("strong",{parentName:"p"},"\u96c6\u7fa4\u7ba1\u7406\u5458"),"\u6743\u9650\uff0c\u6240\u4ee5\u5728\u90e8\u7f72\u524d\u9700\u8981\u8054\u7cfb\u60a8\u7684\u96c6\u7fa4\u7ba1\u7406\u5458\uff0c\u4ee5\u4fdd\u8bc1\u6709\u8db3\u591f\u7684\u6388\u6743\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u60a8\u60f3\u5c1d\u8bd5\u6211\u4eec\u6b63\u5728\u5f00\u53d1\u7684\u7248\u672c\uff0c\u53ef\u4ee5\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubegems/kubegems/blob/main/deploy/README-zh.md"},"\u8fd9\u91cc"),"\u8fdb\u884c\u90e8\u7f72\u3002")),(0,r.kt)("h2",{id:"\u524d\u7f6e\u9700\u6c42"},"\u524d\u7f6e\u9700\u6c42"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"kubernetes 1.20 \u53ca\u4ee5\u4e0a\u7248\u672c( 1.23+\u6700\u4f73 )")),(0,r.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u53ef\u7528\u96c6\u7fa4\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"../category/%E5%AE%89%E8%A3%85kubernetes"},"\u5b89\u88c5 kubernetes"),"\u3002"),(0,r.kt)("h2",{id:"\u4e3b\u8981\u90e8\u5206"},"\u4e3b\u8981\u90e8\u5206"),(0,r.kt)("p",null,"kubegems \u5305\u542b\u4ee5\u4e0b\u4e3b\u8981\u90e8\u5206\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"kubegems-installer")),(0,r.kt)("td",{parentName:"tr",align:null},"kubegems \u5b89\u88c5\u7a0b\u5e8f\uff0c\u5b89\u88c5 kubegems \u7ec4\u4ef6\u53ca\u4f9d\u8d56\u7ec4\u4ef6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"kubegems")),(0,r.kt)("td",{parentName:"tr",align:null},"kubegems \u6838\u5fc3\u7ec4\u4ef6\uff0c\u5305\u542b UI \u754c\u9762\u53ca\u76f8\u5173 API \u670d\u52a1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"kubegems-local")),(0,r.kt)("td",{parentName:"tr",align:null},"kubegems \u8fb9\u7f18\u7ec4\u4ef6\uff0c\u5b89\u88c5\u5728\u6258\u7ba1\u96c6\u7fa4\u4e0a\uff0c\u83b7\u53d6\u96c6\u7fa4\u4fe1\u606f\u548c\u6267\u884c\u64cd\u4f5c")))),(0,r.kt)("h2",{id:"\u90e8\u7f72-kubegems"},"\u90e8\u7f72 KubeGems"),(0,r.kt)("p",null,"\u786e\u5b9a\u90e8\u7f72\u7248\u672c,\u60a8\u53ef\u4ee5\u524d\u5f80 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubegems/kubegems/tags"},"Kubegems Release")," \u67e5\u8be2\u5230\u6700\u65b0\u7684\u7248\u672c\u53f7."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export KUBEGEMS_VERSION=<kubegems version> #  \u5b89\u88c5 kubegems \u7684\u7248\u672c\n")),(0,r.kt)("h3",{id:"\u90e8\u7f72-installer"},"\u90e8\u7f72 installer"),(0,r.kt)("p",null,"installer \u662f\u7528\u4e8e\u5b89\u88c5 kubegems \u4e3b\u8981\u7ec4\u4ef6\u548c\u63d2\u4ef6\u7684\u63a7\u5236\u5668\u3002\n\u5176\u901a\u8fc7\u76d1\u542c\u7c7b\u578b\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins.plugins.kubegems.io")," \u7684 CR\uff0c\u5e76\u6839\u636e\u5176\u5b9a\u4e49\u6765\u4e0b\u8f7d\u548c\u5b89\u88c5\u76f8\u5e94\u7684 helm chart \u6216\u8005 kustomize \u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u8be6\u60c5\u53c2\u8003:",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubegems/bundle-controller"},"bundle-controller"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create namespace kubegems-installer\nkubectl apply -f https://github.com/kubegems/kubegems/raw/${KUBEGEMS_VERSION}/deploy/installer.yaml\n")),(0,r.kt)("p",null,"\u7b49\u5f85\u5b89\u88c5\u7a0b\u5e8f\u51c6\u5907\u5c31\u7eea\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ kubectl -n kubegems-installer get po\nNAME                                  READY   STATUS    RESTARTS   AGE\nkubegems-installer-6fb7495c4d-8rqwn   0/1     Running   0          12s\n")),(0,r.kt)("h3",{id:"\u53ef\u9009\u5b89\u88c5\u4f9d\u8d56"},"(\u53ef\u9009)\u5b89\u88c5\u4f9d\u8d56"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"kubegems \u9700\u8981\u6301\u4e45\u5316\u4e00\u4e9b\u91cd\u8981\u6570\u636e\uff0c\u9700\u8981\u96c6\u7fa4\u6709\u53ef\u7528\u7684 CSI \u63d2\u4ef6"),(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u6ca1\u6709 CSI \u63d2\u4ef6\uff0c\u53ef\u4ee5\u5b89\u88c5 local-path-provisioner"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create namespace local-path-storage\nkubectl apply -f https://github.com/kubegems/kubegems/raw/${KUBEGEMS_VERSION}/deploy/addon-local-path-provisioner.yaml\n")))),(0,r.kt)("h3",{id:"\u90e8\u7f72-kubegems-\u6838\u5fc3\u7ec4\u4ef6"},"\u90e8\u7f72 kubegems \u6838\u5fc3\u7ec4\u4ef6"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u4f7f\u7528 dockerhub \u955c\u50cf\uff0c\u4f46\u5982\u679c\u60a8\u7684\u7f51\u7edc\u5728\u83b7\u53d6 docker.io quay.io gcr.io \u4e0a\u7684\u955c\u50cf\u65f6\u8f83\u4e3a\u7f13\u6162\uff0c\u53ef\u4ee5\u4f7f\u7528\u6211\u4eec\u5728\u963f\u91cc\u4e91\u4e0a\u7684\u955c\u50cf\u3002"),(0,r.kt)("p",null,"\u6ce8\u610f\uff1akubegems \u9ed8\u8ba4\u4f7f\u7528\u540d\u79f0\u4e3a local-path \u7684 storageClass,\u5982\u679c\u60a8\u4f7f\u7528\u4e0d\u540c\u7684 storageClass\uff0c\u60a8\u9700\u8981\u5728 apply \u524d\u4e0b\u8f7d\u5e76\u7f16\u8f91 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubegems.yaml")," \u6587\u4ef6\u3002"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"dockerhub",label:"DockerHub \u6e90",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl create namespace kubegems\n\nexport STORAGE_CLASS=local-path  # \u6539\u4e3a\u60a8\u4f7f\u7528\u7684 storageClass\ncurl -sL https://github.com/kubegems/kubegems/raw/${KUBEGEMS_VERSION}/deploy/kubegems.yaml \\\n| sed -e "s/local-path/${STORAGE_CLASS}/g" \\\n> kubegems.yaml\n\nkubectl apply -f kubegems.yaml\n'))),(0,r.kt)(i.Z,{value:"aliyun",label:"\u963f\u91cc\u4e91\u955c\u50cf\u6e90\uff08\u4e2d\u56fd\u5927\u9646\u5730\u533a\u63a8\u8350\uff09",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl create namespace kubegems\n\nexport STORAGE_CLASS=local-path  # \u6539\u4e3a\u60a8\u4f7f\u7528\u7684 storageClass\nexport IMAGE_REGISTY=registry.cn-beijing.aliyuncs.com\ncurl -sL https://github.com/kubegems/kubegems/raw/${KUBEGEMS_VERSION}/deploy/kubegems.yaml \\\n| sed -e "s/local-path/${STORAGE_CLASS}/g" -e "s/docker.io/${IMAGE_REGISTY}/g" \\\n> kubegems.yaml\n\nkubectl apply -f kubegems.yaml\n')))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," kubegems CR \u4e0b\u53d1\u540e\uff0c\u5927\u7ea6\u9700\u8981 5 \u5206\u949f\u624d\u4f1a\u4e00\u5207\u6b63\u5e38\uff0c\u8fd9\u53d6\u51b3\u4e8e\u60a8\u7684\u5177\u4f53\u914d\u7f6e\u3002")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5728\u542f\u52a8\u5b8c\u6210\u4e4b\u524d\u4f1a\u6709\u8bb8\u591a Pod \u7684\u72b6\u6001\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"CrashLoopBackOff"),"\uff0c\u8fd9\u662f\u7531\u4e8e\u5176\u4f9d\u8d56\u7684\u670d\u52a1\uff08mysql\u3001redis\u3001gitea\u3001argocd \u7b49\uff09\u8fd8\u5728\u542f\u52a8\u4e2d\uff0c\u8fd9\u662f\u6b63\u5e38\u7684\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85\u3002"))),(0,r.kt)("p",null,"kubegems \u6240\u6709\u670d\u52a1\u90e8\u7f72\u5e76\u542f\u52a8\u5b8c\u6210\u540e\u4f1a\u6709\u5982\u4e0b pod\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n kubegems get pod\nNAME                                               READY   STATUS      RESTARTS      AGE\nkubegems-api-6d45f656f8-lfk7j                      1/1     Running     0             21h\nkubegems-argo-cd-app-controller-5b849bfb49-ltvdz   1/1     Running     0             21h\nkubegems-argo-cd-repo-server-7dddd8f57d-ldj5k      1/1     Running     0             21h\nkubegems-argo-cd-server-76745cc657-v8dx9           1/1     Running     0             21h\nkubegems-chartmuseum-6c546b4d-qxfjj                1/1     Running     0             21h\nkubegems-charts-init-main-lmtwt                    0/1     Completed   0             21h\nkubegems-dashboard-6bcd7f65f-89gsk                 1/1     Running     0             21h\nkubegems-gitea-0                                   1/1     Running     0             21h\nkubegems-init-main-vjxnq                           0/1     Completed   3             21h\nkubegems-msgbus-7c58548497-pqwht                   1/1     Running     5 (21h ago)   21h\nkubegems-mysql-0                                   1/1     Running     0             21h\nkubegems-redis-master-0                            1/1     Running     0             21h\nkubegems-worker-7d67974f4c-cj65l                   1/1     Running     5 (21h ago)   21h\n")),(0,r.kt)("h3",{id:"\u8bbf\u95ee-kubegems-\u4eea\u8868\u677f"},"\u8bbf\u95ee kubegems \u4eea\u8868\u677f"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u7aef\u53e3\u8f6c\u53d1\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl -n kubegems port-forward svc/kubegems-dashboard 8080:80\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7 NodePort:")),(0,r.kt)("p",null,"\u4f60\u9700\u8981\u7f16\u8f91 kubegems \u63d2\u4ef6\uff0c\u4e3a dashbnoard \u7ec4\u4ef6\u5f00\u542f nodeport"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl -n kubegems edit plugins.plugins.kubegems.io kubegems\n")),(0,r.kt)("p",null,"\u793a\u4f8b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: plugins.kubegems.io/v1beta1\nkind: Plugin\nmetadata:\nspec:\n  kind: helm\n  url: https://charts.kubegems.io/kubegems\n  values:\n    dashboard:\n      service:\n        type: NodePort\n    global:\n      kubegemsVersion: v1.21.4\n      storageClass: local-path\n    ingress:\n      hostname: dashboard.kubegems.io\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f5c\u4e3a\u6b63\u5f0f\u4f7f\u7528\u60a8\u53ef\u80fd\u9700\u8981\u4f7f\u7528 ingress \u6216\u5176\u4ed6\u65b9\u5f0f\u8bbf\u95ee\u3002")),(0,r.kt)("p",null,"kubegems \u9ed8\u8ba4\u521b\u5efa\u4e86 hostname \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"dashboard.kubegems.io")," \u7684 ingress, \u540c\u65f6\u9ed8\u8ba4\u7ed1\u5b9a\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"default-gateway"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"ingressClass"),"\u3002\n\u5982\u679c\u60a8\u60f3\u66f4\u6539\u4e3a\u5176\u4ed6\u57df\u540d\uff0c\u6216\u8005\u7ed1\u5b9a\u5230\u5176\u4ed6\u7f51\u5173\u53ef\u4ee5\u7f16\u8f91 kubegems \u63d2\u4ef6\u3002"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"default-gateway"),"\u662f\u5e73\u53f0\u9ed8\u8ba4\u7f51\u5173\uff0c\u8981\u4f7f\u7528\u5b83\uff0c\u4f60\u9700\u8981\u542f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"\u7f51\u5173-gateway"),"\u63d2\u4ef6"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl -n kubegems edit plugins.plugins.kubegems.io kubegems\n")),(0,r.kt)("p",null,"\u793a\u4f8b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: plugins.kubegems.io/v1beta1\nkind: Plugin\nmetadata:\nspec:\n  kind: helm\n  url: https://charts.kubegems.io/kubegems\n  values:\n    global:\n      kubegemsVersion: v1.21.4\n      storageClass: local-path\n    ingress:\n      hostname: dashboard.kubegems.io\n      ingressClassName: default-gateway\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u66f4\u591a\u76f8\u5173\u914d\u7f6e\u6587\u6863: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubegems/kubegems/blob/main/deploy/plugins/kubegems/README.md#dashboard-exposure-parameters"},"https://github.com/kubegems/kubegems/blob/main/deploy/plugins/kubegems/README.md#dashboard-exposure-parameters")))),(0,r.kt)("p",null,"\u60a8\u9700\u8981\u5c06\u8be5\u57df\u540d\u89e3\u6790\u5230 Kubernetes \u96c6\u7fa4\u5185\u4efb\u610f\u8282\u70b9\u6216\u8005 Ingress LoadBanlancer IP \u540e\uff0c\u624d\u53ef\u901a\u8fc7\u8be5\u57df\u540d\u8bbf\u95ee\u9875\u9762\u3002"),(0,r.kt)("p",null,"\u83b7\u53d6 ingress \u8bbf\u95ee\u5730\u5740\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"PORT=$(kubectl -n kubegems-gateway get svc default-gateway -ojsonpath='{.spec.ports[0].nodePort}')\nADDRESS=$(kubectl -n kubegems get ingress kubegems -ojsonpath='{.spec.rules[*].host}')\necho http://$ADDRESS:$PORT\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(12743).Z,width:"3836",height:"1880"})),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u7528\u6237\u540d\u4e0e\u5bc6\u7801\u767b\u5f55\u63a7\u5236\u53f0\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"user: admin\npassword: demo!@#admin\n")),(0,r.kt)("h3",{id:"\u6dfb\u52a0\u96c6\u7fa4"},"\u6dfb\u52a0\u96c6\u7fa4"),(0,r.kt)("p",null,"\u4f7f\u7528 admin \u8eab\u4efd\u767b\u5f55 KubeGems \u5e73\u53f0\u540e\uff0c\u70b9\u51fb\u53f3\u4e0b\u89d2 \u201c\u5de5\u5177\u201d \u56fe\u6807\uff0c\u8fdb\u5165\u3010\u5e73\u53f0\u7ba1\u7406\u3011\uff0c\u70b9\u51fb \u201c\u6dfb\u52a0\u96c6\u7fa4\u201d\u3002"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u521d\u6b21\u5b89\u88c5\u5b8c\u6210\u540e\uff0cKubeGems \u5185\u65e0\u96c6\u7fa4\u6570\u636e\uff0c\u9700\u8981\u7528\u6237\u81ea\u884c\u5c06\u5f53\u524d\u96c6\u7fa4\u6dfb\u52a0\u5230 KubeGems \u5f53\u4e2d\u3002"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c06\u60a8\u7684 kubeconfig \u5185\u5bb9\u7c98\u8d34\u81f3\u6587\u672c\u6846\uff0c\u70b9\u51fb\u201c\u4e0b\u4e00\u6b65\u201d")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(80362).Z,width:"1914",height:"939"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5f53 kubeconfig \u6821\u9a8c\u6210\u529f\uff0c\u60a8\u53ef\u4ee5\u770b\u5230\u5982\u4e0b\u754c\u9762\u540e\uff0c\u70b9\u51fb\u201c\u4e0b\u4e00\u6b65\u201d")),(0,r.kt)("img",{src:a(94533).Z,alt:"Example banner",width:"80%",align:"center"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u4e00\u4e9b\u57fa\u672c\u4fe1\u606f\uff0c\u5982 \u201c\u96c6\u7fa4\u540d\u79f0\u201d \u201c\u955c\u50cf\u4ed3\u5e93\u201d\u3001\u201c\u5b58\u50a8\u7c7b\u578b\u201d\u7b49\u3002")),(0,r.kt)("img",{src:a(43923).Z,alt:"Example banner",width:"80%",align:"center"}),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5982\u65e0\u6cd5\u786e\u5b9a\u5982\u4f55\u9009\u62e9\u4e0a\u8ff0\u4fe1\u606f\uff0c\u4fdd\u6301\u9ed8\u8ba4\u5373\u53ef\u3002"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4ea4\u4fdd\u5b58\u6210\u529f\uff0c\u7b49\u5f85\u96c6\u7fa4\u4ee3\u7406\u7ec4\u5efa\u542f\u52a8\u5b8c\u6210\u540e\uff0c\u60a8\u5373\u53ef\u5728\u201c\u96c6\u7fa4\u8d44\u6e90\u201d\u9875\u9762\u5373\u53ef\u770b\u5230\u65b0\u52a0\u7684\u96c6\u7fa4\u3002")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5982\u679c\u957f\u65f6\u95f4\u6ca1\u6709\u7b49\u5230\u4ee3\u7406\u7ec4\u4ef6\u4e0a\u7ebf\uff0c\u60a8\u53ef\u4ee5\u53bb\u76ee\u6807\u96c6\u7fa4\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"kubegems-local")," \u7a7a\u95f4\u4e0b\u67e5\u770b\u540d\u79f0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"kubegems-local-agent")," \u7684\u670d\u52a1\u662f\u5426\u6b63\u5e38\u8fd0\u884c\u3002"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(38454).Z,width:"3834",height:"1880"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u96c6\u7fa4\u7684\u201c\u8be6\u60c5\u201d\uff0c\u5373\u53ef\u770b\u5230\u96c6\u7fa4\u7684\u8be6\u7ec6\u4fe1\u606f\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(32516).Z,width:"3834",height:"1880"})),(0,r.kt)("p",null,"\u9ed8\u8ba4\u5b89\u88c5\u4e3a\u6781\u7b80\u7248\u672c\uff0c\u5927\u90e8\u5206\u529f\u80fd\u90fd\u9700\u8981\u901a\u8fc7\u542f\u7528\u76f8\u5173\u7684\u63d2\u4ef6\u624d\u80fd\u6b63\u5e38\u4f7f\u7528\u3002\n\u8981\u5f00\u542f\u8fd9\u4e9b\u529f\u80fd\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 \u201d\u7ec4\u4ef6\u7ba1\u7406\u201c \u6765 \u201c\u542f\u7528\u201d \u8fd9\u4e9b\u7ec4\u4ef6\u3002"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u60f3\u66f4\u8fdb\u4e00\u6b65\u4e86\u89e3 KubeGems \u4f7f\u7528 ?\n\u8bf7\u8df3\u8f6c\u81f3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/quick-starts/quick-start"},"\u5feb\u901f\u5f00\u59cb")," \u5f00\u59cb\u5b66\u4e60\u3002"))),(0,r.kt)("h3",{id:"\u9644\u5f55"},"\u9644\u5f55"),(0,r.kt)("h4",{id:"\u7cfb\u7edf\u547d\u540d\u7a7a\u95f4"},"\u7cfb\u7edf\u547d\u540d\u7a7a\u95f4"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u547d\u540d\u7a7a\u95f4"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7528\u9014"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kubegems-installer"),(0,r.kt)("td",{parentName:"tr",align:null},"KubeGems installer operator \u6240\u5728\u7a7a\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kubegems"),(0,r.kt)("td",{parentName:"tr",align:null},"KubeGems \u7cfb\u7edf\u6838\u5fc3\u670d\u52a1\u6240\u5728\u7a7a\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kubegems-local"),(0,r.kt)("td",{parentName:"tr",align:null},"Kubegems \u96c6\u7fa4\u4ee3\u7406\u670d\u52a1\u6240\u5728\u7a7a\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kubegems-monitoring"),(0,r.kt)("td",{parentName:"tr",align:null},"KubeGems \u76d1\u63a7\u544a\u8b66\u670d\u52a1\u6240\u5728\u7a7a\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kubegems-logging"),(0,r.kt)("td",{parentName:"tr",align:null},"KubeGems \u65e5\u5fd7\u670d\u52a1\u6240\u5728\u7a7a\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kubegems-gateway"),(0,r.kt)("td",{parentName:"tr",align:null},"KubeGems \u79df\u6237 Ingress \u7f51\u5173\u548c Istio \u7f51\u5173\u6240\u5728\u7a7a\u95f4")))))}g.isMDXComponent=!0},94533:function(e,t,a){t.Z=a.p+"assets/images/cluster-check-success-7c37c101bd2ca0d3cf4b827582559a43.jpg"},43923:function(e,t,a){t.Z=a.p+"assets/images/gems-first-centrol-info-43c2c742b7012432218690cd34d7df79.png"},80362:function(e,t,a){t.Z=a.p+"assets/images/gems-first-centrol-cluster-91d2e3a35626f18c9f4d03927e1b7bdc.jpg"},32516:function(e,t,a){t.Z=a.p+"assets/images/gems-first-centrol-dash-1edb87865cbb8cf9b96cd9774d32dfaf.jpg"},38454:function(e,t,a){t.Z=a.p+"assets/images/gems-first-centrol-c545762b9e26859198a209528ad7bd03.jpg"},12743:function(e,t,a){t.Z=a.p+"assets/images/gems-first-dashbaord-bbc455105192bd6a238ac0b41ed07503.jpg"}}]);