var y=Object.defineProperty;var r=(e,a)=>y(e,"name",{value:a,configurable:!0});import{a as C}from"./index.16019afc.js";import{r as D,j as t,b as E}from"./jsx-runtime.0c912d92.js";import{c as i}from"./index.220dfe0f.js";import"./index.159d52bd.js";import"./index.c681537c.js";import{T as F}from"./transition.a9020318.js";import{I as B}from"./icon.f2f0b9da.js";import"./iframe.173eb00b.js";import"./make-decorator.c712280e.js";import"./index.555e5aae.js";import"./index.241e153c.js";import"./index.6f8f5b77.js";const n=r(e=>{const[a,d]=D.exports.useState(!1),{title:p,description:o,type:s,onClose:u,closable:m}=e,A=i("v-alert",{[`v-alert-${s}`]:s}),f=i("v-alert-title",{"bold-title":o});return t(F,{in:!a,timeout:300,animation:"zoom-in-top",children:E("div",{className:A,children:[t("span",{className:f,children:p}),o&&t("p",{className:"v-alert-desc",children:o}),m&&t("div",{className:"v-alert-close",onClick:r(g=>{console.log(g),u&&u(),d(!0)},"handleClose"),children:t(B,{icon:"times"})})]})})},"Alert");n.defaultProps={type:"default",closable:!0};const c=n;try{n.displayName="Alert",n.__docgenInfo={description:`> \u7528\u4E8E\u9875\u9762\u4E2D\u5C55\u793A\u91CD\u8981\u7684\u63D0\u793A\u4FE1\u606F, \u70B9\u51FB\u53F3\u4FA7\u7684\u53C9\u63D0\u793A\u81EA\u52A8\u6D88\u5931\u3002

### \u5F15\u7528\u65B9\u6CD5

\`\`\`js

import { Alert } from 'val-design'


\`\`\``,displayName:"Alert",props:{title:{defaultValue:null,description:"\u6807\u9898",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"\u63CF\u8FF0",name:"description",required:!1,type:{name:"string"}},type:{defaultValue:{value:"default"},description:"\u7C7B\u578B \u56DB\u79CD\u53EF\u9009 \u9488\u5BF9\u56DB\u79CD\u4E0D\u540C\u7684\u573A\u666F",name:"type",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"default"'},{value:'"danger"'},{value:'"warning"'}]}},onClose:{defaultValue:null,description:"\u5173\u95EDalert\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6",name:"onClose",required:!1,type:{name:"(() => void)"}},closable:{defaultValue:{value:"true"},description:"\u662F\u5426\u663E\u793A\u5173\u95ED\u56FE\u6807",name:"closable",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Alert/alert.tsx#Alert"]={docgenInfo:n.__docgenInfo,name:"Alert",path:"src/components/Alert/alert.tsx#Alert"})}catch{}try{alert.displayName="alert",alert.__docgenInfo={description:`> \u7528\u4E8E\u9875\u9762\u4E2D\u5C55\u793A\u91CD\u8981\u7684\u63D0\u793A\u4FE1\u606F, \u70B9\u51FB\u53F3\u4FA7\u7684\u53C9\u63D0\u793A\u81EA\u52A8\u6D88\u5931\u3002

### \u5F15\u7528\u65B9\u6CD5

\`\`\`js

import { Alert } from 'val-design'


\`\`\``,displayName:"alert",props:{title:{defaultValue:null,description:"\u6807\u9898",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"\u63CF\u8FF0",name:"description",required:!1,type:{name:"string"}},type:{defaultValue:{value:"default"},description:"\u7C7B\u578B \u56DB\u79CD\u53EF\u9009 \u9488\u5BF9\u56DB\u79CD\u4E0D\u540C\u7684\u573A\u666F",name:"type",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"default"'},{value:'"danger"'},{value:'"warning"'}]}},onClose:{defaultValue:null,description:"\u5173\u95EDalert\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6",name:"onClose",required:!1,type:{name:"(() => void)"}},closable:{defaultValue:{value:"true"},description:"\u662F\u5426\u663E\u793A\u5173\u95ED\u56FE\u6807",name:"closable",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Alert/alert.tsx#alert"]={docgenInfo:alert.__docgenInfo,name:"alert",path:"src/components/Alert/alert.tsx#alert"})}catch{}const Y={parameters:{storySource:{source:`import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Alert from './alert'

export default {
  title: 'Feedback/Alert \u8B66\u544A\u63D0\u793A',
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
`,locationsMap:{"default-alert":{startLoc:{col:47,line:12},endLoc:{col:78,line:12},startBody:{col:47,line:12},endBody:{col:78,line:12}},"success-alert":{startLoc:{col:47,line:12},endLoc:{col:78,line:12},startBody:{col:47,line:12},endBody:{col:78,line:12}},"danger-alert":{startLoc:{col:47,line:12},endLoc:{col:78,line:12},startBody:{col:47,line:12},endBody:{col:78,line:12}},"warning-alert":{startLoc:{col:47,line:12},endLoc:{col:78,line:12},startBody:{col:47,line:12},endBody:{col:78,line:12}},"desc-alert":{startLoc:{col:47,line:12},endLoc:{col:78,line:12},startBody:{col:47,line:12},endBody:{col:78,line:12}}}}},title:"Feedback/Alert \u8B66\u544A\u63D0\u793A",component:c},l=r(e=>t(c,{...e}),"Template"),_=l.bind({});_.args={title:"this is alert"};const v=l.bind({});v.args={title:"this is success alert",type:"success"};const b=l.bind({});b.args={title:"this is danger alert",type:"danger"};const h=l.bind({});h.args={title:"this is warning alert",type:"warning"};const S=l.bind({});S.args={title:"this is desc alert",description:"this is long description",onClose:C("closed")};const M=["DefaultAlert","SuccessAlert","DangerAlert","WarningAlert","DescAlert"];export{b as DangerAlert,_ as DefaultAlert,S as DescAlert,v as SuccessAlert,h as WarningAlert,M as __namedExportsOrder,Y as default};
//# sourceMappingURL=alert.stories.87617aac.js.map
