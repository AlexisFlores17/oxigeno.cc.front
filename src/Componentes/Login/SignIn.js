import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { endPoints } from '../../types/endPoints';
import {useForm} from '../../hooks/useForm';
import swal from 'sweetalert';
import {useDispatch} from "react-redux";
import {authLogin} from '../../actions/authActions';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {''}
      <Link color="inherit" href="https://material-ui.com/">
        OxigenoMéxico.cc
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn({history}) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const initialForm = {
    email: '',
    password: '',
  }
  const [ formValues, handleInputChange, reset ] = useForm( initialForm );

  const [botonActivado, setBotonActivado] = useState(false);

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

  const onClickSubmit = async(e)=>{
    e.preventDefault();
    if(formValues.email==="" || formValues.password ===""){
      swal("¡Alerta!", "Por favor llene los campos Requeridos", "warning");
    }else{
      setBotonActivado(true);
      try {
        const peticion= await axios({
            method: 'post',
            url: `${endPoints}manager/login/`,
            headers:{
              'X-CSRFToken': csrftoken
            },
            data: {
              email: formValues.email,
              password: formValues.password
            }

        });

        if (await peticion.status === 200) {

          const {refresh,access}=peticion.data;
          // localStorage.setItem("user",JSON.stringify(peticion.data));
          dispatch( authLogin(refresh,access));
          history.replace('/manager')
           
        }else{
            setBotonActivado(false)
            swal("¡Ups!", "Lo sentimos, hubo un error al hacer el registro. Por favor intente más tarde", "error");
        }

    } catch (error) {
        console.log(error)
        setBotonActivado(false);
        swal("¡Ups!", "Error al iniciar Sesión", "error");
    }
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            onChange={handleInputChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo Electronico"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            onChange={handleInputChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            disabled={botonActivado}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={(e)=>onClickSubmit(e)}
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
      <Box mt={3}>
        <Copyright />
      </Box>
    </Container>
  );
}
