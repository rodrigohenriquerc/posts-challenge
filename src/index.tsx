import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/App'
import reportWebVitals from './reportWebVitals'

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./data/http/mocks/browser')
  worker.start()
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
