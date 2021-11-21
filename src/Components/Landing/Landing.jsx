import React from 'react';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import './Landing.css';
import Top from './Top/Top';
import Navbars from './Navbar/Navbars';
import Algorithms from './Algorithms/Algorithms';
import Projects from './Projects/Projects';

const Landing = () => {

    return (
        <>
            <Top/>
            <Navbars/>
            <Hero/>
            <Algorithms/>
            <Projects/>
            <Footer />
        </>
    );
}

export default Landing;