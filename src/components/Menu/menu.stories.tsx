import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import Menu from './menu'
import MenuItem from './menuItem'
import { action } from '@storybook/addon-actions'

export default {
  title: 'val-design/Menu',
  component: Menu
} as ComponentMeta<typeof Menu>

const Template: ComponentStory<typeof Menu> = (args) => (
  <Menu {...args}>
    <MenuItem>cool link</MenuItem>
    <MenuItem disabled>disabled</MenuItem>
    <MenuItem>cool link 2</MenuItem>
  </Menu>
)

export const defaultMenu = Template.bind({})
defaultMenu.args = {
  defaultIndex: '0',
  onSelect: (index) => action(`clicked ${index} item`)
}

// export const defaultMenu = () => (
//   <Menu
//     defaultIndex="0"
//     onSelect={(index) => {
//       action(`clicked ${index} item`)
//     }}
//   >
//     <MenuItem>cool link</MenuItem>
//     <MenuItem disabled>disabled</MenuItem>
//     <MenuItem>cool link 2</MenuItem>
//   </Menu>
// )
