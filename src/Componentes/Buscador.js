import React from 'react';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';



export const Buscador = () =>{

    return(
        <div className="Buscador" >
            <div className="buscador-container" >
                <div className="buscador-sombra" >
                    <div className="ContenedorMenus">
                        <div className="BuscadorDropDownEstado">
                            <FormControl>
                                <InputLabel className="InputCiudad">Selecciona tu Ciudad</InputLabel>
                                <Select className="InputCiudadCuadro">
    
                                </Select>
                            </FormControl>
                        </div>
                        <div className="BuscadorDropDownCiudad">
                            <FormControl >
                                <InputLabel className="InputEstado">Selecciona tu Delegación</InputLabel>
                                <Select className="InputEstadoCuadro">
                                    <option className="TextoOpciones" value={10}>Ten</option>
                                    <option className="TextoOpciones" value={20}>Twenty</option>
                                    <option className="TextoOpciones" value={30}>Thirty</option>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className="BotonBuscar">
                        <Button variant="outlined" className="Boton">
                            Buscar
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}