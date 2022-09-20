import { RuleItem } from 'async-validator'
import classNames from 'classnames'
import React, { FC, ReactNode, useContext, useEffect } from 'react'
import { FormContext } from './form'

export type SomeRequired<T, K extends keyof T> = Required<Pick<T, K>> &
  Omit<T, K>

export interface FormItemProps {
  name: string
  label?: string
  children?: ReactNode
  valuePropName?: string
  // 什么时候更新
  trigger?: string
  rules?: RuleItem[]
  getValueFormEvent?: (event: any) => any
  validateTrigger?: string
}

export const FormItem: FC<FormItemProps> = (props) => {
  const {
    label,
    children,
    name,
    valuePropName,
    trigger,
    getValueFormEvent,
    rules,
    validateTrigger
  } = props as SomeRequired<
    FormItemProps,
    'getValueFormEvent' | 'trigger' | 'valuePropName' | 'validateTrigger'
  >
  const { dispatch, fields, initialValues, validateField } =
    useContext(FormContext)
  const rowClass = classNames('v-row', { 'v-row-no-label': !label })

  useEffect(() => {
    const value = (initialValues && initialValues[name]) || ''
    dispatch({ type: 'addField', name, value: { label, name, value, rules } })
  }, [])

  // 获取对应store中的value
  const fieldState = fields[name]
  const value = fieldState && fieldState.value
  const errors = fieldState && fieldState.errors
  const isRequired = rules?.some((rule) => rule.required)
  const hasError = errors && errors.length > 0

  const labelClass = classNames({ 'v-form-item-required': isRequired })

  const itemClass = classNames('v-form-item-control', {
    'v-form-item-has-error': hasError
  })

  const onValueUpdate = (e: any) => {
    const value = getValueFormEvent(e)
    dispatch({ type: 'updateValue', name, value })
  }

  const onValueValidate = async () => {
    await validateField(name)
  }
  // 手动的创建一个属性列表，束腰有 value 以及 onChange 属性
  const controlProps: Record<string, any> = {}
  controlProps[valuePropName] = value
  controlProps[trigger] = onValueUpdate

  if (rules) {
    controlProps[validateTrigger] = onValueValidate
  }
  // 获取children数组的第一个元素
  const childList = React.Children.toArray(children)
  // todo 判断children类型 显示警告
  // 没有子组件
  if (childList.length === 0) {
    console.error(
      'No child element found in Form.Item, please provide one form component'
    )
  }
  // 子组件大于一个
  if (childList.length > 1) {
    console.warn(
      'Only support one child element in Form.Item, others will be omitted'
    )
  }
  // 不是 React Element的子组件
  if (!React.isValidElement(childList[0])) {
    console.error('Child component is not a valid React Element')
  }
  const child = childList[0] as React.ReactElement
  // clone Element 混合child 以及手动的属性列表
  const returnChildNode = React.cloneElement(child, {
    ...child.props,
    ...controlProps
  })

  return (
    <div className={rowClass}>
      {label && (
        <div className="v-form-item-label">
          <label title={label} className={labelClass}>
            {label}
          </label>
        </div>
      )}
      <div className="v-form-item">
        <div className={itemClass}>{returnChildNode}</div>
        {hasError && (
          <div className="v-form-item-explain">
            <span>{errors[0].message}</span>
          </div>
        )}
      </div>
    </div>
  )
}

FormItem.defaultProps = {
  valuePropName: 'value',
  trigger: 'onChange',
  validateTrigger: 'onBlur',
  getValueFormEvent: (e) => e.target.value
}
export default FormItem
