import React from "react";


export const CardCarrousel = (props)=>{
    return(

        <div className="card card-carrousel">
            <img className="img-carr" src={require('../../assets/habilidades/' + props.imagen)} alt="" />
        </div>
        
    )
}