import cart from './assets/cart.png'

const CartWidget = () => {
    return (
        <div className='flex justify-center'>
            <img src={cart} alt='cart-widget'/>
            <p className='text-sm'>0</p>
        </div>
    )
}

export default CartWidget