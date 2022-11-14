var p=Object.defineProperty;var a=(t,r)=>p(t,"name",{value:r,configurable:!0});import{a as m}from"./index.7e51f925.js";import{B as c}from"./button.4f5f5283.js";import{j as y}from"./jsx-runtime.c0a0e632.js";import{c as n,C as u,S as e,a as g}from"./Props.708df938.js";import"./iframe.e7600c43.js";import"./make-decorator.0c1e709b.js";import"./index.220dfe0f.js";import"./string.b3c6b9d8.js";import"./es.map.constructor.e0d9979b.js";import"./es.number.to-fixed.ce007253.js";function s(){return s=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i])}return t},s.apply(this,arguments)}a(s,"_extends");const B={},b="wrapper";function d({components:t,...r}){return n(b,s({},B,r,{components:t,mdxType:"MDXLayout"}),n("style",null,`
.title{
  margin-bottom: 40px;
}

`),n("h1",{className:"title"},"Button \u6309\u94AE"),n("h3",null,"\u4E0D\u540C Type \u7684\u6309\u94AE"),n(u,{mdxType:"Canvas"},n(e,{id:"general-button-\u6309\u94AE--default",mdxType:"Story"}),n(e,{id:"general-button-\u6309\u94AE--primary",mdxType:"Story"}),n(e,{id:"general-button-\u6309\u94AE--success",mdxType:"Story"}),n(e,{id:"general-button-\u6309\u94AE--warning",mdxType:"Story"}),n(e,{id:"general-button-\u6309\u94AE--danger",mdxType:"Story"}),n(e,{id:"general-button-\u6309\u94AE--link",mdxType:"Story"})),n("h3",null,"\u4E0D\u540C Size \u7684\u6309\u94AE"),n(u,{mdxType:"Canvas"},n(e,{id:"general-button-\u6309\u94AE--large-button",mdxType:"Story"}),n(e,{id:"general-button-\u6309\u94AE--small-button",mdxType:"Story"})),n("h3",null,"\u6587\u6863"),n(g,{of:c,mdxType:"ArgsTable"}))}a(d,"MDXContent");d.isMDXComponent=!0;const W={title:"General/Button \u6309\u94AE",component:c,parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from './button'

import mdx from './button.mdx'

// \u{1F447} This default export determines where your story goes in the story list
export default {
  /* \u{1F447} The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'General/Button \u6309\u94AE',
  component: Button,
  parameters: {
    docs: {
      page: mdx
    }
  }
} as ComponentMeta<typeof Button>

// \u{1F447} We create a \u201Ctemplate\u201D of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => (
  <Button type="primary" onClick={action('clicked')} {...args}></Button>
)

export const Default = Template.bind({})
Default.args = {
  type: 'default',
  children: 'Default Button'
}

export const Primary = Template.bind({})
Primary.args = {
  type: 'primary',
  children: 'Primary Button'
}

export const Success = Template.bind({})
Success.args = {
  type: 'success',
  children: 'Success Button'
}

export const Warning = Template.bind({})
Warning.args = {
  type: 'warning',
  children: 'Success Button'
}

export const Danger = Template.bind({})
Danger.args = {
  type: 'danger',
  children: 'Danger Button'
}

export const Link = Template.bind({})
Link.args = {
  type: 'link',
  href: 'https://valzt.cn',
  target: '_blank',
  children: 'Link Button'
}

export const LargeButton = Template.bind({})
LargeButton.args = {
  size: 'lg',
  children: 'Large Button'
}

export const SmallButton = Template.bind({})
SmallButton.args = {
  size: 'sm',
  children: 'Small Button'
}
`,locationsMap:{default:{startLoc:{col:48,line:24},endLoc:{col:1,line:26},startBody:{col:48,line:24},endBody:{col:1,line:26}},primary:{startLoc:{col:48,line:24},endLoc:{col:1,line:26},startBody:{col:48,line:24},endBody:{col:1,line:26}},success:{startLoc:{col:48,line:24},endLoc:{col:1,line:26},startBody:{col:48,line:24},endBody:{col:1,line:26}},warning:{startLoc:{col:48,line:24},endLoc:{col:1,line:26},startBody:{col:48,line:24},endBody:{col:1,line:26}},danger:{startLoc:{col:48,line:24},endLoc:{col:1,line:26},startBody:{col:48,line:24},endBody:{col:1,line:26}},link:{startLoc:{col:48,line:24},endLoc:{col:1,line:26},startBody:{col:48,line:24},endBody:{col:1,line:26}},"large-button":{startLoc:{col:48,line:24},endLoc:{col:1,line:26},startBody:{col:48,line:24},endBody:{col:1,line:26}},"small-button":{startLoc:{col:48,line:24},endLoc:{col:1,line:26},startBody:{col:48,line:24},endBody:{col:1,line:26}}}},docs:{page:d}}},o=a(t=>y(c,{type:"primary",onClick:m("clicked"),...t}),"Template"),f=o.bind({});f.args={type:"default",children:"Default Button"};const h=o.bind({});h.args={type:"primary",children:"Primary Button"};const x=o.bind({});x.args={type:"success",children:"Success Button"};const L=o.bind({});L.args={type:"warning",children:"Success Button"};const S=o.bind({});S.args={type:"danger",children:"Danger Button"};const T=o.bind({});T.args={type:"link",href:"https://valzt.cn",target:"_blank",children:"Link Button"};const k=o.bind({});k.args={size:"lg",children:"Large Button"};const D=o.bind({});D.args={size:"sm",children:"Small Button"};const X=["Default","Primary","Success","Warning","Danger","Link","LargeButton","SmallButton"];export{S as Danger,f as Default,k as LargeButton,T as Link,h as Primary,D as SmallButton,x as Success,L as Warning,X as __namedExportsOrder,W as default};
//# sourceMappingURL=button.stories.586698ee.js.map
