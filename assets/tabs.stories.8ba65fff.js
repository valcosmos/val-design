import{a as B}from"./index.07d00392.js";import{r as g,a as l,j as t,R as b,F as x}from"./jsx-runtime.f3150366.js";import{c as p}from"./index.b3d31cad.js";import"./index.d96f61bf.js";import{I as O}from"./icon.34088235.js";import"./iframe.cc34769a.js";import"./make-decorator.0eef16ed.js";import"./index.es.231671ec.js";import"./index.0e0ded8f.js";const s=e=>{const{defaultIndex:_,className:E,onSelect:r,children:c,type:i}=e,[d,y]=g.exports.useState(_),I=(u,a,o)=>{o||(y(a),r&&r(a))},C=p("v-tabs-nav",{"nav-line":i==="line","nav-card":i==="card"}),S=()=>b.Children.map(c,(u,a)=>{const o=u,{label:h,disabled:m}=o.props,v=p("v-tabs-nav-item",{"is-active":d===a,disabled:m});return t("li",{className:v,onClick:A=>{I(A,a,m)},children:h},`nav-item-${a}`)}),F=()=>b.Children.map(c,(u,a)=>{if(a===d)return u});return l("div",{className:`v-tabs ${E||""}`,children:[t("ul",{className:C,children:S()}),t("div",{className:"v-tabs-content",children:F()})]})};s.defaultProps={defaultIndex:0,type:"line"};const f=s;try{s.displayName="Tabs",s.__docgenInfo={description:`
> \u9009\u9879\u5361\u5207\u6362\u7EC4\u4EF6
### \u5F15\u7528\u65B9\u6CD5

\`\`\`js

import { Tabs } from 'val-design'

\`\`\``,displayName:"Tabs",props:{defaultIndex:{defaultValue:{value:"0"},description:"\u5F53\u524D\u6FC0\u6D3B tab \u9762\u677F\u7684 index\uFF0C\u9ED8\u8BA4\u4E3A0",name:"defaultIndex",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"\u53EF\u4EE5\u6269\u5C55\u7684 className",name:"className",required:!1,type:{name:"string"}},onSelect:{defaultValue:null,description:"\u70B9\u51FB Tab \u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570",name:"onSelect",required:!1,type:{name:"((selectedIndex: number) => void)"}},type:{defaultValue:{value:"line"},description:"Tabs\u7684\u6837\u5F0F\uFF0C\u4E24\u79CD\u53EF\u9009\uFF0C\u9ED8\u8BA4\u4E3A line",name:"type",required:!1,type:{name:"enum",value:[{value:'"line"'},{value:'"card"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/tabs.tsx#Tabs"]={docgenInfo:s.__docgenInfo,name:"Tabs",path:"src/components/Tabs/tabs.tsx#Tabs"})}catch{}try{tabs.displayName="tabs",tabs.__docgenInfo={description:`
> \u9009\u9879\u5361\u5207\u6362\u7EC4\u4EF6
### \u5F15\u7528\u65B9\u6CD5

\`\`\`js

import { Tabs } from 'val-design'

\`\`\``,displayName:"tabs",props:{defaultIndex:{defaultValue:{value:"0"},description:"\u5F53\u524D\u6FC0\u6D3B tab \u9762\u677F\u7684 index\uFF0C\u9ED8\u8BA4\u4E3A0",name:"defaultIndex",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"\u53EF\u4EE5\u6269\u5C55\u7684 className",name:"className",required:!1,type:{name:"string"}},onSelect:{defaultValue:null,description:"\u70B9\u51FB Tab \u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570",name:"onSelect",required:!1,type:{name:"((selectedIndex: number) => void)"}},type:{defaultValue:{value:"line"},description:"Tabs\u7684\u6837\u5F0F\uFF0C\u4E24\u79CD\u53EF\u9009\uFF0C\u9ED8\u8BA4\u4E3A line",name:"type",required:!1,type:{name:"enum",value:[{value:'"line"'},{value:'"card"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/tabs.tsx#tabs"]={docgenInfo:tabs.__docgenInfo,name:"tabs",path:"src/components/Tabs/tabs.tsx#tabs"})}catch{}const n=({children:e})=>t("div",{className:"v-tab-panel",children:e});try{n.displayName="TabItem",n.__docgenInfo={description:"",displayName:"TabItem",props:{label:{defaultValue:null,description:"Tab\u9009\u9879\u4E0A\u9762\u7684\u6587\u5B57",name:"label",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},disabled:{defaultValue:null,description:"Tab\u9009\u9879\u662F\u5426\u88AB\u7981\u7528",name:"disabled",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/tabItem.tsx#TabItem"]={docgenInfo:n.__docgenInfo,name:"TabItem",path:"src/components/Tabs/tabItem.tsx#TabItem"})}catch{}try{tabItem.displayName="tabItem",tabItem.__docgenInfo={description:"",displayName:"tabItem",props:{label:{defaultValue:null,description:"Tab\u9009\u9879\u4E0A\u9762\u7684\u6587\u5B57",name:"label",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},disabled:{defaultValue:null,description:"Tab\u9009\u9879\u662F\u5426\u88AB\u7981\u7528",name:"disabled",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/tabItem.tsx#tabItem"]={docgenInfo:tabItem.__docgenInfo,name:"tabItem",path:"src/components/Tabs/tabItem.tsx#tabItem"})}catch{}const w={parameters:{storySource:{source:`import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Tabs from './tabs'
import TabItem from './tabItem'
import Icon from '../Icon'

export default {
  title: 'val-design/Tabs \u6807\u7B7E\u9875',
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
`,locationsMap:{"default-tab":{startLoc:{col:46,line:14},endLoc:{col:1,line:31},startBody:{col:46,line:14},endBody:{col:1,line:31}},"card-tab":{startLoc:{col:46,line:14},endLoc:{col:1,line:31},startBody:{col:46,line:14},endBody:{col:1,line:31}}}}},title:"val-design/Tabs \u6807\u7B7E\u9875",component:f},T=e=>l(f,{...e,onSelect:B("selected"),children:[t(n,{label:"\u9009\u9879\u5361\u4E00",children:"this is content one"}),t(n,{label:"\u9009\u9879\u5361\u4E8C",children:"this is content two"}),t(n,{label:l(x,{children:[t(O,{icon:"check-circle"})," \u81EA\u5B9A\u4E49\u56FE\u6807"]}),children:"this is content two"}),t(n,{label:"\u7528\u6237\u7BA1\u7406",disabled:!0,children:"this is content three"})]}),M=T.bind({}),N=T.bind({});N.args={type:"card"};const $=["DefaultTab","CardTab"];export{N as CardTab,M as DefaultTab,$ as __namedExportsOrder,w as default};
//# sourceMappingURL=tabs.stories.8ba65fff.js.map
