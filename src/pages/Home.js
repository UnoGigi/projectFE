import MyFooter from '../components/Footer/MyFooter'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/esm/Row'
import './home.css'
import { useSession } from '../middleware/LineaProtetta'
import Col from 'react-bootstrap/esm/Col'
import { Link } from 'react-router-dom'
import { CiShoppingCart } from "react-icons/ci";

const Home = () => {

    const session = useSession()


    return (
        <div className='sfondo'>
            <Container className='mt-5'>
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
                <Row className='mt-5'>
                    <Col >
                        <Link to={'/console'} className='linkhome text-decoration-none'>
                            <div className='divhome bg-succes d-flex flex-column align-items-center mb-4 homelink1 text-white rounded'>
                                <div>
                                    <h2 className='fw-bold mt-2'>Console</h2>
                                </div>
                                <div className='d-flex align-items-center p-2'>
                                    <p className='fs-2 mx-4 '>Tutte le console del momento, dalla PS5 alla Nintendo Switch, a portata di un click </p>
                                    <img className='w-50 mt-2 mb-2 mx-2 border border-black rounded' src="https://tse4.mm.bing.net/th?id=OIP.epCQGp-AGj3s1yTHwrszlgHaEK&pid=Api&P=0&h=180" />
                                </div>
                            </div>
                        </Link>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col>
                        <Link to={'/Giochi'} className='linkhome text-decoration-none'>
                            <div className='bg-succes d-flex flex-column align-items-center mb-4 homelink text-white rounded'>
                                <div>
                                    <h2 className='fw-bold mt-2'>Giochi</h2>
                                </div>
                                <div className='d-flex align-items-center p-2'>
                                    <p className='fs-2 mx-4'>Preferisci un sparatutto o un platform? Non importa, qui troverai tutto quello che cerchi</p>
                                    <img className='w-50 mt-2 mb-2 mx-2 border border-black rounded' src="https://tse3.mm.bing.net/th?id=OIP.nqoGwTneBospMGe_KUmhLwHaD4&pid=Api&P=0&h=180" />
                                </div>
                            </div>
                        </Link>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col>
                        <Link to={'/accessori'} className='linkhome text-decoration-none'>
                            <div className='bg-succes d-flex flex-column align-items-center mb-4 homelink3 text-white rounded'>
                                <div>
                                    <h2 className='fw-bold mt-2'>Accessori</h2>
                                </div>
                                <div className='d-flex align-items-center p-2'>
                                    <p className='fs-2 mx-4'>Giocando hai "involotariamente" rotto un pad?? Tranquillo, qui ne troverai di sicuro un altro </p>
                                    <img className='w-50 mt-2 mb-2 mx-2 border border-black rounded' src="https://tse2.mm.bing.net/th?id=OIP.DqFxnlynmZTa1RzJihcDrgHaEK&pid=Api&P=0&h=180" />
                                </div>
                            </div>
                        </Link>
                    </Col>
                </Row>
                <Row className='pb-5 pt-5'>
                    <Col lg="4" md="4" sm="12" className='d-flex justify-content-center align-self-center text-white mt-2'>
                        <Link to={'/prodotti'} className='text-decoration-none'><button className='glow-on-hover'>PRODOTTI</button></Link>
                    </Col>
                    <Col lg="4" md="4" sm="12" className='d-flex justify-content-center align-self-center mt-2'>
                        <Link to={'/carrello'}><button className='glow-on-hover'><CiShoppingCart className='fs-3'/></button></Link>
                    </Col>
                    <Col lg="4" md="4" sm="12" className='d-flex justify-content-center align-self-center mt-2'>
                        <Link to={'/profilo'} className='text-decoration-none'><button className='glow-on-hover'>PROFILO</button></Link>
                    </Col>
                </Row>
            </Container>
            <MyFooter />
        </div>
    )
}

export default Home