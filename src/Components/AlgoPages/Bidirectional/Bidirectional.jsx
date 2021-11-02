import React from "react";
import '../../../AlgoPage.css'

import Hero from "./hero";
import About from "./about";
import Aspects from "./aspects";

export default function Bidirectional() {
return(
    <div className="Bidirectional">
        <Hero/>
        <About/>
        <Aspects/>
    </div>
)
}