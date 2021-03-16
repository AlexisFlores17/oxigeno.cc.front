import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { endPoints } from '../../types/endPoints';
import axios from 'axios';
import {useSelector} from "react-redux";




const BigTextField = styled(TextField)({
    width: '100%',
    marginRight: '5% !important',
    marginLeft: '5% !important'

})

const Subtitle = styled(Typography)({
    width: '100%',
    fontSize: '25px',
    marginLeft: '2% !important',
    marginTop: '-3% !important',
    marginBottom: '-10% !important',
    textAlign: 'center'

})

const CreateBox = styled.form({

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexWrap: 'noWrap',
    backgroundColor: 'white',
    paddingTop: '1%',
    paddingBottom: '1%',
    width: '60%',
    marginLeft: 'Auto',
    marginRight: 'Auto'

})

const FormLine = styled.span({

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'noWrap',
    marginTop: '5%',
    marginBottom: '5%',

})

const NivelesRenta = [
    {
        value: true,
        label: 'Sí',
    },
    {
        value: false,
        label: 'No',
    },
]
    ;

const NivelesVenta = [
    {
        value: true,
        label: 'Sí',
    },
    {
        value: false,
        label: 'No',
    },
]
    ;




export default function FormularioDistribuidor(props) {

    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    const csrftoken = getCookie('csrftoken');

    const state = useSelector( state => state.authReducer );
    const submit = async (e) => {
        e.preventDefault();

        // if (formValues.nombreDistribuidor ==="" || formValues.rfc==="" || formValues.telefono===""|| formValues.direccion==="" || formValues.horario==="") {
        //     console.log("Error");
        // }else{
        try {
            const peticion = await axios({
                method: 'post',
                url: `${endPoints}manager/distribuidor/`,
                headers:{
                    'Authorization': `JWT ${state.access}`,
                    'X-CSRFToken': csrftoken
                },
                data: {
                    "tanqueOfreceRenta": OfreceRecargaTanques,
                    "tanqueDisponibilidadRenta": DisponibilidadRentaTanques,
                    "tanqueOfreceVenta": OfreceVentaTanques,
                    "tanqueDisponibilidadVenta": DisponibilidadVentaTanques,
                    "tanqueOfreceRecarga": OfreceRecargaTanques,
                    "tanqueDisponibilidadRecarga": DisponibilidadRecargaTanques,
                    "concentradorOfreceRenta": OfreceRentaConcentradores,
                    "concentradorDisponibilidadRenta": DisponibilidadRentaConcentradores,
                    "concentradorOfreceVenta": OfreceVentaConcentradores,
                    "concentradorDisponibilidadVenta": DisponibilidadVentaConcentradores,
                    "distribuidorId": props.distribuidorId,
                    "notas":notasPublicas
                }

            });

            console.log(peticion);

        } catch (error) {
            console.log(error);
        }
        // }
    }


    // Tanques:
    const [OfreceRentaTanques, setOfreceRentaTanques] = React.useState(props.data.tanques[0]?.renta);
    const handleChangeTipoRentaTanques = (event) => {
        setOfreceRentaTanques(event.target.value);
    };

    const [DisponibilidadRentaTanques, setDisponibilidadRentaTanques] = React.useState(props.data.tanques[0]?.disponibilidad_renta);
    const handleDisponibilidadRentaTanques = (event) => {
        setDisponibilidadRentaTanques(event.target.value);
    };


    const [OfreceVentaTanques, setOfreceVentaTanques] = React.useState(props.data.tanques[0]?.venta);
    const handleChangeTipoVentaTanques = (event) => {
        setOfreceVentaTanques(event.target.value);
    };

    const [DisponibilidadVentaTanques, setDisponibilidadVentaTanques] = React.useState(props.data.tanques[0]?.disponibilidad_venta);
    const handleDisponibilidadVentaTanques = (event) => {
        setDisponibilidadVentaTanques(event.target.value);
    };

    const [OfreceRecargaTanques, setOfreceRecargaTanques] = React.useState(props.data.tanques[0]?.recarga);
    const handleChangeTipoRecargaTanques = (event) => {
        setOfreceRecargaTanques(event.target.value);
    };

    const [DisponibilidadRecargaTanques, setDisponibilidadRecargaTanques] = React.useState(props.data.tanques[0]?.disponibilidad_recarga);
    const handleDisponibilidadRecargaTanques = (event) => {
        setDisponibilidadRecargaTanques(event.target.value);
    };


    // Concentradores:

    const [OfreceRentaConcentradores, setOfreceRentaConcentradores] = React.useState(props.data.concentradores[0]?.renta);
    const handleChangeTipoRentaConcentradores = (event) => {
        setOfreceRentaConcentradores(event.target.value);
    };

    const [DisponibilidadRentaConcentradores, setDisponibilidadRentaConcentradores] = React.useState(props.data.concentradores[0]?.disponibilidad_renta);
    const handleDisponibilidadRentaConcentradores = (event) => {
        setDisponibilidadRentaConcentradores(event.target.value);
    };


    const [OfreceVentaConcentradores, setOfreceVentaConcentradores] = React.useState(props.data.concentradores[0]?.venta);
    const handleChangeTipoVentaConcentradores = (event) => {
        setOfreceVentaConcentradores(event.target.value);
    };

    const [DisponibilidadVentaConcentradores, setDisponibilidadVentaConcentradores] = React.useState(props.data.concentradores[0]?.disponibilidad_venta);
    const handleDisponibilidadVentaConcentradores = (event) => {
        setDisponibilidadVentaConcentradores(event.target.value);
    };

    const [notasPublicas, setNotasPublicas] = React.useState(props.data.notas);
    const handlenotasPublicas = (event) => {
        setNotasPublicas(event.target.value);
    };


    return (
        <CreateBox onSubmit={(e) => {
            e.preventDefault();
        }} 
            className="formDistribuidores"
        >

            <FormLine> 
                <Subtitle className="tituloFormularioAdmin">Tanques:</Subtitle>
 
            </FormLine>
            <FormLine>
                <BigTextField
                    id="OfreceRenta"
                    select
                    label="Ofrece Renta"
                    value={OfreceRentaTanques}
                    onChange={handleChangeTipoRentaTanques}
                    className="textFieldOfrece"
                >
                    {NivelesRenta.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </BigTextField>

                <BigTextField id="DisponibilidadRenta" label="Disponibilidad Renta"
                    value={DisponibilidadRentaTanques}
                    onChange={handleDisponibilidadRentaTanques} 
                    className="textFieldDisponibilidad"
                />
                    
            </FormLine>

            <FormLine>
                <BigTextField
                    id="OfreceVenta"
                    select
                    label="Ofrece Venta"
                    value={OfreceVentaTanques}
                    onChange={handleChangeTipoVentaTanques}
                    className="textFieldOfrece"
                >
                    {NivelesVenta.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </BigTextField>

                <BigTextField id="DisponibilidadVenta" label="Disponibilidad Venta"
                    value={DisponibilidadVentaTanques}
                    onChange={handleDisponibilidadVentaTanques} 
                    className="textFieldDisponibilidad"
                />
            </FormLine>

            <FormLine>
                <BigTextField
                    id="OfreceRecarga"
                    select
                    label="Ofrece Recarga"
                    value={OfreceRecargaTanques}
                    onChange={handleChangeTipoRecargaTanques}
                    className="textFieldOfrece"
                >
                    {NivelesVenta.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </BigTextField>

                <BigTextField id="DisponibilidadRecarga" label="Disponibilidad Recarga"
                    value={DisponibilidadRecargaTanques}
                    onChange={handleDisponibilidadRecargaTanques} 
                    className="textFieldDisponibilidad"
                />
            </FormLine>

            <FormLine>
                <Subtitle  className="tituloFormularioAdmin">Concentradores:</Subtitle>
            </FormLine>
            <FormLine>
                <BigTextField
                    id="OfreceRenta"
                    select
                    label="Ofrece Renta"
                    value={OfreceRentaConcentradores}
                    onChange={handleChangeTipoRentaConcentradores}
                    className="textFieldOfrece"
                >
                    {NivelesRenta.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </BigTextField>

                <BigTextField id="DisponibilidadRenta" label="Disponibilidad Renta"
                    value={DisponibilidadRentaConcentradores}
                    onChange={handleDisponibilidadRentaConcentradores} 
                    className="textFieldDisponibilidad"
                />
            </FormLine>

            <FormLine>
                <BigTextField
                    id="OfreceVenta"
                    select
                    label="Ofrece Venta"
                    value={OfreceVentaConcentradores}
                    onChange={handleChangeTipoVentaConcentradores}
                    className="textFieldOfrece"
                >
                    {NivelesVenta.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </BigTextField>

                <BigTextField id="DisponibilidadVenta" label="Disponibilidad Venta"
                    value={DisponibilidadVentaConcentradores}
                    onChange={handleDisponibilidadVentaConcentradores} 
                    className="textFieldDisponibilidad"    
                />
            </FormLine>

            <FormLine>
                <BigTextField id="notasPublicas" label="Notas"
                    value={notasPublicas}
                    onChange={handlenotasPublicas} />
            </FormLine>
            <FormLine>
                <Button variant="contained" color="primary" type='submit' onClick={(e)=>{submit(e)}}>
                    Actualizar
                </Button>
            </FormLine>

        </CreateBox>


    )
}

