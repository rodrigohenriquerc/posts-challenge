import { call, put } from 'redux-saga/effects'
import { GetPostsSaga } from '.'
import * as Actions from '../actions'
import { httpClient } from 'infra/http/httpClient'
import { Data, getPosts } from 'data/http/services'
import { HttpRequest, HttpResponse, StatusCode } from 'data/http/protocol'

const mockSaga = () => {
  const saga = GetPostsSaga()
  return saga
}

const dataMock: Data = []

const httpClientSpy = (httpRequest: HttpRequest): Promise<HttpResponse> => {
  const response: HttpResponse = {
    statusCode: StatusCode.ok,
    data: dataMock,
  }
  return Promise.resolve(response)
}

describe('GetPostsSaga', () => {
  it('should call getPosts when receives request action', () => {
    const saga = mockSaga()
    expect(saga.next().value).toStrictEqual(call(getPosts, httpClient))
  })
  it('should call success action when receives data', async () => {
    const saga = mockSaga()
    saga.next()
    const data = await getPosts(httpClientSpy)
    expect(saga.next(data).value).toStrictEqual(
      put(Actions.GetPostsSuccess(data))
    )
  })
  it('should call failure action when receives error', () => {
    const saga = mockSaga()
    saga.next()
    const error = { message: 'error' }
    expect(saga.throw(error).value).toStrictEqual(
      put(Actions.GetPostsFailure(error.message))
    )
  })
})
