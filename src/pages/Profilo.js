import React, { useState, useEffect } from "react"
import MyFooter from '../components/Footer/MyFooter'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/esm/Container";
import { useSession } from "../middleware/LineaProtetta";
import Col from 'react-bootstrap/esm/Col'
import './home.css'
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";



const Profilo = () => {
    const [formData, setFormData] = useState({})
    const [utente, setUtente] = useState({})
    const [showModal, setShowModal] = useState(false)

    const session = useSession()

    const getUtente = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_URL}/utente/${session.id}`)
            setUtente(response.data.utente)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUtente(), goAmmi()
    }, [])

    const Modifica = async (utentId) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/utente/update/${utentId}`, {
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                },
                method: "PATCH",
                body: JSON.stringify(formData)
            })
            return response.json()
        } catch (error) {
            console.log(error);
        }
    }

    
    //parte amministratore
    const goAmmi = () => {
        if (session.ruolo === "amministratore") {
            setShowModal(true)
    }}

    const navigate = useNavigate()

    const ProdAmmi = () => {
        navigate('/prodottiammi')
    }

    const FormProdu = () => {
        navigate('/formprodu')
    }


    return (
        <div>
            <div>
                <Container className="pt-3 pb-5">
                    <Row className="mb-3">
                        <Col lg="6" md="6" sm="12">
                            <h1 className="mb-3">I TUOI DATI PERSONALI</h1>
                            <Form
                                className="d-flex flex-column align-items-center w-50"
                            >

                                <Form.Group md="4" className="mt-3 w-100">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        className="frt"
                                        type="text"
                                        name="username"
                                        defaultValue={utente.username}
                                        onChange={(e) => setFormData({
                                            ...formData,
                                            username: e.target.value
                                        })}
                                    />
                                </Form.Group>
                                <Form.Group md="4" className="mt-3 w-100">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control
                                        className="frt"
                                        type="text"
                                        name="nome"
                                        defaultValue={utente.nome}
                                        onChange={(e) => setFormData({
                                            ...formData,
                                            nome: e.target.value
                                        })}
                                    />
                                </Form.Group>
                                <Form.Group md="4" className="mt-3 w-100">
                                    <Form.Label>Cognome</Form.Label>
                                    <Form.Control
                                        className="frt"
                                        type="text"
                                        name="cognome"
                                        defaultValue={utente.cognome}
                                        onChange={(e) => setFormData({
                                            ...formData,
                                            cognome: e.target.value
                                        })}
                                    />
                                </Form.Group>
                                <Form.Group md="4" className="mt-3 w-100">
                                    <Form.Label>E-Mail</Form.Label>
                                    <Form.Control
                                        className="frt"
                                        type="text"
                                        name="email"
                                        defaultValue={utente.email}
                                        onChange={(e) => setFormData({
                                            ...formData,
                                            email: e.target.value
                                        })}
                                    />
                                </Form.Group>
                                <Form.Group md="4" className="mt-3 w-100">
                                    <Form.Label>Indirizzo</Form.Label>
                                    <Form.Control
                                        className="frt"
                                        type="text"
                                        name="indirizzo"
                                        defaultValue={utente.indirizzo}
                                        onChange={(e) => setFormData({
                                            ...formData,
                                            indirizzo: e.target.value
                                        })}
                                    />
                                </Form.Group>
                                <Form.Group md="4" className="mt-3 w-100">
                                    <Form.Label>Telefono</Form.Label>
                                    <Form.Control
                                        className="frt"
                                        type="number"
                                        name="telefono"
                                        defaultValue={utente.telefono}
                                        onChange={(e) => setFormData({
                                            ...formData,
                                            telefono: Number(e.target.value)
                                        })}
                                    />
                                </Form.Group>
                                <button onClick={() => Modifica(session.id)} className="glow-on-hover mt-4 frt">Modifica i tuoi Dati</button>
                            </Form>
                        </Col>
                        <Col lg="6" md="6" sm="12" className="d-flex flex-column justify-content-center align-items-center mt-3">
                            <h2>La tua Immagine di Profilo</h2>
                            <img src={session.imgprofilo} className="profiloimg" />
                        </Col>
                    </Row>
                    <Row>
                        <Modal show={showModal} onHide={() => setShowModal(false)}>
                            <Modal.Header closeButton>
                                <Modal.Title>Benvenuto Amministratore</Modal.Title>
                            </Modal.Header>
                            <Modal.Footer>
                            <button onClick={() => ProdAmmi()} className="glow-on-hover mt-4 frt">Amm. Prodotti</button>
                            <button onClick={() => FormProdu()} className="glow-on-hover mt-4 frt">Agg. Prodotti</button>
                            </Modal.Footer>
                        </Modal>
                    </Row>
                </Container>
                <MyFooter />
            </div>
        </div>
    )
}

export default Profilo