import React, { useState } from "react"
import Navbar from '../components/Navbar/Nvb'
import MyFooter from '../components/Footer/MyFooter'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/esm/Container";
import { useSession } from "../middleware/LineaProtetta";
import Col from 'react-bootstrap/esm/Col'
import './home.css'

const Profilo = () => {
    const [formData, setFormData] = useState({})
    console.log(formData);

    const session = useSession()
    console.log(session.nome);






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


    return (
        <div className='sfondo sfondo2'>
            <div className='sfondo'>
                <Navbar />
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
                                        defaultValue={session.username}
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
                                        defaultValue={session.nome}
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
                                        defaultValue={session.cognome}
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
                                        defaultValue={session.email}
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
                                        defaultValue={session.indirizzo}
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
                                        defaultValue={session.telefono}
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
                </Container>
                <MyFooter />
            </div>
        </div>
    )
}

export default Profilo