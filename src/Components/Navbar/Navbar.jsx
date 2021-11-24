import React from "react";
import "../Navbar/Navbar.css";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

export default function NavBar() {
  return (
    <div>
      <Navbar
        className="navbar"
        collapseOnSelect
        expand="lg"
        variant="light"
        fixed="top"
      >
        <Navbar.Brand className="nav-name" href="/">
          <a className="logo" href="/">
            <img
              src="https://i.postimg.cc/Qxx0fCCR/Light-Theme-logo.png"
              alt="logo"
            />
          </a>
          {/* <span style={{fontSize: '36px', fontFamily: 'poppins', color:'#fbda2b'}} className="nav-name">Algorithms </span>
                <span style={{fontSize: '34px', fontFamily: 'poppins'}} className="nav-name">VE</span> */}
        </Navbar.Brand>

        <Navbar.Toggle
          className="toggler"
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="nav-links">
          <Nav className="ml-auto" style={{ fontFamily: "Poppins" }}>
            <NavDropdown
              className="nav-toggles"
              style={{ color: "#3699a1",
              left:" 40vw"
              }}
              title="Algorithms Used"
            >
              <NavDropdown.Item className="nav-toggles" href="/dfs">
                Depth-first Search Algorithm
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-toggles" href="/backtracking">
                Backtracking Algorithm
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-toggles" href="/astar">
                A Star Algorithm
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-toggles" href="/dijkstra">
                Dijkstra's Algorithm
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-toggles" href="/bidirectional">
                Bidirectional Swarm Algorithm
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-toggles" href="/greedy">
                Greedy Best-first Search Algorithm
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-toggles" href="/swarm">
                Convergent Swarm Algorithm
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="nav-toggles" href="/sample">
                Sample
              </NavDropdown.Item>
            </NavDropdown>
     
          </Nav>
          <Nav.Link className="nav-toggles" href="/developers">
          
            <Button className="button" href="/login">
              Login
            </Button>
          </Nav.Link>
      
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
