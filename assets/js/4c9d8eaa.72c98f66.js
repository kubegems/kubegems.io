"use strict";(self.webpackChunkkubegems_docs=self.webpackChunkkubegems_docs||[]).push([[3692],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=l(n),p=a,d=m["".concat(u,".").concat(p)]||m[p]||f[p]||c;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<c;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26312:function(e,t,n){n.r(t),n.d(t,{assets:function(){return M},contentTitle:function(){return T},default:function(){return L},frontMatter:function(){return C},metadata:function(){return I},toc:function(){return D}});var r=n(87462),a=n(63366),c=n(67294),i=n(3905),o=n(86010),u=n(41451),l=n(72875);var s=n(40181);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,c=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);i=!0);}catch(u){o=!0,a=u}finally{try{i||null==n.return||n.return()}finally{if(o)throw a}}return c}}(e,t)||(0,s.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m=n(45987),p=n(73935),d=n(2870),y=n(85879),v=!("undefined"!=typeof window&&window.document&&window.document.createElement);function h(e){var t=[];return c.Children.forEach(e,(function(e){t.push(e)})),t}function g(e,t){var n=null;return e&&e.forEach((function(e){!n&&e&&e.key===t&&(n=e)})),n}function E(e,t,n){var r;return r="function"==typeof e?e({key:t,index:n}):e,Array.isArray(r)?2===r.length?r:[r[0],r[0]]:[r,r]}var b={left:{opacity:[1,0],translateX:[0,-30]},top:{opacity:[1,0],translateY:[0,-30]},right:{opacity:[1,0],translateX:[0,30]},bottom:{opacity:[1,0],translateY:[0,30]},alpha:{opacity:[1,0]},scale:{opacity:[1,0],scale:[1,0]},scaleBig:{opacity:[1,0],scale:[1,2]},scaleX:{opacity:[1,0],scaleX:[1,0]},scaleY:{opacity:[1,0],scaleY:[1,0]}},k=["component","componentProps","interval","duration","delay","type","animConfig","ease","leaveReverse","forcedReplay","animatingClassName","onEnd","appear"],O=function(){},N=(0,c.forwardRef)((function(e,t){var n=e.component,r=void 0===n?"div":n,a=e.componentProps,i=void 0===a?{}:a,o=e.interval,s=void 0===o?100:o,N=e.duration,Z=void 0===N?450:N,A=e.delay,R=void 0===A?0:A,w=e.type,x=void 0===w?"right":w,j=e.animConfig,P=void 0===j?null:j,S=e.ease,_=void 0===S?"easeOutQuart":S,C=e.leaveReverse,T=void 0!==C&&C,I=e.forcedReplay,M=void 0!==I&&I,D=e.animatingClassName,F=void 0===D?["queue-anim-entering","queue-anim-leaving"]:D,L=e.onEnd,W=void 0===L?O:L,G=e.appear,X=void 0===G||G,Y=(0,m.Z)(e,k),K=(0,c.useRef)({}),q=(0,c.useRef)([]),H=(0,c.useRef)([]),z=(0,c.useRef)([]),B=(0,c.useRef)([]),Q=(0,c.useRef)({}),V=(0,c.useRef)({}),J=(0,c.useRef)({}),U=(0,c.useRef)({}),$=(0,c.useRef)(!1),ee=(0,c.useRef)([]),te=f((0,c.useState)(),2),ne=te[0],re=te[1],ae=f((0,c.useState)({}),2),ce=ae[0],ie=ae[1],oe=function(e,t,n){var r={};return Object.keys(e).forEach((function(a){Array.isArray(e[a])?r[a]=e[a][t]:(!n&&!t||n&&t)&&(r[a]=e[a])})),r},ue=function(e,t,n){return Array.isArray(e)?e.map((function(e){return oe(e,t,n)})):oe(e,t,n)},le=function(e,t,n,r){return P?ue(E(P,e,t)[n],r,n):(a=E(x,e,t)[n],ue(b[a],r));var a},se=function(e,t){var n=t.targets;n.className=n.className.replace(F[1],""),-1===n.className.indexOf(F[0])&&(n.className="".concat(n.className," ").concat(F[0]).trim()),q.current.indexOf(e)>=0&&q.current.splice(q.current.indexOf(e),1),K.current[e]=!0},fe=function(e,t){if(!(z.current.indexOf(e)>=0)){var n=t.targets;n.className=n.className.replace(F[0],"").trim(),delete U.current[e],W({key:e,type:"enter",target:n})}},me=function(e,t){var n=t.targets;n.className=n.className.replace(F[0],""),-1===n.className.indexOf(F[1])&&(n.className="".concat(n.className," ").concat(F[1]).trim())},pe=function(t,n){if(h(e.children).findIndex((function(e){return e&&e.key===t})),!(h(e.children).findIndex((function(e){return e&&e.key===t}))>=0)){if(delete K.current[t],delete U.current[t],ee.current=ee.current.filter((function(e){return e.key!==t})),z.current.indexOf(t)>=0&&z.current.splice(z.current.indexOf(t),1),!z.current.some((function(e){return ce[e]}))){var r=h(e.children);re(r),ie((0,l.Z)({},K.current)),B.current.forEach((function(e){delete J.current[e]}))}var a=n.targets;a.className=a.className.replace(F[1],"").trim(),W({key:t,type:"leave",target:a})}},de=function(e,t){var n=E(s,e,t)[0],r=E(R,e,t)[0];Q.current[e]=y.Z.timeout((function(){!function(e){ce[e]=!0,y.Z.clear(Q.current[e]),delete Q.current[e],ie((0,l.Z)({},ce))}(e)}),n*t+r)},ye=function(e){y.Z.clear(Q.current[e]),delete Q.current[e]},ve=function(e,t,n,r){var a=function(e,t,n){var r="enter"===n?0:1,a="enter"===n?1:0,c=le(e,t,r,"enter"===n?0:1),i="enter"!==n||!M&&K.current[e]?null:le(e,t,r,a),o=E(_,e,t)[r],u=E(Z,e,t)[r];return Array.isArray(_)&&(_.length>2||Array.isArray(_[0]))&&(o=o.map((function(e){return 100*e})),o="M0,100C".concat(o[0],",").concat(100-o[1],",").concat(o[2],",").concat(100-o[3],",100,0")),{startAnim:i,animate:c,ease:o,duration:u}}(e,t,r),c=function(t){("enter"===r?se:me)(e,t)},i=function(t){("enter"===r?fe:pe)(e,t)};if(Array.isArray(a.animate)){var o=a.animate.length-1;return a.animate.map((function(e,t){return(0,l.Z)((0,l.Z)({},e),{},{startAt:a.startAnim?a.startAnim[t]:void 0,duration:a.duration/o,delay:t||"leave"!==r?0:n,onStart:t?void 0:c,onComplete:t===o?i:void 0})}))}return(0,l.Z)((0,l.Z)({},a.animate),{},{startAt:a.startAnim||void 0,ease:a.ease,duration:a.duration,onStart:c,onComplete:i,delay:n})};return(0,c.useEffect)((function(){return function(){Object.keys(U.current).forEach((function(e){var t=U.current[e];t&&t.kill()}))}}),[]),(0,c.useEffect)((function(){var t,n,r,a,c,i=h(e.children).filter((function(e){return e})),o=ee.current.filter((function(e){return e})),u=(t=i,r=[],a={},c=[],o.forEach((function(e){e&&(g(t,e.key)?(c.length&&(a[e.key]=c,c=[]),n=e.key):e.key&&c.push(e))})),n||(r=r.concat(c)),t.forEach((function(e){e&&(a.hasOwnProperty(e.key)&&(r=r.concat(a[e.key])),r.push(e),e.key===n&&(r=r.concat(c)))})),r),s=[],f=[];if(X||$.current)o.forEach((function(e){if(e){var t=e.key;!g(i,t)&&t&&(f.push(t),y.Z.clear(Q.current[t]),delete Q.current[t])}})),i.forEach((function(e){if(e){var t=e.key;(!g(o,t)&&t||(!J.current[t]||"leave"===J.current[t]||q.current.indexOf(t)>=0)&&-1===f.indexOf(t))&&s.push(t)}}));else{var m={};u.forEach((function(e){e&&e.key&&(m[e.key]=!0)})),ee.current=u,K.current=(0,l.Z)({},m),ie(m)}q.current=s,H.current=[].concat(s),z.current=f,B.current=[].concat(f),re(u)}),[e.children]),(0,c.useLayoutEffect)((function(){if(ee.current=ne||[],X||$.current){var e=(0,u.Z)(q.current),t=(0,u.Z)(z.current);e.forEach(de),t.forEach(ye)}ne&&($.current=!0)}),[ne]),(0,c.useLayoutEffect)((function(){ne&&ne.forEach((function(e){var t=e.key,n=V.current[t];if(n){var r,a=z.current.indexOf(t),c=E(s,t,a),i=E(R,t,a);if(a>=0){if("leave"===J.current[t])return;var o=T?z.current.length-a-1:a,u=c[1]*o+i[1];r=ve(t,a,u,"leave"),J.current[t]="leave"}else{if("enter"===J.current[t]||-1===q.current.indexOf(t))return;a=H.current.indexOf(t);var f=c[0]*a+i[0];r=ve(t,a,"leave"===J.current[t]?f:0,"enter"),J.current[t]="enter"}if(U.current[t]&&U.current[t].kill(),M){var m=(0,l.Z)((0,l.Z)({},Array.isArray(r)?r[0].startAt:r.startAt),{},{type:"set"});(0,d.ZP)(n,{animation:m})}U.current[t]=(0,d.ZP)(n,{animation:r})}}))}),[ce,ne]),(0,c.useMemo)((function(){if(v)return(0,c.createElement)(r,(0,l.Z)((0,l.Z)((0,l.Z)({},Y),i),{},{ref:t}));var e=h(ne).map((function(e){return e&&e.key?ce[e.key]&&(0,c.cloneElement)(e,{ref:function(t){V.current[e.key]=t instanceof Element?t:(0,p.findDOMNode)(t),t||delete V.current[e.key]},key:e.key}):e})),n=(0,l.Z)((0,l.Z)((0,l.Z)({},Y),i),{},{ref:t});return(0,c.createElement)(r,n,e)}),[ce,ne])})),Z=n(39960),A="member_iZ5b",R="member__avatar_SZHV",w="member__name_g829",x="member__post_cotu",j=function(e){var t=e.avatar,n=e.name,r=e.post;return c.createElement("div",{className:A},c.createElement(Z.Z,{to:t.replace(".png","")},c.createElement("img",{src:t,alt:n,className:R})),c.createElement("div",null,c.createElement("div",{className:w},n),c.createElement("div",{className:x},r)))},P="team__item_MeRg",S=function(){return c.createElement(N,{type:"bottom",className:"row"},[{id:"1",avatar:"https://github.com/KinglyWayne.png",name:"Wayne Wang",post:"Principal Solutions Engineer"},{id:"2",avatar:"https://github.com/LinkMaq.png",name:"Link Ma",post:"PM / SOFTWARE ENGINEER"},{id:"3",avatar:"https://github.com/pepesi.png",name:"Deng Yu",post:"SOFTWARE ENGINEER"},{id:"4",avatar:"https://github.com/chenshunliang.png",name:"Leon Chen",post:"Frontend Developer"},{id:"5",avatar:"https://github.com/cnfatal.png",name:"Likun Zhang",post:"SOFTWARE ENGINEER"},{id:"6",avatar:"https://github.com/jojotong.png",name:"Lintong Sun",post:"SOFTWARE ENGINEER"},{id:"7",avatar:"https://github.com/kubegems.png",name:"Ruitao Liu",post:"SOFTWARE ENGINEER"},{id:"8",avatar:"https://github.com/zhanghe9702.png",name:"He Zhang",post:"SOFTWARE ENGINEER"}].map((function(e){return c.createElement("div",{key:e.id,className:(0,o.Z)(P,"col col--3")},c.createElement(j,e))})))},_=["components"],C={title:"\u56e2\u961f",hide_title:!0,sidebar_position:2},T=void 0,I={unversionedId:"team",id:"team",title:"\u56e2\u961f",description:"\u56e2\u961f",source:"@site/community/1-team.mdx",sourceDirName:".",slug:"/team",permalink:"/community/team",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u56e2\u961f",hide_title:!0,sidebar_position:2},sidebar:"community",previous:{title:"\u652f\u6301",permalink:"/community/support"},next:{title:"\u793e\u533a\u7cbe\u9009",permalink:"/community/resources"}},M={},D=[{value:"\u56e2\u961f",id:"\u56e2\u961f",level:2}],F={toc:D};function L(e){var t=e.components,n=(0,a.Z)(e,_);return(0,i.kt)("wrapper",(0,r.Z)({},F,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u56e2\u961f"},"\u56e2\u961f"),(0,i.kt)("p",null,"KubeGems \u56e2\u961f\u81f4\u529b\u4e8e\u6838\u5fc3\u529f\u80fd\u7814\u53d1\u3001\u4e91\u539f\u751f(CNCF)\u793e\u533a\u8d21\u732e \u548c \u63d0\u4f9b Kubernetes \u89e3\u51b3\u65b9\u6848\u3002"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u5217\u51fa\u4e86 KubeGems \u56e2\u961f\u7684\u73b0\u6709\u6210\u5458\u6216\u8d21\u732e\u8005\u3002"),(0,i.kt)(S,{mdxType:"Team"}))}L.isMDXComponent=!0}}]);