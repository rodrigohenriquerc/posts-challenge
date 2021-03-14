import { createSelectorHook } from 'react-redux'
import { PostsState } from 'data/store/modules/posts/types'

interface IGlobalState {
  posts: PostsState
}

export const useStateSelector = createSelectorHook<IGlobalState>()
