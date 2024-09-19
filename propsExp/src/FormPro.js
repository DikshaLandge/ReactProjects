// import React from "react";
import React, { useState } from 'react';

function FormPro() {
let [setUname,setUsername]=useState(" ");
// let [setNo,setNumber]=useState(" ");
// let [setPass,setPassword]=useState(" ");
// let [set,setP]=useState(" ");
// let [setbtn,setButton]=useState(" ");

function setName(event){
    setUsername(event.target.value);
}


    return (
        <>
              <form>
<label>Username</label>
<input type="text" value={setUname} onChange={()=>setName()} placeholder="@gmail.com"/><br/>
{/* <label>Number</label>
<input type="text" value placeholder=""/><br/>
<label>Password</label>
<input type="text" value  placeholder="@gmail.com"/><br/>
<label>Confirm Password</label>
<input type="text" value  placeholder="@gmail.com"/><br/>
<button type="submit" onClick=" ">Submit</button> */}

            </form>
        </>
    );
}
export default FormPro;