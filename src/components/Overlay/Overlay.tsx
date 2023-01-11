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
import { getPlacement } from './placement'
import { useListener } from './utils'

export interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: ReactElement
  style?: CSSProperties
  hasMask?: boolean
  visible?: boolean
  onVisibleChange?: (visible: boolean) => void
  target?: HTMLElement
}

export const Overlay: FC<OverlayProps> = (props) => {
  const { children, target, visible: prevVisible, hasMask, onVisibleChange } = props

  const [visible, setVisible] = useState(prevVisible || false)

  const overlayRef = useRef<ReactNode | null>(null)

  useEffect(() => {
    if ('visible' in props) {
      setVisible(prevVisible!)
    }
  }, [prevVisible])

  // useEffect(() => {
  //   if (visible) {
  //     const handleMouseDown = (e: MouseEvent) => {
  //       const safeNodeList: any[] = []
  //       // 弹窗默认为安全节点
  //       if (overlayRef.current) {
  //         safeNodeList.push(overlayRef.current)
  //       }

  //       const clickNode = e.target

  //       for (let index = 0; index < safeNodeList.length; index++) {
  //         const node = safeNodeList[index]
  //         if (node && node.contains(clickNode)) {
  //           return
  //         }
  //       }

  //       onVisibleChange?.(false)
  //     }
  //     window.addEventListener('mousedown', handleMouseDown, false)

  //     return () => window.removeEventListener('mousedown', handleMouseDown, false)
  //   }
  // }, [visible])

  // useEffect(() => {
  //   if (visible && overlayRef.current) {
  //     const handleKeyDown = (e: KeyboardEvent) => {
  //       if (!visible) return

  //       if (e.key === 'Escape') {
  //         onVisibleChange?.(false)
  //       }
  //     }

  //     window.addEventListener('keydown', handleKeyDown, false)

  //     return () => window.removeEventListener('keydown', handleKeyDown, false)
  //   }
  // }, [visible && overlayRef.current])

  const handleMouseDown = (e: MouseEvent) => {
    const safeNodeList: any[] = []
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
  const handleKeyDown = (e: KeyboardEvent) => {
    if (!visible || !overlayRef.current) return

    if (e.key === 'Escape') {
      onVisibleChange?.(false)
    }
  }

  useListener(window, 'mousedown', handleMouseDown, visible)
  useListener(window, 'keydown', handleKeyDown, visible)

  // 弹窗挂在 第一次 mount  node=真是dom 卸载的时候 node=null
  const overlayRefCallback = useCallback((node: ReactNode) => {
    overlayRef.current = node
    if (node && target) {
      const positionStyle = getPlacement({ target: target })
      console.log(positionStyle)
    }
  }, [])

  const child: ReactElement | undefined = React.Children.only(children)

  const newChildren = cloneElement(child as ReactElement, {
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
