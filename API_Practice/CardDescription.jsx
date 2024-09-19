import React from 'react';
import { memo } from 'react';

function CardDescription(props){

    // console.log(props.element);
    console.log(props);
    return(
        <>
         {/* <h1>{props.element}</h1> */}
        <h1>{props.element.title}</h1>
        </>
    )
}
export default memo(CardDescription);
