import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FC, ReactNode, useState } from 'react'
import Button from '../Button'

import { Transition } from './transition'
export default {
  title: 'val-design/Transition 过渡',
  component: Transition
} as ComponentMeta<typeof Transition>

const Template: ComponentStory<typeof Transition> = ({
  animation,
  timeout
}) => {
  const [show, setShow] = useState<boolean>(false)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Button
        type="primary"
        onClick={() => {
          setShow(!show)
        }}
        style={{ marginBottom: '20px' }}
      >
        Click to show the transition animation box
      </Button>
      <Transition in={show} animation={animation} timeout={timeout}>
        <div
          style={{
            width: '200px',
            height: '150px',
            borderRadius: '20px',
            backgroundImage: 'linear-gradient(#7028e4, #e5b2ca)'
          }}
        ></div>
      </Transition>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  animation: 'zoom-in-top',
  timeout: 300
}
