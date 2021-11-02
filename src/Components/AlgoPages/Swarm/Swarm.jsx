import React from "react";
import './Swarm.css';
import Hero from "./hero";
import About from "./about";
import Aspects from "./aspects";

export default function Swarm() {
return(
    <div className="Swarm">
        <Hero/>
        <About/>
        <Aspects/>
    </div>
)
}