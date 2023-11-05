import Navbar from '../components/Navbar/Nvb'
import MyFooter from '../components/Footer/MyFooter'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import './home.css'
import { useSession } from '../middleware/LineaProtetta'

const Home = () => {

    const session = useSession()
    console.log(session.username);

    return (
        <>
            <Navbar />
            <div className='principale'>
                <Container className='mt-5'>
                    <Row>
                        <div className='d-flex justify-content-center align-self-center titolo'>
                            <h1>{session.username} BENVENUTO NELLA TUA OASI PRIVATA</h1>
                        </div>
                    </Row>
                </Container>
            </div >
            <MyFooter />
        </>
    )
}

export default Home