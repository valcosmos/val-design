import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Icon from './icon'

export default {
  title: 'General/Icon 图标',
  component: Icon,
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = props => <Icon {...props} size="3x" />

export const CheckIcon = Template.bind({})
CheckIcon.args = {
  icon: 'check',
}
export const CoffeeIcon = Template.bind({})
CoffeeIcon.args = {
  icon: 'coffee',
}

export const CloseIcon = Template.bind({})
CloseIcon.args = {
  icon: 'xmark',
}

export const TrashIcon = Template.bind({})
TrashIcon.args = {
  icon: 'trash',
}

export const SuccessIcon = Template.bind({})
SuccessIcon.args = {
  icon: 'check',
  theme: 'success',
}
export const DangerIcon = Template.bind({})
DangerIcon.args = {
  icon: 'times',
  theme: 'danger',
}
export const PrimaryIcon = Template.bind({})
PrimaryIcon.args = {
  icon: 'anchor',
  theme: 'primary',
}
export const WarningIcon = Template.bind({})
WarningIcon.args = {
  icon: 'exclamation-circle',
  theme: 'warning',
}

export const Spin = Template.bind({})
Spin.args = {
  spin: true,
  icon: 'spinner',

  theme: 'primary',
}
export const Pulse = Template.bind({})
Pulse.args = {
  pulse: true,
  icon: 'spinner',
  theme: 'success',
}
