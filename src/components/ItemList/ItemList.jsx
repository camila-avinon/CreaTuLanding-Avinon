import Item from "../Item/Item"

const ItemList = ({products}) => {
    if (!products) {
        return(<p>Obteniendo datos...</p>)
    } else {
        return (
            <div className="grid grid-cols-3 gap-3 p-4">
                {products.map((product) => <Item key={product.id} {...product}/>)}
            </div>
        )
    }    
}

export default ItemList