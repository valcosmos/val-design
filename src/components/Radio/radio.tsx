import classNames from 'classnames'
import React, {
  CSSProperties,
  FC,
  FormEvent,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'

export interface RadioProps extends HTMLAttributes<HTMLInputElement> {
  value?: string
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (event: FormEvent<HTMLInputElement>) => void
  disabled?: boolean
  className?: string
  children?: ReactNode
  style?: CSSProperties
}

export const Radio: FC<RadioProps> = props => {
  const {
    disabled,

    children,

    onChange,
    value,
  } = props

  const [checked, setChecked] = useState<boolean>(false)

  const inputEl = useRef(null)

  const cls = classNames({
    'v-radio': true,
    'v-radio-checked': checked,
    'v-radio-disabled': disabled,
  })

  const wrapperCls = classNames({
    'v-radio-wrapper': true,
    'v-radio-wrapper-disabled': disabled,
  })

  useEffect(() => {
    if ('checked' in props && props.checked !== checked) setChecked(props.checked as boolean)
  }, [props.checked])

  const handleClick = (event: any) => {
    if (disabled || checked) return

    if (!('checked' in props)) {
      setChecked(true)
    }

    if (typeof onChange === 'function') {
      console.log(inputEl.current)

      event.target = inputEl.current
      onChange(event)
    }
  }

  return (
    <span className={wrapperCls} onClick={handleClick}>
      <span className={cls}>
        <input type="radio" className="v-radio-input" value={value} ref={inputEl} />
        <span className="v-radio-inner" />
      </span>
      <span>{children}</span>
    </span>
  )
}

export default Radio
