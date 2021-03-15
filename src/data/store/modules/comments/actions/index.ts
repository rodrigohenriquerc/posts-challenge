import { GetComments } from 'domains/posts/usecases'
import {
  ActionTypes,
  RequestAction,
  SuccessAction,
  FailureAction,
} from '../types'

export function GetCommentsRequest(params: GetComments.Params): RequestAction {
  return {
    type: ActionTypes.GET_COMMENTS_REQUEST,
    payload: { params },
  }
}

export function GetCommentsSuccess(data: GetComments.Data): SuccessAction {
  return {
    type: ActionTypes.GET_COMMENTS_SUCCESS,
    payload: { data },
  }
}

export function GetCommentsFailure(error: string): FailureAction {
  return {
    type: ActionTypes.GET_COMMENTS_FAILURE,
    payload: { error },
  }
}
