import { all, takeLatest, put, call } from 'redux-saga/effects'
import { ActionTypes } from '../types'
import * as Actions from '../actions'
import { httpClient } from 'infra/http/httpClient'
import { getUsers } from 'data/http/services'

export function* GetUsersSaga(): Generator<any, unknown, any> {
  try {
    const data = yield call(getUsers, httpClient)
    yield put(Actions.GetUsersSuccess(data))
    return undefined
  } catch (error) {
    yield put(Actions.GetUsersFailure(error.message))
  }
}

export default all([takeLatest(ActionTypes.GET_USERS_REQUEST, GetUsersSaga)])
