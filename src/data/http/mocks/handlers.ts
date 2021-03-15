import { postsHandlers, commentsHandlers } from 'data/http/services'

export const handlers = [...postsHandlers, ...commentsHandlers]
