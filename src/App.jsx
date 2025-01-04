import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BaseApp from './BaseApp'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BaseApp/> 
    </>
  )
}

export default App
