import React, { useEffect, useState } from 'react'
import {
  Form,
  TextField,
  Button,
  PostCard,
  Loading,
} from 'presentation/components'
import * as PostsHooks from 'presentation/hooks/posts'
import * as CommentsHooks from 'presentation/hooks/comments'
import * as UsersHooks from 'presentation/hooks/users'
import * as S from './styles'

const Posts: React.FC = () => {
  const { data, isLoading } = PostsHooks.usePostsSelector()
  const { isLoading: isLoadingComments } = CommentsHooks.useCommentsSelector()
  const { getPosts } = PostsHooks.usePostsDispatch()
  const { getComments } = CommentsHooks.useCommentsDispatch()
  const { getUsers } = UsersHooks.useUsersDispatch()

  useEffect(() => {
    getPosts()
    getUsers()
  }, [])

  const [openPostId, setOpenPostId] = useState<number | null>(null)

  const loadComments = (postId: number) => {
    if (postId !== openPostId) {
      getComments(postId)
      setOpenPostId(postId)
    } else {
      setOpenPostId(null)
    }
  }

  const checkIfPostHasComments = (postId: number) => {
    return data.some((post) => post.id === postId && post.comments.length > 0)
  }

  const checkIfPostIsOpen = (postId: number) => {
    const postHasComments = checkIfPostHasComments(postId)
    const postIsSelected = postId === openPostId
    const commentsAreNotLoading = !isLoadingComments
    return postIsSelected && commentsAreNotLoading && postHasComments
  }

  return (
    <S.Container isLoading={isLoading}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Form>
            <TextField placeholder="Título" />
            <TextField placeholder="Compartilhe suas ideias." long />
            <Button title="Enviar" onClick={() => {}} />
          </Form>
          <S.List>
            {data.map((post) => (
              <S.ListItem key={post.id}>
                <PostCard
                  id={post.id}
                  author={post.author}
                  title={post.title}
                  description={post.description}
                  comments={post.comments}
                  onLoadComments={loadComments}
                  checkIfIsOpen={checkIfPostIsOpen}
                />
              </S.ListItem>
            ))}
          </S.List>
        </>
      )}
    </S.Container>
  )
}

export default Posts
