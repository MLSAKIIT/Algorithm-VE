import React from "react";
import "../Landing/Landing.css";

import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

import HeroImg from "../../Assets/Hero.png";
import Path1 from "../../Assets/Path1.svg";
import Path2 from "../../Assets/Path11.svg";
import Path3 from "../../Assets/Rectangle12.svg";
import Path4 from "../../Assets/Path5.svg";
import { ReactComponent as RectangleWhite } from "../../Assets/Rectangle7.svg";
import { ReactComponent as CardLines } from "../../Assets/Group2.svg";
import Card from "../AlgoLandingCard/Card";

export default function Landing() {
  return (
    <div className="landing pt-5">
      <div className="hero" style={{ overflowX: "hidden" }}>
        <div class="my-auto">
          <div className="d-flex justify-content-between">
            <div>
              <img
                src={Path1}
                alt="Logo"
                style={{ width: "43vw", zIndex: -1, position: "absolute" }}
              />
            </div>
            <div
              style={{
                paddingTop: "30vh",
                maxWidth: "37vw",
                position: "absolute",
              }}
            >
              <div className="p-3">
                <h1
                  style={{
                    color: "#000",
                    fontSize: "3.7em",
                    fontWeight: "300",
                  }}
                >
                  VISUALIZE ALGORITHMS
                </h1>
                <h3 style={{ color: "#000" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  cumque
                </h3>
              </div>
            </div>
            <div className="">
              <img
                src={Path4}
                alt="Logo"
                style={{
                  width: "40vw",
                  zIndex: -1,
                  position: "absolute",
                  right: 0,
                  paddingTop: "40vh",
                }}
              />
            </div>
            <div>
              <img src={HeroImg} alt="Logo" style={{ width: "50vw" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="plate" style={{ position: "relative", height: "100vh" }}>
        <div className="plate-container">
          <RectangleWhite style={{ width: "30vw" }} />
          <h2
            style={{
              position: "absolute",
              top: "18.2%",
              left: "35.5%",
              fontSize: "1.5em",
            }}
          >
            What we have on our plate
          </h2>
        </div>
        <div className="plate-card-lines">
          <CardLines
            style={{
              width: "45vw",
              transform: "translate(5vh,-39vh)",

              zIndex: "-2",
              overlay: "hidden",
            }}
          />
        </div>
        <div
          className="plate-cards"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            position: "absolute",
            top: "48%",
            left: "16%",
            columnGap: "20px",
          }}
        >
          <Card
            backgroundColor="#96d7df"
            // translateX="45vh"
            // translateY="-75vh"
            algorithmName="BACKTRACKING"
          />
          <Card
            backgroundColor="#f25734"
            // translateX="80vh"
            // translateY="-123.5vh"
            algorithmName="PATH FINDING"
          />
          <Card
            backgroundColor="#f8d122"
            // translateX="80vh"
            // translateY="-123.5vh"
            algorithmName="SPLITWISE"
          />
          <Card
            backgroundColor="#329ca6"
            // translateX="80vh"
            // translateY="-123.5vh"
            algorithmName="IMAGE"
          />
        </div>
      </div>
    </div>
  );
}