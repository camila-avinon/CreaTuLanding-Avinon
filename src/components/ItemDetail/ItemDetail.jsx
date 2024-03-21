import {useContext, useState} from 'react'
import { CartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

const ItemDetail = ({id, name, price, description, thumbnail, category, stock}) => {
  const {addItem} = useContext(CartContext)
  const [quantityAdded, setQuantityAdded] = useState(0)

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)
    const item = {
      id, name, price
    }
    addItem(item, quantity)
    Swal.fire({
      icon: "success",
      iconColor: "#83e619",
      allowEscapeKey: true,
      allowEnterKey: true,
      confirmButtonColor: "#83e619",
      title: "Agregado al carrito"
    })
  }

    return (
      <div className='flex items-center justify-center p-0 my-2'>
        <div className="flex flex-col justify-center items-center bg-white md:flex-row w-full">
            <img className="h-96 w-auto shadow-md rounded-md" src={thumbnail} alt={name}></img>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <span className="bg-lime-200 text-lime-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">{category.toUpperCase()}</span>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-lime-600">{name}</h5>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">${price}</span>
                </div>
                <p className="mb-2 font-normal text-gray-700">{description}</p>
                {
                  (stock > 0)
                  ? <p className="mb-2 text-xs text-gray-700">Stock: {stock}</p>
                  : <p className="mb-2 text-xs text-red-700">Producto sin stock</p>
                }
                
                {
                  (quantityAdded > 0)
                  ? <Link className='text-white bg-lime-600 hover:bg-lime-700 font-medium rounded-lg text-m px-5 py-2.5 text-center my-3' to='/carrito'>Terminar compra</Link>
                  : <ItemCount stock={stock} handleOnAdd={handleOnAdd}/>
                }
            </div>
        </div>
      </div>
    )
}

export default ItemDetail