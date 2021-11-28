import React from 'react'
import GetStartPath from '../../Pathfinder/GetStartPath'
import Landing from '../../Pathfinder/Landing'
import About from './About/About'
import Video from './Video/Video'

const AlgoPage = () => {
    return (
        <div>
            <Landing/>
            <GetStartPath/>
            <About/>
            <Video/>
        </div>
    )
}

export default AlgoPage
