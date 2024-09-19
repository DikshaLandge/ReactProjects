// Card.js

import React from 'react';
import { Link } from 'react-router-dom';

const Cards = (props ) => {
  console.log(props)
  let data=props.card.description;
  let str=data.split(" ");
  let words=str.splice(0,15);
  
  let some=words.join(" ");
  // console.log(words);
  return (
    <div className="border rounded-md p-4 m-2">
        <img src={props.card.image} alt="imagees" className="w-[150px] h-[150px] " />
      <h2 className="text-xl font-bold">{props.card.name}</h2>
      <p className=''>{some}</p>

      <Link to="/description">Click</Link>
  
    </div>
  );
};

export default Cards;
