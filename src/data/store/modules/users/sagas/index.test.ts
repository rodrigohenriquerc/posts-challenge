import { call, put } from 'redux-saga/effects'
import { GetUsersSaga } from '.'
import * as Actions from '../actions'
import { httpClient } from 'infra/http/httpClient'
import { getUsers, GetUsersProtocol } from 'data/http/services'
import { HttpRequest, HttpResponse, StatusCode } from 'data/http/protocol'

const mockSaga = () => {
  const saga = GetUsersSaga()
  return saga
}

const dataMock: GetUsersProtocol.Data = []

const httpClientSpy = (httpRequest: HttpRequest): Promise<HttpResponse> => {
  const response: HttpResponse = {
    statusCode: StatusCode.ok,
    data: dataMock,
  }
  return Promise.resolve(response)
}

describe('GetUsersSaga', () => {
  it('should call getUsers when receives request action', () => {
    const saga = mockSaga()
    expect(saga.next().value).toStrictEqual(call(getUsers, httpClient))
  })
  it('should call success action when receives data', async () => {
    const saga = mockSaga()
    saga.next()
    const data = await getUsers(httpClientSpy)
    expect(saga.next(data).value).toStrictEqual(
      put(Actions.GetUsersSuccess(data))
    )
    expect(saga.next().done).toBe(true)
  })
  it('should call failure action when receives error', () => {
    const saga = mockSaga()
    saga.next()
    const error = { message: 'error' }
    expect(saga.throw(error).value).toStrictEqual(
      put(Actions.GetUsersFailure(error.message))
    )
  })
})
