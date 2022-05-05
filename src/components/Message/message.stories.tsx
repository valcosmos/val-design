import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { message } from './index'
import Button from '../Button'
import Message from './message'

export default {
  title: 'val-design/Message 全局提示',
  component: Message
} as ComponentMeta<typeof Message>

export const Example: ComponentStory<typeof Button> = (args) => (
  <>
    <Button
      type="default"
      onClick={() => {
        message.info('Info Message')
      }}
    >
      Info Message
    </Button>
    <Button
      type="primary"
      style={{ marginLeft: '20px' }}
      onClick={() => {
        message.success('Success Message')
      }}
    >
      Success Message
    </Button>
    <Button
      type="warning"
      style={{ marginLeft: '20px' }}
      onClick={() => {
        message.warning('Success Message')
      }}
    >
      Warning Message
    </Button>
    <Button
      type="danger"
      style={{ marginLeft: '20px' }}
      onClick={() => {
        message.error('Error Message')
      }}
    >
      Error Message
    </Button>
  </>
)

// export const Info = Template.bind({})
// Info.args = {
//   onClick: () => {
//     message.info('Info Message')
//   },
//   children: 'Info Message'
// }

// export const Success = Template.bind({})
// Success.args = {
//   onClick: () => {
//     message.success('Success Message')
//   },
//   children: 'Success Message'
// }
