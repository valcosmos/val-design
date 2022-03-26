import React from 'react'

import {
  cleanup,
  fireEvent,
  render,
  RenderResult,
  screen,
  waitFor
} from '@testing-library/react'

import Menu, { MenuProps } from './menu'
import MenuItem from './menuItem'
import SubMenu from './subMenu'

const testProps: MenuProps = {
  defaultIndex: '0',
  onSelect: jest.fn(),
  className: 'test'
}

const testVerticalProps: MenuProps = {
  defaultIndex: '0',
  mode: 'vertical'
}

const generateMenu = (props: MenuProps) => (
  <Menu {...props}>
    <MenuItem index={'0'}>active</MenuItem>
    <MenuItem index={'1'} disabled>
      disabled
    </MenuItem>
    <MenuItem index={'2'}>xyz</MenuItem>
    <SubMenu title="dropdown">
      <MenuItem>drop1</MenuItem>
    </SubMenu>
  </Menu>
)

let wrapper: RenderResult,
  menuElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement

const createStyleFile = () => {
  const cssFile: string = `
    .v-submenu{
      display: none;
    }

    .v-submenu.menu-opened{
      display:block;
    }
    `

  const style = document.createElement('style')
  style.type = 'text/css'
  style.innerHTML = cssFile
  return style
}
describe('test Menu and MenuItem component', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    wrapper = render(generateMenu(testProps))
    wrapper.container.append(createStyleFile())
    menuElement = screen.getByTestId('test-menu')
    activeElement = screen.getByText('active')
    disabledElement = screen.getByText('disabled')
  })

  it('should render correct Menu and MenuItem based on default props', () => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('v-menu test')
    // expect(menuElement.childNodes.length).toEqual(3)
    expect(menuElement.querySelectorAll(':scope > li').length).toEqual(4)
    expect(activeElement).toHaveClass('menu-item is-active')
    expect(disabledElement).toHaveClass('menu-item is-disabled')
  })

  it('click item should change active and call the right callback', () => {
    // render(generateMenu(testProps))
    const thirdItem = screen.getByText('xyz')
    fireEvent.click(thirdItem)
    expect(thirdItem).toHaveClass('is-active')
    expect(activeElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).toHaveBeenCalledWith('2')
    fireEvent.click(disabledElement)
    // expect(disabledElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).not.toHaveBeenCalledWith('1')
  })

  it('should render vertical mode when mode is set to vertical', () => {
    cleanup()
    render(generateMenu(testVerticalProps))
    const element = screen.getByTestId('test-menu')
    expect(element).toHaveClass('menu-vertical')
  })

  // submenu
  it('should show dropdown items when hover on subMenu', async () => {
    expect(screen.queryByText('drop1')).not.toBeVisible()
    const dropdownElement = screen.getByText('dropdown')

    fireEvent.mouseEnter(dropdownElement)

    await waitFor(() => {
      expect(screen.queryByText('drop1')).toBeVisible()
    })

    fireEvent.click(screen.getByText('drop1'))
    expect(testProps.onSelect).toHaveBeenCalledWith('3-0')
    fireEvent.mouseLeave(dropdownElement)
    await waitFor(() => {
      expect(screen.queryByText('drop1')).not.toBeVisible()
    })
  })
})
