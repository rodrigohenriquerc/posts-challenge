import { Post, Comment } from 'domains/posts/models'

export type GetComments = (
  params: GetComments.Params
) => Promise<GetComments.Data>

export declare namespace GetComments {
  export interface Params {
    postId: Pick<Post, 'id'>
  }

  export type Data = Comment[]
}
