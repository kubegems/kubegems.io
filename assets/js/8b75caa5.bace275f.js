"use strict";(self.webpackChunkkubegems_docs=self.webpackChunkkubegems_docs||[]).push([[5714],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return k}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(t),k=a,d=c["".concat(u,".").concat(k)]||c[k]||m[k]||l;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=c;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},23055:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m}});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),i=["components"],o={slug:"kubegems-kind",title:"\u4f7f\u7528 Kind \u5feb\u901f\u90e8\u7f72\u4f53\u9a8c KubeGems",authors:["LinkMaq"],tags:["kubernetes","kind","kubegems"]},u=void 0,s={permalink:"/blog/kubegems-kind",source:"@site/blog/Deploy KubeGems with kind/2022-09-5-deploy-kubegems-with-kind.md",title:"\u4f7f\u7528 Kind \u5feb\u901f\u90e8\u7f72\u4f53\u9a8c KubeGems",description:"Kind\u662fKubernetes In Docker\u7684\u7f29\u5199\uff0c\u901a\u8fc7\u4f7f\u7528 Docker \uff0c\u5b83\u80fd\u5feb\u901f\u7684\u62c9\u8d77\u4e00\u5957 Kubernetes \u670d\u52a1\u3002\u56e0\u6b64\u5b83\u5728Kubernetes\u529f\u80fd\u6d4b\u8bd5\u548c\u4e8c\u5f00\u7b49\u9886\u57df\u88ab\u5e7f\u6cdb\u4f7f\u7528\u3002",date:"2022-09-05T00:00:00.000Z",formattedDate:"2022\u5e749\u67085\u65e5",tags:[{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"kind",permalink:"/blog/tags/kind"},{label:"kubegems",permalink:"/blog/tags/kubegems"}],readingTime:3.48,truncated:!1,authors:[{name:"LinkMaq",title:"support@kubegems.io",url:"https://github.com/LinkMaq",imageURL:"https://github.com/LinkMaq.png",key:"LinkMaq"}],frontMatter:{slug:"kubegems-kind",title:"\u4f7f\u7528 Kind \u5feb\u901f\u90e8\u7f72\u4f53\u9a8c KubeGems",authors:["LinkMaq"],tags:["kubernetes","kind","kubegems"]},prevItem:{title:"KubeGems \u542f\u7528 Nacos \u914d\u7f6e\u4e2d\u5fc3",permalink:"/blog/kubegems-nacos"},nextItem:{title:"KubeGems \u4e2d\u7684\u65e5\u5fd7\u8bbe\u8ba1",permalink:"/blog/kubegems-logging"}},p={authorsImageUrls:[void 0]},m=[{value:"\u5b89\u88c5 Kind",id:"\u5b89\u88c5-kind",level:2},{value:"\u521b\u5efa\u670d\u52a1",id:"\u521b\u5efa\u670d\u52a1",level:2},{value:"Single Cluster",id:"single-cluster",level:4},{value:"Mutil Cluster",id:"mutil-cluster",level:4},{value:"\u6307\u5b9a Kubernetes\u7248\u672c\u521b\u5efa KubeGems",id:"\u6307\u5b9a-kubernetes\u7248\u672c\u521b\u5efa-kubegems",level:4},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",level:4}],c={toc:m};function k(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/"},"Kind"),"\u662fKubernetes In Docker\u7684\u7f29\u5199\uff0c\u901a\u8fc7\u4f7f\u7528 Docker \uff0c\u5b83\u80fd\u5feb\u901f\u7684\u62c9\u8d77\u4e00\u5957 Kubernetes \u670d\u52a1\u3002\u56e0\u6b64\u5b83\u5728Kubernetes\u529f\u80fd\u6d4b\u8bd5\u548c\u4e8c\u5f00\u7b49\u9886\u57df\u88ab\u5e7f\u6cdb\u4f7f\u7528\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"KubeGems"),"\u662f\u4e00\u6b3e\u4ee5\u56f4\u7ed5 Kubernetes \u901a\u8fc7\u81ea\u7814\u548c\u96c6\u6210\u4e91\u539f\u751f\u9879\u76ee\u800c\u6784\u5efa\u7684\u901a\u7528\u6027\u5f00\u6e90 PaaS \u4e91\u7ba1\u7406\u5e73\u53f0\u3002\u7ecf\u8fc7\u6211\u4eec\u5185\u90e8\u8fd1\u4e00\u5e74\u7684\u6301\u7eed\u8fed\u4ee3\uff0c\u5f53\u524d KubeGems \u7684\u6838\u5fc3\u529f\u80fd\u5df2\u7ecf\u521d\u6b65\u5177\u5907\u591a\u4e91\u591a\u79df\u6237\u573a\u666f\u4e0b\u7684\u7edf\u4e00\u7ba1\u7406\u3002\u5e76\u901a\u8fc7\u63d2\u4ef6\u5316\u7684\u65b9\u5f0f\uff0c\u5728\u7528\u6237\u754c\u9762\u4e2d\u7075\u6d3b\u63a7\u5236\u5305\u62ec ",(0,l.kt)("strong",{parentName:"p"},"\u76d1\u63a7\u7cfb\u7edf"),"\u3001",(0,l.kt)("strong",{parentName:"p"},"\u65e5\u5fd7\u7cfb\u7edf"),"\u3001",(0,l.kt)("strong",{parentName:"p"},"\u5fae\u670d\u52a1\u6cbb\u7406")," \u7b49\u4f17\u591a\u63d2\u4ef6\u7684\u542f\u7528\u548c\u5173\u95ed\u3002")),(0,l.kt)("p",null,"\u672c\u6587\u5c06\u6307\u5bfc\u7528\u6237\u4f7f\u7528 Kind \u5feb\u901f\u90e8\u7f72\u4e00\u4e2a KubeGems v1.21\u7684\u7248\u672c\u7528\u4e8e\u672c\u5730\u6d4b\u8bd5\u3002"),(0,l.kt)("h2",{id:"\u5b89\u88c5-kind"},"\u5b89\u88c5 Kind"),(0,l.kt)("p",null,"\u5728 Linux \u4e0a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -Lo ./kind https://github.com/kubegems/kind/releases/download/v0.15.0-alpha-kubegems/kind-linux-amd64\nchmod +x ./kind\nsudo mv ./kind /usr/local/bin/kind\n")),(0,l.kt)("p",null,"\u5728 MacOS \u4e0a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# for Intel Macs\n[ $(uname -m) = x86_64 ]&& curl -Lo ./kind https://github.com/kubegems/kind/releases/download/v0.15.0-alpha-kubegems/kind-darwin-amd64\n# for M1 / ARM Macs\n[ $(uname -m) = arm64 ] && curl -Lo ./kind https://github.com/kubegems/kind/releases/download/v0.15.0-alpha-kubegems/kind-darwin-arm64\nchmod +x ./kind\nmv ./kind /some-dir-in-your-PATH/kind\n")),(0,l.kt)("p",null,"\u5728 Windows \u4e0a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl.exe -Lo kind-windows-amd64.exe ./kind https://github.com/kubegems/kind/releases/download/v0.15.0-alpha-kubegems/kind-windows-amd64\nMove-Item .\\kind-windows-amd64.exe c:\\some-dir-in-your-PATH\\kind.exe\n")),(0,l.kt)("h2",{id:"\u521b\u5efa\u670d\u52a1"},"\u521b\u5efa\u670d\u52a1"),(0,l.kt)("h4",{id:"single-cluster"},"Single Cluster"),(0,l.kt)("p",null,"\u548c\u521b\u5efa Kubernetes \u96c6\u7fa4\u4e00\u6837\uff0c\u4f7f\u7528\u547d\u4ee4",(0,l.kt)("inlineCode",{parentName:"p"},"kind create cluster"),"\u5c31\u80fd\u5feb\u901f\u62c9\u8d77\u4e00\u4e2a Kubernetes \u670d\u52a1\u5e76\u90e8\u7f72 KubeGems\n",(0,l.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/3657c5205677e4e218c3af9ca78d49a8.png",alt:"image-20220805141017484.png"})),(0,l.kt)("p",null,"\u7531\u4e8e\u4e0d\u9700\u8981\u5b9a\u5236",(0,l.kt)("inlineCode",{parentName:"p"},"kindest/node"),"\u955c\u50cf\uff0c\u6240\u4ee5 KubeGems\u5b89\u88c5\u5168\u7a0b\u9700\u8981\u8fde\u63a5\u516c\u7f51\u4e0b\u8f7d\u6240\u9700\u7684\u955c\u50cf\u3002\u5728\u542f\u52a8\u5b8c\u6210\u4e4b\u524d\u4f1a\u6709\u8bb8\u591a Pod \u7684\u72b6\u6001\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"CrashLoopBackOff"),"\uff0c\u8fd9\u662f\u7531\u4e8e\u5176\u4f9d\u8d56\u7684\u670d\u52a1\uff08mysql\u3001redis\u3001gitea\u3001argocd \u7b49\uff09\u8fd8\u5728\u542f\u52a8\u4e2d\uff0c\u8fd9\u662f\u6b63\u5e38\u7684\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85\u3002"),(0,l.kt)("p",null,"kubegems \u6240\u6709\u670d\u52a1\u90e8\u7f72\u5e76\u542f\u52a8\u5b8c\u6210\u540e\u4f1a\u6709\u5982\u4e0b pod"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/fb5260ef6c4a10fa34e4b3ee832c9011.png",alt:"image-20220805141327441.png"})),(0,l.kt)("p",null,"\u5f53\u5bb9\u5668\u72b6\u6001\u5168\u90e8",(0,l.kt)("inlineCode",{parentName:"p"},"Running"),"\u540e\uff0c\u4f7f\u7528 port-forward \u5c06 KubeGems Dashboard \u670d\u52a1\u6620\u5c04\u5230\u672c\u5730"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward svc/kubegems-dashboard :80 -n kubegems                           \n\nForwarding from 127.0.0.1:52302 -> 8000\nForwarding from [::1]:52302 -> 8000\n")),(0,l.kt)("p",null,"\u6b64\u65f6\uff0c\u6211\u4eec\u6253\u5f00\u6d4f\u89c8\u5668\u8bbf\u95ee ",(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost:52302"),"\u5373\u53ef\u8bbf\u95ee KubeGems\uff0c\u9ed8\u8ba4\u7528\u6237",(0,l.kt)("inlineCode",{parentName:"p"},"admin")," \u9ed8\u8ba4\u5bc6\u7801",(0,l.kt)("inlineCode",{parentName:"p"},"demo!@#admin")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528 Kind \u751f\u6210\u7684 KubeConfig\u6587\u4ef6\u5bfc\u5165\u96c6\u7fa4\u662f\uff0c\u6ce8\u610f\u4fee\u6539\u96c6\u7fa4 Server \u5730\u5740\u4e3a\u5185\u90e8\u5730\u5740",(0,l.kt)("inlineCode",{parentName:"p"},"http://kubernetes.default:443"))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/750cf1eb84463f564fd6c1cf00b2bac5.png",alt:"image-20220805144837887.png"})),(0,l.kt)("h4",{id:"mutil-cluster"},"Mutil Cluster"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u9700\u8981\u4f7f\u7528 Kind \u90e8\u7f72\u4e00\u4e2a Kubernetes \u96c6\u7fa4\uff0c\u90a3\u4e48\u53ef\u4ee5\u6309\u7167\u5982\u4e0b\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"cat ./kind.yaml\n\nkind: Cluster\napiVersion: kind.x-k8s.io/v1alpha4\nnodes:\n- role: control-plane\n- role: control-plane\n- role: control-plane\n- role: worker\n- role: worker\n- role: worker\n")),(0,l.kt)("p",null,"\u5e76\u901a\u8fc7\u547d\u4ee4 ",(0,l.kt)("inlineCode",{parentName:"p"},"kind create cluster --config kind.yaml")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/a4cc811c69ba68cfc166887d56c8829b.png",alt:"image-20220805143833694.png"})),(0,l.kt)("p",null,"\u6253\u5f00 KubeGems \u540e\u53f0\u5e76\u5bfc\u5165\u96c6\u7fa4\u540e\uff0c\u6211\u4eec\u4fbf\u53ef\u4ee5\u5728\u673a\u5668\u5217\u8868\u4e2d\u67e5\u770b\u96c6\u7fa4\u5185\u4e3b\u673a\u6570\u91cf"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/962f40e48dd8fcacbcf5c5259e6e2e60.png",alt:"image-20220805145229274.png"})),(0,l.kt)("h4",{id:"\u6307\u5b9a-kubernetes\u7248\u672c\u521b\u5efa-kubegems"},"\u6307\u5b9a Kubernetes\u7248\u672c\u521b\u5efa KubeGems"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u8981\u5728\u6307\u5b9a\u7684 Kubernetes \u7248\u672c\u4e2d\u521b\u5efa KubeGems\uff0c\u53ea\u9700\u8981kind \u5728\u521b\u5efa\u8fc7\u7a0b\u4e2d\u6307\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"kindest/node"),"\u955c\u50cf\u7248\u672c\u5373\u53ef"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kind create cluster  --image kindest/node:v1.23.6\n")),(0,l.kt)("h4",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b KubeGems \u53ea\u505a\u4e86\u6700\u5c0f\u5316\u5b89\u88c5\uff0c\u5982\u679c\u60a8\u8981\u542f\u7528\u66f4\u591a\u529f\u80fd\uff0c\u53ef\u5728\u7ba1\u7406\u5458\u540e\u53f0\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"\u7ec4\u4ef6\u7ba1\u7406"),"\u4e2d\u542f\u7528\u76f8\u5173\u63d2\u4ef6"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/img_convert/7305b799c99f47e6dac62bc610572ce8.png",alt:"image-20220805145350662.png"})),(0,l.kt)("hr",null))}k.isMDXComponent=!0}}]);