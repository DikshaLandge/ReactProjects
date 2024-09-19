// Exercise 1: Counter Component
// Objective: Create a simple counter component that increments by 1 each time a button is clicked.
// * Initial State: 0
// * UI Elements: Display the current count and a button to increment the count.
// * Interaction: Each click on the button increases the counter by 1.




import React, { useState } from "react";
import CounterUpdate1 from "./CounterUpdate1";

function CounterExp1(){
  
    let [cnt ,setState]= useState(0);
    function setCounter(){
        setState(cnt+1);
    }
    console.log(cnt);
    



    return(

        <>
        <CounterUpdate1 value={cnt}/>
        <button  onClick={()=>setCounter()}>Click me</button>
    

        </>
    );








}

export default CounterExp1;