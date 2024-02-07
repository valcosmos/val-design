import{_ as i}from"./iframe-hjiKe7qV.js";import{R as t,r as p}from"./index-4g5l5LRQ.js";import{r as l,u}from"./react-18-WrgQ5cXe.js";import{d as h,e as d,H as E,D as x}from"./index-qia-I27t.js";var D={code:h,a:d,...E},_=class extends p.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(r){let{showException:e}=this.props;e(r)}render(){let{hasError:r}=this.state,{children:e}=this.props;return r?null:t.createElement(t.Fragment,null,e)}},R=class{constructor(){this.render=async(r,e,o)=>{let n={...D,...e==null?void 0:e.components},s=x;return new Promise((a,m)=>{i(()=>import("./index-_VGcpBFS.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(({MDXProvider:c})=>l(t.createElement(_,{showException:m,key:Math.random()},t.createElement(c,{components:n},t.createElement(s,{context:r,docsParameter:e}))),o)).then(()=>a())})},this.unmount=r=>{u(r)}}};export{R as D,D as d};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-_VGcpBFS.js","./index-4g5l5LRQ.js","./_commonjsHelpers-4gQjN7DL.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
