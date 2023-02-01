var g=Object.defineProperty;var l=(e,a)=>g(e,"name",{value:a,configurable:!0});import{a as D}from"./index-d4f1247d.js";import{r as F}from"./index-a38f3d31.js";import{c as i}from"./index-ed86a6de.js";import"./index-e03ad990.js";import"./index-59102ac8.js";import{j as t,a as C}from"./jsx-runtime-69008c6b.js";import{T as E}from"./transition-5d993c2f.js";import{I as B}from"./icon-938a876b.js";import"./es.object.get-own-property-descriptor-d261b708.js";import"./iframe-9b30a751.js";import"./web.url.constructor-fb8c8940.js";import"./es.number.is-integer-d7d899e3.js";import"./make-decorator-3cd8a5d0.js";import"./index-b042d21f.js";import"./index-eb6056e0.js";import"./index-50ee27ec.js";const r=l(e=>{const[a,d]=F.useState(!1),{title:p,description:o,type:u,onClose:s,closable:m}=e,f=i("v-alert",{[`v-alert-${u}`]:u}),A=i("v-alert-title",{"bold-title":o});return t(E,{in:!a,timeout:300,animation:"zoom-in-top",children:C("div",{className:f,children:[t("span",{className:A,children:p}),o&&t("p",{className:"v-alert-desc",children:o}),m&&t("div",{className:"v-alert-close",onClick:l(y=>{console.log(y),s&&s(),d(!0)},"handleClose"),children:t(B,{icon:"times"})})]})})},"Alert");r.defaultProps={type:"default",closable:!0};const c=r;try{r.displayName="Alert",r.__docgenInfo={description:`> 用于页面中展示重要的提示信息, 点击右侧的叉提示自动消失。

### 引用方法

\`\`\`js

import { Alert } from 'val-design'


\`\`\``,displayName:"Alert",props:{title:{defaultValue:null,description:"标题",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"描述",name:"description",required:!1,type:{name:"string"}},type:{defaultValue:{value:"default"},description:"类型 四种可选 针对四种不同的场景",name:"type",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"default"'},{value:'"danger"'},{value:'"warning"'}]}},onClose:{defaultValue:null,description:"关闭alert时触发的事件",name:"onClose",required:!1,type:{name:"(() => void)"}},closable:{defaultValue:{value:"true"},description:"是否显示关闭图标",name:"closable",required:!1,type:{name:"boolean"}}}}}catch{}try{alert.displayName="alert",alert.__docgenInfo={description:`> 用于页面中展示重要的提示信息, 点击右侧的叉提示自动消失。

### 引用方法

\`\`\`js

import { Alert } from 'val-design'


\`\`\``,displayName:"alert",props:{title:{defaultValue:null,description:"标题",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"描述",name:"description",required:!1,type:{name:"string"}},type:{defaultValue:{value:"default"},description:"类型 四种可选 针对四种不同的场景",name:"type",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"default"'},{value:'"danger"'},{value:'"warning"'}]}},onClose:{defaultValue:null,description:"关闭alert时触发的事件",name:"onClose",required:!1,type:{name:"(() => void)"}},closable:{defaultValue:{value:"true"},description:"是否显示关闭图标",name:"closable",required:!1,type:{name:"boolean"}}}}}catch{}const G={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"default-alert":{startLoc:{col:47,line:12},endLoc:{col:76,line:12},startBody:{col:47,line:12},endBody:{col:76,line:12}},"success-alert":{startLoc:{col:47,line:12},endLoc:{col:76,line:12},startBody:{col:47,line:12},endBody:{col:76,line:12}},"danger-alert":{startLoc:{col:47,line:12},endLoc:{col:76,line:12},startBody:{col:47,line:12},endBody:{col:76,line:12}},"warning-alert":{startLoc:{col:47,line:12},endLoc:{col:76,line:12},startBody:{col:47,line:12},endBody:{col:76,line:12}},"desc-alert":{startLoc:{col:47,line:12},endLoc:{col:76,line:12},startBody:{col:47,line:12},endBody:{col:76,line:12}}}}},title:"Feedback/Alert 警告提示",component:c},n=l(e=>t(c,{...e}),"Template"),v=n.bind({});v.args={title:"this is alert"};const b=n.bind({});b.args={title:"this is success alert",type:"success"};const h=n.bind({});h.args={title:"this is danger alert",type:"danger"};const _=n.bind({});_.args={title:"this is warning alert",type:"warning"};const x=n.bind({});x.args={title:"this is desc alert",description:"this is long description",onClose:D("closed")};const J=["DefaultAlert","SuccessAlert","DangerAlert","WarningAlert","DescAlert"];export{h as DangerAlert,v as DefaultAlert,x as DescAlert,b as SuccessAlert,_ as WarningAlert,J as __namedExportsOrder,G as default};
//# sourceMappingURL=alert.stories-5a76c65b.js.map
