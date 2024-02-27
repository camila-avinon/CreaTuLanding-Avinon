import { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock ){
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div>
            <div>
                <button onClick={decrement}> - </button>
            </div>
            <div>
                <h4>{quantity}</h4>
            </div>
            <div>
                <button onClick={increment}> + </button>
            </div>
        </div>
    )
}

export default ItemCount
