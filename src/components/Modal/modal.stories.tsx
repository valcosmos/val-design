import React, { useState } from 'react'
import type { Meta, StoryFn } from '@storybook/react'

import Button from '../Button'
import Modal from './index'

const meta = {
  title: 'Feedback/Modal 对话框',
  component: Modal,
} satisfies Meta<typeof Modal>

export default meta

const Template: StoryFn<typeof Modal> = (args) => {
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
  centered: false,
}
