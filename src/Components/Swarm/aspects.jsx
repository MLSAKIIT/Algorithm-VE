import React from "react";
import {Container, Col, Image, Row} from 'react-bootstrap'
import '../../AlgoPage.css'
import S from './S.gif';
import code from './Swarm_Code.txt';

export default function Aspects() {
    return (
        <div className="aspects">
            <div className="container my-5">
            <br></br>
            <h2 className="as" style={{color:"black"}}>Important Aspects of the Swarm Algorithm</h2>
            </div>

        <Container> 
            <h1 className="header-abt text-left pt-5 grad-text" id="algo">Swarm Algorithm</h1>

            <div className="sec">
            <Row>
                <Col xl={8}>
                    <p style={{textAlign:"left", lineHeight:"20px"}}>
                    Step 1. Initialization Phase: All the vectors of the population of food source, , are initialized (i = 1…SN, where SN is population size) by scout bees and control parameters being set. Each  vector holds n variables, which is optimized, to minimize the objective function. The following equation is used for initialization phase:
                    where li and ui respectively are the lower and upper bound parameters of xi.<br/><br/>
                    Step 2.Employed Bees Phase: In this phase, the search for a new food source, , increases in order to have more nectar around the neighbourhood of the food source, . Once a neighbouring food source is found, its profitability or fitness is evaluated. The new neighbouring food source is defined by using following formula:
                    where xj is a random selected food source and Øi is a random number of [-a, a]. Once the new food source, vi, is produced its profitability is measured and a greedy selection is applied between  and . The exploration happens if the difference between xi − xj is large and the exploitation behaviour is when the difference is small. The fitness value of the solution, fiti(), is determined using following equation:
                    where  is the objective function value of solution.<br/><br/>
                    Step 3. Onlooker Phase: Onlooker bees that are waiting in the hive choose their food sources depending on probability values measured using the fitness value and the information shared by employed bees.<br/><br/>
                    Step 4. Scout Bees Phase: The scout bees are those unemployed bees that choose their food sources randomly. Employed bees whose fitness values cannot be improved through predetermined number of iterations, called as limit or abandonment criteria, become the scout bees and all their food sources get abandoned.<br/><br/>
                    Step 5. The best fitness value and the position associated to that value are memorized.<br/><br/>
                    Step 6. Termination Checking Phase: If the termination condition is met, the programme terminates, otherwise the programme returns to Step 2 and repeats until the termination condition is met.<br/></p>
                </Col>
                <Col xl={4}>
                    <img src={S} style={{height:"100%", width:"120%"}} alt="logo"></img>
                </Col>
            </Row>
            </div>
        </Container>
  
        <Container>
            <h1 className="header-abt text-left pt-5 grad-text" id="psuedocode">Swarm Psuedocode</h1>

            <div className="psd">
            <Row>
                <Col xl={6}>
                    <h3>                    
                    Step  1. Initialization 
                For each particle i=1....Np , do<br/>(a) Initialize the particle’s position with a uniformly distribution as (0)~U(LB, UB), where LB and UB represent the lower and upper bounds of the search space<br/>(b) Initialize  to its initial position:pbest(i,0)=p(0).<br/>(c) Initialize  to the minimal value of the swarm:gbest(0)=argminf[p(0)] .<br/>(d) Initialize velocity:Vi~U(-|UB-LB|,|UB-LB|) .<br/>
                    </h3>
                </Col>
                <Col xl={6}>
                    <h3>
                Step  2. Repeat until a termination criteria is met<br/>For each particle i=1....N, do<br/>(a) Pick random numbers:r1,r2~U(0,1).<br/>(b) Update particle’s velocity. See formula (2).<br/> (c) Update particle’s position. See formula (3).<br/>(d) If , do:<br/>(i) Update the best known position of particle.<br/>(ii) If , update the swarm’s best known position.<br/>
                Step  3. Output  that holds the best found solution.<br/>
                    </h3>
                </Col>
            </Row>
            </div>
        </Container>

        <Container>
            <h1 className="header-abt text-left pt-5 grad-text" id="code">Swarm Code</h1>
            <div className="comb">
            <Row>
            <p>
            <iframe src={code} height="1000" width="3000" >
            </iframe>
            </p>
            </Row>
            </div>
        </Container>

        </div>
    )
}