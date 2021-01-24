import React from 'react';
import { Tarjetas } from "./Tarjetas";
import { MenuLateral } from "./MenuLateral";


export const MainContent = () =>{

    return(
        <div className="main-container col-12">
            <MenuLateral />
            <Tarjetas />
        </div>
    );
}