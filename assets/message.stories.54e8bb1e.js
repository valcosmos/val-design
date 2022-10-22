var k=Object.defineProperty;var a=(e,n)=>k(e,"name",{value:n,configurable:!0});import{r as p,j as d,R as O,b as B}from"./jsx-runtime.691e8cf8.js";import{a as R}from"./client.80561f70.js";import{_ as U,a as V,b as I,T as D}from"./transition.1f9047ed.js";import{I as L}from"./icon.93ff3388.js";import"./index.4a251a46.js";import{B as v}from"./button.36cd8ce7.js";import"./iframe.55b5944b.js";import"./index.7eeee16b.js";import"./index.220dfe0f.js";import"./index.241e153c.js";import"./index.6f8f5b77.js";function C(){return C=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},C.apply(this,arguments)}a(C,"_extends");function j(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a(j,"_assertThisInitialized");function S(e,n){var i=a(function(r){return n&&p.exports.isValidElement(r)?n(r):r},"mapper"),o=Object.create(null);return e&&p.exports.Children.map(e,function(t){return t}).forEach(function(t){o[t.key]=i(t)}),o}a(S,"getChildMapping");function F(e,n){e=e||{},n=n||{};function i(f){return f in n?n[f]:e[f]}a(i,"getValueForKey");var o=Object.create(null),t=[];for(var r in e)r in n?t.length&&(o[r]=t,t=[]):t.push(r);var s,c={};for(var l in n){if(o[l])for(s=0;s<o[l].length;s++){var m=o[l][s];c[o[l][s]]=i(m)}c[l]=i(l)}for(s=0;s<t.length;s++)c[t[s]]=i(t[s]);return c}a(F,"mergeChildMappings");function g(e,n,i){return i[n]!=null?i[n]:e.props[n]}a(g,"getProp");function N(e,n){return S(e.children,function(i){return p.exports.cloneElement(i,{onExited:n.bind(null,i),in:!0,appear:g(i,"appear",e),enter:g(i,"enter",e),exit:g(i,"exit",e)})})}a(N,"getInitialChildMapping");function T(e,n,i){var o=S(e.children),t=F(n,o);return Object.keys(t).forEach(function(r){var s=t[r];if(!!p.exports.isValidElement(s)){var c=r in n,l=r in o,m=n[r],f=p.exports.isValidElement(m)&&!m.props.in;l&&(!c||f)?t[r]=p.exports.cloneElement(s,{onExited:i.bind(null,s),in:!0,exit:g(s,"exit",e),enter:g(s,"enter",e)}):!l&&c&&!f?t[r]=p.exports.cloneElement(s,{in:!1}):l&&c&&p.exports.isValidElement(m)&&(t[r]=p.exports.cloneElement(s,{onExited:i.bind(null,s),in:m.props.in,exit:g(s,"exit",e),enter:g(s,"enter",e)}))}}),t}a(T,"getNextChildMapping");var A=Object.values||function(e){return Object.keys(e).map(function(n){return e[n]})},P={component:"div",childFactory:a(function(n){return n},"childFactory")},b=function(e){U(n,e);function n(o,t){var r;r=e.call(this,o,t)||this;var s=r.handleExited.bind(j(r));return r.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},r}a(n,"TransitionGroup");var i=n.prototype;return i.componentDidMount=a(function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},"componentDidMount"),i.componentWillUnmount=a(function(){this.mounted=!1},"componentWillUnmount"),n.getDerivedStateFromProps=a(function(t,r){var s=r.children,c=r.handleExited,l=r.firstRender;return{children:l?N(t,c):T(t,s,c),firstRender:!1}},"getDerivedStateFromProps"),i.handleExited=a(function(t,r){var s=S(this.props.children);t.key in s||(t.props.onExited&&t.props.onExited(r),this.mounted&&this.setState(function(c){var l=C({},c.children);return delete l[t.key],{children:l}}))},"handleExited"),i.render=a(function(){var t=this.props,r=t.component,s=t.childFactory,c=V(t,["component","childFactory"]),l=this.state.contextValue,m=A(this.state.children).map(s);return delete c.appear,delete c.enter,delete c.exit,r===null?d(I.Provider,{value:l,children:m}):d(I.Provider,{value:l,children:d(r,{...c,children:m})})},"render"),n}(O.Component);b.propTypes={};b.defaultProps=P;const W=b,G=a(e=>{const{text:n,type:i}=e;return d("div",{className:"message",children:B("div",{className:"message-content",children:[d("div",{className:"icon",children:a(t=>{let r="check-circle";return t==="success"&&(r="check-circle"),t==="danger"&&(r="times-circle"),t==="warning"&&(r="exclamation-circle"),t==="info"&&(r="info-circle"),d(L,{icon:r,theme:t})},"renderIcon")(i)}),d("div",{className:"text",children:n})]})})},"Message"),w=G;try{message.displayName="message",message.__docgenInfo={description:`> message\u7EC4\u4EF6\uFF0C

### \u5F15\u7528\u65B9\u6CD5

\`\`\` js

import { Button } from 'val-design'

\`\`\``,displayName:"message",props:{text:{defaultValue:null,description:"\u63D0\u793A\u6587\u5B57",name:"text",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"\u63D0\u793A\u7C7B\u578B",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Message/message.tsx#message"]={docgenInfo:message.__docgenInfo,name:"message",path:"src/components/Message/message.tsx#message"})}catch{}let x;const q=new Uint8Array(16);function $(){if(!x&&(x=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!x))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return x(q)}a($,"rng");const u=[];for(let e=0;e<256;++e)u.push((e+256).toString(16).slice(1));function Y(e,n=0){return(u[e[n+0]]+u[e[n+1]]+u[e[n+2]]+u[e[n+3]]+"-"+u[e[n+4]]+u[e[n+5]]+"-"+u[e[n+6]]+u[e[n+7]]+"-"+u[e[n+8]]+u[e[n+9]]+"-"+u[e[n+10]]+u[e[n+11]]+u[e[n+12]]+u[e[n+13]]+u[e[n+14]]+u[e[n+15]]).toLowerCase()}a(Y,"unsafeStringify");const z=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),_={randomUUID:z};function H(e,n,i){if(_.randomUUID&&!n&&!e)return _.randomUUID();e=e||{};const o=e.random||(e.rng||$)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,n){i=i||0;for(let t=0;t<16;++t)n[i+t]=o[t];return n}return Y(o)}a(H,"v4");const M=a(()=>H(),"getUUID");let y;const J=a(()=>{const[e,n]=p.exports.useState([]),i=3*1e3,o=10,t=a(r=>{const{key:s}=r;n(c=>c.filter(l=>s!==l.key))},"remove");return y=a(r=>{n(s=>[...s,r]),setTimeout(()=>{t(r)},i)},"add"),p.exports.useEffect(()=>{if(e.length>o){const[r]=e;t(r)}},[e]),d("div",{className:"message-container",children:d(W,{children:e.map(({text:r,key:s,type:c})=>d(D,{timeout:200,in:!0,animation:"slide-in-top",children:d(w,{type:c,text:r})},s))})})},"MessageContainer");let h=document.querySelector("#message-wrapper");h||(h=document.createElement("div"),h.className="message-wrapper",h.id="message-wrapper",document.body.append(h));R(h).render(d(J,{}));const E={info:e=>{y({text:e,key:M(),type:"info"})},success:e=>{y({text:e,key:M(),type:"success"})},warning:e=>{y({text:e,key:M(),type:"warning"})},error:e=>{y({text:e,key:M(),type:"danger"})}},ce={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { message } from './index'
import Button from '../Button'
import Message from './message'

export default {
  title: 'Feedback/Message \u5168\u5C40\u63D0\u793A',
  component: Message
} as ComponentMeta<typeof Message>

export const AllMessage: ComponentStory<typeof Message> = () => (
  <code>
    <Button
      type="default"
      onClick={() => {
        message.info('Info Message')
      }}
    >
      Info Message
    </Button>
    <Button
      type="primary"
      style={{ marginLeft: '20px' }}
      onClick={() => {
        message.success('Success Message')
      }}
    >
      Success Message
    </Button>
    <Button
      type="warning"
      style={{ marginLeft: '20px' }}
      onClick={() => {
        message.warning('Success Message')
      }}
    >
      Warning Message
    </Button>
    <Button
      type="danger"
      style={{ marginLeft: '20px' }}
      onClick={() => {
        message.error('Error Message')
      }}
    >
      Error Message
    </Button>
  </code>
)

// export const Info = Template.bind({})
// Info.args = {
//   onClick: () => {
//     message.info('Info Message')
//   },
//   children: 'Info Message'
// }

// export const Success = Template.bind({})
// Success.args = {
//   onClick: () => {
//     message.success('Success Message')
//   },
//   children: 'Success Message'
// }
`,locationsMap:{"all-message":{startLoc:{col:58,line:12},endLoc:{col:1,line:50},startBody:{col:58,line:12},endBody:{col:1,line:50}}}}},title:"Feedback/Message \u5168\u5C40\u63D0\u793A",component:w},le=a(()=>B("code",{children:[d(v,{type:"default",onClick:()=>{E.info("Info Message")},children:"Info Message"}),d(v,{type:"primary",style:{marginLeft:"20px"},onClick:()=>{E.success("Success Message")},children:"Success Message"}),d(v,{type:"warning",style:{marginLeft:"20px"},onClick:()=>{E.warning("Success Message")},children:"Warning Message"}),d(v,{type:"danger",style:{marginLeft:"20px"},onClick:()=>{E.error("Error Message")},children:"Error Message"})]}),"AllMessage"),ue=["AllMessage"];export{le as AllMessage,ue as __namedExportsOrder,ce as default};
//# sourceMappingURL=message.stories.54e8bb1e.js.map
