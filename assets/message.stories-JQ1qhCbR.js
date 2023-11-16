import{j as l}from"./jsx-runtime-vNq4Oc-g.js";import{r as u,R as h}from"./index-4g5l5LRQ.js";import{a as F}from"./client-2m9R7veF.js";import{_ as I,a as C,T as N}from"./transition-RhKZC-n4.js";import{I as b}from"./icon-o6lh9CdC.js";import{_ as w,a as V}from"./inheritsLoose-9tIPpNWa.js";import{_ as L}from"./assertThisInitialized-4q6YPdh3.js";import{v as D}from"./v4-yQnnJER4.js";import"./index-RSpRGmCi.js";import{B as v}from"./button-uFKEGf_x.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-IUUiSLa8.js";import"./index-uebAiod8.js";import"./index-RjLNEsQV.js";import"./index-tvtfaFq4.js";function M(t,i){var s=function(e){return i&&u.isValidElement(e)?i(e):e},a=Object.create(null);return t&&u.Children.map(t,function(n){return n}).forEach(function(n){a[n.key]=s(n)}),a}function R(t,i){t=t||{},i=i||{};function s(p){return p in i?i[p]:t[p]}var a=Object.create(null),n=[];for(var e in t)e in i?n.length&&(a[e]=n,n=[]):n.push(e);var r,o={};for(var c in i){if(a[c])for(r=0;r<a[c].length;r++){var d=a[c][r];o[a[c][r]]=s(d)}o[c]=s(c)}for(r=0;r<n.length;r++)o[n[r]]=s(n[r]);return o}function m(t,i,s){return s[i]!=null?s[i]:t.props[i]}function O(t,i){return M(t.children,function(s){return u.cloneElement(s,{onExited:i.bind(null,s),in:!0,appear:m(s,"appear",t),enter:m(s,"enter",t),exit:m(s,"exit",t)})})}function P(t,i,s){var a=M(t.children),n=R(i,a);return Object.keys(n).forEach(function(e){var r=n[e];if(u.isValidElement(r)){var o=e in i,c=e in a,d=i[e],p=u.isValidElement(d)&&!d.props.in;c&&(!o||p)?n[e]=u.cloneElement(r,{onExited:s.bind(null,r),in:!0,exit:m(r,"exit",t),enter:m(r,"enter",t)}):!c&&o&&!p?n[e]=u.cloneElement(r,{in:!1}):c&&o&&u.isValidElement(d)&&(n[e]=u.cloneElement(r,{onExited:s.bind(null,r),in:d.props.in,exit:m(r,"exit",t),enter:m(r,"enter",t)}))}}),n}var T=Object.values||function(t){return Object.keys(t).map(function(i){return t[i]})},W={component:"div",childFactory:function(i){return i}},j=function(t){w(i,t);function i(a,n){var e;e=t.call(this,a,n)||this;var r=e.handleExited.bind(L(e));return e.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},e}var s=i.prototype;return s.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},s.componentWillUnmount=function(){this.mounted=!1},i.getDerivedStateFromProps=function(n,e){var r=e.children,o=e.handleExited,c=e.firstRender;return{children:c?O(n,o):P(n,r,o),firstRender:!1}},s.handleExited=function(n,e){var r=M(this.props.children);n.key in r||(n.props.onExited&&n.props.onExited(e),this.mounted&&this.setState(function(o){var c=V({},o.children);return delete c[n.key],{children:c}}))},s.render=function(){var n=this.props,e=n.component,r=n.childFactory,o=I(n,["component","childFactory"]),c=this.state.contextValue,d=T(this.state.children).map(r);return delete o.appear,delete o.enter,delete o.exit,e===null?h.createElement(C.Provider,{value:c},d):h.createElement(C.Provider,{value:c},h.createElement(e,o,d))},i}(h.Component);j.propTypes={};j.defaultProps=W;const A=j,S=t=>{const{text:i,type:s}=t,a=n=>{let e="check-circle";return n==="success"&&(e="check-circle"),n==="danger"&&(e="times-circle"),n==="warning"&&(e="exclamation-circle"),n==="info"&&(e="info-circle"),l.jsx(b,{icon:e,theme:n})};return l.jsx("div",{className:"message",children:l.jsxs("div",{className:"message-content",children:[l.jsx("div",{className:"icon",children:a(s)}),l.jsx("div",{className:"text",children:i})]})})};try{message.displayName="message",message.__docgenInfo={description:`> message组件，

### 引用方法

\`\`\` js

import { Button } from 'val-design'

\`\`\``,displayName:"message",props:{text:{defaultValue:null,description:"提示文字",name:"text",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"提示类型",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'}]}}}}}catch{}const x=()=>D();let g;const G=()=>{const[t,i]=u.useState([]),s=3*1e3,a=10,n=e=>{const{key:r}=e;i(o=>o.filter(c=>r!==c.key))};return g=e=>{i(r=>[...r,e]),setTimeout(()=>{n(e)},s)},u.useEffect(()=>{if(t.length>a){const[e]=t;n(e)}},[t]),l.jsx("div",{className:"message-container",children:l.jsx(A,{children:t.map(({text:e,key:r,type:o})=>l.jsx(N,{timeout:200,in:!0,animation:"slide-in-top",children:l.jsx(S,{type:o,text:e})},r))})})};let f=document.querySelector("#message-wrapper");f||(f=document.createElement("div"),f.className="message-wrapper",f.id="message-wrapper",document.body.append(f));F(f).render(l.jsx(G,{}));const E={info:t=>{g({text:t,key:x(),type:"info"})},success:t=>{g({text:t,key:x(),type:"success"})},warning:t=>{g({text:t,key:x(),type:"warning"})},error:t=>{g({text:t,key:x(),type:"danger"})}},ie={title:"Feedback/Message 全局提示",component:S},y=()=>l.jsxs("code",{children:[l.jsx(v,{type:"default",onClick:()=>{E.info("Info Message")},children:"Info Message"}),l.jsx(v,{type:"primary",style:{marginLeft:"20px"},onClick:()=>{E.success("Success Message")},children:"Success Message"}),l.jsx(v,{type:"warning",style:{marginLeft:"20px"},onClick:()=>{E.warning("Success Message")},children:"Warning Message"}),l.jsx(v,{type:"danger",style:{marginLeft:"20px"},onClick:()=>{E.error("Error Message")},children:"Error Message"})]});var _,B,k;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`() => <code>
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
//# sourceMappingURL=message.stories-JQ1qhCbR.js.map
