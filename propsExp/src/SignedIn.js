import React, { useState } from 'react'

function SignedIn() {
    const [signedin, setSignedin] = useState(false)

    
    function handleSignin(){
        setSignedin(true)
    }

    function handleSignout  () {
        setSignedin(false)
    }
  return (
         <div>
           { signedin ? ( 
        <div>
            <button type="button" onClick={handleSignout}>Sign Out</button>
            <p>Welcome back, good to see you in here</p>
        </div>) :
        
        (<div>
            <button type="button"onClick={handleSignin}>Sign In</button>
            <p>Please Sign in</p>
        </div>)
           }
        </div>
  )
}


export default SignedIn;