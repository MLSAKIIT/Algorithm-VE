import React from "react";
import '../../../AlgoPage.css'

import {Container, Col, Image, Row} from 'react-bootstrap'
import algopic from "../../../Assets/sample.png"



export default function Hero() {
return(
    <div className="hero">
    
    <div className="container pt-5">
        <center>
          <h2 className="my-5" style={{backgroundColor: "white", width: "30%"}}>Depth first search algorithm</h2>
        </center>

        <center>
          <div id="heroBox">
            <img src={algopic} style={{height:"80%", width:"80%", top:"20px", right:"100px", position:"absolute"}} alt="algopic"/>
          </div>
        </center>

        <center>
          <button type="button" className="myButton my-3">
            <b>Get Started</b>
          </button>
        </center>
    </div>
    
    </div>
)
}