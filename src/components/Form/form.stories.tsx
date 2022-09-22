import React from 'react'

import { ComponentMeta } from '@storybook/react'
import Form from './form'
import FormItem from './formItem'
import Input from '../Input'
import Button from '../Button'
import { CustomRule } from './useStore'

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

const ConfirmRules: CustomRule[] = [
  { type: 'string', required: true, min: 3, max: 8 },

  ({ getFieldValue }) => ({
    asyncValidator(rule, value) {
      console.log('the value', getFieldValue('password'))
      console.log(value)
      if (value !== getFieldValue('password')) {
        return Promise.reject(
          'The Two passwords that you entered do not match!'
        )
      }
      return Promise.resolve()
    }
  })
]

export const BasicForm = () => (
  <Form>
    <FormItem name={'username'} label="用户名" rules={[{ required: true }]}>
      <Input />
    </FormItem>
    <FormItem name={'password'} label="密码" rules={[{ required: true }]}>
      <Input type={'password'} />
    </FormItem>
    <FormItem name={'confirmPwd'} label="重复" rules={ConfirmRules}>
      <Input type={'password'} />
    </FormItem>
    <div className="v-form-submit-area">
      <Button htmlType={'submit'} type={'primary'}>
        登录
      </Button>
    </div>
  </Form>
)
