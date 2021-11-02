import React from "react";
import {Container, Col, Image, Row} from 'react-bootstrap'
import '../../../AlgoPage.css'


import samplegif from "../../../Assets/greedy.png"

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
                    <p style={{textAlign:"left", lineHeight:"25px"}}>
                    <b>Greedy best-first search algorithm</b> always selects the path which appears best at that moment. It is the combination of depth-first search and breadth-first search algorithms. It uses the heuristic function and search. Best-first search allows us to take the advantages of both algorithms. With the help of best-first search, at each step, we can choose the most promising node. In the best first search algorithm, we expand the node which is closest to the goal node and the closest cost is estimated by heuristic function, i.e.<br></br><br></br>

                    <b>f(n)= g(n).</b> Where, <b>h(n)</b>= estimated cost from node n to the goal.<br></br><br></br>

                    The greedy best first algorithm is implemented by the <b>priority queue.</b><br></br><br></br>

                    <b>Advantages:</b> Best first search can switch between BFS and DFS by gaining the advantages of both the algorithms. This algorithm is more efficient than BFS and DFS algorithms.<br></br><br></br>

                    <b>Disadvantages:</b> It can behave as an unguided depth-first search in the worst case scenario. It can get stuck in a loop as DFS. This algorithm is not optimal.<br></br><br></br>
                    </p>
                </Col>
                <Col xl={4}>
                    <img src={samplegif} style={{height:"100%", width:"150%"}} alt="algogif"/>
                </Col>
            </Row>
            </div>
        </Container>
  
        <Container>
            <h1 className="header-abt text-left pt-5 grad-text" id="psuedocode">Psuedocode</h1>

            <div className="sec">
            
                    <p style={{textAlign:"left", lineHeight:"25px"}}>
                        <b style={{fontSize:"20px"}}>Best first search algorithm:</b> <br></br><br></br>
                        <b>Step 1:</b> Place the starting node into the OPEN list. <br></br><br></br>
                        <b>Step 2:</b> If the OPEN list is empty, Stop and return failure. <br></br><br></br>
                        <b>Step 3:</b> Remove the node n, from the OPEN list which has the lowest value of h(n), and places it in the CLOSED list. <br></br><br></br>
                        <b>Step 4:</b> Expand the node n, and generate the successors of node n. <br></br><br></br>
                        <b>Step 5:</b> Check each successor of node n, and find whether any node is a goal node or not. If any successor node is goal node, then return success and terminate the search, else proceed to Step 6. <br></br><br></br>
                        <b>Step 6:</b> For each successor node, algorithm checks for evaluation function f(n), and then check if the node has been in either OPEN or CLOSED list. If the node has not been in both list, then add it to the OPEN list. <br></br><br></br>
                        <b>Step 7:</b> Return to Step 2.
                    </p>
          
            </div>
        </Container>


        <Container>
            
            <h1 className="header-abt text-left pt-5 grad-text" id="code">Code</h1>

            <div className="sec" style={{backgroundColor:"#eee"}}>
            <Row>
            <p style={{textAlign:"left", lineHeight:"20px" , paddingLeft:"50px", paddingTop:"30px"}}>
              
            <code>{"function getNeighbours(node, grid) {"}</code><br></br>
            &ensp;&ensp;<code>{"let neighbours = [];"}</code><br></br>
            &ensp;&ensp;<code>{"let { row, col } = node;"}</code><br></br>
            &ensp;&ensp;<code>{"if (row !== 0) neighbours.push(grid[row - 1][col]);"}</code><br></br>
            &ensp;&ensp;<code>{"if (col !== grid[0].length - 1) neighbours.push(grid[row][col + 1]);"}</code><br></br>
            &ensp;&ensp;<code>{"if (row !== grid.length - 1) neighbours.push(grid[row + 1][col]);"}</code><br></br>
            &ensp;&ensp;<code>{"if (col !== 0) neighbours.push(grid[row][col - 1]);"}</code><br></br>
            &ensp;&ensp;<code>{"return neighbours.filter("}</code><br></br>
            &ensp;&ensp;<code>{"(neighbour) => !neighbour.isWall && !neighbour.isVisited"}</code><br></br>
            &ensp;&ensp;<code>{" );"}</code><br></br>
            <code>{"}"}</code><br></br>
            <code>{""}</code><br></br>
            <code>{"function manhattenDistance(node, finishNode) {"}</code><br></br>
            &ensp;&ensp;<code>{"let x = Math.abs(node.row - finishNode.row);"}</code><br></br>
            &ensp;&ensp;<code>{"let y = Math.abs(node.col - finishNode.col);"}</code><br></br>
            &ensp;&ensp;<code>{"return x + y;"}</code><br></br>
            <code>{"}"}</code><br></br>
            <code>{""}</code><br></br>
            <code>{"function neighbourNotInUnvisitedNodes(neighbour, unvisitedNodes) {"}</code><br></br>
            &ensp;&ensp;<code>{"for (let node of unvisitedNodes) {"}</code><br></br>
            &ensp;&ensp;&ensp;&ensp;<code>{"if (node.row === neighbour.row && node.col === neighbour.col) {"}</code><br></br>
            &ensp;&ensp;&ensp;&ensp;<code>{"return false;"}</code><br></br>
            &ensp;&ensp;<code>{"}"}</code><br></br>
            <code>{"}"}</code><br></br>
            <code>{"return true;"}</code><br></br>
            <code>{"}"}</code><br></br>
            
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