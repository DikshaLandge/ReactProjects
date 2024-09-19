// Exercise 7: Password Visibility Toggle
// Objective: Create a password input field with a toggle button to show/hide the password.
// * Initial State: false (password is hidden)
// * UI Elements: A password input field and a "Toggle Visibility" button.
// * Interaction: Clicking the button toggles the visibility of the password between text and obscured characters.


import React, { useState } from "react";

function PasswordVisibility() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  function toggleVisibility(){
    setPasswordVisible((prevVisibility) => !prevVisibility);
  };

  return (
    <>
      <label>
        Password:
        <input
          type={passwordVisible ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="button" onClick={toggleVisibility}>
        Toggle Visibility
      </button>
    </>
  );
}

export default PasswordVisibility;
