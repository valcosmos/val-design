var a=Object.defineProperty;var o=(e,p)=>a(e,"name",{value:p,configurable:!0});import{a as r}from"./index-e714fffd.js";import{I as l}from"./input-e83247ce.js";import{j as i}from"./jsx-runtime-e0aa43b5.js";import"./es.object.get-own-property-descriptor-89e834e9.js";import"./iframe-e58528e7.js";import"./web.url.constructor-e24ea8fd.js";import"./es.number.is-integer-88489862.js";import"./make-decorator-f93c3fa3.js";import"./index-9f7f24f4.js";import"./icon-038fbd0a.js";import"./index-55a28f55.js";import"./index-a2f37619.js";import"./index-5837b0d6.js";const A={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"default-input":{startLoc:{col:47,line:11},endLoc:{col:1,line:13},startBody:{col:47,line:11},endBody:{col:1,line:13}},"disabled-input":{startLoc:{col:47,line:11},endLoc:{col:1,line:13},startBody:{col:47,line:11},endBody:{col:1,line:13}},"icon-input":{startLoc:{col:47,line:11},endLoc:{col:1,line:13},startBody:{col:47,line:11},endBody:{col:1,line:13}},"large-input":{startLoc:{col:47,line:11},endLoc:{col:1,line:13},startBody:{col:47,line:11},endBody:{col:1,line:13}},"small-input":{startLoc:{col:47,line:11},endLoc:{col:1,line:13},startBody:{col:47,line:11},endBody:{col:1,line:13}},"prepend-input":{startLoc:{col:47,line:11},endLoc:{col:1,line:13},startBody:{col:47,line:11},endBody:{col:1,line:13}},"append-input":{startLoc:{col:47,line:11},endLoc:{col:1,line:13},startBody:{col:47,line:11},endBody:{col:1,line:13}}}}},title:"Data Entry/Input 输入框",component:l},n=o(e=>i(l,{...e}),"Template"),s=n.bind({}),t={width:"300px"};s.args={style:t,placeholder:"please input",onChange:r("change")};const c=n.bind({});c.args={style:t,placeholder:"disabled input",disabled:!0};const d=n.bind({});d.args={style:t,placeholder:"input with icon",icon:"search"};const u=n.bind({});u.args={style:t,placeholder:"large size",size:"lg"};const m=n.bind({});m.args={style:t,placeholder:"small size",size:"sm"};const I=n.bind({});I.args={style:t,defaultValue:"prepend text",prepend:"https://"};const g=n.bind({});g.args={style:t,defaultValue:"google",append:".com"};const V=["DefaultInput","DisabledInput","IconInput","LargeInput","SmallInput","PrependInput","AppendInput"];export{g as AppendInput,s as DefaultInput,c as DisabledInput,d as IconInput,u as LargeInput,I as PrependInput,m as SmallInput,V as __namedExportsOrder,A as default};
//# sourceMappingURL=input.stories-8939343d.js.map
