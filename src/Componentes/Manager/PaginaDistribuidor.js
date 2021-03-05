import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { endPoints } from '../../types/endPoints';
import swal from 'sweetalert';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { tablaDistribuidor } from '../../actions/paginaActions';
import FormularioDistribuidor from './FormularioDistribuidor';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const BigText = styled(Typography)({
  width: '100%',
  fontWeight: 'bold',
  fontSize: '30px',
  marginBottom: '2% !important',
  textAlign: 'center'

})


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
          <BigText>
            <ArrowBackIcon className="mr-3 buttonBackDist" onClick={() => onClickRegresar()} />
            {dataDistribuidor.nombre_distribuidor}
          </BigText>
          <FormularioDistribuidor data={dataDistribuidor} />
        </> : <div>Cargando</div>} <br></br>
    </div>
  )
}
