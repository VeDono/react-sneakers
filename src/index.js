import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.scss'
import 'macro-css'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Routes>
        <Route path="/" element={<App />} />
      </Routes> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
