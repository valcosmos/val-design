var aa=Object.defineProperty;var i=(n,t)=>aa(n,"name",{value:t,configurable:!0});function et(n,t){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),a.push.apply(a,e)}return a}i(et,"ownKeys");function u(n){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?et(Object(a),!0).forEach(function(e){k(n,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):et(Object(a)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))})}return n}i(u,"_objectSpread2");function wn(n){return wn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wn(n)}i(wn,"_typeof");function ea(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}i(ea,"_classCallCheck");function rt(n,t){for(var a=0;a<t.length;a++){var e=t[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}i(rt,"_defineProperties");function ra(n,t,a){return t&&rt(n.prototype,t),a&&rt(n,a),Object.defineProperty(n,"prototype",{writable:!1}),n}i(ra,"_createClass");function k(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}i(k,"_defineProperty");function Hn(n,t){return oa(n)||fa(n,t)||Ct(n,t)||ca()}i(Hn,"_slicedToArray");function sn(n){return ia(n)||sa(n)||Ct(n)||la()}i(sn,"_toConsumableArray");function ia(n){if(Array.isArray(n))return Mn(n)}i(ia,"_arrayWithoutHoles");function oa(n){if(Array.isArray(n))return n}i(oa,"_arrayWithHoles");function sa(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}i(sa,"_iterableToArray");function fa(n,t){var a=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(a!=null){var e=[],r=!0,s=!1,o,f;try{for(a=a.call(n);!(r=(o=a.next()).done)&&(e.push(o.value),!(t&&e.length===t));r=!0);}catch(l){s=!0,f=l}finally{try{!r&&a.return!=null&&a.return()}finally{if(s)throw f}}return e}}i(fa,"_iterableToArrayLimit");function Ct(n,t){if(n){if(typeof n=="string")return Mn(n,t);var a=Object.prototype.toString.call(n).slice(8,-1);if(a==="Object"&&n.constructor&&(a=n.constructor.name),a==="Map"||a==="Set")return Array.from(n);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Mn(n,t)}}i(Ct,"_unsupportedIterableToArray");function Mn(n,t){(t==null||t>n.length)&&(t=n.length);for(var a=0,e=new Array(t);a<t;a++)e[a]=n[a];return e}i(Mn,"_arrayLikeToArray");function la(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}i(la,"_nonIterableSpread");function ca(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}i(ca,"_nonIterableRest");var it=i(function(){},"noop"),Xn={},It={},Nt=null,Tt={mark:it,measure:it};try{typeof window<"u"&&(Xn=window),typeof document<"u"&&(It=document),typeof MutationObserver<"u"&&(Nt=MutationObserver),typeof performance<"u"&&(Tt=performance)}catch{}var ua=Xn.navigator||{},ot=ua.userAgent,st=ot===void 0?"":ot,D=Xn,h=It,ft=Nt,cn=Tt;D.document;var R=!!h.documentElement&&!!h.head&&typeof h.addEventListener=="function"&&typeof h.createElement=="function",_t=~st.indexOf("MSIE")||~st.indexOf("Trident/"),un,mn,dn,vn,gn,_="___FONT_AWESOME___",Ln=16,Mt="fa",Lt="svg-inline--fa",X="data-fa-i2svg",Rn="data-fa-pseudo-element",ma="data-fa-pseudo-element-pending",Gn="data-prefix",Bn="data-icon",lt="fontawesome-i2svg",da="async",va=["HTML","HEAD","STYLE","SCRIPT"],Rt=function(){try{return!0}catch{return!1}}(),p="classic",y="sharp",Vn=[p,y];function fn(n){return new Proxy(n,{get:i(function(a,e){return e in a?a[e]:a[p]},"get")})}i(fn,"familyProxy");var tn=fn((un={},k(un,p,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),k(un,y,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),un)),an=fn((mn={},k(mn,p,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),k(mn,y,{solid:"fass",regular:"fasr"}),mn)),en=fn((dn={},k(dn,p,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),k(dn,y,{fass:"fa-solid",fasr:"fa-regular"}),dn)),ga=fn((vn={},k(vn,p,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),k(vn,y,{"fa-solid":"fass","fa-regular":"fasr"}),vn)),ba=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,Ft="fa-layers-text",pa=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ha=fn((gn={},k(gn,p,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),k(gn,y,{900:"fass",400:"fasr"}),gn)),zt=[1,2,3,4,5,6,7,8,9,10],ya=zt.concat([11,12,13,14,15,16,17,18,19,20]),ka=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],W={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},rn=new Set;Object.keys(an[p]).map(rn.add.bind(rn));Object.keys(an[y]).map(rn.add.bind(rn));var wa=[].concat(Vn,sn(rn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",W.GROUP,W.SWAP_OPACITY,W.PRIMARY,W.SECONDARY]).concat(zt.map(function(n){return"".concat(n,"x")})).concat(ya.map(function(n){return"w-".concat(n)})),Z=D.FontAwesomeConfig||{};function xa(n){var t=h.querySelector("script["+n+"]");if(t)return t.getAttribute(n)}i(xa,"getAttrConfig");function Aa(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}i(Aa,"coerce");if(h&&typeof h.querySelector=="function"){var Ea=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ea.forEach(function(n){var t=Hn(n,2),a=t[0],e=t[1],r=Aa(xa(a));r!=null&&(Z[e]=r)})}var Dt={styleDefault:"solid",familyDefault:"classic",cssPrefix:Mt,replacementClass:Lt,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Z.familyPrefix&&(Z.cssPrefix=Z.familyPrefix);var K=u(u({},Dt),Z);K.autoReplaceSvg||(K.observeMutations=!1);var d={};Object.keys(Dt).forEach(function(n){Object.defineProperty(d,n,{enumerable:!0,set:i(function(a){K[n]=a,nn.forEach(function(e){return e(d)})},"set"),get:i(function(){return K[n]},"get")})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:i(function(t){K.cssPrefix=t,nn.forEach(function(a){return a(d)})},"set"),get:i(function(){return K.cssPrefix},"get")});D.FontAwesomeConfig=d;var nn=[];function Sa(n){return nn.push(n),function(){nn.splice(nn.indexOf(n),1)}}i(Sa,"onChange");var z=Ln,T={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Oa(n){if(!(!n||!R)){var t=h.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=n;for(var a=h.head.childNodes,e=null,r=a.length-1;r>-1;r--){var s=a[r],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(e=s)}return h.head.insertBefore(t,e),n}}i(Oa,"insertCss");var Pa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function on(){for(var n=12,t="";n-- >0;)t+=Pa[Math.random()*62|0];return t}i(on,"nextUniqueId");function Q(n){for(var t=[],a=(n||[]).length>>>0;a--;)t[a]=n[a];return t}i(Q,"toArray");function qn(n){return n.classList?Q(n.classList):(n.getAttribute("class")||"").split(" ").filter(function(t){return t})}i(qn,"classArray");function jt(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}i(jt,"htmlEscape");function Ca(n){return Object.keys(n||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(jt(n[a]),'" ')},"").trim()}i(Ca,"joinAttributes");function En(n){return Object.keys(n||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(n[a].trim(),";")},"")}i(En,"joinStyles");function Kn(n){return n.size!==T.size||n.x!==T.x||n.y!==T.y||n.rotate!==T.rotate||n.flipX||n.flipY}i(Kn,"transformIsMeaningful");function Ia(n){var t=n.transform,a=n.containerWidth,e=n.iconWidth,r={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),f="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(f)},m={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:l,path:m}}i(Ia,"transformForSvg");function Na(n){var t=n.transform,a=n.width,e=a===void 0?Ln:a,r=n.height,s=r===void 0?Ln:r,o=n.startCentered,f=o===void 0?!1:o,l="";return f&&_t?l+="translate(".concat(t.x/z-e/2,"em, ").concat(t.y/z-s/2,"em) "):f?l+="translate(calc(-50% + ".concat(t.x/z,"em), calc(-50% + ").concat(t.y/z,"em)) "):l+="translate(".concat(t.x/z,"em, ").concat(t.y/z,"em) "),l+="scale(".concat(t.size/z*(t.flipX?-1:1),", ").concat(t.size/z*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}i(Na,"transformForCss");var Ta=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Yt(){var n=Mt,t=Lt,a=d.cssPrefix,e=d.replacementClass,r=Ta;if(a!==n||e!==t){var s=new RegExp("\\.".concat(n,"\\-"),"g"),o=new RegExp("\\--".concat(n,"\\-"),"g"),f=new RegExp("\\.".concat(t),"g");r=r.replace(s,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(f,".".concat(e))}return r}i(Yt,"css");var ct=!1;function In(){d.autoAddCss&&!ct&&(Oa(Yt()),ct=!0)}i(In,"ensureCss");var _a={mixout:i(function(){return{dom:{css:Yt,insertCss:In}}},"mixout"),hooks:i(function(){return{beforeDOMElementCreation:i(function(){In()},"beforeDOMElementCreation"),beforeI2svg:i(function(){In()},"beforeI2svg")}},"hooks")},M=D||{};M[_]||(M[_]={});M[_].styles||(M[_].styles={});M[_].hooks||(M[_].hooks={});M[_].shims||(M[_].shims=[]);var C=M[_],$t=[],Ma=i(function n(){h.removeEventListener("DOMContentLoaded",n),xn=1,$t.map(function(t){return t()})},"listener"),xn=!1;R&&(xn=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState),xn||h.addEventListener("DOMContentLoaded",Ma));function La(n){R&&(xn?setTimeout(n,0):$t.push(n))}i(La,"domready");function ln(n){var t=n.tag,a=n.attributes,e=a===void 0?{}:a,r=n.children,s=r===void 0?[]:r;return typeof n=="string"?jt(n):"<".concat(t," ").concat(Ca(e),">").concat(s.map(ln).join(""),"</").concat(t,">")}i(ln,"toHtml");function ut(n,t,a){if(n&&n[t]&&n[t][a])return{prefix:t,iconName:a,icon:n[t][a]}}i(ut,"iconFromMapping");var Ra=i(function(t,a){return function(e,r,s,o){return t.call(a,e,r,s,o)}},"bindInternal4"),Nn=i(function(t,a,e,r){var s=Object.keys(t),o=s.length,f=r!==void 0?Ra(a,r):a,l,m,c;for(e===void 0?(l=1,c=t[s[0]]):(l=0,c=e);l<o;l++)m=s[l],c=f(c,t[m],m,t);return c},"fastReduceObject");function Fa(n){for(var t=[],a=0,e=n.length;a<e;){var r=n.charCodeAt(a++);if(r>=55296&&r<=56319&&a<e){var s=n.charCodeAt(a++);(s&64512)==56320?t.push(((r&1023)<<10)+(s&1023)+65536):(t.push(r),a--)}else t.push(r)}return t}i(Fa,"ucs2decode");function Fn(n){var t=Fa(n);return t.length===1?t[0].toString(16):null}i(Fn,"toHex");function za(n,t){var a=n.length,e=n.charCodeAt(t),r;return e>=55296&&e<=56319&&a>t+1&&(r=n.charCodeAt(t+1),r>=56320&&r<=57343)?(e-55296)*1024+r-56320+65536:e}i(za,"codePointAt");function mt(n){return Object.keys(n).reduce(function(t,a){var e=n[a],r=!!e.icon;return r?t[e.iconName]=e.icon:t[a]=e,t},{})}i(mt,"normalizeIcons");function zn(n,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=a.skipHooks,r=e===void 0?!1:e,s=mt(t);typeof C.hooks.addPack=="function"&&!r?C.hooks.addPack(n,mt(t)):C.styles[n]=u(u({},C.styles[n]||{}),s),n==="fas"&&zn("fa",t)}i(zn,"defineIcons");var bn,pn,hn,B=C.styles,Da=C.shims,ja=(bn={},k(bn,p,Object.values(en[p])),k(bn,y,Object.values(en[y])),bn),Qn=null,Ut={},Wt={},Ht={},Xt={},Gt={},Ya=(pn={},k(pn,p,Object.keys(tn[p])),k(pn,y,Object.keys(tn[y])),pn);function $a(n){return~wa.indexOf(n)}i($a,"isReserved");function Ua(n,t){var a=t.split("-"),e=a[0],r=a.slice(1).join("-");return e===n&&r!==""&&!$a(r)?r:null}i(Ua,"getIconName");var Bt=i(function(){var t=i(function(s){return Nn(B,function(o,f,l){return o[l]=Nn(f,s,{}),o},{})},"lookup");Ut=t(function(r,s,o){if(s[3]&&(r[s[3]]=o),s[2]){var f=s[2].filter(function(l){return typeof l=="number"});f.forEach(function(l){r[l.toString(16)]=o})}return r}),Wt=t(function(r,s,o){if(r[o]=o,s[2]){var f=s[2].filter(function(l){return typeof l=="string"});f.forEach(function(l){r[l]=o})}return r}),Gt=t(function(r,s,o){var f=s[2];return r[o]=o,f.forEach(function(l){r[l]=o}),r});var a="far"in B||d.autoFetchSvg,e=Nn(Da,function(r,s){var o=s[0],f=s[1],l=s[2];return f==="far"&&!a&&(f="fas"),typeof o=="string"&&(r.names[o]={prefix:f,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:f,iconName:l}),r},{names:{},unicodes:{}});Ht=e.names,Xt=e.unicodes,Qn=Sn(d.styleDefault,{family:d.familyDefault})},"build");Sa(function(n){Qn=Sn(n.styleDefault,{family:d.familyDefault})});Bt();function Jn(n,t){return(Ut[n]||{})[t]}i(Jn,"byUnicode");function Wa(n,t){return(Wt[n]||{})[t]}i(Wa,"byLigature");function H(n,t){return(Gt[n]||{})[t]}i(H,"byAlias");function Vt(n){return Ht[n]||{prefix:null,iconName:null}}i(Vt,"byOldName");function Ha(n){var t=Xt[n],a=Jn("fas",n);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}i(Ha,"byOldUnicode");function j(){return Qn}i(j,"getDefaultUsablePrefix");var Zn=i(function(){return{prefix:null,iconName:null,rest:[]}},"emptyCanonicalIcon");function Sn(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,e=a===void 0?p:a,r=tn[e][n],s=an[e][n]||an[e][r],o=n in C.styles?n:null;return s||o||null}i(Sn,"getCanonicalPrefix");var dt=(hn={},k(hn,p,Object.keys(en[p])),k(hn,y,Object.keys(en[y])),hn);function On(n){var t,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.skipLookups,r=e===void 0?!1:e,s=(t={},k(t,p,"".concat(d.cssPrefix,"-").concat(p)),k(t,y,"".concat(d.cssPrefix,"-").concat(y)),t),o=null,f=p;(n.includes(s[p])||n.some(function(m){return dt[p].includes(m)}))&&(f=p),(n.includes(s[y])||n.some(function(m){return dt[y].includes(m)}))&&(f=y);var l=n.reduce(function(m,c){var v=Ua(d.cssPrefix,c);if(B[c]?(c=ja[f].includes(c)?ga[f][c]:c,o=c,m.prefix=c):Ya[f].indexOf(c)>-1?(o=c,m.prefix=Sn(c,{family:f})):v?m.iconName=v:c!==d.replacementClass&&c!==s[p]&&c!==s[y]&&m.rest.push(c),!r&&m.prefix&&m.iconName){var g=o==="fa"?Vt(m.iconName):{},b=H(m.prefix,m.iconName);g.prefix&&(o=null),m.iconName=g.iconName||b||m.iconName,m.prefix=g.prefix||m.prefix,m.prefix==="far"&&!B.far&&B.fas&&!d.autoFetchSvg&&(m.prefix="fas")}return m},Zn());return(n.includes("fa-brands")||n.includes("fab"))&&(l.prefix="fab"),(n.includes("fa-duotone")||n.includes("fad"))&&(l.prefix="fad"),!l.prefix&&f===y&&(B.fass||d.autoFetchSvg)&&(l.prefix="fass",l.iconName=H(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=j()||"fas"),l}i(On,"getCanonicalIcon");var Xa=function(){function n(){ea(this,n),this.definitions={}}return i(n,"Library"),ra(n,[{key:"add",value:i(function(){for(var a=this,e=arguments.length,r=new Array(e),s=0;s<e;s++)r[s]=arguments[s];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(f){a.definitions[f]=u(u({},a.definitions[f]||{}),o[f]),zn(f,o[f]);var l=en[p][f];l&&zn(l,o[f]),Bt()})},"add")},{key:"reset",value:i(function(){this.definitions={}},"reset")},{key:"_pullDefinitions",value:i(function(a,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(s){var o=r[s],f=o.prefix,l=o.iconName,m=o.icon,c=m[2];a[f]||(a[f]={}),c.length>0&&c.forEach(function(v){typeof v=="string"&&(a[f][v]=m)}),a[f][l]=m}),a},"_pullDefinitions")}]),n}(),vt=[],V={},q={},Ga=Object.keys(q);function Ba(n,t){var a=t.mixoutsTo;return vt=n,V={},Object.keys(q).forEach(function(e){Ga.indexOf(e)===-1&&delete q[e]}),vt.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(a[o]=r[o]),wn(r[o])==="object"&&Object.keys(r[o]).forEach(function(f){a[o]||(a[o]={}),a[o][f]=r[o][f]})}),e.hooks){var s=e.hooks();Object.keys(s).forEach(function(o){V[o]||(V[o]=[]),V[o].push(s[o])})}e.provides&&e.provides(q)}),a}i(Ba,"registerPlugins");function Dn(n,t){for(var a=arguments.length,e=new Array(a>2?a-2:0),r=2;r<a;r++)e[r-2]=arguments[r];var s=V[n]||[];return s.forEach(function(o){t=o.apply(null,[t].concat(e))}),t}i(Dn,"chainHooks");function G(n){for(var t=arguments.length,a=new Array(t>1?t-1:0),e=1;e<t;e++)a[e-1]=arguments[e];var r=V[n]||[];r.forEach(function(s){s.apply(null,a)})}i(G,"callHooks");function L(){var n=arguments[0],t=Array.prototype.slice.call(arguments,1);return q[n]?q[n].apply(null,t):void 0}i(L,"callProvided");function jn(n){n.prefix==="fa"&&(n.prefix="fas");var t=n.iconName,a=n.prefix||j();if(t)return t=H(a,t)||t,ut(qt.definitions,a,t)||ut(C.styles,a,t)}i(jn,"findIconDefinition");var qt=new Xa,Va=i(function(){d.autoReplaceSvg=!1,d.observeMutations=!1,G("noAuto")},"noAuto"),qa={i2svg:i(function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return R?(G("beforeI2svg",t),L("pseudoElements2svg",t),L("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},"i2svg"),watch:i(function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,La(function(){Qa({autoReplaceSvgRoot:a}),G("watch",t)})},"watch")},Ka={icon:i(function(t){if(t===null)return null;if(wn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:H(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],e=Sn(t[0]);return{prefix:e,iconName:H(e,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(d.cssPrefix,"-"))>-1||t.match(ba))){var r=On(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||j(),iconName:H(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var s=j();return{prefix:s,iconName:H(s,t)||t}}},"icon")},S={noAuto:Va,config:d,dom:qa,parse:Ka,library:qt,findIconDefinition:jn,toHtml:ln},Qa=i(function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,e=a===void 0?h:a;(Object.keys(C.styles).length>0||d.autoFetchSvg)&&R&&d.autoReplaceSvg&&S.dom.i2svg({node:e})},"autoReplace");function Pn(n,t){return Object.defineProperty(n,"abstract",{get:t}),Object.defineProperty(n,"html",{get:i(function(){return n.abstract.map(function(e){return ln(e)})},"get")}),Object.defineProperty(n,"node",{get:i(function(){if(R){var e=h.createElement("div");return e.innerHTML=n.html,e.children}},"get")}),n}i(Pn,"domVariants");function Ja(n){var t=n.children,a=n.main,e=n.mask,r=n.attributes,s=n.styles,o=n.transform;if(Kn(o)&&a.found&&!e.found){var f=a.width,l=a.height,m={x:f/l/2,y:.5};r.style=En(u(u({},s),{},{"transform-origin":"".concat(m.x+o.x/16,"em ").concat(m.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}i(Ja,"asIcon");function Za(n){var t=n.prefix,a=n.iconName,e=n.children,r=n.attributes,s=n.symbol,o=s===!0?"".concat(t,"-").concat(d.cssPrefix,"-").concat(a):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:o}),children:e}]}]}i(Za,"asSymbol");function nt(n){var t=n.icons,a=t.main,e=t.mask,r=n.prefix,s=n.iconName,o=n.transform,f=n.symbol,l=n.title,m=n.maskId,c=n.titleId,v=n.extra,g=n.watchable,b=g===void 0?!1:g,x=e.found?e:a,O=x.width,P=x.height,I=r==="fak",w=[d.replacementClass,s?"".concat(d.cssPrefix,"-").concat(s):""].filter(function(F){return v.classes.indexOf(F)===-1}).filter(function(F){return F!==""||!!F}).concat(v.classes).join(" "),A={children:[],attributes:u(u({},v.attributes),{},{"data-prefix":r,"data-icon":s,class:w,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(O," ").concat(P)})},N=I&&!~v.classes.indexOf("fa-fw")?{width:"".concat(O/P*16*.0625,"em")}:{};b&&(A.attributes[X]=""),l&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(c||on())},children:[l]}),delete A.attributes.title);var E=u(u({},A),{},{prefix:r,iconName:s,main:a,mask:e,maskId:m,transform:o,symbol:f,styles:u(u({},N),v.styles)}),$=e.found&&a.found?L("generateAbstractMask",E)||{children:[],attributes:{}}:L("generateAbstractIcon",E)||{children:[],attributes:{}},U=$.children,Cn=$.attributes;return E.children=U,E.attributes=Cn,f?Za(E):Ja(E)}i(nt,"makeInlineSvgAbstract");function gt(n){var t=n.content,a=n.width,e=n.height,r=n.transform,s=n.title,o=n.extra,f=n.watchable,l=f===void 0?!1:f,m=u(u(u({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(m[X]="");var c=u({},o.styles);Kn(r)&&(c.transform=Na({transform:r,startCentered:!0,width:a,height:e}),c["-webkit-transform"]=c.transform);var v=En(c);v.length>0&&(m.style=v);var g=[];return g.push({tag:"span",attributes:m,children:[t]}),s&&g.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),g}i(gt,"makeLayersTextAbstract");function ne(n){var t=n.content,a=n.title,e=n.extra,r=u(u(u({},e.attributes),a?{title:a}:{}),{},{class:e.classes.join(" ")}),s=En(e.styles);s.length>0&&(r.style=s);var o=[];return o.push({tag:"span",attributes:r,children:[t]}),a&&o.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),o}i(ne,"makeLayersCounterAbstract");var Tn=C.styles;function Yn(n){var t=n[0],a=n[1],e=n.slice(4),r=Hn(e,1),s=r[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(W.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(W.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(W.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:t,height:a,icon:o}}i(Yn,"asFoundIcon");var te={found:!1,width:512,height:512};function ae(n,t){!Rt&&!d.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(t,'" is missing.'))}i(ae,"maybeNotifyMissing");function $n(n,t){var a=t;return t==="fa"&&d.styleDefault!==null&&(t=j()),new Promise(function(e,r){if(L("missingIconAbstract"),a==="fa"){var s=Vt(n)||{};n=s.iconName||n,t=s.prefix||t}if(n&&t&&Tn[t]&&Tn[t][n]){var o=Tn[t][n];return e(Yn(o))}ae(n,t),e(u(u({},te),{},{icon:d.showMissingIcons&&n?L("missingIconAbstract")||{}:{}}))})}i($n,"findIcon");var bt=i(function(){},"noop"),Un=d.measurePerformance&&cn&&cn.mark&&cn.measure?cn:{mark:bt,measure:bt},J='FA "6.3.0"',ee=i(function(t){return Un.mark("".concat(J," ").concat(t," begins")),function(){return Kt(t)}},"begin"),Kt=i(function(t){Un.mark("".concat(J," ").concat(t," ends")),Un.measure("".concat(J," ").concat(t),"".concat(J," ").concat(t," begins"),"".concat(J," ").concat(t," ends"))},"end"),tt={begin:ee,end:Kt},yn=i(function(){},"noop");function pt(n){var t=n.getAttribute?n.getAttribute(X):null;return typeof t=="string"}i(pt,"isWatched");function re(n){var t=n.getAttribute?n.getAttribute(Gn):null,a=n.getAttribute?n.getAttribute(Bn):null;return t&&a}i(re,"hasPrefixAndIcon");function ie(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(d.replacementClass)}i(ie,"hasBeenReplaced");function oe(){if(d.autoReplaceSvg===!0)return kn.replace;var n=kn[d.autoReplaceSvg];return n||kn.replace}i(oe,"getMutator");function se(n){return h.createElementNS("http://www.w3.org/2000/svg",n)}i(se,"createElementNS");function fe(n){return h.createElement(n)}i(fe,"createElement");function Qt(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,e=a===void 0?n.tag==="svg"?se:fe:a;if(typeof n=="string")return h.createTextNode(n);var r=e(n.tag);Object.keys(n.attributes||[]).forEach(function(o){r.setAttribute(o,n.attributes[o])});var s=n.children||[];return s.forEach(function(o){r.appendChild(Qt(o,{ceFn:e}))}),r}i(Qt,"convertSVG");function le(n){var t=" ".concat(n.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}i(le,"nodeAsComment");var kn={replace:i(function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(r){a.parentNode.insertBefore(Qt(r),a)}),a.getAttribute(X)===null&&d.keepOriginalSource){var e=h.createComment(le(a));a.parentNode.replaceChild(e,a)}else a.remove()},"replace"),nest:i(function(t){var a=t[0],e=t[1];if(~qn(a).indexOf(d.replacementClass))return kn.replace(t);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var s=e[0].attributes.class.split(" ").reduce(function(f,l){return l===d.replacementClass||l.match(r)?f.toSvg.push(l):f.toNode.push(l),f},{toNode:[],toSvg:[]});e[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",s.toNode.join(" "))}var o=e.map(function(f){return ln(f)}).join(`
`);a.setAttribute(X,""),a.innerHTML=o},"nest")};function ht(n){n()}i(ht,"performOperationSync");function Jt(n,t){var a=typeof t=="function"?t:yn;if(n.length===0)a();else{var e=ht;d.mutateApproach===da&&(e=D.requestAnimationFrame||ht),e(function(){var r=oe(),s=tt.begin("mutate");n.map(r),s(),a()})}}i(Jt,"perform");var at=!1;function Zt(){at=!0}i(Zt,"disableObservation");function Wn(){at=!1}i(Wn,"enableObservation");var An=null;function yt(n){if(ft&&d.observeMutations){var t=n.treeCallback,a=t===void 0?yn:t,e=n.nodeCallback,r=e===void 0?yn:e,s=n.pseudoElementsCallback,o=s===void 0?yn:s,f=n.observeMutationsRoot,l=f===void 0?h:f;An=new ft(function(m){if(!at){var c=j();Q(m).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!pt(v.addedNodes[0])&&(d.searchPseudoElements&&o(v.target),a(v.target)),v.type==="attributes"&&v.target.parentNode&&d.searchPseudoElements&&o(v.target.parentNode),v.type==="attributes"&&pt(v.target)&&~ka.indexOf(v.attributeName))if(v.attributeName==="class"&&re(v.target)){var g=On(qn(v.target)),b=g.prefix,x=g.iconName;v.target.setAttribute(Gn,b||c),x&&v.target.setAttribute(Bn,x)}else ie(v.target)&&r(v.target)})}}),R&&An.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}i(yt,"observe");function ce(){An&&An.disconnect()}i(ce,"disconnect");function ue(n){var t=n.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(e,r){var s=r.split(":"),o=s[0],f=s.slice(1);return o&&f.length>0&&(e[o]=f.join(":").trim()),e},{})),a}i(ue,"styleParser");function me(n){var t=n.getAttribute("data-prefix"),a=n.getAttribute("data-icon"),e=n.innerText!==void 0?n.innerText.trim():"",r=On(qn(n));return r.prefix||(r.prefix=j()),t&&a&&(r.prefix=t,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=Wa(r.prefix,n.innerText)||Jn(r.prefix,Fn(n.innerText))),!r.iconName&&d.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=n.firstChild.data)),r}i(me,"classParser");function de(n){var t=Q(n.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{}),a=n.getAttribute("title"),e=n.getAttribute("data-fa-title-id");return d.autoA11y&&(a?t["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(e||on()):(t["aria-hidden"]="true",t.focusable="false")),t}i(de,"attributesParser");function ve(){return{iconName:null,title:null,titleId:null,prefix:null,transform:T,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}i(ve,"blankMeta");function kt(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=me(n),e=a.iconName,r=a.prefix,s=a.rest,o=de(n),f=Dn("parseNodeAttributes",{},n),l=t.styleParser?ue(n):[];return u({iconName:e,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:r,transform:T,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},f)}i(kt,"parseMeta");var ge=C.styles;function na(n){var t=d.autoReplaceSvg==="nest"?kt(n,{styleParser:!1}):kt(n);return~t.extra.classes.indexOf(Ft)?L("generateLayersText",n,t):L("generateSvgReplacementMutation",n,t)}i(na,"generateMutation");var Y=new Set;Vn.map(function(n){Y.add("fa-".concat(n))});Object.keys(tn[p]).map(Y.add.bind(Y));Object.keys(tn[y]).map(Y.add.bind(Y));Y=sn(Y);function wt(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!R)return Promise.resolve();var a=h.documentElement.classList,e=i(function(v){return a.add("".concat(lt,"-").concat(v))},"hclAdd"),r=i(function(v){return a.remove("".concat(lt,"-").concat(v))},"hclRemove"),s=d.autoFetchSvg?Y:Vn.map(function(c){return"fa-".concat(c)}).concat(Object.keys(ge));s.includes("fa")||s.push("fa");var o=[".".concat(Ft,":not([").concat(X,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(X,"])")})).join(", ");if(o.length===0)return Promise.resolve();var f=[];try{f=Q(n.querySelectorAll(o))}catch{}if(f.length>0)e("pending"),r("complete");else return Promise.resolve();var l=tt.begin("onTree"),m=f.reduce(function(c,v){try{var g=na(v);g&&c.push(g)}catch(b){Rt||b.name==="MissingIcon"&&console.error(b)}return c},[]);return new Promise(function(c,v){Promise.all(m).then(function(g){Jt(g,function(){e("active"),e("complete"),r("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(g){l(),v(g)})})}i(wt,"onTree");function be(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;na(n).then(function(a){a&&Jt([a],t)})}i(be,"onNode");function pe(n){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(t||{}).icon?t:jn(t||{}),r=a.mask;return r&&(r=(r||{}).icon?r:jn(r||{})),n(e,u(u({},a),{},{mask:r}))}}i(pe,"resolveIcons");var he=i(function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.transform,r=e===void 0?T:e,s=a.symbol,o=s===void 0?!1:s,f=a.mask,l=f===void 0?null:f,m=a.maskId,c=m===void 0?null:m,v=a.title,g=v===void 0?null:v,b=a.titleId,x=b===void 0?null:b,O=a.classes,P=O===void 0?[]:O,I=a.attributes,w=I===void 0?{}:I,A=a.styles,N=A===void 0?{}:A;if(t){var E=t.prefix,$=t.iconName,U=t.icon;return Pn(u({type:"icon"},t),function(){return G("beforeDOMElementCreation",{iconDefinition:t,params:a}),d.autoA11y&&(g?w["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(x||on()):(w["aria-hidden"]="true",w.focusable="false")),nt({icons:{main:Yn(U),mask:l?Yn(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:$,transform:u(u({},T),r),symbol:o,title:g,maskId:c,titleId:x,extra:{attributes:w,styles:N,classes:P}})})}},"render"),ye={mixout:i(function(){return{icon:pe(he)}},"mixout"),hooks:i(function(){return{mutationObserverCallbacks:i(function(a){return a.treeCallback=wt,a.nodeCallback=be,a},"mutationObserverCallbacks")}},"hooks"),provides:i(function(t){t.i2svg=function(a){var e=a.node,r=e===void 0?h:e,s=a.callback,o=s===void 0?function(){}:s;return wt(r,o)},t.generateSvgReplacementMutation=function(a,e){var r=e.iconName,s=e.title,o=e.titleId,f=e.prefix,l=e.transform,m=e.symbol,c=e.mask,v=e.maskId,g=e.extra;return new Promise(function(b,x){Promise.all([$n(r,f),c.iconName?$n(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(O){var P=Hn(O,2),I=P[0],w=P[1];b([a,nt({icons:{main:I,mask:w},prefix:f,iconName:r,transform:l,symbol:m,maskId:v,title:s,titleId:o,extra:g,watchable:!0})])}).catch(x)})},t.generateAbstractIcon=function(a){var e=a.children,r=a.attributes,s=a.main,o=a.transform,f=a.styles,l=En(f);l.length>0&&(r.style=l);var m;return Kn(o)&&(m=L("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),e.push(m||s.icon),{children:e,attributes:r}}},"provides")},ke={mixout:i(function(){return{layer:i(function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,s=r===void 0?[]:r;return Pn({type:"layer"},function(){G("beforeDOMElementCreation",{assembler:a,params:e});var o=[];return a(function(f){Array.isArray(f)?f.map(function(l){o=o.concat(l.abstract)}):o=o.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(sn(s)).join(" ")},children:o}]})},"layer")}},"mixout")},we={mixout:i(function(){return{counter:i(function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,s=r===void 0?null:r,o=e.classes,f=o===void 0?[]:o,l=e.attributes,m=l===void 0?{}:l,c=e.styles,v=c===void 0?{}:c;return Pn({type:"counter",content:a},function(){return G("beforeDOMElementCreation",{content:a,params:e}),ne({content:a.toString(),title:s,extra:{attributes:m,styles:v,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(sn(f))}})})},"counter")}},"mixout")},xe={mixout:i(function(){return{text:i(function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?T:r,o=e.title,f=o===void 0?null:o,l=e.classes,m=l===void 0?[]:l,c=e.attributes,v=c===void 0?{}:c,g=e.styles,b=g===void 0?{}:g;return Pn({type:"text",content:a},function(){return G("beforeDOMElementCreation",{content:a,params:e}),gt({content:a,transform:u(u({},T),s),title:f,extra:{attributes:v,styles:b,classes:["".concat(d.cssPrefix,"-layers-text")].concat(sn(m))}})})},"text")}},"mixout"),provides:i(function(t){t.generateLayersText=function(a,e){var r=e.title,s=e.transform,o=e.extra,f=null,l=null;if(_t){var m=parseInt(getComputedStyle(a).fontSize,10),c=a.getBoundingClientRect();f=c.width/m,l=c.height/m}return d.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([a,gt({content:a.innerHTML,width:f,height:l,transform:s,title:r,extra:o,watchable:!0})])}},"provides")},Ae=new RegExp('"',"ug"),xt=[1105920,1112319];function Ee(n){var t=n.replace(Ae,""),a=za(t,0),e=a>=xt[0]&&a<=xt[1],r=t.length===2?t[0]===t[1]:!1;return{value:Fn(r?t[0]:t),isSecondary:e||r}}i(Ee,"hexValueFromContent");function At(n,t){var a="".concat(ma).concat(t.replace(":","-"));return new Promise(function(e,r){if(n.getAttribute(a)!==null)return e();var s=Q(n.children),o=s.filter(function(U){return U.getAttribute(Rn)===t})[0],f=D.getComputedStyle(n,t),l=f.getPropertyValue("font-family").match(pa),m=f.getPropertyValue("font-weight"),c=f.getPropertyValue("content");if(o&&!l)return n.removeChild(o),e();if(l&&c!=="none"&&c!==""){var v=f.getPropertyValue("content"),g=~["Sharp"].indexOf(l[2])?y:p,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?an[g][l[2].toLowerCase()]:ha[g][m],x=Ee(v),O=x.value,P=x.isSecondary,I=l[0].startsWith("FontAwesome"),w=Jn(b,O),A=w;if(I){var N=Ha(O);N.iconName&&N.prefix&&(w=N.iconName,b=N.prefix)}if(w&&!P&&(!o||o.getAttribute(Gn)!==b||o.getAttribute(Bn)!==A)){n.setAttribute(a,A),o&&n.removeChild(o);var E=ve(),$=E.extra;$.attributes[Rn]=t,$n(w,b).then(function(U){var Cn=nt(u(u({},E),{},{icons:{main:U,mask:Zn()},prefix:b,iconName:A,extra:$,watchable:!0})),F=h.createElement("svg");t==="::before"?n.insertBefore(F,n.firstChild):n.appendChild(F),F.outerHTML=Cn.map(function(ta){return ln(ta)}).join(`
`),n.removeAttribute(a),e()}).catch(r)}else e()}else e()})}i(At,"replaceForPosition");function Se(n){return Promise.all([At(n,"::before"),At(n,"::after")])}i(Se,"replace");function Oe(n){return n.parentNode!==document.head&&!~va.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(Rn)&&(!n.parentNode||n.parentNode.tagName!=="svg")}i(Oe,"processable");function Et(n){if(R)return new Promise(function(t,a){var e=Q(n.querySelectorAll("*")).filter(Oe).map(Se),r=tt.begin("searchPseudoElements");Zt(),Promise.all(e).then(function(){r(),Wn(),t()}).catch(function(){r(),Wn(),a()})})}i(Et,"searchPseudoElements");var Pe={hooks:i(function(){return{mutationObserverCallbacks:i(function(a){return a.pseudoElementsCallback=Et,a},"mutationObserverCallbacks")}},"hooks"),provides:i(function(t){t.pseudoElements2svg=function(a){var e=a.node,r=e===void 0?h:e;d.searchPseudoElements&&Et(r)}},"provides")},St=!1,Ce={mixout:i(function(){return{dom:{unwatch:i(function(){Zt(),St=!0},"unwatch")}}},"mixout"),hooks:i(function(){return{bootstrap:i(function(){yt(Dn("mutationObserverCallbacks",{}))},"bootstrap"),noAuto:i(function(){ce()},"noAuto"),watch:i(function(a){var e=a.observeMutationsRoot;St?Wn():yt(Dn("mutationObserverCallbacks",{observeMutationsRoot:e}))},"watch")}},"hooks")},Ot=i(function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(e,r){var s=r.toLowerCase().split("-"),o=s[0],f=s.slice(1).join("-");if(o&&f==="h")return e.flipX=!0,e;if(o&&f==="v")return e.flipY=!0,e;if(f=parseFloat(f),isNaN(f))return e;switch(o){case"grow":e.size=e.size+f;break;case"shrink":e.size=e.size-f;break;case"left":e.x=e.x-f;break;case"right":e.x=e.x+f;break;case"up":e.y=e.y-f;break;case"down":e.y=e.y+f;break;case"rotate":e.rotate=e.rotate+f;break}return e},a)},"parseTransformString"),Ie={mixout:i(function(){return{parse:{transform:i(function(a){return Ot(a)},"transform")}}},"mixout"),hooks:i(function(){return{parseNodeAttributes:i(function(a,e){var r=e.getAttribute("data-fa-transform");return r&&(a.transform=Ot(r)),a},"parseNodeAttributes")}},"hooks"),provides:i(function(t){t.generateAbstractTransformGrouping=function(a){var e=a.main,r=a.transform,s=a.containerWidth,o=a.iconWidth,f={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),m="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),v={transform:"".concat(l," ").concat(m," ").concat(c)},g={transform:"translate(".concat(o/2*-1," -256)")},b={outer:f,inner:v,path:g};return{tag:"g",attributes:u({},b.outer),children:[{tag:"g",attributes:u({},b.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:u(u({},e.icon.attributes),b.path)}]}]}}},"provides")},_n={x:0,y:0,width:"100%",height:"100%"};function Pt(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||t)&&(n.attributes.fill="black"),n}i(Pt,"fillBlack");function Ne(n){return n.tag==="g"?n.children:[n]}i(Ne,"deGroup");var Te={hooks:i(function(){return{parseNodeAttributes:i(function(a,e){var r=e.getAttribute("data-fa-mask"),s=r?On(r.split(" ").map(function(o){return o.trim()})):Zn();return s.prefix||(s.prefix=j()),a.mask=s,a.maskId=e.getAttribute("data-fa-mask-id"),a},"parseNodeAttributes")}},"hooks"),provides:i(function(t){t.generateAbstractMask=function(a){var e=a.children,r=a.attributes,s=a.main,o=a.mask,f=a.maskId,l=a.transform,m=s.width,c=s.icon,v=o.width,g=o.icon,b=Ia({transform:l,containerWidth:v,iconWidth:m}),x={tag:"rect",attributes:u(u({},_n),{},{fill:"white"})},O=c.children?{children:c.children.map(Pt)}:{},P={tag:"g",attributes:u({},b.inner),children:[Pt(u({tag:c.tag,attributes:u(u({},c.attributes),b.path)},O))]},I={tag:"g",attributes:u({},b.outer),children:[P]},w="mask-".concat(f||on()),A="clip-".concat(f||on()),N={tag:"mask",attributes:u(u({},_n),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,I]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:Ne(g)},N]};return e.push(E,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(w,")")},_n)}),{children:e,attributes:r}}},"provides")},_e={provides:i(function(t){var a=!1;D.matchMedia&&(a=D.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},s),{},{attributeName:"opacity"}),f={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||f.children.push({tag:"animate",attributes:u(u({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),e.push(f),e.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||e.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}},"provides")},Me={hooks:i(function(){return{parseNodeAttributes:i(function(a,e){var r=e.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return a.symbol=s,a},"parseNodeAttributes")}},"hooks")},Le=[_a,ye,ke,we,xe,Pe,Ce,Ie,Te,_e,Me];Ba(Le,{mixoutsTo:S});S.noAuto;S.config;var Fe=S.library;S.dom;var ze=S.parse;S.findIconDefinition;S.toHtml;var De=S.icon;S.layer;S.text;S.counter;export{De as i,Fe as l,ze as p};
//# sourceMappingURL=index-c49ee5c5.js.map
