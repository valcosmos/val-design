import{r as d,j as l,R as w,a as B}from"./jsx-runtime.f3150366.js";import{a as R}from"./client.814fd60c.js";import{_ as V,a as b,T as O}from"./transition.9b0b7e30.js";import{I as k}from"./icon.34088235.js";import{_ as L}from"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.455e478b.js";import{B as v}from"./button.e3ad4b87.js";import"./iframe.cc34769a.js";import"./index.f4b47b74.js";import"./index.b3d31cad.js";import"./index.es.231671ec.js";import"./index.0e0ded8f.js";function E(){return E=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var s=arguments[n];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i])}return e},E.apply(this,arguments)}function j(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e,n){var s=function(r){return n&&d.exports.isValidElement(r)?n(r):r},i=Object.create(null);return e&&d.exports.Children.map(e,function(t){return t}).forEach(function(t){i[t.key]=s(t)}),i}function T(e,n){e=e||{},n=n||{};function s(g){return g in n?n[g]:e[g]}var i=Object.create(null),t=[];for(var r in e)r in n?t.length&&(i[r]=t,t=[]):t.push(r);var o,a={};for(var c in n){if(i[c])for(o=0;o<i[c].length;o++){var p=i[c][o];a[i[c][o]]=s(p)}a[c]=s(c)}for(o=0;o<t.length;o++)a[t[o]]=s(t[o]);return a}function m(e,n,s){return s[n]!=null?s[n]:e.props[n]}function N(e,n){return S(e.children,function(s){return d.exports.cloneElement(s,{onExited:n.bind(null,s),in:!0,appear:m(s,"appear",e),enter:m(s,"enter",e),exit:m(s,"exit",e)})})}function A(e,n,s){var i=S(e.children),t=T(n,i);return Object.keys(t).forEach(function(r){var o=t[r];if(!!d.exports.isValidElement(o)){var a=r in n,c=r in i,p=n[r],g=d.exports.isValidElement(p)&&!p.props.in;c&&(!a||g)?t[r]=d.exports.cloneElement(o,{onExited:s.bind(null,o),in:!0,exit:m(o,"exit",e),enter:m(o,"enter",e)}):!c&&a&&!g?t[r]=d.exports.cloneElement(o,{in:!1}):c&&a&&d.exports.isValidElement(p)&&(t[r]=d.exports.cloneElement(o,{onExited:s.bind(null,o),in:p.props.in,exit:m(o,"exit",e),enter:m(o,"enter",e)}))}}),t}var F=Object.values||function(e){return Object.keys(e).map(function(n){return e[n]})},D={component:"div",childFactory:function(n){return n}},_=function(e){V(n,e);function n(i,t){var r;r=e.call(this,i,t)||this;var o=r.handleExited.bind(j(r));return r.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},r}var s=n.prototype;return s.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},s.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(t,r){var o=r.children,a=r.handleExited,c=r.firstRender;return{children:c?N(t,a):A(t,o,a),firstRender:!1}},s.handleExited=function(t,r){var o=S(this.props.children);t.key in o||(t.props.onExited&&t.props.onExited(r),this.mounted&&this.setState(function(a){var c=E({},a.children);return delete c[t.key],{children:c}}))},s.render=function(){var t=this.props,r=t.component,o=t.childFactory,a=L(t,["component","childFactory"]),c=this.state.contextValue,p=F(this.state.children).map(o);return delete a.appear,delete a.enter,delete a.exit,r===null?l(b.Provider,{value:c,children:p}):l(b.Provider,{value:c,children:l(r,{...a,children:p})})},n}(w.Component);_.propTypes={};_.defaultProps=D;const U=_,P=e=>{const{text:n,type:s}=e;return l("div",{className:"message",children:B("div",{className:"message-content",children:[l("div",{className:"icon",children:(t=>{let r="check-circle";return t==="success"&&(r="check-circle"),t==="danger"&&(r="times-circle"),t==="warning"&&(r="exclamation-circle"),t==="info"&&(r="info-circle"),l(k,{icon:r,theme:t})})(s)}),l("div",{className:"text",children:n})]})})},I=P;try{message.displayName="message",message.__docgenInfo={description:`> message\u7EC4\u4EF6\uFF0C

### \u5F15\u7528\u65B9\u6CD5

\`\`\` js

import { Button } from 'val-design'

\`\`\``,displayName:"message",props:{text:{defaultValue:null,description:"\u63D0\u793A\u6587\u5B57",name:"text",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"\u63D0\u793A\u7C7B\u578B",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Message/message.tsx#message"]={docgenInfo:message.__docgenInfo,name:"message",path:"src/components/Message/message.tsx#message"})}catch{}var y,G=new Uint8Array(16);function W(){if(!y&&(y=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!y))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return y(G)}const $=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function q(e){return typeof e=="string"&&$.test(e)}var u=[];for(var C=0;C<256;++C)u.push((C+256).toString(16).substr(1));function Y(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,s=(u[e[n+0]]+u[e[n+1]]+u[e[n+2]]+u[e[n+3]]+"-"+u[e[n+4]]+u[e[n+5]]+"-"+u[e[n+6]]+u[e[n+7]]+"-"+u[e[n+8]]+u[e[n+9]]+"-"+u[e[n+10]]+u[e[n+11]]+u[e[n+12]]+u[e[n+13]]+u[e[n+14]]+u[e[n+15]]).toLowerCase();if(!q(s))throw TypeError("Stringified UUID is invalid");return s}function z(e,n,s){e=e||{};var i=e.random||(e.rng||W)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,n){s=s||0;for(var t=0;t<16;++t)n[s+t]=i[t];return n}return Y(i)}const x=()=>z();let h;const H=()=>{const[e,n]=d.exports.useState([]),s=3*1e3,i=10,t=r=>{const{key:o}=r;n(a=>a.filter(c=>o!==c.key))};return h=r=>{n(o=>[...o,r]),setTimeout(()=>{t(r)},s)},d.exports.useEffect(()=>{if(e.length>i){const[r]=e;t(r)}},[e]),l("div",{className:"message-container",children:l(U,{children:e.map(({text:r,key:o,type:a})=>l(O,{timeout:200,in:!0,animation:"slide-in-top",children:l(I,{type:a,text:r})},o))})})};let f=document.querySelector("#message-wrapper");f||(f=document.createElement("div"),f.className="message-wrapper",f.id="message-wrapper",document.body.append(f));R(f).render(l(H,{}));const M={info:e=>{h({text:e,key:x(),type:"info"})},success:e=>{h({text:e,key:x(),type:"success"})},warning:e=>{h({text:e,key:x(),type:"warning"})},error:e=>{h({text:e,key:x(),type:"danger"})}},ae={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { message } from './index'
import Button from '../Button'
import Message from './message'

export default {
  title: 'val-design/Message \u5168\u5C40\u63D0\u793A',
  component: Message
} as ComponentMeta<typeof Message>

export const AllMessage: ComponentStory<typeof Message> = (args) => (
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
`,locationsMap:{"all-message":{startLoc:{col:58,line:12},endLoc:{col:1,line:50},startBody:{col:58,line:12},endBody:{col:1,line:50}}}}},title:"val-design/Message \u5168\u5C40\u63D0\u793A",component:I},ce=e=>B("code",{children:[l(v,{type:"default",onClick:()=>{M.info("Info Message")},children:"Info Message"}),l(v,{type:"primary",style:{marginLeft:"20px"},onClick:()=>{M.success("Success Message")},children:"Success Message"}),l(v,{type:"warning",style:{marginLeft:"20px"},onClick:()=>{M.warning("Success Message")},children:"Warning Message"}),l(v,{type:"danger",style:{marginLeft:"20px"},onClick:()=>{M.error("Error Message")},children:"Error Message"})]}),ue=["AllMessage"];export{ce as AllMessage,ue as __namedExportsOrder,ae as default};
//# sourceMappingURL=message.stories.23cafabe.js.map
