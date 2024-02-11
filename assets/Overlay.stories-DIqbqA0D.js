import{j as t}from"./jsx-runtime-CKrituN3.js";import{r as s,R as q}from"./index-CBqU2yxZ.js";import{r as D}from"./index-BtM5VmRH.js";import"./index-BBQrQrOJ.js";import{B as N}from"./button-Dvwncr8l.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const I={topLeft:["bl","tl"],top:["bc","tc"],topRight:["br","tr"],leftTop:["tr","tl"],left:["cr","cl"],leftBottom:["br","bl"],rightTop:["tl","tr"],right:["cl","cr"],rightBottom:["bl","br"],bottomLeft:["tl","bl"],bottom:["tc","bc"],bottomRight:["tr","br"]};console.log(I);function F({target:e,overlay:o}){console.log("🚀 ~ file: placement.ts:37 ~ getPlacement ~ overlay",o);const{width:l,height:n,left:b,top:r}=e.getBoundingClientRect();console.log("🚀 ~ file: placement.ts:38 ~ getPlacement ~ width",l);const{left:i,top:y}=document.body.getBoundingClientRect();console.log("🚀 ~ file: placement.ts:41 ~ getPlacement ~ cleft",i);const{scrollTop:a,scrollLeft:h}=document.body;return console.log("🚀 ~ file: placement.ts:43 ~ getPlacement ~ cScrollLeft",h),{position:"absolute",top:r+n-y+a,let:b}}function x(e,o,l,n){s.useEffect(()=>{if(n)return e.addEventListener(o,l,!1),()=>{e.removeEventListener(o,l,!1)}},[n])}const d=e=>{const{children:o,target:l,visible:n,hasMask:b,onVisibleChange:r}=e,[i,y]=s.useState(n||!1),a=s.useRef(null);s.useEffect(()=>{"visible"in e&&y(n)},[n]);const h=c=>{const u=[];a.current&&u.push(a.current);const T=c.target;for(let g=0;g<u.length;g++){const v=u[g];if(v&&v.contains(T))return}r==null||r(!1)},L=c=>{!i||!a.current||c.key==="Escape"&&(r==null||r(!1))};x(window,"mousedown",h,i),x(window,"keydown",L,i);const R=s.useCallback(c=>{if(a.current=c,c&&l){const u=F({target:l});console.log(u)}},[]),_=q.Children.only(o),P=s.cloneElement(_,{ref:R}),M=D.createPortal(P,document.body);return i?t.jsxs("div",{children:[b?t.jsx("div",{}):null,M]}):null};try{d.displayName="Overlay",d.__docgenInfo={description:"",displayName:"Overlay",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},hasMask:{defaultValue:null,description:"",name:"hasMask",required:!1,type:{name:"boolean"}},visible:{defaultValue:null,description:"",name:"visible",required:!1,type:{name:"boolean"}},onVisibleChange:{defaultValue:null,description:"",name:"onVisibleChange",required:!1,type:{name:"((visible: boolean) => void)"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"HTMLElement"}}}}}catch{}const W={title:"Overlay",component:d},H=e=>t.jsx(d,{...e}),p=H.bind({});p.args={children:t.jsx("div",{style:{border:"1px solid black",width:300,height:300},children:"content"})};const m=()=>t.jsx(d,{children:t.jsx("div",{style:{border:"1px solid black",width:300,height:300},children:"Overlay"})}),f=()=>{const[e,o]=s.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(N,{type:"primary",onClick:()=>o(!0),children:"Click"}),t.jsx("button",{id:"position",children:"定位元素"}),t.jsx(d,{target:document.getElementById("position"),visible:e,onVisibleChange:l=>o(l),children:t.jsx("div",{style:{border:"1px solid black",width:300,height:300,position:"absolute",top:200,left:200},children:"under control"})})]})};var k,w,C;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:"args => <Overlay {...args} />",...(C=(w=p.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var E,j,B;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`() => <Overlay>
    <div style={{
    border: '1px solid black',
    width: 300,
    height: 300
  }}>Overlay</div>
  </Overlay>`,...(B=(j=m.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var O,V,S;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
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
}`,...(S=(V=f.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};const X=["Primary","Basic","UnderControl"];export{m as Basic,p as Primary,f as UnderControl,X as __namedExportsOrder,W as default};
