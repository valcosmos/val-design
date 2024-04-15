import type { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { Progress } from './progress'

const meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Feedback/Progress 进度条',
  component: Progress,
} satisfies Meta<typeof Progress>

export default meta

const Template: StoryFn<typeof Progress> = args => <Progress {...args} />

export const DefaultProgress = Template.bind({})

DefaultProgress.args = {
  percent: 80,
  theme: 'primary',
}
