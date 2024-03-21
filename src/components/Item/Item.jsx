import { Link } from "react-router-dom"

const Item = ({id, name, price, thumbnail}) => {
    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <Link to={`/productos/${id}`}>
                <img className="p-8 rounded-t-lg" src={thumbnail} alt={name}/>
            </Link>
            <div className="px-5 pb-5">
                <Link to={`/productos/${id}`}>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900">{name}</h5>
                </Link>
                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">${price}</span>
                    <Link to={`/productos/${id}`} className="text-white bg-lime-600 hover:bg-lime-700 focus:ring-2 focus:outline-none focus:ring-lime-500 font-medium rounded-lg text-m px-5 py-2.5 text-center">Ver más</Link>
                </div>
            </div>
        </div>
    )
}

export default Item