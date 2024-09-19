import React, { useState, useEffect } from "react";

function API_PR() {
  let [show, setShow] = useState([]);

  async function showData() {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    // console.log(res);
    setShow(data);
  }
  useEffect(() => {
    showData();
  }, []);

  return (
    <>
      <div>
        
        {
        show.map((ele) => {
          return (
            <>
              <div key={ele.id}>
                <h1>{ele.title}</h1>
                <p>{ele.price}</p>
                {/* <button type="button" onClick={()=>onclick_handler(ele)}>View</button>  */}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
export default API_PR;
