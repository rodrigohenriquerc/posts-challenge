import React from 'react'
import * as S from './styles'
import { IButton } from './models'

const Button: React.FC<IButton> = ({ title, onClick }: IButton) => (
  <S.Container onClick={onClick}>
    {title}
    <S.Icon />
  </S.Container>
)

export default Button
