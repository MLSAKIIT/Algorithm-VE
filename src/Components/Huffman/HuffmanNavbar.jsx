import React from "react";
import { Container, Navbar } from "react-bootstrap";
import AlgoVELogo from "../../Assets/Group 1.png";
const HuffmanNavbar = () => {
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand
              href="#home"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                alt=""
                src={AlgoVELogo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              <div className="huffman-navbar-brand"></div>
              <h2>
                Algorithm VE |{" "}
                <span style={{ color: "yellow" }}>Huffman Encoding</span>
              </h2>
            </Navbar.Brand>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default HuffmanNavbar;
