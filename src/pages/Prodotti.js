import React, { useEffect, useState } from "react";
import Navbar from '../components/Navbar/Nvb'
import MyFooter from '../components/Footer/MyFooter'
import "./home.css"
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import axios from "axios";
import SingleProduct from "../components/SingleProducts/SingleProduct";
import { nanoid } from "nanoid"
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col'



const Prodotti = () => {
    //prendo i dati dei prodotti
    
    const [product, setProduct] = useState([])
    console.log(product);


    //imposto la barra per la ricerca
    const [formValue, setFormValue] = useState("")
    const [filteredProduct, setFilteredProduct] = useState(product)



    const getProduct = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_URL}/products`)
            setProduct(response.data.products)
            setFilteredProduct(response.data.products)
        } catch (error) {
            console.log(error);
        }
    }

    


    useEffect(() => {
        getProduct()
    }, [])

    

    const prendiDati = (value) => {
        if (value === "") {
            setFilteredProduct(product)
        }
        setFormValue(value)

    }


    const filtraProdotti = (e) => {
        e.preventDefault()

        const prodottiFiltrati = filteredProduct
            .filter(product => product.nome
                .toLowerCase()
                .includes(formValue.toLowerCase()))
        setFilteredProduct(prodottiFiltrati)
    }

    return (
        <div className='sfondo2 sfondo'>
            <div className='sfondo'>
                <Navbar />
                <Container className="sfdctn pt-5">
                    <Form onSubmit={filtraProdotti} className="mt-3">
                        <Row className="mb-3 mt-5">
                            <Form.Group className="d-flex" md="4">
                                <Form.Control
                                    name="formValue"
                                    placeholder="Cerca il nome del prodotto desiderato"
                                    type="text"
                                    onChange={(e) => prendiDati(e.target.value)}
                                />
                                <button type="submit" className="glow-on-hover">Cerca</button>
                            </Form.Group>
                        </Row>
                    </Form>
                    <Row className="pt-5 d-flex justify-content-center mb-5">
                        {filteredProduct.map((p) => (
                            <Col xxl="3" xl="4" lg="4" md="6" sm="12" className="d-flex justify-content-center mb-5">
                                <SingleProduct
                                    key={nanoid()}
                                    cover1={p.cover1}
                                    nome={p.nome}
                                    category={p.category}
                                    prezzo={p.prezzo}
                                    _id={p._id}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
                <MyFooter />
            </div>
        </div>
    )
}

export default Prodotti