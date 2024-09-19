// Exercise 2: Toggle Visibility
// Objective: Create a component that toggles the visibility of a piece of text when a button is clicked.
// * Initial State: true (text is visible)
// * UI Elements: A piece of text ("Hello, World!") and a button ("Toggle Visibility").
// * Interaction: Each click on the button toggles the visibility of the text.


import React, { useState } from "react";

function ToggleExp2() {
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  function handleInputChange  (event) {
    setText(event.target.value);
  };

 function handleButtonClick (){
    setIsVisible(false);
  };

  return (
    <>
      <form>
        <label>Input:</label>
        <input type="text" onChange={handleInputChange} />
        <br />
        <button type="button" onClick={handleButtonClick}>
          Click
        </button>
      </form>

      {isVisible && <div>{text}</div>}
    </>
  );
}

export default ToggleExp2;




























// import React, { useState } from "react";

// function ToggleExp2(){
//     let [text,setText] = useState( );
//     let [btn,setBtn] = useState( false);

//     function eventExp(event){
//         setText(event.target.value);
//     }

//         function btnText()
//         {
//             setBtn(true);
//         }
//     return(

// <>
// <form>
// <label >Input:</label>
// <input type="text" onChange={()=>ToggleExp2}/><br/>
// <button type="submit"  onClick={()=>btnText}>Click</button>

// </form>
// {
// (btn===true)? <div>{setText}</div> :" "
// }

// </>
//     );

// }
// export default  ToggleExp2;
