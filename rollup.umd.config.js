// import typescript from 'rollup-plugin-typescript2'
// import { nodeResolve } from '@rollup/plugin-node-resolve'
// import commonjs from '@rollup/plugin-commonjs'
// import json from '@rollup/plugin-json'
// import sass from 'rollup-plugin-sass'
// // import excludeDependenciesFromBundle from 'rollup-plugin-exclude-dependencies-from-bundle'
import baseConfig from './rollup.config'
import replace from '@rollup/plugin-replace'
import { terser } from 'rollup-plugin-terser'

// const overrides = {
//   compilerOptions: {
//     declaration: true
//   },
//   exclude: ['src/**/*.test.tsx', 'src/**/*.stories.tsx', 'src/**/*.stories.mdx']
// }

const config = {
  ...baseConfig,
  output: [
    {
      // script 引入后的全局名称
      name: 'vald',
      file: 'dist/index.umd.js',
      format: 'umd',
      // 导出的是全局变量命名的一个方式
      exports: 'named',
      // 设置排除的包在cdn引入时的全局变量名
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        axios: 'Axios'
      },
      plugins: [terser()]
    }
  ],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    ...baseConfig.plugins
  ],

  external: ['react', 'react-dom', 'axios']
}

export default config
