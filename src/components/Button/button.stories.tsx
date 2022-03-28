import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from './button'

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'val-design/Button',
  component: Button,
  parameters: {}
} as ComponentMeta<typeof Button>

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => (
  <Button btnType="primary" onClick={action('clicked')} {...args}></Button>
)

export const Default = Template.bind({})
Default.args = {
  btnType: 'default',
  children: 'Default Button'
}

export const Primary = Template.bind({})
Primary.args = {
  btnType: 'primary',
  children: 'Primary Button'
}

export const Danger = Template.bind({})
Danger.args = {
  btnType: 'danger',
  children: 'Danger Button'
}

export const Link = Template.bind({})
Link.args = {
  btnType: 'link',
  href: 'https://valzt.cn',
  target: '_blank',
  children: 'Link Button'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  children: 'Large Button'
}

export const Small = Template.bind({})
Small.args = {
  size: 'large',
  children: 'Small Button'
}

// export const

// export const Danger = Template.bind({})
// Danger.args = {
//   btnType: ButtonType.Danger
// }

// // export const defaultButton = () => <Button>Button</Button>

// // export const buttonWithSize = () => (
// //   <>
// //     <Button size="lg">large button</Button>
// //   </>
// // )

// export const defaultButton = () => <Button>default button</Button>

// export const buttonWithSize = () => (
//   <>
//     <Button size={ButtonSize.Large}>large button</Button>
//     <Button size={ButtonSize.Small}>small button</Button>
//   </>
// )

// export const buttonWithType = () => (
//   <>
//     <Button btnType={ButtonType.Primary}>primary</Button>
//     <Button btnType={ButtonType.Danger}>danger</Button>
//     <Button btnType={ButtonType.Link} href="https://valzt.cn">
//       link
//     </Button>
//   </>
// )

// storiesOf('按钮', module)
//   .add('默认按钮', defaultButton)
//   .add('不同尺寸', buttonWithSize)
//   .add('不同类型', buttonWithType)
