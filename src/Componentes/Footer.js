import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';



export const Footer = () =>{

    return(
            <Container className="footerContainer">
                <div className="copyOxigeno">&copy; Oxigeno.cc</div>
                <div className="refLsd"><a href="https://lsdlab.com.mx/" target="_blank">Administrado por Light & Sound Disruptive Lab</a></div>
            </Container>
    );
}