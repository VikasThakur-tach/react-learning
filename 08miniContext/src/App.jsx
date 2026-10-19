import { useState } from 'react'
import Login from './components/Login'
import Profile from './components/Profile'

import './App.css'
import UserContextProvider from './Context/UserContexProvider'

function App() {
 

  return (
    <UserContextProvider>
      <h1>react learning</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
