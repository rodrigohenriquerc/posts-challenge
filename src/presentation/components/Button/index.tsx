import React from 'react'
import * as S from './styles'
import { IButton } from './models'

const Button: React.FC<IButton> = ({
  title,
  type = 'normal',
  onClick,
}: IButton) => (
  <S.Container buttonType={type} onClick={onClick}>
    {title}
    {type === 'ghost' ? <S.Icon /> : null}
  </S.Container>
)

export default Button
