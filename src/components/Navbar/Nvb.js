import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CiShoppingCart } from "react-icons/ci";
import './Nvb.css'
import { useNavigate } from "react-router-dom";



function Nvb() {

    const Logout = () => {
        localStorage.clear()
        window.location.href = "/"
    }

    const navigate = useNavigate()

    const console = () => {
        navigate('/console')
    }

    const giochi = () => {
        navigate('/giochi')
    }

    const accessori = () => {
        navigate('/accessori')
    }

    const prodotti = () => {
        navigate('/prodotti')
    }

    const carrello = () => {
        navigate('/carrello')
    }

    return (

        <Navbar expand="lg" className="bg-white fixed-top box1">
            <Container className=''>
                <Navbar.Brand href="/home">L'OASI DEL GIOCATORE</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <NavDropdown title="Prodotti" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={()=>console()}>Console</NavDropdown.Item>
                        <NavDropdown.Item onClick={()=>giochi()}>Giochi</NavDropdown.Item>
                        <NavDropdown.Item onClick={()=>accessori()}>Accessori</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={()=>prodotti()}>Tutti i Prodotti</NavDropdown.Item>
                    </NavDropdown>
                    <Nav className="me-auto">
                        <Nav.Link onClick={()=>carrello()} className='mx-1'><CiShoppingCart className='fs-4' /></Nav.Link>
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


