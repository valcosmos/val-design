import classNames from 'classnames'
import type { FC, ReactNode } from 'react'
import React from 'react'

type TagType = 'success' | 'warning' | 'danger' | 'info'
type TagSize = 'large' | 'medium' | 'small' | 'mini'
type TagTheme = 'dark' | 'light' | 'plain'

interface TagProps {
  type?: TagType
  size?: TagSize
  theme?: TagTheme
  color?: string
  hit?: boolean
  children: ReactNode
}

export const Tag: FC<TagProps> = ({ type, size, theme, color, hit, children }) => {
  const classes = classNames('v-tag', [
    type && `v-tag--${type}`,
    size && `v-tag--${size}`,
    theme && `v-tag--${theme}`,
    hit && 'is-hit',
  ])
  return (
    <span className={classes} style={{ color }}>
      {children}
    </span>
  )
}

Tag.defaultProps = {
  type: 'success',
  theme: 'light',
  size: 'medium',
}

export default Tag
