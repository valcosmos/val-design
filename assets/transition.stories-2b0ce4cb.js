var a=Object.defineProperty;var i=(t,n)=>a(t,"name",{value:n,configurable:!0});import{r as s,b as m,j as o}from"./jsx-runtime-597274de.js";import"./index-4d4cd1f7.js";import{T as e}from"./transition-67cab8da.js";import{B as l}from"./button-7cd0e222.js";import"./iframe-ffb46370.js";import"./index-1a0fb9f3.js";import"./index-9f7f24f4.js";const b={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
import React, { useState } from 'react'
import { TransitionProps } from 'react-transition-group/Transition'
import Button from '../Button'

import { Transition } from './transition'
export default {
  title: 'Others/Transition 过渡',
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
`,locationsMap:{default:{startLoc:{col:52,line:12},endLoc:{col:1,line:47},startBody:{col:52,line:12},endBody:{col:1,line:47}}}}},title:"Others/Transition 过渡",component:e},p=i(({animation:t})=>{const[n,r]=s.exports.useState(!1);return m("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[o(l,{type:"primary",onClick:()=>{r(!n)},style:{marginBottom:"20px"},children:"Click to show the transition animation box"}),o(e,{in:n,animation:t,timeout:300,children:o("div",{style:{width:"200px",height:"150px",borderRadius:"20px",backgroundImage:"linear-gradient(#7028e4, #e5b2ca)"}})})]})},"Template"),c=p.bind({});c.args={animation:"zoom-in-top"};const w=["Default"];export{c as Default,w as __namedExportsOrder,b as default};
//# sourceMappingURL=transition.stories-2b0ce4cb.js.map
