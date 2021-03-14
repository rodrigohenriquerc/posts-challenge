import { Reducer } from 'react'
import { applyMiddleware, createStore, compose } from 'redux'
import { SagaMiddleware } from 'redux-saga'

export default (reducers: Reducer<any, any>, middlewares: SagaMiddleware[]) => {
  const enhancer = applyMiddleware(...middlewares)

  return createStore(reducers, compose(enhancer))
}
