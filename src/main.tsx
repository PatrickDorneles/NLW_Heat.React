import { App } from '@components/App'
import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyle } from './styles/GlobalStyles'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
)
