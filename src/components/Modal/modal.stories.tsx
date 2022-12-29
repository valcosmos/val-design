import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Modal from './index'
import Button from '../Button'

export default {
  title: 'Feedback/Modal 对话框',
  component: Modal
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => {
  const [open, setOpen] = useState<boolean>(false)
  const onButtonClick = () => {
    setOpen(true)
  }

  const onModalCancel = () => {
    setOpen(false)
  }
  return (
    <>
      <Button type="primary" onClick={onButtonClick}>
        Open Modal
      </Button>
      <Modal {...args} open={open} onCancel={onModalCancel}>
        <p>hello world</p>
      </Modal>
    </>
  )
}

export const Primary = Template.bind({})

Primary.args = {
  open: true,
  title: 'Modal Title',
  centered: false
}
