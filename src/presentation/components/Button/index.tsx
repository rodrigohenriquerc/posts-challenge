import React from 'react'
import * as S from './styles'
import { IButton } from './models'

const Button: React.FC<IButton> = ({
  title,
  type = 'normal',
  icon,
  onClick,
}: IButton) => (
  <S.Container data-testid="button" buttonType={type} onClick={onClick}>
    {title}
    {icon}
  </S.Container>
)

export default Button
