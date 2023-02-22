import React from "react";

import '../../styles/sectionbasic.css'
import '../../styles/sobremi.css' 
import Presentacion from '../../assets/presentacion.jpg'
import PDF from '../../assets/CV.pdf'


const TextoSobreMi = () =>{
    return(
        <div className="container"> 
        <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quidem eligendi sit, 
            voluptatum nihil architecto nisi doloremque deleniti animi reprehenderit. In quibusdam laboriosam maxime molestiae 
            consequatur cumque, provident facilis ducimus? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, doloribus 
            expedita? Non fuga veritatis, ipsum impedit nulla nemo sit dolorem placeat saepe optio, aut possimus laboriosam voluptatibus 
            laudantium quasi quas! 
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
