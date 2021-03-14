import { GetPosts } from "../../../../../domains/posts/usecases/GetPosts";
import {
  ActionTypes,
  RequestAction,
  SuccessAction,
  FailureAction,
} from "../types";

export function GetPostsRequest(): RequestAction {
  return {
    type: ActionTypes.GET_POSTS_REQUEST,
  };
}

export function GetPostsSuccess(data: GetPosts.Data): SuccessAction {
  return {
    type: ActionTypes.GET_POSTS_SUCCESS,
    payload: { data },
  };
}

export function GetPostsFailure(error: string): FailureAction {
  return {
    type: ActionTypes.GET_POSTS_FAILURE,
    payload: { error },
  };
}
