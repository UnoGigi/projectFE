import React, { useState, useEffect } from "react"
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/esm/Container";
import Col from 'react-bootstrap/esm/Col'

const FormProdu = () => {
    const [formData, setFormData] = useState({})
    console.log(formData);

    const onSubmit = async (e) => {
        e.preventDefault()

        try {

            const response = await fetch(`${process.env.REACT_APP_URL}/products/create`, {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(formData)
            })
            window.location.reload()
            return response.json()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Container className="pt-5 mt-5">
                <Row className="mb-3">
                    <Col className="d-flex flex-column align-items-center">
                        <h1 className="mb-3">inserisci Nuovo Prodotto</h1>
                        <Form
                            onSubmit={onSubmit}
                            className="d-flex flex-column align-items-center w-50">
                            <Form.Group md="4" className="mt-3 w-100">
                                <Form.Label>Nome Prodotto</Form.Label>
                                <Form.Control
                                    className="frt"
                                    type="text"
                                    name="nome"
                                    onChange={(e) => setFormData({
                                        ...formData,
                                        nome: e.target.value
                                    })}
                                />
                            </Form.Group>
                            <Form.Group md="4" className="mt-3 w-100">
                                <Form.Label>Categoria Prodotto</Form.Label>
                                <Form.Control
                                    className="frt"
                                    type="text"
                                    name="category"
                                    onChange={(e) => setFormData({
                                        ...formData,
                                        category: e.target.value
                                    })}
                                />
                            </Form.Group>
                            <Form.Group md="4" className="mt-3 w-100">
                                <Form.Label>Prezzo</Form.Label>
                                <Form.Control
                                    className="frt"
                                    type="number"
                                    name="prezzo"
                                    onChange={(e) => setFormData({
                                        ...formData,
                                        prezzo: Number(e.target.value)
                                    })}
                                />
                            </Form.Group>
                            <Form.Group md="4" className="mt-3 w-100">
                                <Form.Label>Immagine 1</Form.Label>
                                <Form.Control
                                    className="frt"
                                    type="text"
                                    name="cover1"
                                    onChange={(e) => setFormData({
                                        ...formData,
                                        cover1: e.target.value
                                    })}
                                />
                            </Form.Group>
                            <Form.Group md="4" className="mt-3 w-100">
                                <Form.Label>Immagine 2</Form.Label>
                                <Form.Control
                                    className="frt"
                                    type="text"
                                    name="cover2"
                                    onChange={(e) => setFormData({
                                        ...formData,
                                        cover2: e.target.value
                                    })}
                                />
                            </Form.Group>
                            <Form.Group md="4" className="mt-3 w-100">
                                <Form.Label>Immagine 3</Form.Label>
                                <Form.Control
                                    className="frt"
                                    type="text"
                                    name="cover3"
                                    onChange={(e) => setFormData({
                                        ...formData,
                                        cover3: e.target.value
                                    })}
                                />
                            </Form.Group>
                            <Form.Group md="4" className="mt-3 w-100">
                                <Form.Label>Descrizione</Form.Label>
                                <Form.Control
                                    className="frt"
                                    type="text"
                                    name="description"
                                    onChange={(e) => setFormData({
                                        ...formData,
                                        description: e.target.value
                                    })}
                                />
                            </Form.Group>

                            <button className="glow-on-hover mt-4 frt">Crea Nuovo Prodotto</button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default FormProdu