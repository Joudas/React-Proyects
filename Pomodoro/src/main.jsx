import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Pomodoro } from './Components/Pomodoro.jsx'

createRoot(document.getElementById('root')).render(
  <Pomodoro/>
)
