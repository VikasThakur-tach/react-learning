import { useState,useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password,setpasswod] = useState("")
  const passwordRef = useRef(null)
  const passwordGenreter =  useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str +="0123456789"
    if(charAllowed) str +="`~!@#$%^&*()_+-{}[]"

    for (let i = 0; i <length; i++){
     let char = Math.floor(Math.random() * str.length)
     pass += str.charAt(char)
    }
    setpasswod(pass)

  }, [length, numberAllowed, charAllowed, setpasswod]) 

  const copytoclipbord= useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,200)

    window.navigator.clipboard.writeText(password)

  },[password])
   
  useEffect(() => {
      passwordGenreter()
  },[length, numberAllowed, charAllowed, passwordGenreter] )


  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center'>Password Generator </h1>
       <div className='className = " w-90  flex shadow rounded-lg overflow-hidden mb-4"'>
        <input 
        type="text" 
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder="password"
        readOnly
        ref={passwordRef}
        
        />
        <button 
        onClick={copytoclipbord}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>

       </div>
       <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setlength(e.target.value)}}
           />
           <label htmlFor="">Lenght: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked = {numberAllowed}
          id="numberInput"
          onChange={() =>{
            setNumberAllowed((prev) => !prev)
          }}
          />
            <label htmlFor="numberInput">Number</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked = {charAllowed}
          id="characterInput"
          onChange={() =>{
            setCharAllowed((prev) => !prev)
          }}
          />
            <label htmlFor="characterInput">Character</label>
        </div>
       </div>

     </div>
    </>
  )
}

export default App
