import React from "react";
import Landing from "./Landing";

import '../Pathfinder/Pathfinder.css'
import GetStartPath from "./GetStartPath";

export default function Pathfinder() {
    return (
        <div className="pathfinder">
            <Landing/>
            <GetStartPath/>
        </div>
    )
}