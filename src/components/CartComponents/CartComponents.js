import Card from 'react-bootstrap/Card';
import React, { useContext } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import './CartComp.css'
import { CartContext } from "../../App";


const CartComponent = ({ nome, prezzo, cover1 }) => {
    const { cartItems, setCartItems } = useContext(CartContext)

   const handleRemove = () => {
        console.log("id", cartItems.filter((item) => item.id !== cartItems.id))
    }

    return (
        <>
            <Card style={{ width: '18rem' }} className='mt-2 mx-3 mb-4 bg-black text-white card'>
                <Card.Img variant="top" src={cover1} className='cardimg' />
                <Card.Body>
                    <Card.Title>{nome}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush border-white">
                    <ListGroup.Item className='bg-black text-white'>{prezzo}$</ListGroup.Item>
                </ListGroup>
                <button className='glow-on-hover text-decoration-none mt-3 mb-2 d-flex justify-content-center align-self-center align-items-center' onClick={handleRemove}>Rimuovi dal Carrello</button>
            </Card>
        </>
    )
}

export default CartComponent