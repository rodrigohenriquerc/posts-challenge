import { rest } from 'msw'
import { GetCommentsProtocol } from '../protocol'
import response from './response.json'

export const commentsHandlers = [
  rest.get('https://jsonplaceholder.api/comments', (req, res, ctx) => {
    const {
      url: { searchParams },
    } = req
    const postId = searchParams.get('postId') || 1
    const data = response.filter((item) => item.postId === postId)
    return res(ctx.status(200), ctx.json(data), ctx.delay(1000))
  }),
]
