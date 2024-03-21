import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { CartItem } from '../index'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const Cart = () => {
    const {cart, clearCart, total} = useContext(CartContext)

    const handleClear = () => {
        
        Swal.fire({
            icon: "warning",
            iconColor: "#DC26260",
            title: `¿Estás seguro que queres vaciar el carrito?`,
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonColor: "#DC2626",
            confirmButtonText: "Vaciar",
            cancelButtonText: "Atrás"
        }). then( res => {
        if(res.isConfirmed) {
            clearCart()
            Swal.fire({
                icon:"success",
                confirmButtonColor: "#83e619",
                confirmButtonText: "Cerrar",
                title: "Carrito vaciado correctamente"
            })
        }
    })
    }

    return (
        <>
            { cart.length == 0 
                ?   <div className='m-2'>
                        <h2 className='text-2xl text-lime-600 my-3'>Tu carrito está vacío</h2>
                        <Link to={'/'} className="text-white bg-lime-600 hover:bg-lime-700 focus:ring-2 focus:outline-none focus:ring-lime-500 font-medium rounded-lg text-m px-5 py-2.5 text-center ">Ver productos</Link>
                    </div>
                :   <>
                        <h2>Mi carrito</h2>
                        <div className="m-4">
                            {cart.map((cart) => <CartItem key={cart.id} {...cart}/>)}
                        </div>
                        <div className="flex justify-between m-4">
                            <h4>Precio final: ${total}</h4>
                            <button onClick={handleClear} className='fs-sm p-2 rounded hover:bg-red-600 hover:text-white border border-red-600 text-red-600'>Vaciar carrito</button>
                        </div>
                        <div className="flex justify-end">
                            <Link to="/checkout" className="text-white bg-lime-600 hover:bg-lime-700 focus:ring-2 focus:outline-none focus:ring-lime-500 font-medium rounded-lg text-m px-5 py-2.5 text-center m-2">Finalizar compra</Link>
                        </div>
                    </>
            }
        </>
    )
}

export default Cart