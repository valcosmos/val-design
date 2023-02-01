import React, {
  ChangeEvent,
  FC,
  ReactElement,
  useEffect,
  useState,
  KeyboardEvent,
  useRef,
} from 'react'

import Icon from '../Icon'

import Transition from '../Transition'

import Input, { InputProps } from '../Input'

import { useDebounce } from '../../hooks/useDebounce'

import { useClickOutside } from '../../hooks/useClickOutside'

import classNames from 'classnames'

/**
 * 用于处理复杂数据结构 eg:{value:'11', key:'22'}
 * 用户可自定义
 */
interface DataSourceObject {
  value: string
}

/**
 * 传递一个范型 T, 默认为{}, 返回 传入的T & DataSourceObject
 */
export type DataSourceType<T = Record<string, unknown>> = T & DataSourceObject

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  /**
   *
   */
  fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>
  /**
   * 点击选择项的回调
   */
  onSelect?: (item: DataSourceType) => void
  /**
   * 自定义模板
   */
  renderOptions?: (item: DataSourceType) => ReactElement
}

/**
 * > AutoComplete 输入框自动完成功能，需要输入建议/辅助提示。
 *
 * ### 引入方法
 *
 * ```js
 *
 * import { AutoComplete } from 'val-design'
 *
 * ```
 */
export const AutoComplete: FC<AutoCompleteProps> = props => {
  const { fetchSuggestions, onSelect, value, renderOptions, ...restProps } = props
  // 输入的搜索关键字
  const [inputValue, setInputValue] = useState((value as string) || '')
  // 过滤之后的数据
  const [suggestions, setSuggestions] = useState<DataSourceType[]>([])
  // 发起异步请求之后的loading
  const [loading, setLoading] = useState<boolean>(false)
  // 控制高亮
  const [highlightIndex, setHighlightIndex] = useState(-1)
  // 操作键盘事件的时候，阻止列表再次请求
  const triggerSearch = useRef(false)
  // 点击其它区域，关闭列表
  const componentRef = useRef<HTMLDivElement>(null)
  // 防抖
  const debouncedValue = useDebounce(inputValue, 500)

  // 是否显示dropdown
  const [showDropdown, setShowDropdown] = useState(false)

  useClickOutside(componentRef, () => {
    setSuggestions([])
  })
  useEffect(() => {
    // 当value存在，更新value 和 suggestions list
    if (debouncedValue && triggerSearch.current) {
      const results = fetchSuggestions(debouncedValue)
      if (results instanceof Promise) {
        setLoading(true)
        results.then(data => {
          setSuggestions(data)
          setLoading(false)
          if (data.length > 0) {
            setShowDropdown(true)
          }
        })
      } else {
        setSuggestions(results)
        setShowDropdown(true)
      }
    } else {
      setSuggestions([])
      setShowDropdown(false)
    }

    // 加载成功后取消高亮
    setHighlightIndex(-1)
  }, [debouncedValue])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setInputValue(value)
    triggerSearch.current = true
  }

  const handleSelect = (item: DataSourceType) => {
    setInputValue(item.value)
    setSuggestions([])
    if (onSelect) {
      onSelect(item)
    }
    triggerSearch.current = false
  }
  const highlight = (index: number) => {
    if (index < 0) index = 0
    if (index >= suggestions.length) {
      index = suggestions.length - 1
    }
    setHighlightIndex(index)
  }
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'Enter':
        suggestions[highlightIndex] && handleSelect(suggestions[highlightIndex])
        break
      case 'ArrowUp':
        highlight(highlightIndex - 1)
        break
      case 'ArrowDown':
        highlight(highlightIndex + 1)
        break
      case 'Escape':
        setSuggestions([])
        break
      default:
        break
    }
  }

  // render template
  const renderTemplate = (item: DataSourceType) => {
    return renderOptions ? renderOptions(item) : item.value
  }

  // dropdown
  const generateDropdown = () => {
    return (
      <Transition
        in={showDropdown || loading}
        animation="zoom-in-top"
        timeout={300}
        onExited={() => {
          setSuggestions([])
        }}
      >
        <ul
          className={classNames({
            'v-suggestion-list': suggestions.length > 0 || loading,
          })}
        >
          {loading && (
            <div className="suggstions-loading-icon">
              <Icon icon="spinner" spin />
            </div>
          )}
          {suggestions.map((item, index) => {
            const cnames = classNames('suggestion-item', {
              'is-active': index === highlightIndex,
            })
            return (
              <li key={index} className={cnames} onClick={() => handleSelect(item)}>
                {renderTemplate(item)}
              </li>
            )
          })}
        </ul>
      </Transition>
    )
  }

  return (
    <div className="v-auto-complete" ref={componentRef}>
      <Input
        {...restProps}
        value={inputValue}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      ></Input>
      {/* {loading && (
        <ul>
          <Icon icon={'spinner'} spin></Icon>
        </ul>
      )} */}
      {generateDropdown()}
    </div>
  )
}

export default AutoComplete
