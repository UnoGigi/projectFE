import React from "react";
import Navbar from "../components/Navbar/Nvb"
import MyFooter from "../components/Footer/MyFooter";
import Container from "react-bootstrap/esm/Container";

const Success = () => {

    return (
        <>
            <Navbar />
            <Container className="d-flex justify-content-center">
                <h1 className="mt-5 pt-5">Grazie per il tuo ordine</h1>
            </Container>
            <MyFooter />
        </>
    )
}

export default Success

