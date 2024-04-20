import type { CSSProperties, PropsWithChildren, ReactNode } from 'react'
import { useMemo, useRef, useState } from 'react'
import {
  FloatingArrow,
  arrow,
  flip,
  offset,
  useClick,
  useDismiss,
  useFloating,
  useHover,
  useInteractions,
  useTransitionStyles,
} from '@floating-ui/react'
import './index.css'
import { createPortal } from 'react-dom'

type Alignment = 'start' | 'end'
type Side = 'top' | 'right' | 'bottom' | 'left'
type AlignedPlacement = `${Side}-${Alignment}`

const ARROW_WIDTH = 30
const ARROW_HEIGHT = 15

interface PopoverProps extends PropsWithChildren {
  content: ReactNode
  trigger?: 'hover' | 'click'
  placement?: Side | AlignedPlacement
  open?: boolean
  onOpenChange?: (open: boolean) => void
  className?: string
  style?: CSSProperties
}

export function Popover(props: PopoverProps) {
  const {
    open,
    onOpenChange,
    content,
    children,
    trigger = 'hover',
    placement = 'bottom',
    className,
    style,
  } = props

  const arrowRef = useRef(null)

  const [isOpen, setIsOpen] = useState(open)

  const { refs, floatingStyles, context, middlewareData } = useFloating({
    open: isOpen,
    onOpenChange: (open) => {
      setIsOpen(open)
      onOpenChange?.(open)
    },
    placement,
    middleware: [
      offset(10),
      arrow({
        element: arrowRef,
      }),
      flip(),
    ],
  })

  const interaction = trigger === 'hover' ? useHover(context) : useClick(context)

  const dismiss = useDismiss(context)

  const { getReferenceProps, getFloatingProps } = useInteractions([interaction, dismiss])

  const el = useMemo(() => {
    const el = document.createElement('div')
    el.className = `wrapper`

    document.body.appendChild(el)
    return el
  }, [])

  const arrowX = middlewareData.arrow?.x ?? 0
  const arrowY = middlewareData.arrow?.y ?? 0
  const transformX = arrowX + ARROW_WIDTH / 2
  const transformY = arrowY + ARROW_HEIGHT

  const { isMounted, styles } = useTransitionStyles(context, {
    initial: {
      transform: 'scale(0)',
    },
    common: ({ side }) => ({
      transformOrigin: {
        top: `${transformX}px calc(100% + ${ARROW_HEIGHT}px)`,
        bottom: `${transformX}px ${-ARROW_HEIGHT}px`,
        left: `calc(100% + ${ARROW_HEIGHT}px) ${transformY}px`,
        right: `${-ARROW_HEIGHT}px ${transformY}px`,
      }[side],
    }),
  })

  const floating = isMounted && (
    <div ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
      <div style={styles} className="popover-floating">
        {content}
        <FloatingArrow ref={arrowRef} context={context} fill="#fff" stroke="#000" strokeWidth={1} />
      </div>
    </div>
  )

  return (
    <>
      <span ref={refs.setReference} {...getReferenceProps()} className={className} style={style}>
        {children}
      </span>
      {createPortal(floating, el)}
    </>
  )
}

export default Popover
