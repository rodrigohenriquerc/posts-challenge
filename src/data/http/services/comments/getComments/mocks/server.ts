import { rest } from 'msw'
import { postId1, postId2, postId3, postId4, postId5 } from './response'

export const commentsHandlers = [
  rest.get('https://jsonplaceholder.api/comments', (req, res, ctx) => {
    const {
      url: { searchParams },
    } = req
    const postId = searchParams.get('postId')
    const data = {
      1: postId1,
      2: postId2,
      3: postId3,
      4: postId4,
      5: postId5,
      6: [],
    }[postId || 6]
    return res(ctx.status(200), ctx.json(data), ctx.delay(1000))
  }),
]
