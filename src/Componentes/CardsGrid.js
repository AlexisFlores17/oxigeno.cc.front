import React, { useState, useEffect } from 'react';
import MyCard from "./MyCard.js"
import data from '../img/data.json'
import {useSelector} from "react-redux";

export default function CardsGrid(props) {  
  const state = useSelector( state => state.filtrosAvanzados );  
  const [filteredData, setFilteredData] = useState(data)  
  
  useEffect(() => {
    setFilteredData(data)
    console.log(state)
    if(state.domicilioSwitch){
      setFilteredData(data.filter(distribuidor => distribuidor.a_domicilio === true))
    } else if(state.tarjetaSwitch){
      setFilteredData(data.filter(distribuidor => distribuidor.pago_con_tarjeta === true))      
    }else if(state.tanqueVenta){
      setFilteredData(data.filter(distribuidor => distribuidor.tanques[0].disponibilidad_venta > 0))      
    }
    else if(state.tanqueRenta){
      setFilteredData(data.filter(distribuidor => distribuidor.tanques[0].disponibilidad_renta > 0))      
    }
    else if(state.tanqueRecarga){
      setFilteredData(data.filter(distribuidor => distribuidor.tanques[0].disponibilidad_recarga > 0))      
    }
    else if(state.concentradorRenta){
      setFilteredData(data.filter(distribuidor => distribuidor.concentradores[0].disponibilidad_renta > 0))      
    }
    else if(state.concentradorVenta){
      setFilteredData(data.filter(distribuidor => distribuidor.concentradores[0].disponibilidad_venta > 0))      
    }

  }, [state])

  const distribuidores_con_tanque = data.filter(distribuidor => distribuidor.tanques[0] != null);  //TODO:quitar este filtro
  const distribuidores_con_concentradores = data.filter(distribuidor => distribuidor.concentradores[0] != null);  //TODO:quitar este filtro
  const distribuidores_completos = data.filter(distribuidor => distribuidor.tanques[0] != null && distribuidor.concentradores[0] != null);  //TODO:quitar este filtro
  
  return (
    <div className="tarjetas-container col-12 col-md-9" >
      {filteredData.map((distribuidor) =>
        <MyCard 
          key={distribuidor.nombre_distribuidor}
          distribuidor = {distribuidor}
        />
      )}
      
    </div>
  );
  
}
