import React from "react";
import useFetch from "./useFetch";

function DataApi(){
    let[info]=useFetch("https://dummyjson.com/products")
    console.log(info);

    return(<>
    
    
    </>
    )
}
export default DataApi;