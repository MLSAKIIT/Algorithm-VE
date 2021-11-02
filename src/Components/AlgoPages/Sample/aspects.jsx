import React from "react";
import { Container, Col, Image, Row } from 'react-bootstrap'
import '../../../AlgoPage.css'

import samplegif from "../../../Assets/Dijkstra_Animation.gif"

export default function Aspects() {
    return (
        <div className="aspects">
            <div className="container my-5">
                <br></br>
                <h2 className="as" style={{ color: "black" }}>Important Aspects of the Algorithm</h2>
            </div>

            <Container>
                <h1 className="header-abt text-left pt-5 grad-text" id="algo">Algorithm</h1>

                <div className="sec">
                    <Row>
                        <Col xl={8}>
                            <p style={{ textAlign: "left", lineHeight: "20px" }}>
                                The whole universe of A* search technique revolves around the equation:

                                f(n) = g(n) + h(n)
                                where; g(n) - it refers to the actual cost with respect to time taken from the start node to the nth node. and, h(n) - it refers to the estimated cost with respect to the time taken from nth node to the goal. <br></br></p>
                        </Col>
                        <Col xl={4}>
                            <img src={samplegif} style={{ height: "100%", width: "100%" }} alt="algogif" />
                        </Col>
                    </Row>
                </div>
            </Container>

            <Container>
                <h1 className="header-abt text-left pt-5 grad-text" id="psuedocode">Psuedocode</h1>

                <div className="sec">
                    <Row>
                        <Col xl={8}>
                            <h3 style={{ textAlign: "left", fontSize: "15px" }}>
                                function reconstruct_path(cameFrom, current)
                                total_path := current
                                while current in cameFrom.Keys:
                                current := cameFrom[current]
                                total_path.prepend(current)
                                return total_path

                                A* finds a path from start to goal.
                                h is the heuristic function. h(n) estimates the cost to reach goal from node n.
                                function A_Star(start, goal, h)
                                The set of discovered nodes that may need to be (re-)expanded.
                                Initially, only the start node is known.
                                This is usually implemented as a min-heap or priority queue rather than a hash-set.
                                openSet := start

                                For node n, cameFrom[n] is the node immediately preceding it on the cheapest path from start
                                to n currently known.
                                cameFrom := an empty map

                                For node n, gScore[n] is the cost of the cheapest path from start to n currently known.
                                gScr := map with default value of Infinity
                                gScore[start] := 0
                                For node n, fScore[n] := gSore[n] + h(n). fScore[n] represents our current best guess as to
                                how short a path from start to finish can be if it goes through n.
                                fScore := map with default value of Infinity
                                fScore[start] := h(start)

                                while openSet is not empty
                                This operation can occur in O(1) time if openSet is a min-heap or a priority queue
                                current := the node in openSet having the lowest fScore[] value
                                if current = goal
                                return reconstruct_path(cameFrom, current)



                            </h3>
                        </Col>
                        <Col xl={4}>
                            <h3 style={{ textAlign: "left", fontSize: "15px" }}>
                                

                                openSet.Remove(current)
                                for each neighbor of current
                                d(current,neighbor) is the weight of the edge from current to neighbor
                                tentative_gScore is the distance from start to the neighbor through current
                                tentative_gScore := gScore[current] + d(current, neighbor)
                                if (tentative_gScore   gScore[neighbor])
                                This path to neighbor is better than any previous one. Record it!
                                cameFrom[neighbor] := current
                                gScore[neighbor] := tentative_gScore
                                fScore[neighbor] := gScore[neighbor] + h(neighbor)
                                if neighbor not in openSet
                                openSet.add(neighbor)

                                Open set is empty but goal was never reached
                                return failure
                            </h3>
                        </Col>
                    </Row>
                </div>
            </Container>


            <Container>
                <h1 className="header-abt text-left pt-5 grad-text" id="code">Code</h1>

                <div className="sec">
                    <Row>
                        <Col xl={8}>

                            <h3 style={{ textAlign: "left" , fontSize:"16px"}}>
                                

                                &ensp;&ensp;<code> {"function heuristic(a,b) {"} </code> <br></br>
                                &ensp;&ensp;<code> {"var d = abs(a.i-b.i) + abs(a.j-b.j);"} </code> <br></br>
                                &ensp;&ensp;<code> {" return d ; "} </code> <br></br>
                                &ensp;&ensp;<code> {" } "} </code> <br></br>


                                &ensp;&ensp;<code> {" var cols = 25; "} </code> <br></br>
                                &ensp;&ensp;<code> {"var rows = 25; "}  </code> <br></br>
                                &ensp;&ensp;<code> {"var grid = new Array(cols); "} </code> <br></br>

                                &ensp;&ensp;<code> {" var OpenSet = []; "} </code> <br></br>
                                &ensp;&ensp;<code> {" var ClosedSet = []; "} </code> <br></br>
                                &ensp;&ensp;<code> {" var start; "} </code> <br></br>
                                &ensp;&ensp;<code> {" var end; "} </code> <br></br>
                                &ensp;&ensp;<code> {" var w,h; "} </code> <br></br>
                                &ensp;&ensp;<code> {" var path = []; "} </code> <br></br>

                                
                                        &ensp;&ensp;<code> {" function setup() "} </code> <br></br>
                                        &ensp;&ensp;<code> {" { "} </code> <br></br>
                                        &ensp;&ensp;<code> {" createCanvas(400, 400); "} </code> <br></br>
                                        &ensp;&ensp;<code> {" console.log('A*'); "} </code> <br></br>
                                        &ensp;&ensp;<code> {" for( var i=0; i<cols; i++) { "} </code> <br></br>
                                        &ensp;&ensp;<code> {" for( var j=0; j<rows; j++){ "} </code> <br></br>
                                        &ensp;&ensp;<code> {" grid[i][j]= new spot(); "} </code> <br></br>
                                        &ensp;&ensp;<code> {" } "} </code> <br></br>
                                        &ensp;&ensp;<code> {" } "} </code> <br></br>

                                        &ensp;&ensp;<code> {" for( var i=0; i<cols; i++) { "} </code> <br></br>
                                        &ensp;&ensp;<code> {" for( var j=0; j<rows; j++){ "} </code> <br></br>
                                        &ensp;&ensp;<code> {" grid[i][j].addNeighbours(grid); "} </code> <br></br>
                                        &ensp;&ensp;<code> {" } "} </code> <br></br>

                                        &ensp;&ensp;<code> {" start = grid[0][0]; "} </code> <br></br>
                                        &ensp;&ensp;<code> {" end = grid[cols - 1][rows - 1]; "} </code> <br></br>

                                        &ensp;&ensp;<code> {" OpenSet.push(start); "} </code> <br></br>

                                        &ensp;&ensp;<code> {" console.log(grid); "} </code> <br></br>
                                        &ensp;&ensp;<code> {" } "} </code> <br></br>


                                     </h3>
                        </Col>
                        <Col xl={4}>
                            <h3 style={{ textAlign: "left", fontSize: "16px" }}>
                                &ensp;&ensp;<code> {" function draw(){ "} </code> <br></br>

                                &ensp;&ensp;<code>{" if(OpenSet.length > 0){ "} </code> <br></br>

                                &ensp;&ensp;<code> {" var winner = 0; "} </code> <br></br>
                                &ensp;&ensp;<code> {" for( var i=0; i< OpenSet.length; i++){ "} </code> <br></br>
                                &ensp;&ensp;<code> {" if( OpenSet[i].f < OpenSet[winner].f) { "} </code> <br></br>
                                &ensp;&ensp;<code> {" winner = i; "} </code> <br></br>
                                &ensp;&ensp;<code> {" } "} </code> <br></br>
                                &ensp;&ensp;<code> {" } "} </code> <br></br>
                                &ensp;&ensp;<code> {" var current = OpenSet[winner]; "} </code> <br></br>

                                &ensp;&ensp;<code> {" if( current === end){ "} </code> <br></br>

                                &ensp;&ensp;<code> {" noLoop(); "} </code> <br></br>
                                &ensp;&ensp;<code> {" console.log(DONE!); "} </code> <br></br>
                                &ensp;&ensp;<code> {" } "} </code> <br></br>

                                &ensp;&ensp;<code> {" removeFromArray(OpenSet, current); "} </code> <br></br>
                                &ensp;&ensp;<code> {" ClosedSet.push(current); "} </code>

                                &ensp;&ensp;<code> {" var neighbours = current.neighbours; "} </code> <br></br>
                                &ensp;&ensp;<code> {" for(var i = 0; i < neighbours.length; i++) "} </code> <br></br>
                                &ensp;&ensp;<code> {" var neighbours = neighbours[i]; "} </code> <br></br>

                                &ensp;&ensp;<code> {" if(!ClosedSet.includes(neighbour)){ "} </code> <br></br>
                                &ensp;&ensp;<code> {" var tempG = current.g + 1; "} </code> <br></br>

                                &ensp;&ensp;<code> {" if(OpenSet.includes(neighbour)){ "} </code> <br></br>
                                &ensp;&ensp;<code> {" if(tempG < neighbour.g){ "} </code> <br></br>
                                &ensp;&ensp;<code> {" neighbour.g = tempG; "} </code> <br></br>
                                &ensp;&ensp;<code> {" } "} </code> <br></br>
                                &ensp;&ensp;<code> {" } "} </code> <br></br>
                                &ensp;&ensp;<code> {" else { "} </code> <br></br>
                                &ensp;&ensp;<code> {" neighbour.g = tempG; "} </code> <br></br>
                                &ensp;&ensp;<code> {" OpenSet.push(neighbour); "} </code> <br></br>
                                &ensp;&ensp;<code> {" } "} </code> <br></br>

                                &ensp;&ensp;<code> {" neighbour.h = heuristic(neighbour, end); "} </code> <br></br>
                                &ensp;&ensp;<code> {" neighbour.f = neighbour.g + neighbour.h; "} </code> <br></br>
                                &ensp;&ensp;<code> {" neighbour.previous = current; "} </code> <br></br>
                                &ensp;&ensp;<code> {" } "} </code> <br></br>
                                &ensp;&ensp;<code> {" }else { "} </code> <br></br>
                                &ensp;&ensp;<code> {" } "} </code> <br></br>

                                
                            </h3>
                        </Col>
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