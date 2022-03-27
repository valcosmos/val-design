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
  size?: 'large' | 'small'
  /**
   * 按钮类型
   */
  btnType?: 'primary' | 'default' | 'danger' | 'link'
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
type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>

// 链接原生属性类型
type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>

// 将所有属性设置为可选，因为button有些链接a不具备 反之亦然
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

/**
 * 这是我们的第一个Button组件
 *
 * ### 引用方法
 *
 * ``` js
 *
 * import {Button} from 'val-design'
 *
 * ```
 */
export const Button: React.FC<ButtonProps> = (props) => {
  const { btnType, disabled, size, children, href, className, ...restProps } =
    props
  // 默认添加btn类
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    [`disabled`]: btnType === 'link' && disabled
  })
  if (btnType === 'link' && href) {
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
  btnType: 'default'
}

// export default Button
