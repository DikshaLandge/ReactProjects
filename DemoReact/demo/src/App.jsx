import React, { useState } from 'react'
import Comp1 from './Comp1'
import { UserContext } from './store'
import UseReducerExp from './UseReducerExp'

function App() {
let [user,setUser]=useState('abc')

  return (
    <>
     {/* <UserContext.Provider value={user}>
    <Comp1/>
    </UserContext.Provider>
     */}

     <UseReducerExp/>
    </>
  )
}

export default App
