var p=Object.defineProperty;var a=(t,r)=>p(t,"name",{value:r,configurable:!0});import{a as m}from"./index-d4f1247d.js";import{B as c}from"./button-25b03b88.js";import"./index-a38f3d31.js";import{c as n,C as u,S as e,a as y}from"./Props-d9c0a040.js";import{j as g}from"./jsx-runtime-69008c6b.js";import"./es.object.get-own-property-descriptor-d261b708.js";import"./web.url.constructor-fb8c8940.js";import"./iframe-9b30a751.js";import"./es.number.is-integer-d7d899e3.js";import"./make-decorator-3cd8a5d0.js";import"./index-ed86a6de.js";import"./index-681e4b07-be283433.js";import"./es.map.constructor-088687ee.js";import"./es.number.to-fixed-4714c3f9.js";import"./index-6c397bfc.js";import"./es.number.is-nan-184f406b.js";import"./string-d2fe5096.js";function s(){return s=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i])}return t},s.apply(this,arguments)}a(s,"_extends");const B={},b="wrapper";function d({components:t,...r}){return n(b,s({},B,r,{components:t,mdxType:"MDXLayout"}),n("style",null,`
.title{
  margin-bottom: 40px;
}

`),n("h1",{className:"title"},"Button 按钮"),n("h3",null,"不同 Type 的按钮"),n(u,{mdxType:"Canvas"},n(e,{id:"general-button-按钮--default",mdxType:"Story"}),n(e,{id:"general-button-按钮--primary",mdxType:"Story"}),n(e,{id:"general-button-按钮--success",mdxType:"Story"}),n(e,{id:"general-button-按钮--warning",mdxType:"Story"}),n(e,{id:"general-button-按钮--danger",mdxType:"Story"}),n(e,{id:"general-button-按钮--link",mdxType:"Story"})),n("h3",null,"不同 Size 的按钮"),n(u,{mdxType:"Canvas"},n(e,{id:"general-button-按钮--large-button",mdxType:"Story"}),n(e,{id:"general-button-按钮--small-button",mdxType:"Story"})),n("h3",null,"文档"),n(y,{of:c,mdxType:"ArgsTable"}))}a(d,"MDXContent");d.isMDXComponent=!0;const H={title:"General/Button 按钮",component:c,parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from './button'

import mdx from './button.mdx'

// 👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'General/Button 按钮',
  component: Button,
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as ComponentMeta<typeof Button>

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = args => (
  <Button type="primary" onClick={action('clicked')} {...args}></Button>
)

export const Default = Template.bind({})
Default.args = {
  type: 'default',
  children: 'Default Button',
}

export const Primary = Template.bind({})
Primary.args = {
  type: 'primary',
  children: 'Primary Button',
}

export const Success = Template.bind({})
Success.args = {
  type: 'success',
  children: 'Success Button',
}

export const Warning = Template.bind({})
Warning.args = {
  type: 'warning',
  children: 'Success Button',
}

export const Danger = Template.bind({})
Danger.args = {
  type: 'danger',
  children: 'Danger Button',
}

export const Link = Template.bind({})
Link.args = {
  type: 'link',
  href: 'https://valzt.cn',
  target: '_blank',
  children: 'Link Button',
}

export const LargeButton = Template.bind({})
LargeButton.args = {
  size: 'lg',
  children: 'Large Button',
}

export const SmallButton = Template.bind({})
SmallButton.args = {
  size: 'sm',
  children: 'Small Button',
}
`,locationsMap:{default:{startLoc:{col:48,line:24},endLoc:{col:1,line:26},startBody:{col:48,line:24},endBody:{col:1,line:26}},primary:{startLoc:{col:48,line:24},endLoc:{col:1,line:26},startBody:{col:48,line:24},endBody:{col:1,line:26}},success:{startLoc:{col:48,line:24},endLoc:{col:1,line:26},startBody:{col:48,line:24},endBody:{col:1,line:26}},warning:{startLoc:{col:48,line:24},endLoc:{col:1,line:26},startBody:{col:48,line:24},endBody:{col:1,line:26}},danger:{startLoc:{col:48,line:24},endLoc:{col:1,line:26},startBody:{col:48,line:24},endBody:{col:1,line:26}},link:{startLoc:{col:48,line:24},endLoc:{col:1,line:26},startBody:{col:48,line:24},endBody:{col:1,line:26}},"large-button":{startLoc:{col:48,line:24},endLoc:{col:1,line:26},startBody:{col:48,line:24},endBody:{col:1,line:26}},"small-button":{startLoc:{col:48,line:24},endLoc:{col:1,line:26},startBody:{col:48,line:24},endBody:{col:1,line:26}}}},docs:{page:d}}},o=a(t=>g(c,{type:"primary",onClick:m("clicked"),...t}),"Template"),f=o.bind({});f.args={type:"default",children:"Default Button"};const h=o.bind({});h.args={type:"primary",children:"Primary Button"};const x=o.bind({});x.args={type:"success",children:"Success Button"};const L=o.bind({});L.args={type:"warning",children:"Success Button"};const S=o.bind({});S.args={type:"danger",children:"Danger Button"};const T=o.bind({});T.args={type:"link",href:"https://valzt.cn",target:"_blank",children:"Link Button"};const k=o.bind({});k.args={size:"lg",children:"Large Button"};const D=o.bind({});D.args={size:"sm",children:"Small Button"};const I=["Default","Primary","Success","Warning","Danger","Link","LargeButton","SmallButton"];export{S as Danger,f as Default,k as LargeButton,T as Link,h as Primary,D as SmallButton,x as Success,L as Warning,I as __namedExportsOrder,H as default};
//# sourceMappingURL=button.stories-ce929b0d.js.map
