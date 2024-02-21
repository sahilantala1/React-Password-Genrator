import { useCallback, useState,useEffect,useRef } from 'react'
function App() {
  const [length, setLength] = useState(8)
  const [NumberAllowed, setNumberAllowed] = useState(false)
  const [CharAllowed, setCharAllowed] = useState(false)
  const [password, setpassword] = useState("")
  //Password
  const passwordRef = use
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (NumberAllowed) str += "0123456789"
    if (CharAllowed) str += "!@$#%^&*"

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setpassword(pass)

  }, [length, NumberAllowed, CharAllowed, setpassword])

  useEffect(()=>{
    passwordGenerator()
  },[length,NumberAllowed,CharAllowed,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 pb-2 text-orange-500 bg-slate-500 text-center' >
        <h1 className='text-white'>Password Genrator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type='text' value={password} className='outline-none w-full py-1 px-3' placeholder="PassWord" readOnly ></input>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5' >Copy</button>
        </div>
        <div className='flex text-sm- gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type='range' min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{
              setLength(e.target.value)
            }}></input>
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={NumberAllowed} id='numberinput' onChange={()=>{
              setNumberAllowed((prev)=>!prev);
            }}></input>
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={CharAllowed} id='charinput' onChange={()=>{
              setCharAllowed((prev)=>!prev);
            }}></input>
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
