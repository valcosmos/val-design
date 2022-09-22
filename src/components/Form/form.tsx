import React, { createContext, FC, FormEvent, ReactNode } from 'react'

import useStore from './useStore'
import { ValidateError } from 'async-validator'

export interface FormProps {
  name?: string
  initialValues?: Record<string, any>
  children?: ReactNode
  onFinish?: (value: Record<string, any>) => void
  onFinishFailed: (
    value: Record<string, any>,
    errors: Record<string, ValidateError[]>
  ) => void
}

export type IFromContext = Pick<
  ReturnType<typeof useStore>,
  'dispatch' | 'fields' | 'validateField'
> &
  Pick<FormProps, 'initialValues'>

export const FormContext = createContext<IFromContext>({} as IFromContext)

export const Form: FC<FormProps> = (props) => {
  const { name, children, initialValues, onFinish, onFinishFailed } = props

  const { form, fields, dispatch, validateField, validateAllFields } =
    useStore()

  const passedContext: IFromContext = {
    dispatch,
    fields,
    initialValues,
    validateField
  }

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()
    const { isValid, errors, values } = await validateAllFields()
    if (isValid && onFinish) {
      onFinish(values)
    } else if (!isValid && onFinishFailed) {
      onFinishFailed(values, errors)
    }
  }

  return (
    <>
      <form name={name} className="v-form" onSubmit={submitForm}>
        <FormContext.Provider value={passedContext}>
          {children}
        </FormContext.Provider>
      </form>
      <div>
        <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(fields)}</pre>
        <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(form)}</pre>
      </div>
    </>
  )
}

Form.defaultProps = {
  name: 'v_form'
}

export default Form
