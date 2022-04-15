import React from 'react'
import classNames from 'classnames'

// export enum ButtonSize {
//   Large = 'lg',
//   Small = 'sm'
// }

// export enum ButtonType {
//   Primary = 'primary',
//   Default = 'default',
//   Danger = 'danger',
//   Link = 'link'
// }
// export const tuple = <T extends string[]>(...args: T) => args
// const ButtonHTMLTypes = tuple('submit', 'button', 'reset')
// export type ButtonHTMLType = typeof ButtonHTMLTypes[number]

export type ButtonTypes = 'default' | 'primary' | 'success' | 'danger' | 'warning' | 'link'

interface BaseButtonProps {
  /**
   * 按钮类名
   */
  className?: string
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 按钮大小
   */
  size?: 'lg' | 'sm'
  /**
   * 按钮类型
   */
  type?: ButtonTypes
  /**
   * 按钮原生类型
   */
  htmlType?: 'submit' | 'button' | 'reset'
  /**
   * 按钮内容
   */
  children: React.ReactNode | string
  /**
   * 链接地址
   */
  href?: string
  /**
   * 点击事件
   */
  onClick?: () => void
}

// 按钮原生属性类型
type NativeButtonProps = {} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type'>

// 链接原生属性类型
type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>

// 将所有属性设置为可选，因为button有些链接a不具备 反之亦然
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

/**
 * > 一个简单的Button组件，可通过不同的type，选择不同的颜色风格。
 *
 * ### 引用方法
 *
 * ``` js
 *
 * import { Button } from 'val-design'
 *
 * ```
 */
export const Button: React.FC<ButtonProps> = (props) => {
  const { type, disabled, size, children, href, className, ...restProps } =
    props
  // 默认添加btn类
  const classes = classNames('btn', className, {
    [`btn-${type}`]: type,
    [`btn-${size}`]: size,
    [`disabled`]: type === 'link' && disabled
  })
  if (type === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    )
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  type: 'default'
}

export default Button
