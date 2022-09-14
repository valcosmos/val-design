import React from 'react'

import { ComponentMeta } from '@storybook/react'
import Form from './form'
import FormItem from './formItem'
import Input from '../Input'
import Button from '../Button'

export const Meta: ComponentMeta<typeof Form> = {
  title: 'Form',
  id: 'form',
  component: Form,
  subcomponents: { item: FormItem },
  decorators: [
    (Story) => (
      <div style={{ width: '550px' }}>
        <Story />
      </div>
    )
  ]
}

export default Meta

export const BasicForm = () => (
  <Form>
    <FormItem label="用户名">
      <Input />
    </FormItem>
    <FormItem label="密码">
      <Input type={'password'} />
    </FormItem>
    <FormItem>
      <Input placeholder="NO LABEL" />
    </FormItem>
    <div className="v-form-submit-area">
      <Button htmlType={'submit'} type={'primary'}>
        登录
      </Button>
    </div>
  </Form>
)
