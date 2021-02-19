import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Input from '@material-ui/core/Input';
import clsx from 'clsx';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { LineStyle } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import FormHelperText from '@material-ui/core/FormHelperText';



const BigTextField = styled(TextField)({
    width: '100%',
    marginRight: '5% !important',
    marginLeft: '5% !important'

})

const BigText = styled(Typography)({
    width: '100%',
    marginRight: '5% !important',
    marginLeft: '5% !important'

})

const BigPassword = styled(FormControl)({
    width: '100%',
    marginRight: '5% !important',
    marginLeft: '5% !important'

})

const SmallText = styled(Typography)({
    width: '30%',
    marginRight: '5% !important',
    marginLeft: '5% !important'

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

const Niveles = [
    {
        value: 'Si',
        label: 'Sí',
    },
    {
        value: 'No',
        label: 'No',
    },
]
    ;

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

export const ContenidoFormulario = () => {

    //checkbox bool - ofrece renta
    //int disponibilidad de venta
    //

    const [DisponibilidadVenta, setDisponibilidadVenta] = React.useState();
    const handleDisponibilidadVenta = (event) => {
        setDisponibilidadVenta(event.target.value);
    };

    const [OfreceRenta, setOfreceRenta] = React.useState();
    const handleChangeTipoRenta = (event) => {
        setOfreceRenta(event.target.value);
    };
    const [valueApellidoP, setValueApellidoP] = React.useState();
    const handleChangeApellidoP = (event) => {
        setValueApellidoP(event.target.value);
    };
    const [valueApellidoM, setValueApellidoM] = React.useState();
    const handleChangeApellidoM = (event) => {
        setValueApellidoM(event.target.value);
    };
    const [tipoNivel, setTipoNivel] = React.useState();
    const handleChangeTipoNivel = (event) => {
        setTipoNivel(event.target.value);
    };
    const [valueUT, setValueUT] = React.useState();
    const handleChangeValueUT = (event) => {
        setValueUT(event.target.value);
    };
    const [valueClave, setValueClave] = React.useState();
    const handleChangeClave = (event) => {
        setValueClave(event.target.value);
    };

    const [valueHelperText, setHelperText] = React.useState('');
    const [valueError, setError] = React.useState(false);

    const handleChangePassword = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });


        if (event.target.value == parseInt(event.target.value, 10)) {

            setHelperText('');
            setError(false)

        } else {
            setHelperText('Valor numerico');
            setError(true)
        }
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const UploadData = () => {
        fetch('http://localhost:8080/API/SetUsers', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(AllDataUsers())
        }).then((res) => console.log(res));
    }
    const history = useHistory();

    const AllDataUsers = () => {
        return {
            b01_us_Nombre: valueNombre,
            b01_us_Apellido: valueApellidoP + " " + valueApellidoM,
            b01_us_clave: valueClave,
            b01_us_password: values.password,
            b01_us_role: tipoNivel
        }

    }
    const BasicData = {
        b01_us_Nombre: 'Nombre',
        b01_us_Apellido: 'Apellidos',
        b01_us_clave: 'Clave',
        b01_us_password: 'Contraseña',
        b01_us_role: 'Rol'
    }


    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Se va a dar de Alta el Usuario:</h2>

            {Object.keys(AllDataUsers()).map(key =>
                <BigText key={key}>{BasicData[key] + " : " + AllDataUsers()[key]}</BigText>)}

            <FormLine>
                <Button to="/VisualizarAdmin" onClick={() => { UploadData(); handleClose(); history.push("/VisualizarAdmin"); }} variant="contained" color="primary" >Aceptar</Button>
                <Button onClick={handleClose} variant="contained" color="secondary" >Regresar</Button>
            </FormLine>

>>>>>>> Stashed changes
        </div>
    );



    return (
        <CreateBox onSubmit={(e) => {
            e.preventDefault();


            console.log(AllDataUsers())
            handleOpen()


        }}>
            <FormLine>
                <BigTextField
                    id="OfreceRenta"
                    select
                    label="Ofrece Renta"
                    value={tipoRenta}
                    onChange={handleChangeTipoRenta}

                >
                    {Niveles.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </BigTextField>

                <BigTextField id="DisponibilidadVenta" label="Disponibilidad Venta"
                    value={tipoDisponibilidad}
                    onChange={handleDisponibilidadVenta} />
            </FormLine>
            <FormLine>
                <BigTextField id="Clave" label="Clave"
                    value={valueClave}
                    onChange={handleChangeClave} />
            </FormLine>
            <FormLine>
                <BigPassword>
                    <InputLabel htmlFor="standard-adornment-password" >Password</InputLabel>
                    <Input


                        id="standard-adornment-password"

                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}

                        onChange={handleChangePassword('password')}

                        error={valueError}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    <FormHelperText id="component-helper-text">{valueHelperText}</FormHelperText>

                </BigPassword>
            </FormLine>
            <FormLine>

                <BigTextField id="UT" label="Unidad Territorial" value={valueUT} onChange={handleChangeValueUT} />
            </FormLine>
            <FormLine>
                <Button variant="contained" color="primary" type='submit'>
                    Crear
                </Button>
            </FormLine>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                disableBackdropClick='true'
            >
                {body}
            </Modal>
        </CreateBox>


    )
}