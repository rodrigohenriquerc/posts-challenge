import { all, takeLatest, put, call } from 'redux-saga/effects'
import { ActionTypes } from '../types'
import * as Actions from '../actions'
import { httpClient } from 'infra/http/httpClient'
import { getPosts, getUsers } from 'data/http/services'
import { adaptData } from './Adapter'
import { findPostAuthorByUserId } from 'utils'

export function* GetPostsSaga(): Generator<any, unknown, any> {
  try {
    const posts = yield call(getPosts, httpClient)
    const users = yield call(getUsers, httpClient)
    const adaptedData = adaptData(posts, users, findPostAuthorByUserId)
    yield put(Actions.GetPostsSuccess(adaptedData))
    return undefined
  } catch (error) {
    yield put(Actions.GetPostsFailure(error.message))
  }
}

export default all([takeLatest(ActionTypes.GET_POSTS_REQUEST, GetPostsSaga)])
