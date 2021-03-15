import {
  postsHandlers,
  commentsHandlers,
  usersHandlers,
} from 'data/http/services'

export const handlers = [
  ...postsHandlers,
  ...commentsHandlers,
  ...usersHandlers,
]
