import React from "react";

function Prescription(){



    return(
        <>
        <div>
            <form>
                <label for="abc">Name</label>
                <input type="text" id="abc"/>
                <label for="aa" >MObile No</label>
                <input type="text" id="aa"></input>
                <label for="bb">Description</label>
<textarea id="bb" rows="4" cols="50"/>
<button type="button">Submit</button>
            </form>


        </div>
        </>
    )
}

export default Prescription;