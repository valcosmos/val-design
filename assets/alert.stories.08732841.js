import{a as f}from"./index.07d00392.js";import{r as g,j as e,a as y}from"./jsx-runtime.f3150366.js";import{c as s}from"./index.b3d31cad.js";import"./index.d96f61bf.js";import"./index.7927ca20.js";import{T as C}from"./transition.9b0b7e30.js";import{I as D}from"./icon.34088235.js";import"./iframe.cc34769a.js";import"./make-decorator.0eef16ed.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.f4b47b74.js";import"./index.es.231671ec.js";import"./index.0e0ded8f.js";const n=t=>{const[i,c]=g.exports.useState(!1),{title:d,description:r,type:a,onClose:o,closable:p}=t,m=s("v-alert",{[`v-alert-${a}`]:a}),A=s("v-alert-title",{"bold-title":r});return e(C,{in:!i,timeout:300,animation:"zoom-in-top",children:y("div",{className:m,children:[e("span",{className:A,children:d}),r&&e("p",{className:"v-alert-desc",children:r}),p&&e("div",{className:"v-alert-close",onClick:S=>{o&&o(),c(!0)},children:e(D,{icon:"times"})})]})})};n.defaultProps={type:"default",closable:!0};const u=n;try{n.displayName="Alert",n.__docgenInfo={description:`> \u7528\u4E8E\u9875\u9762\u4E2D\u5C55\u793A\u91CD\u8981\u7684\u63D0\u793A\u4FE1\u606F, \u70B9\u51FB\u53F3\u4FA7\u7684\u53C9\u63D0\u793A\u81EA\u52A8\u6D88\u5931\u3002

### \u5F15\u7528\u65B9\u6CD5

\`\`\`js

import { Alert } from 'val-design'


\`\`\``,displayName:"Alert",props:{title:{defaultValue:null,description:"\u6807\u9898",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"\u63CF\u8FF0",name:"description",required:!1,type:{name:"string"}},type:{defaultValue:{value:"default"},description:"\u7C7B\u578B \u56DB\u79CD\u53EF\u9009 \u9488\u5BF9\u56DB\u79CD\u4E0D\u540C\u7684\u573A\u666F",name:"type",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"default"'},{value:'"danger"'},{value:'"warning"'}]}},onClose:{defaultValue:null,description:"\u5173\u95EDalert\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6",name:"onClose",required:!1,type:{name:"(() => void)"}},closable:{defaultValue:{value:"true"},description:"\u662F\u5426\u663E\u793A\u5173\u95ED\u56FE\u6807",name:"closable",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Alert/alert.tsx#Alert"]={docgenInfo:n.__docgenInfo,name:"Alert",path:"src/components/Alert/alert.tsx#Alert"})}catch{}try{alert.displayName="alert",alert.__docgenInfo={description:`> \u7528\u4E8E\u9875\u9762\u4E2D\u5C55\u793A\u91CD\u8981\u7684\u63D0\u793A\u4FE1\u606F, \u70B9\u51FB\u53F3\u4FA7\u7684\u53C9\u63D0\u793A\u81EA\u52A8\u6D88\u5931\u3002

### \u5F15\u7528\u65B9\u6CD5

\`\`\`js

import { Alert } from 'val-design'


\`\`\``,displayName:"alert",props:{title:{defaultValue:null,description:"\u6807\u9898",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"\u63CF\u8FF0",name:"description",required:!1,type:{name:"string"}},type:{defaultValue:{value:"default"},description:"\u7C7B\u578B \u56DB\u79CD\u53EF\u9009 \u9488\u5BF9\u56DB\u79CD\u4E0D\u540C\u7684\u573A\u666F",name:"type",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"default"'},{value:'"danger"'},{value:'"warning"'}]}},onClose:{defaultValue:null,description:"\u5173\u95EDalert\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6",name:"onClose",required:!1,type:{name:"(() => void)"}},closable:{defaultValue:{value:"true"},description:"\u662F\u5426\u663E\u793A\u5173\u95ED\u56FE\u6807",name:"closable",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Alert/alert.tsx#alert"]={docgenInfo:alert.__docgenInfo,name:"alert",path:"src/components/Alert/alert.tsx#alert"})}catch{}const W={parameters:{storySource:{source:`import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Alert from './alert'

export default {
  title: 'val-design/Alert \u8B66\u544A\u63D0\u793A',
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
`,locationsMap:{"default-alert":{startLoc:{col:47,line:12},endLoc:{col:78,line:12},startBody:{col:47,line:12},endBody:{col:78,line:12}},"success-alert":{startLoc:{col:47,line:12},endLoc:{col:78,line:12},startBody:{col:47,line:12},endBody:{col:78,line:12}},"danger-alert":{startLoc:{col:47,line:12},endLoc:{col:78,line:12},startBody:{col:47,line:12},endBody:{col:78,line:12}},"warning-alert":{startLoc:{col:47,line:12},endLoc:{col:78,line:12},startBody:{col:47,line:12},endBody:{col:78,line:12}},"desc-alert":{startLoc:{col:47,line:12},endLoc:{col:78,line:12},startBody:{col:47,line:12},endBody:{col:78,line:12}}}}},title:"val-design/Alert \u8B66\u544A\u63D0\u793A",component:u},l=t=>e(u,{...t}),E=l.bind({});E.args={title:"this is alert"};const B=l.bind({});B.args={title:"this is success alert",type:"success"};const F=l.bind({});F.args={title:"this is danger alert",type:"danger"};const _=l.bind({});_.args={title:"this is warning alert",type:"warning"};const v=l.bind({});v.args={title:"this is desc alert",description:"this is long description",onClose:f("closed")};const Y=["DefaultAlert","SuccessAlert","DangerAlert","WarningAlert","DescAlert"];export{F as DangerAlert,E as DefaultAlert,v as DescAlert,B as SuccessAlert,_ as WarningAlert,Y as __namedExportsOrder,W as default};
//# sourceMappingURL=alert.stories.08732841.js.map
