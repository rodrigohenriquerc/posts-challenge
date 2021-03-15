import { User } from 'domains/users/models'
import { GetUsers } from 'domains/users/usecases'

export enum ActionTypes {
  GET_USERS_REQUEST = 'GET_USERS_REQUEST',
  GET_USERS_SUCCESS = 'GET_USERS_SUCCESS',
  GET_USERS_FAILURE = 'GET_USERS_FAILURE',
}

export interface RequestAction {
  type: ActionTypes.GET_USERS_REQUEST
}

export interface SuccessAction {
  type: ActionTypes.GET_USERS_SUCCESS
  payload: { data: GetUsers.Data }
}

export interface FailureAction {
  type: ActionTypes.GET_USERS_FAILURE
  payload: { error: string }
}

export type Action = RequestAction | SuccessAction | FailureAction

export interface PostsState {
  data: User[]
  error: string | null
  isLoading: boolean
}
