import type { StorybookViteConfig } from '@storybook/builder-vite'

const config: StorybookViteConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],

  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true
  },
  features: {
    storyStoreV7: true
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    if (configType === 'PRODUCTION') {
      return { ...config, base: './' }
    }
    return config
  }
}

module.exports = config
