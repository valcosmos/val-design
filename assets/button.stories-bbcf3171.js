var m=Object.defineProperty;var r=(n,o)=>m(n,"name",{value:o,configurable:!0});import{j as u}from"./jsx-runtime-69008c6b.js";import{a as p}from"./index-19b1de6e.js";import{B as y,a as c}from"./button-e140bd2d.js";import"./index-a38f3d31.js";import{C as s,S as t,a as g}from"./Props-39dc4599.js";import"./es.object.get-own-property-descriptor-d261b708.js";import"./web.url.constructor-fb8c8940.js";import"./iframe-02da6ae1.js";import"./es.number.is-integer-d7d899e3.js";import"./make-decorator-3cd8a5d0.js";import"./index-ed86a6de.js";import"./index-681e4b07-b47e24d1.js";import"./es.map.constructor-088687ee.js";import"./es.number.to-fixed-4714c3f9.js";import"./index-6c397bfc.js";import"./es.number.is-nan-184f406b.js";import"./string-d2fe5096.js";function i(){return i=Object.assign?Object.assign.bind():function(n){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(n[l]=a[l])}return n},i.apply(this,arguments)}r(i,"_extends");const B={},x="wrapper";function d({components:n,...o}){return mdx(x,i({},B,o,{components:n,mdxType:"MDXLayout"}),mdx("style",null,`
.title{
  margin-bottom: 40px;
}

`),mdx("h1",{className:"title"},"Button 按钮"),mdx("h3",null,"不同 Type 的按钮"),mdx(s,{mdxType:"Canvas"},mdx(t,{id:"general-button-按钮--default",mdxType:"Story"}),mdx(t,{id:"general-button-按钮--primary",mdxType:"Story"}),mdx(t,{id:"general-button-按钮--success",mdxType:"Story"}),mdx(t,{id:"general-button-按钮--warning",mdxType:"Story"}),mdx(t,{id:"general-button-按钮--danger",mdxType:"Story"}),mdx(t,{id:"general-button-按钮--link",mdxType:"Story"})),mdx("h3",null,"不同 Size 的按钮"),mdx(s,{mdxType:"Canvas"},mdx(t,{id:"general-button-按钮--large-button",mdxType:"Story"}),mdx(t,{id:"general-button-按钮--small-button",mdxType:"Story"})),mdx("h3",null,"文档"),mdx(g,{of:y,mdxType:"ArgsTable"}))}r(d,"MDXContent");d.isMDXComponent=!0;const F={title:"General/Button 按钮",component:c,parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{default:{startLoc:{col:48,line:24},endLoc:{col:1,line:26},startBody:{col:48,line:24},endBody:{col:1,line:26}},primary:{startLoc:{col:48,line:24},endLoc:{col:1,line:26},startBody:{col:48,line:24},endBody:{col:1,line:26}},success:{startLoc:{col:48,line:24},endLoc:{col:1,line:26},startBody:{col:48,line:24},endBody:{col:1,line:26}},warning:{startLoc:{col:48,line:24},endLoc:{col:1,line:26},startBody:{col:48,line:24},endBody:{col:1,line:26}},danger:{startLoc:{col:48,line:24},endLoc:{col:1,line:26},startBody:{col:48,line:24},endBody:{col:1,line:26}},link:{startLoc:{col:48,line:24},endLoc:{col:1,line:26},startBody:{col:48,line:24},endBody:{col:1,line:26}},"large-button":{startLoc:{col:48,line:24},endLoc:{col:1,line:26},startBody:{col:48,line:24},endBody:{col:1,line:26}},"small-button":{startLoc:{col:48,line:24},endLoc:{col:1,line:26},startBody:{col:48,line:24},endBody:{col:1,line:26}}}},docs:{page:d}}},e=r(n=>u(c,{type:"primary",onClick:p("clicked"),...n}),"Template"),b=e.bind({});b.args={type:"default",children:"Default Button"};const f=e.bind({});f.args={type:"primary",children:"Primary Button"};const h=e.bind({});h.args={type:"success",children:"Success Button"};const L=e.bind({});L.args={type:"warning",children:"Success Button"};const S=e.bind({});S.args={type:"danger",children:"Danger Button"};const T=e.bind({});T.args={type:"link",href:"https://valzt.cn",target:"_blank",children:"Link Button"};const k=e.bind({});k.args={size:"lg",children:"Large Button"};const D=e.bind({});D.args={size:"sm",children:"Small Button"};const H=["Default","Primary","Success","Warning","Danger","Link","LargeButton","SmallButton"];export{S as Danger,b as Default,k as LargeButton,T as Link,f as Primary,D as SmallButton,h as Success,L as Warning,H as __namedExportsOrder,F as default};
//# sourceMappingURL=button.stories-bbcf3171.js.map
