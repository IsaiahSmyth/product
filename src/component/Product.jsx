import React, {useState} from 'react'
import {useParams} from 'react-router-dom'

const Product = () => {

    const {id} = useParams()

    const [productData, setProductData] = useState({})

    const getProductData = () =>{
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(res=>setProductData(res.data))
        .catch(err=>console.log(err))
    }
    useEffect(getProductData, [])

    return (
        <div className="productContainer">
            <p>{productData}</p>
        </div>
    )
}

export default Product