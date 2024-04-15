import type { FC } from 'react'
import type { TabsProps } from './tabs'
import Tab from './tabs'
import type { TabItemProps } from './tabItem'
import TabItem from './tabItem'

export type ITabComponent = FC<TabsProps> & {
  Item: FC<TabItemProps>
}

const TransTab = Tab as ITabComponent

TransTab.Item = TabItem

export default TransTab
