// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//     node: true,
//   },
//   extends: [
//     'eslint:recommended',
//     'plugin:react/recommended',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:storybook/recommended',
//     'plugin:prettier/recommended',
//     'plugin:storybook/recommended',
//   ],
//   overrides: [],
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     ecmaVersion: 'latest',
//     sourceType: 'module',
//   },
//   plugins: ['react', '@typescript-eslint', 'prettier'],
//   rules: {
//     'react/react-in-jsx-scope': 0,
//     '@typescript-eslint/no-explicit-any': 'off',
//   },
//   settings: {
//     react: {
//       version: 'detect',
//     },
//   },
// }

import antfu from '@antfu/eslint-config'

export default antfu()
