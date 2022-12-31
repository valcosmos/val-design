var g=Object.defineProperty;var n=(e,l)=>g(e,"name",{value:l,configurable:!0});import{a as x}from"./index-efcfbbe5.js";import{r as D,R as f}from"./index-d282687f.js";import{c as T}from"./index-ed86a6de.js";import{a as c,j as t,F as O}from"./jsx-runtime-920531fb.js";import"./index-9241dc99.js";import{I as N}from"./icon-ad6bebc0.js";import"./es.object.get-own-property-descriptor-fbf95828.js";import"./iframe-b077b586.js";import"./web.url.constructor-fbd69e3d.js";import"./es.number.is-integer-ad3ced59.js";import"./make-decorator-8631ee40.js";import"./index-eb6056e0.js";import"./index-50ee27ec.js";const o=n(e=>{const{defaultIndex:l,className:I,onSelect:i,children:d,type:m}=e,[p,E]=D.useState(l),C=n((u,a,r)=>{r||(E(a),i&&i(a))},"handleClick"),S=T("v-tabs-nav",{"nav-line":m==="line","nav-card":m==="card"}),F=n(()=>f.Children.map(d,(u,a)=>{const r=u,{label:v,disabled:b}=r.props,A=T("v-tabs-nav-item",{"is-active":p===a,disabled:b});return t("li",{className:A,onClick:B=>{C(B,a,b)},children:v},`nav-item-${a}`)}),"renderNavLinks"),h=n(()=>f.Children.map(d,(u,a)=>{if(a===p)return u}),"renderContent");return c("div",{className:`v-tabs ${I||""}`,children:[t("ul",{className:S,children:F()}),t("div",{className:"v-tabs-content",children:h()})]})},"Tabs");o.defaultProps={defaultIndex:0,type:"line"};const _=o;try{o.displayName="Tabs",o.__docgenInfo={description:`
> 选项卡切换组件
### 引用方法

\`\`\`js

import { Tabs } from 'val-design'

\`\`\``,displayName:"Tabs",props:{defaultIndex:{defaultValue:{value:"0"},description:"当前激活 tab 面板的 index，默认为0",name:"defaultIndex",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"可以扩展的 className",name:"className",required:!1,type:{name:"string"}},onSelect:{defaultValue:null,description:"点击 Tab 触发的回调函数",name:"onSelect",required:!1,type:{name:"((selectedIndex: number) => void)"}},type:{defaultValue:{value:"line"},description:"Tabs的样式，两种可选，默认为 line",name:"type",required:!1,type:{name:"enum",value:[{value:'"line"'},{value:'"card"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/tabs.tsx#Tabs"]={docgenInfo:o.__docgenInfo,name:"Tabs",path:"src/components/Tabs/tabs.tsx#Tabs"})}catch{}try{tabs.displayName="tabs",tabs.__docgenInfo={description:`
> 选项卡切换组件
### 引用方法

\`\`\`js

import { Tabs } from 'val-design'

\`\`\``,displayName:"tabs",props:{defaultIndex:{defaultValue:{value:"0"},description:"当前激活 tab 面板的 index，默认为0",name:"defaultIndex",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"可以扩展的 className",name:"className",required:!1,type:{name:"string"}},onSelect:{defaultValue:null,description:"点击 Tab 触发的回调函数",name:"onSelect",required:!1,type:{name:"((selectedIndex: number) => void)"}},type:{defaultValue:{value:"line"},description:"Tabs的样式，两种可选，默认为 line",name:"type",required:!1,type:{name:"enum",value:[{value:'"line"'},{value:'"card"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/tabs.tsx#tabs"]={docgenInfo:tabs.__docgenInfo,name:"tabs",path:"src/components/Tabs/tabs.tsx#tabs"})}catch{}const s=n(({children:e})=>t("div",{className:"v-tab-panel",children:e}),"TabItem");try{s.displayName="TabItem",s.__docgenInfo={description:"",displayName:"TabItem",props:{label:{defaultValue:null,description:"Tab选项上面的文字",name:"label",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},disabled:{defaultValue:null,description:"Tab选项是否被禁用",name:"disabled",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/tabItem.tsx#TabItem"]={docgenInfo:s.__docgenInfo,name:"TabItem",path:"src/components/Tabs/tabItem.tsx#TabItem"})}catch{}try{tabItem.displayName="tabItem",tabItem.__docgenInfo={description:"",displayName:"tabItem",props:{label:{defaultValue:null,description:"Tab选项上面的文字",name:"label",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},disabled:{defaultValue:null,description:"Tab选项是否被禁用",name:"disabled",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/tabItem.tsx#tabItem"]={docgenInfo:tabItem.__docgenInfo,name:"tabItem",path:"src/components/Tabs/tabItem.tsx#tabItem"})}catch{}const G={parameters:{storySource:{source:`import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Tabs from './tabs'
import TabItem from './tabItem'
import Icon from '../Icon'

export default {
  title: 'Data Display/Tabs 标签页',
  component: Tabs
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = (props) => (
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
  type: 'card'
}
`,locationsMap:{"default-tab":{startLoc:{col:46,line:14},endLoc:{col:1,line:31},startBody:{col:46,line:14},endBody:{col:1,line:31}},"card-tab":{startLoc:{col:46,line:14},endLoc:{col:1,line:31},startBody:{col:46,line:14},endBody:{col:1,line:31}}}}},title:"Data Display/Tabs 标签页",component:_},y=n(e=>c(_,{...e,onSelect:x("selected"),children:[t(s,{label:"选项卡一",children:"this is content one"}),t(s,{label:"选项卡二",children:"this is content two"}),t(s,{label:c(O,{children:[t(N,{icon:"check-circle"})," 自定义图标"]}),children:"this is content two"}),t(s,{label:"用户管理",disabled:!0,children:"this is content three"})]}),"Template"),H=y.bind({}),R=y.bind({});R.args={type:"card"};const Q=["DefaultTab","CardTab"];export{R as CardTab,H as DefaultTab,Q as __namedExportsOrder,G as default};
//# sourceMappingURL=tabs.stories-39c1109b.js.map
