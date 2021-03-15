import { Post } from 'domains/posts/models'

export type GetPosts = () => GetPosts.Data

export declare namespace GetPosts {
  export type Data = Omit<Post, 'comments'>[]
}
