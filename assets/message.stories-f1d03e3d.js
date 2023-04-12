import{j as l}from"./jsx-runtime-ccada58e.js";import{r as d,R as x}from"./index-f1f749bf.js";import{c as k}from"./client-cc3f7e99.js";import{_ as D,a as _,T as b}from"./transition-7c534d4b.js";import{I as F}from"./icon-517f4a87.js";import{_ as N,a as R}from"./inheritsLoose-9eefaa95.js";import{_ as L}from"./assertThisInitialized-081f9914.js";import"./index-153648a8.js";import{B as v}from"./button-25c5f627.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./index-2e4736b8.js";import"./index-5ae439ea.js";import"./index-4d501b15.js";function C(e,n){var s=function(r){return n&&d.isValidElement(r)?n(r):r},a=Object.create(null);return e&&d.Children.map(e,function(t){return t}).forEach(function(t){a[t.key]=s(t)}),a}function O(e,n){e=e||{},n=n||{};function s(g){return g in n?n[g]:e[g]}var a=Object.create(null),t=[];for(var r in e)r in n?t.length&&(a[r]=t,t=[]):t.push(r);var i,o={};for(var c in n){if(a[c])for(i=0;i<a[c].length;i++){var m=a[c][i];o[a[c][i]]=s(m)}o[c]=s(c)}for(i=0;i<t.length;i++)o[t[i]]=s(t[i]);return o}function p(e,n,s){return s[n]!=null?s[n]:e.props[n]}function T(e,n){return C(e.children,function(s){return d.cloneElement(s,{onExited:n.bind(null,s),in:!0,appear:p(s,"appear",e),enter:p(s,"enter",e),exit:p(s,"exit",e)})})}function A(e,n,s){var a=C(e.children),t=O(n,a);return Object.keys(t).forEach(function(r){var i=t[r];if(d.isValidElement(i)){var o=r in n,c=r in a,m=n[r],g=d.isValidElement(m)&&!m.props.in;c&&(!o||g)?t[r]=d.cloneElement(i,{onExited:s.bind(null,i),in:!0,exit:p(i,"exit",e),enter:p(i,"enter",e)}):!c&&o&&!g?t[r]=d.cloneElement(i,{in:!1}):c&&o&&d.isValidElement(m)&&(t[r]=d.cloneElement(i,{onExited:s.bind(null,i),in:m.props.in,exit:p(i,"exit",e),enter:p(i,"enter",e)}))}}),t}var P=Object.values||function(e){return Object.keys(e).map(function(n){return e[n]})},W={component:"div",childFactory:function(n){return n}},I=function(e){N(n,e);function n(a,t){var r;r=e.call(this,a,t)||this;var i=r.handleExited.bind(L(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}var s=n.prototype;return s.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},s.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(t,r){var i=r.children,o=r.handleExited,c=r.firstRender;return{children:c?T(t,o):A(t,i,o),firstRender:!1}},s.handleExited=function(t,r){var i=C(this.props.children);t.key in i||(t.props.onExited&&t.props.onExited(r),this.mounted&&this.setState(function(o){var c=R({},o.children);return delete c[t.key],{children:c}}))},s.render=function(){var t=this.props,r=t.component,i=t.childFactory,o=D(t,["component","childFactory"]),c=this.state.contextValue,m=P(this.state.children).map(i);return delete o.appear,delete o.enter,delete o.exit,r===null?x.createElement(_.Provider,{value:c},m):x.createElement(_.Provider,{value:c},x.createElement(r,o,m))},n}(x.Component);I.propTypes={};I.defaultProps=W;const G=I,V=e=>{const{text:n,type:s}=e,a=t=>{let r="check-circle";return t==="success"&&(r="check-circle"),t==="danger"&&(r="times-circle"),t==="warning"&&(r="exclamation-circle"),t==="info"&&(r="info-circle"),l.jsx(F,{icon:r,theme:t})};return l.jsx("div",{className:"message",children:l.jsxs("div",{className:"message-content",children:[l.jsx("div",{className:"icon",children:a(s)}),l.jsx("div",{className:"text",children:n})]})})};try{message.displayName="message",message.__docgenInfo={description:`> message组件，

### 引用方法

\`\`\` js

import { Button } from 'val-design'

\`\`\``,displayName:"message",props:{text:{defaultValue:null,description:"提示文字",name:"text",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"提示类型",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'}]}}}}}catch{}let y;const q=new Uint8Array(16);function $(){if(!y&&(y=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!y))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return y(q)}const u=[];for(let e=0;e<256;++e)u.push((e+256).toString(16).slice(1));function z(e,n=0){return(u[e[n+0]]+u[e[n+1]]+u[e[n+2]]+u[e[n+3]]+"-"+u[e[n+4]]+u[e[n+5]]+"-"+u[e[n+6]]+u[e[n+7]]+"-"+u[e[n+8]]+u[e[n+9]]+"-"+u[e[n+10]]+u[e[n+11]]+u[e[n+12]]+u[e[n+13]]+u[e[n+14]]+u[e[n+15]]).toLowerCase()}const H=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),S={randomUUID:H};function J(e,n,s){if(S.randomUUID&&!n&&!e)return S.randomUUID();e=e||{};const a=e.random||(e.rng||$)();if(a[6]=a[6]&15|64,a[8]=a[8]&63|128,n){s=s||0;for(let t=0;t<16;++t)n[s+t]=a[t];return n}return z(a)}const E=()=>J();let h;const Q=()=>{const[e,n]=d.useState([]),s=3*1e3,a=10,t=r=>{const{key:i}=r;n(o=>o.filter(c=>i!==c.key))};return h=r=>{n(i=>[...i,r]),setTimeout(()=>{t(r)},s)},d.useEffect(()=>{if(e.length>a){const[r]=e;t(r)}},[e]),l.jsx("div",{className:"message-container",children:l.jsx(G,{children:e.map(({text:r,key:i,type:o})=>l.jsx(b,{timeout:200,in:!0,animation:"slide-in-top",children:l.jsx(V,{type:o,text:r})},i))})})};let f=document.querySelector("#message-wrapper");f||(f=document.createElement("div"),f.className="message-wrapper",f.id="message-wrapper",document.body.append(f));k(f).render(l.jsx(Q,{}));const M={info:e=>{h({text:e,key:E(),type:"info"})},success:e=>{h({text:e,key:E(),type:"success"})},warning:e=>{h({text:e,key:E(),type:"warning"})},error:e=>{h({text:e,key:E(),type:"danger"})}},le={title:"Feedback/Message 全局提示",component:V},j=()=>l.jsxs("code",{children:[l.jsx(v,{type:"default",onClick:()=>{M.info("Info Message")},children:"Info Message"}),l.jsx(v,{type:"primary",style:{marginLeft:"20px"},onClick:()=>{M.success("Success Message")},children:"Success Message"}),l.jsx(v,{type:"warning",style:{marginLeft:"20px"},onClick:()=>{M.warning("Success Message")},children:"Warning Message"}),l.jsx(v,{type:"danger",style:{marginLeft:"20px"},onClick:()=>{M.error("Error Message")},children:"Error Message"})]});var w,B,U;j.parameters={...j.parameters,docs:{...(w=j.parameters)==null?void 0:w.docs,source:{originalSource:`() => <code>
    <Button type="default" onClick={() => {
    message.info('Info Message');
  }}>
      Info Message
    </Button>
    <Button type="primary" style={{
    marginLeft: '20px'
  }} onClick={() => {
    message.success('Success Message');
  }}>
      Success Message
    </Button>
    <Button type="warning" style={{
    marginLeft: '20px'
  }} onClick={() => {
    message.warning('Success Message');
  }}>
      Warning Message
    </Button>
    <Button type="danger" style={{
    marginLeft: '20px'
  }} onClick={() => {
    message.error('Error Message');
  }}>
      Error Message
    </Button>
  </code>`,...(U=(B=j.parameters)==null?void 0:B.docs)==null?void 0:U.source}}};const de=["AllMessage"];export{j as AllMessage,de as __namedExportsOrder,le as default};
//# sourceMappingURL=message.stories-f1d03e3d.js.map
