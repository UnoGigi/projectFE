import Navbar from '../components/Navbar/Nvb'
import MyFooter from '../components/Footer/MyFooter'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/esm/Row'
import './home.css'
import { useSession } from '../middleware/LineaProtetta'
import Col from 'react-bootstrap/esm/Col'
import { useState, useEffect } from 'react'
import axios from "axios"
import SingleProduct from '../components/SingleProducts/SingleProduct'
import { Link } from 'react-router-dom'
import { CiShoppingCart } from "react-icons/ci";

const Home = () => {

    const [product1, setProduct1] = useState({})
    const [product2, setProduct2] = useState({})
    console.log("prodotto1", product1);
    console.log("prodotto2", product2);

    const getProduct1 = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_URL}/products/65490012c24820fa8c95effa`)
            setProduct1(response.data.product)
        } catch (error) {
            console.log(error);
        }
    }

    const getProduct2 = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_URL}/products/6548fff9c24820fa8c95eff8`)
            setProduct2(response.data.product)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProduct1(); getProduct2()
    }, [])


    const session = useSession()




    return (
        <div className='sfondo'>
            <Navbar />
            <Container>
                <Row>
                    <Col className='d-flex justify-content-center align-self-center'>
                        <div className='titolo'>
                            <h1>{session.username} BENVENUTO NELL'OASI DEI GIOCATORE</h1>
                        </div>
                    </Col>
                </Row>
               <Row className='mt-5 d-flex justify-content-center mb-5'>
                    <Col lg="6" md="6" sm="12" className='text-white fs-4'>
                        <p>L'Oasi del Giocatore nasce nel 2023 dalla passione di un ragazzo per i videogame e decide di portarla anche alle altre  persone.<br/>
                        Da noi si organizzano eventi per tutti quelli che hanno la nostra stessa passione senza limiti di eta e sesso, oltre ad offrire un negozio online per qualsiasi tua richiesta!!
                        </p>
                    </Col>
                    <Col lg="6" md="6" sm="12">
                        <img src='https://www.gamepare.it/wp-content/uploads/2015/08/gaming_cinema_1.jpg' className='imgSfondo'/>
                    </Col>
                </Row> 
                <Row className='pb-5 pt-5'>
                    <h2 className='d-flex justify-content-center align-self-center text-light'>PRODOTTI IN EVIDENZA</h2>
                    <Col  lg="6" md="6" sm="12" className='d-flex justify-content-center align-self-center'>
                        <SingleProduct
                            cover1={product1.cover1}
                            nome={product1.nome}
                            description={product1.description}
                            category={product1.category}
                            prezzo={product1.prezzo}
                            _id={product1._id}
                        />
                    </Col>
                    <Col  lg="6" md="6" sm="12" className='d-flex justify-content-center align-self-center'>
                    <SingleProduct
                            cover1={product2.cover1}
                            nome={product2.nome}
                            description={product2.description}
                            category={product2.category}
                            prezzo={product2.prezzo}
                            _id={product2._id}
                        />
                    </Col>
                </Row>
                <Row className='pb-5 pt-5'>
                    <Col lg="4" md="4" sm="12" className='d-flex justify-content-center align-self-center text-white'>
                        <Link to={'/prodotti'}><button className='glow-on-hover'>PRODOTTI</button></Link>
                    </Col>
                    <Col lg="4" md="4" sm="12" className='d-flex justify-content-center align-self-center'>
                        <Link to={'/carrello'}><button className='glow-on-hover'><CiShoppingCart className='fs-3'/></button></Link>
                    </Col>
                    <Col lg="4" md="4" sm="12" className='d-flex justify-content-center align-self-center'>
                        <Link to={'/profilo'}><button className='glow-on-hover'>PROFILO</button></Link>
                    </Col>
                </Row>
            </Container>
            <MyFooter />
        </div>
    )
}

export default Home