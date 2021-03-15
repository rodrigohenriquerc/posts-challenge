import { Post } from 'domains/posts/models'
import { GetComments, GetPosts } from 'domains/posts/usecases'

export enum ActionTypes {
  GET_POSTS_REQUEST = 'GET_POSTS_REQUEST',
  GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS',
  GET_POSTS_FAILURE = 'GET_POSTS_FAILURE',
  LOAD_COMMENTS = 'LOAD_COMMENTS',
}

export interface RequestAction {
  type: ActionTypes.GET_POSTS_REQUEST
}

export interface SuccessAction {
  type: ActionTypes.GET_POSTS_SUCCESS
  payload: { data: GetPosts.Data }
}

export interface FailureAction {
  type: ActionTypes.GET_POSTS_FAILURE
  payload: { error: string }
}

export interface LoadCommentsAction {
  type: ActionTypes.LOAD_COMMENTS
  payload: { postId: number; data: GetComments.Data }
}

export type Action =
  | RequestAction
  | SuccessAction
  | FailureAction
  | LoadCommentsAction

export interface PostsState {
  data: Post[]
  error: string | null
  isLoading: boolean
}
