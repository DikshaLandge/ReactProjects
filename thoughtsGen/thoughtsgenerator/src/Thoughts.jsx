import React from "react";
import { useReducer } from "react";



let initialvalue = 0;
// console.log(initialvalue);



function reducerMethod(state, action) {
    if (action.type == 'FWD') {
        return state + 1;
    }
    else if(action.type=='BCK'){
        return state-1;
    }
    return state;
}


function Thoughts() {




    let quotes = [{ quote: "Old is Gold" },
    { quote: "Life is short; make it sweet" },
    { quote: "Cherish the little things" },
    { quote: "Happiness is homemade" }]


    

    const [state, dispatch] = useReducer(reducerMethod, initialvalue);
    

    return (
        <>
            {/* <h4>Thoughts Generator</h4> */}
            <div>

                <div>{(state>=0 && state<quotes.length) ? quotes[state].quote:quotes[0].quote}</div>


            </div>
            <div>
                
                <button onClick={() => dispatch({ type: "FWD" })}>Go</button> 
                <br></br>
                <button onClick={()=>dispatch({type:"BCK"})}>Back</button>
            </div>
        </>
    )
}








export default Thoughts;