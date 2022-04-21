import { themes } from '@storybook/theming'
import { addons } from '@storybook/addons'

import { create } from '@storybook/theming'
// export default create({
//   base: 'light',
//   brandTitle: 'My custom storybook',
//   brandUrl: 'https://example.com',
//   brandImage: 'https://place-hold.it/350x150'
// })

addons.setConfig({
  // theme: themes.dark
  theme: create({
    base: 'light',
    brandTitle: '✨ val-design',
    brandUrl: 'https://github.com/valcosmos/val-design'
    // brandImage: 'https://valzt.cn/media/avatar_me.png'
  })
})
