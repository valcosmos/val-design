import baseConfig from './rollup.config'
import excludeDependenciesFromBundle from 'rollup-plugin-exclude-dependencies-from-bundle'

const config = {
  ...baseConfig,
  output: [
    {
      file: 'dist/index.es.js',
      format: 'es',
    },
  ],
  plugins: [...baseConfig.plugins, excludeDependenciesFromBundle()],

  // external: ['react', 'react-dom', 'axios']
}

export default config
