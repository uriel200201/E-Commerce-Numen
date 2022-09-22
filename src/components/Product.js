import React from 'react'

const Product = ({info, addToCart}) => {
  return (
    <div onClick={addToCart} className="w-[300px]">
        <h3>{info.name}</h3>
        <p></p>
    </div>
  )
}

export default Product