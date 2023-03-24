var O=Object.defineProperty;var l=(n,s)=>O(n,"name",{value:s,configurable:!0});import{j as r,a as c}from"./jsx-runtime-303a4c05.js";import{a as B}from"./index-3a9bb9c2.js";import{r as V}from"./index-2441a40f.js";import{a as T}from"./axios-1622a277.js";import{I as p}from"./icon-08ccc11e.js";import{P as j}from"./progress-8669f8df.js";import{c as M}from"./index-ed86a6de.js";import"./iframe-95599c29.js";import"./make-decorator-bdd7e0c0.js";import"./index-c49ee5c5.js";import"./index-50ee27ec.js";const b=l(n=>{const{fileList:s,onRemove:m}=n;return r("ul",{className:"v-upload-list",children:s.map(t=>c("li",{className:"v-upload-list-item",children:[c("span",{className:`file-name file-name-${t.status}`,children:[r(p,{icon:"file-alt",theme:"secondary"}),t.name]}),c("span",{className:"file-status",children:[(t.status==="uploading"||t.status==="ready")&&r(p,{icon:"spinner",spin:!0,theme:"primary"}),t.status==="success"&&r(p,{icon:"check-circle",theme:"success"}),t.status==="error"&&r(p,{icon:"times-circle",theme:"danger"})]}),r("span",{className:"file-actions",children:r(p,{icon:"times",onClick:()=>{m(t)}})}),t.status==="uploading"&&r(j,{percent:t.percent||0})]},t.uid))})},"UploadList");try{b.displayName="UploadList",b.__docgenInfo={description:"",displayName:"UploadList",props:{fileList:{defaultValue:null,description:"",name:"fileList",required:!0,type:{name:"UploadFile[]"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!0,type:{name:"(_file: UploadFile) => void"}}}}}catch{}try{uploadList.displayName="uploadList",uploadList.__docgenInfo={description:"",displayName:"uploadList",props:{fileList:{defaultValue:null,description:"",name:"fileList",required:!0,type:{name:"UploadFile[]"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!0,type:{name:"(_file: UploadFile) => void"}}}}}catch{}const U=l(n=>{const{onFile:s,children:m}=n,[t,f]=V.useState(!1),h=M("v-uploader-dragger",{"is-dragover":t}),_=l(i=>{i.preventDefault(),f(!1),s(i.dataTransfer.files)},"handleDrop"),d=l((i,E)=>{i.preventDefault(),f(E)},"handleDrag");return r("div",{className:h,onDragOver:i=>{d(i,!0)},onDragLeave:i=>{d(i,!1)},onDrop:_,children:m})},"Dragger");try{U.displayName="Dragger",U.__docgenInfo={description:"",displayName:"Dragger",props:{onFile:{defaultValue:null,description:"",name:"onFile",required:!0,type:{name:"(files: FileList) => void"}}}}}catch{}try{dragger.displayName="dragger",dragger.__docgenInfo={description:"",displayName:"dragger",props:{onFile:{defaultValue:null,description:"",name:"onFile",required:!0,type:{name:"(files: FileList) => void"}}}}}catch{}const F=l(n=>{const{action:s,defaultFileList:m,beforeUpload:t,onProgress:f,onSuccess:h,onError:_,onChange:d,onRemove:i,name:E,headers:R,data:v,withCredentials:k,accept:S,multiple:A,children:L,drag:z}=n,y=V.useRef(null),[I,D]=V.useState(m||[]),C=l((a,u)=>{D(o=>o.map(e=>e.uid===a.uid?{...e,...u}:e))},"updateFileList"),P=l(()=>{y.current&&y.current.click()},"handleClick"),x=l(a=>{const u=a.target.files;u&&(N(u),y.current&&(y.current.value=""))},"handleFileChange"),w=l(a=>{D(u=>u.filter(o=>o.uid!==a.uid)),i&&i(a)},"handleRemove"),N=l(a=>{Array.from(a).forEach(o=>{if(!t)q(o);else{const e=t(o);e&&e instanceof Promise?e.then(g=>{q(g)}):e!==!1&&q(o)}})},"uploadFiles"),q=l(a=>{const u={uid:Date.now()+"upload-file",status:"ready",name:a.name,size:a.size,percent:0,raw:a};D(e=>[u,...e]);const o=new FormData;o.append(E||"file",a),v&&Object.keys(v).forEach(e=>{o.append(e,v[e])}),T.post(s,o,{headers:{...R,"Content-Type":"multipart/form-data"},withCredentials:k,onUploadProgress:e=>{const g=Math.round(e.loaded*100/e.total)||0;g<100&&(C(u,{percent:g,status:"uploading"}),f&&f(g,a))}}).then(e=>{C(u,{status:"success",response:e.data}),h&&h(e.data,a),d&&d(a)}).catch(e=>{C(u,{status:"error",error:e}),_&&_(e,a),d&&d(a)})},"post");return c("div",{className:"v-upload-component",children:[c("div",{className:"v-upload-input",style:{display:"inline-block"},onClick:P,children:[z?r(U,{onFile:a=>{N(a)},children:L}):L,r("input",{className:"v-file-input",style:{display:"none"},ref:y,onChange:x,type:"file",accept:S,multiple:A})]}),r(b,{fileList:I,onRemove:w})]})},"Upload");F.defaultProps={name:"file"};try{F.displayName="Upload",F.__docgenInfo={description:"",displayName:"Upload",props:{action:{defaultValue:null,description:"接口地址",name:"action",required:!0,type:{name:"string"}},defaultFileList:{defaultValue:null,description:"file array",name:"defaultFileList",required:!1,type:{name:"UploadFile[]"}},beforeUpload:{defaultValue:null,description:"上传前回调函数",name:"beforeUpload",required:!1,type:{name:"((file: File) => boolean | Promise<File>)"}},onProgress:{defaultValue:null,description:"on progress",name:"onProgress",required:!1,type:{name:"((percentage: number, file: File) => void)"}},onSuccess:{defaultValue:null,description:"上传成功的回调函数",name:"onSuccess",required:!1,type:{name:"((data: any, file: File) => void)"}},onError:{defaultValue:null,description:"上传错误的回调",name:"onError",required:!1,type:{name:"((err: any, file: File) => void)"}},onChange:{defaultValue:null,description:"文件修改的回调",name:"onChange",required:!1,type:{name:"((file: File) => void)"}},onRemove:{defaultValue:null,description:"移除上传文件的回调",name:"onRemove",required:!1,type:{name:"((file: UploadFile) => void)"}},headers:{defaultValue:null,description:"请求头信息",name:"headers",required:!1,type:{name:"{ [key: string]: any; }"}},name:{defaultValue:{value:"file"},description:"name",name:"name",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"data",name:"data",required:!1,type:{name:"{ [key: string]: any; }"}},withCredentials:{defaultValue:null,description:"跨域请求时是否需要使用凭证",name:"withCredentials",required:!1,type:{name:"boolean"}},accept:{defaultValue:null,description:"返回数据的类型",name:"accept",required:!1,type:{name:"string"}},multiple:{defaultValue:null,description:"是否允许选择多项",name:"multiple",required:!1,type:{name:"boolean"}},drag:{defaultValue:null,description:"是否开启拖拽",name:"drag",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"children",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}try{upload.displayName="upload",upload.__docgenInfo={description:"",displayName:"upload",props:{action:{defaultValue:null,description:"接口地址",name:"action",required:!0,type:{name:"string"}},defaultFileList:{defaultValue:null,description:"file array",name:"defaultFileList",required:!1,type:{name:"UploadFile[]"}},beforeUpload:{defaultValue:null,description:"上传前回调函数",name:"beforeUpload",required:!1,type:{name:"((file: File) => boolean | Promise<File>)"}},onProgress:{defaultValue:null,description:"on progress",name:"onProgress",required:!1,type:{name:"((percentage: number, file: File) => void)"}},onSuccess:{defaultValue:null,description:"上传成功的回调函数",name:"onSuccess",required:!1,type:{name:"((data: any, file: File) => void)"}},onError:{defaultValue:null,description:"上传错误的回调",name:"onError",required:!1,type:{name:"((err: any, file: File) => void)"}},onChange:{defaultValue:null,description:"文件修改的回调",name:"onChange",required:!1,type:{name:"((file: File) => void)"}},onRemove:{defaultValue:null,description:"移除上传文件的回调",name:"onRemove",required:!1,type:{name:"((file: UploadFile) => void)"}},headers:{defaultValue:null,description:"请求头信息",name:"headers",required:!1,type:{name:"{ [key: string]: any; }"}},name:{defaultValue:{value:"file"},description:"name",name:"name",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"data",name:"data",required:!1,type:{name:"{ [key: string]: any; }"}},withCredentials:{defaultValue:null,description:"跨域请求时是否需要使用凭证",name:"withCredentials",required:!1,type:{name:"boolean"}},accept:{defaultValue:null,description:"返回数据的类型",name:"accept",required:!1,type:{name:"string"}},multiple:{defaultValue:null,description:"是否允许选择多项",name:"multiple",required:!1,type:{name:"boolean"}},drag:{defaultValue:null,description:"是否开启拖拽",name:"drag",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"children",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const re={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Upload } from './upload'

import Icon from '../Icon/icon'

export default {
  title: 'Data Entry/Upload 上传',
  component: Upload,
} as ComponentMeta<typeof Upload>

const Template: ComponentStory<typeof Upload> = props => (
  <Upload {...props}>
    <Icon icon="plus" size="3x" theme="secondary" />
    <br />
    <p style={{ margin: 0 }}>Upload</p>
  </Upload>
)

export const SimpleUpload = Template.bind({})
SimpleUpload.args = {
  action: 'https://run.mocky.io/v3/f58d4544-a9d0-44ad-b9f8-ce2ddf48a1ba',
  onChange: action('changed'),
  onRemove: action('removed'),
  name: 'file',
  multiple: true,
  drag: true,
  defaultFileList: [
    {
      uid: 'aaaa',
      name: 'image.png',
      status: 'success',
      size: 1024,
    },
    {
      uid: 'bbbb',
      name: 'image1.png',
      status: 'ready',
      size: 1024,
    },
    {
      uid: 'cccc',
      name: 'image2.png',
      status: 'uploading',
      size: 1024,
      percent: 80,
    },
    {
      uid: 'ffff',
      name: 'image3.png',
      status: 'error',
      size: 1024,
    },
  ],
}
`,locationsMap:{"simple-upload":{startLoc:{col:48,line:13},endLoc:{col:1,line:19},startBody:{col:48,line:13},endBody:{col:1,line:19}}}}},title:"Data Entry/Upload 上传",component:F},$=l(n=>c(F,{...n,children:[r(p,{icon:"plus",size:"3x",theme:"secondary"}),r("br",{}),r("p",{style:{margin:0},children:"Upload"})]}),"Template"),G=$.bind({});G.args={action:"https://run.mocky.io/v3/f58d4544-a9d0-44ad-b9f8-ce2ddf48a1ba",onChange:B("changed"),onRemove:B("removed"),name:"file",multiple:!0,drag:!0,defaultFileList:[{uid:"aaaa",name:"image.png",status:"success",size:1024},{uid:"bbbb",name:"image1.png",status:"ready",size:1024},{uid:"cccc",name:"image2.png",status:"uploading",size:1024,percent:80},{uid:"ffff",name:"image3.png",status:"error",size:1024}]};const le=["SimpleUpload"];export{G as SimpleUpload,le as __namedExportsOrder,re as default};
//# sourceMappingURL=upload.stories-248c3704.js.map
