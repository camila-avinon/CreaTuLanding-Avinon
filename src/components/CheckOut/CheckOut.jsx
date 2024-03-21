import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { addDoc, collection, serverTimestamp, query, where, getDoc } from 'firebase/firestore'
import { db } from '../../config/firebaseConfig'

const CheckOut = () => {

    const {cart, total, clearCart} = useContext(CartContext)
    const [order, setOrder] = useState(null)

    const [formCheckout, setFormCheckout] = useState({
        name: "",
        surname: "",
        email: "",
        phone: 0
    })

    const handleName = (e) =>{
        setFormCheckout({
            ...formCheckout,
            name: e.target.value
        })
    }

    const handleSurname = (e) =>{
        setFormCheckout({
            ...formCheckout,
            surname: e.target.value
        })
    }

    const handleEmail = (e) =>{
        setFormCheckout({
            ...formCheckout,
            email: e.target.value
        })
    }

    const handlePhone = (e) =>{
        setFormCheckout({
            ...formCheckout,
            phone: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newOrder = {
            buyer: formCheckout,
            items: cart,
            total,
            date: serverTimestamp()
        }

        

        const order = await addDoc(collection(db, 'orders'), newOrder)
        
        newOrder.id = order.id
setOrder(newOrder)
        clearCart()
        setFormCheckout({
            name: "",
            surname: "",
            email: "",
            phone: 0
        })
    }

    if (order){
        return (
            <div className='text-center m-8 text-2xl'>
                <h3 className='font-semibold'>¡Tu órden se realizó con éxito!</h3>
                <p>Tu código de seguimiento es <span className="text-lime-600">{order.id}</span></p>
                <div className="border-t border-lime-200 m-8">
                <h4 className='font-medium'>Detalle de la compra</h4>
                <p>Total: ${order.total}</p>
                <p>Productos:</p>
                {order.items.map(item => <p key={item.id} className='text-lime-600'>{item.name}</p>)}
                </div>
            </div>

        )
    }
    

    return (
        <form onSubmit={handleSubmit} className='m-3'>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Nombre</label>
                    <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Jorge" required value={formCheckout.name} onChange={handleName}/>
                </div>
                <div>
                    <label htmlFor="surname" className="block mb-2 text-sm font-medium text-gray-900">Apellido</label>
                    <input type="text" id="surname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Gonzalez" required value={formCheckout.surname} onChange={handleSurname}/>
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Correo electrónico</label>
                    <input type="mail" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" placeholder="jorge@mail.com" required value={formCheckout.email} onChange={handleEmail}/>
                </div>  
                <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Teléfono</label>
                    <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" placeholder="12-3456-6789" required value={formCheckout.phone} onChange={handlePhone}/>
                </div>
            </div>
            <div className="flex justify-end my-2">
                <button type="submit" className="text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800">Finalizar compra</button>
            </div>
        </form>
    )
}

export default CheckOut