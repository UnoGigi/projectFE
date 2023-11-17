import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import MyFooter from "../components/Footer/MyFooter";
import Row from "react-bootstrap/esm/Row";
import axios from "axios";
import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { nanoid } from "nanoid"


const ProdottiAmmi = () => {
    const [product, setProduct] = useState([])

    const getProduct = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_URL}/products`)
            setProduct(response.data.products)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProduct()
    }, [])

    const deleteProduct = async (productId) => {
        try {
          return await fetch (`${process.env.REACT_APP_URL}/products/delete/${productId}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json"
            }
          },window.location.reload()
          )
          
        } catch (error) {
          console.log(error);
        }
      }

    return (
        <>
            <Container className="mt-5 pt-5">
                <Row>
                    {product && product?.map((p) => (
                        <Col xxl="3" xl="4" lg="4" md="6" sm="12" className="d-flex justify-content-center mb-5">
                            <Card style={{ width: '18rem' }} key={nanoid()} className='mt-2 mx-3 mb-4 bg-black text-white card'>
                                <Card.Img variant="top" src={p.cover1} className='cardimg' />
                                <Card.Body>
                                    <Card.Title>{p.nome}</Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush border-white">
                                    <ListGroup.Item className='bg-black text-white'>{p.prezzo}$</ListGroup.Item>
                                </ListGroup>
                                <button className='glow-on-hover text-decoration-none mt-3 mb-2 d-flex justify-content-center align-self-center align-items-center' onClick={() => deleteProduct(p._id)}>ELIMINA</button>
                            </Card>
                        </Col>
                    ))
                    }
                </Row>
            </Container>
            <MyFooter />
        </>
    )
}

export default ProdottiAmmi