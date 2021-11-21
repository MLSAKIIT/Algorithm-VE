import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ParticleBackground from '../ParticleBackground/ParticleBackground'
import './Hero.css';

const Hero = () => {

    return (
        <div className="Hero" id="Landing_Hero"> 
            <div className="hero_upper_container">
                <div className="hero_container">
                    <ParticleBackground/>
                    <Carousel infiniteLoop autoPlay className="carousel-style" showThumbs={false} showStatus={false}>
                        <div className="hero_image">
                            <h2 className="hero_algo_ve"><span className="hero_av">A</span>LGORITHM <span className="hero_av">V</span>E</h2>
                        </div>
                        <div className="hero_image">
                            <h2 className="hero_algo_ve">WHAT IS ALGORITHM VE</h2>
                            <p className="hero_algo_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="hero_image">
                            <h2 className="hero_algo_ve">WHAT ALGORITHM VE HAVE FOR YOU</h2>
                            <p className="hero_algo_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </Carousel>
                </div>
               
            </div>
        </div>
    );
}

export default Hero;