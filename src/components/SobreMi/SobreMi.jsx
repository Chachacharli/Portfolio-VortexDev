import React from "react";

import '../../styles/sectionbasic.css'
import '../../styles/sobremi.css' 
import Presentacion from '../../assets/presentacion.jpg'
import PDF from '../../assets/CV.pdf'


const TextoSobreMi = () =>{
    return(
        <div className="container d-flex justify-content-center align-items-center flex-column"> 
        <p className="text-description">
           Soy un estudiante de ingenieria en software cursando mi 8vo semestre de carrera en la UANL. 
           Tengo experiencia trabajando con frameworks como <strong>  React, NextJs y Django</strong>. Tengo conocimientos
           de diseno utilizando softwares como <strong>Inkscape, Ilustrator y Gimp. </strong> 
        </p>
        <p className="text-description">
            Tengo aspiraciones a trabajar en el campo de desarrollo de software trabajando en aplicaciones 
            y desarrollo de software especializado para clientes.
        </p>
     </div>
    )
}


const SobreMi = () =>{
    return(

        <section id="SobreMi" className="section-basic-bg">
            <div className="slide">
            </div>

            <div className="content-sm">
                <div className="container-img">
                    <img className="presentacion-img" src={Presentacion} alt="" />
                </div>
                <TextoSobreMi></TextoSobreMi>
                <a className="btn btn-primary btn-lg" href={PDF} target="_blank" rel='noreferrer'>Curriculum</a>
            </div>
        </section>

    )
}


export default SobreMi
