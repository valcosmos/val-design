import type { FormEvent, ReactNode } from 'react'
import React, { createContext, forwardRef, useImperativeHandle } from 'react'

import type { ValidateError } from 'async-validator'
import type { FormState } from './useStore'
import useStore from './useStore'

export type RenderProps = (form: FormState) => ReactNode

export interface FormProps {
  name?: string
  initialValues?: Record<string, any>
  children?: ReactNode | RenderProps
  onFinish?: (value: Record<string, any>) => void
  onFinishFailed: (value: Record<string, any>, errors: Record<string, ValidateError[]>) => void
}

export type IFromContext = Pick<
  ReturnType<typeof useStore>,
  'dispatch' | 'fields' | 'validateField'
> &
Pick<FormProps, 'initialValues'>

export const FormContext = createContext<IFromContext>({} as IFromContext)

export type IFormRef = Omit<ReturnType<typeof useStore>, 'fields' | 'dispatch' | 'form'>

export const Form = forwardRef<IFormRef, FormProps>((props, ref) => {
  const { name, children, initialValues, onFinish, onFinishFailed } = props

  const { form, fields, dispatch, ...restProps } = useStore(initialValues)

  const { validateField, validateAllFields } = restProps

  useImperativeHandle(ref, () => ({ ...restProps }))

  const passedContext: IFromContext = {
    dispatch,
    fields,
    initialValues,
    validateField,
  }

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()
    const { isValid, errors, values } = await validateAllFields()
    if (isValid && onFinish)
      onFinish(values)
    else if (!isValid && onFinishFailed)
      onFinishFailed(values, errors)
  }

  let childrenNode: ReactNode
  if (typeof children === 'function')
    childrenNode = children(form)
  else
    childrenNode = children

  return (
    <>
      <form name={name} className="v-form" onSubmit={submitForm}>
        <FormContext.Provider value={passedContext}>{childrenNode}</FormContext.Provider>
      </form>
      {/* for test */}
      {/* <div>
        <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(fields)}</pre>
        <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(form)}</pre>
      </div> */}
    </>
  )
})

Form.displayName = 'v_form'
Form.defaultProps = {
  name: 'v_form',
}

export default Form
