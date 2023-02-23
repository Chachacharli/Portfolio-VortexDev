import React from "react";
import Carousel from 'react-multi-carousel';

import { CardCarrousel } from "./CardCarrouserl";

import 'react-multi-carousel/lib/styles.css';

import '../../styles/container-carrousel.css'

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };



  const HABILIDADES = [
    {
      name: "HTML",
      imagen: "HTML.png"
    },
    {
      name: "CSS",
      imagen: "CSS.png"
    },
    {
      name: "JavaScript",
      imagen: "JS.png"
    },
    {
      name: "Boostrap",
      imagen: "BOOSTRAP.png"
    },
    {
      name: "REACT",
      imagen: "REACT.png"
    },
    {
      name: "PYTHON",
      imagen: "PYTHON.png"
    },
    {
      name: "DJANGO",
      imagen: "DJANGO.png"
    },
    {
      name: "FIGMA",
      imagen: "Android-studio.png"
    },
    {
      name: "FIGMA",
      imagen: "FIGMA.png"
    },
    {
      name: "ADOBE XD",
      imagen: "XD.png"
    },


  ]

export const CarrouselCards = () =>{
    return(

        <div className="container">
            <Carousel 
                transitionDuration={500}
                showDots={true}
                responsive={responsive}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}

            >
                {
                  HABILIDADES.map( (elem)=>{
                    return(
                      <CardCarrousel imagen={elem.imagen}></CardCarrousel>
                    )
                  } )
                }


            </Carousel>
        </div>
        
    )
}