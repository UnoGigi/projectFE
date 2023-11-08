import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/esm/Container";
import './login.css'

const Registrati = () => {
    const [file, setFile] = useState(null)
    const [formData, setFormData] = useState({})
    console.log(formData)

    const onChangeFile = (e) => {
        setFile(e.target.files[0])
    }

    const uploadFile = async (imgprofilo) => {
        const fileData = new FormData()
        fileData.append('imgprofilo', imgprofilo)

        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/utente/cloudUpload`, {
                method: "POST",
                body: fileData
            })
            return await response.json()
        } catch (error) {
            console.log(error);
        }
    }



    const onSubmit = async (e) => {
        e.preventDefault()

        if (file) {
            try {
                const uploadCover = await uploadFile(file)
                const finalBody = {
                    ...formData,
                    imgprofilo: uploadCover.imgprofilo,
                }

                const response = await fetch(`${process.env.REACT_APP_URL}/utente/create`, {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify(finalBody)
                })
                window.location.reload()
                return response.json()
            } catch (error) {
                console.log(error);
            }
        } else {
            console.error("Inserisci un'immagine");
        }
    }

    const navigate = useNavigate()

    const tornaLogin = () => {
        navigate('/')
    }

    return (
        <div className="ctn-form">
            <Container className="pt-3 pb-5 d-flex flex-column align-items-center text-white">
                <h1 className="mb-3">L'OASI DEL GIOCATORE</h1>
                <Form
                    onSubmit={onSubmit}
                    encType="multipart/form-data"
                    className="d-flex flex-column align-items-center w-50"
                >
                    <Row className="mb-3">
                        <Form.Group md="4" className="mt-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                className="frm"
                                required
                                type="text"
                                name="username"
                                onChange={(e) => setFormData({
                                    ...formData,
                                    username: e.target.value
                                })}
                            />
                        </Form.Group>
                        <Form.Group md="4" className="mt-3">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                                className="frm"
                                required
                                type="text"
                                name="nome"
                                onChange={(e) => setFormData({
                                    ...formData,
                                    nome: e.target.value
                                })}
                            />
                        </Form.Group>
                        <Form.Group md="4" className="mt-3">
                            <Form.Label>Cognome</Form.Label>
                            <Form.Control
                                className="frm"
                                required
                                type="text"
                                name="cognome"
                                onChange={(e) => setFormData({
                                    ...formData,
                                    cognome: e.target.value
                                })}
                            />
                        </Form.Group>
                        <Form.Group md="4" className="mt-3">
                            <Form.Label>E-Mail</Form.Label>
                            <Form.Control
                                className="frm"
                                required
                                type="text"
                                name="email"
                                onChange={(e) => setFormData({
                                    ...formData,
                                    email: e.target.value
                                })}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group md="4" className="mt-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                className="frm"
                                required
                                type="password"
                                name="password"
                                onChange={(e) => setFormData({
                                    ...formData,
                                    password: e.target.value
                                })}
                            />
                        </Form.Group>
                        <Form.Group md="4" className="mt-3">
                            <Form.Label>Indirizzo</Form.Label>
                            <Form.Control
                                className="frm"
                                type="text"
                                name="indirizzo"
                                required
                                onChange={(e) => setFormData({
                                    ...formData,
                                    indirizzo: e.target.value
                                })}
                            />
                        </Form.Group>
                        <Form.Group md="4" className="mt-3">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control
                                className="frm"
                                type="number"
                                name="telefono"
                                required
                                onChange={(e) => setFormData({
                                    ...formData,
                                    telefono: Number(e.target.value)
                                })}
                            />
                        </Form.Group>
                        <Form.Group md="4" className="mt-3">
                            <Form.Label>Immagine Profilo</Form.Label>
                            <Form.Control
                                className="frm"
                                type="file"
                                name="imgprofilo"
                                onChange={onChangeFile}
                            />
                        </Form.Group>
                    </Row>
                    <button type="submit" className="glow-on-hover mt-3 frm">Registrati</button>
                    <button onClick={() => tornaLogin()} className="glow-on-hover mt-4 frm">Trona alla Login</button>
                </Form>
            </Container>
        </div>
    )
}

export default Registrati