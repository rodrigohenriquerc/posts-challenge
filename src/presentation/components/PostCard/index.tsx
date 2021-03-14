import React, { useState } from 'react'
import { Button, Comment } from 'presentation/components'
import { IPostCard } from './models'
import comments from './mocks.json'
import * as S from './styles'

const PostCard: React.FC<IPostCard> = ({
  author,
  title,
  description,
}: IPostCard) => {
  const [isCommentsSectionOpen, setIsCommentsSectionOpen] = useState(false)
  return (
    <S.Container data-testid="post-card">
      <S.ContainerAuthor>
        <S.By>Por</S.By>
        <S.Author>{author}</S.Author>
      </S.ContainerAuthor>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <Button
        title="Comentários"
        onClick={() => setIsCommentsSectionOpen(!isCommentsSectionOpen)}
      />
      {isCommentsSectionOpen ? (
        <S.CommentsSection>
          {comments.map((comment, i) => (
            <S.ListItem key={comment.id}>
              <S.Division isFirst={i === 0} />
              <Comment
                id={comment.id}
                author={comment.author}
                description={comment.description}
              />
            </S.ListItem>
          ))}
        </S.CommentsSection>
      ) : null}
    </S.Container>
  )
}

export default PostCard
