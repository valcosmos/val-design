import{j as n}from"./jsx-runtime-CKrituN3.js";import{r as p}from"./index-CBqU2yxZ.js";import"./index-BBQrQrOJ.js";import{T as s}from"./transition-BP3NZ8IQ.js";import{B as l}from"./button-Dvwncr8l.js";import"./_commonjsHelpers-BosuxZz1.js";import"./inheritsLoose-CtFfH6wX.js";import"./index-BtM5VmRH.js";import"./index-Bl6ORisp.js";const j={title:"Others/Transition 过渡",component:s},c=({animation:a})=>{const[o,m]=p.useState(!1);return n.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[n.jsx(l,{type:"primary",onClick:()=>{m(!o)},style:{marginBottom:"20px"},children:"Click to show the transition animation box"}),n.jsx(s,{in:o,animation:a,timeout:300,children:n.jsx("div",{style:{width:"200px",height:"150px",borderRadius:"20px",backgroundImage:"linear-gradient(#7028e4, #e5b2ca)"}})})]})},t=c.bind({});t.args={animation:"zoom-in-top"};var i,e,r;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`({
  animation
}: TransitionProps) => {
  const [show, setShow] = useState<boolean>(false);
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
      <Button type="primary" onClick={() => {
      setShow(!show);
    }} style={{
      marginBottom: '20px'
    }}>
        Click to show the transition animation box
      </Button>
      <Transition in={show} animation={animation} timeout={300}>
        <div style={{
        width: '200px',
        height: '150px',
        borderRadius: '20px',
        backgroundImage: 'linear-gradient(#7028e4, #e5b2ca)'
      }}></div>
      </Transition>
    </div>;
}`,...(r=(e=t.parameters)==null?void 0:e.docs)==null?void 0:r.source}}};const T=["Default"];export{t as Default,T as __namedExportsOrder,j as default};
