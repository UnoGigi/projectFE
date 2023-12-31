import React, { useEffect, useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import { CartContext } from "../components/Context/CartContext";


function Completion() {

    const { cartItems, clearCart } = useContext(CartContext);

    useEffect(() => {
        clearCart()
    }, [])
        

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