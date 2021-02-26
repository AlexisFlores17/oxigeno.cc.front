import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { endPoints } from '../../types/endPoints';
import swal from 'sweetalert';
import axios from 'axios';

import { tablaDistribuidor } from '../../actions/paginaActions';
import FormularioDistribuidor from '../Formulario/FormularioDistribuidor'


export const PaginaDistribuidor = () => {

  const state = useSelector(state => state.paginaReducer);
  const [dataDistribuidor, setDataDistribuidor] = useState({});
  const [cargado, setCargado] = useState(false);
  const dispatch = useDispatch();

  const onClickRegresar = () => {
    dispatch(tablaDistribuidor());
  }

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const dataPeticionInicial = await axios.get(`${endPoints}data/${state.id}`, {});
      const dataDistrib = await dataPeticionInicial.data;

      if (dataPeticionInicial.status === 200) {
        setDataDistribuidor(dataDistrib);
        setCargado(true);
      }

    } catch (error) {
      swal("¡Ups!", "Lo sentimos, hubo un error al cargar distribuidor. Por favor intente más tarde", "error");
      console.log(error)
    }
  }



  return (
    <div>
      { cargado ?        
      <>
        <div>{dataDistribuidor.nombre_distribuidor}</div>
        <FormularioDistribuidor />
      </> : <div>Cargando</div>} <br></br>
      <button className="btn btn-primary" onClick={() => onClickRegresar()}>Regresar</button>

    </div>
  )
}
