import type { FC } from 'react'
import React, { useState } from 'react'
import classNames from 'classnames'
import Icon from '../Icon'
import Transition from '../Transition'

export interface AlertProps {
  /**
   * 标题
   */
  title: string
  /**
   * 描述
   */
  description?: string
  /**
   * 类型 四种可选 针对四种不同的场景
   */
  type?: 'success' | 'default' | 'danger' | 'warning'
  /**
   * 关闭alert时触发的事件
   */
  onClose?: () => void
  /**
   * 是否显示关闭图标
   */
  closable?: boolean
}

/**
 * > 用于页面中展示重要的提示信息, 点击右侧的叉提示自动消失。
 *
 * ### 引用方法
 *
 * ```js
 *
 * import { Alert } from 'val-design'
 *
 *
 * ```
 */
export const Alert: FC<AlertProps> = (props) => {
  const [hide, setHide] = useState(false)
  const { title, description, type, onClose, closable } = props
  const classes = classNames('v-alert', {
    [`v-alert-${type}`]: type,
  })
  const titleClass = classNames('v-alert-title', {
    'bold-title': description,
  })
  const handleClose = () => {
    if (onClose)
      onClose()

    setHide(true)
  }
  return (
    <Transition in={!hide} timeout={300} animation="zoom-in-top">
      <div className={classes}>
        <span className={titleClass}>{title}</span>
        {description && <p className="v-alert-desc">{description}</p>}
        {closable && (
          <div className="v-alert-close" onClick={handleClose}>
            <Icon icon="times" />
          </div>
        )}
      </div>
    </Transition>
  )
}

Alert.defaultProps = {
  type: 'default',
  closable: true,
}
export default Alert
