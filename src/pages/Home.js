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
    const [product3, setProduct3] = useState({})
    
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
    const getProduct3 = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_URL}/products/654e6361d48b57407a2d2d43`)
            setProduct3(response.data.product)
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getProduct1(); getProduct2(); getProduct3()
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
               <Row className='mt-5 mb-5'>
                    <Col className='d-flex justify-content-center'>
                        <img src='https://www.gamepare.it/wp-content/uploads/2015/08/gaming_cinema_1.jpg' className='imgSfondo'/>
                    </Col>
                </Row> 
                <Row className='mt-5 mb-5'>
                    <Col className='d-flex justify-content-center'>
                        <h2>Qui potrai trovare tutto quello che cerchi per il GAMING!!</h2>
                    </Col>
                </Row> 
                <Row className='pb-5 pt-5'>
                    <h2 className='d-flex justify-content-center align-self-center'>PRODOTTI IN EVIDENZA</h2>
                    <Col  xxl="4" xl="4" lg="4" md="6" sm="12" className='d-flex justify-content-center align-self-center'>
                        <SingleProduct
                            cover1={product1.cover1}
                            nome={product1.nome}
                            category={product1.category}
                            prezzo={product1.prezzo}
                            _id={product1._id}
                        />
                    </Col>
                    <Col  xxl="4" xl="4" lg="4" md="6" sm="12" className='d-flex justify-content-center align-self-center'>
                    <SingleProduct
                            cover1={product2.cover1}
                            nome={product2.nome}
                            category={product2.category}
                            prezzo={product2.prezzo}
                            _id={product2._id}
                        />
                    </Col>
                    <Col xxl="4" xl="4" lg="4" md="6" sm="12" className='d-flex justify-content-center align-self-center'>
                    <SingleProduct
                            cover1={product3.cover1}
                            nome={product3.nome}
                            category={product3.category}
                            prezzo={product3.prezzo}
                            _id={product3._id}
                        />
                    </Col>
                </Row>
                <Row className='pb-5 pt-5'>
                    <Col lg="4" md="4" sm="12" className='d-flex justify-content-center align-self-center text-white mt-2'>
                        <Link to={'/prodotti'}><button className='glow-on-hover'>PRODOTTI</button></Link>
                    </Col>
                    <Col lg="4" md="4" sm="12" className='d-flex justify-content-center align-self-center mt-2'>
                        <Link to={'/carrello'}><button className='glow-on-hover'><CiShoppingCart className='fs-3'/></button></Link>
                    </Col>
                    <Col lg="4" md="4" sm="12" className='d-flex justify-content-center align-self-center mt-2'>
                        <Link to={'/profilo'}><button className='glow-on-hover'>PROFILO</button></Link>
                    </Col>
                </Row>
            </Container>
            <MyFooter />
        </div>
    )
}

export default Home