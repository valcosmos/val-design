import{j as d}from"./jsx-runtime-94f6e698.js";import{c as m}from"./index-582f377c.js";const a=u=>{const{type:e,disabled:l,size:n,children:t,href:s,className:o,...r}=u,i=m("btn",o,{[`btn-${e}`]:e,[`btn-${n}`]:n,disabled:e==="link"&&l});return e==="link"&&s?d.jsx("a",{className:i,href:s,...r,children:t}):d.jsx("button",{className:i,disabled:l,...r,children:t})};a.defaultProps={disabled:!1,type:"default"};try{a.displayName="Button",a.__docgenInfo={description:`> 一个简单的Button组件，可通过不同的type，选择不同的颜色风格。

### 引用方法

\`\`\` js

import { Button } from 'val-design'

\`\`\``,displayName:"Button",props:{className:{defaultValue:null,description:"按钮类名",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"是否禁用",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"按钮大小",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},type:{defaultValue:{value:"default"},description:"按钮类型",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"link"'}]}},htmlType:{defaultValue:null,description:"按钮原生类型",name:"htmlType",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},children:{defaultValue:null,description:"按钮内容",name:"children",required:!1,type:{name:"ReactNode"}},href:{defaultValue:null,description:"链接地址",name:"href",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"点击事件",name:"onClick",required:!1,type:{name:"((() => void) & MouseEventHandler<HTMLElement>)"}}}}}catch{}try{button.displayName="button",button.__docgenInfo={description:`> 一个简单的Button组件，可通过不同的type，选择不同的颜色风格。

### 引用方法

\`\`\` js

import { Button } from 'val-design'

\`\`\``,displayName:"button",props:{className:{defaultValue:null,description:"按钮类名",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"是否禁用",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"按钮大小",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},type:{defaultValue:{value:"default"},description:"按钮类型",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"link"'}]}},htmlType:{defaultValue:null,description:"按钮原生类型",name:"htmlType",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},children:{defaultValue:null,description:"按钮内容",name:"children",required:!1,type:{name:"ReactNode"}},href:{defaultValue:null,description:"链接地址",name:"href",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"点击事件",name:"onClick",required:!1,type:{name:"((() => void) & MouseEventHandler<HTMLElement>)"}}}}}catch{}export{a as B};
//# sourceMappingURL=button-ff5ec818.js.map
