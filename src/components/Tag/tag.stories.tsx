import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Tag from './tag'

const Meta: ComponentMeta<typeof Tag> = {
  title: 'Data Display/Tag',
  component: Tag,
}

export default Meta

const Template: ComponentStory<typeof Tag> = args => <Tag {...args} />

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
