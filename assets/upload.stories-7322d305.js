var K=Object.defineProperty;var r=(n,s)=>K(n,"name",{value:s,configurable:!0});import{a as V}from"./index-efcfbbe5.js";import{r as R}from"./index-d282687f.js";import{a as P}from"./axios-57ada86a.js";import{I as p}from"./icon-ad6bebc0.js";import{P as Y}from"./progress-fd7eba24.js";import{j as t,a as c}from"./jsx-runtime-920531fb.js";import{c as w}from"./index-ed86a6de.js";import"./es.object.get-own-property-descriptor-fbf95828.js";import"./iframe-b077b586.js";import"./web.url.constructor-fbd69e3d.js";import"./es.number.is-integer-ad3ced59.js";import"./make-decorator-8631ee40.js";import"./index-eb6056e0.js";import"./index-50ee27ec.js";const h=r(n=>{const{fileList:s,onRemove:f}=n;return t("ul",{className:"v-upload-list",children:s.map(o=>c("li",{className:"v-upload-list-item",children:[c("span",{className:`file-name file-name-${o.status}`,children:[t(p,{icon:"file-alt",theme:"secondary"}),o.name]}),c("span",{className:"file-status",children:[(o.status==="uploading"||o.status==="ready")&&t(p,{icon:"spinner",spin:!0,theme:"primary"}),o.status==="success"&&t(p,{icon:"check-circle",theme:"success"}),o.status==="error"&&t(p,{icon:"times-circle",theme:"danger"})]}),t("span",{className:"file-actions",children:t(p,{icon:"times",onClick:()=>{f(o)}})}),o.status==="uploading"&&t(Y,{percent:o.percent||0})]},o.uid))})},"UploadList");try{h.displayName="UploadList",h.__docgenInfo={description:"",displayName:"UploadList",props:{fileList:{defaultValue:null,description:"",name:"fileList",required:!0,type:{name:"UploadFile[]"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!0,type:{name:"(_file: UploadFile) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Upload/uploadList.tsx#UploadList"]={docgenInfo:h.__docgenInfo,name:"UploadList",path:"src/components/Upload/uploadList.tsx#UploadList"})}catch{}try{uploadList.displayName="uploadList",uploadList.__docgenInfo={description:"",displayName:"uploadList",props:{fileList:{defaultValue:null,description:"",name:"fileList",required:!0,type:{name:"UploadFile[]"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!0,type:{name:"(_file: UploadFile) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Upload/uploadList.tsx#uploadList"]={docgenInfo:uploadList.__docgenInfo,name:"uploadList",path:"src/components/Upload/uploadList.tsx#uploadList"})}catch{}const C=r(n=>{const{onFile:s,children:f}=n,[o,g]=R.useState(!1),_=w("v-uploader-dragger",{"is-dragover":o}),E=r(u=>{u.preventDefault(),g(!1),s(u.dataTransfer.files)},"handleDrop"),d=r((u,S)=>{u.preventDefault(),g(S)},"handleDrag");return t("div",{className:_,onDragOver:u=>{d(u,!0)},onDragLeave:u=>{d(u,!1)},onDrop:E,children:f})},"Dragger");try{C.displayName="Dragger",C.__docgenInfo={description:"",displayName:"Dragger",props:{onFile:{defaultValue:null,description:"",name:"onFile",required:!0,type:{name:"(files: FileList) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Upload/dragger.tsx#Dragger"]={docgenInfo:C.__docgenInfo,name:"Dragger",path:"src/components/Upload/dragger.tsx#Dragger"})}catch{}try{dragger.displayName="dragger",dragger.__docgenInfo={description:"",displayName:"dragger",props:{onFile:{defaultValue:null,description:"",name:"onFile",required:!0,type:{name:"(files: FileList) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Upload/dragger.tsx#dragger"]={docgenInfo:dragger.__docgenInfo,name:"dragger",path:"src/components/Upload/dragger.tsx#dragger"})}catch{}const m=r(n=>{const{action:s,defaultFileList:f,beforeUpload:o,onProgress:g,onSuccess:_,onError:E,onChange:d,onRemove:u,name:S,headers:A,data:U,withCredentials:b,accept:B,multiple:T,children:O,drag:I}=n,y=R.useRef(null),[N,v]=R.useState(f||[]),L=r((a,l)=>{v(i=>i.map(e=>e.uid===a.uid?{...e,...l}:e))},"updateFileList"),x=r(()=>{y.current&&y.current.click()},"handleClick"),k=r(a=>{const l=a.target.files;l&&(q(l),y.current&&(y.current.value=""))},"handleFileChange"),z=r(a=>{v(l=>l.filter(i=>i.uid!==a.uid)),u&&u(a)},"handleRemove"),q=r(a=>{Array.from(a).forEach(i=>{if(!o)D(i);else{const e=o(i);e&&e instanceof Promise?e.then(F=>{D(F)}):e!==!1&&D(i)}})},"uploadFiles"),D=r(a=>{const l={uid:Date.now()+"upload-file",status:"ready",name:a.name,size:a.size,percent:0,raw:a};v(e=>[l,...e]);const i=new FormData;i.append(S||"file",a),U&&Object.keys(U).forEach(e=>{i.append(e,U[e])}),P.post(s,i,{headers:{...A,"Content-Type":"multipart/form-data"},withCredentials:b,onUploadProgress:e=>{const F=Math.round(e.loaded*100/e.total)||0;F<100&&(L(l,{percent:F,status:"uploading"}),g&&g(F,a))}}).then(e=>{L(l,{status:"success",response:e.data}),_&&_(e.data,a),d&&d(a)}).catch(e=>{L(l,{status:"error",error:e}),E&&E(e,a),d&&d(a)})},"post");return c("div",{className:"v-upload-component",children:[c("div",{className:"v-upload-input",style:{display:"inline-block"},onClick:x,children:[I?t(C,{onFile:a=>{q(a)},children:O}):O,t("input",{className:"v-file-input",style:{display:"none"},ref:y,onChange:k,type:"file",accept:B,multiple:T})]}),t(h,{fileList:N,onRemove:z})]})},"Upload");m.defaultProps={name:"file"};try{m.displayName="Upload",m.__docgenInfo={description:"",displayName:"Upload",props:{action:{defaultValue:null,description:"接口地址",name:"action",required:!0,type:{name:"string"}},defaultFileList:{defaultValue:null,description:"file array",name:"defaultFileList",required:!1,type:{name:"UploadFile[]"}},beforeUpload:{defaultValue:null,description:"上传前回调函数",name:"beforeUpload",required:!1,type:{name:"((file: File) => boolean | Promise<File>)"}},onProgress:{defaultValue:null,description:"on progress",name:"onProgress",required:!1,type:{name:"((percentage: number, file: File) => void)"}},onSuccess:{defaultValue:null,description:"上传成功的回调函数",name:"onSuccess",required:!1,type:{name:"((data: any, file: File) => void)"}},onError:{defaultValue:null,description:"上传错误的回调",name:"onError",required:!1,type:{name:"((err: any, file: File) => void)"}},onChange:{defaultValue:null,description:"文件修改的回调",name:"onChange",required:!1,type:{name:"((file: File) => void)"}},onRemove:{defaultValue:null,description:"移除上传文件的回调",name:"onRemove",required:!1,type:{name:"((file: UploadFile) => void)"}},headers:{defaultValue:null,description:"请求头信息",name:"headers",required:!1,type:{name:"{ [key: string]: any; }"}},name:{defaultValue:{value:"file"},description:"name",name:"name",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"data",name:"data",required:!1,type:{name:"{ [key: string]: any; }"}},withCredentials:{defaultValue:null,description:"跨域请求时是否需要使用凭证",name:"withCredentials",required:!1,type:{name:"boolean"}},accept:{defaultValue:null,description:"返回数据的类型",name:"accept",required:!1,type:{name:"string"}},multiple:{defaultValue:null,description:"是否允许选择多项",name:"multiple",required:!1,type:{name:"boolean"}},drag:{defaultValue:null,description:"是否开启拖拽",name:"drag",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"children",name:"children",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Upload/upload.tsx#Upload"]={docgenInfo:m.__docgenInfo,name:"Upload",path:"src/components/Upload/upload.tsx#Upload"})}catch{}try{upload.displayName="upload",upload.__docgenInfo={description:"",displayName:"upload",props:{action:{defaultValue:null,description:"接口地址",name:"action",required:!0,type:{name:"string"}},defaultFileList:{defaultValue:null,description:"file array",name:"defaultFileList",required:!1,type:{name:"UploadFile[]"}},beforeUpload:{defaultValue:null,description:"上传前回调函数",name:"beforeUpload",required:!1,type:{name:"((file: File) => boolean | Promise<File>)"}},onProgress:{defaultValue:null,description:"on progress",name:"onProgress",required:!1,type:{name:"((percentage: number, file: File) => void)"}},onSuccess:{defaultValue:null,description:"上传成功的回调函数",name:"onSuccess",required:!1,type:{name:"((data: any, file: File) => void)"}},onError:{defaultValue:null,description:"上传错误的回调",name:"onError",required:!1,type:{name:"((err: any, file: File) => void)"}},onChange:{defaultValue:null,description:"文件修改的回调",name:"onChange",required:!1,type:{name:"((file: File) => void)"}},onRemove:{defaultValue:null,description:"移除上传文件的回调",name:"onRemove",required:!1,type:{name:"((file: UploadFile) => void)"}},headers:{defaultValue:null,description:"请求头信息",name:"headers",required:!1,type:{name:"{ [key: string]: any; }"}},name:{defaultValue:{value:"file"},description:"name",name:"name",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"data",name:"data",required:!1,type:{name:"{ [key: string]: any; }"}},withCredentials:{defaultValue:null,description:"跨域请求时是否需要使用凭证",name:"withCredentials",required:!1,type:{name:"boolean"}},accept:{defaultValue:null,description:"返回数据的类型",name:"accept",required:!1,type:{name:"string"}},multiple:{defaultValue:null,description:"是否允许选择多项",name:"multiple",required:!1,type:{name:"boolean"}},drag:{defaultValue:null,description:"是否开启拖拽",name:"drag",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"children",name:"children",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Upload/upload.tsx#upload"]={docgenInfo:upload.__docgenInfo,name:"upload",path:"src/components/Upload/upload.tsx#upload"})}catch{}const ue={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Upload } from './upload'

import Icon from '../Icon/icon'

export default {
  title: 'Data Entry/Upload 上传',
  component: Upload
} as ComponentMeta<typeof Upload>

const Template: ComponentStory<typeof Upload> = (props) => (
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
      size: 1024
    },
    {
      uid: 'bbbb',
      name: 'image1.png',
      status: 'ready',
      size: 1024
    },
    {
      uid: 'cccc',
      name: 'image2.png',
      status: 'uploading',
      size: 1024,
      percent: 80
    },
    {
      uid: 'ffff',
      name: 'image3.png',
      status: 'error',
      size: 1024
    }
  ]
}
`,locationsMap:{"simple-upload":{startLoc:{col:48,line:13},endLoc:{col:1,line:19},startBody:{col:48,line:13},endBody:{col:1,line:19}}}}},title:"Data Entry/Upload 上传",component:m},j=r(n=>c(m,{...n,children:[t(p,{icon:"plus",size:"3x",theme:"secondary"}),t("br",{}),t("p",{style:{margin:0},children:"Upload"})]}),"Template"),M=j.bind({});M.args={action:"https://run.mocky.io/v3/f58d4544-a9d0-44ad-b9f8-ce2ddf48a1ba",onChange:V("changed"),onRemove:V("removed"),name:"file",multiple:!0,drag:!0,defaultFileList:[{uid:"aaaa",name:"image.png",status:"success",size:1024},{uid:"bbbb",name:"image1.png",status:"ready",size:1024},{uid:"cccc",name:"image2.png",status:"uploading",size:1024,percent:80},{uid:"ffff",name:"image3.png",status:"error",size:1024}]};const ie=["SimpleUpload"];export{M as SimpleUpload,ie as __namedExportsOrder,ue as default};
//# sourceMappingURL=upload.stories-7322d305.js.map
