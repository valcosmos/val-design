import Tab, { TabsProps } from './tabs'
import TabItem, { TabItemProps } from './tabItem'
import { FC } from 'react'

export type ITabComponent = FC<TabsProps> & {
  Item: FC<TabItemProps>
}

const TransTab = Tab as ITabComponent

TransTab.Item = TabItem

export default TransTab
