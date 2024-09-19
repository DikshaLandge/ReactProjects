// Exercise 10: Dynamic Class Name Based on State
// Objective: Toggle a CSS class based on component state.
// * Initial State: false
// * UI Elements: A div with some text and a button that says "Toggle Highlight".
// * Interaction: Clicking the button toggles a state that adds/removes a CSS class (e.g., a background color) to the div.


import React, { useState } from "react";
// import "./DynamicClass.css"; // Assuming you have a CSS file for styling

function DynamicClass() {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const toggleHighlight = () => {
    setIsHighlighted((prev) => !prev);
  };

  return (
    <>
      <div className={isHighlighted ? "highlighted" : ""}>
        Some text in the div
      </div>
      <button type="button" onClick={toggleHighlight}>
        Toggle Highlight
      </button>
    </>
  );
}

export default DynamicClass;















// function DynamicClass(){

//     return(
//         <>
//         </>
//     )
// }
// export default DynamicClass;