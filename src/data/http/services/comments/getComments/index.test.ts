import { HttpClient, HttpRequest } from 'data/http/protocol'
import { getComments } from '.'
import { GetCommentsProtocol } from './protocol'

const httpClientSpy: HttpClient = (request: HttpRequest) => {
  throw new Error('error')
}

describe('getComments', () => {
  it('should throw the right error', () => {
    const params: GetCommentsProtocol.Params = {
      postId: 1,
    }
    const promise = getComments(params, httpClientSpy)
    expect(promise).rejects.toThrow('error')
  })
})
