import { RadioGroup, RadioGroupProps } from './radioGroup'
import { Radio, RadioProps } from './radio'
import { FC } from 'react'

export type IRadioComponent = FC<RadioProps> & {
  Group: FC<RadioGroupProps>
}

const TransRadio = Radio as IRadioComponent

TransRadio.Group = RadioGroup

export default TransRadio
