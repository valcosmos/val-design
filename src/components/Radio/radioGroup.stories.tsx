import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import RadioGroup from './radioGroup'
import Radio from './radio'

const RadioMeta: ComponentMeta<typeof RadioGroup> = {
  title: 'Data Entry/RadioGroup 单选框组',
  component: RadioGroup,
}

export default RadioMeta

const Template: ComponentStory<typeof RadioGroup> = args => <RadioGroup {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: [
    <Radio value="1" key="1">
      选项1
    </Radio>,
    <Radio value="2" key="2">
      选项2
    </Radio>,
    <Radio value="3" key="3">
      选项3
    </Radio>,
  ],
}

export const UnderControl = () => {
  return (
    <RadioGroup value="3">
      <Radio value="1" key="1">
        选项1
      </Radio>
      <Radio value="2" key="2">
        选项2
      </Radio>
      <Radio value="3" key="3">
        选项3
      </Radio>
      ,
    </RadioGroup>
  )
}
