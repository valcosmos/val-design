import '../src/styles/index.scss'
import React from 'react'
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
  padding: '20px 40px'
}
export const decorators = [
  (Story) => (
    <div style={styles}>
      <h3>组件演示</h3>
      <Story />
    </div>
  )
]
