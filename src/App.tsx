import React from 'react'
import Button, { ButtonSize, ButtonType } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
function App() {
  return (
    <div>
      <header className="App-header">
        <Menu defaultIndex={0} mode="vertical">
          <MenuItem index={1}>cool link1</MenuItem>
          <MenuItem index={2} disabled>
            cool link2
          </MenuItem>
          <MenuItem index={3}>cool link3</MenuItem>
        </Menu>

        <div className="btns">
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
            target="_blank"
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
      </header>
    </div>
  )
}

export default App
