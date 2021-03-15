import React from 'react'
import { Provider } from 'react-redux'
import store from 'data/store'
import { Posts } from 'presentation/pages'
import 'presentation/styles/reset.css'
import 'presentation/styles/global.css'

const App: React.FC = () => (
  <Provider store={store}>
    <Posts />
  </Provider>
)

export default App
