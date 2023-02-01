var g=Object.defineProperty;var n=(e,s)=>g(e,"name",{value:s,configurable:!0});import{a as x}from"./index-d4f1247d.js";import{r as A,R as f}from"./index-a38f3d31.js";import{c as y}from"./index-ed86a6de.js";import{a as i,j as a,F as S}from"./jsx-runtime-69008c6b.js";import"./index-e03ad990.js";import{I as q}from"./icon-938a876b.js";import"./es.object.get-own-property-descriptor-d261b708.js";import"./iframe-9b30a751.js";import"./web.url.constructor-fb8c8940.js";import"./es.number.is-integer-d7d899e3.js";import"./make-decorator-3cd8a5d0.js";import"./index-eb6056e0.js";import"./index-50ee27ec.js";const r=n(e=>{const{defaultIndex:s,className:_,onSelect:c,children:d,type:m}=e,[p,I]=A.useState(s),E=n((l,t,o)=>{o||(I(t),c&&c(t))},"handleClick"),C=y("v-tabs-nav",{"nav-line":m==="line","nav-card":m==="card"}),v=n(()=>f.Children.map(d,(l,t)=>{const o=l,{label:D,disabled:b}=o.props,N=y("v-tabs-nav-item",{"is-active":p===t,disabled:b});return a("li",{className:N,onClick:B=>{E(B,t,b)},children:D},`nav-item-${t}`)}),"renderNavLinks"),h=n(()=>f.Children.map(d,(l,t)=>{if(t===p)return l}),"renderContent");return i("div",{className:`v-tabs ${_||""}`,children:[a("ul",{className:C,children:v()}),a("div",{className:"v-tabs-content",children:h()})]})},"Tabs");r.defaultProps={defaultIndex:0,type:"line"};const T=r;try{r.displayName="Tabs",r.__docgenInfo={description:`
> 选项卡切换组件
### 引用方法

\`\`\`js

import { Tabs } from 'val-design'

\`\`\``,displayName:"Tabs",props:{defaultIndex:{defaultValue:{value:"0"},description:"当前激活 tab 面板的 index，默认为0",name:"defaultIndex",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"可以扩展的 className",name:"className",required:!1,type:{name:"string"}},onSelect:{defaultValue:null,description:"点击 Tab 触发的回调函数",name:"onSelect",required:!1,type:{name:"((selectedIndex: number) => void)"}},type:{defaultValue:{value:"line"},description:"Tabs的样式，两种可选，默认为 line",name:"type",required:!1,type:{name:"enum",value:[{value:'"line"'},{value:'"card"'}]}}}}}catch{}try{tabs.displayName="tabs",tabs.__docgenInfo={description:`
> 选项卡切换组件
### 引用方法

\`\`\`js

import { Tabs } from 'val-design'

\`\`\``,displayName:"tabs",props:{defaultIndex:{defaultValue:{value:"0"},description:"当前激活 tab 面板的 index，默认为0",name:"defaultIndex",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"可以扩展的 className",name:"className",required:!1,type:{name:"string"}},onSelect:{defaultValue:null,description:"点击 Tab 触发的回调函数",name:"onSelect",required:!1,type:{name:"((selectedIndex: number) => void)"}},type:{defaultValue:{value:"line"},description:"Tabs的样式，两种可选，默认为 line",name:"type",required:!1,type:{name:"enum",value:[{value:'"line"'},{value:'"card"'}]}}}}}catch{}const u=n(({children:e})=>a("div",{className:"v-tab-panel",children:e}),"TabItem");try{u.displayName="TabItem",u.__docgenInfo={description:"",displayName:"TabItem",props:{label:{defaultValue:null,description:"Tab选项上面的文字",name:"label",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},disabled:{defaultValue:null,description:"Tab选项是否被禁用",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}try{tabItem.displayName="tabItem",tabItem.__docgenInfo={description:"",displayName:"tabItem",props:{label:{defaultValue:null,description:"Tab选项上面的文字",name:"label",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},disabled:{defaultValue:null,description:"Tab选项是否被禁用",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const K={parameters:{storySource:{source:`import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Tabs from './tabs'
import TabItem from './tabItem'
import Icon from '../Icon'

export default {
  title: 'Data Display/Tabs 标签页',
  component: Tabs,
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = props => (
  <Tabs {...props} onSelect={action('selected')}>
    <TabItem label="选项卡一">this is content one</TabItem>
    <TabItem label="选项卡二">this is content two</TabItem>
    <TabItem
      label={
        <>
          <Icon icon="check-circle" /> 自定义图标
        </>
      }
    >
      this is content two
    </TabItem>
    <TabItem label="用户管理" disabled>
      this is content three
    </TabItem>
  </Tabs>
)

export const DefaultTab = Template.bind({})
export const CardTab = Template.bind({})
CardTab.args = {
  type: 'card',
}
`,locationsMap:{"default-tab":{startLoc:{col:46,line:14},endLoc:{col:1,line:31},startBody:{col:46,line:14},endBody:{col:1,line:31}},"card-tab":{startLoc:{col:46,line:14},endLoc:{col:1,line:31},startBody:{col:46,line:14},endBody:{col:1,line:31}}}}},title:"Data Display/Tabs 标签页",component:T},F=n(e=>i(T,{...e,onSelect:x("selected"),children:[a(u,{label:"选项卡一",children:"this is content one"}),a(u,{label:"选项卡二",children:"this is content two"}),a(u,{label:i(S,{children:[a(q,{icon:"check-circle"})," 自定义图标"]}),children:"this is content two"}),a(u,{label:"用户管理",disabled:!0,children:"this is content three"})]}),"Template"),Q=F.bind({}),V=F.bind({});V.args={type:"card"};const U=["DefaultTab","CardTab"];export{V as CardTab,Q as DefaultTab,U as __namedExportsOrder,K as default};
//# sourceMappingURL=tabs.stories-d7a07516.js.map
