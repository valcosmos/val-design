import{j as R}from"./jsx-runtime-ffb262ed.js";import{c as W}from"./index-e131923d.js";import{p as _,i as L}from"./index-edafa35b.js";import{P as n}from"./index-8d47fad6.js";import{R as D}from"./index-76fb7be0.js";function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);t&&(u=u.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,u)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?B(Object(r),!0).forEach(function(u){m(e,u,r[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach(function(u){Object.defineProperty(e,u,Object.getOwnPropertyDescriptor(r,u))})}return e}function F(e){"@babel/helpers - typeof";return F=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(e)}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function $(e,t){if(e==null)return{};var r={},u=Object.keys(e),a,o;for(o=0;o<u.length;o++)a=u[o],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}function U(e,t){if(e==null)return{};var r=$(e,t),u,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)u=o[a],!(t.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(e,u)&&(r[u]=e[u])}return r}function A(e){return q(e)||K(e)||V(e)||H()}function q(e){if(Array.isArray(e))return P(e)}function K(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function V(e,t){if(e){if(typeof e=="string")return P(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return P(e,t)}}function P(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,u=new Array(t);r<t;r++)u[r]=e[r];return u}function H(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M(e){var t,r=e.beat,u=e.fade,a=e.beatFade,o=e.bounce,d=e.shake,p=e.flash,s=e.spin,i=e.spinPulse,f=e.spinReverse,E=e.pulse,C=e.fixedWidth,b=e.inverse,O=e.border,v=e.listItem,l=e.flip,x=e.size,g=e.rotation,w=e.pull,j=(t={"fa-beat":r,"fa-fade":u,"fa-beat-fade":a,"fa-bounce":o,"fa-shake":d,"fa-flash":p,"fa-spin":s,"fa-spin-reverse":f,"fa-spin-pulse":i,"fa-pulse":E,"fa-fw":C,"fa-inverse":b,"fa-border":O,"fa-li":v,"fa-flip":l===!0,"fa-flip-horizontal":l==="horizontal"||l==="both","fa-flip-vertical":l==="vertical"||l==="both"},m(t,"fa-".concat(x),typeof x<"u"&&x!==null),m(t,"fa-rotate-".concat(g),typeof g<"u"&&g!==null&&g!==0),m(t,"fa-pull-".concat(w),typeof w<"u"&&w!==null),m(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(j).map(function(h){return j[h]?h:null}).filter(function(h){return h})}function G(e){return e=e-0,e===e}function S(e){return G(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,r){return r?r.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var J=["style"];function Q(e){return e.charAt(0).toUpperCase()+e.slice(1)}function X(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,r){var u=r.indexOf(":"),a=S(r.slice(0,u)),o=r.slice(u+1).trim();return a.startsWith("webkit")?t[Q(a)]=o:t[a]=o,t},{})}function z(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var u=(t.children||[]).map(function(s){return z(e,s)}),a=Object.keys(t.attributes||{}).reduce(function(s,i){var f=t.attributes[i];switch(i){case"class":s.attrs.className=f,delete t.attributes.class;break;case"style":s.attrs.style=X(f);break;default:i.indexOf("aria-")===0||i.indexOf("data-")===0?s.attrs[i.toLowerCase()]=f:s.attrs[S(i)]=f}return s},{attrs:{}}),o=r.style,d=o===void 0?{}:o,p=U(r,J);return a.attrs.style=c(c({},a.attrs.style),d),e.apply(void 0,[t.tag,c(c({},a.attrs),p)].concat(A(u)))}var T=!1;try{T=!0}catch{}function Y(){if(!T&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function k(e){if(e&&F(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(_.icon)return _.icon(e);if(e===null)return null;if(e&&F(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function I(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?m({},e,t):{}}var y=D.forwardRef(function(e,t){var r=e.icon,u=e.mask,a=e.symbol,o=e.className,d=e.title,p=e.titleId,s=e.maskId,i=k(r),f=I("classes",[].concat(A(M(e)),A(o.split(" ")))),E=I("transform",typeof e.transform=="string"?_.transform(e.transform):e.transform),C=I("mask",k(u)),b=L(i,c(c(c(c({},f),E),C),{},{symbol:a,title:d,titleId:p,maskId:s}));if(!b)return Y("Could not find icon",i),null;var O=b.abstract,v={ref:t};return Object.keys(e).forEach(function(l){y.defaultProps.hasOwnProperty(l)||(v[l]=e[l])}),Z(O[0],v)});y.displayName="FontAwesomeIcon";y.propTypes={beat:n.bool,border:n.bool,beatFade:n.bool,bounce:n.bool,className:n.string,fade:n.bool,flash:n.bool,mask:n.oneOfType([n.object,n.array,n.string]),maskId:n.string,fixedWidth:n.bool,inverse:n.bool,flip:n.oneOf([!0,!1,"horizontal","vertical","both"]),icon:n.oneOfType([n.object,n.array,n.string]),listItem:n.bool,pull:n.oneOf(["right","left"]),pulse:n.bool,rotation:n.oneOf([0,90,180,270]),shake:n.bool,size:n.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:n.bool,spinPulse:n.bool,spinReverse:n.bool,symbol:n.oneOfType([n.bool,n.string]),title:n.string,titleId:n.string,transform:n.oneOfType([n.string,n.object]),swapOpacity:n.bool};y.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Z=z.bind(null,D.createElement);const N=e=>{const{className:t,theme:r,...u}=e,a=W("v-icon",t,{[`icon-${r}`]:r});return R.jsx(y,{className:a,...u})};try{N.displayName="Icon",N.__docgenInfo={description:`> 本组件 基于 react-fontawesome 进行二次封装。可以在这里查看所有图标: https://fontawesome.com/v6/icons?m=free&s=solid
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


\`\`\``,displayName:"Icon",props:{theme:{defaultValue:null,description:"支持框架主题 根据主题显示不同的颜色",name:"theme",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"secondary"'},{value:'"info"'},{value:'"light"'},{value:'"dark"'}]}}}}}catch{}try{icon.displayName="icon",icon.__docgenInfo={description:`> 本组件 基于 react-fontawesome 进行二次封装。可以在这里查看所有图标: https://fontawesome.com/v6/icons?m=free&s=solid
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


\`\`\``,displayName:"icon",props:{theme:{defaultValue:null,description:"支持框架主题 根据主题显示不同的颜色",name:"theme",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"secondary"'},{value:'"info"'},{value:'"light"'},{value:'"dark"'}]}}}}}catch{}export{N as I};
//# sourceMappingURL=icon-f0e7d8c5.js.map
