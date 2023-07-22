import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Update = () => {
    const navigator = useNavigate()

    const [productData, setProductData] = useState({
        title: "",
        price: "",
        description: "",
    })


    const [titleErr, setTitleErr] = useState('')
    const [priceErr, setPriceErr] = useState('')
    const [descErr, setDescErr] = useState('')


    const handleSubmit = (e) =>{
        e.preventDefault()

        axios.put(`http://localhost:8000/api/product${id}`, productData)
        .then(res=>navigator('/'))
        .catch(err=>{
            const errs = err.response.data.errors
            
            if (errs.title){
                setTitleErr(errs.title.message)
            }else{
                setTitleErr('')
            }

            if (errs.price){
                setPriceErr(errs.price.message)
            }else{
                setPriceErr('')
            }

            if (errs.description){
                setDescErr(errs.description.message)
            }else{
                setDescErr('')
            }
        })
    }

    const handleChange = (e) =>{
        const {value, name} = e.target 
        setProductData(current=>({...current, [name]: value}))
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <p className="err">{titleErr}</p>
                    <input onChange={handleChange} value={productData} type="text"></input>
                </div>
                <div>
                    <label>Price</label>
                    <p className="err">{priceErr}</p>
                    <input onChange={handleChange} value={productData} type="text"></input>
                </div>
                <div>
                    <label>Description</label>
                    <p className="err">{descErr}</p>
                    <input onChange={handleChange} value={productData} type="text"></input>
                </div>
                <button>Create</button>
            </form >
        </div>
    )
}


export default Update