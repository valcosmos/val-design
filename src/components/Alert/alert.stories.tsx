import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Alert from './alert'

export default {
  title: 'Alert',
  component: Alert
} as ComponentMeta<typeof Alert>

const Template: ComponentStory<typeof Alert> = (props) => <Alert {...props} />

export const defaultAlert = Template.bind({})
defaultAlert.args = {
  title: 'this is alert'
}

export const successAlert = Template.bind({})
successAlert.args = {
  title: 'this is success alert',
  type: 'success'
}
export const dangerAlert = Template.bind({})
dangerAlert.args = {
  title: 'this is danger alert',
  type: 'danger'
}

export const warningAlert = Template.bind({})
warningAlert.args = {
  title: 'this is warning alert',
  type: 'warning'
}

export const descAlert = Template.bind({})
descAlert.args = {
  title: 'this is desc alert',
  description: 'this is long description',
  onClose: action('closed')
}
