import { rest } from 'msw'
import response from './response.json'

export const handlers = [
  rest.get('https://jsonplaceholder.api/posts', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(response), ctx.delay(1000))
  }),
]
