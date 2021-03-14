/* eslint-disable import/no-cycle */
import { all } from 'redux-saga/effects'

import postsSagas from './posts/sagas'

export default function* rootSaga() {
  return yield all([postsSagas])
}
