import { rest } from 'msw'
import response from './response.json'

export const commentsHandlers = [
  rest.get('https://jsonplaceholder.api/comments', (req, res, ctx) => {
    const {
      url: { searchParams },
    } = req
    const postId = searchParams.get('postId')
    let id: keyof typeof response
    if (postId) {
      id = postId.toString() as keyof typeof response
    } else {
      id = '1' as keyof typeof response
    }
    const data = response[id] ? response[id] : []
    return res(ctx.status(200), ctx.json(data), ctx.delay(1000))
  }),
]
