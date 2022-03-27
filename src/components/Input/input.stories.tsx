import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Input } from './input'

export default {
  title: 'Input',
  component: Input
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => (
  <Input {...args}></Input>
)

// export const ControlledInput = Template.bind({})
// const [value, setValue] = useState()
// ControlledInput.args = {
//   value,
//   defaultValue: value,
//   onChange: (e) => setValue(e.target.value)
// }

// const ControlledInput = () => {
//   const [value, setValue] = useState()
//   return (
//     <Input
//       value={value}
//       defaultValue={value}
//       onChange={(e) => {
//         setValue(e.target.value)
//       }}
//     />
//   )
// }
export const defaultInput = Template.bind({})
const style: React.CSSProperties = {
  width: '300px'
}
defaultInput.args = {
  style,
  placeholder: 'please input',
  onChange: action('change')
}

export const disabledInput = Template.bind({})
disabledInput.args = {
  style,
  placeholder: 'disabled input',
  disabled: true
}

export const iconInput = Template.bind({})
iconInput.args = {
  style,
  placeholder: 'input with icon',
  icon: 'search'
}

export const largeInput = Template.bind({})
largeInput.args = {
  style,
  placeholder: 'large size',
  size: 'lg'
}

export const smallInput = Template.bind({})
smallInput.args = {
  style,
  placeholder: 'small size',
  size: 'sm'
}

export const prepandInput = Template.bind({})
prepandInput.args = {
  style,
  defaultValue: 'prepend text',
  prepend: 'https://'
}

export const appendInput = Template.bind({})

appendInput.args = {
  style,
  defaultValue: 'google',
  append: '.com'
}
