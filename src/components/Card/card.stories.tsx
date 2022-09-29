import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Card from './card'

const Meta: ComponentMeta<typeof Card> = {
  title: 'Data Display/Card 组件',
  id: 'card',
  component: Card,
  decorators: [
    (Story) => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    )
  ]
}

export default Meta

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const BasicCard = Template.bind({})
BasicCard.args = {
  header: 'Card header',
  children: 'Card body'
}

export const BasicCardWithElement = Template.bind({})
BasicCardWithElement.args = {
  header: <h2>Card header</h2>,
  children: <span>Card body</span>
}

export const ShadowCard = Template.bind({})
ShadowCard.args = {
  header: 'Card header',
  shadow: 'always',
  children: 'Card body'
}

export const CustomBodyStyle = Template.bind({})

CustomBodyStyle.args = {
  header: 'Card header',
  shadow: 'always',
  bodyStyle: { color: 'turquoise' },
  children: 'Card body'
}
