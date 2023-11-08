import React, { useEffect, useState } from "react";
import Navbar from '../components/Navbar/Nvb'
import MyFooter from '../components/Footer/MyFooter'
import './home.css'
import { useParams } from "react-router-dom";
import axios from "axios"


const Dettagli = () => {
    const [product, setProduct] = useState(null)
    
    const { productId } = useParams()
    console.log(productId);

    const getProduct = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_URL}/products/${productId}`)
            setProduct(response.data.product)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=> {
        getProduct
    }, [productId])

    console.log(product);

    return(
        <div className='sfondo sfondo2'>
            <Navbar/>
            <div className="pt-5 mt-5 text-white">Dettagli libro {productId}</div>
            <MyFooter/>
        </div>
    )
}

export default Dettagli

