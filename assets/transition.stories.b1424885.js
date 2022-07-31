import{r,a,j as n}from"./jsx-runtime.f3150366.js";import"./index.455e478b.js";import{T as o}from"./transition.9b0b7e30.js";import{B as s}from"./button.e3ad4b87.js";import"./iframe.cc34769a.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.f4b47b74.js";import"./index.b3d31cad.js";const T={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
import React, { useState } from 'react'
import { TransitionProps } from 'react-transition-group/Transition'
import Button from '../Button'

import { Transition } from './transition'
export default {
  title: 'val-design/Transition \u8FC7\u6E21',
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
`,locationsMap:{default:{startLoc:{col:52,line:12},endLoc:{col:1,line:48},startBody:{col:52,line:12},endBody:{col:1,line:48}}}}},title:"val-design/Transition \u8FC7\u6E21",component:o},m=({animation:i,timeout:p})=>{const[t,e]=r.exports.useState(!1);return a("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[n(s,{type:"primary",onClick:()=>{e(!t)},style:{marginBottom:"20px"},children:"Click to show the transition animation box"}),n(o,{in:t,animation:i,timeout:300,children:n("div",{style:{width:"200px",height:"150px",borderRadius:"20px",backgroundImage:"linear-gradient(#7028e4, #e5b2ca)"}})})]})},l=m.bind({});l.args={animation:"zoom-in-top"};const b=["Default"];export{l as Default,b as __namedExportsOrder,T as default};
//# sourceMappingURL=transition.stories.b1424885.js.map
