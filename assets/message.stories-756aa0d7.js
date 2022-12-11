var k=Object.defineProperty;var a=(e,n)=>k(e,"name",{value:n,configurable:!0});import{r as p,R as O}from"./index-5837b0d6.js";import{a as R}from"./client-15245d91.js";import{_ as U,a as V,b as _,T as L}from"./transition-c7f7276e.js";import{I as j}from"./icon-038fbd0a.js";import{j as d,a as B}from"./jsx-runtime-e0aa43b5.js";import"./index-8252f08f.js";import{B as v}from"./button-58ca4f44.js";import"./es.object.get-own-property-descriptor-89e834e9.js";import"./index-1e7e3182.js";import"./index-9f7f24f4.js";import"./index-55a28f55.js";import"./index-a2f37619.js";function C(){return C=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},C.apply(this,arguments)}a(C,"_extends");function D(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a(D,"_assertThisInitialized");function S(e,n){var o=a(function(r){return n&&p.exports.isValidElement(r)?n(r):r},"mapper"),i=Object.create(null);return e&&p.exports.Children.map(e,function(t){return t}).forEach(function(t){i[t.key]=o(t)}),i}a(S,"getChildMapping");function F(e,n){e=e||{},n=n||{};function o(f){return f in n?n[f]:e[f]}a(o,"getValueForKey");var i=Object.create(null),t=[];for(var r in e)r in n?t.length&&(i[r]=t,t=[]):t.push(r);var s,c={};for(var l in n){if(i[l])for(s=0;s<i[l].length;s++){var m=i[l][s];c[i[l][s]]=o(m)}c[l]=o(l)}for(s=0;s<t.length;s++)c[t[s]]=o(t[s]);return c}a(F,"mergeChildMappings");function g(e,n,o){return o[n]!=null?o[n]:e.props[n]}a(g,"getProp");function N(e,n){return S(e.children,function(o){return p.exports.cloneElement(o,{onExited:n.bind(null,o),in:!0,appear:g(o,"appear",e),enter:g(o,"enter",e),exit:g(o,"exit",e)})})}a(N,"getInitialChildMapping");function T(e,n,o){var i=S(e.children),t=F(n,i);return Object.keys(t).forEach(function(r){var s=t[r];if(!!p.exports.isValidElement(s)){var c=r in n,l=r in i,m=n[r],f=p.exports.isValidElement(m)&&!m.props.in;l&&(!c||f)?t[r]=p.exports.cloneElement(s,{onExited:o.bind(null,s),in:!0,exit:g(s,"exit",e),enter:g(s,"enter",e)}):!l&&c&&!f?t[r]=p.exports.cloneElement(s,{in:!1}):l&&c&&p.exports.isValidElement(m)&&(t[r]=p.exports.cloneElement(s,{onExited:o.bind(null,s),in:m.props.in,exit:g(s,"exit",e),enter:g(s,"enter",e)}))}}),t}a(T,"getNextChildMapping");var A=Object.values||function(e){return Object.keys(e).map(function(n){return e[n]})},P={component:"div",childFactory:a(function(n){return n},"childFactory")},I=function(e){U(n,e);function n(i,t){var r;r=e.call(this,i,t)||this;var s=r.handleExited.bind(D(r));return r.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},r}a(n,"TransitionGroup");var o=n.prototype;return o.componentDidMount=a(function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},"componentDidMount"),o.componentWillUnmount=a(function(){this.mounted=!1},"componentWillUnmount"),n.getDerivedStateFromProps=a(function(t,r){var s=r.children,c=r.handleExited,l=r.firstRender;return{children:l?N(t,c):T(t,s,c),firstRender:!1}},"getDerivedStateFromProps"),o.handleExited=a(function(t,r){var s=S(this.props.children);t.key in s||(t.props.onExited&&t.props.onExited(r),this.mounted&&this.setState(function(c){var l=C({},c.children);return delete l[t.key],{children:l}}))},"handleExited"),o.render=a(function(){var t=this.props,r=t.component,s=t.childFactory,c=V(t,["component","childFactory"]),l=this.state.contextValue,m=A(this.state.children).map(s);return delete c.appear,delete c.enter,delete c.exit,r===null?d(_.Provider,{value:l,children:m}):d(_.Provider,{value:l,children:d(r,{...c,children:m})})},"render"),n}(O.Component);I.propTypes={};I.defaultProps=P;const W=I,G=a(e=>{const{text:n,type:o}=e;return d("div",{className:"message",children:B("div",{className:"message-content",children:[d("div",{className:"icon",children:a(t=>{let r="check-circle";return t==="success"&&(r="check-circle"),t==="danger"&&(r="times-circle"),t==="warning"&&(r="exclamation-circle"),t==="info"&&(r="info-circle"),d(j,{icon:r,theme:t})},"renderIcon")(o)}),d("div",{className:"text",children:n})]})})},"Message"),w=G;try{message.displayName="message",message.__docgenInfo={description:`> message组件，

### 引用方法

\`\`\` js

import { Button } from 'val-design'

\`\`\``,displayName:"message",props:{text:{defaultValue:null,description:"提示文字",name:"text",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"提示类型",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Message/message.tsx#message"]={docgenInfo:message.__docgenInfo,name:"message",path:"src/components/Message/message.tsx#message"})}catch{}let x;const q=new Uint8Array(16);function $(){if(!x&&(x=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!x))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return x(q)}a($,"rng");const u=[];for(let e=0;e<256;++e)u.push((e+256).toString(16).slice(1));function Y(e,n=0){return(u[e[n+0]]+u[e[n+1]]+u[e[n+2]]+u[e[n+3]]+"-"+u[e[n+4]]+u[e[n+5]]+"-"+u[e[n+6]]+u[e[n+7]]+"-"+u[e[n+8]]+u[e[n+9]]+"-"+u[e[n+10]]+u[e[n+11]]+u[e[n+12]]+u[e[n+13]]+u[e[n+14]]+u[e[n+15]]).toLowerCase()}a(Y,"unsafeStringify");const z=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),b={randomUUID:z};function H(e,n,o){if(b.randomUUID&&!n&&!e)return b.randomUUID();e=e||{};const i=e.random||(e.rng||$)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,n){o=o||0;for(let t=0;t<16;++t)n[o+t]=i[t];return n}return Y(i)}a(H,"v4");const M=a(()=>H(),"getUUID");let y;const J=a(()=>{const[e,n]=p.exports.useState([]),o=3*1e3,i=10,t=a(r=>{const{key:s}=r;n(c=>c.filter(l=>s!==l.key))},"remove");return y=a(r=>{n(s=>[...s,r]),setTimeout(()=>{t(r)},o)},"add"),p.exports.useEffect(()=>{if(e.length>i){const[r]=e;t(r)}},[e]),d("div",{className:"message-container",children:d(W,{children:e.map(({text:r,key:s,type:c})=>d(L,{timeout:200,in:!0,animation:"slide-in-top",children:d(w,{type:c,text:r})},s))})})},"MessageContainer");let h=document.querySelector("#message-wrapper");h||(h=document.createElement("div"),h.className="message-wrapper",h.id="message-wrapper",document.body.append(h));R(h).render(d(J,{}));const E={info:e=>{y({text:e,key:M(),type:"info"})},success:e=>{y({text:e,key:M(),type:"success"})},warning:e=>{y({text:e,key:M(),type:"warning"})},error:e=>{y({text:e,key:M(),type:"danger"})}},le={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { message } from './index'
import Button from '../Button'
import Message from './message'

export default {
  title: 'Feedback/Message 全局提示',
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
`,locationsMap:{"all-message":{startLoc:{col:58,line:12},endLoc:{col:1,line:50},startBody:{col:58,line:12},endBody:{col:1,line:50}}}}},title:"Feedback/Message 全局提示",component:w},ue=a(()=>B("code",{children:[d(v,{type:"default",onClick:()=>{E.info("Info Message")},children:"Info Message"}),d(v,{type:"primary",style:{marginLeft:"20px"},onClick:()=>{E.success("Success Message")},children:"Success Message"}),d(v,{type:"warning",style:{marginLeft:"20px"},onClick:()=>{E.warning("Success Message")},children:"Warning Message"}),d(v,{type:"danger",style:{marginLeft:"20px"},onClick:()=>{E.error("Error Message")},children:"Error Message"})]}),"AllMessage"),de=["AllMessage"];export{ue as AllMessage,de as __namedExportsOrder,le as default};
//# sourceMappingURL=message.stories-756aa0d7.js.map
