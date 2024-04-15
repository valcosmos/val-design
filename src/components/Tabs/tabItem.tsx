import type { FC, ReactNode } from 'react'
import React from 'react'

export interface TabItemProps {
  /** Tab选项上面的文字 */
  label: string | React.ReactElement
  /** Tab选项是否被禁用 */
  disabled?: boolean
  children?: ReactNode | string
}

export const TabItem: FC<TabItemProps> = ({ children }) => {
  return <div className="v-tab-panel">{children}</div>
}

export default TabItem
