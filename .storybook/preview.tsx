import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

import '../src/styles/index.scss'

library.add(fas)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

const styles: React.CSSProperties = {
  // textAlign: 'center',
  padding: '20px'
}
export const decorators = [
  (Story) => (
    <div style={styles}>
      <h3 style={{ marginBottom: '20px' }}>组件演示</h3>
      <Story />
    </div>
  )
]
