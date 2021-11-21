import React from "react";
import './Navbar.css';
import { Navbar, Container, Nav } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../images/logo.png';

const Navbars = () => {
    return (
        <>
            <div className="navbar_container" id="Landing_Nav">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container fluid>
                        <img src={Logo} className="navbar_logo" alt="logo" />
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#about" className="navbar_a">ABOUT</Nav.Link>
                                <Nav.Link href="#projects" className="navbar_a">PROJECTS</Nav.Link>
                                <Nav.Link href="#developers" className="navbar_a">
                                    DEVELOPERS
                                </Nav.Link>
                            </Nav>
                            <Button variant="outline-success" className="navbar_login_button">Login</Button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
}

export default Navbars;