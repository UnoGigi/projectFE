import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CiShoppingCart } from "react-icons/ci";
import { useSession } from '../../middleware/LineaProtetta';



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
                        <Nav.Link href="/carrello" className='mx-1'><CiShoppingCart className='fs-4' /></Nav.Link>
                    </Nav>
                    <NavDropdown title="Profilo" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/profilo">I tuoi Dati</NavDropdown.Item>
                        <NavDropdown.Item href="/ordini">I tuoi Ordini</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={Logout}>
                            LOGOUT
                        </NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Nvb;


