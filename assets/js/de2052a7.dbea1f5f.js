"use strict";(self.webpackChunkkubegems_docs=self.webpackChunkkubegems_docs||[]).push([[4092],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(g,i(i({ref:n},l),{},{components:t})):r.createElement(g,i({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},42409:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],s={title:"KubeGems \u95ee\u9898\u6392\u67e5",hide_title:!0,sidebar_position:4},c=void 0,p={unversionedId:"expand/troubleshooting",id:"expand/troubleshooting",title:"KubeGems \u95ee\u9898\u6392\u67e5",description:"KubeGems \u95ee\u9898\u6392\u67e5",source:"@site/docs/expand/troubleshooting.mdx",sourceDirName:"expand",slug:"/expand/troubleshooting",permalink:"/docs/expand/troubleshooting",editUrl:"https://github.com/kubegems/kubegems.io/edit/main/docs/expand/troubleshooting.mdx",tags:[],version:"current",lastUpdatedBy:"cnfatal",lastUpdatedAt:1669303471,formattedLastUpdatedAt:"2022/11/24",sidebarPosition:4,frontMatter:{title:"KubeGems \u95ee\u9898\u6392\u67e5",hide_title:!0,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u6a21\u578b\u5546\u5e97\u5f00\u53d1\u624b\u518c",permalink:"/docs/expand/development/modelstore"},next:{title:"\u5df2\u77e5\u95ee\u9898",permalink:"/docs/expand/known-issues"}},l={},u=[{value:"KubeGems \u95ee\u9898\u6392\u67e5",id:"kubegems-\u95ee\u9898\u6392\u67e5",level:2},{value:"1. kubegems-api \u4e0e kubegems-local \u65f6\u95f4\u4e0d\u540c\u6b65\u9020\u6210\u8bf7\u6c42\u8fd4\u56de 403",id:"1-kubegems-api-\u4e0e-kubegems-local-\u65f6\u95f4\u4e0d\u540c\u6b65\u9020\u6210\u8bf7\u6c42\u8fd4\u56de-403",level:3},{value:"2. \u4e3a kubegems \u524d\u7aef\u6dfb\u52a0\u4ee3\u7406\u540e\uff0c\u5e94\u7528\u4e2d\u5fc3\u72b6\u6001\u9875\u9762\u52a0\u8f7d\u5f88\u6162",id:"2-\u4e3a-kubegems-\u524d\u7aef\u6dfb\u52a0\u4ee3\u7406\u540e\u5e94\u7528\u4e2d\u5fc3\u72b6\u6001\u9875\u9762\u52a0\u8f7d\u5f88\u6162",level:3},{value:"3. KubeGems \u5347\u7ea7\u540e\u5e94\u7528\u90e8\u7f72\u62a5\u9519 invalid session: account password has changed since token issued",id:"3-kubegems-\u5347\u7ea7\u540e\u5e94\u7528\u90e8\u7f72\u62a5\u9519-invalid-session-account-password-has-changed-since-token-issued",level:3},{value:"4. \u542f\u7528\u6a21\u578b\u5546\u5e97\u540e,\u5bb9\u5668 kubegems-models-store \u72b6\u6001\u4e00\u76f4 Error",id:"4-\u542f\u7528\u6a21\u578b\u5546\u5e97\u540e\u5bb9\u5668-kubegems-models-store-\u72b6\u6001\u4e00\u76f4-error",level:3},{value:"5. \u66f4\u6539\u96c6\u7fa4 kubeconfig apiserver \u5730\u5740\u540e\uff0c\u65e0\u6cd5\u521b\u5efa\u5e94\u7528",id:"5-\u66f4\u6539\u96c6\u7fa4-kubeconfig-apiserver-\u5730\u5740\u540e\u65e0\u6cd5\u521b\u5efa\u5e94\u7528",level:3},{value:"\u5176\u5b83\u95ee\u9898",id:"\u5176\u5b83\u95ee\u9898",level:3}],d={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"kubegems-\u95ee\u9898\u6392\u67e5"},"KubeGems \u95ee\u9898\u6392\u67e5"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"1-kubegems-api-\u4e0e-kubegems-local-\u65f6\u95f4\u4e0d\u540c\u6b65\u9020\u6210\u8bf7\u6c42\u8fd4\u56de-403"},"1. kubegems-api \u4e0e kubegems-local \u65f6\u95f4\u4e0d\u540c\u6b65\u9020\u6210\u8bf7\u6c42\u8fd4\u56de 403"),(0,a.kt)("p",null,"KubeGems \u5185\u90e8\u5404\u6a21\u5757\u63a5\u53e3\u8c03\u7528\u4e4b\u95f4\u5747\u5f00\u542f\u4e86 http \u7b7e\u540d\uff0c\u53ef\u6709\u6548\u9632\u5fa1",(0,a.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u88ab\u7be1\u6539"),"\u3001",(0,a.kt)("strong",{parentName:"p"},"\u91cd\u653e\u653b\u51fb"),"\u7b49\u624b\u6bb5\u3002"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u4ec0\u4e48\u662f ",(0,a.kt)("a",{parentName:"h5",href:"https://oauth.net/http-signatures/"},"HTTP \u7b7e\u540d")," ?")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"})),(0,a.kt)("p",null,"\u5728 KubeGems \u4e2d\uff0chttpsign \u7684\u59cb\u7ec8\u5dee\u9ed8\u8ba4\u4e3a 15 \u5206\u949f\uff0c\u5982\u670d\u52a1\u95f4\u65f6\u95f4\u5dee\u5927\u4e8e 15 \u5206\u949f\u65f6\u4f1a\u62a5\u5982\u4e0b\u9519\u8bef ",(0,a.kt)("em",{parentName:"p"},"kubectl-api.log")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'2022-10-13 08:04:17.924 error   middleware/httpsig.go:32    signer  {"error": "httpsigs time out, origin: 1665649153, now: 2022-10-13 08:04:17.924265317 +0000 UTC m=+1221.099241986"}\n2022-10-13 08:04:17.925 warn    gin@v1.8.0/context.go:173   Forbidden   {"method": "GET", "path": "/v1/api-resources", "code": 403, "latency": 0.001017259}\n2022-10-13 08:04:24.35  error   middleware/httpsig.go:32    signer  {"error": "httpsigs time out, origin: 1665649160, now: 2022-10-13 08:04:24.350349102 +0000 UTC m=+1227.525325614"}\n2022-10-13 08:04:24.35  warn    gin@v1.8.0/context.go:173   Forbidden   {"method": "GET", "path": "/internal/plugins.kubegems.io/v1beta1/namespaces/kubegems-local/Plugin", "code": 403, "latency": 0.000517216}\n2022-10-13 08:04:24.445 error   middleware/httpsig.go:32    signer  {"error": "httpsigs time out, origin: 1665649160, now: 2022-10-13 08:04:24.445145498 +0000 UTC m=+1227.620122137"}\n2022-10-13 08:04:24.446 warn    gin@v1.8.0/context.go:173   Forbidden   {"method": "GET", "path": "/internal/plugins.kubegems.io/v1beta1/namespaces/kubegems-local/Plugin", "code": 403, "latency": 0.001365423}\n')),(0,a.kt)("p",null,"\u540c\u6b65\u96c6\u7fa4\u5185\u4e3b\u673a\u7684\u65f6\u95f4\u53ef\u89e3\u51b3\u4e0a\u8ff0\u95ee\u9898"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u63a8\u8350\u5728\u64cd\u4f5c\u7cfb\u7edf\u4e2d\u542f\u7528 NTP \u6216 Chorny \u59cb\u7ec8\u540c\u6b65\u670d\u52a1"))),(0,a.kt)("h3",{id:"2-\u4e3a-kubegems-\u524d\u7aef\u6dfb\u52a0\u4ee3\u7406\u540e\u5e94\u7528\u4e2d\u5fc3\u72b6\u6001\u9875\u9762\u52a0\u8f7d\u5f88\u6162"},"2. \u4e3a kubegems \u524d\u7aef\u6dfb\u52a0\u4ee3\u7406\u540e\uff0c\u5e94\u7528\u4e2d\u5fc3\u72b6\u6001\u9875\u9762\u52a0\u8f7d\u5f88\u6162"),(0,a.kt)("p",null,"\u7531\u4e8e\u5e94\u7528\u4e2d\u5fc3\u90e8\u5206\u63a5\u53e3\u540e\u7aef\u91c7\u7528\u4e86 SSE\uff08Server-Setnt Events\uff09 \u5355\u5411\u8fde\u63a5\u6765\u50cf\u9875\u9762\u63a8\u9001\u6d88\u606f\uff0c\u7531\u4e8e Nginx \u6216\u5176\u4ed6\u7f51\u5173\u9ed8\u8ba4\u5728\u4ee3\u7406\u5f00\u542f\u4e86 buffer \u6c60\u6765\u7f13\u51b2\u6570\u636e\uff0c\u7b49\u5230 buffer \u6ee1\u4e86\u6279\u91cf\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\uff0c\u8fd9\u5c31\u5bfc\u81f4 KubeGems \u524d\u7aef\u6570\u636e\u52a0\u8f7d\u53d8\u6162\u3002\n\u6b64\u95ee\u9898\u5173\u95ed proxy buffer \u5373\u53ef\u89e3\u51b3\u3002"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u4ec0\u4e48\u662f ",(0,a.kt)("a",{parentName:"h5",href:"https://en.wikipedia.org/wiki/Server-sent_events"},"Server-Setnt Events")," ?")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Nginx \u914d\u7f6e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nginx"},"location / {\n    proxy_set_header Upgrade $http_upgrade;\n    proxy_set_header Connection $connection_upgrade;\n    proxy_buffering off;\n    proxy_cache off;\n    proxy_pass http://kubegems-dashboard:8000;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Nginx Ingress \u914d\u7f6e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  annotations:\n    nginx.org/proxy-buffering: "false"\n    nginx.org/websocket-services: kubegems-dashboard\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"APISIX \u914d\u7f6e")),(0,a.kt)("p",null,"\u4fee\u6539 apisix \u914d\u7f6e\u6587\u4ef6\uff0c\u6ce8\u5165\u4ee5\u4e0b\u5185\u5bb9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"http_configuration_snippet: |-\n  proxy_buffering                 off;\n")),(0,a.kt)("h3",{id:"3-kubegems-\u5347\u7ea7\u540e\u5e94\u7528\u90e8\u7f72\u62a5\u9519-invalid-session-account-password-has-changed-since-token-issued"},"3. KubeGems \u5347\u7ea7\u540e\u5e94\u7528\u90e8\u7f72\u62a5\u9519 invalid session: account password has changed since token issued"),(0,a.kt)("p",null,"KubeGems \u4e2d\u5fc3\u670d\u52a1\u5347\u7ea7\u540e\u518d\u5e94\u7528\u90e8\u7f72\u65f6\uff0c\u9875\u9762\u62a5\u9519",(0,a.kt)("inlineCode",{parentName:"p"},"account password has changed since token issued"),"\uff0cKubeGems API \u65e5\u5fd7\u5982\u4e0b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"2022-11-09 02:09:05.716 error gin@v1.8.0/context.go:173 Error #1: rpc error: code = Unauthenticated desc = invalid session: account password has changed since token issued\n")),(0,a.kt)("p",null,"\u6b64\u95ee\u9898\u51fa\u73b0\u5728 KubeGems v1.22 \u7684\u7248\u672c\u5347\u7ea7\uff0c\u590d\u73b0\u4e8e ArgoCD \u5728\u66f4\u65b0\u8fc7\u7a0b\u4e2d\u7684\u4e22\u5931\u4e86\u8d26\u53f7\u8ba4\u8bc1\u4fe1\u606f\uff08 KubeGems API -> ArgoCD \uff09\u3002\u4fee\u590d\u6b64\u95ee\u9898\u9700\u91cd\u542f kubegems-api \u5bb9\u5668\u52a0\u8f7d argocd \u7684\u6700\u65b0\u914d\u7f6e\u5373\u53ef\u3002"),(0,a.kt)("h3",{id:"4-\u542f\u7528\u6a21\u578b\u5546\u5e97\u540e\u5bb9\u5668-kubegems-models-store-\u72b6\u6001\u4e00\u76f4-error"},"4. \u542f\u7528\u6a21\u578b\u5546\u5e97\u540e,\u5bb9\u5668 kubegems-models-store \u72b6\u6001\u4e00\u76f4 Error"),(0,a.kt)("p",null,"\u5bb9\u5668 models-store \u542f\u52a8\u65e5\u5fd7\u62a5\u9519\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'2022-11-10 02:02:26.654 warn    config/config.go:104    no config file found or config file format error: Config File "config" Not Found in "[/app /app/config]"\n2022-11-10 02:02:26.654 info    config/config.go:121    config from env: MONGO_ADDR=kubegems-models-mongodb:27017\n2022-11-10 02:02:26.654 info    config/config.go:121    config from env: MONGO_PASSWORD=**********\n2022-11-10 02:02:26.654 info    config/config.go:121    config from env: MONGO_USERNAME=root\n2022-11-10 02:02:26.654 info    config/config.go:121    config from env: MYSQL_ADDR=kubegems-mysql-headless:3306\n2022-11-10 02:02:26.654 info    config/config.go:121    config from env: MYSQL_PASSWORD=**********\n2022-11-10 02:02:26.654 info    config/config.go:121    config from flag: listen=:8080\n2022-11-10 02:02:26.654 info    config/config.go:121    config from flag: sync-addr=http://kubegems-models-sync:8080\nError: setup mongo: server selection error: server selection timeout, current topology: { Type: Unknown, Servers: [{ Addr: kubegems-models-mongodb:27017, Type: Unknown, Last error: connection() error occurred during connection handshake: dial tcp 10.96.165.211:27017: connect: connection refused }, ] }\nsetup mongo: server selection error: server selection timeout, current topology: { Type: Unknown, Servers: [{ Addr: kubegems-models-mongodb:27017, Type: Unknown, Last error: connection() error occurred during connection handshake: dial tcp 10.96.165.211:27017: connect: connection refused }, ] }\nError: setup mongo: server selection error: server selection timeout, current topology: { Type: Unknown, Servers: [{ Addr: kubegems-models-mongodb:27017, Type: Unknown, Last error: connection() error occurred during connection handshake: dial tcp 10.96.165.211:27017: connect: connection refused }, ] }\nsetup mongo: server selection error: server selection timeout, current topology: { Type: Unknown, Servers: [{ Addr: kubegems-models-mongodb:27017, Type: Unknown, Last error: connection() error occurred during connection handshake: dial tcp 10.96.165.211:27017: connect: connection refused }, ] }\n')),(0,a.kt)("p",null,"\u7531\u4e8e\u6a21\u578b\u5546\u5e97\u9700\u8981\u5411 HuggingFace \u548c OpenMMLab \u540c\u6b65\u5143\u6570\u636e\uff0c\u51fa\u73b0\u6b64\u9519\u8bef\u5728\u4e8e MongoDB \u5185\u65e0\u6570\u636e\uff0c\u5728 KubeGems \u7ba1\u7406\u5458\u540e\u53f0\u7684\u6a21\u578b\u5546\u5e97\u4e2d\u540c\u6b65\u6a21\u578b\u5373\u53ef\u3002"),(0,a.kt)("h3",{id:"5-\u66f4\u6539\u96c6\u7fa4-kubeconfig-apiserver-\u5730\u5740\u540e\u65e0\u6cd5\u521b\u5efa\u5e94\u7528"},"5. \u66f4\u6539\u96c6\u7fa4 kubeconfig apiserver \u5730\u5740\u540e\uff0c\u65e0\u6cd5\u521b\u5efa\u5e94\u7528"),(0,a.kt)("p",null,"\u521b\u5efa\u5e94\u7528\u65f6\u63d0\u793a:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},'rpc error: code = InvalidArgument desc = application destination spec for {xxxx} is invalid: unable to find destination server: there are 2 clusters with the same name: [https://xxx-apiserver1:6443 https://xxx-apiserver2:6443]"\n')),(0,a.kt)("p",null,"\u7531\u4e8e argo application \u6240\u5728 project \u4e2d\u5173\u8054\u7684 cluster \u4ee5 apiserver \u4f5c\u4e3a\u552f\u4e00\u6807\u8bc6\u5b58\u50a8\uff0c\n\u4fee\u6539 apiserver \u5730\u5740\u540e,\u5bf9\u539f cluster \u8fdb\u884c\u4fee\u6539 server \u5730\u5740\u540e\u4f1a\u65b0\u5efa\u4e00\u4e2a\u540c\u540d cluster(\u800c\u4e0d\u662f\u4fee\u6539\u5df2\u6709 cluster)\uff0c\u800c\u5bfc\u81f4\u5b58\u5728\u4e24\u4e2a\u540c\u540d cluster\u3002"),(0,a.kt)("p",null,"\u4e34\u65f6\u89e3\u51b3\u65b9\u6848\uff1a \u53ef\u4ee5\u5c06\u65e7 cluster \u5220\u9664\uff0c\u5e76\u624b\u52a8\u66f4\u65b0\u6240\u6709 project \u4e2d\u7684 server \u5730\u5740\u81f3\u65b0\u5730\u5740\uff08\u5982\u679c\u6709\uff09\u3002"),(0,a.kt)("h3",{id:"\u5176\u5b83\u95ee\u9898"},"\u5176\u5b83\u95ee\u9898"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u4ecd\u6709\u5176\u4ed6\u95ee\u9898\u65e0\u6cd5\u89e3\u51b3\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u6e20\u9053\u8054\u7cfb\u6211\u4eec\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"GitHub \u4e0a\u67e5\u8be2\u6216\u63d0\u4ea4\u662f\u5426\u6709\u76f8\u5173\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubegems/kubegems/issues"},"Issue"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u52a0\u5165 ",(0,a.kt)("a",{parentName:"p",href:"../../community/support#wechat"},"\u5fae\u4fe1\u7fa4")," \u5bfb\u6c42\u5e2e\u52a9")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u83b7\u53d6 ",(0,a.kt)("a",{parentName:"p",href:"https://wj.qq.com/s2/10923500/96e0/"},"\u5b98\u65b9\u652f\u6301"),", \u6211\u4eec\u4f1a\u5c3d\u5feb\u8054\u7cfb\u4f60"))))}m.isMDXComponent=!0}}]);