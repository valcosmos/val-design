import{j as o}from"./jsx-runtime-4ca860c5.js";import{r as p}from"./index-61bf1805.js";import"./index-ebf5f065.js";import{T as s}from"./transition-2bf5eba1.js";import{B as l}from"./button-87ec6eb6.js";import"./_commonjsHelpers-de833af9.js";import"./inheritsLoose-9eefaa95.js";import"./index-a199a0ff.js";import"./index-e131923d.js";const j={title:"Others/Transition 过渡",component:s},c=({animation:a})=>{const[i,m]=p.useState(!1);return o.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[o.jsx(l,{type:"primary",onClick:()=>{m(!i)},style:{marginBottom:"20px"},children:"Click to show the transition animation box"}),o.jsx(s,{in:i,animation:a,timeout:300,children:o.jsx("div",{style:{width:"200px",height:"150px",borderRadius:"20px",backgroundImage:"linear-gradient(#7028e4, #e5b2ca)"}})})]})},t=c.bind({});t.args={animation:"zoom-in-top"};var e,n,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`({
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
}`,...(r=(n=t.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const T=["Default"];export{t as Default,T as __namedExportsOrder,j as default};
//# sourceMappingURL=transition.stories-349357ef.js.map
