import{j as t}from"./jsx-runtime-ccada58e.js";import{r as n,R as q}from"./index-f1f749bf.js";import{r as N}from"./index-96c5f47c.js";import"./index-153648a8.js";import{B as D}from"./button-25c5f627.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-2e4736b8.js";const I={topLeft:["bl","tl"],top:["bc","tc"],topRight:["br","tr"],leftTop:["tr","tl"],left:["cr","cl"],leftBottom:["br","bl"],rightTop:["tl","tr"],right:["cl","cr"],rightBottom:["bl","br"],bottomLeft:["tl","bl"],bottom:["tc","bc"],bottomRight:["tr","br"]};console.log(I);function H({target:e,overlay:o}){console.log("🚀 ~ file: placement.ts:37 ~ getPlacement ~ overlay",o);const{width:l,height:r,left:b,top:s}=e.getBoundingClientRect();console.log("🚀 ~ file: placement.ts:38 ~ getPlacement ~ width",l);const{left:i,top:y}=document.body.getBoundingClientRect();console.log("🚀 ~ file: placement.ts:41 ~ getPlacement ~ cleft",i);const{scrollTop:a,scrollLeft:h}=document.body;return console.log("🚀 ~ file: placement.ts:43 ~ getPlacement ~ cScrollLeft",h),{position:"absolute",top:s+r-y+a,let:b}}function x(e,o,l,r){n.useEffect(()=>{if(r)return e.addEventListener(o,l,!1),()=>{e.removeEventListener(o,l,!1)}},[r])}const d=e=>{const{children:o,target:l,visible:r,hasMask:b,onVisibleChange:s}=e,[i,y]=n.useState(r||!1),a=n.useRef(null);n.useEffect(()=>{"visible"in e&&y(r)},[r]);const h=c=>{const p=[];a.current&&p.push(a.current);const T=c.target;for(let g=0;g<p.length;g++){const v=p[g];if(v&&v.contains(T))return}s==null||s(!1)},L=c=>{!i||!a.current||c.key==="Escape"&&(s==null||s(!1))};x(window,"mousedown",h,i),x(window,"keydown",L,i);const R=n.useCallback(c=>{if(a.current=c,c&&l){const p=H({target:l});console.log(p)}},[]),_=q.Children.only(o),P=n.cloneElement(_,{ref:R}),M=N.createPortal(P,document.body);return i?t.jsxs("div",{children:[b?t.jsx("div",{}):null,M]}):null};try{d.displayName="Overlay",d.__docgenInfo={description:"",displayName:"Overlay",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},hasMask:{defaultValue:null,description:"",name:"hasMask",required:!1,type:{name:"boolean"}},visible:{defaultValue:null,description:"",name:"visible",required:!1,type:{name:"boolean"}},onVisibleChange:{defaultValue:null,description:"",name:"onVisibleChange",required:!1,type:{name:"((visible: boolean) => void)"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"HTMLElement"}}}}}catch{}const W={title:"Overlay",component:d},U=e=>t.jsx(d,{...e}),u=U.bind({});u.args={children:t.jsx("div",{style:{border:"1px solid black",width:300,height:300},children:"content"})};const m=()=>t.jsx(d,{children:t.jsx("div",{style:{border:"1px solid black",width:300,height:300},children:"Overlay"})}),f=()=>{const[e,o]=n.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(D,{type:"primary",onClick:()=>o(!0),children:"Click"}),t.jsx("button",{id:"position",children:"定位元素"}),t.jsx(d,{target:document.getElementById("position"),visible:e,onVisibleChange:l=>o(l),children:t.jsx("div",{style:{border:"1px solid black",width:300,height:300,position:"absolute",top:200,left:200},children:"under control"})})]})};var k,w,C;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:"args => <Overlay {...args} />",...(C=(w=u.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var E,j,O;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`() => <Overlay>
    <div style={{
    border: '1px solid black',
    width: 300,
    height: 300
  }}>Overlay</div>
  </Overlay>`,...(O=(j=m.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var V,B,S;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  const [visible, setVisible] = useState(false);
  return <>
      <Button type={'primary'} onClick={() => setVisible(true)}>
        Click
      </Button>
      <button id="position">定位元素</button>
      <Overlay target={(document.getElementById('position') as HTMLElement)} visible={visible} onVisibleChange={v => setVisible(v)}>
        <div style={{
        border: '1px solid black',
        width: 300,
        height: 300,
        position: 'absolute',
        top: 200,
        left: 200
      }}>
          under control
        </div>
      </Overlay>
    </>;
}`,...(S=(B=f.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};const X=["Primary","Basic","UnderControl"];export{m as Basic,u as Primary,f as UnderControl,X as __namedExportsOrder,W as default};
//# sourceMappingURL=Overlay.stories-c12732f7.js.map
