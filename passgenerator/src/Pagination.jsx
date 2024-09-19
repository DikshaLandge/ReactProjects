import React, { useEffect, useState } from "react";

function Pagination()
{
    let [statee,setState]=useState([]);

   async function fetch_api()
    {
         const api= await fetch("https://dummyjson.com/recipes");
         const response=await api.json();
          setState(response.recipes);
        //   console.log(response);
    }

    console.log(statee);

    // function handleClick()
    // {
    //     for(let i=1;i<=30;i++)
    //         {
    //             if()
    //         }
    // }
    useEffect(()=>{
        fetch_api();
    },[])
    return(
        <>
      <div>
        {
             statee.map((ele, id) => {
                return (
                  <>
                  <h1>{ele.id}</h1>
                  <h3>{ele.name}</h3>
                  </>
                )}
            )
                  }      </div>







          

            {/* //     return(
            //         <>
            //         <div key={id}>
            //         <h3>{ele.id}</h3>
            //         <h1>{ele.name}</h1>
            //         </div>
            //         </>
            //     )
            // })
        } */}
                {/* <button onClick={()=>fetch_api()}>CLICK1</button>
                <button onClick>CLICK5</button>
                <button onClick>CLICK5</button>
                <button onClick>CLICK5</button>
                <button onClick>CLICK5</button>
                <button onClick>CLICK5</button>
 */}


        
        
        </>
    )
}
export default Pagination;