import React, { useState } from "react";
import LoginForm1 from "./LoginForm1"

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleUsernameChange(event){
    setUsername(event.target.value);
  };

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  };

 function handleSubmit(event) {
    event.preventDefault();
    
    if (username && password) {
      setIsSubmitted(true);

      // Optionally, you can clear the input fields after submission
    //   setUsername("");
    //   setPassword("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" value={username} onChange={handleUsernameChange} />
        <br />
        <label>Password:</label>
        <input type="text" value={password} onChange={handlePasswordChange} />
        <br />
        <button type="submit">Submit</button>
      </form>

      {isSubmitted && (
        <div>
          <p>Submitted Values:</p>
          <p>Username: {username}</p>
          <p>Password: {password}</p>
        </div>
      )}
    </>
  );
}

export default LoginForm;






// function LoginForm(){
//     let[text,setText]=useState("");
//     let [text1,setText1]=useState(" ");
//     let [text2,setText2]=useState(false);
// //   let flag=false;
//     function eventHandler(event){
//         event.preventDefault();
//         setText2(true);
       
//     }

//     function eventeg(event)
//     {
//         setText(event.target.value);
        
//     }
//     function eventeg1(event)
//     {
//         setText1(event.target.value);
//     }
    
    
// return(
//     <>
   
   
//     <form>
//         <label>Username  </label>
//             <input type="text" value={text} onChange={eventeg}></input><br/>
//             <label>Password  </label>
//             <input type="text" value={text1} onChange={eventeg1}></input><br/>
//         <button type="submit" onClick={()=>eventHandler() }>Submit</button>

//     </form>
//     {
         
//         (text2==true) ? <div>{text}   {text1}</div>: " "
//     }
    
//     {/* <div>{text}</div>
//     <div>{text1}</div> */}
    
//     </>
// )
// }
// export default LoginForm;