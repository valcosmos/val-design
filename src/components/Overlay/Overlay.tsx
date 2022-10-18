import React, {
  cloneElement,
  CSSProperties,
  FC,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'
import { createPortal } from 'react-dom'

export interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: ReactElement
  style?: CSSProperties
  hasMask?: boolean
  visible?: boolean
  onVisibleChange?: () => void
}

export const Overlay: FC<OverlayProps> = (props) => {
  const { children, visible: prevVisible, hasMask, onVisibleChange } = props

  const [visible, setVisible] = useState(prevVisible || false)

  const overlayRef = useRef(null)

  useEffect(() => {
    if ('visible' in props) {
      setVisible(prevVisible!)
    }
  }, [prevVisible])

  useEffect(() => {
    if (visible) {
      const handleMouseDown = (e: MouseEvent) => {
        const safeNodeList = []

        // 弹窗默认为安全节点
        if (overlayRef.current) {
          safeNodeList.push(overlayRef.current)
        }

        const clickNode = e.target

        for (let index = 0; index < safeNodeList.length; index++) {
          const node = safeNodeList[index]
          if (node && node.contains(clickNode)) {
            return
          }
        }

        onVisibleChange?.(false)
      }
      window.addEventListener('mousedown', handleMouseDown, false)

      return () =>
        window.removeEventListener('mousedown', handleMouseDown, false)
    }
  }, [visible])

  useEffect(() => {
    if (visible && overlayRef.current) {
      const handleKeyDown = (e) => {
        if (!visible) return

        if (e.keyCode === 27) {
          onVisibleChange?.(false)
        }
      }

      window.addEventListener('keydown', handleKeyDown, false)

      return () => window.removeEventListener('keydown', handleKeyDown, false)
    }
  }, [visible && overlayRef.current])

  // 痰喘挂在 第一次 mount  node=真是dom 卸载的时候 node=null

  const overlayRefCallback = useCallback((node) => {
    overlayRef.current = node
  }, [])

  const child: ReactElement | undefined = React.Children.only(children)

  const newChildren = cloneElement(child, {
    ref: overlayRefCallback
  })

  const content = createPortal(newChildren, document.body)

  if (!visible) return null

  return (
    <div>
      {hasMask ? <div></div> : null}
      {content}
    </div>
  )
}

export default Overlay
