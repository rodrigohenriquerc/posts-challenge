import { createSelectorHook } from 'react-redux'
import { CommentsState } from 'data/store/modules/comments/types'
import { PostsState } from 'data/store/modules/posts/types'
import { UsersState } from 'data/store/modules/users/types'

interface IGlobalState {
  comments: CommentsState
  posts: PostsState
  users: UsersState
}

export const useStateSelector = createSelectorHook<IGlobalState>()
