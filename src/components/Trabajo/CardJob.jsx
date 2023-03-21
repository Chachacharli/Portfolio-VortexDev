import React from "react";


import '../../styles/trabajo.css'



export const CardJob = (props) => {
    return(
        <a href={props.url} target='_blank' rel="noreferrer" className="card card-job">
        <div className="card-content">  
            <i className={`${props.icon} icon-card-job`}></i>
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text tags">{props.tags}</p>
        </div>
    </a>
    )
}

