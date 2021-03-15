import PostsReducer, { INITIAL_STATE } from '.'
import {
  ActionTypes,
  RequestAction,
  SuccessAction,
  FailureAction,
  LoadCommentsAction,
  RemovePostAction,
  PostsState,
} from '../types'
import { Post } from 'domains/posts/models'

describe('PostsReducer', () => {
  it('should return default state', () => {
    const action = { type: 'any' }
    const state = PostsReducer(undefined, action)
    expect(state).toStrictEqual(INITIAL_STATE)
  })
  it('should handle request action', () => {
    const action: RequestAction = {
      type: ActionTypes.GET_POSTS_REQUEST,
    }
    const state = PostsReducer(INITIAL_STATE, action)
    expect(state).toStrictEqual(INITIAL_STATE)
  })
  it('should handle success action', () => {
    const post: Post = {
      id: 1,
      author: 'Rodrigo Henrique',
      title: 'random_title',
      description: 'random_description',
      comments: [],
    }
    const action: SuccessAction = {
      type: ActionTypes.GET_POSTS_SUCCESS,
      payload: {
        data: [post],
      },
    }
    const state = PostsReducer(INITIAL_STATE, action)
    expect(state.data).toHaveLength(1)
    expect(state.data[0]).toStrictEqual(post)
    expect(state.error).toBe(null)
    expect(state.isLoading).toBe(false)
  })
  it('should handle failure action', () => {
    const action: FailureAction = {
      type: ActionTypes.GET_POSTS_FAILURE,
      payload: {
        error: 'error',
      },
    }
    const state = PostsReducer(INITIAL_STATE, action)
    expect(state.error).toBe('error')
    expect(state.isLoading).toBe(false)
  })
  it('should handle load_comments action', () => {
    const action: LoadCommentsAction = {
      type: ActionTypes.LOAD_COMMENTS,
      payload: {
        postId: 1,
        data: [{ id: 5, author: '', description: '' }],
      },
    }
    const state = PostsReducer(
      {
        data: [{ id: 1, author: '', title: '', description: '', comments: [] }],
        isLoading: false,
        error: null,
      },
      action
    )
    expect(state.data[0].comments).toHaveLength(1)
    expect(state.data[0].comments[0].id).toBe(action.payload.data[0].id)
    expect(state.data[0].comments[0].author).toBe(action.payload.data[0].author)
    expect(state.data[0].comments[0].description).toBe(
      action.payload.data[0].description
    )
  })
  it('should be able to remove a post', () => {
    const currentState: PostsState = {
      ...INITIAL_STATE,
      data: [{ id: 1, author: '', title: '', description: '', comments: [] }],
    }
    const action: RemovePostAction = {
      type: ActionTypes.REMOVE_POST,
      payload: {
        params: { postId: 1 },
      },
    }
    const newState = PostsReducer(currentState, action)
    expect(newState.data.some((post) => post.id === 1)).toBeFalsy()
    expect(newState.data).toHaveLength(0)
  })
})
