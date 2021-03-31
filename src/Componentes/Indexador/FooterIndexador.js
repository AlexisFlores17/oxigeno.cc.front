import React from 'react';
import logoLight from '../../img/logoLight.png';




export const FooterIndexador = () =>{

    return(
        <div className="footerContainer">
            <div className="footer">
                <div className="copyOxigeno">Oxigenocdmx.cc</div>
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