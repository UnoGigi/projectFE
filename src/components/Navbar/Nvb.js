import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CiShoppingCart } from "react-icons/ci";
import { useSession } from '../../middleware/LineaProtetta';
import { Link } from 'react-router-dom';


function Nvb() {

    const session = useSession()

    const Logout = () => {
        localStorage.clear()
        window.location.href = "/"
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary fixed-top border-bottom border-black">
            <Container className=''>
                <Navbar.Brand href="/home">L'OASI DEL GIOCATORE</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/prodotti">Prodotti</Nav.Link>
                    </Nav>
                    <Nav.Link href="/carrello" className='mx-4'><CiShoppingCart className='fs-4'/></Nav.Link>
                    <img src={session.imgprofilo} alt="imgprofilo" width="30" height="30" className='rounded-circle'/>
                    <NavDropdown idNavDropdown="basic-nav-dropdown" className='mx-1'>
                            <NavDropdown.Item href="/profilo">Profilo</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => Logout()}>
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Nvb;


