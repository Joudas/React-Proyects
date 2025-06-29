import { createRoot } from 'react-dom/client'
import { Interface } from './Components/Interface.jsx'
import React from 'react'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Interface/>
  </React.StrictMode>
)
