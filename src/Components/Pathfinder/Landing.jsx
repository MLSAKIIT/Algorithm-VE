import React from 'react'
import Particle from './Particle'
import './Pathfinder.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import logo from '../../Assets/Group 2.png'
import Typed from 'typed.js';

export default function Landing() {
    return (
        <div className="path_landing">
            <Particle/>
            {/* <h1>Hello World!</h1> */}

            <Row>
                <Col sm={6}>
                


                    {/* <style type="text/css">
                        {`
                    .btn-xxl {
                    padding: 1rem 1.5rem;
                    font-size: 1.5rem;
                    }
                    `}
                    </style> */}

                    {/* <h1 className="topline" style={{ fontFamily: 'DM Sans' }}>Outshine your skills and develop your own sponsored projects</h1>
                    <h1 className="mainhead">PROJECT WING</h1>
                    <h1 className="mainhead2" style={{ fontFamily: 'DM Sans' }}>By Microsoft Student Community, KIIT Chapter</h1> */}


                    {/* <Button variant="outline-light" size="xxl" className="btn m-2" style={{ fontFamily: 'DM Sans' }} href="">
                        {/* Registrations Closed */}
                    {/* </Button> */}

                </Col>

                <Col sm={6} style={{zIndex: 100}}>
                    <img src={logo} width="50%" className="Landingimg-img" style={{paddingTop: "170px"}}/>
                </Col>
            </Row>

        </div>
    )
}
