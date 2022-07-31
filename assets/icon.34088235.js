import{c as z}from"./index.b3d31cad.js";import{p as A,i as L}from"./index.es.231671ec.js";import{p as n}from"./index.0e0ded8f.js";import{R as k,j as W}from"./jsx-runtime.f3150366.js";function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?B(Object(r),!0).forEach(function(o){p(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function h(e){return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(e)}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function K(e,t){if(e==null)return{};var r={},o=Object.keys(e),a,u;for(u=0;u<o.length;u++)a=o[u],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}function $(e,t){if(e==null)return{};var r=K(e,t),o,a;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(a=0;a<u.length;a++)o=u[a],!(t.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,o)||(r[o]=e[o]))}return r}function S(e){return U(e)||Y(e)||q(e)||V()}function U(e){if(Array.isArray(e))return P(e)}function Y(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function q(e,t){if(!!e){if(typeof e=="string")return P(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return P(e,t)}}function P(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function V(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function H(e){var t,r=e.beat,o=e.fade,a=e.beatFade,u=e.bounce,m=e.shake,d=e.flash,s=e.spin,i=e.spinPulse,l=e.spinReverse,C=e.pulse,E=e.fixedWidth,b=e.inverse,F=e.border,x=e.listItem,f=e.flip,I=e.size,v=e.rotation,_=e.pull,j=(t={"fa-beat":r,"fa-fade":o,"fa-beat-fade":a,"fa-bounce":u,"fa-shake":m,"fa-flash":d,"fa-spin":s,"fa-spin-reverse":l,"fa-spin-pulse":i,"fa-pulse":C,"fa-fw":E,"fa-inverse":b,"fa-border":F,"fa-li":x,"fa-flip":f===!0,"fa-flip-horizontal":f==="horizontal"||f==="both","fa-flip-vertical":f==="vertical"||f==="both"},p(t,"fa-".concat(I),typeof I<"u"&&I!==null),p(t,"fa-rotate-".concat(v),typeof v<"u"&&v!==null&&v!==0),p(t,"fa-pull-".concat(_),typeof _<"u"&&_!==null),p(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(j).map(function(g){return j[g]?g:null}).filter(function(g){return g})}function M(e){return e=e-0,e===e}function N(e){return M(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,r){return r?r.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var G=["style"];function J(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Q(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,r){var o=r.indexOf(":"),a=N(r.slice(0,o)),u=r.slice(o+1).trim();return a.startsWith("webkit")?t[J(a)]=u:t[a]=u,t},{})}function D(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var o=(t.children||[]).map(function(s){return D(e,s)}),a=Object.keys(t.attributes||{}).reduce(function(s,i){var l=t.attributes[i];switch(i){case"class":s.attrs.className=l,delete t.attributes.class;break;case"style":s.attrs.style=Q(l);break;default:i.indexOf("aria-")===0||i.indexOf("data-")===0?s.attrs[i.toLowerCase()]=l:s.attrs[N(i)]=l}return s},{attrs:{}}),u=r.style,m=u===void 0?{}:u,d=$(r,G);return a.attrs.style=c(c({},a.attrs.style),m),e.apply(void 0,[t.tag,c(c({},a.attrs),d)].concat(S(o)))}var R=!1;try{R=!0}catch{}function X(){if(!R&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function T(e){if(e&&h(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(A.icon)return A.icon(e);if(e===null)return null;if(e&&h(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function w(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?p({},e,t):{}}var y=k.forwardRef(function(e,t){var r=e.icon,o=e.mask,a=e.symbol,u=e.className,m=e.title,d=e.titleId,s=e.maskId,i=T(r),l=w("classes",[].concat(S(H(e)),S(u.split(" ")))),C=w("transform",typeof e.transform=="string"?A.transform(e.transform):e.transform),E=w("mask",T(o)),b=L(i,c(c(c(c({},l),C),E),{},{symbol:a,title:m,titleId:d,maskId:s}));if(!b)return X("Could not find icon",i),null;var F=b.abstract,x={ref:t};return Object.keys(e).forEach(function(f){y.defaultProps.hasOwnProperty(f)||(x[f]=e[f])}),Z(F[0],x)});y.displayName="FontAwesomeIcon";y.propTypes={beat:n.exports.bool,border:n.exports.bool,beatFade:n.exports.bool,bounce:n.exports.bool,className:n.exports.string,fade:n.exports.bool,flash:n.exports.bool,mask:n.exports.oneOfType([n.exports.object,n.exports.array,n.exports.string]),maskId:n.exports.string,fixedWidth:n.exports.bool,inverse:n.exports.bool,flip:n.exports.oneOf([!0,!1,"horizontal","vertical","both"]),icon:n.exports.oneOfType([n.exports.object,n.exports.array,n.exports.string]),listItem:n.exports.bool,pull:n.exports.oneOf(["right","left"]),pulse:n.exports.bool,rotation:n.exports.oneOf([0,90,180,270]),shake:n.exports.bool,size:n.exports.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:n.exports.bool,spinPulse:n.exports.bool,spinReverse:n.exports.bool,symbol:n.exports.oneOfType([n.exports.bool,n.exports.string]),title:n.exports.string,titleId:n.exports.string,transform:n.exports.oneOfType([n.exports.string,n.exports.object]),swapOpacity:n.exports.bool};y.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Z=D.bind(null,k.createElement);const O=e=>{const{className:t,theme:r,...o}=e,a=z("v-icon",t,{[`icon-${r}`]:r});return W(y,{className:a,...o})},oe=O;try{O.displayName="Icon",O.__docgenInfo={description:`> \u672C\u7EC4\u4EF6 \u57FA\u4E8E react-fontawesome \u8FDB\u884C\u4E8C\u6B21\u5C01\u88C5\u3002\u53EF\u4EE5\u5728\u8FD9\u91CC\u67E5\u770B\u6240\u6709\u56FE\u6807: https://fontawesome.com/v6/icons?m=free&s=solid
> \u5982\u82E5\u9700\u8981\u4F7F\u7528\uFF0C\u53EF\u9009\u62E9**\u5168\u5C40\u5F15\u5165**\u6216\u8005**\u6309\u9700\u5BFC\u5165**

### \u5F15\u7528\u65B9\u6CD5

\`\`\`js

// \u6309\u9700\u5012\u5165

import { Icon } from 'val-design'

import { faCoffee } from '@fortawesome/free-solid-svg-icons'

<Icon icon="faCoffee" size="3x" />

// \u5168\u5C40\u5012\u5165
// index.tsx \u4E2D\u5BFC\u5165
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

// \u7EC4\u4EF6\u4E2D\u4F7F\u7528\uFF08\u76F4\u63A5\u5BFC\u5165\u5373\u53EF\uFF09
<Icon icon="faCoffee" size="3x" />


\`\`\``,displayName:"Icon",props:{theme:{defaultValue:null,description:"\u652F\u6301\u6846\u67B6\u4E3B\u9898 \u6839\u636E\u4E3B\u9898\u663E\u793A\u4E0D\u540C\u7684\u989C\u8272",name:"theme",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'},{value:'"primary"'},{value:'"secondary"'},{value:'"light"'},{value:'"dark"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Icon/icon.tsx#Icon"]={docgenInfo:O.__docgenInfo,name:"Icon",path:"src/components/Icon/icon.tsx#Icon"})}catch{}try{icon.displayName="icon",icon.__docgenInfo={description:`> \u672C\u7EC4\u4EF6 \u57FA\u4E8E react-fontawesome \u8FDB\u884C\u4E8C\u6B21\u5C01\u88C5\u3002\u53EF\u4EE5\u5728\u8FD9\u91CC\u67E5\u770B\u6240\u6709\u56FE\u6807: https://fontawesome.com/v6/icons?m=free&s=solid
> \u5982\u82E5\u9700\u8981\u4F7F\u7528\uFF0C\u53EF\u9009\u62E9**\u5168\u5C40\u5F15\u5165**\u6216\u8005**\u6309\u9700\u5BFC\u5165**

### \u5F15\u7528\u65B9\u6CD5

\`\`\`js

// \u6309\u9700\u5012\u5165

import { Icon } from 'val-design'

import { faCoffee } from '@fortawesome/free-solid-svg-icons'

<Icon icon="faCoffee" size="3x" />

// \u5168\u5C40\u5012\u5165
// index.tsx \u4E2D\u5BFC\u5165
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

// \u7EC4\u4EF6\u4E2D\u4F7F\u7528\uFF08\u76F4\u63A5\u5BFC\u5165\u5373\u53EF\uFF09
<Icon icon="faCoffee" size="3x" />


\`\`\``,displayName:"icon",props:{theme:{defaultValue:null,description:"\u652F\u6301\u6846\u67B6\u4E3B\u9898 \u6839\u636E\u4E3B\u9898\u663E\u793A\u4E0D\u540C\u7684\u989C\u8272",name:"theme",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'},{value:'"primary"'},{value:'"secondary"'},{value:'"light"'},{value:'"dark"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Icon/icon.tsx#icon"]={docgenInfo:icon.__docgenInfo,name:"icon",path:"src/components/Icon/icon.tsx#icon"})}catch{}export{oe as I};
//# sourceMappingURL=icon.34088235.js.map
