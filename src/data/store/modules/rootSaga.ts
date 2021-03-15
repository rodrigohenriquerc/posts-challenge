/* eslint-disable import/no-cycle */
import { all } from 'redux-saga/effects'

import postsSagas from './posts/sagas'
import commentsSagas from './comments/sagas'

export default function* rootSaga(): Generator<any, unknown, any> {
  return yield all([postsSagas, commentsSagas])
}
