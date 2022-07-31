import{r as C,j as e,R as h,a as c}from"./jsx-runtime.f3150366.js";import{c as b}from"./index.b3d31cad.js";import{I as V}from"./icon.34088235.js";import{T as q}from"./transition.9b0b7e30.js";import{a as D}from"./index.07d00392.js";import"./iframe.cc34769a.js";import"./index.es.231671ec.js";import"./index.0e0ded8f.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.f4b47b74.js";import"./make-decorator.0eef16ed.js";const F=C.exports.createContext({index:"0"}),M=n=>{const{className:a,mode:o,style:m,children:l,defaultIndex:p,onSelect:s,defaultOpenSubMenus:i}=n,[f,_]=C.exports.useState(p),E=b("v-menu",a,{"menu-vertical":o==="vertical","menu-horizontal":o!=="vertical"}),y={index:f||"0",onSelect:r=>{_(r),s&&s(r)},mode:o,defaultOpenSubMenus:i},B=()=>h.Children.map(l,(r,v)=>{const t=r,{displayName:d}=t.type;if(d==="MenuItem"||d==="SubMenu")return h.cloneElement(t,{index:v.toString()});console.error("Warning: Menu has a child which is not a MenuItem component")});return e("ul",{className:E,style:m,"data-testid":"test-menu",children:e(F.Provider,{value:y,children:B()})})};M.defaultProps={defaultIndex:"0",mode:"horizontal",defaultOpenSubMenus:[]};try{M.displayName="Menu",M.__docgenInfo={description:`> \u4E3A\u7F51\u7AD9\u63D0\u4F9B\u5BFC\u822A\u529F\u80FD\u7684\u83DC\u5355\u3002\u652F\u6301\u6A2A\u5411\u7EB5\u5411\u4E24\u79CD\u6A21\u5F0F\uFF0C\u652F\u6301\u4E0B\u62C9\u83DC\u5355\u3002

### \u5F15\u7528\u65B9\u6CD5

\`\`\`js

 import { Menu } from 'v-design'

\`\`\``,displayName:"Menu",props:{defaultIndex:{defaultValue:{value:"0"},description:"\u9ED8\u8BA4 active \u7684\u83DC\u5355\u9879\u7684\u7D22\u5F15\u503C",name:"defaultIndex",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},mode:{defaultValue:{value:"horizontal"},description:"\u83DC\u5355\u7C7B\u578B \u6A2A\u5411\u6216\u8005\u7EB5\u5411",name:"mode",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},style:{defaultValue:null,description:"\u83DC\u5355\u6837\u5F0F",name:"style",required:!1,type:{name:"CSSProperties"}},onSelect:{defaultValue:null,description:"\u70B9\u51FB\u83DC\u5355\u9879\u89E6\u53D1\u7684\u56DE\u6389\u51FD\u6570",name:"onSelect",required:!1,type:{name:"((selectedIndex: string) => void)"}},defaultOpenSubMenus:{defaultValue:{value:"[]"},description:"\u8BBE\u7F6E\u5B50\u83DC\u5355\u7684\u9ED8\u8BA4\u6253\u5F00 \u53EA\u5728\u7EB5\u5411\u6A21\u5F0F\u4E0B\u751F\u6548",name:"defaultOpenSubMenus",required:!1,type:{name:"string[]"}},children:{defaultValue:null,description:"\u5B50\u5143\u7D20",name:"children",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Menu/menu.tsx#Menu"]={docgenInfo:M.__docgenInfo,name:"Menu",path:"src/components/Menu/menu.tsx#Menu"})}catch{}try{menu.displayName="menu",menu.__docgenInfo={description:`> \u4E3A\u7F51\u7AD9\u63D0\u4F9B\u5BFC\u822A\u529F\u80FD\u7684\u83DC\u5355\u3002\u652F\u6301\u6A2A\u5411\u7EB5\u5411\u4E24\u79CD\u6A21\u5F0F\uFF0C\u652F\u6301\u4E0B\u62C9\u83DC\u5355\u3002

### \u5F15\u7528\u65B9\u6CD5

\`\`\`js

 import { Menu } from 'v-design'

\`\`\``,displayName:"menu",props:{defaultIndex:{defaultValue:{value:"0"},description:"\u9ED8\u8BA4 active \u7684\u83DC\u5355\u9879\u7684\u7D22\u5F15\u503C",name:"defaultIndex",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},mode:{defaultValue:{value:"horizontal"},description:"\u83DC\u5355\u7C7B\u578B \u6A2A\u5411\u6216\u8005\u7EB5\u5411",name:"mode",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},style:{defaultValue:null,description:"\u83DC\u5355\u6837\u5F0F",name:"style",required:!1,type:{name:"CSSProperties"}},onSelect:{defaultValue:null,description:"\u70B9\u51FB\u83DC\u5355\u9879\u89E6\u53D1\u7684\u56DE\u6389\u51FD\u6570",name:"onSelect",required:!1,type:{name:"((selectedIndex: string) => void)"}},defaultOpenSubMenus:{defaultValue:{value:"[]"},description:"\u8BBE\u7F6E\u5B50\u83DC\u5355\u7684\u9ED8\u8BA4\u6253\u5F00 \u53EA\u5728\u7EB5\u5411\u6A21\u5F0F\u4E0B\u751F\u6548",name:"defaultOpenSubMenus",required:!1,type:{name:"string[]"}},children:{defaultValue:null,description:"\u5B50\u5143\u7D20",name:"children",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Menu/menu.tsx#menu"]={docgenInfo:menu.__docgenInfo,name:"menu",path:"src/components/Menu/menu.tsx#menu"})}catch{}const S=({index:n,title:a,children:o,className:m})=>{const l=C.exports.useContext(F),p=l.defaultOpenSubMenus,s=n&&l.mode==="vertical"?p.includes(n):!1,[i,f]=C.exports.useState(s),_=b("menu-item submenu-item",m,{"is-active":l.index===n,"is-opened":i,"is-vertical":l.mode==="vertical"}),E=t=>{t.preventDefault(),f(!i)};let x;const y=(t,d)=>{clearTimeout(x),t.preventDefault(),x=setTimeout(()=>{f(d)},300)},B=l.mode==="vertical"?{onClick:E}:{},r=l.mode!=="vertical"?{onMouseEnter:t=>{y(t,!0)},onMouseLeave:t=>{y(t,!1)}}:{},v=()=>{const t=b("v-submenu",{"menu-opened":i}),d=h.Children.map(o,(O,N)=>{const g=O;if(g.type.displayName==="MenuItem")return h.cloneElement(g,{index:`${n}-${N}`});console.error("Warning: SubMenu has a child which is not a MenuItem component")});return e(q,{in:i,timeout:300,animation:"zoom-in-top",children:e("ul",{className:t,children:d})})};return c("li",{className:_,...r,children:[c("div",{className:"submenu-title",...B,children:[a,e(V,{icon:"angle-down",className:"arrow-icon"})]}),v()]},n)};S.displayName="SubMenu";try{S.displayName="SubMenu",S.__docgenInfo={description:"",displayName:"SubMenu",props:{index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Menu/subMenu.tsx#SubMenu"]={docgenInfo:S.__docgenInfo,name:"SubMenu",path:"src/components/Menu/subMenu.tsx#SubMenu"})}catch{}const I=n=>{const{index:a,disabled:o,className:m,style:l,children:p}=n,s=C.exports.useContext(F),i=b("menu-item",m,{"is-disabled":o,"is-active":s.index===a});return e("li",{className:i,style:l,onClick:()=>{s.onSelect&&!o&&typeof a=="string"&&s.onSelect(a)},children:p})};I.displayName="MenuItem";try{I.displayName="MenuItem",I.__docgenInfo={description:"",displayName:"MenuItem",props:{index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Menu/menuItem.tsx#MenuItem"]={docgenInfo:I.__docgenInfo,name:"MenuItem",path:"src/components/Menu/menuItem.tsx#MenuItem"})}catch{}const A=M;A.Item=I;A.SubMenu=S;const u=A,H={parameters:{storySource:{source:`import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import Menu from './index'
import { action } from '@storybook/addon-actions'

export default {
  title: 'val-design/Menu \u5BFC\u822A\u83DC\u5355',
  component: Menu
} as ComponentMeta<typeof Menu>

export const HorizontalMenu: ComponentStory<typeof Menu> = (args) => (
  <Menu
    {...args}
    defaultIndex={'0'}
    onSelect={(index) => action(\`clicked \${index} item\`)}
  >
    <Menu.Item>menu 1</Menu.Item>
    <Menu.Item disabled>disabled</Menu.Item>
    <Menu.SubMenu title="sub menu">
      <Menu.Item>submenu 1</Menu.Item>
      <Menu.Item>submenu 1</Menu.Item>
      <Menu.Item>submenu 1</Menu.Item>
    </Menu.SubMenu>
    <Menu.Item>menu2</Menu.Item>
  </Menu>
)
export const VerticalMenu: ComponentStory<typeof Menu> = (args) => (
  <Menu
    {...args}
    defaultIndex={'0'}
    mode="vertical"
    onSelect={(index) => action(\`clicked \${index} item\`)}
  >
    <Menu.Item>cool link</Menu.Item>
    <Menu.Item disabled>disabled</Menu.Item>
    <Menu.SubMenu title="sub menu">
      <Menu.Item>submenu 1</Menu.Item>
      <Menu.Item>submenu 1</Menu.Item>
      <Menu.Item>submenu 1</Menu.Item>
    </Menu.SubMenu>
    <Menu.Item>cool link 2</Menu.Item>
  </Menu>
)
`,locationsMap:{"horizontal-menu":{startLoc:{col:59,line:12},endLoc:{col:1,line:27},startBody:{col:59,line:12},endBody:{col:1,line:27}},"vertical-menu":{startLoc:{col:57,line:28},endLoc:{col:1,line:44},startBody:{col:57,line:28},endBody:{col:1,line:44}}}}},title:"val-design/Menu \u5BFC\u822A\u83DC\u5355",component:u},W=n=>c(u,{...n,defaultIndex:"0",onSelect:a=>D(`clicked ${a} item`),children:[e(u.Item,{children:"menu 1"}),e(u.Item,{disabled:!0,children:"disabled"}),c(u.SubMenu,{title:"sub menu",children:[e(u.Item,{children:"submenu 1"}),e(u.Item,{children:"submenu 1"}),e(u.Item,{children:"submenu 1"})]}),e(u.Item,{children:"menu2"})]}),G=n=>c(u,{...n,defaultIndex:"0",mode:"vertical",onSelect:a=>D(`clicked ${a} item`),children:[e(u.Item,{children:"cool link"}),e(u.Item,{disabled:!0,children:"disabled"}),c(u.SubMenu,{title:"sub menu",children:[e(u.Item,{children:"submenu 1"}),e(u.Item,{children:"submenu 1"}),e(u.Item,{children:"submenu 1"})]}),e(u.Item,{children:"cool link 2"})]}),J=["HorizontalMenu","VerticalMenu"];export{W as HorizontalMenu,G as VerticalMenu,J as __namedExportsOrder,H as default};
//# sourceMappingURL=menu.stories.6f36c8ad.js.map
