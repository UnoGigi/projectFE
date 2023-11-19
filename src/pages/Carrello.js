import React, { useContext, useEffect, useState } from "react";
import MyFooter from "../components/Footer/MyFooter";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './CartComp.css'
import Col from "react-bootstrap/esm/Col";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/Stripe/CheckOutFrom";
import "../components/Stripe/COF.css";
import Modal from 'react-bootstrap/Modal';
import { CartContext } from "../components/Context/CartContext";


const stripePromise = loadStripe(`${process.env.REACT_APP_SECRET_KEY}`);

const Carrello = () => {
    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
        useContext(CartContext);
    const [cart, setCart] = useState(cartItems)
    const [showItem, setShowItems] = useState(false)


    //setto il pagamento


    const [clientSecret, setClientSecret] = useState("");


    useEffect(() => {
        fetch(`${process.env.REACT_APP_URL}/create-payment-intent`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ cart }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };


    const apriForm = () => {
        if (cart.length > 0) {
            setShowItems(!showItem)
        }
    }


    return (
        <>
            <Container className="mt-5 pt-5">
                <Row className="mb-5">
                    <Col xxl="8" xl="8" lg="8" md="6" sm="12" className="d-flex flex-wrap">
                        {cart && cart?.map((p) => (
                            <Card style={{ width: '18rem' }} key={p._id} className='mt-2 mx-3 mb-4 bg-black text-white card'>
                                <Card.Img variant="top" src={p.cover1} className='cardimg' />
                                <Card.Body>
                                    <Card.Title>{p.nome}</Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush border-white">
                                    <ListGroup.Item className='bg-black text-white'>{p.prezzo}$</ListGroup.Item>
                                    <ListGroup.Item className='bg-black text-white'>quantità: {p.quantity}</ListGroup.Item>
                                </ListGroup>
                                <ListGroup className="list-group-flush border-white d-flex flex-column align-items-center">
                                    <button
                                        className="glow-on-hover text-decoration-none mt-3"
                                        onClick={() => {
                                            removeFromCart(p);
                                        }}
                                    >-</button>
                                    <button
                                        className="glow-on-hover text-decoration-none mt-3 mb-2"
                                        onClick={() => {
                                            addToCart(p);
                                        }}
                                    >
                                        +
                                    </button>
                                </ListGroup>
                            </Card>
                        ))}
                    </Col>
                    <Col xxl="4" xl="4" lg="4" md="4" sm="12" className="d-flex flex-column align-items-center">
                        <h1>Totale del carrello: {getCartTotal()}$ </h1>
                        <button className='glow-on-hover text-decoration-none mt-3 mb-5' onClick={apriForm}>Procedi all'ordine</button>
                        <button
                            className="glow-on-hover text-decoration-none mt-3 mb-5"
                            onClick={() => {
                                clearCart();
                            }}
                        >
                            Svuota carrello
                        </button>
                    </Col>
                </Row>
                <Modal show={showItem} onHide={apriForm}>
                    <Modal.Header closeButton>
                        <Modal.Title>Procedi al Pagamento</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p className="fs-4">Totale da pagare: {getCartTotal()}$ </p>
                        {clientSecret && (
                            <Elements options={options} stripe={stripePromise}>
                                <CheckoutForm />
                            </Elements>
                        )}
                    </Modal.Body>
                </Modal>
            </Container>
            <MyFooter />
        </>
    )
}

export default Carrello



