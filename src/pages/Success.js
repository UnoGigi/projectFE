import React, { useEffect, useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import { CartContext } from "../components/Context/CartContext";
import { useNavigate } from "react-router-dom";


function Completion() {

    
    const { cartItems, clearCart } = useContext(CartContext);
    const navigate = useNavigate();


    useEffect(() => {
        clearCart();
    
        setTimeout(() => {
            navigate(`/home`);
        }, 1500);
    }, [cartItems]);

    return (
        <>
            <Container className="d-flex flex-column align-items-center mt-5 pt-5">
                <h1>PAGAMENTO EFFETTUATO CON SUCCESSO</h1>
                <h1> GRAZIE PER IL TUO ORDINE! 🎉</h1>
            </Container>
        </>
    )

}

export default Completion;