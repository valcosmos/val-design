var E=Object.defineProperty;var l=(u,n)=>E(u,"name",{value:n,configurable:!0});import{c as F}from"./index-ed86a6de.js";import{I as c}from"./icon-ad6bebc0.js";import{a as m,j as e}from"./jsx-runtime-920531fb.js";const i=l(u=>{const{disabled:n,size:r,icon:p,prepend:t,append:a,style:s,...d}=u,o=F("v-input-wrapper",{[`input-size-${r}`]:r,"is-disabled":n,"input-group":t||a,"input-group-append":!!a,"input-group-prepend":!!t});return m("div",{className:o,style:s,children:[t&&e("div",{className:"v-input-group-prepend",children:t}),p&&e("div",{className:"icon-wrapper",children:e(c,{icon:p,title:`title-${p}`})}),e("input",{className:"v-input-inner",disabled:n,...d}),a&&e("div",{className:"v-input-group-append",children:a})]})},"Input");try{i.displayName="Input",i.__docgenInfo={description:`> 一个基础的Input组件封装，可添加图标，前缀或者后缀组合。

### 引用方法

\`\`\`js

import { Input } from 'val-design'

\`\`\``,displayName:"Input",props:{disabled:{defaultValue:null,description:"是否禁用 Input",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"设置 input 大小，支持 lg 或者是 sm",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},icon:{defaultValue:null,description:"添加图标，在右侧悬浮添加一个图标，用于提示",name:"icon",required:!1,type:{name:"IconProp"}},prepend:{defaultValue:null,description:"添加前缀 用于配置一些固定组合",name:"prepend",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},append:{defaultValue:null,description:"添加后缀 用于配置一些固定组合",name:"append",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Input/input.tsx#Input"]={docgenInfo:i.__docgenInfo,name:"Input",path:"src/components/Input/input.tsx#Input"})}catch{}try{input.displayName="input",input.__docgenInfo={description:`> 一个基础的Input组件封装，可添加图标，前缀或者后缀组合。

### 引用方法

\`\`\`js

import { Input } from 'val-design'

\`\`\``,displayName:"input",props:{disabled:{defaultValue:null,description:"是否禁用 Input",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"设置 input 大小，支持 lg 或者是 sm",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},icon:{defaultValue:null,description:"添加图标，在右侧悬浮添加一个图标，用于提示",name:"icon",required:!1,type:{name:"IconProp"}},prepend:{defaultValue:null,description:"添加前缀 用于配置一些固定组合",name:"prepend",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},append:{defaultValue:null,description:"添加后缀 用于配置一些固定组合",name:"append",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Input/input.tsx#input"]={docgenInfo:input.__docgenInfo,name:"input",path:"src/components/Input/input.tsx#input"})}catch{}export{i as I};
//# sourceMappingURL=input-7c692c83.js.map
