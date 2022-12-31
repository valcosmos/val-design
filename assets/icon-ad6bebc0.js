var L=Object.defineProperty;var o=(e,t)=>L(e,"name",{value:t,configurable:!0});import{c as W}from"./index-ed86a6de.js";import{p as S,i as K}from"./index-eb6056e0.js";import{p as r}from"./index-50ee27ec.js";import{R as N}from"./index-d282687f.js";import{j as $}from"./jsx-runtime-920531fb.js";function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable})),n.push.apply(n,a)}return n}o(T,"ownKeys");function m(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?T(Object(n),!0).forEach(function(a){d(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}o(m,"_objectSpread2");function C(e){return C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(e)}o(C,"_typeof");function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}o(d,"_defineProperty");function U(e,t){if(e==null)return{};var n={},a=Object.keys(e),u,s;for(s=0;s<a.length;s++)u=a[s],!(t.indexOf(u)>=0)&&(n[u]=e[u]);return n}o(U,"_objectWithoutPropertiesLoose");function Y(e,t){if(e==null)return{};var n=U(e,t),a,u;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(u=0;u<s.length;u++)a=s[u],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}o(Y,"_objectWithoutProperties");function P(e){return q(e)||V(e)||H(e)||M()}o(P,"_toConsumableArray");function q(e){if(Array.isArray(e))return j(e)}o(q,"_arrayWithoutHoles");function V(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}o(V,"_iterableToArray");function H(e,t){if(e){if(typeof e=="string")return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}}o(H,"_unsupportedIterableToArray");function j(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}o(j,"_arrayLikeToArray");function M(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}o(M,"_nonIterableSpread");function G(e){var t,n=e.beat,a=e.fade,u=e.beatFade,s=e.bounce,p=e.shake,y=e.flash,i=e.spin,f=e.spinPulse,c=e.spinReverse,F=e.pulse,I=e.fixedWidth,v=e.inverse,x=e.border,g=e.listItem,l=e.flip,_=e.size,O=e.rotation,w=e.pull,B=(t={"fa-beat":n,"fa-fade":a,"fa-beat-fade":u,"fa-bounce":s,"fa-shake":p,"fa-flash":y,"fa-spin":i,"fa-spin-reverse":c,"fa-spin-pulse":f,"fa-pulse":F,"fa-fw":I,"fa-inverse":v,"fa-border":x,"fa-li":g,"fa-flip":l===!0,"fa-flip-horizontal":l==="horizontal"||l==="both","fa-flip-vertical":l==="vertical"||l==="both"},d(t,"fa-".concat(_),typeof _<"u"&&_!==null),d(t,"fa-rotate-".concat(O),typeof O<"u"&&O!==null&&O!==0),d(t,"fa-pull-".concat(w),typeof w<"u"&&w!==null),d(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(B).map(function(h){return B[h]?h:null}).filter(function(h){return h})}o(G,"classList");function J(e){return e=e-0,e===e}o(J,"_isNumerical");function D(e){return J(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}o(D,"camelize");var Q=["style"];function X(e){return e.charAt(0).toUpperCase()+e.slice(1)}o(X,"capitalize");function Z(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),u=D(n.slice(0,a)),s=n.slice(a+1).trim();return u.startsWith("webkit")?t[X(u)]=s:t[u]=s,t},{})}o(Z,"styleToObject");function R(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(i){return R(e,i)}),u=Object.keys(t.attributes||{}).reduce(function(i,f){var c=t.attributes[f];switch(f){case"class":i.attrs.className=c,delete t.attributes.class;break;case"style":i.attrs.style=Z(c);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?i.attrs[f.toLowerCase()]=c:i.attrs[D(f)]=c}return i},{attrs:{}}),s=n.style,p=s===void 0?{}:s,y=Y(n,Q);return u.attrs.style=m(m({},u.attrs.style),p),e.apply(void 0,[t.tag,m(m({},u.attrs),y)].concat(P(a)))}o(R,"convert");var z=!1;try{z=!0}catch{}function ee(){if(!z&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}o(ee,"log");function k(e){if(e&&C(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(S.icon)return S.icon(e);if(e===null)return null;if(e&&C(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}o(k,"normalizeIconArgs");function A(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?d({},e,t):{}}o(A,"objectWithKey");var b=N.forwardRef(function(e,t){var n=e.icon,a=e.mask,u=e.symbol,s=e.className,p=e.title,y=e.titleId,i=e.maskId,f=k(n),c=A("classes",[].concat(P(G(e)),P(s.split(" ")))),F=A("transform",typeof e.transform=="string"?S.transform(e.transform):e.transform),I=A("mask",k(a)),v=K(f,m(m(m(m({},c),F),I),{},{symbol:u,title:p,titleId:y,maskId:i}));if(!v)return ee("Could not find icon",f),null;var x=v.abstract,g={ref:t};return Object.keys(e).forEach(function(l){b.defaultProps.hasOwnProperty(l)||(g[l]=e[l])}),te(x[0],g)});b.displayName="FontAwesomeIcon";b.propTypes={beat:r.bool,border:r.bool,beatFade:r.bool,bounce:r.bool,className:r.string,fade:r.bool,flash:r.bool,mask:r.oneOfType([r.object,r.array,r.string]),maskId:r.string,fixedWidth:r.bool,inverse:r.bool,flip:r.oneOf([!0,!1,"horizontal","vertical","both"]),icon:r.oneOfType([r.object,r.array,r.string]),listItem:r.bool,pull:r.oneOf(["right","left"]),pulse:r.bool,rotation:r.oneOf([0,90,180,270]),shake:r.bool,size:r.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:r.bool,spinPulse:r.bool,spinReverse:r.bool,symbol:r.oneOfType([r.bool,r.string]),title:r.string,titleId:r.string,transform:r.oneOfType([r.string,r.object]),swapOpacity:r.bool};b.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var te=R.bind(null,N.createElement);const E=o(e=>{const{className:t,theme:n,...a}=e,u=W("v-icon",t,{[`icon-${n}`]:n});return $(b,{className:u,...a})},"Icon"),ie=E;try{E.displayName="Icon",E.__docgenInfo={description:`> 本组件 基于 react-fontawesome 进行二次封装。可以在这里查看所有图标: https://fontawesome.com/v6/icons?m=free&s=solid
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


\`\`\``,displayName:"Icon",props:{theme:{defaultValue:null,description:"支持框架主题 根据主题显示不同的颜色",name:"theme",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'},{value:'"primary"'},{value:'"secondary"'},{value:'"light"'},{value:'"dark"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Icon/icon.tsx#Icon"]={docgenInfo:E.__docgenInfo,name:"Icon",path:"src/components/Icon/icon.tsx#Icon"})}catch{}try{icon.displayName="icon",icon.__docgenInfo={description:`> 本组件 基于 react-fontawesome 进行二次封装。可以在这里查看所有图标: https://fontawesome.com/v6/icons?m=free&s=solid
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


\`\`\``,displayName:"icon",props:{theme:{defaultValue:null,description:"支持框架主题 根据主题显示不同的颜色",name:"theme",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'},{value:'"primary"'},{value:'"secondary"'},{value:'"light"'},{value:'"dark"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Icon/icon.tsx#icon"]={docgenInfo:icon.__docgenInfo,name:"icon",path:"src/components/Icon/icon.tsx#icon"})}catch{}export{ie as I};
//# sourceMappingURL=icon-ad6bebc0.js.map
