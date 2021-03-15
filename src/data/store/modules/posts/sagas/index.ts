import { all, takeLatest, put, call } from 'redux-saga/effects'
import { ActionTypes } from '../types'
import * as Actions from '../actions'
import { httpClient } from 'infra/http/httpClient'
import { getPosts } from 'data/http/services'

export function* GetPostsSaga(): Generator<any, unknown, any> {
  try {
    const data = yield call(getPosts, httpClient)
    yield put(Actions.GetPostsSuccess(data))
    return undefined
  } catch (error) {
    yield put(Actions.GetPostsFailure(error.message))
  }
}

export default all([takeLatest(ActionTypes.GET_POSTS_REQUEST, GetPostsSaga)])
