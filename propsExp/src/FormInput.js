// Exercise 3: Form Input
// Objective: Create a form with a single input field that updates a state variable on every keystroke.
// * Initial State: An empty string
// * UI Elements: A text input field.
// * Interaction: As the user types in the input field, update the state to reflect the current input value.




import React, { useState } from 'react';

function FormInput (){
 
  const [inputValue, setInputValue] = useState('');
  function handleInput(event) 
  {
    setInputValue(event.target.value);
  };

  return (
    <div>
      
      <input type="text" value={inputValue}  onChange={handleInput} placeholder="Type here" />

      <p>Current Input Value: {inputValue}</p>
    </div>
  );
};

export default FormInput;

