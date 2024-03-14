import {useContext, useState} from 'react'
import { CartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, name, price, description, image, category, stock}) => {
  const {addItem} = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    const item = {
      id, name, price
    }
    addItem(item, quantity)
  }

    return (
      <div className='flex items-center justify-center w-screen p-0 my-2'>
        <div className="flex flex-col justify-center items-center bg-white md:flex-row">
            {/* <img className="w-auto h-96" src={image} alt={name}></img> */}
            <div className="flex flex-col justify-between p-4 leading-normal">
                <span className="bg-lime-200 text-lime-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">{category}</span>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-lime-600">{name}</h5>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">${price}</span>
                </div>
                <p className="mb-2 font-normal text-gray-700">{description}</p>
                <p className="mb-2 text-xs text-gray-700">Stock: {stock}</p>
                <ItemCount stock={stock} handleOnAdd={handleOnAdd}/>
            </div>
        </div>
      </div>
    )
}

export default ItemDetail