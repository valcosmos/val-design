import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Upload } from './upload'

import Icon from '../Icon/icon'

export default {
  title: 'Data Entry/Upload 上传',
  component: Upload,
} as Meta<typeof Upload>

const Template: StoryFn<typeof Upload> = props => (
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
      size: 1024,
    },
    {
      uid: 'bbbb',
      name: 'image1.png',
      status: 'ready',
      size: 1024,
    },
    {
      uid: 'cccc',
      name: 'image2.png',
      status: 'uploading',
      size: 1024,
      percent: 80,
    },
    {
      uid: 'ffff',
      name: 'image3.png',
      status: 'error',
      size: 1024,
    },
  ],
}
