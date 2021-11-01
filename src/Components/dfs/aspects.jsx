import React from "react";
import {Container, Col, Image, Row} from 'react-bootstrap'
import '../../AlgoPage.css'


import samplegif from "../../Assets/depth_first_traversal.jpg"

export default function Aspects() {
    return (
        <div className="aspects">
            <div className="container my-5">
            <br></br>
            <h2 className="as" style={{color:"black"}}>Important Aspects of the Algorithm</h2>
            </div>

        <Container> 
            <h1 className="header-abt text-left pt-5 grad-text" id="algo">Algorithm</h1>

            <div className="sec">
            <Row>
                <Col xl={8}>
                    <p style={{textAlign:"left", lineHeight:"20px"}}>
                    <b>Depth first search algorithm</b> begins the searching from the root node and goes down till the leaf of a branch at a time looking for a particular key. If the key is not found, the searching retraces its steps back to the point from where the other branch was left unexplored and the same procedure is repeated for that branch.
                      <br></br><br></br>Since DFS is of <b>RECURSIVE</b> nature, this can be implemented using <b>STACKS</b>.
                      <br></br><br></br><b>APPLICATION</b><br></br>
                      <b>1. </b> Solving maze-like puzzles with only one solution: DFS can be used to find all solutions to a maze problem by only considering nodes on the current path in the visited set.<br></br><br></br>
                      <b>2. </b> Path Finding: DFS is used for finding path between two given nodes - source and destination and cycle detection in graphs
</p>
                </Col>
                <Col xl={4}>
                    <img src={samplegif} style={{height:"100%", width:"100%"}} alt="algogif"/>
                </Col>
            </Row>
            </div>
        </Container>
  
        <Container>
            <h1 className="header-abt text-left pt-5 grad-text" id="psuedocode">Pseudocode</h1>

            <div className="sec">
            <p style={{textAlign:"left", lineHeight:"25px"}}>
                        <b style={{fontSize:"20px"}}>Depth first search algorithm:</b> <br></br><br></br>
                        <b>Step 1:</b>Push the source node to the stack. <br></br><br></br>
                        <b>Step 2:</b>Maintain a data structure to mark if a node is visited or not.<br></br><br></br>
                        <b>Step 3:</b>Mark source node S as visited: <b>visited[S] = True</b> <br></br><br></br>
                        <b>Step 4:</b> While stack is not empty repeat <b>steps 5 - 8</b> below<br></br><br></br>
                        <b>Step 5:</b> Check each successor of node n, and find whether any node is a goal node or not. If any successor node is goal node, then return success and terminate the search, else proceed to Step 6. <br></br><br></br>
                        <b>Step 6:</b> For each successor node, algorithm checks for evaluation function f(n), and then check if the node has been in either OPEN or CLOSED list. If the node has not been in both list, then add it to the OPEN list. <br></br><br></br>
                        <b>Step 7:</b> Return to Step 2.
                    </p>
          
            </div>
        </Container>


        <Container>
            <h1 className="header-abt text-left pt-5 grad-text" id="code">Code</h1>

            <div className="sec">
            <Row>
            <p style={{textAlign:"left", lineHeight:"20px" , paddingLeft:"50px", paddingTop:"30px"}}>
              
              <code>{"Graph.prototype.dfsRecursive = function (start) {"}</code><br></br>
              &ensp;&ensp;<code>{"const result = [];"}</code><br></br>
              &ensp;&ensp;<code>{"const visited = {};"}</code><br></br>
              &ensp;&ensp;<code>{"const adjacencyList = this.adjacencyList;"}</code><br></br>
              &ensp;&ensp;<code>{"(function dfs(vertex) {"}</code><br></br>
              &ensp;&ensp;<code>{"if (!vertex) return null;"}</code><br></br>
              &ensp;&ensp;<code>{"visited[vertex] = true;"}</code><br></br>
              &ensp;&ensp;<code>{"result.push(vertex);"}</code><br></br>
              &ensp;&ensp;<code>{"adjacencyList[vertex].forEach((neighbor) => {"}</code><br></br>
              &ensp;&ensp;<code>{" if (!visited[neighbor]) {"}</code><br></br>
              &ensp;&ensp;<code>{"return dfs(neighbor);"}</code><br></br>
              &ensp;&ensp;<code>{"}"}</code><br></br>
              &ensp;<code>{" });"}</code><br></br>
              <code>{" })(start);"}</code><br></br>
              <code>{"return result;"}</code><br></br>
              &ensp;&ensp;<code>{"};"}</code><br></br>
              </p>
            </Row>
            </div>
        </Container>

        <Container>
            <h1 className="header-abt text-left pt-5 grad-text" id="visual">Visualization</h1>
        
            <div className="sec">
            
            </div>
        </Container>


        </div>
    )
}