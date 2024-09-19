import React from "react";

function New(){
    let [set,setColor]=useState("light");
    function setTheme(){
        setColor((prevColor)=>(prevColor==="light"?"dark":"light"));

    }
return(
    <>
    <div style={{backgroundColor:set==="light" }}>
    <button type="text" value={set} onClick={()=>setTheme()}>ToggleTheme</button>
    </div>
    </>
);
}
export default New;