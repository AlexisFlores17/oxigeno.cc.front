import React, { useState, useEffect } from 'react';
import MyCard from "./MyCard.js"
import data from '../img/data.json'
import {useSelector} from "react-redux";

export default function CardsGrid(props) {  

  const state = useSelector( state => state.filtrosAvanzados );
  
  const [filteredData, setFilteredData] = useState(data)
  

  let filters = [state.domicilioSwitch, state.tarjetaSwitch]


  useEffect(() => {
    setFilteredData(data)
    
    if(state.domicilioSwitch){
      setFilteredData(data.filter(distribuidor => distribuidor.a_domicilio == true))
    } else if(state.tarjetaSwitch){
      // console.log("success")
      setFilteredData(data.filter(distribuidor => distribuidor.pago_con_tarjeta == true))
      
    }
    
    
  }, [state])


  const distribuidores_con_tanque = data.filter(distribuidor => distribuidor.tanques[0] != null);  //TODO:quitar este filtro
  const distribuidores_con_concentradores = data.filter(distribuidor => distribuidor.concentradores[0] != null);  //TODO:quitar este filtro
  const distribuidores_completos = data.filter(distribuidor => distribuidor.tanques[0] != null && distribuidor.concentradores[0] != null);  //TODO:quitar este filtro


  
  
  return (
    <div className="tarjetas-container col-sm-9" >
      {filteredData.map((distribuidor) =>
        <MyCard 
          key={distribuidor.nombre_distribuidor}
          distribuidor = {distribuidor}
        />
      )}
      
    </div>
  );
  
}
