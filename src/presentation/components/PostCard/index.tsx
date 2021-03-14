import React from 'react'
import { Button } from 'presentation/components'
import { IPostCard } from './models'
import * as S from './styles'

const PostCard: React.FC<IPostCard> = ({
  author,
  title,
  description,
}: IPostCard) => {
  return (
    <S.Container data-testid="post-card">
      <S.ContainerAuthor>
        <S.By>Por</S.By>
        <S.Author>{author}</S.Author>
      </S.ContainerAuthor>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <Button title="Comentários" />
    </S.Container>
  )
}

export default PostCard
