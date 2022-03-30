// 处理防抖

import { useState, useEffect } from 'react'

export const useDebounce = (value: any, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    const handler = window.setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    // 当useEffect回调里面 返回一个函数的时候 代表清除，下次update的时候执行
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])
  return debouncedValue
}
