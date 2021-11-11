import React from 'react';
import Particles from 'react-tsparticles';
import particlesConfig from '../../Config/particle-config';

export default function Particle(){
    return(
        <div>
        <Particles         
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: '100vh',
          width: '100%',
          
        }} params={particlesConfig}/>
        </div>
    )
}