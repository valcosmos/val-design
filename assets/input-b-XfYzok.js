import{j as u}from"./jsx-runtime-vNq4Oc-g.js";import{c as o}from"./index--jIQrVgb.js";import{I as F}from"./icon-YfdEylPN.js";const l=a=>{const{disabled:p,size:i,icon:t,prepend:e,append:n,style:r,...s}=a,d=o("v-input-wrapper",{[`input-size-${i}`]:i,"is-disabled":p,"input-group":e||n,"input-group-append":!!n,"input-group-prepend":!!e});return u.jsxs("div",{className:d,style:r,children:[e&&u.jsx("div",{className:"v-input-group-prepend",children:e}),t&&u.jsx("div",{className:"icon-wrapper",children:u.jsx(F,{icon:t,title:`title-${t}`})}),u.jsx("input",{className:"v-input-inner",disabled:p,...s}),n&&u.jsx("div",{className:"v-input-group-append",children:n})]})};try{l.displayName="Input",l.__docgenInfo={description:`> 一个基础的Input组件封装，可添加图标，前缀或者后缀组合。

### 引用方法

\`\`\`js

import { Input } from 'val-design'

\`\`\``,displayName:"Input",props:{disabled:{defaultValue:null,description:"是否禁用 Input",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"设置 input 大小，支持 lg 或者是 sm",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},icon:{defaultValue:null,description:"添加图标，在右侧悬浮添加一个图标，用于提示",name:"icon",required:!1,type:{name:"IconProp"}},prepend:{defaultValue:null,description:"添加前缀 用于配置一些固定组合",name:"prepend",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},append:{defaultValue:null,description:"添加后缀 用于配置一些固定组合",name:"append",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}}}}}catch{}try{input.displayName="input",input.__docgenInfo={description:`> 一个基础的Input组件封装，可添加图标，前缀或者后缀组合。

### 引用方法

\`\`\`js

import { Input } from 'val-design'

\`\`\``,displayName:"input",props:{disabled:{defaultValue:null,description:"是否禁用 Input",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"设置 input 大小，支持 lg 或者是 sm",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},icon:{defaultValue:null,description:"添加图标，在右侧悬浮添加一个图标，用于提示",name:"icon",required:!1,type:{name:"IconProp"}},prepend:{defaultValue:null,description:"添加前缀 用于配置一些固定组合",name:"prepend",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},append:{defaultValue:null,description:"添加后缀 用于配置一些固定组合",name:"append",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}}}}}catch{}export{l as I};
