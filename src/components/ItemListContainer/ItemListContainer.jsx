import ItemList from "../ItemList/ItemList"
import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const {categoryId} = useParams()
    console.log(categoryId)

    useEffect(() => {
        if (categoryId) {
            getProductsByCategory(categoryId)
            .then(response => {
                setProducts(response)
            }).catch(error => {
                console.error(error)
            })
        } else {
            console.log('entre')
            getProducts()
            .then(response => {
                setProducts(response)
            }).catch(error => {
                console.error(error)
            })
        }        
    }, [])

    if (products) {
        return (
            <>
                <h1 className="font-medium text-m">{greeting}</h1>
                <ItemList products={products}/>
            </>
        )
    }
}

export default ItemListContainer