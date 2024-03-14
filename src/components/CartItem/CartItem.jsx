import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartItem = (item) => {
    const {removeItem} = useContext(CartContext)

  return (
    <div className='w-100 border-b border-lime-200 flex justify-between'>
        <p>{item.name}</p>
        <p>Precio: ${item.price}</p>
        <p>Cantidad: {item.quantity}</p>
        <p>Subtotal: ${item.subtotal}</p>
        <button onClick={() => removeItem(item.id)} className='fs-sm p-2 rounded hover:bg-red-600 hover:text-white border border-red-600 text-red-600'>Eliminar producto</button>
    </div>
  )
}

export default CartItem