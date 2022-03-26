import React, { useState } from 'react'
import Button, { ButtonSize, ButtonType } from './components/Button/button'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Icon from './components/Icon/icon'
import Transition from './components/Transition/transition'
library.add(fas)

function App() {
  const [show, setShow] = useState(false)
  return (
    <div>
      <header className="App-header">
        <Icon icon="coffee" theme="primary" size="10x"></Icon>
        <Menu defaultIndex={'0'} defaultOpenSubMenus={['2']}>
          <MenuItem>cool link1</MenuItem>
          <MenuItem disabled>cool link2</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>dropdown1</MenuItem>
            <MenuItem>dropdown2</MenuItem>
            <MenuItem>dropdown3</MenuItem>
          </SubMenu>
          <MenuItem>cool link3</MenuItem>
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
      <Button
        size={ButtonSize.Large}
        onClick={() => {
          setShow(!show)
        }}
      >
        Toggle
      </Button>
      <Transition in={show} timeout={300} animation="zoom-in-left" wrapper>
        <p>aaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaa</p>
      </Transition>
    </div>
  )
}

export default App
