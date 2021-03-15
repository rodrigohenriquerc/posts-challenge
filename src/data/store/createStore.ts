import { Reducer } from 'react'
import { applyMiddleware, createStore, compose } from 'redux'
import { SagaMiddleware } from 'redux-saga'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (reducers: Reducer<any, any>, middlewares: SagaMiddleware[]) => {
  const enhancer = applyMiddleware(...middlewares)

  return createStore(reducers, composeEnhancers(enhancer))
}
