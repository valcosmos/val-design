var s=Object.defineProperty;var e=(n,o)=>s(n,"name",{value:o,configurable:!0});import{r as m,a as l,j as t}from"./jsx-runtime.a50859f3.js";import"./index.98ac92e1.js";import{T as r}from"./transition.0c8e73c9.js";import{B as p}from"./button.c88775bf.js";import"./iframe.8e636a64.js";import"./index.0c85efc0.js";import"./index.220dfe0f.js";const w={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
import React, { useState } from 'react'
import { TransitionProps } from 'react-transition-group/Transition'
import Button from '../Button'

import { Transition } from './transition'
export default {
  title: 'Others/Transition \u8FC7\u6E21',
  component: Transition
} as ComponentMeta<typeof Transition>

const Template: ComponentStory<typeof Transition> = ({
  animation,
  timeout
}: TransitionProps) => {
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
      <Transition in={show} animation={animation} timeout={300}>
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
  animation: 'zoom-in-top'
}
`,locationsMap:{default:{startLoc:{col:52,line:12},endLoc:{col:1,line:48},startBody:{col:52,line:12},endBody:{col:1,line:48}}}}},title:"Others/Transition \u8FC7\u6E21",component:r},c=e(({animation:n,timeout:o})=>{const[i,a]=m.exports.useState(!1);return l("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[t(p,{type:"primary",onClick:()=>{a(!i)},style:{marginBottom:"20px"},children:"Click to show the transition animation box"}),t(r,{in:i,animation:n,timeout:300,children:t("div",{style:{width:"200px",height:"150px",borderRadius:"20px",backgroundImage:"linear-gradient(#7028e4, #e5b2ca)"}})})]})},"Template"),u=c.bind({});u.args={animation:"zoom-in-top"};const C=["Default"];export{u as Default,C as __namedExportsOrder,w as default};
//# sourceMappingURL=transition.stories.0278693a.js.map
