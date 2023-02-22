import React from "react";

import '../../styles/trabajo.css'

import { CardJob } from "./CardJob";

export const Trabajo = ( ) =>{

    return(
        <section id='Trabajo' className="section-basic-bg large">
            <div className="container text-center mx-auto mt-4 overflow-hidden">
                <div className="row g-2">
                    <div className="col-md-4 ">
                        <CardJob name='NutriApp' tags='React-Native'></CardJob>
                    </div>
                    <div className="col-md-4">
                        <CardJob name='NutriApp' tags='React-Native'></CardJob>
                    </div>
                    <div className="col-md-4">
                        <CardJob name='NutriApp' tags='React-Native'></CardJob>
                    </div>

                </div>
                <div className="row g-2">
                <div className="col-md-8">
                        <CardJob name='NutriApp' tags='React-Native'></CardJob>
                    </div>
                    <div className="col-md-4 ">
                        <CardJob name='NutriApp' tags='React-Native'></CardJob>
                    </div>
                </div>
                <div className="row g-2">
                <div className="col-md-12">
                        <CardJob name='NutriApp' tags='React-Native'></CardJob>
                    </div>

                </div>
            </div>
        </section>
    )
}