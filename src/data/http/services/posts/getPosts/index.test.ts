import { HttpClient, HttpRequest } from 'data/http/protocol'
import { getPosts } from '.'

const httpClientSpy: HttpClient = (request: HttpRequest) => {
  throw new Error('error')
}

describe('getPosts', () => {
  it('should throw the right error', () => {
    const promise = getPosts(httpClientSpy)
    expect(promise).rejects.toThrow('error')
  })
})
