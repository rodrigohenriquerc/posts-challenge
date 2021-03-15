import { all, takeLatest, put, call } from 'redux-saga/effects'
import { ActionTypes, RequestAction } from '../types'
import * as Actions from '../actions'
import { httpClient } from 'infra/http/httpClient'
import { getComments, GetCommentsProtocol } from 'data/http/services'
import { GetComments } from 'domains/posts/usecases'

export function* GetCommentsSaga({
  payload,
}: RequestAction): Generator<any, unknown, any> {
  try {
    const data = yield call(getComments, payload.params, httpClient)
    const newData: GetComments.Data = data.map(
      (item: GetCommentsProtocol.Comment) => ({
        id: item.id,
        author: item.name,
        description: item.body,
      })
    )
    yield put(Actions.GetCommentsSuccess(newData))
    return undefined
  } catch (error) {
    yield put(Actions.GetCommentsFailure(error.message))
  }
}

export default all([
  takeLatest(ActionTypes.GET_COMMENTS_REQUEST, GetCommentsSaga),
])
