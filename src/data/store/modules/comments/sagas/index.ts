import { all, takeLatest, put, call } from 'redux-saga/effects'
import { ActionTypes, RequestAction } from '../types'
import * as Actions from '../actions'
import { httpClient } from 'infra/http/httpClient'
import { getComments } from 'data/http/services'
import { adaptData } from './Adapter'

export function* GetCommentsSaga({
  payload,
}: RequestAction): Generator<any, unknown, any> {
  try {
    const data = yield call(getComments, payload.params, httpClient)
    yield put(Actions.GetCommentsSuccess(adaptData(data)))
    return undefined
  } catch (error) {
    yield put(Actions.GetCommentsFailure(error.message))
  }
}

export default all([
  takeLatest(ActionTypes.GET_COMMENTS_REQUEST, GetCommentsSaga),
])
