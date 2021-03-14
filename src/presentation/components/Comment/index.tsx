import React from 'react'
import { IComment } from './models'
import * as S from './styles'

const Comment: React.FC<IComment> = ({ author, description }: IComment) => (
  <S.Container data-testid="post-comment">
    <S.Author>{author}</S.Author>
    <S.Description>{description}</S.Description>
  </S.Container>
)

export default Comment
