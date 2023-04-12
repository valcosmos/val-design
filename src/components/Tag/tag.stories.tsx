import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Tag from './tag'

const meta: Meta<typeof Tag> = {
  title: 'Data Display/Tag',
  component: Tag,
}

export default meta

const Template: StoryFn<typeof Tag> = args => <Tag {...args} />

export const BasicTag = Template.bind({})

BasicTag.args = {
  children: 'Basic tag',
}

export const TagSize = Template.bind({})

TagSize.args = {
  children: 'Tag size',
  size: 'large',
}
export const TagTheme = Template.bind({})

TagTheme.args = {
  children: 'Theme size',
  theme: 'plain',
}
