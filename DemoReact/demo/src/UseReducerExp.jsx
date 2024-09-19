import React from "react";
import { useReducer } from "react";

let initialValue=0;

function reducerMethod(state, action){
    console.log(action);

    if(action.type=='INCREMENT'){
       
        return state+1;
    }
    else if(action.type=='DECREMENT'){
        return state-1;

    }
return state;

}

function UseReducerExp(){


    const [state, dispatch] = useReducer(reducerMethod, initialValue)

    

    return(
     <>
<div>
    <h1>{state}</h1>

    <button type="submit" onClick={()=>dispatch({type:'INCREMENT'})}>Click Me</button>
    <button type="submit" onClick={()=>dispatch({type:'DECREMENT'})}>Click Me</button>
</div>
    </>
    )
}
export default UseReducerExp;