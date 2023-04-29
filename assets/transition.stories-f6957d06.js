import{j as o}from"./jsx-runtime-94f6e698.js";import{r as p}from"./index-8db94870.js";import"./index-84be01f1.js";import{T as s}from"./transition-fb4c8409.js";import{B as l}from"./button-ff5ec818.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-9eefaa95.js";import"./index-8ce4a492.js";import"./index-582f377c.js";const j={title:"Others/Transition 过渡",component:s},c=({animation:a})=>{const[i,m]=p.useState(!1);return o.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[o.jsx(l,{type:"primary",onClick:()=>{m(!i)},style:{marginBottom:"20px"},children:"Click to show the transition animation box"}),o.jsx(s,{in:i,animation:a,timeout:300,children:o.jsx("div",{style:{width:"200px",height:"150px",borderRadius:"20px",backgroundImage:"linear-gradient(#7028e4, #e5b2ca)"}})})]})},t=c.bind({});t.args={animation:"zoom-in-top"};var e,n,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`({
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
//# sourceMappingURL=transition.stories-f6957d06.js.map
