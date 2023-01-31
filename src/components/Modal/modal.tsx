import React, { CSSProperties, FC, ReactNode } from 'react'
import { animated, useTransition } from '@react-spring/web'

interface ModalProps {
  open?: boolean
  centered?: boolean
  title?: string | ReactNode
  children?: ReactNode
  onCancel?: (isOpen: boolean) => void
}

export const Modal: FC<ModalProps> = ({ open, onCancel, centered, children, title }) => {
  const transition = useTransition(open, {
    from: {
      // scale: 0,
      transform: 'translate3d(0, -20px, 0)',
      opacity: 0
    },
    enter: {
      // scale: 1,
      transform: 'translate3d(0, 0, 0)',
      opacity: 1
    },
    leave: {
      // scale: 0,
      transform: 'translate3d(0, -20px, 0)',
      opacity: 0
    }
    // config: { duration: 500 }
  })

  const centerStyle: CSSProperties = {
    position: 'fixed',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const onMaskClick = () => {
    onCancel?.(false)
  }

  return (
    <>
      {transition((style, open) => (
        <div className="v-modal-root" style={open && centered ? centerStyle : undefined}>
          {open && (
            <animated.div
              style={{ opacity: style.opacity }}
              className="v-modal-mask"
              onClick={onMaskClick}
            ></animated.div>
          )}
          {open && (
            <animated.div style={{ ...style, position: 'relative', zIndex: 1000 }}>
              <div className="v-modal-wrap" style={!centered ? { marginTop: '100px' } : undefined}>
                <div className="v-modal">
                  <div className="v-modal-content">
                    <div className="v-modal-header">{title}</div>
                    <div className="v-modal-body">{children}</div>
                    <div className="v-modal-footer"></div>
                  </div>
                </div>
              </div>
            </animated.div>
          )}
        </div>
      ))}
    </>
  )
}

export default Modal
