import React, { useEffect, useState } from 'react';
import { endPoints } from '../../types/endPoints';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import dateFormat from "dateformat";
import { useDispatch } from 'react-redux';
import { paginaDistribuidor } from '../../actions/paginaActions';
import swal from 'sweetalert';
import {TextField } from '@material-ui/core';
import {useForm} from '../../hooks/useForm';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  }
}));

export default function TablaDistribuidores() {
  const classes = useStyles();
  const [cargado, setCargado] = useState(false);
  const [buscar, setBuscar] = useState(false);
  const [restablecer, setRestablecer] = useState(false)
  const [data, setData] = useState([]); 
  const dispatch = useDispatch();
  const clickPagina=(id)=>{
    dispatch(paginaDistribuidor(id));
  }

  const initialForm = {
    buscar: ''
  }
  const [ formValues, handleInputChange ] = useForm( initialForm );

  const onClickButtonBuscar =(e)=>{
    e.preventDefault();
    getDataFiltro();
    setData({})
  }

  useEffect(() => {
    getData();
  },[]);

  async function getDataFiltro() {
    setRestablecer(true);
    try {
      const dataPeticion = await axios.get(`${endPoints}data`,{
        params:{
          nombreComo: formValues.buscar
        }
      });
      
      const dataBase= await dataPeticion.data;
      setData(dataBase.results);

      if (dataPeticion.status === 200 ) {
        setCargado(true);
        setRestablecer(false);
      }
      else{
        setCargado(false);
      }
    } catch (error) {
      swal("¡Ups!", "Lo sentimos, hubo un error al cargar distribuidores. Por favor intente más tarde", "error");
      console.log(error)
    }
  }

  async function getData() {
    setRestablecer(true);
    try {
      const dataPeticion = await axios.get(`${endPoints}data`,{});
      const dataBase= await dataPeticion.data;
      setData(dataBase.results);

      if (dataPeticion.status === 200 ) {
        setCargado(true);
        setRestablecer(false);
      }
      else{
        setCargado(false);
      }
    } catch (error) {
      swal("¡Ups!", "Lo sentimos, hubo un error al cargar distribuidores. Por favor intente más tarde", "error");
      console.log(error)
    }
  }

  return (
    <>
      { cargado?
      <>
        <div className="containerBuscadorManager">
          <TextField
            className="managerTextField"
            id="outlined-full-width"
            label="Buscar"
            style={{ margin: 8 }}
            placeholder="Nombre Distribuidor"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            name="buscar"
            onChange={handleInputChange}
            variant="outlined"
            autoComplete="off"
          />
          <div className="botonBuscar">
            <button
              className="btn btn-primary"
              onClick={(e)=>onClickButtonBuscar(e)}
              disabled={buscar}
            >
              Buscar
            </button>
          </div>
          <div className="botonRestablecer">
            <button
              className="btn btn-success"
              onClick={(e)=>getData()}
              disabled={restablecer}
            >
              Restablecer
            </button>
          </div>
        </div>
        <Paper className={classes.paper}>
          {data.length> 0 ? 
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><span className="headerForm" >Nombre</span></TableCell>
                    <TableCell align="right"><span className="headerForm" >Telefono</span></TableCell>
                    <TableCell align="right"><span className="headerForm" >Ultima Actualización</span></TableCell>
                  </TableRow>
                </TableHead>
                  <TableBody>
                    {data.map((distribuidor) => (
                      <TableRow key={distribuidor.id}>
                        <TableCell component="th" scope="row">
                          <div onClick={()=>clickPagina(distribuidor.id)} className="nombreForm" >{distribuidor.nombre_distribuidor}</div>
                        </TableCell>
                        <TableCell align="right">{<a className="telForm" href={distribuidor.telefono ==="0" ? "#":`tel:${distribuidor.telefono}`}>{distribuidor.telefono ==="0" ?<span>No hay Teléfono</span>:distribuidor.telefono}</a>}</TableCell>
                        <TableCell align="right">
                          {dateFormat(`${distribuidor.ultima_actualizacion}`, "mmm dd yyyy")} a las {dateFormat(`${distribuidor.ultima_actualizacion}`, "HH:MM:ss")}
                        </TableCell>
                      </TableRow>
                    ))} 
                  </TableBody>
              </Table>
            </TableContainer>
            :<div className="sinResultados">No se encontraron resultados</div>
          }
        </Paper>
        </>:
        <div className="managerContainer circularProgressManager col-md-12 col-12" >
          <CircularProgress className="circulo" size={200} />
        </div>

      }
    </>
  );
}
