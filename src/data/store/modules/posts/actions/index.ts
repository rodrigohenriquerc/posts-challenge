import { GetComments, GetPosts } from 'domains/posts/usecases'
import {
  ActionTypes,
  RequestAction,
  SuccessAction,
  FailureAction,
  LoadCommentsAction,
} from '../types'

export function GetPostsRequest(): RequestAction {
  return {
    type: ActionTypes.GET_POSTS_REQUEST,
  }
}

export function GetPostsSuccess(data: GetPosts.Data): SuccessAction {
  return {
    type: ActionTypes.GET_POSTS_SUCCESS,
    payload: { data },
  }
}

export function GetPostsFailure(error: string): FailureAction {
  return {
    type: ActionTypes.GET_POSTS_FAILURE,
    payload: { error },
  }
}

export function LoadComments(
  postId: number,
  data: GetComments.Data
): LoadCommentsAction {
  return {
    type: ActionTypes.LOAD_COMMENTS,
    payload: { postId, data },
  }
}
