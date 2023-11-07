import React, { useEffect, useState } from "react";
import Navbar from '../components/Navbar/Nvb'
import MyFooter from '../components/Footer/MyFooter'
import "./home.css"
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import axios from "axios";
import ResponsivePagination from "react-responsive-pagination"
import "react-responsive-pagination/themes/classic.css"
import SingleProduct from "../components/SingleProducts/SingleProduct";



const Prodotti = () => {
    const [currentPages, setCurrentPages] = useState(1)
    const [product, setProduct] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    console.log(product);

    const getProduct = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_URL}/products?page=${currentPages}`)
            setProduct(response.data.products)
            setCurrentPages(response.data.currentPage)
            setTotalPages(response.data.totalPages)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProduct()
    }, [currentPages])

    const onChange = (value) => {
        setCurrentPages(value)
    }


    return (
        <div className='sfondo2 sfondo'>
            <div className='sfondo'>
                <Navbar />
                <Container className="sfdctn">
                    <Row className="pt-5 d-flex justify-content-center mb-5">
                        {product.map((p) => (
                            <SingleProduct
                                cover1={p.cover1}
                                nome={p.nome}
                                description={p.description}
                                category={p.category}
                                prezzo={p.prezzo}
                            />
                        ))}
                    </Row>
                </Container>
                <div className="pb-5">
                    {totalPages && (
                        <ResponsivePagination
                            current={currentPages}
                            total={totalPages}
                            onPageChange={onChange}
                        />)}
                </div>

                <MyFooter />
            </div>
        </div>
    )
}

export default Prodotti