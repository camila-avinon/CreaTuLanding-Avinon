import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"

const CartWidget = () => {
    const {totalItems}= useContext(CartContext)
    return (
        <div className='flex justify-center'>
            <Link to={'/carrito'}>
            <svg className="w-[30px] h-[30px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.3L19 7H7.3"/>
            </svg>
            </Link>
            <p className='text-sm'>{totalItems}</p>
        </div>
    )
}

export default CartWidget