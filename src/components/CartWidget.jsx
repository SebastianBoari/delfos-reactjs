import React from 'react';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    <figure id='cartWidget'> 
        <Link to={'/cart'}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14Zm2 158a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2ZM174 88a46 46 0 0 1-92 0a6 6 0 0 1 12 0a34 34 0 0 0 68 0a6 6 0 0 1 12 0Z"/></svg></Link>
    </figure>
  )
}

export default CartWidget