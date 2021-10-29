import React from "react";
import '../../AlgoPage.css'

import {Container, Col, Image, Row} from 'react-bootstrap'


export default function About() {
return( 
    <div className="about">

      <div className="container my-5">
      <br></br>
      <h2 className="ts">What is Bidirectional Swarm Algorithm?</h2>

      <h4 className="my-5" id="ts-para">
      <b>Bidirectional search</b> is a graph search where unlike Breadth First search and Depth First Search, the search begins simultaneously from Source vertex and Goal vertex and ends when the two searches meet somewhere in between in the graph. This is thus especially used for getting results in a fraction of the time taken by both DFS and FS searches. The search from the initial node is forward search while that from the goal node is backwards. It is also based on heuristic search meaning finding the shortest path to goal optimally.
        </h4>

      </div>

    </div>
    
)
}