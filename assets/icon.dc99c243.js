var L=Object.defineProperty;var u=(e,t)=>L(e,"name",{value:t,configurable:!0});import{c as W}from"./index.220dfe0f.js";import{p as S,i as K}from"./index.241e153c.js";import{p as n}from"./index.6f8f5b77.js";import{R as N,j as $}from"./jsx-runtime.5a2f0600.js";function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,o)}return r}u(T,"ownKeys");function p(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?T(Object(r),!0).forEach(function(o){m(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}u(p,"_objectSpread2");function C(e){return C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(e)}u(C,"_typeof");function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}u(m,"_defineProperty");function U(e,t){if(e==null)return{};var r={},o=Object.keys(e),a,s;for(s=0;s<o.length;s++)a=o[s],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}u(U,"_objectWithoutPropertiesLoose");function Y(e,t){if(e==null)return{};var r=U(e,t),o,a;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)o=s[a],!(t.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,o)||(r[o]=e[o]))}return r}u(Y,"_objectWithoutProperties");function P(e){return q(e)||V(e)||H(e)||M()}u(P,"_toConsumableArray");function q(e){if(Array.isArray(e))return j(e)}u(q,"_arrayWithoutHoles");function V(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}u(V,"_iterableToArray");function H(e,t){if(!!e){if(typeof e=="string")return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(e,t)}}u(H,"_unsupportedIterableToArray");function j(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}u(j,"_arrayLikeToArray");function M(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}u(M,"_nonIterableSpread");function G(e){var t,r=e.beat,o=e.fade,a=e.beatFade,s=e.bounce,d=e.shake,y=e.flash,i=e.spin,f=e.spinPulse,c=e.spinReverse,E=e.pulse,F=e.fixedWidth,x=e.inverse,I=e.border,v=e.listItem,l=e.flip,_=e.size,g=e.rotation,w=e.pull,B=(t={"fa-beat":r,"fa-fade":o,"fa-beat-fade":a,"fa-bounce":s,"fa-shake":d,"fa-flash":y,"fa-spin":i,"fa-spin-reverse":c,"fa-spin-pulse":f,"fa-pulse":E,"fa-fw":F,"fa-inverse":x,"fa-border":I,"fa-li":v,"fa-flip":l===!0,"fa-flip-horizontal":l==="horizontal"||l==="both","fa-flip-vertical":l==="vertical"||l==="both"},m(t,"fa-".concat(_),typeof _<"u"&&_!==null),m(t,"fa-rotate-".concat(g),typeof g<"u"&&g!==null&&g!==0),m(t,"fa-pull-".concat(w),typeof w<"u"&&w!==null),m(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(B).map(function(O){return B[O]?O:null}).filter(function(O){return O})}u(G,"classList");function J(e){return e=e-0,e===e}u(J,"_isNumerical");function D(e){return J(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,r){return r?r.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}u(D,"camelize");var Q=["style"];function X(e){return e.charAt(0).toUpperCase()+e.slice(1)}u(X,"capitalize");function Z(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,r){var o=r.indexOf(":"),a=D(r.slice(0,o)),s=r.slice(o+1).trim();return a.startsWith("webkit")?t[X(a)]=s:t[a]=s,t},{})}u(Z,"styleToObject");function R(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var o=(t.children||[]).map(function(i){return R(e,i)}),a=Object.keys(t.attributes||{}).reduce(function(i,f){var c=t.attributes[f];switch(f){case"class":i.attrs.className=c,delete t.attributes.class;break;case"style":i.attrs.style=Z(c);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?i.attrs[f.toLowerCase()]=c:i.attrs[D(f)]=c}return i},{attrs:{}}),s=r.style,d=s===void 0?{}:s,y=Y(r,Q);return a.attrs.style=p(p({},a.attrs.style),d),e.apply(void 0,[t.tag,p(p({},a.attrs),y)].concat(P(o)))}u(R,"convert");var z=!1;try{z=!0}catch{}function ee(){if(!z&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}u(ee,"log");function k(e){if(e&&C(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(S.icon)return S.icon(e);if(e===null)return null;if(e&&C(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}u(k,"normalizeIconArgs");function A(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?m({},e,t):{}}u(A,"objectWithKey");var b=N.forwardRef(function(e,t){var r=e.icon,o=e.mask,a=e.symbol,s=e.className,d=e.title,y=e.titleId,i=e.maskId,f=k(r),c=A("classes",[].concat(P(G(e)),P(s.split(" ")))),E=A("transform",typeof e.transform=="string"?S.transform(e.transform):e.transform),F=A("mask",k(o)),x=K(f,p(p(p(p({},c),E),F),{},{symbol:a,title:d,titleId:y,maskId:i}));if(!x)return ee("Could not find icon",f),null;var I=x.abstract,v={ref:t};return Object.keys(e).forEach(function(l){b.defaultProps.hasOwnProperty(l)||(v[l]=e[l])}),te(I[0],v)});b.displayName="FontAwesomeIcon";b.propTypes={beat:n.exports.bool,border:n.exports.bool,beatFade:n.exports.bool,bounce:n.exports.bool,className:n.exports.string,fade:n.exports.bool,flash:n.exports.bool,mask:n.exports.oneOfType([n.exports.object,n.exports.array,n.exports.string]),maskId:n.exports.string,fixedWidth:n.exports.bool,inverse:n.exports.bool,flip:n.exports.oneOf([!0,!1,"horizontal","vertical","both"]),icon:n.exports.oneOfType([n.exports.object,n.exports.array,n.exports.string]),listItem:n.exports.bool,pull:n.exports.oneOf(["right","left"]),pulse:n.exports.bool,rotation:n.exports.oneOf([0,90,180,270]),shake:n.exports.bool,size:n.exports.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:n.exports.bool,spinPulse:n.exports.bool,spinReverse:n.exports.bool,symbol:n.exports.oneOfType([n.exports.bool,n.exports.string]),title:n.exports.string,titleId:n.exports.string,transform:n.exports.oneOfType([n.exports.string,n.exports.object]),swapOpacity:n.exports.bool};b.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var te=R.bind(null,N.createElement);const h=u(e=>{const{className:t,theme:r,...o}=e,a=W("v-icon",t,{[`icon-${r}`]:r});return $(b,{className:a,...o})},"Icon"),se=h;try{h.displayName="Icon",h.__docgenInfo={description:`> \u672C\u7EC4\u4EF6 \u57FA\u4E8E react-fontawesome \u8FDB\u884C\u4E8C\u6B21\u5C01\u88C5\u3002\u53EF\u4EE5\u5728\u8FD9\u91CC\u67E5\u770B\u6240\u6709\u56FE\u6807: https://fontawesome.com/v6/icons?m=free&s=solid
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


\`\`\``,displayName:"Icon",props:{theme:{defaultValue:null,description:"\u652F\u6301\u6846\u67B6\u4E3B\u9898 \u6839\u636E\u4E3B\u9898\u663E\u793A\u4E0D\u540C\u7684\u989C\u8272",name:"theme",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'},{value:'"primary"'},{value:'"secondary"'},{value:'"light"'},{value:'"dark"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Icon/icon.tsx#Icon"]={docgenInfo:h.__docgenInfo,name:"Icon",path:"src/components/Icon/icon.tsx#Icon"})}catch{}try{icon.displayName="icon",icon.__docgenInfo={description:`> \u672C\u7EC4\u4EF6 \u57FA\u4E8E react-fontawesome \u8FDB\u884C\u4E8C\u6B21\u5C01\u88C5\u3002\u53EF\u4EE5\u5728\u8FD9\u91CC\u67E5\u770B\u6240\u6709\u56FE\u6807: https://fontawesome.com/v6/icons?m=free&s=solid
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


\`\`\``,displayName:"icon",props:{theme:{defaultValue:null,description:"\u652F\u6301\u6846\u67B6\u4E3B\u9898 \u6839\u636E\u4E3B\u9898\u663E\u793A\u4E0D\u540C\u7684\u989C\u8272",name:"theme",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'},{value:'"primary"'},{value:'"secondary"'},{value:'"light"'},{value:'"dark"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Icon/icon.tsx#icon"]={docgenInfo:icon.__docgenInfo,name:"icon",path:"src/components/Icon/icon.tsx#icon"})}catch{}export{se as I};
//# sourceMappingURL=icon.dc99c243.js.map
