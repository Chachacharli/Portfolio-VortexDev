import React from "react";

import '../../styles/trabajo.css'

import { CardJob } from "./CardJob";

export const Trabajo = ( ) =>{

    return(
        <section id='Trabajo' className="section-basic-bg large">
            <div className="container text-center mx-auto mt-4 overflow-hidden">
                <div className="row g-2">
                    <div className="col-md-4 ">
                        <CardJob icon={'bi bi-bus-front-fill'} name='Nearest neighbor algorithm' tags='Python | Algoritmos' url = 'https://github.com/Chachacharli/Nearest-neighbor-algoritm' ></CardJob>
                    </div>
                    <div className="col-md-4">
                        <CardJob icon={'bi bi-box-seam-fill'} name='Knapsack problem greedy' tags='Python | Algoritmos | Notebook' url='https://github.com/Chachacharli/Knaspack-problem-Greedy-'></CardJob>
                    </div>
                    <div className="col-md-4">
                        <CardJob icon={'bi bi-phone'} name='NutriApp' tags='React-Native | Android' url='https://github.com/Chachacharli/NutriApp'></CardJob>
                    </div>

                </div>
                <div className="row g-2">
                <div className="col-md-8">
                        <CardJob icon={'bi bi-award-fill'} name='NutriApp' tags='React-Native' url='https://github.com/Chachacharli/Knaspack-problem-Greedy-'></CardJob>
                    </div>
                    <div className="col-md-4 ">
                        <CardJob icon={'bi bi-award-fill'} name='NutriApp' tags='React-Native' url='https://github.com/Chachacharli/Knaspack-problem-Greedy-'></CardJob>
                    </div>
                </div>
                <div className="row g-2">
                <div className="col-md-12">
                        <CardJob icon={'bi bi-globe'} name='CIIDIT Web' tags='NextJS | Jam-stack' url='https://rlucioporto.com/'></CardJob>
                    </div>

                </div>
            </div>
        </section>
    )
}