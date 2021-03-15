/* eslint-disable import/no-cycle */
import { all } from 'redux-saga/effects'

import commentsSagas from './comments/sagas'
import postsSagas from './posts/sagas'
import usersSagas from './users/sagas'

export default function* rootSaga(): Generator<any, unknown, any> {
  return yield all([commentsSagas, postsSagas, usersSagas])
}
