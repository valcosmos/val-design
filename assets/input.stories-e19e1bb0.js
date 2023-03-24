var a=Object.defineProperty;var o=(t,p)=>a(t,"name",{value:p,configurable:!0});import{j as r}from"./jsx-runtime-303a4c05.js";import{a as i}from"./index-3a9bb9c2.js";import{I as l}from"./input-2092f869.js";import"./index-2441a40f.js";import"./iframe-95599c29.js";import"./make-decorator-bdd7e0c0.js";import"./index-ed86a6de.js";import"./icon-08ccc11e.js";import"./index-c49ee5c5.js";import"./index-50ee27ec.js";const C={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Input } from './input'

export default {
  title: 'Data Entry/Input 输入框',
  component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = args => <Input {...args}></Input>

export const DefaultInput = Template.bind({})
const style: React.CSSProperties = {
  width: '300px',
}
DefaultInput.args = {
  style,
  placeholder: 'please input',
  onChange: action('change'),
}

export const DisabledInput = Template.bind({})
DisabledInput.args = {
  style,
  placeholder: 'disabled input',
  disabled: true,
}

export const IconInput = Template.bind({})
IconInput.args = {
  style,
  placeholder: 'input with icon',
  icon: 'search',
}

export const LargeInput = Template.bind({})
LargeInput.args = {
  style,
  placeholder: 'large size',
  size: 'lg',
}

export const SmallInput = Template.bind({})
SmallInput.args = {
  style,
  placeholder: 'small size',
  size: 'sm',
}

export const PrependInput = Template.bind({})
PrependInput.args = {
  style,
  defaultValue: 'prepend text',
  prepend: 'https://',
}

export const AppendInput = Template.bind({})
AppendInput.args = {
  style,
  defaultValue: 'google',
  append: '.com',
}
`,locationsMap:{"default-input":{startLoc:{col:47,line:11},endLoc:{col:80,line:11},startBody:{col:47,line:11},endBody:{col:80,line:11}},"disabled-input":{startLoc:{col:47,line:11},endLoc:{col:80,line:11},startBody:{col:47,line:11},endBody:{col:80,line:11}},"icon-input":{startLoc:{col:47,line:11},endLoc:{col:80,line:11},startBody:{col:47,line:11},endBody:{col:80,line:11}},"large-input":{startLoc:{col:47,line:11},endLoc:{col:80,line:11},startBody:{col:47,line:11},endBody:{col:80,line:11}},"small-input":{startLoc:{col:47,line:11},endLoc:{col:80,line:11},startBody:{col:47,line:11},endBody:{col:80,line:11}},"prepend-input":{startLoc:{col:47,line:11},endLoc:{col:80,line:11},startBody:{col:47,line:11},endBody:{col:80,line:11}},"append-input":{startLoc:{col:47,line:11},endLoc:{col:80,line:11},startBody:{col:47,line:11},endBody:{col:80,line:11}}}}},title:"Data Entry/Input 输入框",component:l},n=o(t=>r(l,{...t}),"Template"),s=n.bind({}),e={width:"300px"};s.args={style:e,placeholder:"please input",onChange:i("change")};const c=n.bind({});c.args={style:e,placeholder:"disabled input",disabled:!0};const d=n.bind({});d.args={style:e,placeholder:"input with icon",icon:"search"};const u=n.bind({});u.args={style:e,placeholder:"large size",size:"lg"};const m=n.bind({});m.args={style:e,placeholder:"small size",size:"sm"};const I=n.bind({});I.args={style:e,defaultValue:"prepend text",prepend:"https://"};const g=n.bind({});g.args={style:e,defaultValue:"google",append:".com"};const P=["DefaultInput","DisabledInput","IconInput","LargeInput","SmallInput","PrependInput","AppendInput"];export{g as AppendInput,s as DefaultInput,c as DisabledInput,d as IconInput,u as LargeInput,I as PrependInput,m as SmallInput,P as __namedExportsOrder,C as default};
//# sourceMappingURL=input.stories-e19e1bb0.js.map
