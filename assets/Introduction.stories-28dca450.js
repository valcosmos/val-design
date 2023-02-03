var d=Object.defineProperty;var o=(t,e)=>d(t,"name",{value:e,configurable:!0});import"./index-a38f3d31.js";import{A as p,M as c}from"./Props-39dc4599.js";import"./es.object.get-own-property-descriptor-d261b708.js";import"./web.url.constructor-fb8c8940.js";import"./iframe-02da6ae1.js";import"./es.number.is-integer-d7d899e3.js";import"./index-681e4b07-b47e24d1.js";import"./es.map.constructor-088687ee.js";import"./es.number.to-fixed-4714c3f9.js";import"./index-6c397bfc.js";import"./es.number.is-nan-184f406b.js";import"./string-d2fe5096.js";function s(){return s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},s.apply(this,arguments)}o(s,"_extends$1");const u={},g="wrapper";function l({components:t,...e}){return mdx(g,s({},u,e,{components:t,mdxType:"MDXLayout"}),mdx("div",{align:"center"},mdx("img",{width:"80px",src:"https://raw.githubusercontent.com/valcosmos/val-design/main/logo.png"})),mdx("h3",{align:"center"},"Welcome to val-design"),mdx("p",{align:"center"},"val-design is a simple, lightweight ",mdx("a",{href:"https://reactjs.org/",target:"_blank"},"React")," UI component library."),mdx("div",{align:"center"},mdx("img",{src:"https://img.shields.io/badge/build-passing-informational?style=for-the-badge&logo=GitHub&color=181717"}),mdx("img",{src:"https://img.shields.io/badge/Node.js-v16.16.0-informational?style=for-the-badge&logo=Node.js&color=339933"}),mdx("img",{src:"https://img.shields.io/badge/React-v18.2.0-informational?style=for-the-badge&logo=React&color=61DAFB"}),mdx("img",{src:"https://img.shields.io/badge/TypeScript-v4.7.4-informational?style=for-the-badge&logo=TypeScript&color=3178C6"}),mdx("img",{src:"https://img.shields.io/badge/npm-v8.11.0-informational?style=for-the-badge&logo=npm&color=CB3837"}),mdx("img",{src:"https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge"})),mdx("h2",null,"Description"),mdx("p",null,"val-design is a simple component library, built with ",mdx("a",{parentName:"p",href:"https://reactjs.org/"},"React.js")," and ",mdx("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript"),", mainly for learning, or you can optimize or encapsulate it for production use. If you have any issues, or better suggestions, welcome to put them in the ",mdx("a",{parentName:"p",href:"https://github.com/valcosmos/val-design/issues"},"issues")," or ",mdx("a",{parentName:"p",href:"https://github.com/valcosmos/val-design/discussions"},"discussion"),", and I will be very grateful."),mdx("h2",null,"Features"),mdx("ul",null,mdx("li",{parentName:"ul"},"✨ A personal ",mdx("inlineCode",{parentName:"li"},"React component library"),", welcome to submit ",mdx("a",{parentName:"li",href:"https://github.com/valcosmos/val-design/issues"},"issues")," or ",mdx("a",{parentName:"li",href:"https://github.com/valcosmos/val-design/discussions"},"ideas"),"."),mdx("li",{parentName:"ul"},"🔭 Built with ",mdx("inlineCode",{parentName:"li"},"Vite")," ",mdx("inlineCode",{parentName:"li"},"TypeScript")," and ",mdx("inlineCode",{parentName:"li"},"React Hooks"),"."),mdx("li",{parentName:"ul"},"😄 Use ",mdx("inlineCode",{parentName:"li"},"storybook")," for local debugging and auto-generate component library documentation."),mdx("li",{parentName:"ul"},"😉 Automatically generate documentation content from comments using ",mdx("inlineCode",{parentName:"li"},"react-doc-gen"),"."),mdx("li",{parentName:"ul"},"⭐️ Some components are completed by Other component libraries, and ",mdx("inlineCode",{parentName:"li"},"Icon")," components are secondary encapsulated using ",mdx("inlineCode",{parentName:"li"},"react-fontawesome"),"."),mdx("li",{parentName:"ul"},"🌔 Integrate CI/CD, use CircleCI + Github Page to deploy documents."),mdx("li",{parentName:"ul"},"🌱 Added support for ",mdx("inlineCode",{parentName:"li"},"React v18"),".")),mdx("h2",null,"Getting started"),mdx("ul",null,mdx("li",{parentName:"ul"},mdx("p",{parentName:"li"},"To check out the ",mdx("a",{parentName:"p",href:"https://valcosmos.github.io/val-design"},"guide"),", visit ",mdx("a",{parentName:"p",href:"https://valcosmos.github.io/val-design"},"https://valcosmos.github.io/val-design"),". 📚")),mdx("li",{parentName:"ul"},mdx("p",{parentName:"li"},"To check out the ",mdx("a",{parentName:"p",href:"https://stackblitz.com/edit/vitejs-vite-jvn7fm"},"example"),", visit ",mdx("a",{parentName:"p",href:"https://stackblitz.com/edit/vitejs-vite-jvn7fm"},"https://stackblitz.com/edit/vitejs-vite-jvn7fm"),". 📚"))),mdx("h2",null,"Install"),mdx("pre",null,mdx("code",{parentName:"pre",className:"language-bash"},`npm i val-design
`)),mdx("pre",null,mdx("code",{parentName:"pre",className:"language-bash"},`yarn add val-design
`)),mdx("h2",null,"Usage"),mdx("p",null,"And import style manually："),mdx("pre",null,mdx("code",{parentName:"pre",className:"language-jsx"},`import 'val-design/dist/index.css'
`)),mdx("p",null,"And import button："),mdx("pre",null,mdx("code",{parentName:"pre",className:"language-jsx"},`import { Button } from 'val-design'

const App = () => (
  <>
    <Button type="primary" size="lg">
      val design
    </Button>
  </>
)
`)),mdx("h2",null,"Project Activity"),mdx("p",null,mdx("img",{parentName:"p",src:"https://repobeats.axiom.co/api/embed/598e41bfc615ece01d4f2e4c881fe52c54e6d8a9.svg",alt:"Alt",title:"Repobeats analytics image"})),mdx("h2",null,"Development"),mdx("p",null,"Use StackBlitz"),mdx("p",null,mdx("a",{parentName:"p",href:"https://stackblitz.com/github/valcosmos/val-design"},mdx("img",{parentName:"a",src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Open in StackBlitz"}))),mdx("p",null,"clone locally:"),mdx("pre",null,mdx("code",{parentName:"pre",className:"language-bash"},`
git clone git@github.com:valcosmos/val-design.git

cd val-design

pnpm install --shamefully-hoist

pnpm storybook

`)),mdx("p",null,"Open your browser and visit http://localhost:6006"),mdx("h2",null,"Issues"),mdx("p",null,"You can write down any issues you have under this ",mdx("a",{parentName:"p",href:"https://github.com/valcosmos/val-design/issues"},"link"),"."),mdx("h2",null,"License"),mdx("p",null,"val-design is ",mdx("a",{parentName:"p",href:"LICENSE"},"MIT licensed"),"."))}o(l,"MDXContent$1");l.isMDXComponent=!0;function m(){return m=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},m.apply(this,arguments)}o(m,"_extends");const x={},h="wrapper";function r({components:t,...e}){return mdx(h,m({},x,e,{components:t,mdxType:"MDXLayout"}),mdx(c,{title:"Introduction 介绍",mdxType:"Meta"}),mdx(l,{mdxType:"Readme"}))}o(r,"MDXContent");r.isMDXComponent=!0;const v=o(()=>{throw new Error("Docs-only story")},"__page");v.parameters={docsOnly:!0};const i={title:"Introduction 介绍",tags:["stories-mdx"],includeStories:["__page"]},b={};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:()=>mdx(p,{mdxStoryNameToKey:b,mdxComponentAnnotations:i},mdx(r,null))};const k=["__page"];export{k as __namedExportsOrder,v as __page,i as default};
//# sourceMappingURL=Introduction.stories-28dca450.js.map
