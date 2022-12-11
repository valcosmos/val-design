var p=Object.defineProperty;var o=(u,e)=>p(u,"name",{value:e,configurable:!0});import{c}from"./index-9f7f24f4.js";import{j as d}from"./jsx-runtime-e0aa43b5.js";const n=o(u=>{const{type:e,disabled:a,size:t,children:l,href:s,className:m,...r}=u,i=c("btn",m,{[`btn-${e}`]:e,[`btn-${t}`]:t,disabled:e==="link"&&a});return e==="link"&&s?d("a",{className:i,href:s,...r,children:l}):d("button",{className:i,disabled:a,...r,children:l})},"Button");n.defaultProps={disabled:!1,type:"default"};try{n.displayName="Button",n.__docgenInfo={description:`> 一个简单的Button组件，可通过不同的type，选择不同的颜色风格。

### 引用方法

\`\`\` js

import { Button } from 'val-design'

\`\`\``,displayName:"Button",props:{className:{defaultValue:null,description:"按钮类名",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"是否禁用",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"按钮大小",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},type:{defaultValue:{value:"default"},description:"按钮类型",name:"type",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"default"'},{value:'"danger"'},{value:'"warning"'},{value:'"link"'},{value:'"primary"'}]}},htmlType:{defaultValue:null,description:"按钮原生类型",name:"htmlType",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},children:{defaultValue:null,description:"按钮内容",name:"children",required:!1,type:{name:"ReactNode"}},href:{defaultValue:null,description:"链接地址",name:"href",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"点击事件",name:"onClick",required:!1,type:{name:"((() => void) & MouseEventHandler<HTMLElement>)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Button/button.tsx#Button"]={docgenInfo:n.__docgenInfo,name:"Button",path:"src/components/Button/button.tsx#Button"})}catch{}try{button.displayName="button",button.__docgenInfo={description:`> 一个简单的Button组件，可通过不同的type，选择不同的颜色风格。

### 引用方法

\`\`\` js

import { Button } from 'val-design'

\`\`\``,displayName:"button",props:{className:{defaultValue:null,description:"按钮类名",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"是否禁用",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"按钮大小",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},type:{defaultValue:{value:"default"},description:"按钮类型",name:"type",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"default"'},{value:'"danger"'},{value:'"warning"'},{value:'"link"'},{value:'"primary"'}]}},htmlType:{defaultValue:null,description:"按钮原生类型",name:"htmlType",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},children:{defaultValue:null,description:"按钮内容",name:"children",required:!1,type:{name:"ReactNode"}},href:{defaultValue:null,description:"链接地址",name:"href",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"点击事件",name:"onClick",required:!1,type:{name:"((() => void) & MouseEventHandler<HTMLElement>)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Button/button.tsx#button"]={docgenInfo:button.__docgenInfo,name:"button",path:"src/components/Button/button.tsx#button"})}catch{}export{n as B};
//# sourceMappingURL=button-58ca4f44.js.map
