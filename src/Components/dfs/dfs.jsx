import React from "react";
import '../../AlgoPage.css'
import Hero from "./hero";
import About from "./about";
import Aspects from "./aspects";

export default function depthFirst() {
return(
    <div className="dfsearch">
        <Hero/>
        <About/>
        <Aspects/>
    </div>
)
}