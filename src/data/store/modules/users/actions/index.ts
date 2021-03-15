import { GetUsers } from 'domains/users/usecases'
import {
  ActionTypes,
  RequestAction,
  SuccessAction,
  FailureAction,
} from '../types'

export function GetUsersRequest(): RequestAction {
  return {
    type: ActionTypes.GET_USERS_REQUEST,
  }
}

export function GetUsersSuccess(data: GetUsers.Data): SuccessAction {
  return {
    type: ActionTypes.GET_USERS_SUCCESS,
    payload: { data },
  }
}

export function GetUsersFailure(error: string): FailureAction {
  return {
    type: ActionTypes.GET_USERS_FAILURE,
    payload: { error },
  }
}
