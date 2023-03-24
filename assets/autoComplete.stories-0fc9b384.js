var I=Object.defineProperty;var u=(t,n)=>I(t,"name",{value:n,configurable:!0});import{a as v,j as c}from"./jsx-runtime-303a4c05.js";import{a as O}from"./index-3a9bb9c2.js";import{r as o}from"./index-2441a40f.js";import"./index-b370304f.js";import"./index-edab20a9.js";import"./index-fffa9e7a.js";import{c as q}from"./index-ed86a6de.js";import{I as x}from"./input-2092f869.js";import{T as N}from"./transition-f9113d95.js";import{I as P}from"./icon-08ccc11e.js";import{a as L}from"./axios-1622a277.js";import"./iframe-95599c29.js";import"./make-decorator-bdd7e0c0.js";import"./index-68c89078.js";import"./index-c49ee5c5.js";import"./index-50ee27ec.js";const J=u((t,n=300)=>{const[r,i]=o.useState(t);return o.useEffect(()=>{const m=window.setTimeout(()=>{i(t)},n);return()=>{clearTimeout(m)}},[t,n]),r},"useDebounce"),X=u((t,n)=>{o.useEffect(()=>{const r=u(i=>{!t.current||t.current.contains(i.target)||n(i)},"listener");return document.addEventListener("click",r),()=>{document.removeEventListener("click",r)}},[t,n])},"useClickOutside"),d=u(t=>{const{fetchSuggestions:n,onSelect:r,value:i,renderOptions:m,...V}=t,[C,y]=o.useState(i||""),[l,a]=o.useState([]),[g,h]=o.useState(!1),[p,A]=o.useState(-1),f=o.useRef(!1),D=o.useRef(null),E=J(C,500),[w,F]=o.useState(!1);X(D,()=>{a([])}),o.useEffect(()=>{if(E&&f.current){const e=n(E);e instanceof Promise?(h(!0),e.then(s=>{a(s),h(!1),s.length>0&&F(!0)})):(a(e),F(!0))}else a([]),F(!1);A(-1)},[E]);const _=u(e=>{const s=e.target.value.trim();y(s),f.current=!0},"handleChange"),S=u(e=>{y(e.value),a([]),r&&r(e),f.current=!1},"handleSelect"),B=u(e=>{e<0&&(e=0),e>=l.length&&(e=l.length-1),A(e)},"highlight"),b=u(e=>{switch(e.key){case"Enter":l[p]&&S(l[p]);break;case"ArrowUp":B(p-1);break;case"ArrowDown":B(p+1);break;case"Escape":a([]);break}},"handleKeyDown"),T=u(e=>m?m(e):e.value,"renderTemplate"),k=u(()=>c(N,{in:w||g,animation:"zoom-in-top",timeout:300,onExited:()=>{a([])},children:v("ul",{className:q({"v-suggestion-list":l.length>0||g}),children:[g&&c("div",{className:"suggstions-loading-icon",children:c(P,{icon:"spinner",spin:!0})}),l.map((e,s)=>{const R=q("suggestion-item",{"is-active":s===p});return c("li",{className:R,onClick:()=>S(e),children:T(e)},s)})]})}),"generateDropdown");return v("div",{className:"v-auto-complete",ref:D,children:[c(x,{...V,value:C,onKeyDown:b,onChange:_}),k()]})},"AutoComplete");try{d.displayName="AutoComplete",d.__docgenInfo={description:`> AutoComplete 输入框自动完成功能，需要输入建议/辅助提示。

### 引入方法

\`\`\`js

import { AutoComplete } from 'val-design'

\`\`\``,displayName:"AutoComplete",props:{fetchSuggestions:{defaultValue:null,description:"",name:"fetchSuggestions",required:!0,type:{name:"(str: string) => DataSourceType<Record<string, unknown>>[] | Promise<DataSourceType<Record<string, unknown>>[]>"}},onSelect:{defaultValue:null,description:"点击选择项的回调",name:"onSelect",required:!1,type:{name:"((item: DataSourceType<Record<string, unknown>>) => void)"}},renderOptions:{defaultValue:null,description:"自定义模板",name:"renderOptions",required:!1,type:{name:"((item: DataSourceType<Record<string, unknown>>) => ReactElement<any, string | JSXElementConstructor<any>>)"}},size:{defaultValue:null,description:"设置 input 大小，支持 lg 或者是 sm",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},disabled:{defaultValue:null,description:"是否禁用 Input",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}},icon:{defaultValue:null,description:"添加图标，在右侧悬浮添加一个图标，用于提示",name:"icon",required:!1,type:{name:"IconProp"}},prepend:{defaultValue:null,description:"添加前缀 用于配置一些固定组合",name:"prepend",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},append:{defaultValue:null,description:"添加后缀 用于配置一些固定组合",name:"append",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}}}}}catch{}try{autoComplete.displayName="autoComplete",autoComplete.__docgenInfo={description:`> AutoComplete 输入框自动完成功能，需要输入建议/辅助提示。

### 引入方法

\`\`\`js

import { AutoComplete } from 'val-design'

\`\`\``,displayName:"autoComplete",props:{fetchSuggestions:{defaultValue:null,description:"",name:"fetchSuggestions",required:!0,type:{name:"(str: string) => DataSourceType<Record<string, unknown>>[] | Promise<DataSourceType<Record<string, unknown>>[]>"}},onSelect:{defaultValue:null,description:"点击选择项的回调",name:"onSelect",required:!1,type:{name:"((item: DataSourceType<Record<string, unknown>>) => void)"}},renderOptions:{defaultValue:null,description:"自定义模板",name:"renderOptions",required:!1,type:{name:"((item: DataSourceType<Record<string, unknown>>) => ReactElement<any, string | JSXElementConstructor<any>>)"}},size:{defaultValue:null,description:"设置 input 大小，支持 lg 或者是 sm",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},disabled:{defaultValue:null,description:"是否禁用 Input",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}},icon:{defaultValue:null,description:"添加图标，在右侧悬浮添加一个图标，用于提示",name:"icon",required:!1,type:{name:"IconProp"}},prepend:{defaultValue:null,description:"添加前缀 用于配置一些固定组合",name:"prepend",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},append:{defaultValue:null,description:"添加后缀 用于配置一些固定组合",name:"append",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}}}}}catch{}const j=u(t=>L.get(`https://api.github.com/search/users?q=${t}`).then(n=>n).then(({data:n})=>n.items.slice(0,10).map(r=>({value:r.login,...r}))),"handleFetch"),ie={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { AutoComplete } from './autoComplete'
import axios from 'axios'

const handleFetch = (query: string) => {
  // return arr.filter((item) => parseInt(item) > parseInt(query))
  return axios
    .get(\`https://api.github.com/search/users?q=\${query}\`)
    .then(res => res)
    .then(({ data }) => {
      return data.items.slice(0, 10).map((item: any) => ({ value: item.login, ...item }))
    })
}

export default {
  title: 'Data Entry/Auto Complete 自动完成',
  component: AutoComplete,
} as ComponentMeta<typeof AutoComplete>

const Template: ComponentStory<typeof AutoComplete> = props => <AutoComplete {...props} />

export const DefaultAutoComplete = Template.bind({})

// interface GithunUserProps {
//   login: string
//   url: string
//   avatar_url: string
// }
// const renderOption = (i: DataSourceType) => {
//   const item = i as DataSourceType<GithunUserProps>
//   return (
//     <>
//       <h2>login:{item.login}</h2>
//       <p>url:{item.url}</p>
//       <p>avatar:{item.avatar_url}</p>
//     </>
//   )
// }

DefaultAutoComplete.args = {
  fetchSuggestions: handleFetch,
  onSelect: action('selected'),
  // renderOptions: renderOption
}
`,locationsMap:{"default-auto-complete":{startLoc:{col:54,line:22},endLoc:{col:90,line:22},startBody:{col:54,line:22},endBody:{col:90,line:22}}}}},title:"Data Entry/Auto Complete 自动完成",component:d},z=u(t=>c(d,{...t}),"Template"),M=z.bind({});M.args={fetchSuggestions:j,onSelect:O("selected")};const le=["DefaultAutoComplete"];export{M as DefaultAutoComplete,le as __namedExportsOrder,ie as default};
//# sourceMappingURL=autoComplete.stories-0fc9b384.js.map