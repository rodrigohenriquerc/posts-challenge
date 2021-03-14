import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from 'data/store/modules/rootReducer'

const sagaMiddleware = createSagaMiddleware()

export const storeFactory = (initialState?: any) => {
  const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore)
  return createStoreWithMiddleware(rootReducer, initialState)
}
