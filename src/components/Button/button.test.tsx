import { render } from '@testing-library/react'
import React from 'react'
import Button from './index'

// eslint-disable-next-line no-undef
test('Button component should work', () => {
  const { getByRole } = render(<Button />)
  getByRole('button')
})
