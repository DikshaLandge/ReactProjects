import React, { useState } from "react";
import UpdateBtn from "./UpdateBtn";

function BtnCount(){
let [cnt ,setState]=useState(0);

function updateState(){
// {()=>setState(cnt+1)
    setState(cnt+1);
}
console.log(cnt);

return(
    <>
    <UpdateBtn value={cnt}/>
<button  onClick={()=>updateState()}>Click me</button>

</>
);
}
export default  BtnCount;