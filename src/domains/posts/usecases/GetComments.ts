import { Comment } from 'domains/posts/models'

export type GetComments = (params: GetComments.Params) => GetComments.Data

export declare namespace GetComments {
  export interface Params {
    postId: number
  }
  export type Data = Comment[]
}
