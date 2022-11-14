var a=Object.defineProperty;var i=(t,n)=>a(t,"name",{value:n,configurable:!0});import{r as s,b as m,j as o}from"./jsx-runtime.c0a0e632.js";import"./index.f2183d17.js";import{T as e}from"./transition.c76ca059.js";import{B as l}from"./button.4f5f5283.js";import"./iframe.e7600c43.js";import"./index.0963c218.js";import"./index.220dfe0f.js";const b={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
import React, { useState } from 'react'
import { TransitionProps } from 'react-transition-group/Transition'
import Button from '../Button'

import { Transition } from './transition'
export default {
  title: 'Others/Transition \u8FC7\u6E21',
  component: Transition
} as ComponentMeta<typeof Transition>

const Template: ComponentStory<typeof Transition> = ({
  animation
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
`,locationsMap:{default:{startLoc:{col:52,line:12},endLoc:{col:1,line:47},startBody:{col:52,line:12},endBody:{col:1,line:47}}}}},title:"Others/Transition \u8FC7\u6E21",component:e},p=i(({animation:t})=>{const[n,r]=s.exports.useState(!1);return m("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[o(l,{type:"primary",onClick:()=>{r(!n)},style:{marginBottom:"20px"},children:"Click to show the transition animation box"}),o(e,{in:n,animation:t,timeout:300,children:o("div",{style:{width:"200px",height:"150px",borderRadius:"20px",backgroundImage:"linear-gradient(#7028e4, #e5b2ca)"}})})]})},"Template"),c=p.bind({});c.args={animation:"zoom-in-top"};const w=["Default"];export{c as Default,w as __namedExportsOrder,b as default};
//# sourceMappingURL=transition.stories.aec1a8e2.js.map
