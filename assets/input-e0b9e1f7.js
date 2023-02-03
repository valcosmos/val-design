var F=Object.defineProperty;var i=(u,n)=>F(u,"name",{value:n,configurable:!0});import{a as E,j as e}from"./jsx-runtime-69008c6b.js";import{c as m}from"./index-ed86a6de.js";import{I as c}from"./icon-9fa524d2.js";const r=i(u=>{const{disabled:n,size:l,icon:p,prepend:a,append:t,style:s,...d}=u,o=m("v-input-wrapper",{[`input-size-${l}`]:l,"is-disabled":n,"input-group":a||t,"input-group-append":!!t,"input-group-prepend":!!a});return E("div",{className:o,style:s,children:[a&&e("div",{className:"v-input-group-prepend",children:a}),p&&e("div",{className:"icon-wrapper",children:e(c,{icon:p,title:`title-${p}`})}),e("input",{className:"v-input-inner",disabled:n,...d}),t&&e("div",{className:"v-input-group-append",children:t})]})},"Input");try{r.displayName="Input",r.__docgenInfo={description:`> 一个基础的Input组件封装，可添加图标，前缀或者后缀组合。

### 引用方法

\`\`\`js

import { Input } from 'val-design'

\`\`\``,displayName:"Input",props:{disabled:{defaultValue:null,description:"是否禁用 Input",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"设置 input 大小，支持 lg 或者是 sm",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},icon:{defaultValue:null,description:"添加图标，在右侧悬浮添加一个图标，用于提示",name:"icon",required:!1,type:{name:"IconProp"}},prepend:{defaultValue:null,description:"添加前缀 用于配置一些固定组合",name:"prepend",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},append:{defaultValue:null,description:"添加后缀 用于配置一些固定组合",name:"append",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}}}}}catch{}try{input.displayName="input",input.__docgenInfo={description:`> 一个基础的Input组件封装，可添加图标，前缀或者后缀组合。

### 引用方法

\`\`\`js

import { Input } from 'val-design'

\`\`\``,displayName:"input",props:{disabled:{defaultValue:null,description:"是否禁用 Input",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"设置 input 大小，支持 lg 或者是 sm",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},icon:{defaultValue:null,description:"添加图标，在右侧悬浮添加一个图标，用于提示",name:"icon",required:!1,type:{name:"IconProp"}},prepend:{defaultValue:null,description:"添加前缀 用于配置一些固定组合",name:"prepend",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},append:{defaultValue:null,description:"添加后缀 用于配置一些固定组合",name:"append",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}}}}}catch{}export{r as I};
//# sourceMappingURL=input-e0b9e1f7.js.map
