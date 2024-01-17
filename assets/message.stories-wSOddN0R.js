import{j as l}from"./jsx-runtime-vNq4Oc-g.js";import{r as u,R as h}from"./index-4g5l5LRQ.js";import{a as F}from"./client-MU6fCXSs.js";import{_ as I,a as C,T as N}from"./transition-pUwUtk3C.js";import{I as b}from"./icon-YfdEylPN.js";import{_ as w,a as V}from"./inheritsLoose-9tIPpNWa.js";import{_ as L}from"./assertThisInitialized-4q6YPdh3.js";import{v as D}from"./v4-yQnnJER4.js";import"./index-a3BAcZyL.js";import{B as v}from"./button-X4YiO3nr.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-jmm5gWkb.js";import"./index--jIQrVgb.js";import"./index-uJ5N1ZfI.js";import"./index-tvtfaFq4.js";function M(n,i){var s=function(e){return i&&u.isValidElement(e)?i(e):e},a=Object.create(null);return n&&u.Children.map(n,function(t){return t}).forEach(function(t){a[t.key]=s(t)}),a}function R(n,i){n=n||{},i=i||{};function s(p){return p in i?i[p]:n[p]}var a=Object.create(null),t=[];for(var e in n)e in i?t.length&&(a[e]=t,t=[]):t.push(e);var r,o={};for(var c in i){if(a[c])for(r=0;r<a[c].length;r++){var d=a[c][r];o[a[c][r]]=s(d)}o[c]=s(c)}for(r=0;r<t.length;r++)o[t[r]]=s(t[r]);return o}function m(n,i,s){return s[i]!=null?s[i]:n.props[i]}function O(n,i){return M(n.children,function(s){return u.cloneElement(s,{onExited:i.bind(null,s),in:!0,appear:m(s,"appear",n),enter:m(s,"enter",n),exit:m(s,"exit",n)})})}function P(n,i,s){var a=M(n.children),t=R(i,a);return Object.keys(t).forEach(function(e){var r=t[e];if(u.isValidElement(r)){var o=e in i,c=e in a,d=i[e],p=u.isValidElement(d)&&!d.props.in;c&&(!o||p)?t[e]=u.cloneElement(r,{onExited:s.bind(null,r),in:!0,exit:m(r,"exit",n),enter:m(r,"enter",n)}):!c&&o&&!p?t[e]=u.cloneElement(r,{in:!1}):c&&o&&u.isValidElement(d)&&(t[e]=u.cloneElement(r,{onExited:s.bind(null,r),in:d.props.in,exit:m(r,"exit",n),enter:m(r,"enter",n)}))}}),t}var T=Object.values||function(n){return Object.keys(n).map(function(i){return n[i]})},W={component:"div",childFactory:function(i){return i}},j=function(n){w(i,n);function i(a,t){var e;e=n.call(this,a,t)||this;var r=e.handleExited.bind(L(e));return e.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},e}var s=i.prototype;return s.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},s.componentWillUnmount=function(){this.mounted=!1},i.getDerivedStateFromProps=function(t,e){var r=e.children,o=e.handleExited,c=e.firstRender;return{children:c?O(t,o):P(t,r,o),firstRender:!1}},s.handleExited=function(t,e){var r=M(this.props.children);t.key in r||(t.props.onExited&&t.props.onExited(e),this.mounted&&this.setState(function(o){var c=V({},o.children);return delete c[t.key],{children:c}}))},s.render=function(){var t=this.props,e=t.component,r=t.childFactory,o=I(t,["component","childFactory"]),c=this.state.contextValue,d=T(this.state.children).map(r);return delete o.appear,delete o.enter,delete o.exit,e===null?h.createElement(C.Provider,{value:c},d):h.createElement(C.Provider,{value:c},h.createElement(e,o,d))},i}(h.Component);j.propTypes={};j.defaultProps=W;const A=j,S=n=>{const{text:i,type:s}=n,a=t=>{let e="check-circle";return t==="success"&&(e="check-circle"),t==="danger"&&(e="times-circle"),t==="warning"&&(e="exclamation-circle"),t==="info"&&(e="info-circle"),l.jsx(b,{icon:e,theme:t})};return l.jsx("div",{className:"message",children:l.jsxs("div",{className:"message-content",children:[l.jsx("div",{className:"icon",children:a(s)}),l.jsx("div",{className:"text",children:i})]})})};try{message.displayName="message",message.__docgenInfo={description:`> message组件，

### 引用方法

\`\`\` js

import { Button } from 'val-design'

\`\`\``,displayName:"message",props:{text:{defaultValue:null,description:"提示文字",name:"text",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"提示类型",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'}]}}}}}catch{}const x=()=>D();let g;const G=()=>{const[n,i]=u.useState([]),s=3*1e3,a=10,t=e=>{const{key:r}=e;i(o=>o.filter(c=>r!==c.key))};return g=e=>{i(r=>[...r,e]),setTimeout(()=>{t(e)},s)},u.useEffect(()=>{if(n.length>a){const[e]=n;t(e)}},[n]),l.jsx("div",{className:"message-container",children:l.jsx(A,{children:n.map(({text:e,key:r,type:o})=>l.jsx(N,{timeout:200,in:!0,animation:"slide-in-top",children:l.jsx(S,{type:o,text:e})},r))})})};let f=document.querySelector("#message-wrapper");f||(f=document.createElement("div"),f.className="message-wrapper",f.id="message-wrapper",document.body.append(f));F(f).render(l.jsx(G,{}));const E={info:n=>{g({text:n,key:x(),type:"info"})},success:n=>{g({text:n,key:x(),type:"success"})},warning:n=>{g({text:n,key:x(),type:"warning"})},error:n=>{g({text:n,key:x(),type:"danger"})}},ie={title:"Feedback/Message 全局提示",component:S},y=()=>l.jsxs("code",{children:[l.jsx(v,{type:"default",onClick:()=>{E.info("Info Message")},children:"Info Message"}),l.jsx(v,{type:"primary",style:{marginLeft:"20px"},onClick:()=>{E.success("Success Message")},children:"Success Message"}),l.jsx(v,{type:"warning",style:{marginLeft:"20px"},onClick:()=>{E.warning("Success Message")},children:"Warning Message"}),l.jsx(v,{type:"danger",style:{marginLeft:"20px"},onClick:()=>{E.error("Error Message")},children:"Error Message"})]});var _,B,k;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`() => <code>
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
  </code>`,...(k=(B=y.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};const se=["AllMessage"];export{y as AllMessage,se as __namedExportsOrder,ie as default};
