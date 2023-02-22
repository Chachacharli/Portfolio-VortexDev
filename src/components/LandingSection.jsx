import React from "react";

import BackGroudLanding from "./BackGroudLanding";

import '../styles/Landing.css'

import Logo from '../assets/logo5.png'
//import Blob1 from '../assets/blobanimation.svg'
//import Blob2 from  '../assets/blobanimation2.svg'



const LandingSection = () =>{
    return(
        
        <section id="Landing" className="backgroud-landing">
            <BackGroudLanding></BackGroudLanding>
            <div className="landing-main">
                <div className="content">
                    <img className="logo" src={Logo} alt="VortexDevLogo" />
                    <h1 className="landing-tittle">VortexDev</h1>
                    <div className="subtittle-landing">
                        <p>Front-end | Diseño | Innovación</p>
                    </div>
                </div>


            </div>
        </section> 
    )
}

export default LandingSection;