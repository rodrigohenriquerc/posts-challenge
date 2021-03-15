import { HttpClient, HttpRequest } from 'data/http/protocol'
import { getUsers } from '.'

const httpClientSpy: HttpClient = (request: HttpRequest) => {
  throw new Error('error')
}

describe('getUsers', () => {
  it('should throw the right error', () => {
    const promise = getUsers(httpClientSpy)
    expect(promise).rejects.toThrow('error')
  })
})
