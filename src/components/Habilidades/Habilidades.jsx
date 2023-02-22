import React from "react";

import '../../styles/habilidades.css'

import  {CarrouselCards}  from "./CarrouselCards";

export const Habilidades = () =>{
    return(
        <section id="Habilidades" className="section-basic-bg">
            <h4 className="heading-habilidades">Habilidades</h4>
            <CarrouselCards></CarrouselCards>
        </section>
    )
}