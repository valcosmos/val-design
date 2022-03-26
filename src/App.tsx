import React from 'react'
import Button, { ButtonSize, ButtonType } from './components/Button/button'

function App() {
  return (
    <div>
      <Button>Hello</Button>
      <Button disabled>disabled Button</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        Hello
      </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
        Hello
      </Button>
      <Button
        btnType={ButtonType.Link}
        size={ButtonSize.Small}
        href="https://valzt.cn"
        target='_blank'
      >
        valzt.cn
      </Button>
      <Button
        btnType={ButtonType.Link}
        disabled
        size={ButtonSize.Small}
        href="https://valzt.cn"
      >
        valzt.cn
      </Button>
    </div>
  )
}

export default App
