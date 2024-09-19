import React, { useState } from "react";
import Comp3 from '../src/Comp3'

function Comp2(){
let [set,setButton]=useState('')

function setText(){

    setButton();

}
    return(
        <>
        <div>
            <button type="button" onClick={()=>setText()}>Click me</button>
        </div>
        <Comp3/>
        </>
    )
}
export default Comp2;