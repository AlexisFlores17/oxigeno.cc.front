import React,{useEffect,useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { endPointsManager } from '../../types/endPoints';
import swal from 'sweetalert';
import axios from 'axios';

export const PaginaDistribuidor = () => {

    const state = useSelector( state => state.paginaReducer );

    useEffect(() => {
        getData();
      },[]);
    
      async function getData() {
        try {
          const dataPeticionInicial = await axios.get(`${endPointsManager}${state.id}`,{});
          console.log(dataPeticionInicial);

        } catch (error) {
          swal("¡Ups!", "Lo sentimos, hubo un error al cargar distribuidor. Por favor intente más tarde", "error");
          console.log(error)
        }
      }

    return (
        <div>
            Hola soy Distribuidor
        </div>
    )
}
