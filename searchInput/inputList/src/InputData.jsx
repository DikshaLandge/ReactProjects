import React, { useState } from "react";

function InputData() {
    let [displayText,setDisplayText]=useState([]);
  const randomData = [
      {
        name: 'Diksha',
        age: 29
      },
      {
        name: 'Poonam',
        age: 29
      },
      {
        name: 'Neha',
        age: 29
      },
      {
        name: 'Mayuri',
        age: 29
      },
      {
        name: 'Dhanshree',
        age: 29
      },

    ];
    function displayData(){
      setDisplayText(newArr);
    }
    {
        let newArr=randomData.map((ele, index) => (
            <div key={index}>
        <span>{ele.name}</span>
        <span>{ele.age}</span>
        </div>
    ));
}

  return (
    <>
    {newArr}
   
      {/* <input type="text" onChange={()=>displayData()} />
      <button type="text">search</button> */}
    </>
  );
}
export default InputData;






