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
import { nanoid } from "nanoid"
import Form from 'react-bootstrap/Form';




const Prodotti = () => {
    //prendo i dati dei prodotti
    const [currentPages, setCurrentPages] = useState(1)
    const [product, setProduct] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    console.log(product);
   
   
    
    
    

    //imposto la barra per la ricerca
    const [formValue, setFormValue] = useState("")
    const [filteredProduct, setFilteredProduct] = useState(product)
    

    const getProduct = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_URL}/products?page=${currentPages}`)
            setProduct(response.data.products)
            setFilteredProduct(response.data.products)
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

    const prendiDati = (value) => {
        if(value === "") {
            setFilteredProduct(product)
        }
        setFormValue(value)

    }
    

    const filtraProdotti = (e) => {
        e.preventDefault()

        const prodottiFiltrati = filteredProduct
            .filter(product =>  product[0].nome
                .toLowerCase()
                .includes(formValue.toLowerCase()))

        setFilteredProduct(prodottiFiltrati)
        console.log(product);
    }


    return (
        <div className='sfondo2 sfondo'>
            <div className='sfondo'>
                <Navbar/>
                <Container className="sfdctn pt-5">
                <Form onSubmit={filtraProdotti} className="mt-3">
                    <Row className="mb-3 mt-5">
                        <Form.Group className="d-flex" md="4">
                            <Form.Control
                                name="formValue"
                                type="text"
                                onChange={(e) => prendiDati(e.target.value)}
                            />
                            <button type="submit" className="glow-on-hover">Cerca</button>
                        </Form.Group> 
                    </Row>
                </Form>
                    <Row className="pt-5 d-flex justify-content-center mb-5">
                        {product.map((p) => (
                            <SingleProduct
                                key={nanoid()}
                                cover1={p.cover1}
                                nome={p.nome}
                                description={p.description}
                                category={p.category}
                                prezzo={p.prezzo}
                                _id={p._id}
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