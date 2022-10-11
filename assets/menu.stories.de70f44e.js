var q=Object.defineProperty;var l=(e,t)=>q(e,"name",{value:t,configurable:!0});import{r as y,j as n,R as b,b as m}from"./jsx-runtime.5673c6fa.js";import{c as _}from"./index.220dfe0f.js";import{I as R}from"./icon.56c53b5b.js";import{T}from"./transition.233ad0b8.js";import{a as O}from"./index.b2d9ee21.js";import"./iframe.efbb782c.js";import"./index.241e153c.js";import"./index.6f8f5b77.js";import"./index.e799f0cc.js";import"./make-decorator.78df1306.js";const A=y.exports.createContext({index:"0"}),S=l(e=>{const{className:t,mode:s,style:p,children:o,defaultIndex:f,onSelect:i,defaultOpenSubMenus:r}=e,[M,E]=y.exports.useState(f),x=_("v-menu",t,{"menu-vertical":s==="vertical","menu-horizontal":s!=="vertical"}),h={index:M||"0",onSelect:l(c=>{E(c),i&&i(c)},"handleClick"),mode:s,defaultOpenSubMenus:r},v=l(()=>b.Children.map(o,(c,F)=>{const a=c,{displayName:d}=a.type;if(d==="MenuItem"||d==="SubMenu")return b.cloneElement(a,{index:F.toString()});console.error("Warning: Menu has a child which is not a MenuItem component")}),"renderChildren");return n("ul",{className:x,style:p,"data-testid":"test-menu",children:n(A.Provider,{value:h,children:v()})})},"Menu$1");S.defaultProps={defaultIndex:"0",mode:"horizontal",defaultOpenSubMenus:[]};try{S.displayName="Menu",S.__docgenInfo={description:`> \u4E3A\u7F51\u7AD9\u63D0\u4F9B\u5BFC\u822A\u529F\u80FD\u7684\u83DC\u5355\u3002\u652F\u6301\u6A2A\u5411\u7EB5\u5411\u4E24\u79CD\u6A21\u5F0F\uFF0C\u652F\u6301\u4E0B\u62C9\u83DC\u5355\u3002

### \u5F15\u7528\u65B9\u6CD5

\`\`\`js

 import { Menu } from 'v-design'

\`\`\``,displayName:"Menu",props:{defaultIndex:{defaultValue:{value:"0"},description:"\u9ED8\u8BA4 active \u7684\u83DC\u5355\u9879\u7684\u7D22\u5F15\u503C",name:"defaultIndex",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},mode:{defaultValue:{value:"horizontal"},description:"\u83DC\u5355\u7C7B\u578B \u6A2A\u5411\u6216\u8005\u7EB5\u5411",name:"mode",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},style:{defaultValue:null,description:"\u83DC\u5355\u6837\u5F0F",name:"style",required:!1,type:{name:"CSSProperties"}},onSelect:{defaultValue:null,description:"\u70B9\u51FB\u83DC\u5355\u9879\u89E6\u53D1\u7684\u56DE\u6389\u51FD\u6570",name:"onSelect",required:!1,type:{name:"((selectedIndex: string) => void)"}},defaultOpenSubMenus:{defaultValue:{value:"[]"},description:"\u8BBE\u7F6E\u5B50\u83DC\u5355\u7684\u9ED8\u8BA4\u6253\u5F00 \u53EA\u5728\u7EB5\u5411\u6A21\u5F0F\u4E0B\u751F\u6548",name:"defaultOpenSubMenus",required:!1,type:{name:"string[]"}},children:{defaultValue:null,description:"\u5B50\u5143\u7D20",name:"children",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Menu/menu.tsx#Menu"]={docgenInfo:S.__docgenInfo,name:"Menu",path:"src/components/Menu/menu.tsx#Menu"})}catch{}try{menu.displayName="menu",menu.__docgenInfo={description:`> \u4E3A\u7F51\u7AD9\u63D0\u4F9B\u5BFC\u822A\u529F\u80FD\u7684\u83DC\u5355\u3002\u652F\u6301\u6A2A\u5411\u7EB5\u5411\u4E24\u79CD\u6A21\u5F0F\uFF0C\u652F\u6301\u4E0B\u62C9\u83DC\u5355\u3002

### \u5F15\u7528\u65B9\u6CD5

\`\`\`js

 import { Menu } from 'v-design'

\`\`\``,displayName:"menu",props:{defaultIndex:{defaultValue:{value:"0"},description:"\u9ED8\u8BA4 active \u7684\u83DC\u5355\u9879\u7684\u7D22\u5F15\u503C",name:"defaultIndex",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},mode:{defaultValue:{value:"horizontal"},description:"\u83DC\u5355\u7C7B\u578B \u6A2A\u5411\u6216\u8005\u7EB5\u5411",name:"mode",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},style:{defaultValue:null,description:"\u83DC\u5355\u6837\u5F0F",name:"style",required:!1,type:{name:"CSSProperties"}},onSelect:{defaultValue:null,description:"\u70B9\u51FB\u83DC\u5355\u9879\u89E6\u53D1\u7684\u56DE\u6389\u51FD\u6570",name:"onSelect",required:!1,type:{name:"((selectedIndex: string) => void)"}},defaultOpenSubMenus:{defaultValue:{value:"[]"},description:"\u8BBE\u7F6E\u5B50\u83DC\u5355\u7684\u9ED8\u8BA4\u6253\u5F00 \u53EA\u5728\u7EB5\u5411\u6A21\u5F0F\u4E0B\u751F\u6548",name:"defaultOpenSubMenus",required:!1,type:{name:"string[]"}},children:{defaultValue:null,description:"\u5B50\u5143\u7D20",name:"children",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Menu/menu.tsx#menu"]={docgenInfo:menu.__docgenInfo,name:"menu",path:"src/components/Menu/menu.tsx#menu"})}catch{}const I=l(({index:e,title:t,children:s,className:p})=>{const o=y.exports.useContext(A),f=o.defaultOpenSubMenus,i=e&&o.mode==="vertical"?f.includes(e):!1,[r,M]=y.exports.useState(i),E=_("menu-item submenu-item",p,{"is-active":o.index===e,"is-opened":r,"is-vertical":o.mode==="vertical"}),x=l(a=>{a.preventDefault(),M(!r)},"handleClick");let B;const h=l((a,d)=>{clearTimeout(B),a.preventDefault(),B=setTimeout(()=>{M(d)},300)},"handleMouse"),v=o.mode==="vertical"?{onClick:x}:{},c=o.mode!=="vertical"?{onMouseEnter:a=>{h(a,!0)},onMouseLeave:a=>{h(a,!1)}}:{},F=l(()=>{const a=_("v-submenu",{"menu-opened":r}),d=b.Children.map(s,(N,V)=>{const g=N;if(g.type.displayName==="MenuItem")return b.cloneElement(g,{index:`${e}-${V}`});console.error("Warning: SubMenu has a child which is not a MenuItem component")});return n(T,{in:r,timeout:300,animation:"zoom-in-top",children:n("ul",{className:a,children:d})})},"renderChildren");return m("li",{className:E,...c,children:[m("div",{className:"submenu-title",...v,children:[t,n(R,{icon:"angle-down",className:"arrow-icon"})]}),F()]},e)},"SubMenu");I.displayName="SubMenu";try{I.displayName="SubMenu",I.__docgenInfo={description:"",displayName:"SubMenu",props:{index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Menu/subMenu.tsx#SubMenu"]={docgenInfo:I.__docgenInfo,name:"SubMenu",path:"src/components/Menu/subMenu.tsx#SubMenu"})}catch{}const C=l(e=>{const{index:t,disabled:s,className:p,style:o,children:f}=e,i=y.exports.useContext(A),r=_("menu-item",p,{"is-disabled":s,"is-active":i.index===t});return n("li",{className:r,style:o,onClick:l(()=>{i.onSelect&&!s&&typeof t=="string"&&i.onSelect(t)},"handleClick"),children:f})},"MenuItem");C.displayName="MenuItem";try{C.displayName="MenuItem",C.__docgenInfo={description:"",displayName:"MenuItem",props:{index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Menu/menuItem.tsx#MenuItem"]={docgenInfo:C.__docgenInfo,name:"MenuItem",path:"src/components/Menu/menuItem.tsx#MenuItem"})}catch{}const D=S;D.Item=C;D.SubMenu=I;const u=D,G={parameters:{storySource:{source:`import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import Menu from './index'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Data Entry/Menu \u5BFC\u822A\u83DC\u5355',
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
`,locationsMap:{"horizontal-menu":{startLoc:{col:59,line:12},endLoc:{col:1,line:27},startBody:{col:59,line:12},endBody:{col:1,line:27}},"vertical-menu":{startLoc:{col:57,line:28},endLoc:{col:1,line:44},startBody:{col:57,line:28},endBody:{col:1,line:44}}}}},title:"Data Entry/Menu \u5BFC\u822A\u83DC\u5355",component:u},J=l(e=>m(u,{...e,defaultIndex:"0",onSelect:t=>O(`clicked ${t} item`),children:[n(u.Item,{children:"menu 1"}),n(u.Item,{disabled:!0,children:"disabled"}),m(u.SubMenu,{title:"sub menu",children:[n(u.Item,{children:"submenu 1"}),n(u.Item,{children:"submenu 1"}),n(u.Item,{children:"submenu 1"})]}),n(u.Item,{children:"menu2"})]}),"HorizontalMenu"),Q=l(e=>m(u,{...e,defaultIndex:"0",mode:"vertical",onSelect:t=>O(`clicked ${t} item`),children:[n(u.Item,{children:"cool link"}),n(u.Item,{disabled:!0,children:"disabled"}),m(u.SubMenu,{title:"sub menu",children:[n(u.Item,{children:"submenu 1"}),n(u.Item,{children:"submenu 1"}),n(u.Item,{children:"submenu 1"})]}),n(u.Item,{children:"cool link 2"})]}),"VerticalMenu"),U=["HorizontalMenu","VerticalMenu"];export{J as HorizontalMenu,Q as VerticalMenu,U as __namedExportsOrder,G as default};
//# sourceMappingURL=menu.stories.de70f44e.js.map
