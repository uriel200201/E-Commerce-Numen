import React from 'react'


const Product = ({info, addToCart}) => {

  let {id, name, price} = info;

  
  return (
    <div className="w-[300px]">
        <h3>{name}</h3>
        <p>${price}</p>
        <button onClick={() => addToCart(id)}>Agregar al cart</button>
    </div>
  )
}

export default Product