import { fireEvent, render } from '@testing-library/react'
import Alert from './alert'

vi.mock('../Icon/icon', () => {
  return {
    default: function Icon(props: any) {
      return <span>{props.icon}</span>
    },
  }
})

it('alert component should work', () => {
  const { getByText } = render(<Alert title="alert" />)
  const element = getByText('alert')
  expect(element).toBeInTheDocument()
  expect(element.className.includes('v-alert')).toBe(true)
})

it('alert can be closed', () => {
  const onAlertClose = vi.fn()
  const { getByText } = render(<Alert title="alert" onClose={onAlertClose} />)
  const alert = getByText('alert')
  expect(alert).toBeInTheDocument()
  fireEvent.click(getByText('times'))
  expect(onAlertClose).toHaveBeenCalled()
})

it('alert type should work', () => {
  const { getByText } = render(<Alert title="alert" type="success" />)
  const alert = getByText('alert')
  expect(alert).toBeInTheDocument()
  expect(alert.parentElement).toHaveClass('v-alert-success')
})
