import type { FC, ReactElement } from 'react'
import React from 'react'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import Icon from '../Icon/icon'

export type MessageType = 'info' | 'success' | 'danger' | 'warning'

interface MessageProps {
  /**
   * 提示文字
   */
  text: string
  /**
   * 提示类型
   */
  type: MessageType
}

/**
 * > message组件，
 *
 * ### 引用方法
 *
 * ``` js
 *
 * import { Button } from 'val-design'
 *
 * ```
 */
const Message: FC<MessageProps> = (props: MessageProps) => {
  const { text, type } = props

  const renderIcon = (msgType: MessageType): ReactElement => {
    let msgIcon: IconProp = 'check-circle'

    if (msgType === 'success')
      msgIcon = 'check-circle'

    if (msgType === 'danger')
      msgIcon = 'times-circle'

    if (msgType === 'warning')
      msgIcon = 'exclamation-circle'

    if (msgType === 'info')
      msgIcon = 'info-circle'

    return <Icon icon={msgIcon} theme={msgType} />
  }

  return (
    <div className="message">
      <div className="message-content">
        <div className="icon">{renderIcon(type)}</div>
        <div className="text">{text}</div>
      </div>
    </div>
  )
}

export default Message
