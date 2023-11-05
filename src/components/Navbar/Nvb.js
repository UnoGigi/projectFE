import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CiShoppingCart } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";

function Nvb() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary fixed-top">
            <Container className=''>
                <Navbar.Brand href="#home">L'OASI DEL GIOCATORE</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#link">Link</Nav.Link>
                        <Nav.Link href="#link">Prodotti</Nav.Link>
                    </Nav>
                    <Nav.Link href="#profilo" className='mx-4'><CiShoppingCart /></Nav.Link>
                    <VscAccount/>
                    <NavDropdown idNavDropdown="basic-nav-dropdown" className='mx-1'> 
                            <NavDropdown.Item href="#action/3.1">Profilo</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Nvb;