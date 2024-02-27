import { Link } from "react-router-dom"

const Item = ({id, name, price, image}) => {
    return (       
//     <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
//     <Link to={`/productos/${id}`}>
//         <img className="rounded-t-lg" src={image} alt={name} />
//     </Link>
//     <div className="p-5">
//         <a href="#">
//             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{name}</h5>
//         </a>
//         <p className="mb-3 font-normal text-gray-700">${price}</p>
//         <Link to={`/productos/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
//             Ver más
//             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
//             </svg>
//         </Link>
//     </div>
// </div>


<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
    <Link to={`/productos/${id}`}>
        <img className="p-8 rounded-t-lg" src={image} alt={name}/>
    </Link>
    <div className="px-5 pb-5">
        <Link to={`/productos/${id}`}>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900">{name}</h5>
        </Link>
        <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900">${price}</span>
            <Link to={`/productos/${id}`} className="text-white bg-lime-600 hover:bg-lime-700 focus:ring-4 focus:outline-none focus:ring-lime-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Ver más</Link>
        </div>
    </div>
</div>

    )
}

export default Item