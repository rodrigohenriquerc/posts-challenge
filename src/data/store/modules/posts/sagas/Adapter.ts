import { GetPostsProtocol, GetUsersProtocol } from 'data/http/services'
import { GetPosts } from 'domains/posts/usecases'

type FindPostAuthorByUserId = (
  userId: number,
  users: GetUsersProtocol.Data
) => string

export const adaptData = (
  posts: GetPostsProtocol.Data,
  users: GetUsersProtocol.Data,
  findPostAuthorByUserId: FindPostAuthorByUserId
): GetPosts.Data => {
  return posts.map((post) => ({
    id: post.id,
    author: findPostAuthorByUserId(post.userId, users),
    title: post.title,
    description: post.body,
  }))
}
