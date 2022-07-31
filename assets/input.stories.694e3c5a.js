import{a as l}from"./index.07d00392.js";import{I as t}from"./input.7ed8b3fd.js";import{j as p}from"./jsx-runtime.f3150366.js";import"./iframe.cc34769a.js";import"./make-decorator.0eef16ed.js";import"./index.b3d31cad.js";import"./icon.34088235.js";import"./index.es.231671ec.js";import"./index.0e0ded8f.js";const B={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Input } from './input'

export default {
  title: 'val-design/Input \u8F93\u5165\u6846',
  component: Input
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => (
  <Input {...args}></Input>
)

export const DefaultInput = Template.bind({})
const style: React.CSSProperties = {
  width: '300px'
}
DefaultInput.args = {
  style,
  placeholder: 'please input',
  onChange: action('change')
}

export const DisabledInput = Template.bind({})
DisabledInput.args = {
  style,
  placeholder: 'disabled input',
  disabled: true
}

export const IconInput = Template.bind({})
IconInput.args = {
  style,
  placeholder: 'input with icon',
  icon: 'search'
}

export const LargeInput = Template.bind({})
LargeInput.args = {
  style,
  placeholder: 'large size',
  size: 'lg'
}

export const SmallInput = Template.bind({})
SmallInput.args = {
  style,
  placeholder: 'small size',
  size: 'sm'
}

export const PrependInput = Template.bind({})
PrependInput.args = {
  style,
  defaultValue: 'prepend text',
  prepend: 'https://'
}

export const AppendInput = Template.bind({})
AppendInput.args = {
  style,
  defaultValue: 'google',
  append: '.com'
}
`,locationsMap:{"default-input":{startLoc:{col:47,line:11},endLoc:{col:1,line:13},startBody:{col:47,line:11},endBody:{col:1,line:13}},"disabled-input":{startLoc:{col:47,line:11},endLoc:{col:1,line:13},startBody:{col:47,line:11},endBody:{col:1,line:13}},"icon-input":{startLoc:{col:47,line:11},endLoc:{col:1,line:13},startBody:{col:47,line:11},endBody:{col:1,line:13}},"large-input":{startLoc:{col:47,line:11},endLoc:{col:1,line:13},startBody:{col:47,line:11},endBody:{col:1,line:13}},"small-input":{startLoc:{col:47,line:11},endLoc:{col:1,line:13},startBody:{col:47,line:11},endBody:{col:1,line:13}},"prepend-input":{startLoc:{col:47,line:11},endLoc:{col:1,line:13},startBody:{col:47,line:11},endBody:{col:1,line:13}},"append-input":{startLoc:{col:47,line:11},endLoc:{col:1,line:13},startBody:{col:47,line:11},endBody:{col:1,line:13}}}}},title:"val-design/Input \u8F93\u5165\u6846",component:t},n=o=>p(t,{...o}),a=n.bind({}),e={width:"300px"};a.args={style:e,placeholder:"please input",onChange:l("change")};const i=n.bind({});i.args={style:e,placeholder:"disabled input",disabled:!0};const r=n.bind({});r.args={style:e,placeholder:"input with icon",icon:"search"};const s=n.bind({});s.args={style:e,placeholder:"large size",size:"lg"};const c=n.bind({});c.args={style:e,placeholder:"small size",size:"sm"};const d=n.bind({});d.args={style:e,defaultValue:"prepend text",prepend:"https://"};const u=n.bind({});u.args={style:e,defaultValue:"google",append:".com"};const S=["DefaultInput","DisabledInput","IconInput","LargeInput","SmallInput","PrependInput","AppendInput"];export{u as AppendInput,a as DefaultInput,i as DisabledInput,r as IconInput,s as LargeInput,d as PrependInput,c as SmallInput,S as __namedExportsOrder,B as default};
//# sourceMappingURL=input.stories.694e3c5a.js.map
