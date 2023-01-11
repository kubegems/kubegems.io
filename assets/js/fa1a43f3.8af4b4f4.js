"use strict";(self.webpackChunkkubegems_docs=self.webpackChunkkubegems_docs||[]).push([[1420],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return c}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),g=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=g(e.components);return a.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=g(t),c=i,k=u["".concat(o,".").concat(c)]||u[c]||m[c]||l;return t?a.createElement(k,r(r({ref:n},p),{},{components:t})):a.createElement(k,r({ref:n},p))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=u;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var g=2;g<l;g++)r[g]=t[g];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},13644:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return s},metadata:function(){return g},toc:function(){return m}});var a=t(87462),i=t(63366),l=(t(67294),t(3905)),r=["components"],s={title:"\u63d2\u4ef6\u5f00\u53d1\u624b\u518c",hide_title:!0,sidebar_position:2,description:"KubeGems \u4e0e\u4e91\u539f\u751f\u751f\u6001\u63d2\u4ef6\u5f00\u53d1\u6307\u5bfc"},o=void 0,g={unversionedId:"expand/development/plugins",id:"expand/development/plugins",title:"\u63d2\u4ef6\u5f00\u53d1\u624b\u518c",description:"KubeGems \u4e0e\u4e91\u539f\u751f\u751f\u6001\u63d2\u4ef6\u5f00\u53d1\u6307\u5bfc",source:"@site/docs/expand/development/plugins.mdx",sourceDirName:"expand/development",slug:"/expand/development/plugins",permalink:"/docs/expand/development/plugins",editUrl:"https://github.com/kubegems/kubegems.io/edit/main/docs/expand/development/plugins.mdx",tags:[],version:"current",lastUpdatedBy:"LinkMaq",lastUpdatedAt:1673405634,formattedLastUpdatedAt:"2023/1/11",sidebarPosition:2,frontMatter:{title:"\u63d2\u4ef6\u5f00\u53d1\u624b\u518c",hide_title:!0,sidebar_position:2,description:"KubeGems \u4e0e\u4e91\u539f\u751f\u751f\u6001\u63d2\u4ef6\u5f00\u53d1\u6307\u5bfc"},sidebar:"tutorialSidebar",previous:{title:"\u672c\u5730\u5f00\u53d1\u4e0e\u8c03\u8bd5",permalink:"/docs/expand/development/kubegems/local-debug"},next:{title:"\u5e94\u7528\u5546\u5e97\u5f00\u53d1\u624b\u518c",permalink:"/docs/expand/development/appstore"}},p={},m=[{value:"\u63d2\u4ef6\u5f00\u53d1\u624b\u518c",id:"\u63d2\u4ef6\u5f00\u53d1\u624b\u518c",level:2},{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:2},{value:"\u4e86\u89e3 Plugin \u8d44\u6e90",id:"\u4e86\u89e3-plugin-\u8d44\u6e90",level:2},{value:"\u7279\u522b\u7684 global \u63d2\u4ef6",id:"\u7279\u522b\u7684-global-\u63d2\u4ef6",level:3},{value:"\u7f16\u5199\u63d2\u4ef6",id:"\u7f16\u5199\u63d2\u4ef6",level:2},{value:"\u955c\u50cf\u672c\u5730\u5316",id:"\u955c\u50cf\u672c\u5730\u5316",level:3},{value:"\u5b9a\u4e49\u65b0\u63d2\u4ef6",id:"\u5b9a\u4e49\u65b0\u63d2\u4ef6",level:3},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",level:2},{value:"\u672c\u5730\u6d4b\u8bd5",id:"\u672c\u5730\u6d4b\u8bd5",level:3},{value:"\u96c6\u6210\u6d4b\u8bd5",id:"\u96c6\u6210\u6d4b\u8bd5",level:3},{value:"\u53d1\u5e03\u63d2\u4ef6",id:"\u53d1\u5e03\u63d2\u4ef6",level:2}],u={toc:m};function c(e){var n=e.components,t=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u63d2\u4ef6\u5f00\u53d1\u624b\u518c"},"\u63d2\u4ef6\u5f00\u53d1\u624b\u518c"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"\u4e00\u4e2a\u63d2\u4ef6\u672c\u8d28\u4e0a\u662f\u4e00\u4e2a helm chart\uff0cKubeGems \u5728\u5176\u4e0a\u505a\u4e86\u529f\u80fd\u7684\u6269\u5c55\u548c\u4e00\u4e9b\u7ea6\u5b9a\u3002\n\u63d2\u4ef6\u4e3b\u8981\u529f\u80fd\u662f\u5bf9\u914d\u7f6e\u7684\u91cd\u65b0\u89c4\u5212\u548c\u7edf\u4e00\u3002"),(0,l.kt)("p",null,"\u4e3b\u8981\u5305\u542b\u4e86\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u7edf\u4e00\u914d\u7f6e\u955c\u50cf\u4ed3\u5e93\uff0c\u5b58\u50a8 \u4ee5\u53ca\u96c6\u7fa4\u540d\u79f0\u7b49"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u80fd\u63d2\u4ef6\u4e4b\u95f4\u914d\u7f6e\u8054\u52a8(\u5f15\u7528)")),(0,l.kt)("h2",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u8bcd"),(0,l.kt)("th",{parentName:"tr",align:null},"\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"plugin(\u8d44\u6e90)"),(0,l.kt)("td",{parentName:"tr",align:null},"plugin \u4e00\u822c\u6307\u7c7b\u578b\u4e3a plugin \u7684\u8d44\u6e90(CR),\u7531 kubegems-installer \u63d0\u4f9b\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u63d2\u4ef6"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ed3\u5e93\u4e2d helm chart \u683c\u5f0f\u5b58\u653e\u7684 chart.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u63d2\u4ef6\u7ba1\u7406"),(0,l.kt)("td",{parentName:"tr",align:null},"KubeGems WebUI  \u4e2d\u7684\u63d2\u4ef6\u63a7\u5236\u90e8\u5206\u529f\u80fd\uff0c\u63d2\u4ef6\u7684\u542f\u7528/\u7981\u7528\u672c\u8d28\u4e0a\u662f\u521b\u5efa/\u5220\u9664 ",(0,l.kt)("inlineCode",{parentName:"td"},"kubegems-installer")," \u7a7a\u95f4\u4e0b\u7684 plugin \u8d44\u6e90\u3002")))),(0,l.kt)("h2",{id:"\u4e86\u89e3-plugin-\u8d44\u6e90"},"\u4e86\u89e3 Plugin \u8d44\u6e90"),(0,l.kt)("p",null,"\u5148\u6765\u4e86\u89e3\u4e00\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"plugin")," \u8d44\u6e90\uff0c\u63d2\u4ef6\u63a7\u5236\u7684\u4e3b\u8981\u8d44\u6e90\u5c31\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"plugin"),"\u8d44\u6e90\uff0c\nplugin crd \u7531 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kubegems/kubegems/deploy/installer.yaml"},"kubegems-installer")," \u63d0\u4f9b\u548c\u5904\u7406\u7684\uff0c\n\u8981\u4f7f\u7528 plugin \u9700\u8981\u5148\u5b89\u88c5 installer\u3002"),(0,l.kt)("p",null,"plugin \u8d44\u6e90\u53ef\u4ee5\u7528\u6765\u5c06\u4e00\u4e2a helm chart \u90e8\u7f72\u5230\u96c6\u7fa4\u4e2d\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u4f7f\u7528 plugin \u6765\u5c06 ingress controller \u4ee5 helm \u65b9\u5f0f \u90e8\u7f72\u5230\u96c6\u7fa4\u4e2d:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ kubectl create namespace ingress-nginx\nnamespace/ingress-nginx created\n\n$ cat <<EOF | kubectl apply -f -\n# https://github.com/bitnami/charts/tree/master/bitnami/nginx-ingress-controller/#installing-the-chart\napiVersion: plugins.kubegems.io/v1beta1\nkind: Plugin\nmetadata:\n  name: nginx-ingress-controller\n  namespace: ingress-nginx\nspec:\n  kind: helm\n  url: https://charts.bitnami.com/bitnami\n  chart: nginx-ingress-controller\n  version: 9.3.25\n  values:\n    extraArgs:\n      # https://kubernetes.github.io/ingress-nginx/user-guide/tls/#ssl-passthrough\n      enable-ssl-passthrough: true\nEOF\nplugin.plugins.kubegems.io/nginx-ingress-controller created\n\n$ kubectl -n ingress-nginx get plugins.plugins.kubegems.io #\u67e5\u770bplugin\u72b6\u6001\nNAME                       KIND   STATUS      NAMESPACE       VERSION   APPVERSION   UPGRADETIMESTAMP   AGE\nnginx-ingress-controller   helm   Installed   ingress-nginx   9.3.25    1.6.0        2s                 68s\n")),(0,l.kt)("p",null,"plugin \u8fd8\u652f\u6301\u4ece configmap/secret \u586b\u5145 helm values \u7684\u529f\u80fd\uff0c\u4ee5 \u96c6\u7fa4\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"kubegems")," \u63d2\u4ef6\u4e3a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: plugins.kubegems.io/v1beta1\nkind: Plugin\nmetadata:\n...\n  name: kubegems\n  namespace: kubegems-installer\nspec:\n  installNamespace: kubegems\n  kind: helm\n  url: https://charts.kubegems.io/kubegems\n  values: {}\n  valuesFrom:\n    - kind: ConfigMap\n      name: kubegems-global-values\n      prefix: global.\n  version: 1.23.0\n")),(0,l.kt)("p",null,"\u5176\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},".spec.valuesFrom")," \u5b57\u6bb5\u8868\u793a\u5c06\u540d\u79f0\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"kubegems-global-values")," \u7684 configmap \u7684 data \u586b\u5145\u81f3 values \u4e0b\u7684 \u5e76\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"global."),"\u524d\u7f00"),(0,l.kt)("p",null,"\u67e5\u770b\u5408\u5e76\u548c\u540e\u7684 values:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ kubectl -n kubegems-installer get plugins.plugins.kubegems.io kubegems -ojsonpath='{.status.values}'  | yq -p json\nglobal:\n  clusterName: manager-cluster\n  enabled: true\n  imageRegistry: registry.k8s.fatalc.cn\n  imageRepository: kubegems\n  kubegemsVersion: release-1.23\n  runtime: containerd\n  storageClass: standard\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u770b\u5230 configmap \u4e2d\u7684 key \u90fd\u5408\u5e76\u5230\u4e86 kubegems \u7684 values \u4e2d\u3002"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8\u610f")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"}," ",(0,l.kt)("strong",{parentName:"p"},"\u4fee\u6539 configmap \u4e2d\u7684 data \u503c\uff0c\u4e5f\u4f1a\u89e6\u53d1\u5f15\u7528\u8be5 configmap \u7684 plugin \u8fdb\u884c\u66f4\u65b0")))),(0,l.kt)("h3",{id:"\u7279\u522b\u7684-global-\u63d2\u4ef6"},"\u7279\u522b\u7684 global \u63d2\u4ef6"),(0,l.kt)("p",null,"\u63d2\u4ef6\u7cfb\u7edf\u4e2d\u6709\u4e00\u4e2a\u9ed8\u8ba4\u4f7f\u7528\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kubegems/plugins/blob/main/plugins/global"},"global plugin"),"\uff0c\n\u7528\u4e8e\u7ef4\u62a4\u5168\u5c40\u914d\u7f6e\u3002"),(0,l.kt)("p",null,"\u8be5 plugin \u4f1a\u751f\u6210\u4e0a\u8ff0\u7684\u540d\u79f0\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"kubegems-global-values")," \u7684 configmap\uff0c\n\u901a\u8fc7 WEB UI \u63d2\u4ef6\u7ba1\u7406\u542f\u7528\u7684\u63d2\u4ef6\u4f1a\u9ed8\u8ba4\u589e\u52a0\u5bf9\u8fd9\u4e2a configmap \u7684\u5f15\u7528\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: plugins.kubegems.io/v1beta1\nkind: Plugin\nmetadata:\n  name: global\n  namespace: kubegems-installer\nspec:\n  chart: global\n  kind: template\n  url: https://charts.kubegems.io/kubegems\n  values:\n    clusterName: manager-cluster\n    imageRegistry: registry.cn-beijing.aliyuncs.com\n    imageRepository: kubegems\n    kubegemsVersion: v1.23.0\n    storageClass: standard\n  version: 1.0.0\n")),(0,l.kt)("h2",{id:"\u7f16\u5199\u63d2\u4ef6"},"\u7f16\u5199\u63d2\u4ef6"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8\u610f")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"\u6240\u6709\u9876\u7ea7 plugin \u90fd\u662f\u5b89\u88c5\u5728 ",(0,l.kt)("inlineCode",{parentName:"strong"},"kubegems-installer")," \u7a7a\u95f4\u4e0b\u7684\uff0c\u4e5f\u53ea\u6709\u8be5\u7a7a\u95f4\u4e0b\u7684 plugin \u8d44\u6e90\u4f1a\u5c55\u793a\u5728 web \u754c\u9762\u7684 \u201c\u63d2\u4ef6\u7ba1\u7406\u201d \u4e2d\u3002")))),(0,l.kt)("p",null,"\u4ee5 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kubegems/plugins/tree/main/plugins/gateway"},"nginx-ingress-controller")," \u7f16\u5199\u4e00\u4e2a ",(0,l.kt)("strong",{parentName:"p"},"KubeGems \u98ce\u683c")," \u7684\u63d2\u4ef6\u4e3a\u4f8b:"),(0,l.kt)("h3",{id:"\u955c\u50cf\u672c\u5730\u5316"},"\u955c\u50cf\u672c\u5730\u5316"),(0,l.kt)("p",null,"\u5982\u679c\u9700\u8981\u652f\u6301\u7edf\u4e00\u914d\u7f6e\u955c\u50cf\u4ed3\u5e93\uff0c\u9700\u8981\u5b8c\u6210\u955c\u50cf\u7684\u672c\u5730\u5316\u914d\u7f6e\u3002global \u4e2d\u6709\u4e24\u4e2a\u53c2\u6570\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"global.imageRegistry")," \u4ee5\u53ca ",(0,l.kt)("inlineCode",{parentName:"p"},"global.imageRepository")),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u914d\u7f6e\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"global.imageRepository"),"\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"registry.cn-beijing.aliyuncs.com"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"global.imageRepository"),"\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"kubegems"),"\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\u5982\u679c\u4f7f\u7528\u5230\u7684\u955c\u50cf\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"docker.io/library/nginx:latest"),"\u5e94\u5f53\u88ab\u6e32\u67d3\u4e3a\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"registry.cn-beijing.aliyuncs.com/kubegems/nginx:latest"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ helm template  --repo https://charts.bitnami.com/bitnami nginx-ingress-controller | grep 'image: '\n          image: docker.io/bitnami/nginx-ingress-controller:1.6.0-debian-11-r11\n          image: docker.io/bitnami/nginx:1.22.1-debian-11-r26\n\n$ #\u53c2\u8003 https://artifacthub.io/packages/helm/bitnami/nginx-ingress-controller \u8fdb\u884cvalues\u66f4\u6539\u4ee5\u6ee1\u8db3\u9700\u6c42\n\n$ helm template  --repo https://charts.bitnami.com/bitnami nginx-ingress-controller \\\n    --set 'defaultBackend.image.registry=registry.cn-beijing.aliyuncs.com' \\\n    --set 'defaultBackend.image.repository=kubegems' \\\n    --set 'image.repository=kubegems/nginx-ingress-controller' \\\n    --set 'global.imageRegistry=registry.cn-beijing.aliyuncs.com' |  grep 'image: '\n          image: registry.cn-beijing.aliyuncs.com/kubegems/nginx-ingress-controller:1.6.0-debian-11-r11\n          image: registry.cn-beijing.aliyuncs.com/kubegems:1.22.1-debian-11-r26\n")),(0,l.kt)("p",null,"\u7531\u4e8e\u955c\u50cf\u672c\u5730\u5316\u9700\u8981\u5c06\u955c\u50cf copy \u5230 kubgems \u955c\u50cf\u4ed3\u5e93\u4e2d\uff0c\u53ef\u4ee5\u6267\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"skopeo copy -a docker://docker.io/bitnami/nginx-ingress-controller:1.6.0-debian-11-r11 docker://registry.cn-beijing.aliyuncs.com/kubegems/nginx-ingress-controller:1.6.0-debian-11-r11\nskopeo copy -a docker://docker.io/bitnami/nginx:1.22.1-debian-11-r26 docker://registry.cn-beijing.aliyuncs.com/kubegems/nginx:1.22.1-debian-11-r26\n")),(0,l.kt)("p",null,"\u5728 plugin \u8d44\u6e90\u4e2d\uff0c\u5982\u679c\u8981\u8fbe\u5230\u4e0a\u8ff0\u529f\u80fd\u9700\u8981\u66f4\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"nginx-ingress-controller")," plugin values \u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: plugins.kubegems.io/v1beta1\nkind: Plugin\nmetadata:\n  name: nginx-ingress-controller\n  namespace: ingress-nginx\nspec:\n  kind: helm\n  url: https://charts.bitnami.com/bitnami\n  chart: nginx-ingress-controller\n  version: 9.3.25\n  values:\n    defaultBackend:\n      image:\n        registry: registry.cn-beijing.aliyuncs.com\n        repository: kubegems\n    global:\n      imageRegistry: registry.cn-beijing.aliyuncs.com\n    image:\n      repository: kubegems/nginx-ingress-controller\n")),(0,l.kt)("h3",{id:"\u5b9a\u4e49\u65b0\u63d2\u4ef6"},"\u5b9a\u4e49\u65b0\u63d2\u4ef6"),(0,l.kt)("p",null,"\u8981\u80fd\u591f\u90e8\u7f72\u4e0a\u8ff0\u7684 plugin\uff0c\u5c31\u9700\u8981\u4e00\u4e2a\u63d2\u4ef6\u6765\u751f\u6210\u4e0a\u8ff0\u7684 plugin\u3002\u90a3\u4e48\u4e0a\u8ff0\u7684 plugin \u5c31\u88ab\u4f5c\u4e3a\u88ab template \u7684\u8d44\u6e90\u3002"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u63d0\u793a")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"}," \u63d2\u4ef6\u6ca1\u6709\u6a21\u677f\uff0c\u65b0\u589e\u63d2\u4ef6\u65f6\u53ef\u4ee5\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kubegems/plugins/tree/main/plugins/cert-manager"},"plugins/cert-manager")," \u6765\u7f16\u5199\u3002"))),(0,l.kt)("p",null,"\u63d2\u4ef6\u7528\u5230\u7684 annotations \u53ef\u4ee5\u4ece ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kubegems/plugins/blob/main/README.md"},"\u8fd9\u91cc")," \u67e5\u770b\u3002"),(0,l.kt)("p",null,"Annotations used by kubegems plugin system in ",(0,l.kt)("inlineCode",{parentName:"p"},"Chart.yaml")," ",(0,l.kt)("inlineCode",{parentName:"p"},".annotations")," field:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"example"),(0,l.kt)("th",{parentName:"tr",align:null},"desc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.kubegems.io/is-plugin")),(0,l.kt)("td",{parentName:"tr",align:null},'(required) "true"'),(0,l.kt)("td",{parentName:"tr",align:null},"mark this chart is a kubegems plugin")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.kubegems.io/install-namespace")),(0,l.kt)("td",{parentName:"tr",align:null},'(required) "kubegems-installer"'),(0,l.kt)("td",{parentName:"tr",align:null},"plugin install namespace")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.kubegems.io/category")),(0,l.kt)("td",{parentName:"tr",align:null},'(required) "core/devops"'),(0,l.kt)("td",{parentName:"tr",align:null},"'core' is top category, 'devops' is category")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.kubegems.io/values-from")),(0,l.kt)("td",{parentName:"tr",align:null},'(optional) "logging,tracing"'),(0,l.kt)("td",{parentName:"tr",align:null},"use values from other plugins")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.kubegems.io/required")),(0,l.kt)("td",{parentName:"tr",align:null},'(optional) "true"'),(0,l.kt)("td",{parentName:"tr",align:null},"this plugin is required for init installation and can't be uninstall")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"plugins.kubegems.io/health-check")),(0,l.kt)("td",{parentName:"tr",align:null},'(optional) "deployments.apps/',"*",'"'),(0,l.kt)("td",{parentName:"tr",align:null},"health check targets")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'# plugins/nginx-ingress-controller/Chart.yaml\napiVersion: v2\nname: nginx-ingress-controller\nversion: 9.3.25 # \u5efa\u8bae\u4fdd\u6301\u4e0e\u4e0a\u6e38\u4e00\u81f4\nappVersion: 1.6.0\ndescription: NGINX Ingress Controller \u662f\u4e00\u4e2a Ingress \u63a7\u5236\u5668\uff0c\u5b83\u4f7f\u7528 NGINX \u7ba1\u7406 Kubernetes \u96c6\u7fa4\u4e2d\u5bf9 HTTP \u670d\u52a1\u7684\u5916\u90e8\u8bbf\u95ee\u3002\ndependencies:\n  - name: common\n    repository: file://../common\n    version: 1.x.x\nannotations:\n  plugins.kubegems.io/is-plugin: "true" # \u8868\u793a\u8fd9\u662f\u4e00\u4e2a kubegems \u63d2\u4ef6\uff0c\u5fc5\u8981\u3002\n  plugins.kubegems.io/install-namespace: ingress-nginx # \u63d2\u4ef6\u9700\u8981\u88ab\u5b89\u88c5\u7684namespace\uff0c\u5373templates\u4e2d\u7684\u8d44\u6e90\u5e94\u5f53\u88ab\u5b89\u88c5\u7684\u4f4d\u7f6e\u3002\u5982\u679c\u4e3a\u7a7a\u5219\u4e3a `kubegems-installer`\n  plugins.kubegems.io/category: kubernetes/\u7f51\u7edc # \u63d2\u4ef6\u5206\u7c7b\uff0c\u7528\u4e8eweb ui \u5206\u7c7b\u5c55\u793a\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-template"},'# plugins/nginx-ingress-controller/templates/nginx-ingress-controller.yaml\napiVersion: plugins.kubegems.io/v1beta1\nkind: Plugin\nmetadata:\n  name: nginx-ingress-controller\n  namespace: {{ .Release.Namespace }}\nspec:\n  kind: helm\n  url: https://charts.bitnami.com/bitnami\n  chart: nginx-ingress-controller\n  version: {{ .Chart.AppVersion }}\n  values:\n    defaultBackend:\n      image:\n        registry: {{ .Values.global.imageRegistry }}\n        repository: {{ .Values.global.imageRepository }}\n    global:\n      imageRegistry: {{ .Values.global.imageRegistry }}\n    image:\n      # repository: bitnami/nginx-ingress-controller\n      {{ include "common.images.repository" ( dict "repository" "bitnami/nginx-ingress-controller" "context" .) }}\n')),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"common.images.repository \u5728 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kubegems/plugins/blob/main/plugins/common/templates/_helpers.tpl"},"plugins/common")," \u4e0b,\u66f4\u591a\u4f7f\u7528\u793a\u4f8b\u53ef\u4ee5\u53c2\u7167\u5df2\u6709\u4f7f\u7528\u3002"))),(0,l.kt)("p",null,"\u589e\u52a0 values \u6587\u4ef6\uff0c\u5c06\u5e38\u7528\u9009\u9879\u63d0\u51fa\u5230 values \u4e2d\uff0c\u4ee5\u4fbf\u4e8e web ui \u6e32\u67d3\u3002\n\u4e3a\u4e86 web ui \u80fd\u591f\u6b63\u5e38\u6e32\u67d3\u8fd8\u9700\u8981\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kubegems/kubegems/blob/main/tools/helm-schema"},"kubegems/tools/helm-schema"),"\u6765\u751f\u6210 schema\uff0c\n\u9700\u8981\u5728 values \u4e2d\u589e\u52a0\u4e00\u4e9b\u6ce8\u91ca\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'# plugins/nginx-ingress-controller/values.yaml\n# global \u5b57\u6bb5\u4e0b\u7684\u503c\u4f1a\u4ece global \u63d2\u4ef6\u6ce8\u5165\nglobal:\n  imageRegistry: ""\n  imageRepository: ""\n# @title \u989d\u5916\u53c2\u6570\n# @title.en Extra Args\n# @title.jp \u989d\u5916\u5909\u6570\n# @schema additionalProperties=true\nextraArgs: {}\n# @title \u6307\u6807\u91c7\u96c6\n# @title.en Metrics\n# @title.jp \u6307\u6a19\nmetrics:\n  # @title \u542f\u7528\n  # @title.en Enable\n  enabled: false\n')),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a\uff1a")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u66f4\u591a\u53ef\u7528\u6ce8\u91ca\uff0c\u9700\u8981\u67e5\u770b helm-schema \u4f7f\u7528\u8bf4\u660e"))),(0,l.kt)("p",null,"\u5b8c\u6210\u540e\u6267\u884c schema \u81ea\u52a8\u751f\u6210:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ helm-schema plugins/nginx-ingress-controller\nReading plugins/nginx-ingress-controller/values.yaml\nWriting plugins/nginx-ingress-controller/i18n/values.schema.en.json\nWriting plugins/nginx-ingress-controller/i18n/values.schema.jp.json\nWriting plugins/nginx-ingress-controller/values.schema.json\n")),(0,l.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,l.kt)("h3",{id:"\u672c\u5730\u6d4b\u8bd5"},"\u672c\u5730\u6d4b\u8bd5"),(0,l.kt)("p",null,"\u63d2\u4ef6\u7f16\u5199\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u5148\u8fdb\u884c\u672c\u5730 helm template \u6765\u68c0\u67e5\u751f\u6210\u7684\u8d44\u6e90\u662f\u5426\u7b26\u5408\u9884\u671f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"$ helm dependency update plugins/nginx-ingress-controller\n$ helm template plugins/nginx-ingress-controller --namespace=ingress-nginx  --set global.imageRegistry=registry.cn-beijing.aliyuncs.com --set global.imageRepository=kubegems\n---\n# Source: nginx-ingress-controller/templates/nginx-ingress-controller.yaml\napiVersion: plugins.kubegems.io/v1beta1\nkind: Plugin\nmetadata:\n  name: nginx-ingress-controller\n  namespace: ingress-nginx\nspec:\n  kind: helm\n  url: https://charts.bitnami.com/bitnami\n  chart: nginx-ingress-controller\n  version: 1.6.0\n  values:\n    defaultBackend:\n      image:\n        registry: registry.cn-beijing.aliyuncs.com\n        repository: kubegems\n    global:\n      imageRegistry: registry.cn-beijing.aliyuncs.com\n    image:\n      # repository: bitnami/nginx-ingress-controller\n      repository: kubegems/nginx-ingress-controller\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u80fd\u591f\u6b63\u5e38\u6e32\u67d3\u51fa\u6211\u4eec\u9700\u8981\u7684 \u4f4d\u4e8e ingress-nginx \u7a7a\u95f4\u4e0b\u7684 plugin \u3002"),(0,l.kt)("h3",{id:"\u96c6\u6210\u6d4b\u8bd5"},"\u96c6\u6210\u6d4b\u8bd5"),(0,l.kt)("p",null,"\u4e3a\u4fdd\u8bc1\u63d2\u4ef6\u80fd\u591f\u6b63\u5e38\u7684\u4ece kubegems \u63d2\u4ef6\u7cfb\u7edf\u4e0a\u5c55\u793a\u548c\u5b89\u88c5\u90e8\u7f72\uff0c\u9700\u8981\u5728\u672c\u5730\u642d\u5efa\u63d2\u4ef6\u6e90\uff0c\u5e76\u5c06\u6e90\u6dfb\u52a0\u81f3 kubegems installer\uff0c\u7136\u540e\u624d\u80fd\u8fdb\u884c\u6d4b\u8bd5\u3002"),(0,l.kt)("p",null,"\u642d\u5efa\u672c\u5730\u6e90\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ mkdir tmp && cd tmp\n$ helm package -u ../plugins/nginx-ingress-controller\n$ helm repo index .\n$ python -m 'http.server'\nServing HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ..\n")),(0,l.kt)("p",null,"\u6dfb\u52a0\u672c\u5730\u6e90\u5230 kubegems \u63d2\u4ef6\u7cfb\u7edf\uff1a"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u76ee\u524d\u63d2\u4ef6\u6e90\u4f7f\u7528 secret \u5b58\u50a8\uff0c\u540e\u7eed\u53ef\u80fd\u4f1a\u53d8\u66f4")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'kubectl -n kubegems-installer create secret generic --from-literal=address=http://<YOUR IP>:8000 plugin-repository-local\nkubectl -n kubegems-installer label secrets plugin-repository-local plugins.kubegems.io/is-plugin-repo="true"\n')),(0,l.kt)("p",null,'\u7136\u540e\u5230 WEB UI \u4e0a "\u63d2\u4ef6\u7ba1\u7406" -> "\u68c0\u67e5\u63d2\u4ef6\u7248\u672c" \u4ee5\u5237\u65b0\u6e90\u4fe1\u606f\u3002'),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/kubegems/plugins/main/docs/assets/plugin-refresh.png",alt:"plugin-refresh"})),(0,l.kt)("p",null,"\u5237\u65b0\u540e\uff0c\u5373\u53ef\u5728\u5bf9\u5e94\u7684\u5206\u7c7b\u4e0b\u770b\u5230\u63d2\u4ef6\u4e86"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/kubegems/plugins/main/docs/assets/plugin-ingress-nginx.png",alt:"plugin-ingress-nginx"})),(0,l.kt)("p",null,"\u9009\u62e9 \u201c\u542f\u7528\u201d \u5373\u53ef\u770b\u5230\u4f7f\u7528 schema \u6e32\u67d3\u51fa\u7684 form,\u786e\u8ba4\u542f\u7528\u540e\u4f1a\u521b\u5efa\u5982\u4e0b plugin:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'$ kubectl -n kubegems-installer get plugins.plugins.kubegems.io nginx-ingress-controller -oyaml\napiVersion: plugins.kubegems.io/v1beta1\nkind: Plugin\nmetadata:\n  annotations:\n    plugins.kubegems.io/category: kubernetes/\u7f51\u7edc\n    plugins.kubegems.io/description: NGINX Ingress Controller \u662f\u4e00\u4e2a Ingress \u63a7\u5236\u5668\uff0c\u5b83\u4f7f\u7528\n      NGINX \u7ba1\u7406 Kubernetes \u96c6\u7fa4\u4e2d\u5bf9 HTTP \u670d\u52a1\u7684\u5916\u90e8\u8bbf\u95ee\u3002\n    plugins.kubegems.io/health-check: ""\n    plugins.kubegems.io/required: "false"\n  finalizers:\n  - plugins.kubegems.io/finalizer\n  name: nginx-ingress-controller\n  namespace: kubegems-installer\nspec:\n  chart: nginx-ingress-controller\n  installNamespace: ingress-nginx\n  kind: template\n  url: http://<YOUR IP>:8000\n  values: {}\n  valuesFrom:\n  - kind: ConfigMap\n    name: kubegems-global-values\n    optional: true\n    prefix: global.\n  version: 9.3.25\n')),(0,l.kt)("p",null,"\u9700\u8981\u7279\u522b\u6ce8\u610f\u7684\u662f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7531\u4e8e webui \u5c55\u793a\u65f6\u662f\u4ece kubegems-agent \u8bf7\u6c42\u5e76\u4e14\u4f1a\u7f13\u5b58\u8be5 chart\uff0c\u5982\u679c\u5728\u66f4\u65b0 chart \u540e\u9700\u8981\u518d\u6b21\u67e5\u770b\u6548\u679c\u7684\uff0c",(0,l.kt)("strong",{parentName:"li"},"\u53ef\u4ee5\u5c06\u7248\u672c\u53f7\u589e\u52a0\uff0c\u6216\u8005\u4ece agent \u4e2d\u5220\u9664\u7f13\u5b58\u7684 chart"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u90e8\u7f72\u65f6\uff0c\u662f\u7531 kubegems-installer \u6267\u884c\u7684\u5b89\u88c5\uff0c\u4e5f\u4f1a\u8bf7\u6c42\u5e76\u7f13\u5b58\u8be5 chart\uff0c\u5982\u679c\u5728\u66f4\u65b0 chart \u540e\u9700\u8981\u518d\u6b21\u67e5\u770b\u6548\u679c\u7684\uff0c",(0,l.kt)("strong",{parentName:"li"},"\u53ef\u4ee5\u5c06\u7248\u672c\u53f7\u589e\u52a0\uff0c\u6216\u8005\u4ece installer \u4e2d\u5220\u9664\u7f13\u5b58\u7684 chart"))),(0,l.kt)("h2",{id:"\u53d1\u5e03\u63d2\u4ef6"},"\u53d1\u5e03\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5728\u6240\u6709\u7684\u5de5\u4f5c\u51c6\u5907\u5b8c\u6210\u540e\uff0c\u5c31\u53ef\u4ee5\u51c6\u5907\u53d1\u5e03\u63d2\u4ef6\u4e86\u3002\u4e3a\u4fdd\u8bc1\u63d2\u4ef6\u6b63\u786e\uff0c\u53ef\u4ee5\u5148\u6267\u884c\u4e00\u6b21\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"make generate package check\n")),(0,l.kt)("p",null,"\u53d1\u5e03\u63d2\u4ef6\u53ea\u9700\u8981\u5c06\u63d2\u4ef6\u7684 chart \u6587\u4ef6\u653e\u5728\u5bf9\u5e94\u7684\u76ee\u5f55\uff0c\u7136\u540e\u6309\u7167 kubgems \u8d21\u732e\u6d41\u7a0b\u63d0\u51fa PR \u5373\u53ef\u3002"))}c.isMDXComponent=!0}}]);