import React, { useState, useEffect } from 'react';
import  CardsGrid  from "./CardsGrid";
import { MenuLateral } from "./MenuLateral";


export const MainContent = () =>{
    const [tanqueVenta, setTanqueVenta] = useState(false)
    const [tanqueRenta, setTanqueRenta] = useState(false)
    const [tanqueRecarga, setTanqueRecarga] = useState(false)

    const [concentradorVenta, setConcentradorVenta] = useState(false)
    const [concentradorRenta, setConcentradorRenta] = useState(false)

    // checkbox y switches
    const [domicilioSwitch, setDomicilioSwitch] = useState(false)
    const [tarjetaSwitch, setTarjetaSwitch] = useState(false)

    const toggleCheckbox = e =>{

        switch (e) {
            case 0:
                setTanqueVenta(!tanqueVenta);
                break;
            case 1: 
                setTanqueRenta(!tanqueRenta);
                break;
            case 2:
                setTanqueRecarga(!tanqueRecarga);
                break;
            case 3: 
                setConcentradorVenta(!concentradorVenta);
                break;
            case 4: 
                setConcentradorRenta(!concentradorRenta);
                break;
            default:
                break;
        }
    }
    

    return(
        <div className="main-container col-12">
            <MenuLateral 
                toggleCheckbox={toggleCheckbox}                 
                setDomicilioSwitch={setDomicilioSwitch}
                setTarjetaSwitch = {setTarjetaSwitch}
                tanqueVenta = {tanqueVenta}
                tanqueRenta = {tanqueRenta}
                tanqueRecarga = {tanqueRecarga}
                concentradorVenta = {concentradorVenta}
                concentradorRenta = {concentradorRenta}
                domicilioSwitch = {domicilioSwitch}
                tarjetaSwitch = {tarjetaSwitch}
            />
            <CardsGrid 
                tanqueVenta = {tanqueVenta}
                tanqueRenta = {tanqueRenta}
                tanqueRecarga = {tanqueRecarga}
                concentradorVenta = {concentradorVenta}
                concentradorRenta = {concentradorRenta}
                domicilioSwitch = {domicilioSwitch}
                tarjetaSwitch = {tarjetaSwitch}
            />
        </div>
    );
}