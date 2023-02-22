var g=Object.defineProperty;var l=(e,a)=>g(e,"name",{value:a,configurable:!0});import{j as t,a as D}from"./jsx-runtime-9cc10fbd.js";import{a as F}from"./index-99fa693b.js";import{r as C}from"./index-7bbeae94.js";import{c as i}from"./index-ed86a6de.js";import"./index-af326246.js";import"./index-ca08dfba.js";import{T as E}from"./transition-5fc0e1c2.js";import{I as B}from"./icon-e1720997.js";import"./iframe-4de237c0.js";import"./make-decorator-f72f34f6.js";import"./index-4787bdf6.js";import"./index-c49ee5c5.js";import"./index-50ee27ec.js";const r=l(e=>{const[a,d]=C.useState(!1),{title:p,description:u,type:o,onClose:s,closable:m}=e,f=i("v-alert",{[`v-alert-${o}`]:o}),A=i("v-alert-title",{"bold-title":u});return t(E,{in:!a,timeout:300,animation:"zoom-in-top",children:D("div",{className:f,children:[t("span",{className:A,children:p}),u&&t("p",{className:"v-alert-desc",children:u}),m&&t("div",{className:"v-alert-close",onClick:l(y=>{console.log(y),s&&s(),d(!0)},"handleClose"),children:t(B,{icon:"times"})})]})})},"Alert");r.defaultProps={type:"default",closable:!0};const c=r;try{r.displayName="Alert",r.__docgenInfo={description:`> 用于页面中展示重要的提示信息, 点击右侧的叉提示自动消失。

### 引用方法

\`\`\`js

import { Alert } from 'val-design'


\`\`\``,displayName:"Alert",props:{title:{defaultValue:null,description:"标题",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"描述",name:"description",required:!1,type:{name:"string"}},type:{defaultValue:{value:"default"},description:"类型 四种可选 针对四种不同的场景",name:"type",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"default"'},{value:'"danger"'},{value:'"warning"'}]}},onClose:{defaultValue:null,description:"关闭alert时触发的事件",name:"onClose",required:!1,type:{name:"(() => void)"}},closable:{defaultValue:{value:"true"},description:"是否显示关闭图标",name:"closable",required:!1,type:{name:"boolean"}}}}}catch{}try{alert.displayName="alert",alert.__docgenInfo={description:`> 用于页面中展示重要的提示信息, 点击右侧的叉提示自动消失。

### 引用方法

\`\`\`js

import { Alert } from 'val-design'


\`\`\``,displayName:"alert",props:{title:{defaultValue:null,description:"标题",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"描述",name:"description",required:!1,type:{name:"string"}},type:{defaultValue:{value:"default"},description:"类型 四种可选 针对四种不同的场景",name:"type",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"default"'},{value:'"danger"'},{value:'"warning"'}]}},onClose:{defaultValue:null,description:"关闭alert时触发的事件",name:"onClose",required:!1,type:{name:"(() => void)"}},closable:{defaultValue:{value:"true"},description:"是否显示关闭图标",name:"closable",required:!1,type:{name:"boolean"}}}}}catch{}const O={parameters:{storySource:{source:`import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Alert from './alert'

export default {
  title: 'Feedback/Alert 警告提示',
  component: Alert,
} as ComponentMeta<typeof Alert>

const Template: ComponentStory<typeof Alert> = props => <Alert {...props} />

export const DefaultAlert = Template.bind({})
DefaultAlert.args = {
  title: 'this is alert',
}

export const SuccessAlert = Template.bind({})
SuccessAlert.args = {
  title: 'this is success alert',
  type: 'success',
}
export const DangerAlert = Template.bind({})
DangerAlert.args = {
  title: 'this is danger alert',
  type: 'danger',
}

export const WarningAlert = Template.bind({})
WarningAlert.args = {
  title: 'this is warning alert',
  type: 'warning',
}

export const DescAlert = Template.bind({})
DescAlert.args = {
  title: 'this is desc alert',
  description: 'this is long description',
  onClose: action('closed'),
}
`,locationsMap:{"default-alert":{startLoc:{col:47,line:12},endLoc:{col:76,line:12},startBody:{col:47,line:12},endBody:{col:76,line:12}},"success-alert":{startLoc:{col:47,line:12},endLoc:{col:76,line:12},startBody:{col:47,line:12},endBody:{col:76,line:12}},"danger-alert":{startLoc:{col:47,line:12},endLoc:{col:76,line:12},startBody:{col:47,line:12},endBody:{col:76,line:12}},"warning-alert":{startLoc:{col:47,line:12},endLoc:{col:76,line:12},startBody:{col:47,line:12},endBody:{col:76,line:12}},"desc-alert":{startLoc:{col:47,line:12},endLoc:{col:76,line:12},startBody:{col:47,line:12},endBody:{col:76,line:12}}}}},title:"Feedback/Alert 警告提示",component:c},n=l(e=>t(c,{...e}),"Template"),v=n.bind({});v.args={title:"this is alert"};const b=n.bind({});b.args={title:"this is success alert",type:"success"};const h=n.bind({});h.args={title:"this is danger alert",type:"danger"};const _=n.bind({});_.args={title:"this is warning alert",type:"warning"};const x=n.bind({});x.args={title:"this is desc alert",description:"this is long description",onClose:F("closed")};const P=["DefaultAlert","SuccessAlert","DangerAlert","WarningAlert","DescAlert"];export{h as DangerAlert,v as DefaultAlert,x as DescAlert,b as SuccessAlert,_ as WarningAlert,P as __namedExportsOrder,O as default};
//# sourceMappingURL=alert.stories-56cb8ec9.js.map
