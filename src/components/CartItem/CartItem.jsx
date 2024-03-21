import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import Swal from 'sweetalert2'

const CartItem = (item) => {
    const {removeItem} = useContext(CartContext)

    const handleRemove = (item) => {
      Swal.fire({
        icon: "warning",
        title: `¿Estás seguro que queres eliminar ${item.name} del carrito?`,
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonColor: "#DC2626",
        confirmButtonText: "Eliminar",
        cancelButtonText: "Atrás"
      }). then( res => {
        if(res.isConfirmed) {
          removeItem(item.id)
          Swal.fire({
            icon:"success",
            confirmButtonColor: "#83e619",
            confirmButtonText: "Cerrar",
            title: "Eliminado correctamente"
          })
        }
      })
    }

  return (
    <div className='w-100 border-b border-lime-200 flex justify-between'>
        <p>{item.name}</p>
        <p>Precio: ${item.price}</p>
        <p>Cantidad: {item.quantity}</p>
        <p>Subtotal: ${item.subtotal}</p>
        <button onClick={() => handleRemove(item)} className='fs-sm p-2 rounded hover:bg-red-600 hover:text-white border border-red-600 text-red-600'>Eliminar producto</button>
    </div>
  )
}

export default CartItem