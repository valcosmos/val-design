var a=Object.defineProperty;var i=(t,n)=>a(t,"name",{value:n,configurable:!0});import{r as s}from"./index-a38f3d31.js";import"./index-d06ee515.js";import{T as e}from"./transition-5d993c2f.js";import{a as m,j as o}from"./jsx-runtime-69008c6b.js";import{B as p}from"./button-25b03b88.js";import"./es.object.get-own-property-descriptor-d261b708.js";import"./index-b042d21f.js";import"./index-ed86a6de.js";const w={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
import React, { useState } from 'react'
import { TransitionProps } from 'react-transition-group/Transition'
import Button from '../Button'

import { Transition } from './transition'
export default {
  title: 'Others/Transition 过渡',
  component: Transition,
} as ComponentMeta<typeof Transition>

const Template: ComponentStory<typeof Transition> = ({ animation }: TransitionProps) => {
  const [show, setShow] = useState<boolean>(false)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
            backgroundImage: 'linear-gradient(#7028e4, #e5b2ca)',
          }}
        ></div>
      </Transition>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  animation: 'zoom-in-top',
}
`,locationsMap:{default:{startLoc:{col:52,line:12},endLoc:{col:1,line:45},startBody:{col:52,line:12},endBody:{col:1,line:45}}}}},title:"Others/Transition 过渡",component:e},l=i(({animation:t})=>{const[n,r]=s.useState(!1);return m("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[o(p,{type:"primary",onClick:()=>{r(!n)},style:{marginBottom:"20px"},children:"Click to show the transition animation box"}),o(e,{in:n,animation:t,timeout:300,children:o("div",{style:{width:"200px",height:"150px",borderRadius:"20px",backgroundImage:"linear-gradient(#7028e4, #e5b2ca)"}})})]})},"Template"),c=l.bind({});c.args={animation:"zoom-in-top"};const B=["Default"];export{c as Default,B as __namedExportsOrder,w as default};
//# sourceMappingURL=transition.stories-70f14a64.js.map
