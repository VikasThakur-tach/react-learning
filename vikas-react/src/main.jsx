import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
const anotherElement = (
  <a href="https://googal.com" target =  '_blank'>VIsit Gii</a>
)
const anotherUser = "vikas react file"
const reactElement = React.createElement(
  'a',
  {href: 'https://googal.com', target: '_blank'},
  'click me to visit google',
  anotherElement
)

createRoot(document.getElementById('root')).render(
  
    reactElement
  
)
