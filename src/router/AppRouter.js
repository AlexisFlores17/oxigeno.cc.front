import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import App from '../App';
import { FormularioDist } from '../Componentes/FormularioDist';
import Dashboard from '../Componentes/Manager/Dashboard';

export const AppRouter = () => {
    return (
        <Router>
            <div>    
                <Switch>
                    <Route exact path="/oxigeno/formulario" component={FormularioDist} />
                    <Route exact path="/manager" component={Dashboard} />
                    <Route exact path="/"           component={App} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
