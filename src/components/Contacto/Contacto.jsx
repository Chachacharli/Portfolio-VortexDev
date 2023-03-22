import React, {useEffect} from "react";
import '../../styles/contacto.css'



export const Contacto = () =>{


    useEffect(()=>{
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
        <section id="Contacto" className="section-basic-bg">
            <h4 id="Heading-contacto"><p>Contactame</p></h4>
            <div className="container h-100 d-flex justify-content-center text-center"> 
            <div id="container-contacto" className="row h-100 d-flex justify-content-center ">

                <div className="col-md-4 d-flex justify-content-center flex-column align-items-center hidden">
                    <a href="https://github.com/Chachacharli" rel="noreferrer" target='_blank' className="card card-contacto">
                        <i class="bi bi-github"></i>
                    </a>
                    <h6 className="card-title">GitHub</h6>

                </div>
                <div className="col-md-4 d-flex justify-content-center flex-column align-items-center hidden">
                    <a href="https://www.linkedin.com/in/carlos-alberto-torres-cano/" rel="noreferrer" target='_blank' className="card card-contacto">
                        <i class="bi bi-linkedin"></i>  
                    </a>
                    <h6 className="card-title">Linkedin</h6>

                </div>
                <div className="col-md-4 d-flex justify-content-center flex-column align-items-center hidden">
                    <a href="https://github.com/Chachacharli" rel="noreferrer" target='_blank' className="card card-contacto">
                        <i class="bi bi-instagram"></i>
                    </a>
                    <h6 className="card-title">Instagram</h6>

                </div>

            </div>
            </div>
        </section>
    )

}
