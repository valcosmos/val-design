import React from 'react'
import { config } from 'react-transition-group'
import { render, fireEvent, screen } from '@testing-library/react'

import Alert, { AlertProps } from './alert'
config.disabled = true

jest.mock('../Icon/icon', () => {
  return (props: any) => {
    return <span>{props.icon}</span>
  }
})

const testProps: AlertProps = {
  title: 'title',
  onClose: jest.fn()
}

const typeProps: AlertProps = {
  ...testProps,
  type: 'success',
  description: 'hello',
  closable: false
}
describe('test Alert Component', () => {
  it('should render the correct default Alert', () => {
    const { getByText, queryByText } = render(<Alert {...testProps} />)
    const alert = screen.queryByText('title')
    expect(alert).toBeInTheDocument()
    // eslint-disable-next-line testing-library/no-container
    // expect(container.querySelector('.v-alert')).toHaveClass('v-alert-default')
    // eslint-disable-next-line testing-library/prefer-screen-queries
    fireEvent.click(getByText('times'))
    expect(testProps.onClose).toHaveBeenCalled()
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(queryByText('title')).not.toBeInTheDocument()
  })
  it('should render the correct Alert based on different type and description', () => {
    const { queryByText } = render(<Alert {...typeProps} />)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(queryByText('title')).toHaveClass('bold-title')
    // eslint-disable-next-line testing-library/no-container
    // expect(container.querySelector('.v-alert')).toHaveClass('v-alert-success')
    // eslint-disable-next-line testing-library/prefer-screen-queries
    // expect(queryByText('hello')).toBeInTheDocument()
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(queryByText('times')).not.toBeInTheDocument()
  })
})
