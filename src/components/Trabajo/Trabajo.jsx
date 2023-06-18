import React from "react";

import '../../styles/trabajo.css'

import { CardJob } from "./CardJob";
import { useEffect, useRef  } from "react";

export const Trabajo = ( ) =>{
    const myRef  = useRef();

    useEffect(() =>{
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    console.log(entry)
                    entry.target.classList.add('show');
                }else{
                    console.log(entry)
                    
                    entry.target.classList.remove('show');

                }
            })
        })
        const hiddenElemtens = document.querySelectorAll('.hidden')
        hiddenElemtens.forEach((el) => observer.observe(el))
    },[])



    return(
        <section id='Trabajo' className="section-basic-bg large">
            <div id="trabajos-cards-container" className="container text-center mx-auto mt-4 overflow-hidden ">
                <div className="row g-2">
                    <div className="col-md-4 hidden">
                        <CardJob icon={'bi bi-bus-front-fill'} name='Nearest neighbor algorithm' tags='Python | Algoritmos' url = 'https://github.com/Chachacharli/Nearest-neighbor-algoritm' ></CardJob>
                    </div>
                    <div className="col-md-4 hidden">
                        <CardJob icon={'bi bi-box-seam-fill'} name='Knapsack problem greedy' tags='Python | Algoritmos | Notebook' url='https://github.com/Chachacharli/Knaspack-problem-Greedy-'></CardJob>
                    </div>
                    <div className="col-md-4 hidden">
                        <CardJob icon={'bi bi-phone'} name='NutriApp' tags='React-Native | Android' url='https://github.com/Chachacharli/NutriApp'></CardJob>
                    </div>

                </div>
                <div className="row g-2">
                <div className="col-md-8 hidden">
                        <CardJob icon={'bi bi-brush-fill'} name='Artexpedia' tags='NextJs | Mobile First' url='https://artexpedia.vercel.app/'></CardJob>
                    </div>
                    <div className="col-md-4 hidden">
                        <CardJob icon={'bi bi-battery-charging'} name='Supercapacitores Software' tags='Python | Data Analysis' url='https://github.com/Chachacharli/Supercapacitores'></CardJob>
                    </div>
                </div>
                <div className="row g-2">
                <div className="col-md-12 hidden">
                        <CardJob icon={'bi bi-globe'} name='CIIDIT Web' tags='React | Blog' url='https://rlucioporto.com/'></CardJob>
                    </div>

                </div>
            </div>
        </section>
    )
}