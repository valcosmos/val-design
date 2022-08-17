import { render } from '@testing-library/react'
import React from 'react'
import Button from './index'

test('Button component should work', () => {
  const { getByRole } = render(<Button />)
  getByRole('button')
})
