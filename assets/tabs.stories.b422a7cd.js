var g=Object.defineProperty;var n=(e,l)=>g(e,"name",{value:l,configurable:!0});import{a as x}from"./index.df471a14.js";import{r as D,b as c,j as t,R as f,F as O}from"./jsx-runtime.5985f39e.js";import{c as T}from"./index.220dfe0f.js";import"./index.ceff1be8.js";import{I as N}from"./icon.9cdee415.js";import"./iframe.cf47db32.js";import"./make-decorator.e03e7ec1.js";import"./index.241e153c.js";import"./index.6f8f5b77.js";const u=n(e=>{const{defaultIndex:l,className:E,onSelect:i,children:d,type:m}=e,[p,I]=D.exports.useState(l),C=n((o,a,r)=>{r||(I(a),i&&i(a))},"handleClick"),S=T("v-tabs-nav",{"nav-line":m==="line","nav-card":m==="card"}),F=n(()=>f.Children.map(d,(o,a)=>{const r=o,{label:v,disabled:b}=r.props,A=T("v-tabs-nav-item",{"is-active":p===a,disabled:b});return t("li",{className:A,onClick:B=>{C(B,a,b)},children:v},`nav-item-${a}`)}),"renderNavLinks"),h=n(()=>f.Children.map(d,(o,a)=>{if(a===p)return o}),"renderContent");return c("div",{className:`v-tabs ${E||""}`,children:[t("ul",{className:S,children:F()}),t("div",{className:"v-tabs-content",children:h()})]})},"Tabs");u.defaultProps={defaultIndex:0,type:"line"};const _=u;try{u.displayName="Tabs",u.__docgenInfo={description:`
> \u9009\u9879\u5361\u5207\u6362\u7EC4\u4EF6
### \u5F15\u7528\u65B9\u6CD5

\`\`\`js

import { Tabs } from 'val-design'

\`\`\``,displayName:"Tabs",props:{defaultIndex:{defaultValue:{value:"0"},description:"\u5F53\u524D\u6FC0\u6D3B tab \u9762\u677F\u7684 index\uFF0C\u9ED8\u8BA4\u4E3A0",name:"defaultIndex",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"\u53EF\u4EE5\u6269\u5C55\u7684 className",name:"className",required:!1,type:{name:"string"}},onSelect:{defaultValue:null,description:"\u70B9\u51FB Tab \u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570",name:"onSelect",required:!1,type:{name:"((selectedIndex: number) => void)"}},type:{defaultValue:{value:"line"},description:"Tabs\u7684\u6837\u5F0F\uFF0C\u4E24\u79CD\u53EF\u9009\uFF0C\u9ED8\u8BA4\u4E3A line",name:"type",required:!1,type:{name:"enum",value:[{value:'"line"'},{value:'"card"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/tabs.tsx#Tabs"]={docgenInfo:u.__docgenInfo,name:"Tabs",path:"src/components/Tabs/tabs.tsx#Tabs"})}catch{}try{tabs.displayName="tabs",tabs.__docgenInfo={description:`
> \u9009\u9879\u5361\u5207\u6362\u7EC4\u4EF6
### \u5F15\u7528\u65B9\u6CD5

\`\`\`js

import { Tabs } from 'val-design'

\`\`\``,displayName:"tabs",props:{defaultIndex:{defaultValue:{value:"0"},description:"\u5F53\u524D\u6FC0\u6D3B tab \u9762\u677F\u7684 index\uFF0C\u9ED8\u8BA4\u4E3A0",name:"defaultIndex",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"\u53EF\u4EE5\u6269\u5C55\u7684 className",name:"className",required:!1,type:{name:"string"}},onSelect:{defaultValue:null,description:"\u70B9\u51FB Tab \u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570",name:"onSelect",required:!1,type:{name:"((selectedIndex: number) => void)"}},type:{defaultValue:{value:"line"},description:"Tabs\u7684\u6837\u5F0F\uFF0C\u4E24\u79CD\u53EF\u9009\uFF0C\u9ED8\u8BA4\u4E3A line",name:"type",required:!1,type:{name:"enum",value:[{value:'"line"'},{value:'"card"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/tabs.tsx#tabs"]={docgenInfo:tabs.__docgenInfo,name:"tabs",path:"src/components/Tabs/tabs.tsx#tabs"})}catch{}const s=n(({children:e})=>t("div",{className:"v-tab-panel",children:e}),"TabItem");try{s.displayName="TabItem",s.__docgenInfo={description:"",displayName:"TabItem",props:{label:{defaultValue:null,description:"Tab\u9009\u9879\u4E0A\u9762\u7684\u6587\u5B57",name:"label",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},disabled:{defaultValue:null,description:"Tab\u9009\u9879\u662F\u5426\u88AB\u7981\u7528",name:"disabled",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/tabItem.tsx#TabItem"]={docgenInfo:s.__docgenInfo,name:"TabItem",path:"src/components/Tabs/tabItem.tsx#TabItem"})}catch{}try{tabItem.displayName="tabItem",tabItem.__docgenInfo={description:"",displayName:"tabItem",props:{label:{defaultValue:null,description:"Tab\u9009\u9879\u4E0A\u9762\u7684\u6587\u5B57",name:"label",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},disabled:{defaultValue:null,description:"Tab\u9009\u9879\u662F\u5426\u88AB\u7981\u7528",name:"disabled",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/tabItem.tsx#tabItem"]={docgenInfo:tabItem.__docgenInfo,name:"tabItem",path:"src/components/Tabs/tabItem.tsx#tabItem"})}catch{}const J={parameters:{storySource:{source:`import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Tabs from './tabs'
import TabItem from './tabItem'
import Icon from '../Icon'

export default {
  title: 'Data Display/Tabs \u6807\u7B7E\u9875',
  component: Tabs
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = (props) => (
  <Tabs {...props} onSelect={action('selected')}>
    <TabItem label="\u9009\u9879\u5361\u4E00">this is content one</TabItem>
    <TabItem label="\u9009\u9879\u5361\u4E8C">this is content two</TabItem>
    <TabItem
      label={
        <>
          <Icon icon="check-circle" /> \u81EA\u5B9A\u4E49\u56FE\u6807
        </>
      }
    >
      this is content two
    </TabItem>
    <TabItem label="\u7528\u6237\u7BA1\u7406" disabled>
      this is content three
    </TabItem>
  </Tabs>
)

export const DefaultTab = Template.bind({})
export const CardTab = Template.bind({})
CardTab.args = {
  type: 'card'
}
`,locationsMap:{"default-tab":{startLoc:{col:46,line:14},endLoc:{col:1,line:31},startBody:{col:46,line:14},endBody:{col:1,line:31}},"card-tab":{startLoc:{col:46,line:14},endLoc:{col:1,line:31},startBody:{col:46,line:14},endBody:{col:1,line:31}}}}},title:"Data Display/Tabs \u6807\u7B7E\u9875",component:_},y=n(e=>c(_,{...e,onSelect:x("selected"),children:[t(s,{label:"\u9009\u9879\u5361\u4E00",children:"this is content one"}),t(s,{label:"\u9009\u9879\u5361\u4E8C",children:"this is content two"}),t(s,{label:c(O,{children:[t(N,{icon:"check-circle"})," \u81EA\u5B9A\u4E49\u56FE\u6807"]}),children:"this is content two"}),t(s,{label:"\u7528\u6237\u7BA1\u7406",disabled:!0,children:"this is content three"})]}),"Template"),X=y.bind({}),R=y.bind({});R.args={type:"card"};const P=["DefaultTab","CardTab"];export{R as CardTab,X as DefaultTab,P as __namedExportsOrder,J as default};
//# sourceMappingURL=tabs.stories.b422a7cd.js.map
