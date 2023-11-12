import React, { useContext, useEffect, useState } from "react";
import Navbar from '../components/Navbar/Nvb'
import './home.css'
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"
import Carousel from 'react-bootstrap/Carousel';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from 'react-bootstrap/esm/Col'
import Image from 'react-bootstrap/Image';
import { CartContext } from "../CartContext";


const Dettagli = () => {
    const [product, setProduct] = useState(null)

    const { productId } = useParams()

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

    const cart = useContext(CartContext)
    const productQuantity = cart.getProductQuantity(productId)
    console.log(cart.items);

    const tornaIndietro = () => {
    history.go(-1);return true;
    }

    return (
        <div>
            <Navbar />
            <Container className="pt-5">
                <Row>
                    <Col className="mt-5 pt-5 border-bottom border-grey">
                        {product &&
                            <h2>{product.nome}</h2>}
                    </Col>
                </Row>
                <Row className="mt-3 pb-5 mb-5 border-bottom border-grey">
                    <Col xxl="6" xl="6" lg="6" md="12" sm="12">
                        {product &&
                            <Image src={product.cover1} className="w-75" />}
                    </Col>
                    <Col xxl="6" xl="6" lg="6" md="12" sm="12" className="d-flex justify-content-center flex-column">
                        <p className="fs-2">PREZZO:</p>
                        {product &&
                            <p className="fs-2">{product.prezzo} $</p>
                        }
                        <button className="glow-on-hover" onClick={() => cart.addToCart(product._id)}>Aggiungi al Carrello</button>
                    </Col>
                </Row>
                <Row className="mt-3 pb-5 mb-5 border-bottom border-grey">
                    <Col>
                        <h3 className="mb-5">DESCRIZIONE DEL PRODOTTO:</h3>
                        {product &&
                            <p>{product.description}</p>
                        }
                    </Col>
                </Row>
                <Row className="mt-3 pb-5 mb-5 border-bottom border-grey">
                    <Col className="d-flex justify-content-center">
                        <Carousel className="w-50">
                            <Carousel.Item>
                                {product &&
                                    <Image src={product.cover1} className="w-100" />}
                            </Carousel.Item>
                            <Carousel.Item>
                                {product &&
                                    <Image src={product.cover2} className="w-100" />}
                            </Carousel.Item>
                            <Carousel.Item>
                                {product &&
                                    <Image src={product.cover3} className="w-100" />}
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col className="d-flex justify-content-center mb-4">
                        <button className="glow-on-hover" onClick={() => tornaIndietro()}>Torna Indietro</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Dettagli

