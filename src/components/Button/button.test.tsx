import { render } from '@testing-library/react'
import React from 'react'
import Button from './index'

test('Button component should work', () => {
  const { getByText } = render(<Button>button</Button>)
  const element = getByText('button')
  expect(element).toBeTruthy()
  expect(element.tagName).toEqual('BUTTON')
  expect(element.className).toEqual('btn btn-default')
})

test('Button type should work', () => {
  const { getByRole } = render(<Button type="primary"></Button>)
  const button = getByRole('button')
  expect(button.classList.contains('btn-primary'))
})

test('Button size should work', () => {
  const { getByRole } = render(<Button size="sm" />)
  const button = getByRole('button')
  expect(button.classList.contains('btn-sm'))
})

test('Button children should work', () => {
  const { getByText } = render(<Button>Button</Button>)
  getByText('Button')
})
