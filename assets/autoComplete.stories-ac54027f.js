var w=Object.defineProperty;var u=(t,n)=>w(t,"name",{value:n,configurable:!0});import{a as I}from"./index-4f5f4b98.js";import{r as o,b as _,j as p}from"./jsx-runtime-597274de.js";import"./index-5b9c72b7.js";import"./index-548eb6eb.js";import"./index-0538f5e4.js";import{c as v}from"./index-9f7f24f4.js";import{I as k}from"./input-54b4d7a6.js";import{T as L}from"./transition-67cab8da.js";import{I as N}from"./icon-85347f99.js";import{a as P}from"./axios-6f819563.js";import"./iframe-ffb46370.js";import"./make-decorator-f61b13ac.js";import"./index-1a0fb9f3.js";import"./index-55a28f55.js";import"./index-a2f37619.js";const J=u((t,n=300)=>{const[r,l]=o.exports.useState(t);return o.exports.useEffect(()=>{const d=window.setTimeout(()=>{l(t)},n);return()=>{clearTimeout(d)}},[t,n]),r},"useDebounce"),K=u((t,n)=>{o.exports.useEffect(()=>{const r=u(l=>{!t.current||t.current.contains(l.target)||n(l)},"listener");return document.addEventListener("click",r),()=>{document.removeEventListener("click",r)}},[t,n])},"useClickOutside"),m=u(t=>{const{fetchSuggestions:n,onSelect:r,value:l,renderOptions:d,...T}=t,[A,F]=o.exports.useState(l||""),[i,a]=o.exports.useState([]),[f,y]=o.exports.useState(!1),[c,h]=o.exports.useState(-1),g=o.exports.useRef(!1),S=o.exports.useRef(null),E=J(A,500),[R,C]=o.exports.useState(!1);K(S,()=>{a([])}),o.exports.useEffect(()=>{if(E&&g.current){const e=n(E);e instanceof Promise?(y(!0),e.then(s=>{a(s),y(!1),s.length>0&&C(!0)})):(a(e),C(!0))}else a([]),C(!1);h(-1)},[E]);const q=u(e=>{const s=e.target.value.trim();F(s),g.current=!0},"handleChange"),D=u(e=>{F(e.value),a([]),r&&r(e),g.current=!1},"handleSelect"),B=u(e=>{e<0&&(e=0),e>=i.length&&(e=i.length-1),h(e)},"highlight"),x=u(e=>{switch(e.key){case"Enter":i[c]&&D(i[c]);break;case"ArrowUp":B(c-1);break;case"ArrowDown":B(c+1);break;case"Escape":a([]);break}},"handleKeyDown"),V=u(e=>d?d(e):e.value,"renderTemplate"),O=u(()=>p(L,{in:R||f,animation:"zoom-in-top",timeout:300,onExited:()=>{a([])},children:_("ul",{className:v({"v-suggestion-list":i.length>0||f}),children:[f&&p("div",{className:"suggstions-loading-icon",children:p(N,{icon:"spinner",spin:!0})}),i.map((e,s)=>{const b=v("suggestion-item",{"is-active":s===c});return p("li",{className:b,onClick:()=>D(e),children:V(e)},s)})]})}),"generateDropdown");return _("div",{className:"v-auto-complete",ref:S,children:[p(k,{...T,value:A,onKeyDown:x,onChange:q}),O()]})},"AutoComplete");try{m.displayName="AutoComplete",m.__docgenInfo={description:`> AutoComplete 输入框自动完成功能，需要输入建议/辅助提示。

### 引入方法

\`\`\`js

import { AutoComplete } from 'val-design'

\`\`\``,displayName:"AutoComplete",props:{fetchSuggestions:{defaultValue:null,description:"",name:"fetchSuggestions",required:!0,type:{name:"(str: string) => DataSourceType<Record<string, unknown>>[] | Promise<DataSourceType<Record<string, unknown>>[]>"}},onSelect:{defaultValue:null,description:"点击选择项的回调",name:"onSelect",required:!1,type:{name:"((item: DataSourceType<Record<string, unknown>>) => void)"}},renderOptions:{defaultValue:null,description:"自定义模板",name:"renderOptions",required:!1,type:{name:"((item: DataSourceType<Record<string, unknown>>) => ReactElement<any, string | JSXElementConstructor<any>>)"}},size:{defaultValue:null,description:"设置 input 大小，支持 lg 或者是 sm",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},disabled:{defaultValue:null,description:"是否禁用 Input",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}},icon:{defaultValue:null,description:"添加图标，在右侧悬浮添加一个图标，用于提示",name:"icon",required:!1,type:{name:"IconProp"}},prepend:{defaultValue:null,description:"添加前缀 用于配置一些固定组合",name:"prepend",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},append:{defaultValue:null,description:"添加后缀 用于配置一些固定组合",name:"append",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/AutoComplete/autoComplete.tsx#AutoComplete"]={docgenInfo:m.__docgenInfo,name:"AutoComplete",path:"src/components/AutoComplete/autoComplete.tsx#AutoComplete"})}catch{}try{autoComplete.displayName="autoComplete",autoComplete.__docgenInfo={description:`> AutoComplete 输入框自动完成功能，需要输入建议/辅助提示。

### 引入方法

\`\`\`js

import { AutoComplete } from 'val-design'

\`\`\``,displayName:"autoComplete",props:{fetchSuggestions:{defaultValue:null,description:"",name:"fetchSuggestions",required:!0,type:{name:"(str: string) => DataSourceType<Record<string, unknown>>[] | Promise<DataSourceType<Record<string, unknown>>[]>"}},onSelect:{defaultValue:null,description:"点击选择项的回调",name:"onSelect",required:!1,type:{name:"((item: DataSourceType<Record<string, unknown>>) => void)"}},renderOptions:{defaultValue:null,description:"自定义模板",name:"renderOptions",required:!1,type:{name:"((item: DataSourceType<Record<string, unknown>>) => ReactElement<any, string | JSXElementConstructor<any>>)"}},size:{defaultValue:null,description:"设置 input 大小，支持 lg 或者是 sm",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},disabled:{defaultValue:null,description:"是否禁用 Input",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}},icon:{defaultValue:null,description:"添加图标，在右侧悬浮添加一个图标，用于提示",name:"icon",required:!1,type:{name:"IconProp"}},prepend:{defaultValue:null,description:"添加前缀 用于配置一些固定组合",name:"prepend",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},append:{defaultValue:null,description:"添加后缀 用于配置一些固定组合",name:"append",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/AutoComplete/autoComplete.tsx#autoComplete"]={docgenInfo:autoComplete.__docgenInfo,name:"autoComplete",path:"src/components/AutoComplete/autoComplete.tsx#autoComplete"})}catch{}const X=u(t=>P.get(`https://api.github.com/search/users?q=${t}`).then(n=>n).then(({data:n})=>n.items.slice(0,10).map(r=>({value:r.login,...r}))),"handleFetch"),se={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { AutoComplete } from './autoComplete'
import axios from 'axios'

const handleFetch = (query: string) => {
  // return arr.filter((item) => parseInt(item) > parseInt(query))
  return axios
    .get(\`https://api.github.com/search/users?q=\${query}\`)
    .then((res) => res)
    .then(({ data }) => {
      return data.items
        .slice(0, 10)
        .map((item: any) => ({ value: item.login, ...item }))
    })
}

export default {
  title: 'Data Entry/Auto Complete 自动完成',
  component: AutoComplete
} as ComponentMeta<typeof AutoComplete>

const Template: ComponentStory<typeof AutoComplete> = (props) => (
  <AutoComplete {...props} />
)

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
  onSelect: action('selected')
  // renderOptions: renderOption
}
`,locationsMap:{"default-auto-complete":{startLoc:{col:54,line:24},endLoc:{col:1,line:26},startBody:{col:54,line:24},endBody:{col:1,line:26}}}}},title:"Data Entry/Auto Complete 自动完成",component:m},j=u(t=>p(m,{...t}),"Template"),z=j.bind({});z.args={fetchSuggestions:X,onSelect:I("selected")};const le=["DefaultAutoComplete"];export{z as DefaultAutoComplete,le as __namedExportsOrder,se as default};
//# sourceMappingURL=autoComplete.stories-ac54027f.js.map
