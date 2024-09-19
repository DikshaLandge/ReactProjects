import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "./Del_Slice";

function Handle_API() {
  let [apii, setApi] = useState([]);
//   let dd;
const dispatch = useDispatch();
  const info = useSelector((state) => state.deletedData.input);

  async function handleData() {
    let res = await fetch("https://dummyjson.com/products");
    let data = await res.json();
    console.log(data.products);
    setApi(data.products);
  }
  useEffect(() => {
    handleData();
  }, []);

  // handleData();
  console.log(apii);

  console.log(info);



  return (
    <>
      <div>
        {
    apii.map((ele, id) => {
          return (
            <>
              <div key={id}>
                <h1>{ele.title}</h1>
                <button type="button" onClick={() => dispatch(deleteTask({id:id,arr:apii}))}>
                  DELETE
                </button>
              </div>
            </>
          );
        })
        
        }
      </div>
      {/* console.log(dd); */}

      {/* <button type="button" onClick={() => handleData()}>
          DELETE
        </button> */}
    </>
  );
}
export default Handle_API;
