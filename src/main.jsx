import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { DataLayer } from './DataLayer.jsx'
import './css/index.css'
import reducer, { initialState } from './reducer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>,
)
