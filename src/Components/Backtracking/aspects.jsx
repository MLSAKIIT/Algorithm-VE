import React from "react";
import {Container, Col, Image, Row} from 'react-bootstrap'
import '../../AlgoPage.css'
import SudokuSolver from './SudokuSolver'
import './style.css'
import samplegif from "../../Assets/backtrackalgo_gif.gif"

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
                    Assume given set of some elements, say w[1] … w[n]. Tree diagrams can be used to design backtracking algorithms. The following tree diagram depicts approach of generating variable sized tuple.<br></br><br></br>

                    A node represents function call and a branch represents candidate element. The root node contains n children. In other words, root considers every element of the set as different branch. The next level sub-trees correspond to the subsets that includes the parent node. The branches at each level represent tuple element to be considered. For example, if we are at level 1, tuple_vector[1] can take any value of n branches generated. If we are at level 2 of left most node, tuple_vector[2] can take any value of (n-1) branches generated, and so on…<br></br><br />

                    For example the left most child of root generates all those subsets that include w[1]. Similarly the second child of root generates all those subsets that includes w[2] and excludes w[1].<br></br><br />

                    As we go down along depth of tree we perform required operation on elements so far, and if the current sub-solution is satisfying explicit constraints, we will continue to generate child nodes further. Whenever the constraints are not met, we stop further generation of sub-trees of that node, and backtrack to previous node to explore the nodes not yet explored. In many scenarios, it saves considerable amount of processing time.
                    <br></br><br />

                    The tree should trigger a clue to implement the backtracking algorithm. It prints all those subsets whose solution meeting required condition. We need to explore the nodes along the breadth and depth of the tree. Generating nodes along breadth is controlled by loop and nodes along the depth are generated using recursion (post order traversal). <br></br><br />
                    </p>
                </Col>
                <Col xl={4}>
                    <img src={samplegif} style={{height:"100%", width:"100%"}} alt="algogif"/>
                </Col>
            </Row>
            </div>
        </Container>
  
        <Container>
            <h1 className="header-abt text-left pt-5 grad-text" id="psuedocode">Psuedocode</h1>
            <div className="sec" style={{textAlign:"left"}}>
                <h5>                
                    <code style={{color:"green"}}>{"// pseudo code"}</code> <br />
                    <code>{"bool BacktrackingSolve(configuration Conf)"}</code> <br />
                    <code>{"{"}</code> <br />
                    &emsp;<code style={{color:"green"}}>{"// Base case"}</code><br />
                    &emsp;<code>{"if (no more choices):"}</code><br /> 
                    &emsp;&emsp;<code>{"if (whether Conf is goal state)"}</code> <br />
                    &emsp;&emsp;&emsp;<code>{"return true"}</code> <br />
                    &emsp;&emsp;<code>{"else"}</code> <br />
                    &emsp;&emsp;&emsp;<code>{"return false"}</code><br />
                    &emsp;<code style={{color:"green"}}>{"// recursively making a choice c"}</code> <br />
                    &emsp;<code>{"for (all available choices) {"}</code> <br />
                    &emsp;&emsp;<code style={{color:"green"}}>{"// make a choice"}</code> <br />
                    &emsp;&emsp;<code>{"Make one choice c and update the Conf"}</code> <br />
                    &emsp;&emsp;<code>{"status = BacktrackingSolve(updated conf)"}</code> <br />
                    &emsp;&emsp;<code>{"if (status is true)"}</code> <br />
                    &emsp;&emsp;&emsp;<code>{"Execute some logics"}</code> <br />
                    &emsp;&emsp;<code>{"else"}</code> <br />
                    &emsp;&emsp;&emsp;<code>{"Unmake the choice c and revert to old Conf"}</code> <br />
                    &emsp;<code>{"}"}</code><br />
                    &emsp;<code>{"return false"}</code> <br />
                    <code>{"}"}</code> <br />
                </h5>
            </div>
        </Container>


        <Container>
            <h1 className="header-abt text-left pt-5 grad-text" id="code">Code</h1>

            <div className="sec" style={{backgroundColor:"#ffffb3", padding:"15px"}}>
                <Row>
                <Col>
                    <p style={{textAlign:"left" , lineHeight:"20px"}}>                    
                        <code style={{color:"green"}}>{"//function type variable solveSudoku is created"}</code> <br />
                        <code>{"var solveSudoku = function(board) {"}</code>  <br />
                        &emsp;<code style={{color:"green"}}>{"//sudokusolver is recursively called till we obtain the solution"}</code> <br />
                        &emsp;<code>{"function sudokusolver(board,i,j) {"}</code> <br /> 
                        &emsp;&emsp;<code>{"if(i===9)"}</code> <br />
                        &emsp;&emsp;&emsp;<code>{"return true;"}</code> <br />
                        &emsp;&emsp;<code style={{color:"green"}}>{"//move to next line"}</code> <br />
                        &emsp;&emsp;<code>{"if(j===9)"}</code> <br />
                        &emsp;&emsp;&emsp;<code>{"return sudokusolver(board,i+1,0);"}</code> <br />
                        &emsp;&emsp;<code>{"if(board[i][j]==='.') {"}</code> <br />
                        &emsp;&emsp;&emsp;<code>{"let char = '1';"}</code> <br />
                        &emsp;&emsp;&emsp;<code>{"while(char <= 9){"}</code>  <br />
                        &emsp;&emsp;&emsp;&emsp;<code>{"if(isValidSudoku(i, j, char)) {"}</code>  <br />
                        &emsp;&emsp;&emsp;&emsp;&emsp;<code>{"board[i][j] = char;"}</code> <br />
                        &emsp;&emsp;&emsp;&emsp;&emsp;<code>{"if(sudokusolver(board,i,j+1))"}</code> <br />
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<code>{"return true;"}</code> <br />
                        &emsp;&emsp;&emsp;&emsp;&emsp;<code>{"else"}</code>  <br />
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<code>{"board[i][j] = '.';"}</code> <br />
                        &emsp;&emsp;&emsp;&emsp;<code>{"}"}</code> <br />
                        &emsp;&emsp;&emsp;&emsp;<code>{"char = (parseInt(char) + 1).toString();"}</code><br />
                        &emsp;&emsp;&emsp;<code>{"}"}</code> <br />
                        &emsp;&emsp;&emsp;<code>{"return false;"}</code> <br />
                        &emsp;&emsp;<code>{"}"}</code> <br />
                        &emsp;&emsp;<code style={{borderBottom:"none"}} >{"else"}</code> <br />
                        &emsp;&emsp;&emsp;&emsp;<code style={{borderBottom:"none"}} >{"return sudokusolver(board,i,j+1);"}</code> <br />
                        &emsp;&emsp;<code style={{borderBottom:"none"}} >{"}"}</code> <br />
                    </p>
                    </Col>
                    <Col>
                        <p style={{textAlign:"left"}}>  
                        &emsp;<code style={{color:"green"}}>{"//check if the current char at index [row,col] is valid or not"}</code> <br />
                        &emsp;<code>{"function isValidSudoku(row, col, char) {"}</code>  <br />
                        &emsp;&emsp;<code style={{color:"green"}}>{"//check if char in present in row"}</code> <br />
                        &emsp;&emsp;<code>{"for(let i=0;i<9;i++)"}</code>  <br />
                        &emsp;&emsp;&emsp;<code>{"if(board[row][i]===char)"}</code>  <br />
                        &emsp;&emsp;&emsp;&emsp;<code>{"return false;"}</code> <br />
                        &emsp;&emsp;<code style={{color:"green"}}>{"//check of char is present in column"}</code> <br />
                        &emsp;&emsp;<code>{"for(let i=0;i<9;i++)"}</code>  <br />
                        &emsp;&emsp;&emsp;<code>{"if(board[i][col]===char)"}</code>  <br />
                        &emsp;&emsp;&emsp;&emsp;<code>{"return false;"}</code> <br />
                        &emsp;&emsp;&emsp;<code style={{color:"green"}}>{"//check if char is present in box"}</code> <br />
                        &emsp;&emsp;<code>{"let x=Math.floor(row/3)*3;"}</code> <br />
                        &emsp;&emsp;<code>{"let y=Math.floor(col/3)*3;"}</code><br />
                        &emsp;&emsp;<code>{"for(let i=0;i<3;i++)"}</code>  <br />
                        &emsp;&emsp;&emsp;<code>{"for(let j=0;j<3;j++)"}</code>  <br />
                        &emsp;&emsp;&emsp;&emsp;<code>{"if(board[x + i][y + j]===char)"}</code>  <br />
                        &emsp;&emsp;&emsp;&emsp;&emsp;<code>{"return false;"}</code><br />
                        &emsp;&emsp;&emsp;&emsp;<code>{"return true;"}</code> <br />
                        &emsp;&emsp;<code>{"}"}</code> <br />
                        &emsp;&emsp;<code>{"sudokusolver(board,0,0);"}</code> <br />
                        <code>{"};"}</code> <br />
                        </p>
                </Col>
                </Row>
            </div>
        </Container>

        <Container>
            <h1 className="header-abt text-left pt-5 grad-text" id="visual">Visualization</h1>
            <div className="sec">
                <SudokuSolver style={{ floaat : "right"}}  />
            </div>
        </Container>


    </div>
    )
}