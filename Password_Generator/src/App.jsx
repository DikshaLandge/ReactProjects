import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import API_PR from './API_PR'
import Password_Gen from '../src/assets/Password_Gen'
import Handle_API from './Handle_API'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <API_PR/> */}
      <Password_Gen/>
      {/* <Handle_API/> */}

    </>
  )
}

export default App
