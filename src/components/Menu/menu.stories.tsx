import React from 'react'

import { Meta, StoryFn } from '@storybook/react'
import Menu from './index'
import { action } from '@storybook/addon-actions'

const meta = {
  title: 'Data Entry/Menu 导航菜单',
  component: Menu,
} satisfies Meta<typeof Menu>

export default meta

export const HorizontalMenu: StoryFn<typeof Menu> = args => (
  <Menu {...args} defaultIndex={'0'} onSelect={index => action(`clicked ${index} item`)}>
    <Menu.Item>menu 1</Menu.Item>
    <Menu.Item disabled>disabled</Menu.Item>
    <Menu.SubMenu title="sub menu">
      <Menu.Item>submenu 1</Menu.Item>
      <Menu.Item>submenu 1</Menu.Item>
      <Menu.Item>submenu 1</Menu.Item>
    </Menu.SubMenu>
    <Menu.Item>menu2</Menu.Item>
  </Menu>
)
export const VerticalMenu: StoryFn<typeof Menu> = args => (
  <Menu
    {...args}
    defaultIndex={'0'}
    mode="vertical"
    onSelect={index => action(`clicked ${index} item`)}
  >
    <Menu.Item>cool link</Menu.Item>
    <Menu.Item disabled>disabled</Menu.Item>
    <Menu.SubMenu title="sub menu">
      <Menu.Item>submenu 1</Menu.Item>
      <Menu.Item>submenu 1</Menu.Item>
      <Menu.Item>submenu 1</Menu.Item>
    </Menu.SubMenu>
    <Menu.Item>cool link 2</Menu.Item>
  </Menu>
)
