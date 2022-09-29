import classNames from 'classnames'
import React, { FC, ReactNode } from 'react'

interface SkeletonProps {
  active?: boolean
  bg?: boolean
  row?: number
  children: ReactNode
}

export const Skeleton: FC<SkeletonProps> = ({ active, bg, row, children }) => {
  let rows = [0]
  if (!bg) {
    rows = Array.from({ length: row! }, () => 1).map((item, index) => index)
  }
  const classes = classNames('v-skeleton', {
    'v-skeleton__active': active,
    'v-skeleton__row': rows.length > 0,
    'v-skeleton__bg': !!children || bg
  })
  return (
    <>
      {rows.map((r) => (
        <div key={r} className={classes}>
          {children}
        </div>
      ))}
    </>
  )
}

Skeleton.defaultProps = {
  row: 4,
  bg: false
}

export default Skeleton
