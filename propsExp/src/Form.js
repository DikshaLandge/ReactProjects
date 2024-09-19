import React, { useState } from "react";

function Form(){

        let [signIn, setSignin] = useState(false);
        let[text,setText]=useState("");
        let [text1,setText1]=useState(" ");
        let [mail,setMail]=useState(" ");
    
        function handleSignin(){
            setSignin(true)
        }
    
       function handleSignout(){
            setSignin(false)
        }

        function setMailId(event)
        {
            setMail(event.target.value);
            
        }
        function eventeg(event)
    {
        setText(event.target.value);
        
    }
    function eventeg1(event)
    {
        setText1(event.target.value);
    }
    
      return (
             <>
              
               { signIn ? ( 
            <div>
                <button type="button" onClick={handleSignout}>Sign Out</button>
                <p>Welcome back, good to see you in here</p>
               
           <label>Username</label>
            <input type="text" value={text} onChange={eventeg}></input><br/>
            <label>Password</label>
            <input type="text" value={text1} onChange={eventeg1}></input><br/>
            

            </div>) :
            
            (<div>
                <button type="button"onClick={handleSignin}>Sign In</button>
                
                <p>Please Enter Email Address</p>
                <label>Email</label>
            <input type="text" value={text1} onChange={setMailId}></input><br/>
            </div>)
               }
            </>
      )
    }
    
    export default Form;





































































