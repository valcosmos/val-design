import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Button, ButtonProps } from './button'

test('our first react test case', () => {
  // render 作用是 渲染到真实的dom上去
  render(<Button>Nice</Button>)
  // console.log(
  //   '🚀 ~ file: button.test.tsx ~ line 8 ~ test ~ queryByText',
  //   queryByText
  // )
  // 获取这个dom
  const element = screen.queryByText('Nice')
  // 查看该元素是否存在
  expect(element).toBeTruthy()
  // 判断组件是否存在文档中
  expect(element).toBeInTheDocument()
})

const defaultProps = {
  // 创建被监控的模拟函数
  onClick: jest.fn()
}

const testProps: ButtonProps = {
  type: 'primary',
  size: 'lg',
  className: 'klass'
}

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn()
}

// 分类
describe('test Button Component', () => {
  // 第一个用例 test 或者 it
  it('should render the correct default button', () => {
    render(<Button {...defaultProps}>Nice</Button>)
    const element = screen.getByText('Nice') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    // 测试是否为button
    expect(element.tagName).toEqual('BUTTON')
    // 有没有对应的className
    expect(element).toHaveClass('btn btn-default')
    // 判断按钮是否没有被禁用
    expect(element.disabled).toBeFalsy()
    // 调用事件
    fireEvent.click(element)
    // 事件是否被调用
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
  it('should render the correct component based on different props', () => {
    render(<Button {...testProps}>Nice</Button>)
    const element = screen.getByText('Nice')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn-primary btn-lg klass')
  })
  it('should render a link when type equals link and href is provided', () => {
    render(
      <Button type="link" href="https:valzt.cn">
        Link
      </Button>
    )
    const element = screen.getByText('Link')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn btn-link')
  })

  it('should render disabled button when disabled set to true', () => {
    render(<Button {...disabledProps}>disabled btn</Button>)
    const element = screen.getByText('disabled btn') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  })
})
