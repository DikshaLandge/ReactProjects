
// Exercise 4: List Adder
// Objective: Create a component that allows users to add items to a list using an input field and a button.
// * Initial State: An empty array
// * UI Elements: A text input field and an "Add Item" button.
// * Interaction: When the user types a value into the input field and clicks the "Add Item" button, add the value to a list below the input field.



import React, { useState } from "react";

function ListAdder() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addItem = () => {
    if (inputValue.trim() !== "") {
      setItems((prevItems) => [...prevItems, inputValue]);
      setInputValue("");
    }
  };

  return (
    <>
      <form>
        <label>User:</label>
        <input type="text" value={inputValue} onChange={handleInputChange} /><br/>
        <button type="button" onClick={addItem}>Add Item</button>
      </form>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListAdder;













// function ListAdder(){
//     let [set,setText]=useState();

//      function addItems(){
//         setText();
//      }

//     return(
// <>

// <form>
// <label>User</label>
// <input type="text" onChange={()=>ListAdder()}/>
// </form>
// </>
//     );

// }
// export default ListAdder;