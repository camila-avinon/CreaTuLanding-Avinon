import React from 'react'

const ItemDetail = ({id, name, price, description, category, stock}) => {
  return (
    <div>
        <h2>{name}</h2>
        <p>${price}</p>
        <p>{description}</p>
        <p>{category}</p>
        <p>{stock}</p>
    </div>
  )
}

export default ItemDetail