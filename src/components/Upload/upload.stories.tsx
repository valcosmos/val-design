import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Upload } from './upload'

import Icon from '../Icon/icon'

export default {
  title: 'val-design/Upload 上传',
  component: Upload
} as ComponentMeta<typeof Upload>

const style: React.CSSProperties = {
  marginTop: '15px'
}

const Template: ComponentStory<typeof Upload> = (props) => (
  <Upload {...props}>
    <Icon icon="upload" size="5x" theme="secondary" />
    <br />
    <p style={style}>Drag file over to upload</p>
  </Upload>
)

export const SimpleUpload = Template.bind({})
SimpleUpload.args = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange: action('changed'),
  onRemove: action('removed'),
  name: 'fileName',
  multiple: true,
  drag: true
}
