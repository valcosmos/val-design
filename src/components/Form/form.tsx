import React, { createContext, FC, ReactNode } from 'react'
import useStore from './useStore'

export interface FormProps {
  name?: string
  initialValues?: Record<string, any>
  children?: ReactNode
}

export type IFromContext = Pick<
  ReturnType<typeof useStore>,
  'dispatch' | 'fields' | 'validateField'
> &
  Pick<FormProps, 'initialValues'>

export const FormContext = createContext<IFromContext>({} as IFromContext)

export const Form: FC<FormProps> = (props) => {
  const { name, children, initialValues } = props

  const { form, fields, dispatch, validateField } = useStore()

  const passedContext: IFromContext = {
    dispatch,
    fields,
    initialValues,
    validateField
  }

  return (
    <>
      <form name={name} className="v-form">
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
