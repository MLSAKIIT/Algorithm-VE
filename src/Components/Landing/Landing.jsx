import React from 'react';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import './Landing.css';
import Top from './Top/Top';
import Navbars from './Navbar/Navbars';
import Projects from './Projects/Projects';
import Algorithms from './Algorithms/Algorithms';


const Landing = () => {

    return (
        <>
            <Top/>
            <Navbars/>
            <Hero/>
            <Projects/>
            <Algorithms/>
            <Footer />
        </>
    );
}

export default Landing;