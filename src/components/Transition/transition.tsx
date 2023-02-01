import React, { ReactNode } from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

type AnimationName =
  | 'zoom-in-top'
  | 'zoom-in-left'
  | 'zoom-in-bottom'
  | 'zoom-in-right'
  | 'slide-in-top'

// interface TransitionProps extends CSSTransitionProps {
//   animation?: AnimationName
// }

type TransitionProps = CSSTransitionProps & {
  /**
   * 动画名称
   */
  animation: AnimationName
  /**
   * 动画结束后，元素保留的时间
   */
  timeout: number
  /**
   * 元素是否需要包裹
   */
  wrapper?: boolean
  /**
   * 子元素
   */
  children?: ReactNode | string
}

export const Transition: React.FC<TransitionProps> = props => {
  const { children, classNames, animation, wrapper, ...restProps } = props
  return (
    <CSSTransition classNames={classNames || animation} {...restProps}>
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  )
}

Transition.defaultProps = {
  unmountOnExit: true,
  appear: true,
}

export default Transition
