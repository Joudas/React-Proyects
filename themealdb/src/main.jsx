import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HandlePages } from './Components/HandlePages.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HandlePages />
  </StrictMode>,
)
