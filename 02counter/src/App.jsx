import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
    // let counter =  15
    const addValue = () =>{
      
      if(counter< 20){
        counter =counter+1;
        setCounter(counter)
        
      }
      
      
    }
     const removeValue = () =>{
      // console.log("clicked",counter);
      
       if(counter>0){
        counter =counter-1;
         setCounter(counter)
    
      }
     
      
    }

  return (
    <>
      <h1>vikas or react</h1>
      <h1>Counter value : {counter}</h1>
      <button onClick={addValue}>add value{counter}</button>
      <br />
      <button onClick={removeValue}>remove value{counter}</button>

    </>
  )
}

export default App
