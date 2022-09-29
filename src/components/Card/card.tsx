import React, { CSSProperties, FC, ReactNode } from 'react'
import classNames from 'classnames'

type ShadowType = 'never' | 'hover' | 'always'

interface CardProps {
  /**
   * Card header
   */
  header: string | ReactNode
  bodyStyle?: CSSProperties
  shadow?: ShadowType
  children: ReactNode
}

export const Card: FC<CardProps> = ({
  header,
  bodyStyle,
  shadow,
  children
}) => {
  const classes = classNames('v-card', `v-card-${shadow}-shadow`)

  return (
    <div className={classes}>
      {header && <div className="v-card__header">{header}</div>}

      <div className="v-card__body" style={bodyStyle}>
        {children}
      </div>
    </div>
  )
}

Card.defaultProps = {
  shadow: 'never'
}

export default Card
