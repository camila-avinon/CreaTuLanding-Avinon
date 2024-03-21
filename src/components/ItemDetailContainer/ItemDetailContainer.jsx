import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {LoadingContent, ItemDetail} from '../index'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../config/firebaseConfig'


const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)
    const {productId} = useParams()
    const [isLoading, setIsLoading] = useState(true)

    const getProduct = (id) => {
        const productRef = doc(db, "products", id)
        getDoc(productRef)
        .then(res => {
            const product = {
                id: res.id,
                ...res.data()
            }
            setProduct(product)
            setIsLoading(false)
        })
    }


    useEffect ( () => {
        getProduct(productId)
    }, [])

    return (
        <div className='h-2/3'>
            { isLoading ? <LoadingContent/> : <ItemDetail {...product}/> }
        </div>
        
    )
}

export default ItemDetailContainer