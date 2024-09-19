import React, { useEffect, useState } from "react";
function Stop() {
  const [count, setCount] = useState(0);
  const [button, setButton] = useState(false);
  const [reset,setReset]=useState(true);
  const [btn,setresetbtn]=useState(0);
  


  const displayCount = () => {
    setCount(count + 1);
  };

  function startButton() {
    setButton(true);
  }

  function resetButton(){
    clearInterval(displayCount);
    // setReset(true);
    setButton(false);
    // setCount(0);
    
  }
  

  function pauseButton(){
    // clearInterval(displayCount(0));
  }
  

  useEffect(() => {
    setInterval(displayCount, 1000);
    
  }, [count]);

  return (
    <>
      {button ? <h1>{count}</h1> :<h1>0</h1> }

      <button type="submit" onClick={() => startButton()}>
        Start
      </button>

{/* {reset?count:""} */}
      <button type="button" onClick={()=>resetButton()}>
        RESET
        </button>
        <button type="button" onClick={()=>pauseButton()}>
       PAUSE
        </button>
    </>
  );
}
export default Stop;
