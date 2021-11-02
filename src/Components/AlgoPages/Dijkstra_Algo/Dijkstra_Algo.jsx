import React from "react";
import '../../../AlgoPage.css'
import Hero from "./hero";
import About from "./about";
import Aspects from "./aspects";
import Visualiser from "./Visualiser";

export default function Dijkstra() {
return(
    <div className="Dijkstra">
        <Hero/>
        <About/>
        <Aspects/>
        {/* <Visualiser/> */}
    </div>
)
}