import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Icon from './icon'

export default {
  title: 'val-design/Icon 图标',
  component: Icon
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (props) => (
  <Icon {...props} size="3x" />
)

export const checkIcon = Template.bind({})
checkIcon.args = {
  icon: 'check'
}
export const coffeeIcon = Template.bind({})
coffeeIcon.args = {
  icon: 'coffee'
}

export const closeIcon = Template.bind({})
closeIcon.args = {
  icon: 'xmark'
}

export const trashIcon = Template.bind({})
trashIcon.args = {
  icon: 'trash'
}

export const successIcon = Template.bind({})
successIcon.args = {
  icon: 'check',
  theme: 'success'
}
export const dangerIcon = Template.bind({})
dangerIcon.args = {
  icon: 'times',
  theme: 'danger'
}
export const primaryIcon = Template.bind({})
primaryIcon.args = {
  icon: 'anchor',
  theme: 'primary'
}
export const warningIcon = Template.bind({})
warningIcon.args = {
  icon: 'exclamation-circle',
  theme: 'warning'
}

export const spin = Template.bind({})
spin.args = {
  spin: true,
  icon: 'spinner',

  theme: 'primary'
}
export const pulse = Template.bind({})
pulse.args = {
  pulse: true,
  icon: 'spinner',

  theme: 'success'
}
