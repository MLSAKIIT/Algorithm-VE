import React from "react";
import '../../../AlgoPage.css'
import Hero from "./hero";
import About from "./about";
import Aspects from "./aspects";
import DfsVisualizer from "./dfsVisualizer";

export default function depthFirst() {
return(
    <div className="depth">
        <Hero/>
        <About/>
        <Aspects/>
        <DfsVisualizer/>
    </div>
)
}
//export default dfs;