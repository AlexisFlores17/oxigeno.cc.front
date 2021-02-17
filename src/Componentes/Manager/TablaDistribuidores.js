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
  const [cargado, setCargado] = useState(false)
  const [data, setData] = useState([]); 

  useEffect(() => {
    getData();
  },[]);

  async function getData() {
    try {
      const dataPeticion = await axios.get(`${endPoints}data`,{});
      const dataBase= await dataPeticion.data;
      setData(dataBase.results);
      console.log(dataBase.results);
      if (dataPeticion.status === 200 ) {
        setCargado(true);
      }
      else{
        setCargado(false);
      }
    } catch (error) {
      
      console.log(error)
    }
  }

  return (
    <>
      { cargado?
        <Paper className={classes.paper}>
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
              {data?.map((distribuidor) => (
                  <TableRow key={distribuidor.id}>
                    <TableCell component="th" scope="row">
                      {distribuidor.nombre_distribuidor}
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
        </Paper>:
        <div className="managerContainer circularProgressManager col-md-12 col-12" >
          <CircularProgress className="circulo" size={200} />
        </div>

      }
    </>
  );
}
