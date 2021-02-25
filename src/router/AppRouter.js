import React, { useContext } from 'react';
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
import { useSelector } from "react-redux";

export const AppRouter = () => {
    const state = useSelector(state => state.authReducer);

    return (
        <Router>
            <div>
                <Switch>

                    {/* <PrivateRoute path="/manager" component={Dashboard} isAutenticated={state.logged} /> */}
                    <Route exact path="/manager" component={Dashboard} />
                    <Route exact path="/oxigeno/formulario" component={FormularioDist} />
                    <Route exact path="/login" component={SignIn} />
                    <Route exact path="/" component={App} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
