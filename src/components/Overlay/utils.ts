import { useEffect } from 'react'

export function useListener(
  node: (Window & typeof globalThis) | HTMLElement,
  eventName: string,
  callback: EventListenerOrEventListenerObject,
  condition: boolean,
) {
  useEffect(() => {
    if (condition) {
      node.addEventListener(eventName, callback, false)
      return () => {
        node.removeEventListener(eventName, callback, false)
      }
    }
  }, [condition])
}
