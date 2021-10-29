import React from 'react'
import '../Landing/Landing.css'
import HeroImg from "../../Assets/Hero.png";
import Path1 from "../../Assets/Path1.svg";

import Path4 from "../../Assets/Path5.svg";
import { ReactComponent as RectangleWhite } from "../../Assets/Rectangle7.svg";


// import WhyAlgo from "../WhyAlgo/WhyAlgo";
// import Footer from "../Footer/Footer";


export default function Landing() {
    return (
        <div className="landing pt-5">
            <div className="hero">
                <div class="my-auto">
                    <div className="d-flex justify-content-between">
                        <div>
                            <img
                                src={Path1}
                                alt="Logo"
                                style={{width: '43vw', zIndex: -1, position: 'absolute'}}
                            />
                        </div>
                            <div style={{paddingTop: '30vh', maxWidth: '37vw', position: 'absolute'}}>
                                <div className="p-3">
                                    <h1 style={{color: '#000', fontSize:'3.7em', fontWeight: '300'}}>VISUALIZE ALGORITHMS</h1>
                                    <h3 style={{color: '#000'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque</h3>
                                </div>
                            </div>
                            <div className="">
                                <img
                                    src={Path4}
                                    alt="Logo"
                                    style={{width: '40vw', zIndex: -1, position: 'absolute', right: 0, paddingTop: '40vh'}}
                                />
                            </div>
                        <div>
                            <img
                                src={HeroImg}
                                alt="Logo"
                                style={{width: '50vw'}}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="plate"></div>
    </div>
  );
}
