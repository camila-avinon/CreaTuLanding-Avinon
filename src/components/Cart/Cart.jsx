import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { CartItem } from '../index'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {cart, clearCart, total} = useContext(CartContext)

    return (
        <>
            { cart.length == 0 
            ? <div className='m-2'>
                <h2 className='text-2xl text-lime-600 my-3'>Tu carrito está vacío</h2>
                <Link to={'/'} className="text-white bg-lime-600 hover:bg-lime-700 focus:ring-2 focus:outline-none focus:ring-lime-500 font-medium rounded-lg text-m px-5 py-2.5 text-center ">Ver productos</Link>
            </div>
            : <>
                <h2>Mi carrito</h2>
                <div className="m-4">
                    {cart.map((cart) => <CartItem key={cart.id} {...cart}/>)}
                </div>
                <div className="flex justify-between m-4">
                    <h4>Precio final: ${total}</h4>
                    <button onClick={clearCart} className='fs-sm p-2 rounded hover:bg-red-600 hover:text-white border border-red-600 text-red-600'>Vaciar carrito</button>
                </div>
                
            </>
            }
        </>
    )
}

export default Cart