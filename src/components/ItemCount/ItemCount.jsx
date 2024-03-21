import { disableNetwork } from "firebase/firestore"
import { useState } from "react"

const ItemCount = ({stock, handleOnAdd}) => {

    const [quantity, setQuantity] = useState(1)
    const [display, setDisplay] = useState('')

    const increment = () => {
        if (quantity < stock ){
            return setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            return setQuantity(quantity - 1)
        }
    }

    return (
        <>
            <div className="flex flex-row">
                <button className='hover:bg-lime-800 text-white bg-lime-600 rounded' onClick={decrement}>
                    <svg className="w-[30px] h-[30px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14"/>
                    </svg>
                </button>
                <p className='font-semibold px-3'>{quantity}</p>
                <button className='hover:bg-lime-800 text-white bg-lime-600 rounded' onClick={increment}>
                    <svg className="w-[30px] h-[30px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5"/>
                    </svg>
                </button>
                </div>
                <button className='text-lime-600 hover:text-white bg-white hover:bg-lime-700 border border-lime-600 focus:ring-4 focus:outline-none focus:ring-lime-500 font-medium rounded-lg text-m px-5 py-2.5 text-center my-3' onClick={() => handleOnAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
                </>
    )
}

export default ItemCount
