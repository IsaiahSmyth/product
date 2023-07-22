import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const Product = () => {

    const {id} = useParams()

    const {prod, onDelete} = props

    const [productData, setProductData] = useState({})

    const getProductData = () =>{
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(res=>setProductData(res.data))
        .catch(err=>console.log(err))
    }
    useEffect(getProductData, [])


    const handleDelete = () =>{
        alert()
        axios.delete(`http://localhost:8000/api/product/${prod.id}`)
        .then(()=>onDelete(), navigator('/'))
        .catch(err=>console.log(err))
    }

    

    return (
        <div className="productContainer">
            <p >{productData}</p>
            <button onClick={()=>{navigator(`/update/${prod._id}`)}}>Update</button>
            <button onClick={handleDelete }>Delete</button>
        </div>
    )
}

export default Product