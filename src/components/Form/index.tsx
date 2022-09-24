import { FC } from 'react'
import Form from './form'
import FormItem, { FormItemProps } from './formItem'

export type IFormComponent = typeof Form & {
  Item: FC<FormItemProps>
}

const TransForm: IFormComponent = Form as IFormComponent
TransForm.Item = FormItem

export default TransForm
