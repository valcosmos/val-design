import React, { useRef, useState } from 'react'

import { ComponentMeta } from '@storybook/react'
import Form, { FormProps, IFormRef } from './form'
import Item from './formItem'
import Input from '../Input'
import Button from '../Button'
import { CustomRule } from './useStore'

const Meta: ComponentMeta<typeof Form> = {
  title: 'Data Entry/Form 组件',
  id: 'Form',
  component: Form,
  subcomponents: { Item: Item },
  decorators: [
    (Story) => (
      <div style={{ width: '550px' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  }
}
export default Meta

const confirmRules: CustomRule[] = [
  { type: 'string', required: true, min: 3, max: 8 },
  ({ getFieldValue }) => ({
    asyncValidator(rule, value) {
      console.log('the value', getFieldValue('password'))
      console.log(value)
      return new Promise((resolve, reject) => {
        if (value !== getFieldValue('password')) {
          reject('The two passwords that you entered do not match!')
        }
        setTimeout(() => {
          resolve()
        }, 1000)
      })
    }
  })
]
export const ABasicForm = (args: FormProps) => {
  return (
    <Form {...args}>
      <Item
        label="用户名"
        name="name"
        rules={[{ type: 'string', required: true, min: 3 }]}
      >
        <Input />
      </Item>
      <Item
        label="密码"
        name="password"
        rules={[{ type: 'string', required: true, min: 3, max: 8 }]}
      >
        <Input type="password" />
      </Item>
      <div className="v-form-submit-area">
        <Button htmlType="submit" btnType="primary">
          登陆
        </Button>
      </div>
    </Form>
  )
}
ABasicForm.storyName = 'Basic form'

export const BRegForm = (args: FormProps) => {
  const initialValues = {
    agreement: false
  }
  return (
    <Form {...args} initialValues={initialValues}>
      <Item
        label="邮件"
        name="email"
        rules={[{ type: 'email', required: true }]}
      >
        <Input />
      </Item>
      <Item
        label="密码"
        name="password"
        rules={[{ type: 'string', required: true, min: 3, max: 8 }]}
      >
        <Input type="password" />
      </Item>

      <div
        className="agreement-section"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <Item
          name="agreement"
          rules={[{ type: 'enum', enum: [true], message: '请同意协议' }]}
          getValueFromEvent={(e) => e.target.checked}
          valuePropName="checked"
        >
          <input type="checkbox" />
        </Item>
        <span className="agree-text">
          注册即代表你同意<a href="#">用户协议</a>
        </span>
      </div>
      <div className="v-form-submit-area">
        <Button htmlType="submit" btnType="primary">
          登陆
        </Button>
      </div>
    </Form>
  )
}
BRegForm.storyName = 'Register form'

export const CFullForm = (args: any) => {
  const ref = useRef<IFormRef>()
  const resetAll = () => {
    console.log('form ref', ref.current)
    console.log('get value', ref.current?.getFieldValue('username'))
    ref.current?.resetFields()
  }
  interface InitialProps {
    username: string
    password: string
    confirmPwd: string
    agreement: boolean
  }
  const [initialValue] = useState<InitialProps>({
    username: 'Cupid Valentine',
    password: '123',
    confirmPwd: '123',
    agreement: false
  })
  return (
    <Form initialValues={initialValue} {...args} ref={ref}>
      {({ isValid, isSubmitting }) => (
        <>
          <Item
            label="用户名"
            name="username"
            rules={[{ type: 'email', required: true }]}
          >
            <Input />
          </Item>
          <Item
            label="密码"
            name="password"
            rules={[{ type: 'string', required: true, min: 3, max: 8 }]}
          >
            <Input type="password" />
          </Item>
          <Item label="重复密码" name="confirmPwd" rules={confirmRules}>
            <Input type="password" />
          </Item>
          <div
            className="agreement-section"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Item
              name="agreement"
              valuePropName="checked"
              getValueFromEvent={(e) => e.target.checked}
              rules={[{ type: 'enum', enum: [true], message: '请同意协议' }]}
            >
              <input type="checkbox" />
            </Item>
            <span className="agree-text">
              注册即代表你同意<a href="#">用户协议</a>
            </span>
          </div>
          <div className="v-form-submit-area">
            <Button htmlType="submit" btnType="primary">
              登陆 {isSubmitting ? '验证中' : '验证完毕'}{' '}
              {isValid ? '通过😄' : '没通过😢'}{' '}
            </Button>
            <Button htmlType="button" onClick={resetAll}>
              重置
            </Button>
          </div>
        </>
      )}
    </Form>
  )
}

CFullForm.storyName = 'Custom rules'
