import React,{ useEffect, useState} from 'react';
import { endPoints } from '../../types/endPoints';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';

export const MainContentIndexador = () =>{

    const [data, setData] = useState([]); 
    const [cargado, setCargado] = useState(1); // 0 = error, 1 = cargando, 2 = success
    const endPoint = `${endPoints}estados`;

    useEffect(() => {
        getEstados()
    }, [])

    async function getEstados() {

        
        try {
        
          const dataPeticion = await axios.get(endPoint,{
          });

          const dataBase= await dataPeticion.data;
          setData(dataBase);

          console.log(dataBase);
          setCargado(2);
        } catch (error) {
          console.log(error)
          setCargado(0);
        }
      }

    if( cargado === 2 ){  
        return(
            <div className="main-container-indexador col-12">
                <div className="tituloMainContent-indexador col-xs-10 col-md-9">
                    <h1 className="tituloContent-indexador" >¿En qué ciudad te encuentras?</h1>
                    <p className="textoContent-indexador">
                        Este es un listado de ciudades en donde está disponible 
                        el servicio de Oxígeno México CC. Cada sitio está administrado 
                        por un equipo local , si te interesa implementarlo en tu ciudad 
                        puedes contactarnos al correo <a className="hoverMain-indexador" href="mailto:oxigeno.cc.mx@gmail.com">oxigeno.cc.mx@gmail.com</a>
                    </p>
                </div>
                <div className="listadoMainContent-indexador" >
                    {

                        data.results.map( (estado)=>
                            <div key={estado.id} className="buttonContainer-indexador col-xs-12 col-sm-6 col-md-4">
                                <Link to="/distribuidores"><div className="buttonMainContent-indexador"> {estado.nombre}</div></Link>
                            </div>
                        )

                    }
                </div>
            </div>
        );
    }else if( cargado === 1){
        return(
          <div className="tarjetas-container circularProgress col-12 mt-5" >
            <CircularProgress className="circulo" size={100} />
          </div>
        )
      }else{
        return(
          <div className="tarjetas-container error col-12 mt-5" >
            <div className="cajaError">
              Lo sentimos , hubo un error al cargar los datos (553)
            </div>
          </div>
        )
      }
}