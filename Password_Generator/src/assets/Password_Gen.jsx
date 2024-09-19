import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {generate_pass} from "../Pass_Slice";

import './pass.css'

function Password_Gen(){

let [check,setCheck]=useState("");
let[count,setCount]=useState(0);

// let[temparr,settemparr]=useState([0]);

    
    const dispatch = useDispatch();
    let array2 = useSelector(function (state) {
        return state.generate.final;
        
      });
    
      function handleClick(){
        dispatch(generate_pass())

        // settemparr([array2]);
        console.log(array2);
        // setCheck(array2.join(""))

        setCheck(array2.slice(array2.length-8).join(""))

        // if(count==1){
        //     // setCheck(array2.join(""))
        //     // setCount(true);
        //     //  array2=[];
            
        //      setCount(2)
        // }
        // else{
        //     // setCheck("");
        //     setCount(1);
        // }
      

      }
      useEffect(()=>{
handleClick();
      },[])
      
      console.log(check);
    
    

    return(
        <>
        <div className="main">
            <input type="text" placeholder="click on generate button"  className="inputfield"  value={check}/>
            <button type="button" className="genbutton" onClick={()=>handleClick()}>GENERATE</button>
        </div>

        </>
    )
}
export default Password_Gen;