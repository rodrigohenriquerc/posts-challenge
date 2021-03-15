import React from 'react'
import { IForm } from './models'
import * as S from './styles'

const Form: React.FC<IForm> = ({ children }: IForm) => (
  <S.Container>{children}</S.Container>
)

export default Form
