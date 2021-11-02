import React from "react";
import '../../../AlgoPage.css'


import {Container, Col, Image, Row} from 'react-bootstrap'


export default function About() {
return( 
    <div className="about">

      <div className="container my-5">
      <br></br>
      <h2 className="ts my-5">What is Dijkstra's Algorithm?</h2>

      <h4 className="my-5" id="ts-para">
      Dijkstra's algorithm is an algorithm for finding the shortest paths between nodes in a graph, which may represent, for example, road networks. It was conceived by computer scientist Edsger W. Dijkstra in 1956 and published three years later. The algorithm exists in many variants. Dijkstra's original algorithm found the shortest path between two given nodes, but a more common variant fixes a single node as the "source" node and finds shortest paths from the source to all other nodes in the graph, producing a shortest-path tree. It differs from the minimum spanning tree because the shortest distance between two vertices might not include all the vertices of the graph.
        </h4>

      </div>

    </div>
    
)
}