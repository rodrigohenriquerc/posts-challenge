import React from 'react'
import { Button, Comment } from 'presentation/components'
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
      <S.CommentsSection>
        <Comment
          id={1}
          author="Tayanne Fernandes"
          description="Eu gostei muito desse post!"
        />
      </S.CommentsSection>
    </S.Container>
  )
}

export default PostCard
