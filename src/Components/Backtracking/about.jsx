import React from "react";
import '../../AlgoPage.css'

import {Container, Col, Image, Row} from 'react-bootstrap'


export default function About() {
return( 
    <div className="about">

      <div className="container my-5">
      <br></br>
      <h2 className="ts">What is Backtracking Algorithm?</h2>

      <h4 className="my-5" id="ts-para">
          Backtracking is an algorithmic technique where the goal is to get all solutions to a problem using the brute force approach. It consists of building a set of all the solutions incrementally. Since a problem would have constraints, the solutions that fail to satisfy them will be removed at any point of time(by time, here, is referred to the time elapsed till reaching any level of the search tree).Backtracking is not considered an optimized technique to solve a problem. It finds its application when the solution needed is not time-bounded.It uses depth-first search and is found to be very effective for decision problems and optimization problems.
        </h4>

      </div>

    </div>
    
)
}