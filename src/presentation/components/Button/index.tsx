import React from 'react'
import * as S from './styles'
import { IButton } from './models'

const Button: React.FC<IButton> = ({ title }: IButton) => (
  <S.Container>
    {title}
    <S.Icon />
  </S.Container>
)

export default Button
