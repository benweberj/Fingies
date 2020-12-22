import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
    background: radial-gradient(#fff, #888);
    background-size: cover;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
