import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import Button from '../Button'
import { Popover } from './popover'

// 👇 This default export determines where your story goes in the story list
const meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Data Entry/Popover 气泡卡片',
  component: Popover,
} satisfies Meta<typeof Popover>

export default meta

// 👇 We create a “template” of how args map to rendering

type Story = StoryFn<typeof Popover>

const Template: Story = args => (
  <Popover
    placement="bottom"
    trigger="click"
    style={{ margin: '200px' }}
    {...args}
  >

  </Popover>
)

export const Default = Template.bind({})
Default.args = {
  content: (
    <div>
      内容

    </div>
  ),
  children: <Button type="primary">Click</Button>,
}
