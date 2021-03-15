import { ActionTypes, PostsState, Action } from '../types'

export const INITIAL_STATE: PostsState = {
  data: [],
  error: null,
  isLoading: true,
}

const PostsReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionTypes.GET_POSTS_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true,
      }
    case ActionTypes.GET_POSTS_SUCCESS:
      return {
        ...state,
        data: action.payload.data.map((post) => ({ ...post, comments: [] })),
        error: null,
        isLoading: false,
      }
    case ActionTypes.GET_POSTS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      }
    case ActionTypes.LOAD_COMMENTS:
      return {
        ...state,
        data: state.data.map((post) => {
          if (post.id === action.payload.postId) {
            return { ...post, comments: action.payload.data }
          }
          return post
        }),
        error: null,
        isLoading: false,
      }
    case ActionTypes.REMOVE_POST:
      return {
        ...state,
        data: state.data.filter(
          (post) => post.id !== action.payload.params.postId
        ),
        error: null,
        isLoading: false,
      }
    default:
      return state
  }
}

export default PostsReducer
