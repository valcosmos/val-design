var s=Object.defineProperty;var e=(o,t)=>s(o,"name",{value:t,configurable:!0});import{P as r}from"./progress-57ead7f0.js";import{j as n}from"./jsx-runtime-597274de.js";import"./iframe-ffb46370.js";const g={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Progress } from './progress'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Feedback/Progress 进度条',
  component: Progress
} as ComponentMeta<typeof Progress>

const Template: ComponentStory<typeof Progress> = (args) => (
  <Progress {...args} />
)

export const DefaultProgress = Template.bind({})

DefaultProgress.args = {
  percent: 80,
  theme: 'primary'
}
`,locationsMap:{"default-progress":{startLoc:{col:50,line:15},endLoc:{col:1,line:17},startBody:{col:50,line:15},endBody:{col:1,line:17}}}}},title:"Feedback/Progress 进度条",component:r},a=e(o=>n(r,{...o}),"Template"),p=a.bind({});p.args={percent:80,theme:"primary"};const f=["DefaultProgress"];export{p as DefaultProgress,f as __namedExportsOrder,g as default};
//# sourceMappingURL=progress.stories-aa9dc75f.js.map
