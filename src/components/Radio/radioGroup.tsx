import classNames from 'classnames'
import React, {
  Children,
  cloneElement,
  CSSProperties,
  FC,
  FormEvent,
  HTMLAttributes,
  ReactNode,
  useState,
} from 'react'
import Radio from './radio'

export interface RadioGroupProps extends HTMLAttributes<HTMLInputElement> {
  value?: string
  defaultValue?: string
  onChange?: (event: FormEvent<HTMLInputElement>) => void
  disabled?: boolean
  className?: string
  children?: ReactNode
  style?: CSSProperties
}

export const RadioGroup: FC<RadioGroupProps> = props => {
  const { disabled, children } = props

  const [value, setValue] = useState(props.defaultValue || props.value)
  const cls = classNames({
    'v-radio-group': true,
  })

  const handleClick = (e: any) => {
    const value = e.target.value
    setValue(value)
  }

  const newChildren = Children.map(children, (child: any) => {
    if (child.type !== Radio) return null
    return cloneElement(child, {
      checked: child.props.value === value,
      disabled: disabled,
      onChange: handleClick,
    })
  })

  return <span className={cls}>{newChildren}</span>
}

export default RadioGroup
