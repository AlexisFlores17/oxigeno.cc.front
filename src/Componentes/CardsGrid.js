import React, { useState, useEffect } from 'react';
import MyCard from "./MyCard.js"
import data from '../img/data.json'

export default function CardsGrid(props) {  
  
  const [filteredData, setFilteredData] = useState(data)
  
  const {    
      tanqueVenta,
      tanqueRenta,
      tanqueRecarga,
      concentradorVenta,
      concentradorRenta,       
      domicilioSwitch,
      tarjetaSwitch        
  } = props

  let filters = [domicilioSwitch, tarjetaSwitch]


  useEffect(() => {
    setFilteredData(data)
    
    if(domicilioSwitch){
      setFilteredData(data.filter(distribuidor => distribuidor.a_domicilio == true))
    }
    if(tarjetaSwitch){
      console.log("success")
      setFilteredData(data.filter(distribuidor => distribuidor.pago_con_tarjeta == true))
      
    }
    console.log(filteredData)
    
    
  }, [domicilioSwitch])


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
