import React, { useEffect, useState } from "react";
import "../src/Captcha.css";
// import './App.css'

function Captcha() {
  let [captcha, setCaptcha] = useState("Click on Generate Button");
  let [check,setCheck]=useState("");
  let[display,setDisplay]=useState("");

  let str =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*";
  let arr = str.split("");
  console.log(arr);
 
  let new_Arr = [];
let store_val;
let store_val2;
  function GenerateCaptcha() {
    for (let i = 0; i < 5; i++) {
      let r = Math.random();
      console.log(r);
      store_val = Math.ceil(r * 70);
      store_val2 = Math.floor(r * 70);
      
       console.log(store_val);
       console.log(store_val2);
      new_Arr.push(arr[store_val]);
    }

    // console.log(new_Arr);
    let cap = new_Arr.join("");
    console.log(cap);
    setCaptcha(cap);
  }

//   useEffect(() => {
//     GenerateCaptcha();
//   }, []);

function checkCaptcha(event){

  setCheck(event.target.value);
}
// console.log(check);

function showMessage(){
  setDisplay((captcha==check)?window.alert("Successfully Login"):window.alert("login failed"));
}
  

  return (
    <div>
    
      <div class="background">
        <div class="bg">
          <div class="fields">
            <input type="text" value={captcha} class="input_field"  placeholder="Click on Generate button" readOnly />

            <button
           
              type="button"
              class="G_button"
              onClick={() => GenerateCaptcha()}
            >
              Generate
            </button>
            <input
              type="text"
              class="submit_field"
              value={check}
              placeholder="Enter Above Captcha"
              onChange={(event)=>checkCaptcha(event)}
            />
            <button type="submit" class="submit_button" onClick={()=>showMessage()}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Captcha;
