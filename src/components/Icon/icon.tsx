import React, { FC } from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export type ThemeProps =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'

export interface IconProps extends FontAwesomeIconProps {
  /** 支持框架主题 根据主题显示不同的颜色 */
  theme?: ThemeProps
}

/**
 * > 本组件 基于 react-fontawesome 进行二次封装。可以在这里查看所有图标: https://fontawesome.com/v6/icons?m=free&s=solid
 * > 如若需要使用，可选择**全局引入**或者**按需导入**
 *
 * ### 引用方法
 *
 * ```js
 *
 * // 按需倒入
 *
 * import { Icon } from 'val-design'
 *
 * import { faCoffee } from '@fortawesome/free-solid-svg-icons'
 *
 * <Icon icon="faCoffee" size="3x" />
 *
 * // 全局倒入
 * // index.tsx 中导入
 * import { library } from '@fortawesome/fontawesome-svg-core'
 * import { fas } from '@fortawesome/free-solid-svg-icons'
 *
 * library.add(fas)
 *
 * // 组件中使用（直接导入即可）
 * <Icon icon="faCoffee" size="3x" />
 *
 *
 * ```
 */
export const Icon: FC<IconProps> = props => {
  // icon-primary
  const { className, theme, ...restProps } = props
  const classes = classNames('v-icon', className, {
    [`icon-${theme}`]: theme,
  })
  return <FontAwesomeIcon className={classes} {...restProps} />
}

export default Icon
