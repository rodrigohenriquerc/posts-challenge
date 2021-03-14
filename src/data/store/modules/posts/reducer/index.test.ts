import PostsReducer, { INITIAL_STATE } from '.'
import {
  ActionTypes,
  RequestAction,
  SuccessAction,
  FailureAction,
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
})
