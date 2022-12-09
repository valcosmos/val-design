var a=Object.defineProperty;var o=(t,p)=>a(t,"name",{value:p,configurable:!0});import{a as r}from"./index-4f5f4b98.js";import{I as l}from"./input-54b4d7a6.js";import{j as i}from"./jsx-runtime-597274de.js";import"./iframe-ffb46370.js";import"./make-decorator-f61b13ac.js";import"./index-9f7f24f4.js";import"./icon-85347f99.js";import"./index-55a28f55.js";import"./index-a2f37619.js";const z={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Input } from './input'

export default {
  title: 'Data Entry/Input 输入框',
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
`,locationsMap:{"default-input":{startLoc:{col:47,line:11},endLoc:{col:1,line:13},startBody:{col:47,line:11},endBody:{col:1,line:13}},"disabled-input":{startLoc:{col:47,line:11},endLoc:{col:1,line:13},startBody:{col:47,line:11},endBody:{col:1,line:13}},"icon-input":{startLoc:{col:47,line:11},endLoc:{col:1,line:13},startBody:{col:47,line:11},endBody:{col:1,line:13}},"large-input":{startLoc:{col:47,line:11},endLoc:{col:1,line:13},startBody:{col:47,line:11},endBody:{col:1,line:13}},"small-input":{startLoc:{col:47,line:11},endLoc:{col:1,line:13},startBody:{col:47,line:11},endBody:{col:1,line:13}},"prepend-input":{startLoc:{col:47,line:11},endLoc:{col:1,line:13},startBody:{col:47,line:11},endBody:{col:1,line:13}},"append-input":{startLoc:{col:47,line:11},endLoc:{col:1,line:13},startBody:{col:47,line:11},endBody:{col:1,line:13}}}}},title:"Data Entry/Input 输入框",component:l},n=o(t=>i(l,{...t}),"Template"),s=n.bind({}),e={width:"300px"};s.args={style:e,placeholder:"please input",onChange:r("change")};const c=n.bind({});c.args={style:e,placeholder:"disabled input",disabled:!0};const d=n.bind({});d.args={style:e,placeholder:"input with icon",icon:"search"};const u=n.bind({});u.args={style:e,placeholder:"large size",size:"lg"};const m=n.bind({});m.args={style:e,placeholder:"small size",size:"sm"};const I=n.bind({});I.args={style:e,defaultValue:"prepend text",prepend:"https://"};const g=n.bind({});g.args={style:e,defaultValue:"google",append:".com"};const C=["DefaultInput","DisabledInput","IconInput","LargeInput","SmallInput","PrependInput","AppendInput"];export{g as AppendInput,s as DefaultInput,c as DisabledInput,d as IconInput,u as LargeInput,I as PrependInput,m as SmallInput,C as __namedExportsOrder,z as default};
//# sourceMappingURL=input.stories-ea918806.js.map
