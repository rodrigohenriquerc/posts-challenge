import CommentsReducer, { INITIAL_STATE } from '.'
import {
  ActionTypes,
  RequestAction,
  SuccessAction,
  FailureAction,
} from '../types'
import { Comment } from 'domains/posts/models'
import { GetComments } from 'domains/posts/usecases'

describe('CommentsReducer', () => {
  it('should return default state', () => {
    const action = { type: 'any' }
    const state = CommentsReducer(undefined, action)
    expect(state).toStrictEqual(INITIAL_STATE)
  })
  it('should handle request action', () => {
    const params: GetComments.Params = {
      postId: 1,
    }
    const action: RequestAction = {
      type: ActionTypes.GET_COMMENTS_REQUEST,
      payload: { params },
    }
    const state = CommentsReducer(INITIAL_STATE, action)
    expect(state).toStrictEqual(INITIAL_STATE)
  })
  it('should handle success action', () => {
    const comment: Comment = {
      id: 1,
      postId: 5,
      author: 'Tayanne Fernandes',
      description: 'random_description',
    }
    const action: SuccessAction = {
      type: ActionTypes.GET_COMMENTS_SUCCESS,
      payload: {
        data: [comment],
      },
    }
    const state = CommentsReducer(INITIAL_STATE, action)
    expect(state.data).toHaveLength(1)
    expect(state.data[0]).toStrictEqual(comment)
    expect(state.error).toBe(null)
    expect(state.isLoading).toBe(false)
  })
  it('should handle failure action', () => {
    const action: FailureAction = {
      type: ActionTypes.GET_COMMENTS_FAILURE,
      payload: {
        error: 'error',
      },
    }
    const state = CommentsReducer(INITIAL_STATE, action)
    expect(state.error).toBe('error')
    expect(state.isLoading).toBe(false)
  })
})
