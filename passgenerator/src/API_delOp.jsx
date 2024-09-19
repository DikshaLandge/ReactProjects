import React, { useEffect, useReducer, useState } from "react";

const initialValue = [];

function reducer(state, action) {
console.log("state",state);
console.log("action",action);
if(action.type=="DELETE"){
    state=action.payload.arr.splice(action.payload.id,1);
    return state;
}
return state;
}
function API_delOp() {
  let [check, setCheck] = useState([]);
  const [data1, dispatch] = useReducer(reducer, check);
  async function showData() {
    let res = await fetch("https://dummyjson.com/products");
    let data = await res.json();
    console.log(data.products);
    setCheck(data.products);
  }
  
  useEffect(() => {
    showData();
  }, []);

  

  return (
    <>
      <div>
        {
        check.map((ele,id) => {
          return (
            <>
              <div key={id}>
                <h3>{ele.title}</h3>
                <button type="button" onClick={()=>dispatch({type:"DELETE",payload:{id:id,arr:check,setCheck:setCheck}})}>Delete</button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
export default API_delOp;
42;
