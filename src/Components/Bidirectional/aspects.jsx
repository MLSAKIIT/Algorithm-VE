import React from "react";
import {Container, Col, Image, Row} from 'react-bootstrap'
import '../../AlgoPage.css'

import samplegif from "../../Assets/Dijkstra_Animation.gif"

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
                    Let the node at which we are starting at be called the initial node. Let the distance of node Y be the distance from the initial node to Y. Dijkstra's algorithm will initially start with infinite distances and will try to improve them step by step.<br></br><br></br>

                    Mark all nodes unvisited. Create a set of all the unvisited nodes called the unvisited set.
                    Assign to every node a tentative distance value: set it to zero for our initial node and to infinity for all other nodes. Set the initial node as current.<br></br>
                    For the current node, consider all of its unvisited neighbours and calculate their tentative distances through the current node. Compare the newly calculated tentative distance to the current assigned value and assign the smaller one. For example, if the current node A is marked with a distance of 6, and the edge connecting it with a neighbour B has length 2, then the distance to B through A will be 6 + 2 = 8. If B was previously marked with a distance greater than 8 then change it to 8. Otherwise, the current value will be kept.<br></br>
                    When we are done considering all of the unvisited neighbours of the current node, mark the current node as visited and remove it from the unvisited set. A visited node will never be checked again.<br></br>
                    If the destination node has been marked visited (when planning a route between two specific nodes) or if the smallest tentative distance among the nodes in the unvisited set is infinity (when planning a complete traversal; occurs when there is no connection between the initial node and remaining unvisited nodes), then stop. The algorithm has finished.<br></br>
                    Otherwise, select the unvisited node that is marked with the smallest tentative distance, set it as the new "current node", and go back to step 3.<br></br>
                    When planning a route, it is actually not necessary to wait until the destination node is "visited" as above: the algorithm can stop once the destination node has the smallest tentative distance among all "unvisited" nodes (and thus could be selected as the next "current").<br></br></p>
                </Col>
                <Col xl={4}>
                    <img src={samplegif} style={{height:"100%", width:"100%"}} alt="algogif"/>
                </Col>
            </Row>
            </div>
        </Container>
  
        <Container>
            <h1 className="header-abt text-left pt-5 grad-text" id="psuedocode">Psuedocode</h1>

            <div className="sec">
            <Row>
                <Col xl={8}>
                    <h3>                    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque officiis dolore corporis mollitia ipsam vel facilis ad quaerat tempore iure ex omnis recusandae, placeat laboriosam amet id labore nemo?
                    </h3>
                </Col>
                <Col xl={4}>
                    <h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque officiis dolore corporis mollitia ipsam vel facilis ad quaerat tempore iure ex omnis recusandae, placeat laboriosam amet id labore nemo?
                    </h3>
                </Col>
            </Row>
            </div>
        </Container>


        <Container>
            
            <h1 className="header-abt text-left pt-5 grad-text" id="code">Code</h1>

            <div className="sec1" style={{backgroundColor:"#eee"}}>
            <Row>
            
            <p style={{textAlign:"left", lineHeight:"20px" , paddingLeft:"50px", paddingTop:"30px"}}>
              
            <code>{"export function bidirectionalSearch(grid, startRow, startCol, finRow, finCol, checkboxVal) {"}</code><br></br>
            <code>{"const visitedNodesInOrder = [];"}</code><br></br>
            <code>{"let q1 = [], q2 = [];"}</code><br></br>
            <code>{"let dirx = [-1, 1, 0, 0];"}</code><br></br>
            <code>{"let diry = [0, 0, -1, 1];"}</code><br></br>
            <code>{"q1.push([startRow, startCol]);"}</code><br></br>
            <code>{" q2.push([finRow, finCol]);"}</code><br></br>
            <code>{"let table = [];"}</code><br></br>
            <code>{""}</code><br></br>
            <code>{" for (let i = 0; i < grid.length; ++i) {"}</code><br></br>
            <code>{"let tmp = [];"}</code><br></br>
            <code>{""}</code><br></br>
            <code>{"for (let j = 0; j < grid[0].length; ++j)"}</code><br></br>
            <code>{"tmp.push(false);"}</code><br></br>
            <code>{""}</code><br></br>
            <code>{"table.push(tmp);"}</code><br></br>
            <code>{"}"}</code><br></br>
            <code>{""}</code><br></br>
            <code>{"if (checkboxVal) {"}</code><br></br>
            <code>{"dirx = [-1, -1, -1, 0, 0, 1, 1, 1];"}</code><br></br>
            <code>{"diry = [-1, 0, 1, -1, 1, -1, 0, 1];"}</code><br></br>
            <code>{"}"}</code><br></br>
            <code>{""}</code><br></br>
            <code>{"while (q1.length || q2.length) {"}</code><br></br>
            <code>{"const [row1, col1] = (!q1.length) ? [-1, -1]:q1.shift();"}</code><br></br>
            <code>{"const [row2, col2] = (!q2.length) ? [-1, -1]:q2.shift();"}</code><br></br>
            <code>{"if (isValid(grid, row1, col1)) grid[row1][col1].isVisited = true;"}</code><br></br>
            <code>{"if (isValid(grid, row2, col2)) table[row2][col2] = true;"}</code><br></br>
            <code>{"let newLvl = [];"}</code><br></br>
            <code>{""}</code><br></br>
            <code>{"for (let i = 0; i < dirx.length; ++i) {"}</code><br></br>
            <code>{"const newRow1 = row1 + dirx[i];"}</code><br></br>
            <code>{"const newRow2 = row2 + dirx[i];"}</code><br></br>
            <code>{"const newCol1 = col1 + diry[i];"}</code><br></br>
            <code>{"const newCol2 = col2 + diry[i];"}</code><br></br>
            <code>{""}</code><br></br>
            <code>{"if (isValid(grid, row1, col1) && isValid(grid, newRow1, newCol1)) {"}</code><br></br>
            <code>{"if (!grid[newRow1][newCol1].isVisited && !grid[newRow1][newCol1].isWall) {"}</code><br></br>
            <code>{"if (table[newRow1][newCol1]) {"}</code><br></br>
            <code>{"if (newLvl.length) visitedNodesInOrder.push(newLvl);"}</code><br></br>
            <code>{"return [visitedNodesInOrder, grid[row1][col1], grid[newRow1][newCol1]];"}</code><br></br>
            <code>{"}"}</code><br></br>
            <code>{"grid[newRow1][newCol1].isVisited = true;"}</code><br></br>
            <code>{"grid[newRow1][newCol1].previousNode = grid[row1][col1];"}</code><br></br>
            <code>{"q1.push([newRow1, newCol1]);"}</code><br></br>
            <code>{"newLvl.push([newRow1, newCol1]);"}</code><br></br>
            <code>{"}"}</code><br></br>
            <code>{"}"}</code><br></br>
            <code>{"if (isValid(grid, row2, col2) && isValid(grid, newRow2, newCol2)) {"}</code><br></br>
            <code>{"if (!table[newRow2][newCol2] && !grid[newRow2][newCol2].isWall) {"}</code><br></br>
            <code>{"if (grid[newRow2][newCol2].isVisited) {"}</code><br></br>
            <code>{"if (newLvl.length) visitedNodesInOrder.push(newLvl);"}</code><br></br>
            <code>{"return [visitedNodesInOrder, grid[newRow2][newCol2], grid[row2][col2]];"}</code><br></br>
            <code>{"}"}</code><br></br>
            <code>{"table[newRow2][newCol2] = true;"}</code><br></br>
            <code>{"grid[newRow2][newCol2].previousNode = grid[row2][col2];"}</code><br></br>
            <code>{"q2.push([newRow2, newCol2]);"}</code><br></br>
            <code>{"newLvl.push([newRow2, newCol2]);"}</code><br></br>
            <code>{"}"}</code><br></br>
            <code>{"}"}</code><br></br>
            <code>{"}"}</code><br></br>
            <code>{"visitedNodesInOrder.push(newLvl);"}</code><br></br>
            <code>{"}"}</code><br></br>
            <code>{"return [visitedNodesInOrder, grid[startRow][startCol], grid[finRow][finCol]];"}</code><br></br>
            <code>{"}"}</code><br></br>
            <code>{"function isValid(grid, row, col) {"}</code><br></br>
            <code>{"return (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) ? false:true;"}</code><br></br>
            <code>{"}"}</code><br></br>
            

            </p>
            
            </Row>
            </div>
        </Container>

 


        </div>
    )
}