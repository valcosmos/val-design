import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Icon from './icon'

export default {
  title: 'val-design/Icon',
  component: Icon
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (props) => <Icon {...props} />

export const checkIcon = Template.bind({})
checkIcon.args = {
  icon: 'check',
  size: '3x'
}
export const timesIcon = Template.bind({})
timesIcon.args = {
  icon: 'times',
  size: '3x'
}
export const anchorIcon = Template.bind({})
anchorIcon.args = {
  icon: 'anchor',
  size: '3x'
}
export const trashIcon = Template.bind({})
trashIcon.args = {
  icon: 'trash',
  size: '3x'
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
  size: '3x',
  theme: 'primary'
}
export const pause = Template.bind({})
spin.args = {
  pulse: true,
  icon: 'spinner',
  size: '3x',
  theme: 'success'
}

// const themeIcons = () => (
//   <>
//     <Icon icon="check" size="3x" theme="success" />
//     <Icon icon="times" size="3x" theme="danger" />
//     <Icon icon="anchor" size="3x" theme="primary" />
//     <Icon icon="exclamation-circle" size="3x" theme="warning" />
//   </>
// )

// const customIcons = () => (
//   <>
//     <Icon icon="spinner" size="3x" theme="primary" spin />
//     <Icon icon="spinner" size="3x" theme="success" pulse />
//   </>
// )
