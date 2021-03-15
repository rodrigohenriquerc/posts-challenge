import * as Actions from '.'
import { ActionTypes } from '../types'
import { Comment } from 'domains/posts/models'
import { GetComments } from 'domains/posts/usecases'

describe('Request action', () => {
  it('should return the right type and payload', () => {
    const params: GetComments.Params = {
      postId: 1,
    }
    const action = Actions.GetCommentsRequest(params)
    expect(action.type).toBe(ActionTypes.GET_COMMENTS_REQUEST)
    expect(action.payload).toStrictEqual({ params })
  })
})

describe('Success action', () => {
  it('should return the right type and payload', () => {
    const data: Comment[] = [
      {
        id: 1,
        postId: 5,
        author: 'Tayanne Fernandes',
        description: 'random_description',
      },
    ]
    const action = Actions.GetCommentsSuccess(data)
    expect(action.type).toBe(ActionTypes.GET_COMMENTS_SUCCESS)
    expect(action.payload).toStrictEqual({ data })
  })
})

describe('Failure action', () => {
  it('should return the right type and payload', () => {
    const error = 'error'
    const action = Actions.GetCommentsFailure(error)
    expect(action.type).toBe(ActionTypes.GET_COMMENTS_FAILURE)
    expect(action.payload).toStrictEqual({ error })
  })
})
