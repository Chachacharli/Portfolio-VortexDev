import React from "react";

import '../../styles/trabajo.css'

import Icon from '../../assets/business-startup.svg'

export const CardJob = (props) => {
    return(
        <a href="https://www.youtube.com/watch?v=zRaw9uqJMH4&t=107s&ab_channel=JaimeAfterdark" className="card card-job">
        <div className="card-content">
            <img src={Icon} alt="icon-job" className="icon-job" />
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text tags">{props.tags}</p>
        </div>
    </a>
    )
}