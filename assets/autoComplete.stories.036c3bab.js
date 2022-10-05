var I=Object.defineProperty;var u=(t,n)=>I(t,"name",{value:n,configurable:!0});import{a as b}from"./index.7cb6ad38.js";import{r as o,a as _,j as p}from"./jsx-runtime.a50859f3.js";import"./index.30b969c6.js";import"./index.1b959000.js";import"./index.f9a5a75d.js";import{c as v}from"./index.220dfe0f.js";import{I as k}from"./input.10123b1d.js";import{T as L}from"./transition.0c8e73c9.js";import{I as N}from"./icon.18c15359.js";import{a as P}from"./axios.ac8fd117.js";import"./iframe.8e636a64.js";import"./make-decorator.698874d8.js";import"./index.0c85efc0.js";import"./index.241e153c.js";import"./index.6f8f5b77.js";const J=u((t,n=300)=>{const[r,l]=o.exports.useState(t);return o.exports.useEffect(()=>{const d=window.setTimeout(()=>{l(t)},n);return()=>{clearTimeout(d)}},[t,n]),r},"useDebounce"),K=u((t,n)=>{o.exports.useEffect(()=>{const r=u(l=>{!t.current||t.current.contains(l.target)||n(l)},"listener");return document.addEventListener("click",r),()=>{document.removeEventListener("click",r)}},[t,n])},"useClickOutside"),m=u(t=>{const{fetchSuggestions:n,onSelect:r,value:l,renderOptions:d,...T}=t,[A,F]=o.exports.useState(l||""),[i,a]=o.exports.useState([]),[f,y]=o.exports.useState(!1),[c,h]=o.exports.useState(-1),g=o.exports.useRef(!1),S=o.exports.useRef(null),E=J(A,500),[R,C]=o.exports.useState(!1);K(S,()=>{a([])}),o.exports.useEffect(()=>{if(E&&g.current){const e=n(E);e instanceof Promise?(y(!0),e.then(s=>{a(s),y(!1),s.length>0&&C(!0)})):(a(e),C(!0))}else a([]),C(!1);h(-1)},[E]);const q=u(e=>{const s=e.target.value.trim();F(s),g.current=!0},"handleChange"),D=u(e=>{F(e.value),a([]),r&&r(e),g.current=!1},"handleSelect"),B=u(e=>{e<0&&(e=0),e>=i.length&&(e=i.length-1),h(e)},"highlight"),x=u(e=>{switch(e.key){case"Enter":i[c]&&D(i[c]);break;case"ArrowUp":B(c-1);break;case"ArrowDown":B(c+1);break;case"Escape":a([]);break}},"handleKeyDown"),V=u(e=>d?d(e):e.value,"renderTemplate"),O=u(()=>p(L,{in:R||f,animation:"zoom-in-top",timeout:300,onExited:()=>{a([])},children:_("ul",{className:v({"v-suggestion-list":i.length>0||f}),children:[f&&p("div",{className:"suggstions-loading-icon",children:p(N,{icon:"spinner",spin:!0})}),i.map((e,s)=>{const w=v("suggestion-item",{"is-active":s===c});return p("li",{className:w,onClick:()=>D(e),children:V(e)},s)})]})}),"generateDropdown");return _("div",{className:"v-auto-complete",ref:S,children:[p(k,{...T,value:A,onKeyDown:x,onChange:q}),O()]})},"AutoComplete");try{m.displayName="AutoComplete",m.__docgenInfo={description:`> AutoComplete \u8F93\u5165\u6846\u81EA\u52A8\u5B8C\u6210\u529F\u80FD\uFF0C\u9700\u8981\u8F93\u5165\u5EFA\u8BAE/\u8F85\u52A9\u63D0\u793A\u3002

### \u5F15\u5165\u65B9\u6CD5

\`\`\`js

import { AutoComplete } from 'val-design'

\`\`\``,displayName:"AutoComplete",props:{fetchSuggestions:{defaultValue:null,description:"",name:"fetchSuggestions",required:!0,type:{name:"(str: string) => DataSourceType<Record<string, unknown>>[] | Promise<DataSourceType<Record<string, unknown>>[]>"}},onSelect:{defaultValue:null,description:"\u70B9\u51FB\u9009\u62E9\u9879\u7684\u56DE\u8C03",name:"onSelect",required:!1,type:{name:"((item: DataSourceType<Record<string, unknown>>) => void)"}},renderOptions:{defaultValue:null,description:"\u81EA\u5B9A\u4E49\u6A21\u677F",name:"renderOptions",required:!1,type:{name:"((item: DataSourceType<Record<string, unknown>>) => ReactElement<any, string | JSXElementConstructor<any>>)"}},size:{defaultValue:null,description:"\u8BBE\u7F6E input \u5927\u5C0F\uFF0C\u652F\u6301 lg \u6216\u8005\u662F sm",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},disabled:{defaultValue:null,description:"\u662F\u5426\u7981\u7528 Input",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}},icon:{defaultValue:null,description:"\u6DFB\u52A0\u56FE\u6807\uFF0C\u5728\u53F3\u4FA7\u60AC\u6D6E\u6DFB\u52A0\u4E00\u4E2A\u56FE\u6807\uFF0C\u7528\u4E8E\u63D0\u793A",name:"icon",required:!1,type:{name:"IconProp"}},prepend:{defaultValue:null,description:"\u6DFB\u52A0\u524D\u7F00 \u7528\u4E8E\u914D\u7F6E\u4E00\u4E9B\u56FA\u5B9A\u7EC4\u5408",name:"prepend",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},append:{defaultValue:null,description:"\u6DFB\u52A0\u540E\u7F00 \u7528\u4E8E\u914D\u7F6E\u4E00\u4E9B\u56FA\u5B9A\u7EC4\u5408",name:"append",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/AutoComplete/autoComplete.tsx#AutoComplete"]={docgenInfo:m.__docgenInfo,name:"AutoComplete",path:"src/components/AutoComplete/autoComplete.tsx#AutoComplete"})}catch{}try{autoComplete.displayName="autoComplete",autoComplete.__docgenInfo={description:`> AutoComplete \u8F93\u5165\u6846\u81EA\u52A8\u5B8C\u6210\u529F\u80FD\uFF0C\u9700\u8981\u8F93\u5165\u5EFA\u8BAE/\u8F85\u52A9\u63D0\u793A\u3002

### \u5F15\u5165\u65B9\u6CD5

\`\`\`js

import { AutoComplete } from 'val-design'

\`\`\``,displayName:"autoComplete",props:{fetchSuggestions:{defaultValue:null,description:"",name:"fetchSuggestions",required:!0,type:{name:"(str: string) => DataSourceType<Record<string, unknown>>[] | Promise<DataSourceType<Record<string, unknown>>[]>"}},onSelect:{defaultValue:null,description:"\u70B9\u51FB\u9009\u62E9\u9879\u7684\u56DE\u8C03",name:"onSelect",required:!1,type:{name:"((item: DataSourceType<Record<string, unknown>>) => void)"}},renderOptions:{defaultValue:null,description:"\u81EA\u5B9A\u4E49\u6A21\u677F",name:"renderOptions",required:!1,type:{name:"((item: DataSourceType<Record<string, unknown>>) => ReactElement<any, string | JSXElementConstructor<any>>)"}},size:{defaultValue:null,description:"\u8BBE\u7F6E input \u5927\u5C0F\uFF0C\u652F\u6301 lg \u6216\u8005\u662F sm",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},disabled:{defaultValue:null,description:"\u662F\u5426\u7981\u7528 Input",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}},icon:{defaultValue:null,description:"\u6DFB\u52A0\u56FE\u6807\uFF0C\u5728\u53F3\u4FA7\u60AC\u6D6E\u6DFB\u52A0\u4E00\u4E2A\u56FE\u6807\uFF0C\u7528\u4E8E\u63D0\u793A",name:"icon",required:!1,type:{name:"IconProp"}},prepend:{defaultValue:null,description:"\u6DFB\u52A0\u524D\u7F00 \u7528\u4E8E\u914D\u7F6E\u4E00\u4E9B\u56FA\u5B9A\u7EC4\u5408",name:"prepend",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},append:{defaultValue:null,description:"\u6DFB\u52A0\u540E\u7F00 \u7528\u4E8E\u914D\u7F6E\u4E00\u4E9B\u56FA\u5B9A\u7EC4\u5408",name:"append",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/AutoComplete/autoComplete.tsx#autoComplete"]={docgenInfo:autoComplete.__docgenInfo,name:"autoComplete",path:"src/components/AutoComplete/autoComplete.tsx#autoComplete"})}catch{}const X=u(t=>P.get(`https://api.github.com/search/users?q=${t}`).then(n=>n).then(({data:n})=>n.items.slice(0,10).map(r=>({value:r.login,...r}))),"handleFetch"),se={parameters:{storySource:{source:`import React from 'react'
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
  title: 'Data Entry/Auto Complete \u81EA\u52A8\u5B8C\u6210',
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
`,locationsMap:{"default-auto-complete":{startLoc:{col:54,line:24},endLoc:{col:1,line:26},startBody:{col:54,line:24},endBody:{col:1,line:26}}}}},title:"Data Entry/Auto Complete \u81EA\u52A8\u5B8C\u6210",component:m},j=u(t=>p(m,{...t}),"Template"),z=j.bind({});z.args={fetchSuggestions:X,onSelect:b("selected")};const le=["DefaultAutoComplete"];export{z as DefaultAutoComplete,le as __namedExportsOrder,se as default};
//# sourceMappingURL=autoComplete.stories.036c3bab.js.map
