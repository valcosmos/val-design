import React from 'react'
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
