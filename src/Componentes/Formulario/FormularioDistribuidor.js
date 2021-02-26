import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { endPoints } from '../../types/endPoints';
import axios from 'axios';




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

    const submit = async (e) => {
        e.preventDefault();

        // if (formValues.nombreDistribuidor ==="" || formValues.rfc==="" || formValues.telefono===""|| formValues.direccion==="" || formValues.horario==="") {
        //     console.log("Error");
        // }else{
        try {
            const peticion = await axios({
                method: 'post',
                url: `${endPoints}manager/distribuidor/`,
                // headers:{
                //     'X-CSRFToken': csrftoken
                // },
                data: {
                    "tanqueOfreceRenta": false,
                    "tanqueDisponibilidadRenta": 3,
                    "tanqueOfreceVenta": false,
                    "tanqueDisponibilidadVenta": 2,
                    "tanqueOfreceRecarga": true,
                    "tanqueDisponibilidadRecarga": 2,
                    "concentradorOfreceRenta": false,
                    "concentradorDisponibilidadRenta": 0,
                    "concentradorOfreceVenta": false,
                    "concentradorDisponibilidadVenta": 0,
                    "distribuidorId": 25
                }

            });

        } catch (error) {
            console.log(error);
        }
        // }
    }


    // Tanques:

    const [OfreceRentaTanques, setOfreceRentaTanques] = React.useState(props.data.tanques[0].renta);
    const handleChangeTipoRentaTanques = (event) => {
        setOfreceRentaTanques(event.target.value);
    };

    const [DisponibilidadRentaTanques, setDisponibilidadRentaTanques] = React.useState();
    const handleDisponibilidadRentaTanques = (event) => {
        setDisponibilidadRentaTanques(event.target.value);
    };


    const [OfreceVentaTanques, setOfreceVentaTanques] = React.useState(props.data.tanques[0].venta);
    const handleChangeTipoVentaTanques = (event) => {
        setOfreceVentaTanques(event.target.value);
    };

    const [DisponibilidadVentaTanques, setDisponibilidadVentaTanques] = React.useState();
    const handleDisponibilidadVentaTanques = (event) => {
        setDisponibilidadVentaTanques(event.target.value);
    };

    // Concentradores:

    const [OfreceRentaConcentradores, setOfreceRentaConcentradores] = React.useState(props.data.concentradores[0].renta);
    const handleChangeTipoRentaConcentradores = (event) => {
        setOfreceRentaConcentradores(event.target.value);
    };

    const [DisponibilidadRentaConcentradores, setDisponibilidadRentaConcentradores] = React.useState();
    const handleDisponibilidadRentaConcentradores = (event) => {
        setDisponibilidadRentaConcentradores(event.target.value);
    };


    const [OfreceVentaConcentradores, setOfreceVentaConcentradores] = React.useState(props.data.concentradores[0].venta);
    const handleChangeTipoVentaConcentradores = (event) => {
        setOfreceVentaConcentradores(event.target.value);
    };

    const [DisponibilidadVentaConcentradores, setDisponibilidadVentaConcentradores] = React.useState();
    const handleDisponibilidadVentaConcentradores = (event) => {
        setDisponibilidadVentaConcentradores(event.target.value);
    };


    return (
        <CreateBox onSubmit={(e) => {
            e.preventDefault();

            console.log(props.data);

        }}>

            <FormLine>
                <Subtitle>Tanques:</Subtitle>

            </FormLine>
            <FormLine>
                <BigTextField
                    id="OfreceRenta"
                    select
                    label="Ofrece Renta"
                    value={OfreceRentaTanques}
                    onChange={handleChangeTipoRentaTanques}

                >
                    {NivelesRenta.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </BigTextField>

                <BigTextField id="DisponibilidadRenta" label="Disponibilidad Renta"
                    value={DisponibilidadRentaTanques}
                    onChange={handleDisponibilidadRentaTanques} />
            </FormLine>

            <FormLine>
                <BigTextField
                    id="OfreceVenta"
                    select
                    label="Ofrece Venta"
                    value={OfreceVentaTanques}
                    onChange={handleChangeTipoVentaTanques}

                >
                    {NivelesVenta.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </BigTextField>

                <BigTextField id="DisponibilidadVenta" label="Disponibilidad Venta"
                    value={DisponibilidadVentaTanques}
                    onChange={handleDisponibilidadVentaTanques} />
            </FormLine>



            <FormLine>
                <Subtitle>Concentradores:</Subtitle>
            </FormLine>
            <FormLine>
                <BigTextField
                    id="OfreceRenta"
                    select
                    label="Ofrece Renta"
                    value={OfreceRentaConcentradores}
                    onChange={handleChangeTipoRentaConcentradores}

                >
                    {NivelesRenta.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </BigTextField>

                <BigTextField id="DisponibilidadRenta" label="Disponibilidad Renta"
                    value={DisponibilidadRentaConcentradores}
                    onChange={handleDisponibilidadRentaConcentradores} />
            </FormLine>

            <FormLine>
                <BigTextField
                    id="OfreceVenta"
                    select
                    label="Ofrece Venta"
                    value={OfreceVentaConcentradores}
                    onChange={handleChangeTipoVentaConcentradores}

                >
                    {NivelesVenta.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </BigTextField>

                <BigTextField id="DisponibilidadVenta" label="Disponibilidad Venta"
                    value={DisponibilidadVentaConcentradores}
                    onChange={handleDisponibilidadVentaConcentradores} />
            </FormLine>

            <FormLine>
                <Button variant="contained" color="primary" type='submit'>
                    Actualizar
                </Button>
            </FormLine>

        </CreateBox>


    )
}

