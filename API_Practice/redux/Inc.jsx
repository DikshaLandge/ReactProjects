import React from "react";
import {useDispatch} from 'react-redux'
import { increment } from "./CounterSlice";
import  {decrement} from "./CounterSlice";
import { multiply } from "./CounterSlice";
import { changeColor } from "./CounterSlice";

function Inc(){

    const dispatch = useDispatch()
    return(
        <>
        <div>
            <button type='button' onClick={()=>dispatch(increment())}> Increment</button><br/>
            <button type='button' onClick={()=>dispatch(decrement())}> Decrement</button><br/>
            <button type='button' onClick={()=>dispatch(multiply())}> Multiply</button>

            <button tpe='button' onClick={()=>dispatch(changeColor())}>changeColor</button>
        </div>
        </>
    )

}
export default Inc;