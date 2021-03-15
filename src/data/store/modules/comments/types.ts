import { Comment } from 'domains/posts/models'
import { GetComments } from 'domains/posts/usecases'

export enum ActionTypes {
  GET_COMMENTS_REQUEST = 'GET_COMMENTS_REQUEST',
  GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS',
  GET_COMMENTS_FAILURE = 'GET_COMMENTS_FAILURE',
}

export interface RequestAction {
  type: ActionTypes.GET_COMMENTS_REQUEST
  payload: { params: GetComments.Params }
}

export interface SuccessAction {
  type: ActionTypes.GET_COMMENTS_SUCCESS
  payload: { data: GetComments.Data }
}

export interface FailureAction {
  type: ActionTypes.GET_COMMENTS_FAILURE
  payload: { error: string }
}

export type Action = RequestAction | SuccessAction | FailureAction

export interface CommentsState {
  data: Comment[]
  error: string | null
  isLoading: boolean
}
