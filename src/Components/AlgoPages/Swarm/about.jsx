import React from "react";
import '../../../AlgoPage.css'

import {Container, Col, Image, Row} from 'react-bootstrap'


export default function About() {
return( 
    <div className="about">

      <div className="container my-5">
      <br></br>
      <h2 className="ts">What is Swarm Algorithm?</h2>

      <h4 className="my-5" id="ts-para">
      Swarm Algorithm is the collective behavior of decentralized, self-organized systems, natural or artificial.The concept is employed in work on artificial intelligence. The expression was introduced by Gerardo Beni and Jing Wang in 1989, in the context of cellular robotic systems.
      SI systems consist typically of a population of simple agents or boids interacting locally with one another and with their environment.The inspiration often comes from nature, especially biological systems. The agents follow very simple rules, and although there is no centralized control structure dictating how individual agents should behave, local, and to a certain degree random, interactions between such agents lead to the emergence of "intelligent" global behavior, unknown to the individual agents.
      Examples of swarm intelligence in natural systems include ant colonies, bee colonies, bird flocking, hawks hunting, animal herding, bacterial growth, fish schooling and microbial intelligence.
      The application of swarm principles to robots is called swarm robotics while swarm intelligence refers to the more general set of algorithms. Swarm prediction has been used in the context of forecasting problems. Similar approaches to those proposed for swarm robotics are considered for genetically modified organisms in synthetic collective intelligence.
        </h4>

      </div>

    </div>
    
)
}