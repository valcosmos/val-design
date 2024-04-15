import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import Radio from './radio'

const RadioMeta: Meta<typeof Radio> = {
  title: 'Data Entry/Radio 单选框',
  component: Radio,
}

export default RadioMeta

const Template: StoryFn<typeof Radio> = args => <Radio {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: 'Radio',
}

export const Disabled = Template.bind({})
Disabled.args = {
  checked: true,
  disabled: true,
  children: 'Can not be checked',
}

export const ChangeEvent = Template.bind({})
ChangeEvent.args = {
  children: 'Change Event',
  // onChange: (e: any) => console.log(e.target.checked),
}
