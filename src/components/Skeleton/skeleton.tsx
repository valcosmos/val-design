import classNames from 'classnames'
import React, { FC, ReactNode } from 'react'

interface SkeletonProps {
  active?: boolean
  row?: number
  children: ReactNode
}

export const Skeleton: FC<SkeletonProps> = ({ active, row, children }) => {
  let rows = [0]
  if (!children) {
    rows = Array.from({ length: row as number }, () => 1).map((item, index) => index)
  }
  const classes = classNames('v-skeleton', {
    'v-skeleton__active': active,
    'v-skeleton__row': rows.length > 0,
    'v-skeleton__bg': !!children,
  })
  return (
    <>
      {rows.map(r => (
        <div key={r} className={classes}>
          {children}
        </div>
      ))}
    </>
  )
}

Skeleton.defaultProps = {
  row: 4,
}

export default Skeleton
