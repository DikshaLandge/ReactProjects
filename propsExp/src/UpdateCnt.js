import React from "react";
import { useState } from 'react';
import Btn from "./Btn";

function UpdateCnt(){
   let [cntt, setCntt]=useState(0);
   function setCount(){

      setCntt(cntt+1);
   }
   console.log(cntt);
    return(
   <>
       <Btn value={cntt}/> 
       <button onClick={()=>setCount()}>click me </button>

     </>
    );

}
export default UpdateCnt;