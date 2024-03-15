import { createContext, useEffect, useState } from "react"

export const CartContext = createContext({
    cart:[]
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [totalItems, setTotalItems] = useState(0)
    const [total, setTotal] = useState(0)

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)){
            const newItem = {
                ...item,
                quantity,
                price: item.price,
                subtotal: item.price * quantity
            }
            setCart([...cart, newItem])
        } else {
            const copy = [...cart]
            const index = copy.findIndex(product=>product.id == item.id)
            copy[index].quantity += quantity
            copy[index].subtotal += copy[index].price * quantity
            setCart(copy)
            console.log(cart)
        }
    }

    const removeItem = (id) => {
        const cartUpdated = cart.filter(product => product.id !== id)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(product => product.id === itemId)
    }

    const handleTotalItems = () => {
        const newTotalItems = cart.reduce((acumulador, item) => acumulador + item.quantity, 0 )
        setTotalItems(newTotalItems)
    }

    const handleTotal = () => {
        const newTotal = cart.reduce((acumulador, item) => acumulador + item.price * item.quantity, 0 )
        setTotal(newTotal)
    }

    useEffect( () => {
        handleTotalItems()
        handleTotal()
    }, [cart])

    return (
        <CartContext.Provider value={{cart, totalItems, total, addItem, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}