import type { ReactNode } from 'react'
import React, { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import type { CSSTransitionProps } from 'react-transition-group/CSSTransition'

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

export const Transition: React.FC<TransitionProps> = (props) => {
  const { children, classNames, animation, wrapper, unmountOnExit = true, appear = true, ...restProps } = props
  const nodeRef = useRef(null)

  return (
    <CSSTransition
      nodeRef={nodeRef}
      classNames={classNames || animation}
      unmountOnExit={unmountOnExit}
      appear={appear}
      {...restProps}
    >
      {wrapper ? <div ref={nodeRef}>{children}</div> : children}
    </CSSTransition>
  )
}

// Transition.defaultProps = {
//   unmountOnExit: true,
//   appear: true,
// }

export default Transition
