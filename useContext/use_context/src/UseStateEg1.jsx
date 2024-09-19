import React, { useState } from "react";

function UseStateEg1()
{
    let [count,setCount]=useState(0);

    function inc()
    {
         setCount(count+1);
        
    }
    function dec()
    {
        setCount(count-1);
    }


    return(
        <>
       <h4> Count:{count}</h4>
            <button onClick={()=>inc()}>inc</button><br></br>
            <button onClick={()=>dec()}>dec</button>

        </>
    )
}

export default UseStateEg1;