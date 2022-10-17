import React, {
  CSSProperties,
  FC,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useState
} from 'react'
import { createPortal } from 'react-dom'

export interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: ReactNode
  style?: CSSProperties
  hasMask?: boolean
  visible?: boolean
  onVisibleChange?: () => void
}

export const Overlay: FC<OverlayProps> = (props) => {
  const { children, visible: prevVisible, hasMask, onVisibleChange } = props

  const [visible, setVisible] = useState(prevVisible || false)

  useEffect(() => {
    if ('visible' in props) {
      setVisible(prevVisible!)
    }
  }, [prevVisible])

  function handleMouseDown(e) {
    onVisibleChange?.(false)
  }

  useEffect(() => {
    if (visible) {
      window.addEventListener('mousedown', handleMouseDown, false)

      return () =>
        window.removeEventListener('mousedown', handleMouseDown, false)
    }
  }, [visible])

  const content = createPortal(children, document.body)

  if (!visible) return null

  return (
    <div>
      {hasMask ? <div></div> : null}
      {content}
    </div>
  )
}

export default Overlay
