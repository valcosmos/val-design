var k=Object.defineProperty;var a=(e,t)=>k(e,"name",{value:t,configurable:!0});import{j as n,a as m}from"./jsx-runtime-69008c6b.js";import{r as y,R as h}from"./index-a38f3d31.js";import{c as b}from"./index-ed86a6de.js";import{I as z}from"./icon-bdd8a4fe.js";import{T as O}from"./transition-fca1cb94.js";import{a as A}from"./index-7b92f080.js";import"./es.object.get-own-property-descriptor-d261b708.js";import"./index-c49ee5c5.js";import"./index-50ee27ec.js";import"./index-b042d21f.js";import"./iframe-011e9d89.js";import"./web.url.constructor-fb8c8940.js";import"./es.number.is-integer-d7d899e3.js";import"./make-decorator-3cd8a5d0.js";const _=y.createContext({index:"0"}),C=a(e=>{const{className:t,mode:o,style:p,children:i,defaultIndex:f,onSelect:r,defaultOpenSubMenus:s}=e,[M,F]=y.useState(f),D=b("v-menu",t,{"menu-vertical":o==="vertical","menu-horizontal":o!=="vertical"}),I={index:M||"0",onSelect:a(d=>{F(d),r&&r(d)},"handleClick"),mode:o,defaultOpenSubMenus:s},E=a(()=>h.Children.map(i,(d,x)=>{const l=d,{displayName:c}=l.type;if(c==="MenuItem"||c==="SubMenu")return h.cloneElement(l,{index:x.toString()});console.error("Warning: Menu has a child which is not a MenuItem component")}),"renderChildren");return n("ul",{className:D,style:p,"data-testid":"test-menu",children:n(_.Provider,{value:I,children:E()})})},"Menu$1");C.defaultProps={defaultIndex:"0",mode:"horizontal",defaultOpenSubMenus:[]};try{C.displayName="Menu",C.__docgenInfo={description:`> 为网站提供导航功能的菜单。支持横向纵向两种模式，支持下拉菜单。

### 引用方法

\`\`\`js

 import { Menu } from 'v-design'

\`\`\``,displayName:"Menu",props:{defaultIndex:{defaultValue:{value:"0"},description:"默认 active 的菜单项的索引值",name:"defaultIndex",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},mode:{defaultValue:{value:"horizontal"},description:"菜单类型 横向或者纵向",name:"mode",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},style:{defaultValue:null,description:"菜单样式",name:"style",required:!1,type:{name:"CSSProperties"}},onSelect:{defaultValue:null,description:"点击菜单项触发的回掉函数",name:"onSelect",required:!1,type:{name:"((selectedIndex: string) => void)"}},defaultOpenSubMenus:{defaultValue:{value:"[]"},description:"设置子菜单的默认打开 只在纵向模式下生效",name:"defaultOpenSubMenus",required:!1,type:{name:"string[]"}},children:{defaultValue:null,description:"子元素",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}try{menu.displayName="menu",menu.__docgenInfo={description:`> 为网站提供导航功能的菜单。支持横向纵向两种模式，支持下拉菜单。

### 引用方法

\`\`\`js

 import { Menu } from 'v-design'

\`\`\``,displayName:"menu",props:{defaultIndex:{defaultValue:{value:"0"},description:"默认 active 的菜单项的索引值",name:"defaultIndex",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},mode:{defaultValue:{value:"horizontal"},description:"菜单类型 横向或者纵向",name:"mode",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},style:{defaultValue:null,description:"菜单样式",name:"style",required:!1,type:{name:"CSSProperties"}},onSelect:{defaultValue:null,description:"点击菜单项触发的回掉函数",name:"onSelect",required:!1,type:{name:"((selectedIndex: string) => void)"}},defaultOpenSubMenus:{defaultValue:{value:"[]"},description:"设置子菜单的默认打开 只在纵向模式下生效",name:"defaultOpenSubMenus",required:!1,type:{name:"string[]"}},children:{defaultValue:null,description:"子元素",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const v=a(({index:e,title:t,children:o,className:p})=>{const i=y.useContext(_),f=i.defaultOpenSubMenus,r=e&&i.mode==="vertical"?f.includes(e):!1,[s,M]=y.useState(r),F=b("menu-item submenu-item",p,{"is-active":i.index===e,"is-opened":s,"is-vertical":i.mode==="vertical"}),D=a(l=>{l.preventDefault(),M(!s)},"handleClick");let B;const I=a((l,c)=>{clearTimeout(B),l.preventDefault(),B=setTimeout(()=>{M(c)},300)},"handleMouse"),E=i.mode==="vertical"?{onClick:D}:{},d=i.mode!=="vertical"?{onMouseEnter:l=>{I(l,!0)},onMouseLeave:l=>{I(l,!1)}}:{},x=a(()=>{const l=b("v-submenu",{"menu-opened":s}),c=h.Children.map(o,(V,q)=>{const N=V;if(N.type.displayName==="MenuItem")return h.cloneElement(N,{index:`${e}-${q}`});console.error("Warning: SubMenu has a child which is not a MenuItem component")});return n(O,{in:s,timeout:300,animation:"zoom-in-top",children:n("ul",{className:l,children:c})})},"renderChildren");return m("li",{className:F,...d,children:[m("div",{className:"submenu-title",...E,children:[t,n(z,{icon:"angle-down",className:"arrow-icon"})]}),x()]},e)},"SubMenu");v.displayName="SubMenu";try{v.displayName="SubMenu",v.__docgenInfo={description:"",displayName:"SubMenu",props:{index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const S=a(e=>{const{index:t,disabled:o,className:p,style:i,children:f}=e,r=y.useContext(_),s=b("menu-item",p,{"is-disabled":o,"is-active":r.index===t});return n("li",{className:s,style:i,onClick:a(()=>{r.onSelect&&!o&&typeof t=="string"&&r.onSelect(t)},"handleClick"),children:f})},"MenuItem");S.displayName="MenuItem";try{S.displayName="MenuItem",S.__docgenInfo={description:"",displayName:"MenuItem",props:{index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const g=C;g.Item=S;g.SubMenu=v;const u=g,Y={parameters:{storySource:{source:`import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import Menu from './index'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Data Entry/Menu 导航菜单',
  component: Menu,
} as ComponentMeta<typeof Menu>

export const HorizontalMenu: ComponentStory<typeof Menu> = args => (
  <Menu {...args} defaultIndex={'0'} onSelect={index => action(\`clicked \${index} item\`)}>
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
export const VerticalMenu: ComponentStory<typeof Menu> = args => (
  <Menu
    {...args}
    defaultIndex={'0'}
    mode="vertical"
    onSelect={index => action(\`clicked \${index} item\`)}
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
`,locationsMap:{"horizontal-menu":{startLoc:{col:59,line:12},endLoc:{col:1,line:23},startBody:{col:59,line:12},endBody:{col:1,line:23}},"vertical-menu":{startLoc:{col:57,line:24},endLoc:{col:1,line:40},startBody:{col:57,line:24},endBody:{col:1,line:40}}}}},title:"Data Entry/Menu 导航菜单",component:u},Z=a(e=>m(u,{...e,defaultIndex:"0",onSelect:t=>A(`clicked ${t} item`),children:[n(u.Item,{children:"menu 1"}),n(u.Item,{disabled:!0,children:"disabled"}),m(u.SubMenu,{title:"sub menu",children:[n(u.Item,{children:"submenu 1"}),n(u.Item,{children:"submenu 1"}),n(u.Item,{children:"submenu 1"})]}),n(u.Item,{children:"menu2"})]}),"HorizontalMenu"),ee=a(e=>m(u,{...e,defaultIndex:"0",mode:"vertical",onSelect:t=>A(`clicked ${t} item`),children:[n(u.Item,{children:"cool link"}),n(u.Item,{disabled:!0,children:"disabled"}),m(u.SubMenu,{title:"sub menu",children:[n(u.Item,{children:"submenu 1"}),n(u.Item,{children:"submenu 1"}),n(u.Item,{children:"submenu 1"})]}),n(u.Item,{children:"cool link 2"})]}),"VerticalMenu"),ne=["HorizontalMenu","VerticalMenu"];export{Z as HorizontalMenu,ee as VerticalMenu,ne as __namedExportsOrder,Y as default};
//# sourceMappingURL=menu.stories-79a03404.js.map
