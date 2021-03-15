import { rest } from 'msw'
import response from './response.json'

export const usersHandlers = [
  rest.get('https://jsonplaceholder.api/users', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(response), ctx.delay(1000))
  }),
]
