import React, { useState } from "react";
import Propp3 from "./Propp3";

function Propp2(props){
    console.log(props);
    props.value.A=4;
    props.value.c=8;
    return(
        <>
        <h1>{props.value.A}</h1>
        <h1>{props.value.C}</h1>
        <button type="button" onClick={()=>(props.value.B(3))}>Click me</button>
        <Propp3 />
        </>
    )
}

export default Propp2;