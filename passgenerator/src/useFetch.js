import React, { useEffect, useState } from "react";

function useFetch(url){

let [api,setApi]=useState([]);
    async function fetchApi(){

    let res= await fetch(url);
    let data =await res.json();
    console.log(data);
    setApi(data.products);  
 }

 useEffect(()=>{
    fetchApi();
 },[]);

 return [api];


}

export default useFetch;