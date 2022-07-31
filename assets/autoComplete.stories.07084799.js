import{a as R}from"./index.07d00392.js";import{r as n,a as _,j as i}from"./jsx-runtime.f3150366.js";import"./index.d96f61bf.js";import"./index.7927ca20.js";import{I as d}from"./input.7ed8b3fd.js";import{c as v}from"./index.b3d31cad.js";import{T as j}from"./transition.9b0b7e30.js";import{I as L}from"./icon.34088235.js";import{a as w}from"./index.a9f4cf6d.js";import"./iframe.cc34769a.js";import"./make-decorator.0eef16ed.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.f4b47b74.js";import"./index.es.231671ec.js";import"./index.0e0ded8f.js";try{d.displayName="Input",d.__docgenInfo={description:`> \u4E00\u4E2A\u57FA\u7840\u7684Input\u7EC4\u4EF6\u5C01\u88C5\uFF0C\u53EF\u6DFB\u52A0\u56FE\u6807\uFF0C\u524D\u7F00\u6216\u8005\u540E\u7F00\u7EC4\u5408\u3002

### \u5F15\u7528\u65B9\u6CD5

\`\`\`js

import { Input } from 'val-design'

\`\`\``,displayName:"Input",props:{disabled:{defaultValue:null,description:"\u662F\u5426\u7981\u7528 Input",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"\u8BBE\u7F6E input \u5927\u5C0F\uFF0C\u652F\u6301 lg \u6216\u8005\u662F sm",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},icon:{defaultValue:null,description:"\u6DFB\u52A0\u56FE\u6807\uFF0C\u5728\u53F3\u4FA7\u60AC\u6D6E\u6DFB\u52A0\u4E00\u4E2A\u56FE\u6807\uFF0C\u7528\u4E8E\u63D0\u793A",name:"icon",required:!1,type:{name:"IconProp"}},prepend:{defaultValue:null,description:"\u6DFB\u52A0\u524D\u7F00 \u7528\u4E8E\u914D\u7F6E\u4E00\u4E9B\u56FA\u5B9A\u7EC4\u5408",name:"prepend",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},append:{defaultValue:null,description:"\u6DFB\u52A0\u540E\u7F00 \u7528\u4E8E\u914D\u7F6E\u4E00\u4E9B\u56FA\u5B9A\u7EC4\u5408",name:"append",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Input/index.tsx#Input"]={docgenInfo:d.__docgenInfo,name:"Input",path:"src/components/Input/index.tsx#Input"})}catch{}const k=(u,t=300)=>{const[o,s]=n.exports.useState(u);return n.exports.useEffect(()=>{const m=window.setTimeout(()=>{s(u)},t);return()=>{clearTimeout(m)}},[u,t]),o},N=(u,t)=>{n.exports.useEffect(()=>{const o=s=>{!u.current||u.current.contains(s.target)||t(s)};return document.addEventListener("click",o),()=>{document.removeEventListener("click",o)}},[u,t])},c=u=>{const{fetchSuggestions:t,onSelect:o,value:s,renderOptions:m,...I}=u,[g,A]=n.exports.useState(s||""),[l,a]=n.exports.useState([]),[E,y]=n.exports.useState(!1),[p,h]=n.exports.useState(-1),f=n.exports.useRef(!1),S=n.exports.useRef(null),C=k(g,500),[O,F]=n.exports.useState(!1);N(S,()=>{a([])}),n.exports.useEffect(()=>{if(C&&f.current){const e=t(C);e instanceof Promise?(y(!0),e.then(r=>{a(r),y(!1),r.length>0&&F(!0)})):(a(e),F(!0))}else a([]),F(!1);h(-1)},[C]);const b=e=>{const r=e.target.value.trim();A(r),f.current=!0},D=e=>{A(e.value),a([]),o&&o(e),f.current=!1},B=e=>{e<0&&(e=0),e>=l.length&&(e=l.length-1),h(e)},q=e=>{switch(e.key){case"Enter":l[p]&&D(l[p]);break;case"ArrowUp":B(p-1);break;case"ArrowDown":B(p+1);break;case"Escape":a([]);break}},V=e=>m?m(e):e.value,x=()=>i(j,{in:O||E,animation:"zoom-in-top",timeout:300,onExited:()=>{a([])},children:_("ul",{className:v({"v-suggestion-list":l.length>0||E}),children:[E&&i("div",{className:"suggstions-loading-icon",children:i(L,{icon:"spinner",spin:!0})}),l.map((e,r)=>{const T=v("suggestion-item",{"is-active":r===p});return i("li",{className:T,onClick:()=>D(e),children:V(e)},r)})]})});return _("div",{className:"v-auto-complete",ref:S,children:[i(d,{...I,value:g,onKeyDown:q,onChange:b}),x()]})};try{c.displayName="AutoComplete",c.__docgenInfo={description:`> AutoComplete \u8F93\u5165\u6846\u81EA\u52A8\u5B8C\u6210\u529F\u80FD\uFF0C\u9700\u8981\u8F93\u5165\u5EFA\u8BAE/\u8F85\u52A9\u63D0\u793A\u3002

### \u5F15\u5165\u65B9\u6CD5

\`\`\`js

import { AutoComplete } from 'val-design'

\`\`\``,displayName:"AutoComplete",props:{fetchSuggestions:{defaultValue:null,description:"",name:"fetchSuggestions",required:!0,type:{name:"(str: string) => DataSourceObject[] | Promise<DataSourceObject[]>"}},onSelect:{defaultValue:null,description:"\u70B9\u51FB\u9009\u62E9\u9879\u7684\u56DE\u8C03",name:"onSelect",required:!1,type:{name:"((item: DataSourceObject) => void)"}},renderOptions:{defaultValue:null,description:"\u81EA\u5B9A\u4E49\u6A21\u677F",name:"renderOptions",required:!1,type:{name:"((item: DataSourceObject) => ReactElement<any, string | JSXElementConstructor<any>>)"}},size:{defaultValue:null,description:"\u8BBE\u7F6E input \u5927\u5C0F\uFF0C\u652F\u6301 lg \u6216\u8005\u662F sm",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},disabled:{defaultValue:null,description:"\u662F\u5426\u7981\u7528 Input",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}},icon:{defaultValue:null,description:"\u6DFB\u52A0\u56FE\u6807\uFF0C\u5728\u53F3\u4FA7\u60AC\u6D6E\u6DFB\u52A0\u4E00\u4E2A\u56FE\u6807\uFF0C\u7528\u4E8E\u63D0\u793A",name:"icon",required:!1,type:{name:"IconProp"}},prepend:{defaultValue:null,description:"\u6DFB\u52A0\u524D\u7F00 \u7528\u4E8E\u914D\u7F6E\u4E00\u4E9B\u56FA\u5B9A\u7EC4\u5408",name:"prepend",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},append:{defaultValue:null,description:"\u6DFB\u52A0\u540E\u7F00 \u7528\u4E8E\u914D\u7F6E\u4E00\u4E9B\u56FA\u5B9A\u7EC4\u5408",name:"append",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/AutoComplete/autoComplete.tsx#AutoComplete"]={docgenInfo:c.__docgenInfo,name:"AutoComplete",path:"src/components/AutoComplete/autoComplete.tsx#AutoComplete"})}catch{}try{autoComplete.displayName="autoComplete",autoComplete.__docgenInfo={description:`> AutoComplete \u8F93\u5165\u6846\u81EA\u52A8\u5B8C\u6210\u529F\u80FD\uFF0C\u9700\u8981\u8F93\u5165\u5EFA\u8BAE/\u8F85\u52A9\u63D0\u793A\u3002

### \u5F15\u5165\u65B9\u6CD5

\`\`\`js

import { AutoComplete } from 'val-design'

\`\`\``,displayName:"autoComplete",props:{fetchSuggestions:{defaultValue:null,description:"",name:"fetchSuggestions",required:!0,type:{name:"(str: string) => DataSourceObject[] | Promise<DataSourceObject[]>"}},onSelect:{defaultValue:null,description:"\u70B9\u51FB\u9009\u62E9\u9879\u7684\u56DE\u8C03",name:"onSelect",required:!1,type:{name:"((item: DataSourceObject) => void)"}},renderOptions:{defaultValue:null,description:"\u81EA\u5B9A\u4E49\u6A21\u677F",name:"renderOptions",required:!1,type:{name:"((item: DataSourceObject) => ReactElement<any, string | JSXElementConstructor<any>>)"}},size:{defaultValue:null,description:"\u8BBE\u7F6E input \u5927\u5C0F\uFF0C\u652F\u6301 lg \u6216\u8005\u662F sm",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},disabled:{defaultValue:null,description:"\u662F\u5426\u7981\u7528 Input",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}},icon:{defaultValue:null,description:"\u6DFB\u52A0\u56FE\u6807\uFF0C\u5728\u53F3\u4FA7\u60AC\u6D6E\u6DFB\u52A0\u4E00\u4E2A\u56FE\u6807\uFF0C\u7528\u4E8E\u63D0\u793A",name:"icon",required:!1,type:{name:"IconProp"}},prepend:{defaultValue:null,description:"\u6DFB\u52A0\u524D\u7F00 \u7528\u4E8E\u914D\u7F6E\u4E00\u4E9B\u56FA\u5B9A\u7EC4\u5408",name:"prepend",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},append:{defaultValue:null,description:"\u6DFB\u52A0\u540E\u7F00 \u7528\u4E8E\u914D\u7F6E\u4E00\u4E9B\u56FA\u5B9A\u7EC4\u5408",name:"append",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/AutoComplete/autoComplete.tsx#autoComplete"]={docgenInfo:autoComplete.__docgenInfo,name:"autoComplete",path:"src/components/AutoComplete/autoComplete.tsx#autoComplete"})}catch{}const P=u=>w.get(`https://api.github.com/search/users?q=${u}`).then(t=>t).then(({data:t})=>t.items.slice(0,10).map(o=>({value:o.login,...o}))),oe={parameters:{storySource:{source:`import React from 'react'
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
  title: 'val-design/Auto Complete \u81EA\u52A8\u5B8C\u6210',
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
`,locationsMap:{"default-auto-complete":{startLoc:{col:54,line:24},endLoc:{col:1,line:26},startBody:{col:54,line:24},endBody:{col:1,line:26}}}}},title:"val-design/Auto Complete \u81EA\u52A8\u5B8C\u6210",component:c},J=u=>i(c,{...u}),K=J.bind({});K.args={fetchSuggestions:P,onSelect:R("selected")};const ae=["DefaultAutoComplete"];export{K as DefaultAutoComplete,ae as __namedExportsOrder,oe as default};
//# sourceMappingURL=autoComplete.stories.07084799.js.map
