import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';
 

export const Header = () =>{

    const unClick = () =>{
        console.log("algo");
    }

    return(<>
        <div className="Header" >
            <div className="Triangulo-left animate__animated animate__fadeInUp"></div>
            <div className="Fondo1" >
                <div className="Triangulo-right animate__animated animate__fadeInUp"></div>
            </div>
            <div className="HeaderContenedorTexto">
                <div className="HeaderLogo" ></div>
                <div className="HeaderTitulo" ><div className="HeaderOxigeno" >oxígeno <span className="black">cc</span></div></div>
                <div className="HeaderTexto" >Información actualizada todos los días para comprar, rentar o recargar tanques de oxígeno en la Ciudad de México.</div>            
            </div>
            <div className="HeaderBotonesRedes animate__animated animate__fadeIn animate__duration-1s animate__delay-1s" >
                <div className="HeaderFacebook">
                    <FacebookIcon className="logofacebook" />
                    <div>Compartir por Facebook</div>
                </div>
                <div className="HeaderWhatsapp">
                    <WhatsAppIcon className="logowhatsapp" />
                    <div>Compartir por Whatsapp</div>
                </div>
                <div className="HeaderTwitter" onClick={unClick}>
                    <TwitterIcon className="logotwitter" />
                    <div>Compartir por Twitter</div>
                </div>
            </div>
        </div></>
    );
}