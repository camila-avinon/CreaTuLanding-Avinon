import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { LoadingContent, ItemList } from '../index'
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../config/firebaseConfig"

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const { categoryId } = useParams()
    const [isLoading, setIsLoading] = useState(true)

    const getProducts = (categoryId) => {
        const allProducts = 
            categoryId
                ? query(collection(db, "products"), where("category", "==", categoryId.toLowerCase()))
                : collection(db, "products")
        getDocs(allProducts)
        .then(res => {
            const productList = res.docs.map(doc => {
                const item = {
                id: doc.id,
                ...doc.data()
            }
            return item
            })
            setProducts(productList)
            setIsLoading(false)
        })
    }

    useEffect(() => {
        setIsLoading(true)
        getProducts(categoryId)      
    }, [categoryId])

    return (
        <>
        { isLoading
        ? <LoadingContent/>
        :   <>
                <h1 className="font-medium text-m">{greeting}</h1>
                <ItemList products={products}/>
            </>
        }
        </>
    )
}

export default ItemListContainer