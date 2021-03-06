import React from 'react';
import Imagen1 from '../img/imagen 1.png';
import Imagen2 from '../img/imagen 2.png';
import ImagenLocatel from '../img/locatel.png';
import logoLight from '../img/logoLight.png';
import { Link } from 'react-router-dom';
import {useParams } from "react-router";
import { useSelector } from 'react-redux';



export const Footer = () =>{

    const state = useSelector( state => state.filtrosAvanzadosOrigen );

    function topFunction() {
        document.body.scrollTop = 100; // For Safari
        document.documentElement.scrollTop = 100; // For Chrome, Firefox, IE and Opera
    }
    const {id}= useParams();
    return(
        <div className="footerContainer">
            <div className="footerFormDistribuidor">
                <p>
                    Si eres un distribuidor de oxígeno y 
                    te gustaría aparecer en nuestra base 
                    de datos da 
                    click <Link onClick={topFunction} to={`/${id}/oxigeno/formulario`}>aquí</Link> y llena el formulario de registro.
                </p>
            </div>
            <div className="footerPostman">
                <p className="textoPostman">¿Eres programador? puedes usar nuestra API de forma gratuita</p>
                <a href="https://app.getpostman.com/run-collection/3700d8f9db0ba674fc55" target="_blank"><div className="botonPostman">Pruébala en postman</div></a>
            </div>
            <div className="footerLocatel">
                <div>
                    <img src={Imagen1} alt="logo gobierno 1" className="imagen1 img-fluid"></img>   
                    <img src={Imagen2} alt="logo gobierno 2" className="imagen2 img-fluid"></img>           
                </div> 
                <img src={ state.footer } alt="logo locatel" className="imagenLocatelFooter img-fluid"></img>
            </div>
            <div className="footer">
                <div className="copyOxigeno"><a href="https://oxigenomexico.cc">Oxigenomexico.cc</a></div>
                <div className="refLsd">
                    <a href="https://lsdlab.com.mx/" rel="noreferrer" target="_blank">Administrado por Light & Sound Disruptive Lab</a>
                    <div className="contenedorImagen">
                        <a href="https://lsdlab.com.mx/" rel="noreferrer" target="_blank" ><img className="img-fluid imgLogoFooter" alt="logoLightAndSound" src={logoLight} ></img></a>
                    </div>
                </div>
            </div>
        </div>
    );
}