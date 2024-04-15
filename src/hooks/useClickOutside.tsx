// 点击其它区域，关闭下拉菜单

import type { RefObject } from 'react'
import { useEffect } from 'react'

export function useClickOutside(ref: RefObject<HTMLElement>, handler: (event: Event) => void) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as HTMLElement))
        return

      handler(event)
    }
    document.addEventListener('click', listener)
    return () => {
      document.removeEventListener('click', listener)
    }
  }, [ref, handler])
}
