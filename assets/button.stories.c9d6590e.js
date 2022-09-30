var l=Object.defineProperty;var e=(t,r)=>l(t,"name",{value:r,configurable:!0});import{a}from"./index.12a13906.js";import{B as o}from"./button.78051b1b.js";import{j as c}from"./jsx-runtime.de58cbc5.js";import"./iframe.761b36e0.js";import"./make-decorator.8edfae5e.js";import"./index.220dfe0f.js";const x={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from './button'

// \u{1F447} This default export determines where your story goes in the story list
export default {
  /* \u{1F447} The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'General/Button \u6309\u94AE',
  component: Button
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
`,locationsMap:{default:{startLoc:{col:48,line:17},endLoc:{col:1,line:19},startBody:{col:48,line:17},endBody:{col:1,line:19}},primary:{startLoc:{col:48,line:17},endLoc:{col:1,line:19},startBody:{col:48,line:17},endBody:{col:1,line:19}},success:{startLoc:{col:48,line:17},endLoc:{col:1,line:19},startBody:{col:48,line:17},endBody:{col:1,line:19}},warning:{startLoc:{col:48,line:17},endLoc:{col:1,line:19},startBody:{col:48,line:17},endBody:{col:1,line:19}},danger:{startLoc:{col:48,line:17},endLoc:{col:1,line:19},startBody:{col:48,line:17},endBody:{col:1,line:19}},link:{startLoc:{col:48,line:17},endLoc:{col:1,line:19},startBody:{col:48,line:17},endBody:{col:1,line:19}},"large-button":{startLoc:{col:48,line:17},endLoc:{col:1,line:19},startBody:{col:48,line:17},endBody:{col:1,line:19}},"small-button":{startLoc:{col:48,line:17},endLoc:{col:1,line:19},startBody:{col:48,line:17},endBody:{col:1,line:19}}}}},title:"General/Button \u6309\u94AE",component:o},n=e(t=>c(o,{type:"primary",onClick:a("clicked"),...t}),"Template"),i=n.bind({});i.args={type:"default",children:"Default Button"};const s=n.bind({});s.args={type:"primary",children:"Primary Button"};const d=n.bind({});d.args={type:"success",children:"Success Button"};const p=n.bind({});p.args={type:"warning",children:"Success Button"};const u=n.bind({});u.args={type:"danger",children:"Danger Button"};const m=n.bind({});m.args={type:"link",href:"https://valzt.cn",target:"_blank",children:"Link Button"};const g=n.bind({});g.args={size:"lg",children:"Large Button"};const y=n.bind({});y.args={size:"sm",children:"Small Button"};const D=["Default","Primary","Success","Warning","Danger","Link","LargeButton","SmallButton"];export{u as Danger,i as Default,g as LargeButton,m as Link,s as Primary,y as SmallButton,d as Success,p as Warning,D as __namedExportsOrder,x as default};
//# sourceMappingURL=button.stories.c9d6590e.js.map
