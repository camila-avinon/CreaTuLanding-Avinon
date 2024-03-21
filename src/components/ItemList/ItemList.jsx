import {Item} from "../index"

const ItemList = ({products}) => {
    if (!products) {
        return(<p>Obteniendo datos...</p>)
    } else {
        return (
            <div className="grid grid-cols-4 gap-8 p-4">
                {products.map((product) => <Item key={product.id} {...product}/>)}
            </div>
        )
    }    
}

export default ItemList