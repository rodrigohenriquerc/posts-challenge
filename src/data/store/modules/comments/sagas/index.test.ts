import { call, put } from 'redux-saga/effects'
import { GetCommentsSaga } from '.'
import * as Actions from '../actions'
import { httpClient } from 'infra/http/httpClient'
import { getComments, GetCommentsProtocol } from 'data/http/services'
import { HttpRequest, HttpResponse, StatusCode } from 'data/http/protocol'
import { ActionTypes, RequestAction } from '../types'
import { GetComments } from 'domains/posts/usecases'

const params: GetComments.Params = { postId: 1 }
const action: RequestAction = {
  type: ActionTypes.GET_COMMENTS_REQUEST,
  payload: { params },
}
const mockSaga = () => {
  const saga = GetCommentsSaga(action)
  return saga
}

const dataMock: GetCommentsProtocol.Data = []

const httpClientSpy = (httpRequest: HttpRequest): Promise<HttpResponse> => {
  const response: HttpResponse = {
    statusCode: StatusCode.ok,
    data: dataMock,
  }
  return Promise.resolve(response)
}

describe('GetCommentsSaga', () => {
  it('should call getComments when receives request action', () => {
    const saga = mockSaga()
    expect(saga.next().value).toStrictEqual(
      call(getComments, params, httpClient)
    )
  })
  it('should call success action when receives data', async () => {
    const saga = mockSaga()
    saga.next()
    const data = await getComments(params, httpClientSpy)
    const newData: GetComments.Data = data.map(
      (item: GetCommentsProtocol.Comment) => ({
        id: item.id,
        author: item.name,
        description: item.body,
      })
    )
    expect(saga.next(data).value).toStrictEqual(
      put(Actions.GetCommentsSuccess(newData))
    )
  })
  it('should call failure action when receives error', () => {
    const saga = mockSaga()
    saga.next()
    const error = { message: 'error' }
    expect(saga.throw(error).value).toStrictEqual(
      put(Actions.GetCommentsFailure(error.message))
    )
  })
})
