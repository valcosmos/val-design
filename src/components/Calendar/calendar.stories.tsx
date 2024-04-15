import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'

import dayjs from 'dayjs'
import Calendar from '.'

const meta = {
  title: 'Data Display/Calendar 组件',
  id: 'calendar',
  component: Calendar,
  decorators: [
    Story => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Calendar>

export default meta

const Template: StoryFn<typeof Calendar> = args => <Calendar {...args} />

export const BasicCalendar = Template.bind({})
BasicCalendar.args = {
  value: dayjs('2024-02-11'),
}
