import React, { useEffect, useState } from "react";
import CardDescription from "./CardDescription";

function CardComponent(){
let [set,setText]=useState([]);

let [checkStatus, setStatus]=useState(false);
let [info,setInfo]=useState({})
async function setCard(){
  let res=await fetch("https://fakestoreapi.com/products");
  // console.log(res);
  let data=await res.json();
  setText(data);
}

useEffect(()=>{
  setCard();
})

// let info;
function onclick_handler(demo){
// console.log(demo);

// info=demo;
// console.log(info);


setStatus(true);
setInfo(demo);

}

  return(
  <>
<div>
  {
    set.map((ele)=>{
      return(
        <div key={ele.id}>
        
        {/* <h1>{ele.id}</h1> */}
        <h1>{ele.title}</h1>
        <p>{ele.price}</p>
       <button type="button" onClick={()=>onclick_handler(ele)}>View</button>
        
        </div>
      )
    })
  }

  <h1>lkla;;slk;lk</h1>
</div>
{(checkStatus==true)?<CardDescription element= {info} />:""
}
  </>
  )
}
export default CardComponent;