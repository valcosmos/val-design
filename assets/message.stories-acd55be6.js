var k=Object.defineProperty;var a=(e,n)=>k(e,"name",{value:n,configurable:!0});import{r as p,R as U}from"./index-a38f3d31.js";import{a as V}from"./client-9d26074c.js";import{_ as j,a as D,b as S,T as F}from"./transition-5d993c2f.js";import{I as L}from"./icon-938a876b.js";import{j as d,a as w}from"./jsx-runtime-69008c6b.js";import"./index-d06ee515.js";import{B as v}from"./button-25b03b88.js";import"./es.object.get-own-property-descriptor-d261b708.js";import"./index-b042d21f.js";import"./index-ed86a6de.js";import"./index-eb6056e0.js";import"./index-50ee27ec.js";function C(){return C=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var s=arguments[n];for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o])}return e},C.apply(this,arguments)}a(C,"_extends");function N(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a(N,"_assertThisInitialized");function b(e,n){var s=a(function(r){return n&&p.isValidElement(r)?n(r):r},"mapper"),o=Object.create(null);return e&&p.Children.map(e,function(t){return t}).forEach(function(t){o[t.key]=s(t)}),o}a(b,"getChildMapping");function R(e,n){e=e||{},n=n||{};function s(f){return f in n?n[f]:e[f]}a(s,"getValueForKey");var o=Object.create(null),t=[];for(var r in e)r in n?t.length&&(o[r]=t,t=[]):t.push(r);var i,c={};for(var l in n){if(o[l])for(i=0;i<o[l].length;i++){var m=o[l][i];c[o[l][i]]=s(m)}c[l]=s(l)}for(i=0;i<t.length;i++)c[t[i]]=s(t[i]);return c}a(R,"mergeChildMappings");function g(e,n,s){return s[n]!=null?s[n]:e.props[n]}a(g,"getProp");function O(e,n){return b(e.children,function(s){return p.cloneElement(s,{onExited:n.bind(null,s),in:!0,appear:g(s,"appear",e),enter:g(s,"enter",e),exit:g(s,"exit",e)})})}a(O,"getInitialChildMapping");function T(e,n,s){var o=b(e.children),t=R(n,o);return Object.keys(t).forEach(function(r){var i=t[r];if(p.isValidElement(i)){var c=r in n,l=r in o,m=n[r],f=p.isValidElement(m)&&!m.props.in;l&&(!c||f)?t[r]=p.cloneElement(i,{onExited:s.bind(null,i),in:!0,exit:g(i,"exit",e),enter:g(i,"enter",e)}):!l&&c&&!f?t[r]=p.cloneElement(i,{in:!1}):l&&c&&p.isValidElement(m)&&(t[r]=p.cloneElement(i,{onExited:s.bind(null,i),in:m.props.in,exit:g(i,"exit",e),enter:g(i,"enter",e)}))}}),t}a(T,"getNextChildMapping");var A=Object.values||function(e){return Object.keys(e).map(function(n){return e[n]})},P={component:"div",childFactory:a(function(n){return n},"childFactory")},I=function(e){j(n,e);function n(o,t){var r;r=e.call(this,o,t)||this;var i=r.handleExited.bind(N(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}a(n,"TransitionGroup");var s=n.prototype;return s.componentDidMount=a(function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},"componentDidMount"),s.componentWillUnmount=a(function(){this.mounted=!1},"componentWillUnmount"),n.getDerivedStateFromProps=a(function(t,r){var i=r.children,c=r.handleExited,l=r.firstRender;return{children:l?O(t,c):T(t,i,c),firstRender:!1}},"getDerivedStateFromProps"),s.handleExited=a(function(t,r){var i=b(this.props.children);t.key in i||(t.props.onExited&&t.props.onExited(r),this.mounted&&this.setState(function(c){var l=C({},c.children);return delete l[t.key],{children:l}}))},"handleExited"),s.render=a(function(){var t=this.props,r=t.component,i=t.childFactory,c=D(t,["component","childFactory"]),l=this.state.contextValue,m=A(this.state.children).map(i);return delete c.appear,delete c.enter,delete c.exit,r===null?d(S.Provider,{value:l,children:m}):d(S.Provider,{value:l,children:d(r,{...c,children:m})})},"render"),n}(U.Component);I.propTypes={};I.defaultProps=P;const W=I,G=a(e=>{const{text:n,type:s}=e;return d("div",{className:"message",children:w("div",{className:"message-content",children:[d("div",{className:"icon",children:a(t=>{let r="check-circle";return t==="success"&&(r="check-circle"),t==="danger"&&(r="times-circle"),t==="warning"&&(r="exclamation-circle"),t==="info"&&(r="info-circle"),d(L,{icon:r,theme:t})},"renderIcon")(s)}),d("div",{className:"text",children:n})]})})},"Message"),_=G;try{message.displayName="message",message.__docgenInfo={description:`> message组件，

### 引用方法

\`\`\` js

import { Button } from 'val-design'

\`\`\``,displayName:"message",props:{text:{defaultValue:null,description:"提示文字",name:"text",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"提示类型",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'}]}}}}}catch{}let M;const q=new Uint8Array(16);function $(){if(!M&&(M=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!M))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return M(q)}a($,"rng");const u=[];for(let e=0;e<256;++e)u.push((e+256).toString(16).slice(1));function z(e,n=0){return(u[e[n+0]]+u[e[n+1]]+u[e[n+2]]+u[e[n+3]]+"-"+u[e[n+4]]+u[e[n+5]]+"-"+u[e[n+6]]+u[e[n+7]]+"-"+u[e[n+8]]+u[e[n+9]]+"-"+u[e[n+10]]+u[e[n+11]]+u[e[n+12]]+u[e[n+13]]+u[e[n+14]]+u[e[n+15]]).toLowerCase()}a(z,"unsafeStringify");const H=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),B={randomUUID:H};function J(e,n,s){if(B.randomUUID&&!n&&!e)return B.randomUUID();e=e||{};const o=e.random||(e.rng||$)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,n){s=s||0;for(let t=0;t<16;++t)n[s+t]=o[t];return n}return z(o)}a(J,"v4");const x=a(()=>J(),"getUUID");let y;const Q=a(()=>{const[e,n]=p.useState([]),s=3*1e3,o=10,t=a(r=>{const{key:i}=r;n(c=>c.filter(l=>i!==l.key))},"remove");return y=a(r=>{n(i=>[...i,r]),setTimeout(()=>{t(r)},s)},"add"),p.useEffect(()=>{if(e.length>o){const[r]=e;t(r)}},[e]),d("div",{className:"message-container",children:d(W,{children:e.map(({text:r,key:i,type:c})=>d(F,{timeout:200,in:!0,animation:"slide-in-top",children:d(_,{type:c,text:r})},i))})})},"MessageContainer");let h=document.querySelector("#message-wrapper");h||(h=document.createElement("div"),h.className="message-wrapper",h.id="message-wrapper",document.body.append(h));V(h).render(d(Q,{}));const E={info:e=>{y({text:e,key:x(),type:"info"})},success:e=>{y({text:e,key:x(),type:"success"})},warning:e=>{y({text:e,key:x(),type:"warning"})},error:e=>{y({text:e,key:x(),type:"danger"})}},le={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { message } from './index'
import Button from '../Button'
import Message from './message'

export default {
  title: 'Feedback/Message 全局提示',
  component: Message,
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
`,locationsMap:{"all-message":{startLoc:{col:58,line:12},endLoc:{col:1,line:50},startBody:{col:58,line:12},endBody:{col:1,line:50}}}}},title:"Feedback/Message 全局提示",component:_},ue=a(()=>w("code",{children:[d(v,{type:"default",onClick:()=>{E.info("Info Message")},children:"Info Message"}),d(v,{type:"primary",style:{marginLeft:"20px"},onClick:()=>{E.success("Success Message")},children:"Success Message"}),d(v,{type:"warning",style:{marginLeft:"20px"},onClick:()=>{E.warning("Success Message")},children:"Warning Message"}),d(v,{type:"danger",style:{marginLeft:"20px"},onClick:()=>{E.error("Error Message")},children:"Error Message"})]}),"AllMessage"),de=["AllMessage"];export{ue as AllMessage,de as __namedExportsOrder,le as default};
//# sourceMappingURL=message.stories-acd55be6.js.map
