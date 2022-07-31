import{a as o}from"./index.07d00392.js";import{B as t}from"./button.e3ad4b87.js";import{j as r}from"./jsx-runtime.f3150366.js";import"./iframe.cc34769a.js";import"./make-decorator.0eef16ed.js";import"./index.b3d31cad.js";const f={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from './button'

// \u{1F447} This default export determines where your story goes in the story list
export default {
  /* \u{1F447} The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'val-design/Button \u6309\u94AE',
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
`,locationsMap:{default:{startLoc:{col:48,line:17},endLoc:{col:1,line:19},startBody:{col:48,line:17},endBody:{col:1,line:19}},primary:{startLoc:{col:48,line:17},endLoc:{col:1,line:19},startBody:{col:48,line:17},endBody:{col:1,line:19}},success:{startLoc:{col:48,line:17},endLoc:{col:1,line:19},startBody:{col:48,line:17},endBody:{col:1,line:19}},warning:{startLoc:{col:48,line:17},endLoc:{col:1,line:19},startBody:{col:48,line:17},endBody:{col:1,line:19}},danger:{startLoc:{col:48,line:17},endLoc:{col:1,line:19},startBody:{col:48,line:17},endBody:{col:1,line:19}},link:{startLoc:{col:48,line:17},endLoc:{col:1,line:19},startBody:{col:48,line:17},endBody:{col:1,line:19}},"large-button":{startLoc:{col:48,line:17},endLoc:{col:1,line:19},startBody:{col:48,line:17},endBody:{col:1,line:19}},"small-button":{startLoc:{col:48,line:17},endLoc:{col:1,line:19},startBody:{col:48,line:17},endBody:{col:1,line:19}}}}},title:"val-design/Button \u6309\u94AE",component:t},n=e=>r(t,{type:"primary",onClick:o("clicked"),...e}),l=n.bind({});l.args={type:"default",children:"Default Button"};const a=n.bind({});a.args={type:"primary",children:"Primary Button"};const i=n.bind({});i.args={type:"success",children:"Success Button"};const c=n.bind({});c.args={type:"warning",children:"Success Button"};const s=n.bind({});s.args={type:"danger",children:"Danger Button"};const d=n.bind({});d.args={type:"link",href:"https://valzt.cn",target:"_blank",children:"Link Button"};const p=n.bind({});p.args={size:"lg",children:"Large Button"};const u=n.bind({});u.args={size:"sm",children:"Small Button"};const b=["Default","Primary","Success","Warning","Danger","Link","LargeButton","SmallButton"];export{s as Danger,l as Default,p as LargeButton,d as Link,a as Primary,u as SmallButton,i as Success,c as Warning,b as __namedExportsOrder,f as default};
//# sourceMappingURL=button.stories.e2573340.js.map
