import { createSelectorHook } from 'react-redux'
import { PostsState } from 'data/store/modules/posts/types'
import { CommentsState } from 'data/store/modules/comments/types'

interface IGlobalState {
  posts: PostsState
  comments: CommentsState
}

export const useStateSelector = createSelectorHook<IGlobalState>()
