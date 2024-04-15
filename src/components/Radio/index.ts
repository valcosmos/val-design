import type { FC } from 'react'
import type { RadioGroupProps } from './radioGroup'
import { RadioGroup } from './radioGroup'
import type { RadioProps } from './radio'
import { Radio } from './radio'

export type IRadioComponent = FC<RadioProps> & {
  Group: FC<RadioGroupProps>
}

const TransRadio = Radio as IRadioComponent

TransRadio.Group = RadioGroup

export default TransRadio
