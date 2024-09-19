import { useState } from "react";
// import React from "./react";

function LogInOut()
{
let [text ,updateText]=useState("Login");
function updateTxt(){
    if(text==="Login")
    {
        updateText("Log Out")
    }
    else{
        updateText("Login")
}}

return(
<>
    
        <button type="button" onClick={()=>updateTxt()}>{text }</button>
        
        </>
);
}
export default LogInOut;