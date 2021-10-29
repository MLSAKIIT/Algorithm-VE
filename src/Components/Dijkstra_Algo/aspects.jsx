import React from "react";
import {Container, Col, Image, Row} from 'react-bootstrap'
import '../../AlgoPage.css'


import samplegif from "../../Assets/Dijkstra_Animation.gif"

export default function Aspects() 
{
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
                    <p style={{textAlign:"justify", lineHeight:"30px", fontSize:"20px", marginTop:"100px", marginLeft:"25px"}}>
                    1. Create a set <b>sptSet</b> (shortest path tree set) that keeps track of <b>vertices</b> included in the shortest-path tree, i.e., whose <b>minimum</b> distance from the source is calculated and finalized. Initially, this set is <b>empty</b>. <br/><br/>2. Assign a distance value to all vertices in the input graph. Initialize all distance values as <b>INFINITE</b>. Assign distance value as 0 for the source vertex so that it is picked first. <br/><br/>3. While sptSet doesn’t include all vertices<br/> a) Pick a vertex <b>u</b> which is not there in sptSet and has a minimum distance value. <br/>b) Include u to <b>sptSet</b>. <br/>c) Update distance value of all adjacent vertices of u. To update the distance values, iterate through all <b>adjacent</b> vertices. For every adjacent vertex v, if the <b>sum</b> of distance value of u (from source) and weight of edge u-v, is less than the distance value of v, then <b>update</b> the distance value of v.</p>
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
                <Col xl={7}>
                    <h3 style={{textAlign: "left", lineHeight: "40px", marginLeft: "80px", marginTop: "120px"}}>
                        
                        function Dijkstra(Graph, source):<br/>
                        create vertex set Q<br/>
 
                        for each vertex v in Graph: <br/>           
                            dist[v] ← INFINITY <br/>                
                            prev[v] ← UNDEFINED <br/>               
                            add v to Q <br/>                  
                        dist[source] ← 0  <br/>  

                         while Q is not empty:<br/>
                            u ← vertex in Q with min dist[u] <br/> 
                                                                
                            remove u from Q <br/>                   
                        
                        
                        
                    </h3>
                </Col>
                <Col xl={4}>
                    <h3 style={{textAlign: "left", lineHeight: "40px", marginRight: "10px", marginTop: "170px"}}>
                   
                            
                            for each neighbor v of u still in Q: <br/>
                                alt ← dist[u] + length(u, v) <br/>
                                if alt &lt; dist[v]: <br/>           
                                    dist[v] ← alt<br/>
                                    prev[v] ← u<br/>

                        return dist[], prev[]<br/>
                    </h3>
                </Col>
            </Row>
            </div>
        </Container>


        <Container style={{marginTop: "80px"}}>
            
            <h1 className="header-abt text-left pt-5 grad-text" id="code">Code</h1>

            <div className="sec1" style={{backgroundColor:"#eee"}}>
            <Row>
            
            <p style={{textAlign:"left", lineHeight:"20px" , paddingLeft:"50px", paddingTop:"30px"}}>
              
            <code>{"function dijkstra(graph, src) {"}</code><br></br>
            <code>{"let dist = new Array(V);"}</code><br></br>
            <code>{"let sptSet = new Array(V);"}</code><br></br>
            <code>{"for(let i = 0; i < V; i++) {"}</code><br></br>
            &ensp; <code>{"dist[i] = Number.MAX_VALUE;"}</code><br></br>
            &ensp; <code>{"sptSet[i] = false;"}</code><br></br>
            <code>{"}"}</code><br></br>
            <code>{"dist[src] = 0;"}</code><br></br>
            <code>{"for(let count = 0; count < V - 1; count++) {"}</code><br></br>
            &ensp; <code>{"let u = minDistance(dist, sptSet);"}</code><br></br>
            &ensp; <code>{"sptSet[u] = true;"}</code><br></br>
            <code>{"for(let v = 0; v < V; v++) {"}</code><br></br>
            &ensp; <code>{"if (!sptSet[v] && graph[u][v] != 0 && dist[u] != Number.MAX_VALUE && dist[u] + graph[u][v] < dist[v]) {"}</code><br></br>
            &ensp; &ensp;<code>{"dist[v] = dist[u] + graph[u][v];"}</code><br></br>
            &ensp; &ensp; <code>{"}"}</code><br></br>
            &ensp; <code>{"}"}</code><br></br>
            <code>{"}"}</code><br></br>
            <code>{""}</code><br></br>
            <code>{"printSolution(dist);"}</code><br></br>
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