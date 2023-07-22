import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Dashboard = () => {

    const navigator = useNavigate()


    const [product, setProduct] = useState("")


    const getProduct = () =>{
        axios.get("http://localhost:8000/api/product")
        .then(res=>setProduct(res.data))
        .catch(err=>console.log(err))
    }
    useEffect(getProduct, [])


    const getProductData = () =>{
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(res=>navigator('/product/:id'))
        .catch(err=>console.log(err))
    }


    return (
        <div className="container">
            <h1>All Products:</h1>
            {
                product.map((product, key) =>{
                    return <p onClick={getProductData} key={key}>{product}</p>
                })
            }
            
        </div >
    )
}

export default Dashboard