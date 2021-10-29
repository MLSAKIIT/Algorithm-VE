import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <h1 style={{
        color: "green",
        textAlign: "center",
        marginTop: "-50px"
      }}>
       VISUALIZE ALGORITHMS
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Algo</Heading>
            <FooterLink href="#">Algo</FooterLink>
            <FooterLink href="#">Algo</FooterLink>
          </Column>
          <Column>
            <Heading>Algo</Heading>
            <FooterLink href="#">Algo</FooterLink>
            <FooterLink href="#">Algo</FooterLink>
            <FooterLink href="#">Algo</FooterLink>
            <FooterLink href="#">Algo</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Algo</FooterLink>
            <FooterLink href="#">Algo</FooterLink>
            <FooterLink href="#">Algo</FooterLink>
            <FooterLink href="#">Algo</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
      
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
