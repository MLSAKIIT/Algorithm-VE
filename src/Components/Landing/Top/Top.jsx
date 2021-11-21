import { useLax } from 'use-lax';
import React from 'react';
import TopAlgo from '../TopAlgo/TopAlgo';
import '../TopAlgo/TopAlgo.css';
import SectionOne from '../TopAlgo/SectionOne';


function Top() {

    useLax();

    return (
        <div id="main" style={{ backgroundImage: `url('https://i.postimg.cc/3J39qH1t/rocket.png')`, overflowX: 'hidden', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', zIndex: '1' }}>
            <TopAlgo />
            <SectionOne />
        </div>
    );
}

export default Top;