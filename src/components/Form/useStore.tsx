import { useReducer, useState } from 'react'
import Schema, { RuleItem, ValidateError } from 'async-validator'
import { mapValues, each } from 'lodash-es'

export type CustomRuleFunc = ({
  getFieldValue
}: {
  getFieldValue: (key: string) => string
}) => RuleItem
export type CustomRule = RuleItem | CustomRuleFunc

export interface FieldDetail {
  name: string
  value: string
  rules: RuleItem[]
  isValid: boolean
  errors: ValidateError[]
}
export interface ValidateErrorType extends Error {
  errors: ValidateError[]
  fields: Record<string, ValidateError[]>
}

export interface FieldsState {
  [key: string]: FieldDetail
}

export interface FormState {
  isValid: boolean
  isSubmitting: boolean
  errors: Record<string, ValidateError[]>
}

export interface FieldsAction {
  type: 'addField' | 'updateValue' | 'updateValidateResult'
  name: string
  value: any
}

function fieldsReducer(state: FieldsState, action: FieldsAction): FieldsState {
  switch (action.type) {
    case 'addField':
      return { ...state, [action.name]: { ...action.value } }
    case 'updateValue':
      return {
        ...state,
        [action.name]: { ...state[action.name], value: action.value }
      }
    case 'updateValidateResult':
      // eslint-disable-next-line no-case-declarations
      const { isValid, errors } = action.value
      return {
        ...state,
        [action.name]: { ...state[action.name], isValid, errors }
      }
    default:
      return state
  }
}

function useStore() {
  // form state
  const [form, setForm] = useState<FormState>({
    isValid: true,
    isSubmitting: false,
    errors: {}
  })

  const [fields, dispatch] = useReducer(fieldsReducer, {})

  const getFieldValue = (key: string) => {
    return fields[key] && fields[key].value
  }

  const transformRules = (rules: CustomRule[]) => {
    return rules.map((rule) => {
      if (typeof rule === 'function') {
        const calledRule = rule({ getFieldValue })
        return calledRule
      } else {
        return rule
      }
    })
  }

  const validateField = async (name: string) => {
    const { value, rules } = fields[name]
    const afterRules = transformRules(rules)
    const descriptor = {
      [name]: afterRules
    }
    const valueMap = {
      [name]: value
    }
    const validator = new Schema(descriptor)
    let isValid = true
    let errors: ValidateError[] = []

    try {
      await validator.validate(valueMap)
    } catch (e) {
      isValid = false
      const err = e as any

      console.log('e', err.errors)
      console.log('fields', err.fields)
      errors = err.errors
    } finally {
      console.log('errors', isValid)
      dispatch({
        type: 'updateValidateResult',
        name,
        value: { isValid, errors }
      })
    }
  }

  const validateAllFields = async () => {
    let isValid = true
    let errors: Record<string, ValidateError[]> = {}
    const valueMap = mapValues(fields, (item) => item.value)
    const descriptor = mapValues(fields, (item) => transformRules(item.rules))
    const validator = new Schema(descriptor)
    setForm({ ...form, isSubmitting: true })
    try {
      await validator.validate(valueMap)
    } catch (e) {
      isValid = false
      const err = e as ValidateErrorType
      errors = err.fields
      each(fields, (value, name) => {
        // errors 中有对应的key
        if (errors[name]) {
          const itemErrors = errors[name]
          dispatch({
            type: 'updateValidateResult',
            name,
            value: { isValid: false, errors: itemErrors }
          })
        } else if (value.rules.length > 0 && !errors[name]) {
          // 有对应的rules 并且没有errors

          dispatch({
            type: 'updateValidateResult',
            name,
            value: { isValid: true, errors: [] }
          })
        }
      })
    } finally {
      setForm({ ...form, isSubmitting: false, isValid, errors })
      // eslint-disable-next-line no-unsafe-finally
      return { isValid, errors, values: valueMap }
    }
  }

  return {
    fields,
    dispatch,
    form,
    validateField,
    getFieldValue,
    validateAllFields
  }
}

export default useStore
