// Exercise 9: Character Count Limit for Textarea
// Objective: Create a textarea with a character count limit and display how many characters the user has left.
// * Initial State: An empty string for the textarea value, a maximum character limit (e.g., 100).
// * UI Elements: A textarea and a display showing remaining characters.
// * Interaction: As the user types, update the display to show the number of characters left. Prevent input after reaching the limit.

import React, { useState } from "react";

function CharCount() {
  const [text, setText] = useState("");
  const maxCharLimit = 100;

  const handleTextChange = (event) => {
    const newText = event.target.value;

    if (newText.length <= maxCharLimit) {
      setText(newText);
    }
  };

  return (
    <>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Type something..."
      />
      <div>
        Characters Left: {maxCharLimit - text.length}/{maxCharLimit}
      </div>
    </>
  );
}

export default CharCount;












// import React from "react";

// function CharCount(){
//     return(
//         <>
//         </>
//     )

// }export default CharCount;