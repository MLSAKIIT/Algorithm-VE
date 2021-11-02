import React from "react";
import '../../../AlgoPage.css'

import {Container, Col, Image, Row} from 'react-bootstrap'


export default function About() {
return( 
    <div className="about">

      <div className="container my-5">
      <br></br>
      <h2 className="ts">What is A Star Algorithm?</h2>

      <h4 className="my-5" id="ts-para">
      A* Search algorithm is one of the best and popular technique used in path-finding and graph traversals.
Informally speaking, A* Search algorithms, unlike other traversal techniques, it has “brains”. What it means is that it is really a smart algorithm which separates it from the other conventional algorithms. This fact is cleared in detail in below sections. 
And it is also worth mentioning that many games and web-based maps use this algorithm to find the shortest path very efficiently (approximation). 
Consider a square grid having many obstacles and we are given a starting cell and a target cell. We want to reach the target cell (if possible) from the starting cell as quickly as possible. Here A* Search Algorithm comes to the rescue.
        </h4>

      </div>

    </div>
    
)
}