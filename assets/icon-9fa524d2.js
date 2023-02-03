var R=Object.defineProperty;var o=(e,t)=>R(e,"name",{value:t,configurable:!0});import{j as $}from"./jsx-runtime-69008c6b.js";import{c as L}from"./index-ed86a6de.js";import{p as A,i as U}from"./index-eb6056e0.js";import{p as n}from"./index-50ee27ec.js";import{R as S}from"./index-a38f3d31.js";function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable})),r.push.apply(r,a)}return r}o(N,"ownKeys");function m(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?N(Object(r),!0).forEach(function(a){d(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}o(m,"_objectSpread2");function E(e){return E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(e)}o(E,"_typeof");function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}o(d,"_defineProperty");function q(e,t){if(e==null)return{};var r={},a=Object.keys(e),u,s;for(s=0;s<a.length;s++)u=a[s],!(t.indexOf(u)>=0)&&(r[u]=e[u]);return r}o(q,"_objectWithoutPropertiesLoose");function K(e,t){if(e==null)return{};var r=q(e,t),a,u;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(u=0;u<s.length;u++)a=s[u],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}o(K,"_objectWithoutProperties");function P(e){return V(e)||H(e)||M(e)||G()}o(P,"_toConsumableArray");function V(e){if(Array.isArray(e))return j(e)}o(V,"_arrayWithoutHoles");function H(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}o(H,"_iterableToArray");function M(e,t){if(e){if(typeof e=="string")return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(e,t)}}o(M,"_unsupportedIterableToArray");function j(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}o(j,"_arrayLikeToArray");function G(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}o(G,"_nonIterableSpread");function J(e){var t,r=e.beat,a=e.fade,u=e.beatFade,s=e.bounce,p=e.shake,y=e.flash,i=e.spin,l=e.spinPulse,c=e.spinReverse,C=e.pulse,O=e.fixedWidth,v=e.inverse,x=e.border,g=e.listItem,f=e.flip,w=e.size,h=e.rotation,I=e.pull,k=(t={"fa-beat":r,"fa-fade":a,"fa-beat-fade":u,"fa-bounce":s,"fa-shake":p,"fa-flash":y,"fa-spin":i,"fa-spin-reverse":c,"fa-spin-pulse":l,"fa-pulse":C,"fa-fw":O,"fa-inverse":v,"fa-border":x,"fa-li":g,"fa-flip":f===!0,"fa-flip-horizontal":f==="horizontal"||f==="both","fa-flip-vertical":f==="vertical"||f==="both"},d(t,"fa-".concat(w),typeof w<"u"&&w!==null),d(t,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),d(t,"fa-pull-".concat(I),typeof I<"u"&&I!==null),d(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(k).map(function(F){return k[F]?F:null}).filter(function(F){return F})}o(J,"classList");function Q(e){return e=e-0,e===e}o(Q,"_isNumerical");function z(e){return Q(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,r){return r?r.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}o(z,"camelize");var X=["style"];function Y(e){return e.charAt(0).toUpperCase()+e.slice(1)}o(Y,"capitalize");function Z(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,r){var a=r.indexOf(":"),u=z(r.slice(0,a)),s=r.slice(a+1).trim();return u.startsWith("webkit")?t[Y(u)]=s:t[u]=s,t},{})}o(Z,"styleToObject");function T(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(i){return T(e,i)}),u=Object.keys(t.attributes||{}).reduce(function(i,l){var c=t.attributes[l];switch(l){case"class":i.attrs.className=c,delete t.attributes.class;break;case"style":i.attrs.style=Z(c);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?i.attrs[l.toLowerCase()]=c:i.attrs[z(l)]=c}return i},{attrs:{}}),s=r.style,p=s===void 0?{}:s,y=K(r,X);return u.attrs.style=m(m({},u.attrs.style),p),e.apply(void 0,[t.tag,m(m({},u.attrs),y)].concat(P(a)))}o(T,"convert");var W=!1;try{W=!0}catch{}function ee(){if(!W&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}o(ee,"log");function D(e){if(e&&E(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(A.icon)return A.icon(e);if(e===null)return null;if(e&&E(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}o(D,"normalizeIconArgs");function _(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?d({},e,t):{}}o(_,"objectWithKey");var b=S.forwardRef(function(e,t){var r=e.icon,a=e.mask,u=e.symbol,s=e.className,p=e.title,y=e.titleId,i=e.maskId,l=D(r),c=_("classes",[].concat(P(J(e)),P(s.split(" ")))),C=_("transform",typeof e.transform=="string"?A.transform(e.transform):e.transform),O=_("mask",D(a)),v=U(l,m(m(m(m({},c),C),O),{},{symbol:u,title:p,titleId:y,maskId:i}));if(!v)return ee("Could not find icon",l),null;var x=v.abstract,g={ref:t};return Object.keys(e).forEach(function(f){b.defaultProps.hasOwnProperty(f)||(g[f]=e[f])}),te(x[0],g)});b.displayName="FontAwesomeIcon";b.propTypes={beat:n.bool,border:n.bool,beatFade:n.bool,bounce:n.bool,className:n.string,fade:n.bool,flash:n.bool,mask:n.oneOfType([n.object,n.array,n.string]),maskId:n.string,fixedWidth:n.bool,inverse:n.bool,flip:n.oneOf([!0,!1,"horizontal","vertical","both"]),icon:n.oneOfType([n.object,n.array,n.string]),listItem:n.bool,pull:n.oneOf(["right","left"]),pulse:n.bool,rotation:n.oneOf([0,90,180,270]),shake:n.bool,size:n.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:n.bool,spinPulse:n.bool,spinReverse:n.bool,symbol:n.oneOfType([n.bool,n.string]),title:n.string,titleId:n.string,transform:n.oneOfType([n.string,n.object]),swapOpacity:n.bool};b.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var te=T.bind(null,S.createElement);const B=o(e=>{const{className:t,theme:r,...a}=e,u=L("v-icon",t,{[`icon-${r}`]:r});return $(b,{className:u,...a})},"Icon"),ie=B;try{B.displayName="Icon",B.__docgenInfo={description:`> 本组件 基于 react-fontawesome 进行二次封装。可以在这里查看所有图标: https://fontawesome.com/v6/icons?m=free&s=solid
> 如若需要使用，可选择**全局引入**或者**按需导入**

### 引用方法

\`\`\`js

// 按需倒入

import { Icon } from 'val-design'

import { faCoffee } from '@fortawesome/free-solid-svg-icons'

<Icon icon="faCoffee" size="3x" />

// 全局倒入
// index.tsx 中导入
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

// 组件中使用（直接导入即可）
<Icon icon="faCoffee" size="3x" />


\`\`\``,displayName:"Icon",props:{theme:{defaultValue:null,description:"支持框架主题 根据主题显示不同的颜色",name:"theme",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'},{value:'"primary"'},{value:'"secondary"'},{value:'"light"'},{value:'"dark"'}]}}}}}catch{}try{icon.displayName="icon",icon.__docgenInfo={description:`> 本组件 基于 react-fontawesome 进行二次封装。可以在这里查看所有图标: https://fontawesome.com/v6/icons?m=free&s=solid
> 如若需要使用，可选择**全局引入**或者**按需导入**

### 引用方法

\`\`\`js

// 按需倒入

import { Icon } from 'val-design'

import { faCoffee } from '@fortawesome/free-solid-svg-icons'

<Icon icon="faCoffee" size="3x" />

// 全局倒入
// index.tsx 中导入
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

// 组件中使用（直接导入即可）
<Icon icon="faCoffee" size="3x" />


\`\`\``,displayName:"icon",props:{theme:{defaultValue:null,description:"支持框架主题 根据主题显示不同的颜色",name:"theme",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'},{value:'"primary"'},{value:'"secondary"'},{value:'"light"'},{value:'"dark"'}]}}}}}catch{}export{ie as I};
//# sourceMappingURL=icon-9fa524d2.js.map
