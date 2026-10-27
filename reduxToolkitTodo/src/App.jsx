import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' mx-auto flex max-w-xl flex-col items-center  px-4'>
      
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App
