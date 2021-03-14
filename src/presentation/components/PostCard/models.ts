import { Post } from 'domains/posts/models'

export interface IPostCard extends Omit<Post, 'comments'> {}
