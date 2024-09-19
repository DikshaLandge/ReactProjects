import React ,{useContext}from "react";
import { UserContext } from "./store";
function Comp4(){

    let getData=useContext(UserContext);
    return(
        <>
    
        <div>{getData}Component4</div>
        
        </>
    )
}

export default Comp4;