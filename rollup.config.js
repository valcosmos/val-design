import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import sass from 'rollup-plugin-sass'
import excludeDependenciesFromBundle from 'rollup-plugin-exclude-dependencies-from-bundle'

const overrides = {
  compilerOptions: {
    declaration: true
  },
  exclude: ['src/**/*.test.tsx', 'src/**/*.stories.tsx', 'src/**/*.stories.mdx']
}

const config = {
  input: 'src/main.tsx',
  output: [
    {
      file: 'dist/index.es.js',
      format: 'es'
    }
  ],
  plugins: [
    // 处理第三方文件
    nodeResolve(),
    commonjs(),
    json(),
    excludeDependenciesFromBundle(),
    typescript({
      tsconfigOverride: overrides
    }),
    sass({
      output: 'dist/index.css'
    })
  ]

  // external: ['react', 'react-dom', 'axios']
}

export default config
