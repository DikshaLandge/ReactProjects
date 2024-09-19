// Exercise 6: Counter with Custom Step
// Objective: Extend the simple counter component to increase by a custom step from an input field.
// * Initial State: Counter 0, Step 1
// * UI Elements: Display the current count, an input field to specify the step, and a button to increment.
// * Interaction: The counter increases by the step value each time the button is clicked.




import React, { useState } from 'react';

function CustomCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handleStepChange (event) {
    const newStep = parseInt(event.target.value, 10);
    setStep(isNaN(newStep) ? 1 : newStep);
  };

 function incrementCounter(){
    setCount((prevCount) => prevCount + step);
  };

  return (
    <>
      <p>Current Count: {count}</p>
      <label>
        Step:
        <input type="number" value={step} onChange={handleStepChange} />
      </label>
      <button type="button" onClick={incrementCounter}>
        Increment
      </button>
    </>
  );
}

export default CustomCounter;






