import React from 'react'
import { ITextField } from './models'
import * as S from './styles'

const TextField: React.FC<ITextField> = ({ long, placeholder }: ITextField) => {
  return long ? (
    <S.LongInput placeholder={placeholder} />
  ) : (
    <S.Input type="text" placeholder={placeholder} />
  )
}

export default TextField
