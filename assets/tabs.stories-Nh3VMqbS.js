import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{a as V}from"./chunk-WFFRPTHA-4hQ1D0Dg.js";import{r as k,R as b}from"./index-4g5l5LRQ.js";import{c as f}from"./index--jIQrVgb.js";import"./index-guF_0RJ8.js";import{I as w}from"./icon-qWZpAwz3.js";import"./preview-errors-UTk86sAa.js";import"./index-PPLHz8o0.js";import"./v4-yQnnJER4.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-uJ5N1ZfI.js";import"./index-tvtfaFq4.js";const r=a=>{const{defaultIndex:C,className:x,onSelect:c,children:o,type:d}=a,[m,D]=k.useState(C),N=(s,t,i)=>{i||(D(t),c&&c(t))},g=f("v-tabs-nav",{"nav-line":d==="line","nav-card":d==="card"}),B=()=>b.Children.map(o,(s,t)=>{const i=s,{label:j,disabled:p}=i.props,S=f("v-tabs-nav-item",{"is-active":m===t,disabled:p});return e.jsx("li",{className:S,onClick:q=>{N(q,t,p)},children:j},`nav-item-${t}`)}),A=()=>b.Children.map(o,(s,t)=>{if(t===m)return s});return e.jsxs("div",{className:`v-tabs ${x||""}`,children:[e.jsx("ul",{className:g,children:B()}),e.jsx("div",{className:"v-tabs-content",children:A()})]})};r.defaultProps={defaultIndex:0,type:"line"};const _=r;try{r.displayName="Tabs",r.__docgenInfo={description:`
> 选项卡切换组件
### 引用方法

\`\`\`js

import { Tabs } from 'val-design'

\`\`\``,displayName:"Tabs",props:{defaultIndex:{defaultValue:{value:"0"},description:"当前激活 tab 面板的 index，默认为0",name:"defaultIndex",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"可以扩展的 className",name:"className",required:!1,type:{name:"string"}},onSelect:{defaultValue:null,description:"点击 Tab 触发的回调函数",name:"onSelect",required:!1,type:{name:"((selectedIndex: number) => void)"}},type:{defaultValue:{value:"line"},description:"Tabs的样式，两种可选，默认为 line",name:"type",required:!1,type:{name:"enum",value:[{value:'"line"'},{value:'"card"'}]}}}}}catch{}try{tabs.displayName="tabs",tabs.__docgenInfo={description:`
> 选项卡切换组件
### 引用方法

\`\`\`js

import { Tabs } from 'val-design'

\`\`\``,displayName:"tabs",props:{defaultIndex:{defaultValue:{value:"0"},description:"当前激活 tab 面板的 index，默认为0",name:"defaultIndex",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"可以扩展的 className",name:"className",required:!1,type:{name:"string"}},onSelect:{defaultValue:null,description:"点击 Tab 触发的回调函数",name:"onSelect",required:!1,type:{name:"((selectedIndex: number) => void)"}},type:{defaultValue:{value:"line"},description:"Tabs的样式，两种可选，默认为 line",name:"type",required:!1,type:{name:"enum",value:[{value:'"line"'},{value:'"card"'}]}}}}}catch{}const n=({children:a})=>e.jsx("div",{className:"v-tab-panel",children:a});try{n.displayName="TabItem",n.__docgenInfo={description:"",displayName:"TabItem",props:{label:{defaultValue:null,description:"Tab选项上面的文字",name:"label",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},disabled:{defaultValue:null,description:"Tab选项是否被禁用",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}try{tabItem.displayName="tabItem",tabItem.__docgenInfo={description:"",displayName:"tabItem",props:{label:{defaultValue:null,description:"Tab选项上面的文字",name:"label",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},disabled:{defaultValue:null,description:"Tab选项是否被禁用",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const Q={title:"Data Display/Tabs 标签页",component:_},v=a=>e.jsxs(_,{...a,onSelect:V("selected"),children:[e.jsx(n,{label:"选项卡一",children:"this is content one"}),e.jsx(n,{label:"选项卡二",children:"this is content two"}),e.jsx(n,{label:e.jsxs(e.Fragment,{children:[e.jsx(w,{icon:"check-circle"})," 自定义图标"]}),children:"this is content two"}),e.jsx(n,{label:"用户管理",disabled:!0,children:"this is content three"})]}),l=v.bind({}),u=v.bind({});u.args={type:"card"};var E,T,I;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`props => <Tabs {...props} onSelect={action('selected')}>
    <TabItem label="选项卡一">this is content one</TabItem>
    <TabItem label="选项卡二">this is content two</TabItem>
    <TabItem label={<>
          <Icon icon="check-circle" /> 自定义图标
        </>}>
      this is content two
    </TabItem>
    <TabItem label="用户管理" disabled>
      this is content three
    </TabItem>
  </Tabs>`,...(I=(T=l.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var y,F,h;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`props => <Tabs {...props} onSelect={action('selected')}>
    <TabItem label="选项卡一">this is content one</TabItem>
    <TabItem label="选项卡二">this is content two</TabItem>
    <TabItem label={<>
          <Icon icon="check-circle" /> 自定义图标
        </>}>
      this is content two
    </TabItem>
    <TabItem label="用户管理" disabled>
      this is content three
    </TabItem>
  </Tabs>`,...(h=(F=u.parameters)==null?void 0:F.docs)==null?void 0:h.source}}};const U=["DefaultTab","CardTab"];export{u as CardTab,l as DefaultTab,U as __namedExportsOrder,Q as default};