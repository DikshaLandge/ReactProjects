import React, { useState } from "react";

function FormVal() {
  let [setU, setUname] = useState(" ");

  function setUsername(event) {
    setUname(event.target.value);
  }

  return (
    <>
      <form>
        <label>Username</label>
        <input type="text" value={setU} onChange={setUsername} /><br />
      </form>
    </>
  );
}

export default FormVal;


























// import React, { useState } from "react";

// function FormVal(){
//     let [setU, setUname]=useState(" ");

//     function setUsername(event){
//         setUname(event.target.value);

//     }



//     return(
//         <>
//         <form>
//             <label>Username</label>
//             <input type="text" value={setU} onChange={()=>setUsername()}/><br/>
//         </form>
//         </>
//     );
// }
// export default FormVal;

