import React, { useEffect, useState } from "react";
import Navbar from '../components/Navbar/Nvb'
import './home.css'
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"
import ListGroup from 'react-bootstrap/ListGroup';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from 'react-bootstrap/esm/Col'
import Image from 'react-bootstrap/Image';

const Dettagli = () => {
    const [product, setProduct] = useState(null)
    console.log(product);

    const navigate = useNavigate()

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

    useEffect(() => {
        getProduct()
    }, [productId])

    const tornaIndietro = () => {
        navigate('/prodotti')
    }

    return (
        <div className='sfondo2 sfondo'>
            <div className='sfondo'>
            <Navbar />
            <Container className="pt-5">
                <Row>
                    <Col xxl="6" xl="6" lg="6" md="12" sm="12">
                        {product &&
                            <ListGroup className="mt-5 pt-5">
                                <ListGroup.Item className="fw-bold">NOME PRODOTTO: {product.nome}</ListGroup.Item>
                                <ListGroup.Item>{product.category}</ListGroup.Item>
                                <ListGroup.Item>$ {product.prezzo}</ListGroup.Item>
                                <ListGroup.Item>{product.description}</ListGroup.Item>
                                <ListGroup.Item className="d-flex justify-content-center align-self-center align-items-center w-100 pt-5">
                                    <button className="glow-on-hover" onClick={() => tornaIndietro()}>Torna ai Prodotti</button>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex justify-content-center align-self-center align-items-center w-100 pt-5">
                                    <button className="glow-on-hover">Aggiungi al Carrello</button>
                                </ListGroup.Item>
                            </ListGroup>}
                    </Col>
                    <Col xxl="6" xl="6" lg="6" md="12" sm="12">
                        <Row className="d-flex justify-content-center mt-5">
                            {product &&
                                <Image src={product.cover1} className="w-75" />}
                        </Row>
                        <Row className="d-flex justify-content-center mt-3">
                            {product &&
                                <Image src={product.cover2} className="w-75" />}
                        </Row>
                        <Row className="d-flex justify-content-center mt-3 mb-5">
                            {product &&
                                <Image src={product.cover3} className="w-75" />}
                        </Row>
                    </Col>

                </Row>
            </Container>
        </div>
        </div>
    )
}

export default Dettagli

