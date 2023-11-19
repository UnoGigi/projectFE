import React, { useEffect, useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import { CartContext } from "../components/Context/CartContext";
import { useNavigate } from "react-router-dom";


function Completion() {


    const { cartItems, clearCart } = useContext(CartContext);
    const navigate = useNavigate();


    const tornaHome = () => {
        clearCart()
        navigate('/home')
    }

    return (
        <>
            <Container className="d-flex flex-column align-items-center mt-5 pt-5">
                <h1>PAGAMENTO EFFETTUATO CON SUCCESSO</h1>
                <h1> GRAZIE PER IL TUO ORDINE! 🎉</h1>
                <button
                    className="glow-on-hover text-decoration-none mt-3"
                    onClick={tornaHome()}
                >TORNA ALLA HOMEPAGE</button>
            </Container>
        </>
    )

}

export default Completion;