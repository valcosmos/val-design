import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'

import Card from './card'

const meta = {
  title: 'Data Display/Card 组件',
  id: 'card',
  component: Card,
  decorators: [
    Story => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>

export default meta

const Template: StoryFn<typeof Card> = args => <Card {...args} />

export const BasicCard = Template.bind({})
BasicCard.args = {
  header: 'Card header',
  children: 'Card body',
}

export const BasicCardWithElement = Template.bind({})
BasicCardWithElement.args = {
  header: <h2>Card header</h2>,
  children: <span>Card body</span>,
}

export const ShadowCard = Template.bind({})
ShadowCard.args = {
  header: 'Card header',
  shadow: 'always',
  children: 'Card body',
}

export const CustomBodyStyle = Template.bind({})

CustomBodyStyle.args = {
  header: 'Card header',
  shadow: 'always',
  bodyStyle: { color: 'turquoise' },
  children: 'Card body',
}
