import type { FC } from 'react'
import type { MenuProps } from './menu'
import Menu from './menu'
import type { SubMenuProps } from './subMenu'
import SubMenu from './subMenu'
import type { MenuItemProps } from './menuItem'
import MenuItem from './menuItem'

export type IMenuComponent = FC<MenuProps> & {
  Item: FC<MenuItemProps>
  SubMenu: FC<SubMenuProps>
}

const TransMenu = Menu as IMenuComponent

TransMenu.Item = MenuItem
TransMenu.SubMenu = SubMenu

export default TransMenu
