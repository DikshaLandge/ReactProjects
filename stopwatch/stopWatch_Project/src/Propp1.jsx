import React, { useState } from "react";
import Propp2 from "./Propp2";

function Propp(){

const[x,setX]=useState(0);

// function  setInfo(){
//     setX(x+1);
// }


    return(

        <>
        <Propp2 value={{A:x,B:setX,C:3}}/> 
        {/* <button type="button" onClick={()=>setInfo()}>INC */}
    {/* </button> */}
    </>
    )
}
export default Propp;