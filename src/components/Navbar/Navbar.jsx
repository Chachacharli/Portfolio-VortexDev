
import React, { useEffect } from "react";


import '../../styles/navbar.css'

const Navbar = () =>{

    return(
        <nav className="navbar navbar-expand-lg fixed-top bg-navbar">
            <div className="container-fluid">
            <div className="bd-navbar-toggle">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="bi" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
                </svg>
                <span className="d-none fs-6 pe-1">Browse</span>
            </button>
    </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="flex-nav">
                        <ul className="navbar-nav">
                            <li className="nav-item"><a className="nav-link" href="#SobreMi"> <span className="not-visible">{'{'}</span> Sobre mi <span className="not-visible">{'}'}</span></a> </li>
                            <li className="nav-item"><a className="nav-link" href="#Trabajo"><span className="not-visible">{'{'}</span>Trabajo<span className="not-visible">{'}'}</span></a></li>
                            <li className="nav-item"><a className="nav-link" href="#Habilidades"><span className="not-visible">{'{'}</span>Habilidades<span className="not-visible">{'}'}</span></a></li>
                            <li className="nav-item"><a className="nav-link" href="#Contacto"><span className="not-visible">{'{'}</span>Contacto<span className="not-visible">{'}'}</span></a></li>
                        </ul>
                    </div>  
            </div>
            </div>
        </nav>
    )
}


export default Navbar