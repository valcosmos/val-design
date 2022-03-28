import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from './components/Button/button'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
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
        <div>
          <Icon icon="check"></Icon>
        </div>
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
          <Button btnType="primary" size="large">
            Hello
          </Button>
          <Button btnType="danger" size="small">
            Hello
          </Button>
          <Button
            btnType="link"
            size="small"
            href="https://valzt.cn"
            target="_blank"
          >
            valzt.cn
          </Button>
          <Button btnType="link" disabled size="small" href="https://valzt.cn">
            valzt.cn
          </Button>
        </div>
      </header>
      <Button
        size="large"
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
