import React from 'react'

const ItemDetail = ({id, name, price, description, image, category, stock}) => {
  if (!name) {
    return(
      <div class="p-4 mb-4 text-sm text-lime-800 rounded-lg bg-lime-100" role="alert">
  <span class="font-medium">Obteniendo datos del servidor</span>
</div>
      )
  } else {
    return (
      <div className='flex items-center justify-center w-screen p-0 my-2'>
        <div className="flex flex-col justify-center items-center bg-white md:flex-row">
            <img className="w-auto h-96" src={image} alt={name}></img>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <span class="bg-lime-200 text-lime-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">{category}</span>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-lime-600">{name}</h5>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">${price}</span>
                </div>
                <p className="mb-3 font-normal text-gray-700">{description}</p>
            </div>
        </div>
      </div>
    )
  }
}

export default ItemDetail