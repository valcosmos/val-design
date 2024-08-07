import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Alert from './alert'

const meta = {
  title: 'Feedback/Alert 警告提示',
  component: Alert,
} satisfies Meta<typeof Alert>

export default meta

type Story = StoryFn<typeof Alert>

const Template: Story = props => <Alert {...props} />

export const DefaultAlert = Template.bind({})
DefaultAlert.args = {
  title: 'this is alert',
}

export const SuccessAlert = Template.bind({})
SuccessAlert.args = {
  title: 'this is success alert',
  type: 'success',
}
export const DangerAlert = Template.bind({})
DangerAlert.args = {
  title: 'this is danger alert',
  type: 'danger',
}

export const WarningAlert = Template.bind({})
WarningAlert.args = {
  title: 'this is warning alert',
  type: 'warning',
}

export const DescAlert = Template.bind({})
DescAlert.args = {
  title: 'this is desc alert',
  description: 'this is long description',
  onClose: action('closed'),
}
