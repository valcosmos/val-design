var y=Object.defineProperty;var r=(e,a)=>y(e,"name",{value:a,configurable:!0});import{a as C}from"./index-4f5f4b98.js";import{r as D,j as t,b as E}from"./jsx-runtime-597274de.js";import{c as i}from"./index-9f7f24f4.js";import"./index-5b9c72b7.js";import"./index-548eb6eb.js";import{T as F}from"./transition-67cab8da.js";import{I as B}from"./icon-85347f99.js";import"./iframe-ffb46370.js";import"./make-decorator-f61b13ac.js";import"./index-1a0fb9f3.js";import"./index-55a28f55.js";import"./index-a2f37619.js";const n=r(e=>{const[a,d]=D.exports.useState(!1),{title:p,description:o,type:s,onClose:u,closable:m}=e,A=i("v-alert",{[`v-alert-${s}`]:s}),f=i("v-alert-title",{"bold-title":o});return t(F,{in:!a,timeout:300,animation:"zoom-in-top",children:E("div",{className:A,children:[t("span",{className:f,children:p}),o&&t("p",{className:"v-alert-desc",children:o}),m&&t("div",{className:"v-alert-close",onClick:r(g=>{console.log(g),u&&u(),d(!0)},"handleClose"),children:t(B,{icon:"times"})})]})})},"Alert");n.defaultProps={type:"default",closable:!0};const c=n;try{n.displayName="Alert",n.__docgenInfo={description:`> 用于页面中展示重要的提示信息, 点击右侧的叉提示自动消失。

### 引用方法

\`\`\`js

import { Alert } from 'val-design'


\`\`\``,displayName:"Alert",props:{title:{defaultValue:null,description:"标题",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"描述",name:"description",required:!1,type:{name:"string"}},type:{defaultValue:{value:"default"},description:"类型 四种可选 针对四种不同的场景",name:"type",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"default"'},{value:'"danger"'},{value:'"warning"'}]}},onClose:{defaultValue:null,description:"关闭alert时触发的事件",name:"onClose",required:!1,type:{name:"(() => void)"}},closable:{defaultValue:{value:"true"},description:"是否显示关闭图标",name:"closable",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Alert/alert.tsx#Alert"]={docgenInfo:n.__docgenInfo,name:"Alert",path:"src/components/Alert/alert.tsx#Alert"})}catch{}try{alert.displayName="alert",alert.__docgenInfo={description:`> 用于页面中展示重要的提示信息, 点击右侧的叉提示自动消失。

### 引用方法

\`\`\`js

import { Alert } from 'val-design'


\`\`\``,displayName:"alert",props:{title:{defaultValue:null,description:"标题",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"描述",name:"description",required:!1,type:{name:"string"}},type:{defaultValue:{value:"default"},description:"类型 四种可选 针对四种不同的场景",name:"type",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"default"'},{value:'"danger"'},{value:'"warning"'}]}},onClose:{defaultValue:null,description:"关闭alert时触发的事件",name:"onClose",required:!1,type:{name:"(() => void)"}},closable:{defaultValue:{value:"true"},description:"是否显示关闭图标",name:"closable",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Alert/alert.tsx#alert"]={docgenInfo:alert.__docgenInfo,name:"alert",path:"src/components/Alert/alert.tsx#alert"})}catch{}const Y={parameters:{storySource:{source:`import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Alert from './alert'

export default {
  title: 'Feedback/Alert 警告提示',
  component: Alert
} as ComponentMeta<typeof Alert>

const Template: ComponentStory<typeof Alert> = (props) => <Alert {...props} />

export const DefaultAlert = Template.bind({})
DefaultAlert.args = {
  title: 'this is alert'
}

export const SuccessAlert = Template.bind({})
SuccessAlert.args = {
  title: 'this is success alert',
  type: 'success'
}
export const DangerAlert = Template.bind({})
DangerAlert.args = {
  title: 'this is danger alert',
  type: 'danger'
}

export const WarningAlert = Template.bind({})
WarningAlert.args = {
  title: 'this is warning alert',
  type: 'warning'
}

export const DescAlert = Template.bind({})
DescAlert.args = {
  title: 'this is desc alert',
  description: 'this is long description',
  onClose: action('closed')
}
`,locationsMap:{"default-alert":{startLoc:{col:47,line:12},endLoc:{col:78,line:12},startBody:{col:47,line:12},endBody:{col:78,line:12}},"success-alert":{startLoc:{col:47,line:12},endLoc:{col:78,line:12},startBody:{col:47,line:12},endBody:{col:78,line:12}},"danger-alert":{startLoc:{col:47,line:12},endLoc:{col:78,line:12},startBody:{col:47,line:12},endBody:{col:78,line:12}},"warning-alert":{startLoc:{col:47,line:12},endLoc:{col:78,line:12},startBody:{col:47,line:12},endBody:{col:78,line:12}},"desc-alert":{startLoc:{col:47,line:12},endLoc:{col:78,line:12},startBody:{col:47,line:12},endBody:{col:78,line:12}}}}},title:"Feedback/Alert 警告提示",component:c},l=r(e=>t(c,{...e}),"Template"),_=l.bind({});_.args={title:"this is alert"};const v=l.bind({});v.args={title:"this is success alert",type:"success"};const b=l.bind({});b.args={title:"this is danger alert",type:"danger"};const h=l.bind({});h.args={title:"this is warning alert",type:"warning"};const S=l.bind({});S.args={title:"this is desc alert",description:"this is long description",onClose:C("closed")};const M=["DefaultAlert","SuccessAlert","DangerAlert","WarningAlert","DescAlert"];export{b as DangerAlert,_ as DefaultAlert,S as DescAlert,v as SuccessAlert,h as WarningAlert,M as __namedExportsOrder,Y as default};
//# sourceMappingURL=alert.stories-d60d8956.js.map
