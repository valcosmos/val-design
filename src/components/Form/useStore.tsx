import { useReducer, useState } from 'react'

export interface FieldDetail {
  name: string
  value: string
  rules: any[]
  isValid: boolean
  errors: any[]
}

export interface FieldsState {
  [key: string]: FieldDetail
}

export interface FormState {
  isValid: boolean
}

export interface FieldsAction {
  type: 'addField'
  name: string
  value: any
}

function fieldsReducer(state: FieldsState, action: FieldsAction): FieldsState {
  switch (action.type) {
    case 'addField':
      return { ...state, [action.name]: { ...action.value } }

    default:
      return state
  }
}

function useStore() {
  // form state
  const [form, setForm] = useState<FormState>({ isValid: true })

  const [fields, dispatch] = useReducer(fieldsReducer, {})

  return {
    fields,
    dispatch,
    form
  }
}

export default useStore
