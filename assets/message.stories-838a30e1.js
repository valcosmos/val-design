var k=Object.defineProperty;var a=(e,n)=>k(e,"name",{value:n,configurable:!0});import{r as m,R as O}from"./index-d84d9d3b.js";import{a as R}from"./client-6ac66c3a.js";import{_ as U,a as V,b as _,T as L}from"./transition-13e58fcd.js";import{I as j}from"./icon-3e8e0c3f.js";import{j as d,a as B}from"./jsx-runtime-82e0d3de.js";import"./index-9188ba37.js";import{B as v}from"./button-2306e789.js";import"./es.object.get-own-property-descriptor-ca06259f.js";import"./index-67ef4239.js";import"./index-ed86a6de.js";import"./index-eb6056e0.js";import"./index-50ee27ec.js";function C(){return C=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},C.apply(this,arguments)}a(C,"_extends");function D(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a(D,"_assertThisInitialized");function S(e,n){var i=a(function(r){return n&&m.isValidElement(r)?n(r):r},"mapper"),o=Object.create(null);return e&&m.Children.map(e,function(t){return t}).forEach(function(t){o[t.key]=i(t)}),o}a(S,"getChildMapping");function F(e,n){e=e||{},n=n||{};function i(f){return f in n?n[f]:e[f]}a(i,"getValueForKey");var o=Object.create(null),t=[];for(var r in e)r in n?t.length&&(o[r]=t,t=[]):t.push(r);var s,c={};for(var l in n){if(o[l])for(s=0;s<o[l].length;s++){var p=o[l][s];c[o[l][s]]=i(p)}c[l]=i(l)}for(s=0;s<t.length;s++)c[t[s]]=i(t[s]);return c}a(F,"mergeChildMappings");function g(e,n,i){return i[n]!=null?i[n]:e.props[n]}a(g,"getProp");function N(e,n){return S(e.children,function(i){return m.cloneElement(i,{onExited:n.bind(null,i),in:!0,appear:g(i,"appear",e),enter:g(i,"enter",e),exit:g(i,"exit",e)})})}a(N,"getInitialChildMapping");function T(e,n,i){var o=S(e.children),t=F(n,o);return Object.keys(t).forEach(function(r){var s=t[r];if(m.isValidElement(s)){var c=r in n,l=r in o,p=n[r],f=m.isValidElement(p)&&!p.props.in;l&&(!c||f)?t[r]=m.cloneElement(s,{onExited:i.bind(null,s),in:!0,exit:g(s,"exit",e),enter:g(s,"enter",e)}):!l&&c&&!f?t[r]=m.cloneElement(s,{in:!1}):l&&c&&m.isValidElement(p)&&(t[r]=m.cloneElement(s,{onExited:i.bind(null,s),in:p.props.in,exit:g(s,"exit",e),enter:g(s,"enter",e)}))}}),t}a(T,"getNextChildMapping");var A=Object.values||function(e){return Object.keys(e).map(function(n){return e[n]})},P={component:"div",childFactory:a(function(n){return n},"childFactory")},I=function(e){U(n,e);function n(o,t){var r;r=e.call(this,o,t)||this;var s=r.handleExited.bind(D(r));return r.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},r}a(n,"TransitionGroup");var i=n.prototype;return i.componentDidMount=a(function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},"componentDidMount"),i.componentWillUnmount=a(function(){this.mounted=!1},"componentWillUnmount"),n.getDerivedStateFromProps=a(function(t,r){var s=r.children,c=r.handleExited,l=r.firstRender;return{children:l?N(t,c):T(t,s,c),firstRender:!1}},"getDerivedStateFromProps"),i.handleExited=a(function(t,r){var s=S(this.props.children);t.key in s||(t.props.onExited&&t.props.onExited(r),this.mounted&&this.setState(function(c){var l=C({},c.children);return delete l[t.key],{children:l}}))},"handleExited"),i.render=a(function(){var t=this.props,r=t.component,s=t.childFactory,c=V(t,["component","childFactory"]),l=this.state.contextValue,p=A(this.state.children).map(s);return delete c.appear,delete c.enter,delete c.exit,r===null?d(_.Provider,{value:l,children:p}):d(_.Provider,{value:l,children:d(r,{...c,children:p})})},"render"),n}(O.Component);I.propTypes={};I.defaultProps=P;const W=I,G=a(e=>{const{text:n,type:i}=e;return d("div",{className:"message",children:B("div",{className:"message-content",children:[d("div",{className:"icon",children:a(t=>{let r="check-circle";return t==="success"&&(r="check-circle"),t==="danger"&&(r="times-circle"),t==="warning"&&(r="exclamation-circle"),t==="info"&&(r="info-circle"),d(j,{icon:r,theme:t})},"renderIcon")(i)}),d("div",{className:"text",children:n})]})})},"Message"),w=G;try{message.displayName="message",message.__docgenInfo={description:`> message组件，

### 引用方法

\`\`\` js

import { Button } from 'val-design'

\`\`\``,displayName:"message",props:{text:{defaultValue:null,description:"提示文字",name:"text",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"提示类型",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Message/message.tsx#message"]={docgenInfo:message.__docgenInfo,name:"message",path:"src/components/Message/message.tsx#message"})}catch{}let M;const q=new Uint8Array(16);function $(){if(!M&&(M=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!M))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return M(q)}a($,"rng");const u=[];for(let e=0;e<256;++e)u.push((e+256).toString(16).slice(1));function Y(e,n=0){return(u[e[n+0]]+u[e[n+1]]+u[e[n+2]]+u[e[n+3]]+"-"+u[e[n+4]]+u[e[n+5]]+"-"+u[e[n+6]]+u[e[n+7]]+"-"+u[e[n+8]]+u[e[n+9]]+"-"+u[e[n+10]]+u[e[n+11]]+u[e[n+12]]+u[e[n+13]]+u[e[n+14]]+u[e[n+15]]).toLowerCase()}a(Y,"unsafeStringify");const z=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),b={randomUUID:z};function H(e,n,i){if(b.randomUUID&&!n&&!e)return b.randomUUID();e=e||{};const o=e.random||(e.rng||$)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,n){i=i||0;for(let t=0;t<16;++t)n[i+t]=o[t];return n}return Y(o)}a(H,"v4");const x=a(()=>H(),"getUUID");let y;const J=a(()=>{const[e,n]=m.useState([]),i=3*1e3,o=10,t=a(r=>{const{key:s}=r;n(c=>c.filter(l=>s!==l.key))},"remove");return y=a(r=>{n(s=>[...s,r]),setTimeout(()=>{t(r)},i)},"add"),m.useEffect(()=>{if(e.length>o){const[r]=e;t(r)}},[e]),d("div",{className:"message-container",children:d(W,{children:e.map(({text:r,key:s,type:c})=>d(L,{timeout:200,in:!0,animation:"slide-in-top",children:d(w,{type:c,text:r})},s))})})},"MessageContainer");let h=document.querySelector("#message-wrapper");h||(h=document.createElement("div"),h.className="message-wrapper",h.id="message-wrapper",document.body.append(h));R(h).render(d(J,{}));const E={info:e=>{y({text:e,key:x(),type:"info"})},success:e=>{y({text:e,key:x(),type:"success"})},warning:e=>{y({text:e,key:x(),type:"warning"})},error:e=>{y({text:e,key:x(),type:"danger"})}},le={parameters:{storySource:{source:`import React from 'react'
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
//# sourceMappingURL=message.stories-838a30e1.js.map
