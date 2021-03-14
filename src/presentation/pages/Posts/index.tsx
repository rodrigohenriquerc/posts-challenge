import React, { useEffect } from 'react'
import { PostCard, Loading } from 'presentation/components'
import { IPostCard } from 'presentation/components/PostCard/models'
import * as PostsHooks from 'presentation/hooks/posts'
import * as S from './styles'

const Posts: React.FC = () => {
  const { getPosts } = PostsHooks.usePostsDispatch()
  const { data, isLoading } = PostsHooks.usePostsSelector()

  useEffect(() => getPosts(), [])

  return (
    <S.Container isLoading={isLoading}>
      {isLoading ? (
        <Loading />
      ) : (
        <S.List>
          {data.map((post: IPostCard) => (
            <S.ListItem key={post.id}>
              <PostCard
                id={post.id}
                author={post.author}
                title={post.title}
                description={post.description}
              />
            </S.ListItem>
          ))}
        </S.List>
      )}
    </S.Container>
  )
}

export default Posts
