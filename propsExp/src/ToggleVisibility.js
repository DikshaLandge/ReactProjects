// Exercise 2: Toggle Visibility
// Objective: Create a component that toggles the visibility of a piece of text when a button is clicked.
// * Initial State: true (text is visible)
// * UI Elements: A piece of text ("Hello, World!") and a button ("Toggle Visibility").
// * Interaction: Each click on the button toggles the visibility of the text.

import React, { useState } from "react";


function ToggleVisibility(){
    let [set,setText]=useState(true);
    
    function setToggle()
    {
        if(set==false)
        {
            setText(true);
        }
        else{
            setText(false);
        }

    }
    return(
<>
<button type="text" onClick={()=>setToggle()}> click Me</button>
{
    (set?(<div>Hello World</div>):(<div></div>))
}
</>
    );

}
export default ToggleVisibility();