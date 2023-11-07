import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyFooter from "../components/Footer/MyFooter";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/esm/Container";
import './login.css'


const Login = () => {
    const [loginData, setLoginData] = useState({})
    const [login, setLogin] = useState(null)

    const navigate = useNavigate()

    const handleInputChange = (e) => {
        const { name, value } = e.target

        setLoginData({
            ...loginData,
            [name]: value
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/login`, {
                headers: {
                    "Content-type": "application/json"
                },
                method: 'POST',
                body: JSON.stringify(loginData)
            })
            const data = await response.json()

            if (data.token) {
                localStorage.setItem('utenteLoggato', JSON.stringify(data.token))
                navigate('/home')
            }
            setLogin(data)
        } catch (error) {
            console.log(error);
        }
    }

    const signIn = () => {
        navigate('/registrati')
    }


    return (
        <>
            <div className="ctn-form lgn">
                <Form noValidate onSubmit={onSubmit}>
                    <Container className="mb-3 d-flex flex-column align-items-center">
                        <h1 className="mb-5">L'OASI DEL GIOCATORE</h1>
                        <Form.Group as={Col} md="4" className="mt-5">
                            <Form.Label>E-Mail</Form.Label>
                            <Form.Control
                                className="frm"
                                required
                                type="text"
                                name="email"
                                placeholder="E-Mail"
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="4" className="mt-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                className="frm"
                                required
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <button type="submit" className="mt-5 glow-on-hover frm">LOGIN</button>
                        <Button type="button" className="mt-5 text-grey bg-transparent border-light border-0 text-decoration-underline" onClick={() => signIn()}>Non sei ancora registrato?</Button>
                    </Container>
                </Form>
            </div>
            <MyFooter />
        </>
    )
}

export default Login