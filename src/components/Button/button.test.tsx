import { fireEvent, render } from '@testing-library/react'
import Button from './index'

it('button component should work', () => {
  const onButtonClick = vi.fn()
  const { getByText } = render(<Button onClick={onButtonClick}>button</Button>)
  const element = getByText('button')
  expect(element).toBeTruthy()
  expect(element).toBeInTheDocument()
  expect(element.tagName).toEqual('BUTTON')
  expect(element.className).toEqual('btn btn-default')
  fireEvent.click(element)
  expect(onButtonClick).toHaveBeenCalled()
})

it('button type and custom class should work', () => {
  const { getByRole } = render(<Button type="primary" className="my-button"></Button>)
  const button = getByRole('button')
  expect(button).toBeInTheDocument()
  expect(button).toHaveClass('btn-primary my-button')
})

it('link button should work', () => {
  const { getByText } = render(
    <Button type="link" href="https://www.myurl.com/">
      link
    </Button>,
  )
  const link = getByText('link') as HTMLLinkElement
  expect(link).toBeInTheDocument()
  expect(link.tagName).toEqual('A')
  expect(link).toHaveClass('btn btn-link')
  expect(link.href).toEqual('https://www.myurl.com/')
})

it('button size should work', () => {
  const { getByRole } = render(<Button size="sm" />)
  const button = getByRole('button')
  expect(button.className.includes('btn-sm')).toBe(true)
})

it('disabled button should work', () => {
  const onButtonClick = vi.fn()
  const { getByRole } = render(
    <Button disabled={true} onClick={onButtonClick}>
      disabled
    </Button>,
  )
  const button = getByRole('button') as HTMLButtonElement
  expect(button.disabled).toBe(true)
  fireEvent.click(button)
  expect(onButtonClick).not.toHaveBeenCalled()
})
