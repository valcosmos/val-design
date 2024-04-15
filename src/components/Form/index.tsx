import type { FC } from 'react'
import Form from './form'
import type { FormItemProps } from './formItem'
import FormItem from './formItem'

export type IFormComponent = typeof Form & {
  Item: FC<FormItemProps>
}

const TransForm: IFormComponent = Form as IFormComponent
TransForm.Item = FormItem

export default TransForm
