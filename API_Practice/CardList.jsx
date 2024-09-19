// CardList.js

import React, { useState, useEffect } from 'react';
import Cards from '../API_Practice/Cards';

const CardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setCards(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {cards.map(ele => (
        <Cards key={ele.id} card={ele} />
      ))}
    </div>
  );
};

export default CardList;
