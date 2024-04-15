import type { ChangeEvent, FC, InputHTMLAttributes, ReactElement } from 'react'
import React from 'react'
import classNames from 'classnames'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import Icon from '../Icon/icon'

type InputSize = 'lg' | 'sm'
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  /**
   * 是否禁用 Input
   */
  disabled?: boolean
  /**
   * 设置 input 大小，支持 lg 或者是 sm
   */
  size?: InputSize
  /**
   * 添加图标，在右侧悬浮添加一个图标，用于提示
   */
  icon?: IconProp
  /**
   * 添加前缀 用于配置一些固定组合
   */
  prepend?: string | ReactElement
  /**
   * 添加后缀 用于配置一些固定组合
   */
  append?: string | ReactElement
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

/**
 * > 一个基础的Input组件封装，可添加图标，前缀或者后缀组合。
 *
 * ### 引用方法
 *
 * ```js
 *
 * import { Input } from 'val-design'
 *
 * ```
 */
export const Input: FC<InputProps> = (props) => {
  const { disabled, size, icon, prepend, append, style, ...restProps } = props
  const cnames = classNames('v-input-wrapper', {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepend || append,
    'input-group-append': !!append,
    'input-group-prepend': !!prepend,
  })

  return (
    <div className={cnames} style={style}>
      {prepend && <div className="v-input-group-prepend">{prepend}</div>}
      {icon && (
        <div className="icon-wrapper">
          <Icon icon={icon} title={`title-${icon}`} />
        </div>
      )}
      <input className="v-input-inner" disabled={disabled} {...restProps} />
      {append && <div className="v-input-group-append">{append}</div>}
    </div>
  )
}

export default Input
