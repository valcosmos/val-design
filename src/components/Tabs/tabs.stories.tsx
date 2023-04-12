import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Tabs from './tabs'
import TabItem from './tabItem'
import Icon from '../Icon'

export default {
  title: 'Data Display/Tabs 标签页',
  component: Tabs,
} satisfies Meta<typeof Tabs>

const Template: StoryFn<typeof Tabs> = props => (
  <Tabs {...props} onSelect={action('selected')}>
    <TabItem label="选项卡一">this is content one</TabItem>
    <TabItem label="选项卡二">this is content two</TabItem>
    <TabItem
      label={
        <>
          <Icon icon="check-circle" /> 自定义图标
        </>
      }
    >
      this is content two
    </TabItem>
    <TabItem label="用户管理" disabled>
      this is content three
    </TabItem>
  </Tabs>
)

export const DefaultTab = Template.bind({})
export const CardTab = Template.bind({})
CardTab.args = {
  type: 'card',
}
