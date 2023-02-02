import { fireEvent, render } from '@testing-library/react'
import Alert from './alert'

test('Alert component should work', () => {
  const { getByText } = render(<Alert title="alert" />)
  const element = getByText('alert')
  expect(element).toBeInTheDocument()
  expect(element.className.includes('v-alert')).toBe(true)
})

test('Alert can be closed', () => {
  const onAlertClose = vi.fn()
  const { getByText, container } = render(<Alert title="alert" onClose={onAlertClose} />)
  const alert = getByText('alert')
  expect(alert).toBeInTheDocument()
  fireEvent.click(container.querySelector('.v-alert-close') as HTMLElement)
  expect(onAlertClose).toHaveBeenCalled()
})

test('Alert type should work', () => {
  const { getByText } = render(<Alert title="alert" type={'success'} />)
  const alert = getByText('alert')
  expect(alert).toBeInTheDocument()
  expect(alert.parentElement).toHaveClass('v-alert-success')
})
