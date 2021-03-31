import React,{useContext} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import App from '../App';
import { FormularioDist } from '../Componentes/FormularioDist';
import Dashboard from '../Componentes/Manager/Dashboard';
import SignIn from '../Componentes/Login/SignIn';
import { PrivateRoute } from './PrivateRoute';
import {useSelector} from "react-redux";
import { Indexador } from '../Indexador';

export const AppRouter = () => {
    const state = useSelector( state => state.authReducer );
    return (    
        <Router>
            <div>    
                <Switch> 
                    <Route exact path="/login" component={SignIn} />                   
                    {/* <PrivateRoute path="/manager" component={Dashboard} isAutenticated={state.logged} /> */}
                    <Route exact path="/:id/manager" component={Dashboard} />
                    <Route exact path="/:id/oxigeno/formulario" component={FormularioDist} />
                    <Route exact path="/:id" component={App} />
                    <Route exact path="/"           component={Indexador} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
