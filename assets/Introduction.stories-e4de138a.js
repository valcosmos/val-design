import{M as i,g as a}from"./index-0d1e719f.js";import{j as t}from"./jsx-runtime-ffb262ed.js";import{u as r}from"./index-a1cf9e47.js";import"./iframe-9a55cec8.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d3ea75b5.js";import"./index-d37d4223.js";import"./inheritsLoose-9eefaa95.js";import"./assertThisInitialized-081f9914.js";import"./index-13cbd512.js";import"./assert-a1982797.js";import"./index-356e4a49.js";const c=`<div align="center">
    <img width="80px" src="https://raw.githubusercontent.com/valcosmos/val-design/main/logo.png" />
</div>  
 
<h3 align="center">Welcome to val-design</h3>

<p align="center">val-design is a simple, lightweight <a href="https://reactjs.org/" target="_blank">React</a> UI component library.</p>

<div align="center">

  <img src="https://img.shields.io/badge/build-passing-informational?style=for-the-badge&logo=GitHub&color=181717" />

  <img src="https://img.shields.io/badge/Node.js-v16.16.0-informational?style=for-the-badge&logo=Node.js&color=339933" />

  <img src="https://img.shields.io/badge/React-v18.2.0-informational?style=for-the-badge&logo=React&color=61DAFB" />

  <img src="https://img.shields.io/badge/TypeScript-v4.7.4-informational?style=for-the-badge&logo=TypeScript&color=3178C6" />

  <img src="https://img.shields.io/badge/npm-v8.11.0-informational?style=for-the-badge&logo=npm&color=CB3837" />

  <img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" />
  
</div>

## Description

val-design is a simple component library, built with [React.js](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/), mainly for learning, or you can optimize or encapsulate it for production use. If you have any issues, or better suggestions, welcome to put them in the [issues](https://github.com/valcosmos/val-design/issues) or [discussion](https://github.com/valcosmos/val-design/discussions), and I will be very grateful.

## Features

- ✨ A personal \`React component library\`, welcome to submit [issues](https://github.com/valcosmos/val-design/issues) or [ideas](https://github.com/valcosmos/val-design/discussions).
- 🔭 Built with \`Vite\` \`TypeScript\` and \`React Hooks\`.
- 😄 Use \`storybook\` for local debugging and auto-generate component library documentation.
- 😉 Automatically generate documentation content from comments using \`react-doc-gen\`.
- ⭐️ Some components are completed by Other component libraries, and \`Icon\` components are secondary encapsulated using \`react-fontawesome\`.
- 🌔 Integrate CI/CD, use CircleCI + Github Page to deploy documents.
- 🌱 Added support for \`React v18\`.

<!-- ## 简介

- ✨ 一个个人制作的 \`React 组件库\`，欢迎各位提交 \`issues\`。
- 🔭 使用 \`Vite\` \`TypeScript\` 和 \`React Hook\` 构建。
- 🌱 使用\`storybook\`进行本地调试，并自动生成组件库文档。
- 😉 使用\`react-doc-gen\`通过注释自动生成文档内容。
- ⭐️ 部分组件库通过对第三方库进行二次封装完成，\`Icon\`组件使用\`react-fontawesome\`进行二次封装。
- 🌔 集成 \`CI/CD\`, 使用 \`CircleCI\` + \`Github Page\`, 进行文档部署。
- 🌱 新增对\`React18\`的支持。 -->

## Getting started

- To check out the [guide](https://valcosmos.github.io/val-design), visit [https://valcosmos.github.io/val-design](https://valcosmos.github.io/val-design). 📚

- To check out the [example](https://stackblitz.com/edit/vitejs-vite-jvn7fm), visit [https://stackblitz.com/edit/vitejs-vite-jvn7fm](https://stackblitz.com/edit/vitejs-vite-jvn7fm). 📚

<!-- Example:

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/vitejs-vite-jvn7fm) -->

## Install

\`\`\`bash
npm i val-design
\`\`\`

\`\`\`bash
yarn add val-design
\`\`\`

## Usage

And import style manually：

\`\`\`jsx
import 'val-design/dist/index.css'
\`\`\`

And import button：

\`\`\`jsx
import { Button } from 'val-design'

const App = () => (
  <>
    <Button type="primary" size="lg">
      val design
    </Button>
  </>
)
\`\`\`

## Project Activity

![Alt](https://repobeats.axiom.co/api/embed/598e41bfc615ece01d4f2e4c881fe52c54e6d8a9.svg 'Repobeats analytics image')

## Development

<!-- Use Gitpod

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://valcosmos-valdesign-jeyace35t07.ws-us47.gitpod.io/) -->

Use StackBlitz

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/valcosmos/val-design)

clone locally:

\`\`\`bash

git clone git@github.com:valcosmos/val-design.git

cd val-design

pnpm install --shamefully-hoist

pnpm storybook

\`\`\`

Open your browser and visit http://localhost:6006

## Issues

You can write down any issues you have under this [link](https://github.com/valcosmos/val-design/issues).

## License

val-design is [MIT licensed](LICENSE).
`;function o(n){return t.jsxs(t.Fragment,{children:[t.jsx(i,{title:"Introduction 介绍"}),`
`,t.jsx(a,{children:c})]})}function l(n={}){const{wrapper:s}=Object.assign({},r(),n.components);return s?t.jsx(s,{...n,children:t.jsx(o,{...n})}):o()}const p=()=>{throw new Error("Docs-only story")};p.parameters={docsOnly:!0};const e={title:"Introduction 介绍",tags:["stories-mdx"],includeStories:["__page"]};e.parameters=e.parameters||{};e.parameters.docs={...e.parameters.docs||{},page:l};const _=["__page"];export{_ as __namedExportsOrder,p as __page,e as default};
//# sourceMappingURL=Introduction.stories-e4de138a.js.map
