import React, { useState } from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import Button from '../Button'
import Overlay from './Overlay'

const OverlayMeta: Meta<typeof Overlay> = {
  title: 'Overlay',
  component: Overlay,
}

export default OverlayMeta

const Template: StoryFn<typeof Overlay> = args => <Overlay {...args} />

export const Primary = Template.bind({})

Primary.args = {
  children: <div style={{ border: '1px solid black', width: 300, height: 300 }}>content</div>,
}

export function Basic() {
  return (
    <Overlay>
      <div style={{ border: '1px solid black', width: 300, height: 300 }}>Overlay</div>
    </Overlay>
  )
}

export function UnderControl() {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Click
      </Button>
      <button id="position">定位元素</button>
      <Overlay
        target={document.getElementById('position') as HTMLElement}
        visible={visible}
        onVisibleChange={v => setVisible(v)}
      >
        <div
          style={{
            border: '1px solid black',
            width: 300,
            height: 300,
            position: 'absolute',
            top: 200,
            left: 200,
          }}
        >
          under control
        </div>
      </Overlay>
    </>
  )
}
