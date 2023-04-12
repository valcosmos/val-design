import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Skeleton from './skeleton'

const meta: Meta<typeof Skeleton> = {
  title: 'Feedback/Skeleton 骨架屏',
  component: Skeleton,
}

export default meta

const Template: StoryFn<typeof Skeleton> = args => <Skeleton {...args} />

export const BasicSkeleton = Template.bind({})

BasicSkeleton.args = {}

export const ActiveSkeleton = Template.bind({})

ActiveSkeleton.args = { active: true }

export const SkeletonAsBackground = Template.bind({})

SkeletonAsBackground.args = {
  active: true,
  children: <p style={{ padding: '20px' }}>Content here(it could be images or others)</p>,
}

export const MultiRow = Template.bind({})

MultiRow.args = { row: 8, active: true }
