import React from 'react'
import '../Navbar/Navbar.css'
import {Navbar, Nav, Container, NavDropdown, Button} from 'react-bootstrap'


export default function NavBar() {
    return (
        <div>
            <Navbar className="navbar" collapseOnSelect expand="lg" variant="light" fixed="top">

            <Navbar.Brand href="/">
                {/* <img
                    src={logo}
                    width="50"
                    height="50"
                    className="d-inline-block align-top md:ml-5"
                    alt="Project Wing logo"
                />{' '} */}
            </Navbar.Brand>
            <Navbar.Brand className="nav-name" href="/">
                <span style={{fontSize: '36px', fontFamily: 'poppins', color:'#fbda2b'}} className="nav-name">Algorithms </span>
                <span style={{fontSize: '34px', fontFamily: 'poppins'}} className="nav-name">VE</span>
            </Navbar.Brand>

            <Navbar.Toggle className="toggler" aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="nav-links">
                <Nav className="ml-auto" style={{fontFamily: 'Poppins'}}>
                <Nav.Link className="nav-toggles" href="/#projects">Projects</Nav.Link>
                <Nav.Link className="nav-toggles" href="/#about">About</Nav.Link>
                <NavDropdown className="nav-toggles" style={{color:'#3699a1'}} title="Algorithms Used">
                <NavDropdown.Item className="nav-toggles" href="/Greedy">Greedy</NavDropdown.Item>
                <NavDropdown.Item className="nav-toggles" href="/algo2">Algo2</NavDropdown.Item>
                <NavDropdown.Item className="nav-toggles" href="/algo3">Algo3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="nav-toggles" href="/sample">Sample</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="nav-toggles" href="/#developers">Developers</Nav.Link>
                {/* <Nav.Link className="nav-toggles" href="/#developers"><Button href="/login">Login</Button>{' '}</Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
            </Navbar>         
        </div>
    )
}
