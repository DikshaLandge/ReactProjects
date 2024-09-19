// Exercise 3: Form Input
// Objective: Create a form with a single input field that updates a state variable on every keystroke.
// * Initial State: An empty string
// * UI Elements: A text input field.
// * Interaction: As the user types in the input field, update the state to reflect the current input value.

import React, { useState } from "react";

function InputValue(){

    let [set,setText]=useState(" ");

    function inputVal(e){
        setText(e.target.value);
        
    }

    return(
        <>
        <input type="text" value={set} onChange={(e)=>inputVal(e)} /><br/>

        text:<h1>{set}</h1>
        </>
    )
}
export default InputValue;