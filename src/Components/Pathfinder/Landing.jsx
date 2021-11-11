import React, { Component } from "react";
import Typed from "react-typed";
import Particle from "./Particle";
import "./Pathfinder.css";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import logo from "../../Assets/Group 2.png";

class TypedText extends Component {
  render() {
    return (
      <div className="typejs">
        {/* <Typed
                    strings={['Here you can find anything']}
                    typeSpeed={40}
                    style={{
                        color:"white"
                    }}
                /> */}
        <br />

        <Typed
          strings={[
            "Dijkstra's Algorithm",
            "A* Algorithm",
            "Breadth First Search",
            "Depth First Search",
            "Swarm Algorithm",
          ]}
          typeSpeed={30}
          backSpeed={50}
          // attr="placeholder"
          loop
        >
          {/* <input type="text"/> */}
        </Typed>
      </div>
    );
  }
}

export default function Landing() {
  return (
    <div className="path_landing">
      <Particle />

      <Row>
        <Col sm={6}>
          <TypedText />,
        </Col>

        <Col sm={6} style={{ zIndex: 100 }}>
          <img
            src={logo}
            width="50%"
            className="Landingimg-img"
            style={{ paddingTop: "170px", opacity: 0.8 }}
          />
        </Col>
      </Row>
    </div>
  );
}
