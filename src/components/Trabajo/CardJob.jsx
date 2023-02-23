import React from "react";

import '../../styles/trabajo.css'

import Icon from '../../assets/icons/NNAL.png'

export const CardJob = (props) => {
    return(
        <a href={props.url} target='_blank' rel="noreferrer" className="card card-job">
        <div className="card-content">
            <img src={Icon} alt="icon-job" className="icon-job" />
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text tags">{props.tags}</p>
        </div>
    </a>
    )
}

